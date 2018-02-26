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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25820){
var vec__25821 = p__25820;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25821,(1),null);
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
var vec__25824 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25824,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25824,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25824,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25828 = arguments.length;
switch (G__25828) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__8740__auto__ = cljs.core.count(a);
var y__8741__auto__ = cljs.core.count(b);
return ((x__8740__auto__ > y__8741__auto__) ? x__8740__auto__ : y__8741__auto__);
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
var x__9121__auto__ = (((x == null))?null:x);
var m__9122__auto__ = (clojure.data.equality_partition[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__9122__auto__.call(null,x));
} else {
var m__9122__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__9122__auto____$1.call(null,x));
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
var x__9121__auto__ = (((a == null))?null:a);
var m__9122__auto__ = (clojure.data.diff_similar[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__9122__auto__.call(null,a,b));
} else {
var m__9122__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__9122__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__25830_25854 = clojure.data.equality_partition;
var G__25831_25855 = "null";
var G__25832_25856 = ((function (G__25830_25854,G__25831_25855){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25830_25854,G__25831_25855))
;
goog.object.set(G__25830_25854,G__25831_25855,G__25832_25856);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25833_25857 = clojure.data.equality_partition;
var G__25834_25858 = "string";
var G__25835_25859 = ((function (G__25833_25857,G__25834_25858){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25833_25857,G__25834_25858))
;
goog.object.set(G__25833_25857,G__25834_25858,G__25835_25859);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25836_25860 = clojure.data.equality_partition;
var G__25837_25861 = "number";
var G__25838_25862 = ((function (G__25836_25860,G__25837_25861){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25836_25860,G__25837_25861))
;
goog.object.set(G__25836_25860,G__25837_25861,G__25838_25862);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25839_25863 = clojure.data.equality_partition;
var G__25840_25864 = "array";
var G__25841_25865 = ((function (G__25839_25863,G__25840_25864){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__25839_25863,G__25840_25864))
;
goog.object.set(G__25839_25863,G__25840_25864,G__25841_25865);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25842_25866 = clojure.data.equality_partition;
var G__25843_25867 = "function";
var G__25844_25868 = ((function (G__25842_25866,G__25843_25867){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25842_25866,G__25843_25867))
;
goog.object.set(G__25842_25866,G__25843_25867,G__25844_25868);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25845_25869 = clojure.data.equality_partition;
var G__25846_25870 = "boolean";
var G__25847_25871 = ((function (G__25845_25869,G__25846_25870){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25845_25869,G__25846_25870))
;
goog.object.set(G__25845_25869,G__25846_25870,G__25847_25871);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25848_25872 = clojure.data.equality_partition;
var G__25849_25873 = "_";
var G__25850_25874 = ((function (G__25848_25872,G__25849_25873){
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
});})(G__25848_25872,G__25849_25873))
;
goog.object.set(G__25848_25872,G__25849_25873,G__25850_25874);
goog.object.set(clojure.data.Diff,"null",true);

var G__25875_25899 = clojure.data.diff_similar;
var G__25876_25900 = "null";
var G__25877_25901 = ((function (G__25875_25899,G__25876_25900){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25875_25899,G__25876_25900))
;
goog.object.set(G__25875_25899,G__25876_25900,G__25877_25901);

goog.object.set(clojure.data.Diff,"string",true);

var G__25878_25902 = clojure.data.diff_similar;
var G__25879_25903 = "string";
var G__25880_25904 = ((function (G__25878_25902,G__25879_25903){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25878_25902,G__25879_25903))
;
goog.object.set(G__25878_25902,G__25879_25903,G__25880_25904);

goog.object.set(clojure.data.Diff,"number",true);

var G__25881_25905 = clojure.data.diff_similar;
var G__25882_25906 = "number";
var G__25883_25907 = ((function (G__25881_25905,G__25882_25906){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25881_25905,G__25882_25906))
;
goog.object.set(G__25881_25905,G__25882_25906,G__25883_25907);

goog.object.set(clojure.data.Diff,"array",true);

var G__25884_25908 = clojure.data.diff_similar;
var G__25885_25909 = "array";
var G__25886_25910 = ((function (G__25884_25908,G__25885_25909){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__25884_25908,G__25885_25909))
;
goog.object.set(G__25884_25908,G__25885_25909,G__25886_25910);

goog.object.set(clojure.data.Diff,"function",true);

var G__25887_25911 = clojure.data.diff_similar;
var G__25888_25912 = "function";
var G__25889_25913 = ((function (G__25887_25911,G__25888_25912){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25887_25911,G__25888_25912))
;
goog.object.set(G__25887_25911,G__25888_25912,G__25889_25913);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__25890_25914 = clojure.data.diff_similar;
var G__25891_25915 = "boolean";
var G__25892_25916 = ((function (G__25890_25914,G__25891_25915){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25890_25914,G__25891_25915))
;
goog.object.set(G__25890_25914,G__25891_25915,G__25892_25916);

goog.object.set(clojure.data.Diff,"_",true);

var G__25893_25917 = clojure.data.diff_similar;
var G__25894_25918 = "_";
var G__25895_25919 = ((function (G__25893_25917,G__25894_25918){
return (function (a,b){
var fexpr__25897 = (function (){var G__25898 = clojure.data.equality_partition(a);
var G__25898__$1 = (((G__25898 instanceof cljs.core.Keyword))?G__25898.fqn:null);
switch (G__25898__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25898__$1)].join('')));

}
})();
return (fexpr__25897.cljs$core$IFn$_invoke$arity$2 ? fexpr__25897.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__25897.call(null,a,b));
});})(G__25893_25917,G__25894_25918))
;
goog.object.set(G__25893_25917,G__25894_25918,G__25895_25919);
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
