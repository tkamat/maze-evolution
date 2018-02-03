(ns maze-evolution.evolution
  (:require [re-frame.core :as re-frame]))
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
  (for [x (range 0 64)]
    {:id (str (gensym "individual")) :move-sequence (create-initial-individual) :fitness 0})) 
(defn test-individual
  ([move-sequence id] (re-frame/dispatch [:reset-position [0 1]])
   (test-individual 0 move-sequence id))
  ([t move-sequence id] (let [current-move (nth move-sequence t)]
         (re-frame/dispatch [:move-ball current-move])
         (re-frame/dispatch [:update-fitness [id @(re-frame/subscribe [:current-fitness])]])
         (if (>= t 63)
           "Success"
           (js/setTimeout #(test-individual (inc t) move-sequence id) 3)))))
(defn test-population
  ([running] (reset! running true)
   (test-population running 0))
  ([running t] (let [population (re-frame/subscribe [:population])
             current-individual (nth @population t)]
         (re-frame/dispatch [:set-new-move-sequence (:move-sequence current-individual)])
         (re-frame/dispatch [:set-new-unique-id (:id current-individual)])
         (test-individual (:move-sequence current-individual) (:id current-individual))
         (if (>= t 63)
           (do (reset! running false)
             (re-frame/dispatch [:reset-individual]))
           (do
             (js/setTimeout (fn [] (re-frame/dispatch [:next-individual])
                              (test-population running (inc t))) 400))))))
(defn sort-and-prune-population
  []
  (let [population (re-frame/subscribe [:population])]
    (take 32 (reverse (sort-by #(:fitness %) @population)))))

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
                   (cond
                     (and (< (count baby-sequence) 64) (< (rand) (/ 1 32)))
                     (concat baby-sequence (take-last (- 64 (count baby-sequence)) (second move-sequences)))
                     (< (count baby-sequence) 64)
                     (conj baby-sequence parent-move)
                     :else
                     baby-sequence))
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
    (re-frame/dispatch [:set-new-move-sequence (:move-sequence (first new-population))])
    (re-frame/dispatch [:set-new-unique-id (:id (first new-population))])
    (re-frame/dispatch [:reset-position [0 1]]))
  (reset! running false))
