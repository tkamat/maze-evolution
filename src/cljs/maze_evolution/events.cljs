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
                (->> fitness
                     (fn [old-fitness])
                     (update-in
                      (first (filter #(= (:id %) unique-id) population))
                      [:fitness])
                     (conj (filter #(not= (:id %) unique-id) population)))))))
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
                (->> " "
                     (str/split old-generation)
                     last
                     js/parseInt
                     inc
                     (str "Generation "))))))
(re-frame/reg-event-db
 :next-individual
 (fn [db _]
   (update-in db [:evolution :individual]
              (fn [old-individual]
                (->> " "
                     (str/split old-individual)
                     last
                     js/parseInt
                     inc
                     (str "Individual "))))))
(re-frame/reg-event-db
 :reset-individual
 (fn [db _]
   (update-in db [:evolution :individual]
              (fn [old-individual]
                "Individual 1"))))
(re-frame/reg-event-db
 :add-to-fitness-list
 (fn [db [_ new-fitness]]
   (update-in db [:evolution :fitness-list]
              (fn [old-fitness-list]
                (conj old-fitness-list new-fitness)))))
