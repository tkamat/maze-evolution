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
