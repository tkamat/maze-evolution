// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__27392_27394 = cljs.core.cst$kw$maze_DASH_map;
var G__27393_27395 = ((function (G__27392_27394){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$map], null));
});})(G__27392_27394))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27392_27394,G__27393_27395) : re_frame.core.reg_sub.call(null,G__27392_27394,G__27393_27395));
var G__27396_27398 = cljs.core.cst$kw$current_DASH_position;
var G__27397_27399 = ((function (G__27396_27398){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$current_DASH_position], null));
});})(G__27396_27398))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27396_27398,G__27397_27399) : re_frame.core.reg_sub.call(null,G__27396_27398,G__27397_27399));
var G__27400_27402 = cljs.core.cst$kw$remaining_DASH_moves;
var G__27401_27403 = ((function (G__27400_27402){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$remaining_DASH_moves], null));
});})(G__27400_27402))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27400_27402,G__27401_27403) : re_frame.core.reg_sub.call(null,G__27400_27402,G__27401_27403));
var G__27404_27406 = cljs.core.cst$kw$unique_DASH_id;
var G__27405_27407 = ((function (G__27404_27406){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$unique_DASH_id], null));
});})(G__27404_27406))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27404_27406,G__27405_27407) : re_frame.core.reg_sub.call(null,G__27404_27406,G__27405_27407));
var G__27408_27410 = cljs.core.cst$kw$fitness_DASH_map;
var G__27409_27411 = ((function (G__27408_27410){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$fitness_DASH_map], null));
});})(G__27408_27410))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27408_27410,G__27409_27411) : re_frame.core.reg_sub.call(null,G__27408_27410,G__27409_27411));
var G__27412_27422 = cljs.core.cst$kw$current_DASH_fitness;
var G__27413_27423 = cljs.core.cst$kw$_LT__DASH_;
var G__27414_27424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fitness_DASH_map], null);
var G__27415_27425 = cljs.core.cst$kw$_LT__DASH_;
var G__27416_27426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
var G__27417_27427 = ((function (G__27412_27422,G__27413_27423,G__27414_27424,G__27415_27425,G__27416_27426){
return (function (p__27418,_){
var vec__27419 = p__27418;
var fitness_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27419,(0),null);
var current_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27419,(1),null);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fitness_map,cljs.core.first(current_position)),cljs.core.last(current_position));
});})(G__27412_27422,G__27413_27423,G__27414_27424,G__27415_27425,G__27416_27426))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__27412_27422,G__27413_27423,G__27414_27424,G__27415_27425,G__27416_27426,G__27417_27427) : re_frame.core.reg_sub.call(null,G__27412_27422,G__27413_27423,G__27414_27424,G__27415_27425,G__27416_27426,G__27417_27427));
var G__27428_27430 = cljs.core.cst$kw$population;
var G__27429_27431 = ((function (G__27428_27430){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$population], null));
});})(G__27428_27430))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27428_27430,G__27429_27431) : re_frame.core.reg_sub.call(null,G__27428_27430,G__27429_27431));
var G__27432_27434 = cljs.core.cst$kw$generation;
var G__27433_27435 = ((function (G__27432_27434){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$generation], null));
});})(G__27432_27434))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27432_27434,G__27433_27435) : re_frame.core.reg_sub.call(null,G__27432_27434,G__27433_27435));
var G__27436_27438 = cljs.core.cst$kw$individual;
var G__27437_27439 = ((function (G__27436_27438){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$individual], null));
});})(G__27436_27438))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27436_27438,G__27437_27439) : re_frame.core.reg_sub.call(null,G__27436_27438,G__27437_27439));
var G__27440_27442 = cljs.core.cst$kw$fitness_DASH_list;
var G__27441_27443 = ((function (G__27440_27442){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$fitness_DASH_list], null));
});})(G__27440_27442))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27440_27442,G__27441_27443) : re_frame.core.reg_sub.call(null,G__27440_27442,G__27441_27443));
var G__27444_27446 = cljs.core.cst$kw$tab;
var G__27445_27447 = ((function (G__27444_27446){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab], null));
});})(G__27444_27446))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27444_27446,G__27445_27447) : re_frame.core.reg_sub.call(null,G__27444_27446,G__27445_27447));
var G__27448_27450 = cljs.core.cst$kw$generations_DASH_to_DASH_run;
var G__27449_27451 = ((function (G__27448_27450){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$generations_DASH_to_DASH_run], null));
});})(G__27448_27450))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27448_27450,G__27449_27451) : re_frame.core.reg_sub.call(null,G__27448_27450,G__27449_27451));
var G__27452_27454 = cljs.core.cst$kw$max_DASH_fitness_DASH_list;
var G__27453_27455 = ((function (G__27452_27454){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$max_DASH_fitness_DASH_list], null));
});})(G__27452_27454))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27452_27454,G__27453_27455) : re_frame.core.reg_sub.call(null,G__27452_27454,G__27453_27455));
