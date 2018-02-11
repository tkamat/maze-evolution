(ns maze-evolution.db
  (:require [maze-evolution.evolution :as evolution]))

(def initial-population (evolution/create-initial-population)) 
(def default-db
  {:evolution {:population initial-population
               :generation "Generation 1"
               :individual "Individual 1"
               :fitness-list []}
   :maze {:map [[1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]
                [1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 1]
                [1 0 1 1 1 0 1 0 1 1 1 0 1 0 1 1 1 1 1 0 1]
                [1 0 1 0 0 0 1 0 0 0 1 0 0 0 1 0 1 0 0 0 1]
                [1 0 1 1 1 1 1 1 1 0 1 1 1 0 1 0 1 0 1 1 1]
                [1 0 0 0 1 0 0 0 1 0 0 0 1 0 0 0 1 0 1 0 1]
                [1 1 1 0 1 0 1 1 1 0 1 0 1 1 1 1 1 0 1 0 1]
                [1 0 0 0 0 0 1 0 0 0 1 0 0 0 1 0 0 0 0 0 1]
                [1 0 1 1 1 1 1 0 1 0 1 1 1 1 1 0 1 1 1 1 1]
                [1 0 0 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 0 1]
                [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1]]
          :current-position [0 1]
          :remaining-moves (:move-sequence (first initial-population))
          :unique-id (:id (first initial-population))
          :fitness-map [[99  0 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99]
                        [99  1  0 -1 -2 -3 99 31 32 33 34 35 99 41 42 43 44 45 46 47 99]
                        [99  2 99 99 99 -4 99 30 99 99 99 36 99 40 99 99 99 99 99 48 99]
                        [99  3 99 -7 -6 -5 99 29 28 27 99 37 38 39 99 33 99 51 50 49 99]
                        [99  4 99 99 99 99 99 99 99 26 99 99 99 38 99 34 99 52 99 99 99]
                        [99  5  6  7 99  5  4  3 99 25 24 23 99 37 36 35 99 53 99 51 99]
                        [99 99 99  8 99  6 99 99 99 24 99 22 99 99 99 99 99 54 99 52 99]
                        [99 11 10  9  8  7 99 21 22 23 99 21 20 19 99 57 56 55 54 53 99]
                        [99 12 99 99 99 99 99 20 99 22 99 99 99 99 99 58 99 99 99 99 99]
                        [99 13 14 15 16 17 18 19 99 21 20 19 99 57 58 59 60 61 62 63 99]
                        [99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 64 99]]}})
