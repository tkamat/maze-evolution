(ns maze-evolution.events
  (:require [re-frame.core :as re-frame]
            [maze-evolution.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))
(defn move-if-eligible [direction maze-map current-position]
  (cond (= direction :N)
        (if (and
             (>= (dec (first current-position)) 0)
             (= 0 (nth (nth maze-map (dec (first current-position))) (last current-position))))
          [(dec (first current-position)) (last current-position)]
          current-position)
        (= direction :S)
        (if (and
             (<= (inc (first current-position)) 10)
             (= 0 (nth (nth maze-map (inc (first current-position))) (last current-position))))
          [(inc (first current-position)) (last current-position)]
          current-position)
        (= direction :E)
        (if (and
             (<= (inc (last current-position)) 20)
             (= 0 (nth (nth maze-map (first current-position)) (inc (last current-position)))))
          [(first current-position) (inc (last current-position))]
          current-position)
        (= direction :W)
        (if (and
             (>= (dec (last current-position)) 0)
             (= 0 (nth (nth maze-map (first current-position)) (dec (last current-position)))))
          [(first current-position) (dec (last current-position))]
          current-position)))
(re-frame/reg-event-db
 :move-ball
 (fn [db [_ direction]]
   (update-in db [:maze :current-position]
              (fn [current-position]
                (let [maze-map (get-in db [:maze :map])]
                  (move-if-eligible direction maze-map current-position))))))
