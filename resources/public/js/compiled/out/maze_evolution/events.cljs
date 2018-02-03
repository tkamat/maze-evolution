(ns maze-evolution.events
  (:require [re-frame.core :as re-frame]
            [clojure.string :as str]
            [maze-evolution.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))
(defn move-if-eligible [direction maze-map current-position]
  (cond (= direction :N)
        (if (and
             (>= (dec (first current-position)) 0)
             (= 0 (nth (nth maze-map (dec (first current-position))) (last current-position))))
          [(dec (first current-position)) (last current-position)]
          current-position)
        (= direction :S)
        (if (and
             (<= (inc (first current-position)) 10)
             (= 0 (nth (nth maze-map (inc (first current-position))) (last current-position))))
          [(inc (first current-position)) (last current-position)]
          current-position)
        (= direction :E)
        (if (and
             (<= (inc (last current-position)) 20)
             (= 0 (nth (nth maze-map (first current-position)) (inc (last current-position)))))
          [(first current-position) (inc (last current-position))]
          current-position)
        (= direction :W)
        (if (and
             (>= (dec (last current-position)) 0)
             (= 0 (nth (nth maze-map (first current-position)) (dec (last current-position)))))
          [(first current-position) (dec (last current-position))]
          current-position)))
(re-frame/reg-event-db
 :move-ball
 (fn [db [_ direction]]
   (update-in db [:maze :current-position]
              (fn [current-position]
                (let [maze-map (get-in db [:maze :map])]
                  (move-if-eligible direction maze-map current-position))))))
(re-frame/reg-event-db
 :update-fitness
 (fn [db [_ [unique-id fitness]]]
   (update-in db [:evolution :population]
              (fn [population]
                (conj (filter #(not= (:id %) unique-id) population) (update-in
                                                                     (first (filter #(= (:id %) unique-id) population))
                                                                               [:fitness]
                                                                               (fn [old-fitness]
                                                                                 fitness))))))) 
(re-frame/reg-event-db
 :reset-position
 (fn [db [_ position]]
   (update-in db [:maze :current-position] (fn [old-position]
                                             position))))
(re-frame/reg-event-db
 :set-new-move-sequence
 (fn [db [_ move-sequence]]
   (update-in db [:maze :remaining-moves]
              (fn [old-move-sequence]
                move-sequence))))
(re-frame/reg-event-db
 :set-new-unique-id
 (fn [db [_ unique-id]]
   (update-in db [:maze :unique-id]
              (fn [old-id]
                unique-id))))

(re-frame/reg-event-db
 :update-population
 (fn [db [_ population]]
   (update-in db [:evolution :population]
              (fn [old-population]
                population))))

(re-frame/reg-event-db
 :next-generation
 (fn [db _]
   (update-in db [:evolution :generation]
              (fn [old-generation]
                (str "Generation " (inc (js/parseInt (last (str/split old-generation " ")))))))))
(re-frame/reg-event-db
 :next-individual
 (fn [db _]
   (update-in db [:evolution :individual]
              (fn [old-individual]
                (str "Individual " (inc (js/parseInt (last (str/split old-individual " ")))))))))
(re-frame/reg-event-db
 :reset-individual
 (fn [db _]
   (update-in db [:evolution :individual]
              (fn [old-individual]
                "Individual 1"))))
