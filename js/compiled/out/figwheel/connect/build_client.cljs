(ns figwheel.connect.build-client (:require [maze-evolution.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/maze-evolution.core.main (apply js/maze-evolution.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'maze-evolution.core/main' is missing"))), :build-id "client", :websocket-url "ws://localhost:3449/figwheel-ws"})

