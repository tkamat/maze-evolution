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
       (->> @maze
            create-rectangles
            (cons :g)
            vec)])))
(defn draw-ball
  []
  (let [ball-position (re-frame/subscribe [:current-position])]
    (fn []
      [:svg [:circle {:style {:fill "green"} :r 12 :id "ball"
                      :cx (->> @ball-position
                               last
                               (* 30)
                               (+ 15))
                      :cy (->> @ball-position
                               first
                               (* 30)
                               (+ 15))}]])))
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
(defn continuously-evolve-button []
  (fn []
    [:input {:type "button" :value "Continuously evolve"
             :on-click #(evolution/continuously-evolve running)}]))
(defn main-panel []
  [:div
   [title]
   [render-maze-and-ball]
   [test-button]
   [new-generation-button]
   [continuously-evolve-button]
   [:pre (-> @re-frame.db/app-db
             (get-in [:maze :current-position])
             pprint
             with-out-str)]
   [:pre (-> @(re-frame/subscribe [:current-fitness])
             pprint
             with-out-str)]])
