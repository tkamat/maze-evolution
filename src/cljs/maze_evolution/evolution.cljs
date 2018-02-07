(ns maze-evolution.evolution
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [re-frame.core :as re-frame]
            [cljs.core.async :refer [put! chan <! >! timeout close!]]))

(def population-size 64)
(def move-time 3)
(def individual-time (+ 300 (* 64 move-time)))
(def generation-time (* individual-time population-size))

(defn random-move []
  (let [num (rand-int 4)]
    (cond (= num 0)
          :N
          (= num 1)
          :E
          (= num 2)
          :S
          (= num 3)
          :W)))
(defn create-initial-individual []
  (for [_ (range 0 64)]
    (random-move)
    ))
(defn create-initial-population []
  (for [x (range 0 population-size)]
    {:id (str (gensym "individual")) :move-sequence (create-initial-individual) :fitness 0})) 
(defn test-individual
  [move-sequence id]
  (re-frame/dispatch [:reset-position [0 1]])
  (go-loop [move-sequence move-sequence]
      (when-let [current-move (first move-sequence)]
        (re-frame/dispatch [:move-ball current-move])
        (<! (timeout move-time))
        (recur (rest move-sequence)))
      (re-frame/dispatch [:update-fitness [id @(re-frame/subscribe [:current-fitness])]]))
  )
(defn test-population
  [running]
  (reset! running true)
  (go-loop [population @(re-frame/subscribe [:population])]
      (when-let [current-individual (first population)]
        (re-frame/dispatch [:set-new-move-sequence (:move-sequence current-individual)])
        (re-frame/dispatch [:set-new-unique-id (:id current-individual)])
        (test-individual (:move-sequence current-individual) (:id current-individual))
        (<! (timeout individual-time))
        (re-frame/dispatch [:next-individual])
        (recur (rest population))))
  (reset! running false))
(defn sort-and-prune-population
  []
  (let [population (re-frame/subscribe [:population])]
    (take (/ population-size 2) (reverse (sort-by #(:fitness %) @population)))))

(defn have-child
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
  []
  (let [parents (sort-and-prune-population)]
    (reduce
     (fn [new-generation breeding-pair]
       (concat new-generation breeding-pair (map have-child (repeat 2 breeding-pair))))
     []
     (partition 2 (shuffle parents)))))
(defn create-new-generation
  [running]
  (reset! running true)
  (let [new-population (pair-and-reproduce)]
    (re-frame/dispatch [:update-population new-population])
    (re-frame/dispatch [:next-generation])
    (re-frame/dispatch [:reset-individual])
    (re-frame/dispatch [:set-new-move-sequence (:move-sequence (first new-population))])
    (re-frame/dispatch [:set-new-unique-id (:id (first new-population))])
    (re-frame/dispatch [:reset-position [0 1]]))
  (reset! running false))

(defn continuously-evolve
  [running]
  (test-population running)
  (js/setTimeout (fn []
                   (create-new-generation running)
                   (js/setTimeout #(continuously-evolve running) 500))
                 (+ generation-time 5000)))
