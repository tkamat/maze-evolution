(ns maze-evolution.evolution
  (:require [cljs.core.async :refer [<! timeout]]
            [re-frame.core :as re-frame]
            [clojure.core.reducers :as reducers])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop]]
   [re-frame.core :as re-frame]))

(def population-size 64)
(def move-time 1)
(def individual-time (+ 50 (* 64 move-time)))
(def generation-time (* individual-time population-size))

(defn random-move
  "Generates a random move between :N, :S, :E, and :W"
  []
  (let [num (rand-int 4)]
    (cond (= num 0)
          :N
          (= num 1)
          :E
          (= num 2)
          :S
          (= num 3)
          :W)))

(defn move-if-eligible
  "Move an individual by a cardinal direction, if there isn't a wall."
  [direction maze-map current-position]
  (cond (= direction :N)
        (if (and
             (>= (-> current-position
                     first
                     dec) 0)
             (= 0 (-> maze-map
                      (nth (dec (first current-position)))
                      (nth (last current-position)))))
          [(dec (first current-position)) (last current-position)]
          current-position)
        (= direction :S)
        (if (and
             (<= (-> current-position
                     first
                     inc) 10)
             (= 0 (-> maze-map
                      (nth (inc (first current-position)))
                      (nth (last current-position)))))
          [(inc (first current-position)) (last current-position)]
          current-position)
        (= direction :E)
        (if (and
             (<= (-> current-position
                     last
                     inc) 20)
             (= 0 (-> maze-map
                      (nth (first current-position))
                      (nth (inc (last current-position))))))
          [(first current-position) (inc (last current-position))]
          current-position)
        (= direction :W)
        (if (and
             (>= (-> current-position
                     last
                     dec) 0)
             (= 0 (-> maze-map
                      (nth (first current-position))
                      (nth (dec (last current-position))))))
          [(first current-position) (dec (last current-position))]
          current-position)))

(defn create-initial-individual
  "Creates a sequence of random moves representing an initial individual"
  []
  (for [_ (range 0 64)]
    (random-move)
    ))
(defn create-initial-population
  "Creates a sequence of randomly generated individuals representing the original population"
  []
  (for [x (range 0 population-size)]
    {:id (str (gensym "individual")) :move-sequence (create-initial-individual) :fitness 0}))
(defn test-individual
  "Tests an individual through the maze using its move sequence"
  [move-sequence id]
  (re-frame/dispatch [:reset-position [0 1]])
  (go-loop [move-sequence move-sequence]
      (when-let [current-move (first move-sequence)]
        (re-frame/dispatch [:move-ball current-move])
        (<! (timeout move-time))
        (recur (rest move-sequence)))
      (re-frame/dispatch [:update-fitness [id @(re-frame/subscribe [:current-fitness])]])))
(defn test-population
  "Tests the entire population by looping through and testing each individual"
  [running]
  (go-loop [population @(re-frame/subscribe [:population])]
      (when-let [current-individual (first population)]
        (re-frame/dispatch [:set-new-move-sequence (:move-sequence current-individual)])
        (re-frame/dispatch [:set-new-unique-id (:id current-individual)])
        (test-individual (:move-sequence current-individual) (:id current-individual))
        (<! (timeout individual-time))
        (re-frame/dispatch [:next-individual])
        (recur (rest population)))))
(defn sort-and-prune-population
  "Kills the bottom half of the population and sorts the remaining individuals by
  fitness"
  [population]
  (take (/ population-size 2) (reverse (sort-by #(:fitness %) population))))

(defn have-child
  "Uses crossing over and mutation to create an offspring from two parents"
  [breeding-pair]
  (let [move-sequences (shuffle (map #(:move-sequence %) breeding-pair))
        baby-sequence
        (reduce (fn [new-baby-sequence baby-move]
                  (if (< (rand) (/ 1 64))
                    (conj new-baby-sequence (random-move))
                    (conj new-baby-sequence baby-move)))
                []
                (reduce
                 (fn [baby-sequence parent-move]
                   (let [sequence-not-full (< (count baby-sequence) 64)]
                     (cond
                       (and sequence-not-full (< (rand) (/ 1 32)))
                       (concat baby-sequence (take-last (- 64 (count baby-sequence)) (second move-sequences)))
                       sequence-not-full
                       (conj baby-sequence parent-move)
                       :else
                       baby-sequence)))
                 []
                 (first move-sequences)))]
    {:id (str (gensym "individual")) :move-sequence baby-sequence :fitness 0}))

(defn pair-and-reproduce
  "Pairs all members of the population and run have-child twice"
  [population]
  (let [parents (sort-and-prune-population population)]
    (reduce
     (fn [new-generation breeding-pair]
       (concat new-generation breeding-pair (map have-child (repeat 2 breeding-pair))))
     []
     (partition 2 (shuffle parents)))))
(defn create-new-generation
  "Creates a new population and updates state"
  [running]
  (reset! running true)
  (let [new-population (pair-and-reproduce @(re-frame/subscribe [:population]))]
    (re-frame/dispatch [:update-population new-population])
    (re-frame/dispatch [:next-generation])
    (re-frame/dispatch [:reset-individual])
    (re-frame/dispatch [:set-new-move-sequence (:move-sequence (first new-population))])
    (re-frame/dispatch [:set-new-unique-id (:id (first new-population))])
    (re-frame/dispatch [:reset-position [0 1]]))
  (reset! running false))

(defn continuously-evolve
  "Tests population in a loop and creates new generations continuously"
  [running]
  (test-population running)
  (js/setTimeout (fn []
                   (create-new-generation running)
                   (js/setTimeout #(continuously-evolve running) 500))
                 (+ generation-time 5000)))

(defn headless-evolution-test-and-get-maximum-fitness
  "Creates an initial population and tests it n times without a user interface.
  Returns a list containing the maximum fitness for every generation"
  [maze fitness-map n]
  (loop [i 1
         population (create-initial-population)
         max-fitness-list []]
    (let [fitness-list (->> population
                            (map :move-sequence)
                            (reducers/fold
                             (fn
                               ([] [])
                               ([position-list individual]
                                (conj position-list
                                      (reduce (fn [position direction]
                                                (move-if-eligible direction maze position))
                                              [0 1]
                                              individual)))))
                            (reduce (fn [fitness-list position]
                                      (conj fitness-list (get-in fitness-map position)))
                                    []))
          new-population (->> (range 0 (count fitness-list))
                              (map (fn [i] (update (nth population i) :fitness (fn [_] (nth fitness-list i)))))
                              (pair-and-reproduce))]
      (if (>= i n)
        max-fitness-list
        (recur (inc i) new-population (conj  max-fitness-list (apply max fitness-list)))))))
