(ns maze-evolution.evolution
  (:require [cljs.core.async :refer [<! timeout]]
            [clojure.core.reducers :as reducers]
            [re-frame.core :as re-frame])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop]]
   [re-frame.core :as re-frame]))

(def num-of-moves 100)
(def population-size 100)
(def move-time 2)
(def individual-time (+ 300 (* num-of-moves move-time)))
(def generation-time (* individual-time population-size))
(def crossing-over-chance (/ 1 33))
(def mutation-chance (/ 1 num-of-moves))

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
  (for [_ (range 0 num-of-moves)]
    (random-move)))

(defn create-initial-population
  "Creates a sequence of randomly generated individuals representing the original
  population"
  []
  (for [x (range 0 population-size)]
    {:id (str (gensym "individual"))
     :move-sequence (create-initial-individual) :fitness 0}))

(defn test-individual
  "Tests an individual through the maze using its move sequence"
  [move-sequence id]
  (re-frame/dispatch [:reset-position [0 1]])
  (go-loop [move-sequence move-sequence]
    (when-let [current-move (first move-sequence)]
      (re-frame/dispatch [:move-ball current-move])
      (<! (timeout move-time))
      (recur (rest move-sequence)))
    (re-frame/dispatch [:update-fitness
                        [id @(re-frame/subscribe [:current-fitness])]])
    (re-frame/dispatch [:update-max-position])))

(defn test-population
  "Tests the entire population by looping through and testing each individual"
  []
  (go-loop [population @(re-frame/subscribe [:population])]
    (when-let [current-individual (first population)]
      (test-individual (:move-sequence current-individual) (:id current-individual))
      (<! (timeout individual-time))
      (re-frame/dispatch [:next-individual])
      (recur (rest population)))))

(defn calc-fitness
  "Calculates fitness using the maze position and a fitness map"
  [fitness-map current-position]
  (get-in fitness-map current-position))

#_(defn select-population
  "Kills the bottom half of the population and sorts the remaining individuals by
  fitness"
  [population]
  (take (/ population-size 2) (reverse (sort-by #(:fitness %) population))))

(defn select-fittest
  "Selects the fittest individual from the input pair"
  [pair]
  (if (> (:fitness (first pair))
         (:fitness (last pair)))
    (first pair)
    (last pair)))

(defn select-population
  "Kills the bottom half of the population and sorts the remaining individuals by
  fitness"
  [population]
  (->> population
       shuffle
       (partition 2)
       (map select-fittest)))

(defn cross-over
  "Combines two parent sequences by selecting a random point, splicing each parent
  sequence at that point, and combining them to form a new sequence."
  [parent-sequences]
  (let [length (count (first parent-sequences))]
    (reduce
     (fn [baby-sequence parent-move]
       (if (< (rand) crossing-over-chance)
         (reduced (concat baby-sequence (cross-over [(take-last
                                                      (- length (count baby-sequence))
                                                      (second parent-sequences))
                                                     (take-last
                                                      (- length (count baby-sequence))
                                                      (first parent-sequences))])))
         (conj baby-sequence parent-move)))
     []
     (first parent-sequences))))

(defn mutate
  "Loops through a move sequence and mutates points randomly, with the rate of
  mutation per move being the mutation chance variable"
  [move-sequence]
  (reduce (fn [new-baby-sequence baby-move]
            (if (< (rand) mutation-chance)
              (conj new-baby-sequence (random-move))
              (conj new-baby-sequence baby-move)))
          []
          move-sequence))

(defn have-child
  "Uses crossing over and mutation to create an offspring from two parents"
  [breeding-pair]
  (let [baby-sequence (->> breeding-pair
                           (map #(:move-sequence %))
                           shuffle
                           cross-over
                           mutate)]
    {:id (str (gensym "individual")) :move-sequence baby-sequence :fitness 0}))

(defn pair-and-reproduce
  "Pairs all members of the population and run have-child twice"
  [population]
  (let [parents (select-population population)]
    (reduce
     (fn [new-generation breeding-pair]
       (concat new-generation breeding-pair (map have-child (repeat 2 breeding-pair))))
     []
     (partition 2 (shuffle parents)))))

(defn create-new-generation
  "Creates a new population and updates state"
  []
  (let [new-population (pair-and-reproduce @(re-frame/subscribe [:population]))]
    (re-frame/dispatch [:update-population new-population])
    (re-frame/dispatch [:next-generation])
    (re-frame/dispatch [:reset-individual])
    (re-frame/dispatch [:reset-position [0 1]])))

(defn continuously-evolve
  "Tests population in a loop and creates new generations continuously"
  []
  (test-population)
  (js/setTimeout (fn []
                   (create-new-generation)
                   (js/setTimeout #(continuously-evolve) 500))
                 (+ generation-time 5000)))

(def run-through-maze
  "Runs the individual through the maze and returns the final position"
  (memoize (fn
             [individual maze]
             (reduce
              (fn [position direction]
                (move-if-eligible direction maze position))
              [0 1]
              individual))))

(defn quick-evolve
  "Tests population, sorts by fitness, breeds them, and evolves without the visual
  interface. Takes a maze vector, a map of the possible fitness values, and n,
  the number of generations to evolve. Returns a list of the maximum fitness
  values for each generation"
  [maze fitness-map n]
  (loop [i 0
         population (create-initial-population)
         max-fitness-list []]
    (let [fitness-list (->> population
                            (mapv :move-sequence)
                            (into [])
                            (reducers/fold
                             10
                             (fn combinef [& args] (into [] (apply concat args)))
                             (fn reducef [position-list individual]
                               (conj position-list
                                     (run-through-maze individual maze))))
                            (reducers/fold
                             10
                             (fn combinef [& args] (into [] (apply concat args)))
                             (fn reducef [fitness-list position]
                               (conj fitness-list
                                     (get-in fitness-map position)))))
          new-population (->> (range 0 (count fitness-list))
                              (map (fn [i] (update (nth population i)
                                              :fitness
                                              (fn [_] (nth fitness-list i)))))
                              (pair-and-reproduce))]
      (if (>= i n)
        max-fitness-list
        (recur (inc i)
               new-population
               (conj  max-fitness-list (apply max fitness-list)))))))

