// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__28676_28678 = cljs.core.cst$kw$maze_DASH_map;
var G__28677_28679 = ((function (G__28676_28678){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$map], null));
});})(G__28676_28678))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28676_28678,G__28677_28679) : re_frame.core.reg_sub.call(null,G__28676_28678,G__28677_28679));
var G__28680_28682 = cljs.core.cst$kw$current_DASH_position;
var G__28681_28683 = ((function (G__28680_28682){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$current_DASH_position], null));
});})(G__28680_28682))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28680_28682,G__28681_28683) : re_frame.core.reg_sub.call(null,G__28680_28682,G__28681_28683));
var G__28684_28686 = cljs.core.cst$kw$remaining_DASH_moves;
var G__28685_28687 = ((function (G__28684_28686){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$remaining_DASH_moves], null));
});})(G__28684_28686))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28684_28686,G__28685_28687) : re_frame.core.reg_sub.call(null,G__28684_28686,G__28685_28687));
var G__28688_28690 = cljs.core.cst$kw$unique_DASH_id;
var G__28689_28691 = ((function (G__28688_28690){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$unique_DASH_id], null));
});})(G__28688_28690))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28688_28690,G__28689_28691) : re_frame.core.reg_sub.call(null,G__28688_28690,G__28689_28691));
var G__28692_28694 = cljs.core.cst$kw$fitness_DASH_map;
var G__28693_28695 = ((function (G__28692_28694){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$fitness_DASH_map], null));
});})(G__28692_28694))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28692_28694,G__28693_28695) : re_frame.core.reg_sub.call(null,G__28692_28694,G__28693_28695));
var G__28696_28706 = cljs.core.cst$kw$current_DASH_fitness;
var G__28697_28707 = cljs.core.cst$kw$_LT__DASH_;
var G__28698_28708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fitness_DASH_map], null);
var G__28699_28709 = cljs.core.cst$kw$_LT__DASH_;
var G__28700_28710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
var G__28701_28711 = ((function (G__28696_28706,G__28697_28707,G__28698_28708,G__28699_28709,G__28700_28710){
return (function (p__28702,_){
var vec__28703 = p__28702;
var fitness_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28703,(0),null);
var current_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28703,(1),null);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fitness_map,cljs.core.first(current_position)),cljs.core.last(current_position));
});})(G__28696_28706,G__28697_28707,G__28698_28708,G__28699_28709,G__28700_28710))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__28696_28706,G__28697_28707,G__28698_28708,G__28699_28709,G__28700_28710,G__28701_28711) : re_frame.core.reg_sub.call(null,G__28696_28706,G__28697_28707,G__28698_28708,G__28699_28709,G__28700_28710,G__28701_28711));
var G__28712_28714 = cljs.core.cst$kw$population;
var G__28713_28715 = ((function (G__28712_28714){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$population], null));
});})(G__28712_28714))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28712_28714,G__28713_28715) : re_frame.core.reg_sub.call(null,G__28712_28714,G__28713_28715));
var G__28716_28718 = cljs.core.cst$kw$generation;
var G__28717_28719 = ((function (G__28716_28718){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$generation], null));
});})(G__28716_28718))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28716_28718,G__28717_28719) : re_frame.core.reg_sub.call(null,G__28716_28718,G__28717_28719));
var G__28720_28722 = cljs.core.cst$kw$individual;
var G__28721_28723 = ((function (G__28720_28722){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$individual], null));
});})(G__28720_28722))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28720_28722,G__28721_28723) : re_frame.core.reg_sub.call(null,G__28720_28722,G__28721_28723));
var G__28724_28726 = cljs.core.cst$kw$fitness_DASH_list;
var G__28725_28727 = ((function (G__28724_28726){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$fitness_DASH_list], null));
});})(G__28724_28726))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28724_28726,G__28725_28727) : re_frame.core.reg_sub.call(null,G__28724_28726,G__28725_28727));
var G__28728_28730 = cljs.core.cst$kw$tab;
var G__28729_28731 = ((function (G__28728_28730){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab], null));
});})(G__28728_28730))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28728_28730,G__28729_28731) : re_frame.core.reg_sub.call(null,G__28728_28730,G__28729_28731));
var G__28732_28734 = cljs.core.cst$kw$generations_DASH_to_DASH_run;
var G__28733_28735 = ((function (G__28732_28734){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$generations_DASH_to_DASH_run], null));
});})(G__28732_28734))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28732_28734,G__28733_28735) : re_frame.core.reg_sub.call(null,G__28732_28734,G__28733_28735));
var G__28736_28738 = cljs.core.cst$kw$max_DASH_fitness_DASH_list;
var G__28737_28739 = ((function (G__28736_28738){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$max_DASH_fitness_DASH_list], null));
});})(G__28736_28738))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28736_28738,G__28737_28739) : re_frame.core.reg_sub.call(null,G__28736_28738,G__28737_28739));
