(ns ^:figwheel-always maze-evolution.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            ))
(defn hello-world
  []
  [:h1 "Hello World!"])
(defn main-panel []
  [:div
   [hello-world]])
