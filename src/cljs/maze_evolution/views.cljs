(ns ^:figwheel-always maze-evolution.views
  (:require [cljs.core.async :refer [<! timeout]]
            cljs.js
            [cljs.pprint :refer [pprint]]
            [clojure.string :as string]
            [keybind.core :as key]
            [maze-evolution.events :as events]
            [maze-evolution.evolution :as evolution]
            [maze-evolution.subs :as subs]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent])
  (:require-macros [cljs.core.async.macros :refer [go]]))

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
  [position color]
  [:g [:svg [:circle {:style {:fill color} :r 12 :id "ball"
                      :cx (->> position
                               last
                               (* 30)
                               (+ 15))
                      :cy (->> position
                               first
                               (* 30)
                               (+ 15))}]]])

(defn render-maze-and-ball []
  (let [current-position @(re-frame/subscribe [:current-position])
        max-position @(re-frame/subscribe [:max-position])]
    (conj ((draw-maze)) (draw-ball max-position "grey") (draw-ball current-position "coral"))))

(defn population-test-button []
  (fn []
    [:button {:on-click #(evolution/test-population)}
     "Test Population"]))

(defn new-generation-button []
  (fn []
    [:button {:on-click #(evolution/create-new-generation)}
     "New Generation"]))

(defn continuously-evolve-button []
  (fn []
    [:button {:on-click #(evolution/continuously-evolve)}
     "Continuously evolve"]))


(defn quick-evolve-button []
  (fn []
    [:button#quick-evolve {:on-click #(re-frame/dispatch [:set-max-fitness-list
                                                          (evolution/quick-evolve
                                                           @(re-frame/subscribe [:maze-map])
                                                           @(re-frame/subscribe [:fitness-map])
                                                           @(re-frame/subscribe [:generations-to-run]))])}
     "Quick Evolve"]))

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
      [:div
       [:p#fitness-list
        (string/join ", " @fitness-list)]])))

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
  [:div
   [:p#about "This website attempts to evolve solutions to a simple maze,
  using genetic algorithms. Originally proposed by John H. Holland, genetic
  algorithms apply the theories of evolution and natural selection to computer
  programs. This simulation (access by clicking the \"simulation\" tab at the
  top) initializes the \"population\" by generating a random series of moves for
  each individual, either North, West, East, or South. After this, clicking the
  \"test population\" button will run the simulation, running each sequence of
  moves through the \"fitness\", which is a measurement of how far the
  individual gets. After the generation finishes, click the \"New Generation\"
  button to initiate the breeding and reproduction process. In this process, the
  individuals with the lowest fitness are removed from the simulation, and the
  individuals with the highest fitness are preserved to the next generation.
  Furthermore, the individuals with the highest fitness use crossing-over and
  mutation to create offspring, which are a mix of the two parent individuals'
  move sequences. These offspring join the next generation, and the simulation
  can now be run again using the \"Test Population\" button. This evolution
  process continues indefinitely until a solution is found, and it can be run
  automatically by just clicking the \"Continuously Evolve\" button."]
   [:p#about "In addition to the main simulation, this website also provides a
   \"Quick Evolution\" option. To access this, click the simulation tab, and
   scroll down to the text box labeled \"# of Generations.\" In this text box,
   enter the number of generations you want to evolve, and click the \"Quick
   Evolve\" button. This will quickly run the simulation without actually
   displaying the process in the maze. Once it is finished, a list of the
   maximum fitness for each generation will be displayed below at the bottom of
   the screen." ]])

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

;; keybindings
(key/bind! "right" ::switch-tab-right #(re-frame/dispatch [:change-tab :simulation]))
(key/bind! "left" ::switch-tab-right #(re-frame/dispatch [:change-tab :about]))
