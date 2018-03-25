// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__24584){
var vec__24585 = p__24584;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__24588 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__24592 = arguments.length;
switch (G__24592) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__8018__auto__ = cljs.core.count(a);
var y__8019__auto__ = cljs.core.count(b);
return ((x__8018__auto__ > y__8019__auto__) ? x__8018__auto__ : y__8019__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__8351__auto__ = (((x == null))?null:x);
var m__8352__auto__ = (clojure.data.equality_partition[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__8352__auto__.call(null,x));
} else {
var m__8352__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__8352__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__8351__auto__ = (((a == null))?null:a);
var m__8352__auto__ = (clojure.data.diff_similar[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__8352__auto__.call(null,a,b));
} else {
var m__8352__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__8352__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__24594_24618 = clojure.data.equality_partition;
var G__24595_24619 = "null";
var G__24596_24620 = ((function (G__24594_24618,G__24595_24619){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__24594_24618,G__24595_24619))
;
goog.object.set(G__24594_24618,G__24595_24619,G__24596_24620);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__24597_24621 = clojure.data.equality_partition;
var G__24598_24622 = "string";
var G__24599_24623 = ((function (G__24597_24621,G__24598_24622){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__24597_24621,G__24598_24622))
;
goog.object.set(G__24597_24621,G__24598_24622,G__24599_24623);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__24600_24624 = clojure.data.equality_partition;
var G__24601_24625 = "number";
var G__24602_24626 = ((function (G__24600_24624,G__24601_24625){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__24600_24624,G__24601_24625))
;
goog.object.set(G__24600_24624,G__24601_24625,G__24602_24626);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__24603_24627 = clojure.data.equality_partition;
var G__24604_24628 = "array";
var G__24605_24629 = ((function (G__24603_24627,G__24604_24628){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__24603_24627,G__24604_24628))
;
goog.object.set(G__24603_24627,G__24604_24628,G__24605_24629);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__24606_24630 = clojure.data.equality_partition;
var G__24607_24631 = "function";
var G__24608_24632 = ((function (G__24606_24630,G__24607_24631){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__24606_24630,G__24607_24631))
;
goog.object.set(G__24606_24630,G__24607_24631,G__24608_24632);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__24609_24633 = clojure.data.equality_partition;
var G__24610_24634 = "boolean";
var G__24611_24635 = ((function (G__24609_24633,G__24610_24634){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__24609_24633,G__24610_24634))
;
goog.object.set(G__24609_24633,G__24610_24634,G__24611_24635);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__24612_24636 = clojure.data.equality_partition;
var G__24613_24637 = "_";
var G__24614_24638 = ((function (G__24612_24636,G__24613_24637){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__24612_24636,G__24613_24637))
;
goog.object.set(G__24612_24636,G__24613_24637,G__24614_24638);
goog.object.set(clojure.data.Diff,"null",true);

var G__24639_24663 = clojure.data.diff_similar;
var G__24640_24664 = "null";
var G__24641_24665 = ((function (G__24639_24663,G__24640_24664){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24639_24663,G__24640_24664))
;
goog.object.set(G__24639_24663,G__24640_24664,G__24641_24665);

goog.object.set(clojure.data.Diff,"string",true);

var G__24642_24666 = clojure.data.diff_similar;
var G__24643_24667 = "string";
var G__24644_24668 = ((function (G__24642_24666,G__24643_24667){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24642_24666,G__24643_24667))
;
goog.object.set(G__24642_24666,G__24643_24667,G__24644_24668);

goog.object.set(clojure.data.Diff,"number",true);

var G__24645_24669 = clojure.data.diff_similar;
var G__24646_24670 = "number";
var G__24647_24671 = ((function (G__24645_24669,G__24646_24670){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24645_24669,G__24646_24670))
;
goog.object.set(G__24645_24669,G__24646_24670,G__24647_24671);

goog.object.set(clojure.data.Diff,"array",true);

var G__24648_24672 = clojure.data.diff_similar;
var G__24649_24673 = "array";
var G__24650_24674 = ((function (G__24648_24672,G__24649_24673){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__24648_24672,G__24649_24673))
;
goog.object.set(G__24648_24672,G__24649_24673,G__24650_24674);

goog.object.set(clojure.data.Diff,"function",true);

var G__24651_24675 = clojure.data.diff_similar;
var G__24652_24676 = "function";
var G__24653_24677 = ((function (G__24651_24675,G__24652_24676){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24651_24675,G__24652_24676))
;
goog.object.set(G__24651_24675,G__24652_24676,G__24653_24677);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__24654_24678 = clojure.data.diff_similar;
var G__24655_24679 = "boolean";
var G__24656_24680 = ((function (G__24654_24678,G__24655_24679){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24654_24678,G__24655_24679))
;
goog.object.set(G__24654_24678,G__24655_24679,G__24656_24680);

goog.object.set(clojure.data.Diff,"_",true);

var G__24657_24681 = clojure.data.diff_similar;
var G__24658_24682 = "_";
var G__24659_24683 = ((function (G__24657_24681,G__24658_24682){
return (function (a,b){
var fexpr__24661 = (function (){var G__24662 = clojure.data.equality_partition(a);
var G__24662__$1 = (((G__24662 instanceof cljs.core.Keyword))?G__24662.fqn:null);
switch (G__24662__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24662__$1)].join('')));

}
})();
return (fexpr__24661.cljs$core$IFn$_invoke$arity$2 ? fexpr__24661.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__24661.call(null,a,b));
});})(G__24657_24681,G__24658_24682))
;
goog.object.set(G__24657_24681,G__24658_24682,G__24659_24683);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
