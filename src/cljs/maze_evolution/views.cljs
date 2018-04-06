(ns ^:figwheel-always maze-evolution.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [clojure.string :as string]
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
  (apply concat (loop [row 0 rectangles []]
                  (if (< row 11)
                    (recur (inc row)
                           (conj rectangles (loop [col 0 rectangles []]
                                              (if (< col 21)
                                                (if (= 1 (get-in maze [row col]))
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
      [:g [:svg [:circle {:style {:fill "coral"} :r 12 :id "ball"
                          :cx (->> @ball-position
                                   last
                                   (* 30)
                                   (+ 15))
                          :cy (->> @ball-position
                                   first
                                   (* 30)
                                   (+ 15))}]]])))

(defn render-maze-and-ball []
  (conj ((draw-maze)) ((draw-ball))))
(def running (atom false))
(defn population-test-button []
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

(defn quick-evolve-button []
  (fn []
    [:button#quick-evolve {:on-click #(re-frame/dispatch [:set-max-fitness-list
                                                             (evolution/quick-evolve
                                                              @(re-frame/subscribe [:maze-map])
                                                              @(re-frame/subscribe [:fitness-map])
                                                              @(re-frame/subscribe [:generations-to-run]))])}
     "Run Evolution Without Display"]))

(defn input-box []
  (let [generations-to-run (re-frame/subscribe [:generations-to-run])]
    (fn []
      [:input#input-box {:type "number"
                         :value @generations-to-run
                         :on-change #((re-frame/dispatch [:set-generations-to-run
                                                          (-> % .-target .-value)]))}])))
(defn button-and-input []
  [:div {:class "button-and-input"}
   "# of Generations: "
   [input-box]
   [quick-evolve-button]])

(defn max-fitness-list []
  (let [fitness-list (re-frame/subscribe [:max-fitness-list])]
    (fn []
      [:p#fitness-list (string/join ", " @fitness-list)])))

(defn button-group []
  (fn []
    [:div {:class "button-group"}
     [population-test-button]
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
   [button-and-input]
   [max-fitness-list]])
(defn about-panel
  []
  [:div [:p#about "This website attempts to evolve solutions to a simple maze,
  using genetic algorithms. Originally proposed by John H. Holland, genetic
  algorithms apply the theories of evolution and natural selection to computer
  programs. This simulation (access by clicking the \"simulation\" tab at the
  top) initializes the \"population\" by generating a random series of moves.
  After this, clicking the \"test population\" button will run the simulation, running each sequence of moves to "]
   [:p#about "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
   hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl,
   tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus
   et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec
   vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla.
   Nullam rutrum. Nam vestibulum accumsan nisl." ]])

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
   [github-badge]])
