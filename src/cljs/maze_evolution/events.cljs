(ns maze-evolution.events
  (:require [clojure.string :as str]
            [maze-evolution.evolution :as evolution]
            [maze-evolution.db :as db]
            [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :move-ball
 (fn [db [_ direction]]
   (update-in db [:maze :current-position]
              (fn [current-position]
                (let [maze-map (get-in db [:maze :map])]
                  (evolution/move-if-eligible direction maze-map current-position))))))
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

(re-frame/reg-event-db
 :change-tab
 (fn [db [_ new-tab]]
   (update-in db [:tab]
              (fn [old-tab]
                new-tab))))
(re-frame/reg-event-db
 :set-generations-to-run
 (fn [db [_ new-generations-to-run]]
   (update-in db [:evolution :generations-to-run]
              (fn [old-num]
                new-generations-to-run))))

(re-frame/reg-event-db
 :set-max-fitness-list
 (fn [db [_ new-max-fitness-list]]
   (update-in db [:evolution :max-fitness-list]
              (fn [old-list]
                new-max-fitness-list))))
