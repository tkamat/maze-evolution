// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('maze_evolution.evolution');
maze_evolution.db.initial_population = maze_evolution.evolution.create_initial_population();
maze_evolution.db.default_db = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tab,cljs.core.cst$kw$about,cljs.core.cst$kw$evolution,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$population,maze_evolution.db.initial_population,cljs.core.cst$kw$generation,"Generation 1",cljs.core.cst$kw$individual,"Individual 1",cljs.core.cst$kw$fitness_DASH_list,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$max_DASH_fitness_DASH_list,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$generations_DASH_to_DASH_run,""], null),cljs.core.cst$kw$maze,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$map,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(1),(1),(0),(1),(0),(1),(1),(1),(0),(1),(0),(1),(1),(1),(1),(1),(0),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(1),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(1),(1),(1),(1),(1),(1),(0),(1),(1),(1),(0),(1),(0),(1),(0),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(1),(0),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(1),(0),(1),(1),(1),(0),(1),(0),(1),(1),(1),(1),(1),(0),(1),(0),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(1),(1),(1),(1),(0),(1),(0),(1),(1),(1),(1),(1),(0),(1),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(0),(1)], null)], null),cljs.core.cst$kw$current_DASH_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.cst$kw$remaining_DASH_moves,cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.first(maze_evolution.db.initial_population)),cljs.core.cst$kw$unique_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(maze_evolution.db.initial_population)),cljs.core.cst$kw$fitness_DASH_map,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(0),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(1),(0),(-1),(-2),(-3),(99),(31),(32),(33),(34),(35),(99),(41),(42),(43),(44),(45),(46),(47),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(2),(99),(99),(99),(-4),(99),(30),(99),(99),(99),(36),(99),(40),(99),(99),(99),(99),(99),(48),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(3),(99),(-7),(-6),(-5),(99),(29),(28),(27),(99),(37),(38),(39),(99),(33),(99),(51),(50),(49),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(4),(99),(99),(99),(99),(99),(99),(99),(26),(99),(99),(99),(38),(99),(34),(99),(52),(99),(99),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(5),(6),(7),(99),(5),(4),(3),(99),(25),(24),(23),(99),(37),(36),(35),(99),(53),(99),(51),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(99),(99),(8),(99),(6),(99),(99),(99),(24),(99),(22),(99),(99),(99),(99),(99),(54),(99),(52),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(11),(10),(9),(8),(7),(99),(21),(22),(23),(99),(21),(20),(19),(99),(57),(56),(55),(54),(53),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(12),(99),(99),(99),(99),(99),(20),(99),(22),(99),(99),(99),(99),(99),(58),(99),(99),(99),(99),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(13),(14),(15),(16),(17),(18),(19),(99),(21),(20),(19),(99),(57),(58),(59),(60),(61),(62),(63),(99)], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(99),(64),(99)], null)], null)], null)], null);