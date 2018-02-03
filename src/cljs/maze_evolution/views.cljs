(ns ^:figwheel-always maze-evolution.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [cljs.js]
            [cljs.pprint :refer [pprint]]
            [cljs.core.async :refer [<! timeout]]
            [maze-evolution.events :as events]
            [maze-evolution.subs :as subs]
            [maze-evolution.evolution :as evolution])
  (:use-macros [cljs.core.async.macros :only [go]])
  )
(defn title
  []
  [:div
   [:h1 "Maze Evolution"]
   [:h2 "created by Tushaar Kamat"]
   [:h3 @(re-frame/subscribe [:generation])]
   [:h3 @(re-frame/subscribe [:individual])]])
(defn create-rectangles [maze]
  (apply concat (loop [row 0
                       rectangles []]
                  (if (< row 11)
                    (recur (inc row)
                           (conj rectangles (loop [col 0 rectangles []]
                                              (if (< col 21)
                                                (if (= 1 (nth (nth maze row) col))
                                                  (recur
                                                   (inc col)
                                                   (conj rectangles
                                                         [:rect {:x (* 30 col) :y (* 30 row) :width 30 :height 30}]))
                                                  (recur (inc col) rectangles))
                                                rectangles))))
                    rectangles))))
(defn draw-maze
  []
  (let [maze (re-frame/subscribe [:maze-map])]
    (fn []
      [:svg {:width 630 :height 330 :id "maze"}
       (vec (cons :g (create-rectangles @maze)))])))
(defn draw-ball
  []
  (let [ball-position (re-frame/subscribe [:current-position])]
    (fn []
      [:div ][:circle {:style {:fill "red"} :r 12 :id "ball"
                :cx (+ 15 (* 30 (last @ball-position)))
                :cy (+ 15 (* 30 (first @ball-position)))}])))
(defn render-maze-and-ball []
  (conj ((draw-maze)) ((draw-ball))))
(def running (atom false))
(defn test-button []
  (fn []
    [:input {:type "button" :value "Test"
             :on-click (fn [] (if (false? @running)
                               (evolution/test-population running)))}]))
(defn new-generation-button []
  (fn []
    [:input {:type "button" :value "TO THE GULAGS!"
             :on-click #(evolution/create-new-generation running)}]))
(defn main-panel []
  [:div
   [title]
   [render-maze-and-ball]
   [test-button]
   [new-generation-button]
   [:pre (with-out-str (pprint (get-in @re-frame.db/app-db [:maze :current-position])))]
   ])
