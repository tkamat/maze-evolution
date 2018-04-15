(ns maze-evolution.subs
  (:require [maze-evolution.evolution :as evolution]
            [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :maze-map
 (fn [db]
   (get-in db [:maze :map])))

(re-frame/reg-sub
 :current-position
 (fn [db]
   (get-in db [:maze :current-position])))

(re-frame/reg-sub
 :fitness-map
 (fn [db]
   (get-in db [:maze :fitness-map])))

(re-frame/reg-sub
 :current-fitness
 :<- [:fitness-map]
 :<- [:current-position]
 (fn [[fitness-map current-position] _]
   (evolution/calc-fitness fitness-map current-position)))

(re-frame/reg-sub
 :population
 (fn [db]
   (get-in db [:evolution :population])))
(re-frame/reg-sub
 :generation
 (fn [db]
   (get-in db [:evolution :generation])))
(re-frame/reg-sub
 :individual
 (fn [db]
   (get-in db [:evolution :individual])))

(re-frame/reg-sub
 :tab
 (fn [db]
   (get-in db [:tab])))

(re-frame/reg-sub
 :max-fitness-list
 (fn [db]
   (get-in db [:quick-evolution :max-fitness-list])))

(re-frame/reg-sub
 :generations-to-run
 (fn [db]
   (get-in db [:quick-evolution :generations-to-run])))

(re-frame/reg-sub
 :max-position
 (fn [db]
   (get-in db [:maze :max-position])))
