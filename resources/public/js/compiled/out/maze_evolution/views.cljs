(ns ^:figwheel-always maze-evolution.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [cljs.js]
            [cljs.core.async :refer [<! timeout]]
            [maze-evolution.events :as events]
            [maze-evolution.subs :as subs])
  (:use-macros [cljs.core.async.macros :only [go]])
  )
(defn title
  []
  [:div
   [:h1 "Maze Evolution"]
   [:h2 "created by Tushaar Kamat"]])
(defn create-rectangles [maze]
  (apply concat (loop [row 0
                       rectangles []]
                  (if (< row 11)
                    (recur (inc row)
                           (conj rectangles (loop [col 0 rectangles []]
                                              (if (< col 21)
                                                (if (= 1 (nth (nth maze row) col))
                                                  (recur (inc col) (conj rectangles [:rect {:x (* 30 col) :y (* 30 row) :width 30 :height 30}]))
                                                  (recur (inc col) rectangles))
                                                rectangles))))
                    rectangles)))) 
(defn draw-maze
  []
  (let [maze (re-frame/subscribe [:maze-map])]
    (fn []
      [:svg {:width 630 :height 330 :id "maze"}
       (conj (create-rectangles @maze) :g)])))
(defn draw-ball
  []
  (let [ball-position (re-frame/subscribe [:current-position])]
    (fn []
      [:circle {:style {:fill "red"} :r 12 :id "ball"
                :cx (+ 15 (* 30 (last @ball-position)))
                :cy (+ 15 (* 30 (first @ball-position)))}])))
(defn render-maze-and-ball []
  (conj ((draw-maze)) ((draw-ball))))
(defn move-ball-in-interval [remaining-moves]
  (doseq [move remaining-moves]
    (js/setTimeout (fn [] (re-frame/dispatch [:move-ball move])) 500))
  )
(defn button []
  (let [remaining-moves (re-frame/subscribe [:remaining-moves])] 
    (fn []
      [:input {:type "button" :value "CLICK!"
               :on-click #(move-ball-in-interval @remaining-moves)}])))
(defn main-panel []
  [:div
   [title]
   [render-maze-and-ball]
   [button]
   ])
