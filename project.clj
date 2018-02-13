(defproject maze-evolution "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.2"]]

  :plugins [[lein-cljsbuild "1.1.5"]]

  :min-lein-version "2.5.3"

  :jvm-opts ["--add-modules" "java.xml.bind"]

  :source-paths ["src/cljs" "src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :profiles
  {:dev
   {:dependencies [[figwheel-sidecar "0.5.14"]
                   [binaryage/devtools "0.9.4"]
                   [org.clojure/tools.nrepl "0.2.10"]
                   [com.cemerick/piggieback "0.2.2"]
                   [re-frisk "0.5.3"]
                   ]
    :plugins      [[lein-figwheel "0.5.14"]]
    :cljsbuild {:builds [{:compiler {
                                    :optimizations        :none
                                    :source-map           true
                                    :output-to            "resources/public/js/compiled/app.js"
                                    :output-dir           "resources/public/js/compiled/out"
                                    :asset-path           "js/compiled/out"
                                     :preloads             [devtools.preload
                                                            re-frisk.preload]
                                    :external-config      {:devtools/config {:features-to-install :all}}
                                    :source-map-timestamp true
                                    :main                 "maze-evolution.core"}
                         :figwheel {:on-jsload "maze-evolution.core/main"}
                         :source-paths ["src/cljs" "src/clj"]
                         :id "dev"
                         }]}}}

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :figwheel {:server-port 3449
             :repl        true
             :css-dirs ["resources/public/css"]}
  )
