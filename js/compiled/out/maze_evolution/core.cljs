(ns ^:figwheel-always maze-evolution.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [maze-evolution.events :as events]
            [maze-evolution.views :as views]
            [maze-evolution.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn ^:export main []
  (re-frame/dispatch-sync [:initialize-db])
  (reagent/render [#'views/main-panel]
                  (.getElementById js/document "app")))
