// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__28679_28681 = cljs.core.cst$kw$maze_DASH_map;
var G__28680_28682 = ((function (G__28679_28681){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$map], null));
});})(G__28679_28681))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28679_28681,G__28680_28682) : re_frame.core.reg_sub.call(null,G__28679_28681,G__28680_28682));
var G__28683_28685 = cljs.core.cst$kw$current_DASH_position;
var G__28684_28686 = ((function (G__28683_28685){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$current_DASH_position], null));
});})(G__28683_28685))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28683_28685,G__28684_28686) : re_frame.core.reg_sub.call(null,G__28683_28685,G__28684_28686));
var G__28687_28689 = cljs.core.cst$kw$remaining_DASH_moves;
var G__28688_28690 = ((function (G__28687_28689){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$remaining_DASH_moves], null));
});})(G__28687_28689))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28687_28689,G__28688_28690) : re_frame.core.reg_sub.call(null,G__28687_28689,G__28688_28690));
var G__28691_28693 = cljs.core.cst$kw$unique_DASH_id;
var G__28692_28694 = ((function (G__28691_28693){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$unique_DASH_id], null));
});})(G__28691_28693))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28691_28693,G__28692_28694) : re_frame.core.reg_sub.call(null,G__28691_28693,G__28692_28694));
var G__28695_28697 = cljs.core.cst$kw$fitness_DASH_map;
var G__28696_28698 = ((function (G__28695_28697){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$fitness_DASH_map], null));
});})(G__28695_28697))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28695_28697,G__28696_28698) : re_frame.core.reg_sub.call(null,G__28695_28697,G__28696_28698));
var G__28699_28709 = cljs.core.cst$kw$current_DASH_fitness;
var G__28700_28710 = cljs.core.cst$kw$_LT__DASH_;
var G__28701_28711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fitness_DASH_map], null);
var G__28702_28712 = cljs.core.cst$kw$_LT__DASH_;
var G__28703_28713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
var G__28704_28714 = ((function (G__28699_28709,G__28700_28710,G__28701_28711,G__28702_28712,G__28703_28713){
return (function (p__28705,_){
var vec__28706 = p__28705;
var fitness_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28706,(0),null);
var current_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28706,(1),null);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fitness_map,cljs.core.first(current_position)),cljs.core.last(current_position));
});})(G__28699_28709,G__28700_28710,G__28701_28711,G__28702_28712,G__28703_28713))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__28699_28709,G__28700_28710,G__28701_28711,G__28702_28712,G__28703_28713,G__28704_28714) : re_frame.core.reg_sub.call(null,G__28699_28709,G__28700_28710,G__28701_28711,G__28702_28712,G__28703_28713,G__28704_28714));
var G__28715_28717 = cljs.core.cst$kw$population;
var G__28716_28718 = ((function (G__28715_28717){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$population], null));
});})(G__28715_28717))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28715_28717,G__28716_28718) : re_frame.core.reg_sub.call(null,G__28715_28717,G__28716_28718));
var G__28719_28721 = cljs.core.cst$kw$generation;
var G__28720_28722 = ((function (G__28719_28721){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$generation], null));
});})(G__28719_28721))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28719_28721,G__28720_28722) : re_frame.core.reg_sub.call(null,G__28719_28721,G__28720_28722));
var G__28723_28725 = cljs.core.cst$kw$individual;
var G__28724_28726 = ((function (G__28723_28725){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$individual], null));
});})(G__28723_28725))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28723_28725,G__28724_28726) : re_frame.core.reg_sub.call(null,G__28723_28725,G__28724_28726));
var G__28727_28729 = cljs.core.cst$kw$fitness_DASH_list;
var G__28728_28730 = ((function (G__28727_28729){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$fitness_DASH_list], null));
});})(G__28727_28729))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28727_28729,G__28728_28730) : re_frame.core.reg_sub.call(null,G__28727_28729,G__28728_28730));
var G__28731_28733 = cljs.core.cst$kw$tab;
var G__28732_28734 = ((function (G__28731_28733){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab], null));
});})(G__28731_28733))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28731_28733,G__28732_28734) : re_frame.core.reg_sub.call(null,G__28731_28733,G__28732_28734));
var G__28735_28737 = cljs.core.cst$kw$generations_DASH_to_DASH_run;
var G__28736_28738 = ((function (G__28735_28737){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$generations_DASH_to_DASH_run], null));
});})(G__28735_28737))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28735_28737,G__28736_28738) : re_frame.core.reg_sub.call(null,G__28735_28737,G__28736_28738));
var G__28739_28741 = cljs.core.cst$kw$max_DASH_fitness_DASH_list;
var G__28740_28742 = ((function (G__28739_28741){
return (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$max_DASH_fitness_DASH_list], null));
});})(G__28739_28741))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28739_28741,G__28740_28742) : re_frame.core.reg_sub.call(null,G__28739_28741,G__28740_28742));
