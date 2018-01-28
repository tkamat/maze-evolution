(ns figwheel.connect.build-dev (:require [maze-evolution.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/maze-evolution.core.on-js-reload (apply js/maze-evolution.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'maze-evolution.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

