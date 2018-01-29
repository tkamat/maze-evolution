(ns ^:figwheel-always maze-evolution.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [maze-evolution.subs :as subs]))
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
      [:svg {:width 1000 :height 1000}
       (conj (create-rectangles @maze) :g)])))
(defn main-panel []
  [:div
   [title]
   [draw-maze]])
