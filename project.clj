(defproject maze-evolution "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.2"]
                 [keybind "2.2.0"]]

  :plugins [[lein-cljsbuild "1.1.5"]]

  :min-lein-version "2.5.3"

  ;; :jvm-opts ["--add-modules" "java.xml.bind"]

  :source-paths ["src/cljs" "src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :profiles
  {:dev
   {:dependencies [[figwheel-sidecar "0.5.16"]
                   [binaryage/devtools "0.9.4"]
                   [cider/piggieback "0.3.6"]
                   [org.clojure/tools.nrepl "0.2.13"]
                   [re-frisk "0.5.3"]]
    :plugins      [[lein-figwheel "0.5.16"]]
    :cljsbuild {:builds [{:id "dev"
                          :compiler {
                                     :optimizations        :none
                                     :source-map           true
                                     :output-to            "resources/public/js/compiled/app.js"
                                     :output-dir           "resources/public/js/compiled/out"
                                     :asset-path           "js/compiled/out"
                                     :preloads             [devtools.preload
                                                            re-frisk.preload]
                                     :external-config      {:devtools/config {:features-to-install :all}}
                                     :source-map-timestamp true
                                     :main                 maze-evolution.core}
                          :figwheel {:on-jsload "maze-evolution.core/main"
                                     :websocket-host :js-client-host}
                          :source-paths ["src/cljs" "src/clj"]}
                         {:id "min"
                          :compiler {:main maze-evolution.core
                                     :optimizations :advanced
                                     :pretty-print false
                                     :output-to "resources/public/js/compiled/app.js"
                                     :asset-path "js/compiled/out"
                                     :closure-defines {goog.DEBUG false}}
                          :source-paths ["src/cljs" "src/clj"]}]}}}

  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
  :figwheel {:server-port 3449
             :repl        true
             :css-dirs ["resources/public/css"]})
