(ns ^:figwheel-always maze-evolution.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [cljs.js]
            [cljs.pprint :refer [pprint]]
            [cljs.core.async :refer [<! timeout]]
            [maze-evolution.events :as events]
            [maze-evolution.subs :as subs]
            [maze-evolution.evolution :as evolution])
  (:use-macros [cljs.core.async.macros :only [go]]))

(defn title
  []
  [:div
   [:h1 "Maze Evolution"]
   [:h2 "created by Tushaar Kamat"]
   ])

(defn individual-and-generation-counter
  []
  [:div [:h3 @(re-frame/subscribe [:generation])]
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
      [:svg [:circle {:style {:fill "coral"} :r 12 :id "ball"
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
    [:button {:on-click (fn [] (if (false? @running)
                                (evolution/test-population running)))}
     "Test Population"]))
(defn new-generation-button []
  (fn []
    [:button {:on-click #(evolution/create-new-generation running)}
     "New Generation"]))
(defn continuously-evolve-button []
  (fn []
    [:button {:on-click #(evolution/continuously-evolve running)}
     "Continuously evolve"]))
(defn button-group []
  (fn []
    [:div {:class "button-group"}
     [test-button]
     [new-generation-button]
     [continuously-evolve-button]]))

(defn current-tab-underline
  []
  (let [current-tab (re-frame/subscribe [:tab])]
    (cond (= @current-tab :about)
          [:hr {:style {:margin-left "0%"}}]
          (= @current-tab :simulation)
          [:hr {:style {:margin-left "50%"}}])))
(defn simulation-panel
  []
  [:div
   [individual-and-generation-counter]
   [render-maze-and-ball]
   [button-group]
   [:pre (-> @re-frame.db/app-db
             (get-in [:maze :current-position])
             pprint
             with-out-str)]
   [:pre (-> @(re-frame/subscribe [:current-fitness])
             pprint
             with-out-str)]])
(defn about-panel
  []
  [:p#about "Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi nec
  facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.
  Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed bibendum.
  Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum, lacus tellus
  malesuada massa, quis varius mi purus non odio. Pellentesque condimentum,
  magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque
  sit amet urna. Curabitur vulputate vestibulum lorem. Fusce sagittis, libero
  non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla
  lacinia eros. Sed id ligula quis est convallis tempor. Curabitur lacinia
  pulvinar nibh. Nam a sapien."])

(defn current-panel
  []
  (let [current-tab (re-frame/subscribe [:tab])]
    (cond (= @current-tab :about)
          [about-panel]
          (= @current-tab :simulation)
          [simulation-panel])))


(defn tabs
  []
  [:div {:class "tabs"}
   [:button {:class "about"
             :on-focus (fn [] (re-frame/dispatch [:change-tab :about]))} "About"]
   [:button {:class "focus"
             :on-focus (fn [] (re-frame/dispatch [:change-tab :simulation]))} "Simulation"]
   [current-tab-underline]])

(defn github-badge []
  [:a.github-badge {:href "https://github.com/tkamat/maze-evolution"}
   [:img {:style {:position "absolute" :top 0 :left 0 :border 0}
          :alt "Fork me on GitHub"
          :src "https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"}]])

(defn main-panel []
  [:div
   [title]
   [tabs]
   [current-panel]
   [github-badge]
   ])
