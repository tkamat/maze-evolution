(ns maze-evolution.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :maze-map
 (fn [db]
   (get-in db [:maze :map])))
