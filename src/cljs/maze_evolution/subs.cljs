(ns maze-evolution.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :maze-map
 (fn [db]
   (get-in db [:maze :map])))
(re-frame/reg-sub
 :current-position
 (fn [db]
   (get-in db [:maze :current-position])))
(re-frame/reg-sub
 :remaining-moves
 (fn [db]
   (get-in db [:maze :remaining-moves])))
(re-frame/reg-sub
 :unique-id
 (fn [db]
   (get-in db [:maze :unique-id])))
(re-frame/reg-sub
 :fitness-map
 (fn [db]
   (get-in db [:maze :fitness-map])))
(re-frame/reg-sub
 :current-fitness
 :<- [:fitness-map]
 :<- [:current-position]
 (fn [[fitness-map current-position] _]
   (nth (nth fitness-map (first current-position)) (last current-position))))
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
