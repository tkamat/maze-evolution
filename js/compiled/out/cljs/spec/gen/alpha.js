// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36476 = arguments.length;
var i__29506__auto___36477 = (0);
while(true){
if((i__29506__auto___36477 < len__29505__auto___36476)){
args__29512__auto__.push((arguments[i__29506__auto___36477]));

var G__36478 = (i__29506__auto___36477 + (1));
i__29506__auto___36477 = G__36478;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq36475){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36475));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36480 = arguments.length;
var i__29506__auto___36481 = (0);
while(true){
if((i__29506__auto___36481 < len__29505__auto___36480)){
args__29512__auto__.push((arguments[i__29506__auto___36481]));

var G__36482 = (i__29506__auto___36481 + (1));
i__29506__auto___36481 = G__36482;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq36479){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36479));
});

var g_QMARK__36483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_36484 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36483){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__36483))
,null));
var mkg_36485 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36483,g_36484){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__36483,g_36484))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__36483,g_36484,mkg_36485){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36483).call(null,x);
});})(g_QMARK__36483,g_36484,mkg_36485))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__36483,g_36484,mkg_36485){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_36485).call(null,gfn);
});})(g_QMARK__36483,g_36484,mkg_36485))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__36483,g_36484,mkg_36485){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_36484).call(null,generator);
});})(g_QMARK__36483,g_36484,mkg_36485))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29598__auto___36505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29598__auto___36505){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36506 = arguments.length;
var i__29506__auto___36507 = (0);
while(true){
if((i__29506__auto___36507 < len__29505__auto___36506)){
args__29512__auto__.push((arguments[i__29506__auto___36507]));

var G__36508 = (i__29506__auto___36507 + (1));
i__29506__auto___36507 = G__36508;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36505))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36505),args);
});})(g__29598__auto___36505))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29598__auto___36505){
return (function (seq36486){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36486));
});})(g__29598__auto___36505))
;


var g__29598__auto___36509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29598__auto___36509){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36510 = arguments.length;
var i__29506__auto___36511 = (0);
while(true){
if((i__29506__auto___36511 < len__29505__auto___36510)){
args__29512__auto__.push((arguments[i__29506__auto___36511]));

var G__36512 = (i__29506__auto___36511 + (1));
i__29506__auto___36511 = G__36512;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36509))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36509),args);
});})(g__29598__auto___36509))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29598__auto___36509){
return (function (seq36487){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36487));
});})(g__29598__auto___36509))
;


var g__29598__auto___36513 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29598__auto___36513){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36514 = arguments.length;
var i__29506__auto___36515 = (0);
while(true){
if((i__29506__auto___36515 < len__29505__auto___36514)){
args__29512__auto__.push((arguments[i__29506__auto___36515]));

var G__36516 = (i__29506__auto___36515 + (1));
i__29506__auto___36515 = G__36516;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36513))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36513),args);
});})(g__29598__auto___36513))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29598__auto___36513){
return (function (seq36488){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36488));
});})(g__29598__auto___36513))
;


var g__29598__auto___36517 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29598__auto___36517){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36518 = arguments.length;
var i__29506__auto___36519 = (0);
while(true){
if((i__29506__auto___36519 < len__29505__auto___36518)){
args__29512__auto__.push((arguments[i__29506__auto___36519]));

var G__36520 = (i__29506__auto___36519 + (1));
i__29506__auto___36519 = G__36520;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36517))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36517),args);
});})(g__29598__auto___36517))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29598__auto___36517){
return (function (seq36489){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36489));
});})(g__29598__auto___36517))
;


var g__29598__auto___36521 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29598__auto___36521){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36522 = arguments.length;
var i__29506__auto___36523 = (0);
while(true){
if((i__29506__auto___36523 < len__29505__auto___36522)){
args__29512__auto__.push((arguments[i__29506__auto___36523]));

var G__36524 = (i__29506__auto___36523 + (1));
i__29506__auto___36523 = G__36524;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36521))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36521),args);
});})(g__29598__auto___36521))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29598__auto___36521){
return (function (seq36490){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36490));
});})(g__29598__auto___36521))
;


var g__29598__auto___36525 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29598__auto___36525){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36526 = arguments.length;
var i__29506__auto___36527 = (0);
while(true){
if((i__29506__auto___36527 < len__29505__auto___36526)){
args__29512__auto__.push((arguments[i__29506__auto___36527]));

var G__36528 = (i__29506__auto___36527 + (1));
i__29506__auto___36527 = G__36528;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36525))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36525),args);
});})(g__29598__auto___36525))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29598__auto___36525){
return (function (seq36491){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36491));
});})(g__29598__auto___36525))
;


var g__29598__auto___36529 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29598__auto___36529){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36530 = arguments.length;
var i__29506__auto___36531 = (0);
while(true){
if((i__29506__auto___36531 < len__29505__auto___36530)){
args__29512__auto__.push((arguments[i__29506__auto___36531]));

var G__36532 = (i__29506__auto___36531 + (1));
i__29506__auto___36531 = G__36532;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36529))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36529){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36529),args);
});})(g__29598__auto___36529))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29598__auto___36529){
return (function (seq36492){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36492));
});})(g__29598__auto___36529))
;


var g__29598__auto___36533 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29598__auto___36533){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36534 = arguments.length;
var i__29506__auto___36535 = (0);
while(true){
if((i__29506__auto___36535 < len__29505__auto___36534)){
args__29512__auto__.push((arguments[i__29506__auto___36535]));

var G__36536 = (i__29506__auto___36535 + (1));
i__29506__auto___36535 = G__36536;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36533))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36533){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36533),args);
});})(g__29598__auto___36533))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29598__auto___36533){
return (function (seq36493){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36493));
});})(g__29598__auto___36533))
;


var g__29598__auto___36537 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29598__auto___36537){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36538 = arguments.length;
var i__29506__auto___36539 = (0);
while(true){
if((i__29506__auto___36539 < len__29505__auto___36538)){
args__29512__auto__.push((arguments[i__29506__auto___36539]));

var G__36540 = (i__29506__auto___36539 + (1));
i__29506__auto___36539 = G__36540;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36537))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36537),args);
});})(g__29598__auto___36537))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29598__auto___36537){
return (function (seq36494){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36494));
});})(g__29598__auto___36537))
;


var g__29598__auto___36541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29598__auto___36541){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36542 = arguments.length;
var i__29506__auto___36543 = (0);
while(true){
if((i__29506__auto___36543 < len__29505__auto___36542)){
args__29512__auto__.push((arguments[i__29506__auto___36543]));

var G__36544 = (i__29506__auto___36543 + (1));
i__29506__auto___36543 = G__36544;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36541))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36541){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36541),args);
});})(g__29598__auto___36541))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29598__auto___36541){
return (function (seq36495){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36495));
});})(g__29598__auto___36541))
;


var g__29598__auto___36545 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29598__auto___36545){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36546 = arguments.length;
var i__29506__auto___36547 = (0);
while(true){
if((i__29506__auto___36547 < len__29505__auto___36546)){
args__29512__auto__.push((arguments[i__29506__auto___36547]));

var G__36548 = (i__29506__auto___36547 + (1));
i__29506__auto___36547 = G__36548;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36545))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36545),args);
});})(g__29598__auto___36545))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29598__auto___36545){
return (function (seq36496){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36496));
});})(g__29598__auto___36545))
;


var g__29598__auto___36549 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29598__auto___36549){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36550 = arguments.length;
var i__29506__auto___36551 = (0);
while(true){
if((i__29506__auto___36551 < len__29505__auto___36550)){
args__29512__auto__.push((arguments[i__29506__auto___36551]));

var G__36552 = (i__29506__auto___36551 + (1));
i__29506__auto___36551 = G__36552;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36549))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36549),args);
});})(g__29598__auto___36549))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29598__auto___36549){
return (function (seq36497){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36497));
});})(g__29598__auto___36549))
;


var g__29598__auto___36553 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29598__auto___36553){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36554 = arguments.length;
var i__29506__auto___36555 = (0);
while(true){
if((i__29506__auto___36555 < len__29505__auto___36554)){
args__29512__auto__.push((arguments[i__29506__auto___36555]));

var G__36556 = (i__29506__auto___36555 + (1));
i__29506__auto___36555 = G__36556;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36553))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36553),args);
});})(g__29598__auto___36553))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29598__auto___36553){
return (function (seq36498){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36498));
});})(g__29598__auto___36553))
;


var g__29598__auto___36557 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29598__auto___36557){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36558 = arguments.length;
var i__29506__auto___36559 = (0);
while(true){
if((i__29506__auto___36559 < len__29505__auto___36558)){
args__29512__auto__.push((arguments[i__29506__auto___36559]));

var G__36560 = (i__29506__auto___36559 + (1));
i__29506__auto___36559 = G__36560;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36557))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36557),args);
});})(g__29598__auto___36557))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29598__auto___36557){
return (function (seq36499){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36499));
});})(g__29598__auto___36557))
;


var g__29598__auto___36561 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29598__auto___36561){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36562 = arguments.length;
var i__29506__auto___36563 = (0);
while(true){
if((i__29506__auto___36563 < len__29505__auto___36562)){
args__29512__auto__.push((arguments[i__29506__auto___36563]));

var G__36564 = (i__29506__auto___36563 + (1));
i__29506__auto___36563 = G__36564;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36561))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36561),args);
});})(g__29598__auto___36561))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29598__auto___36561){
return (function (seq36500){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36500));
});})(g__29598__auto___36561))
;


var g__29598__auto___36565 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29598__auto___36565){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36566 = arguments.length;
var i__29506__auto___36567 = (0);
while(true){
if((i__29506__auto___36567 < len__29505__auto___36566)){
args__29512__auto__.push((arguments[i__29506__auto___36567]));

var G__36568 = (i__29506__auto___36567 + (1));
i__29506__auto___36567 = G__36568;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36565))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36565),args);
});})(g__29598__auto___36565))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29598__auto___36565){
return (function (seq36501){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36501));
});})(g__29598__auto___36565))
;


var g__29598__auto___36569 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29598__auto___36569){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36570 = arguments.length;
var i__29506__auto___36571 = (0);
while(true){
if((i__29506__auto___36571 < len__29505__auto___36570)){
args__29512__auto__.push((arguments[i__29506__auto___36571]));

var G__36572 = (i__29506__auto___36571 + (1));
i__29506__auto___36571 = G__36572;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36569))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36569),args);
});})(g__29598__auto___36569))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29598__auto___36569){
return (function (seq36502){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36502));
});})(g__29598__auto___36569))
;


var g__29598__auto___36573 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29598__auto___36573){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36574 = arguments.length;
var i__29506__auto___36575 = (0);
while(true){
if((i__29506__auto___36575 < len__29505__auto___36574)){
args__29512__auto__.push((arguments[i__29506__auto___36575]));

var G__36576 = (i__29506__auto___36575 + (1));
i__29506__auto___36575 = G__36576;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36573))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36573),args);
});})(g__29598__auto___36573))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29598__auto___36573){
return (function (seq36503){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36503));
});})(g__29598__auto___36573))
;


var g__29598__auto___36577 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29598__auto___36577){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36578 = arguments.length;
var i__29506__auto___36579 = (0);
while(true){
if((i__29506__auto___36579 < len__29505__auto___36578)){
args__29512__auto__.push((arguments[i__29506__auto___36579]));

var G__36580 = (i__29506__auto___36579 + (1));
i__29506__auto___36579 = G__36580;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29598__auto___36577))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29598__auto___36577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29598__auto___36577),args);
});})(g__29598__auto___36577))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29598__auto___36577){
return (function (seq36504){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36504));
});})(g__29598__auto___36577))
;

var g__29611__auto___36602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29611__auto___36602){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36603 = arguments.length;
var i__29506__auto___36604 = (0);
while(true){
if((i__29506__auto___36604 < len__29505__auto___36603)){
args__29512__auto__.push((arguments[i__29506__auto___36604]));

var G__36605 = (i__29506__auto___36604 + (1));
i__29506__auto___36604 = G__36605;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36602))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36602){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36602);
});})(g__29611__auto___36602))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29611__auto___36602){
return (function (seq36581){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36581));
});})(g__29611__auto___36602))
;


var g__29611__auto___36606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29611__auto___36606){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36607 = arguments.length;
var i__29506__auto___36608 = (0);
while(true){
if((i__29506__auto___36608 < len__29505__auto___36607)){
args__29512__auto__.push((arguments[i__29506__auto___36608]));

var G__36609 = (i__29506__auto___36608 + (1));
i__29506__auto___36608 = G__36609;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36606))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36606){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36606);
});})(g__29611__auto___36606))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29611__auto___36606){
return (function (seq36582){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36582));
});})(g__29611__auto___36606))
;


var g__29611__auto___36610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29611__auto___36610){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36611 = arguments.length;
var i__29506__auto___36612 = (0);
while(true){
if((i__29506__auto___36612 < len__29505__auto___36611)){
args__29512__auto__.push((arguments[i__29506__auto___36612]));

var G__36613 = (i__29506__auto___36612 + (1));
i__29506__auto___36612 = G__36613;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36610))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36610){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36610);
});})(g__29611__auto___36610))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29611__auto___36610){
return (function (seq36583){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36583));
});})(g__29611__auto___36610))
;


var g__29611__auto___36614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29611__auto___36614){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36615 = arguments.length;
var i__29506__auto___36616 = (0);
while(true){
if((i__29506__auto___36616 < len__29505__auto___36615)){
args__29512__auto__.push((arguments[i__29506__auto___36616]));

var G__36617 = (i__29506__auto___36616 + (1));
i__29506__auto___36616 = G__36617;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36614))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36614){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36614);
});})(g__29611__auto___36614))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29611__auto___36614){
return (function (seq36584){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36584));
});})(g__29611__auto___36614))
;


var g__29611__auto___36618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29611__auto___36618){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36619 = arguments.length;
var i__29506__auto___36620 = (0);
while(true){
if((i__29506__auto___36620 < len__29505__auto___36619)){
args__29512__auto__.push((arguments[i__29506__auto___36620]));

var G__36621 = (i__29506__auto___36620 + (1));
i__29506__auto___36620 = G__36621;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36618))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36618){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36618);
});})(g__29611__auto___36618))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29611__auto___36618){
return (function (seq36585){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36585));
});})(g__29611__auto___36618))
;


var g__29611__auto___36622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29611__auto___36622){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36623 = arguments.length;
var i__29506__auto___36624 = (0);
while(true){
if((i__29506__auto___36624 < len__29505__auto___36623)){
args__29512__auto__.push((arguments[i__29506__auto___36624]));

var G__36625 = (i__29506__auto___36624 + (1));
i__29506__auto___36624 = G__36625;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36622))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36622){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36622);
});})(g__29611__auto___36622))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29611__auto___36622){
return (function (seq36586){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36586));
});})(g__29611__auto___36622))
;


var g__29611__auto___36626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29611__auto___36626){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36627 = arguments.length;
var i__29506__auto___36628 = (0);
while(true){
if((i__29506__auto___36628 < len__29505__auto___36627)){
args__29512__auto__.push((arguments[i__29506__auto___36628]));

var G__36629 = (i__29506__auto___36628 + (1));
i__29506__auto___36628 = G__36629;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36626))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36626){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36626);
});})(g__29611__auto___36626))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29611__auto___36626){
return (function (seq36587){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36587));
});})(g__29611__auto___36626))
;


var g__29611__auto___36630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29611__auto___36630){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36631 = arguments.length;
var i__29506__auto___36632 = (0);
while(true){
if((i__29506__auto___36632 < len__29505__auto___36631)){
args__29512__auto__.push((arguments[i__29506__auto___36632]));

var G__36633 = (i__29506__auto___36632 + (1));
i__29506__auto___36632 = G__36633;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36630))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36630){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36630);
});})(g__29611__auto___36630))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29611__auto___36630){
return (function (seq36588){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36588));
});})(g__29611__auto___36630))
;


var g__29611__auto___36634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29611__auto___36634){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36635 = arguments.length;
var i__29506__auto___36636 = (0);
while(true){
if((i__29506__auto___36636 < len__29505__auto___36635)){
args__29512__auto__.push((arguments[i__29506__auto___36636]));

var G__36637 = (i__29506__auto___36636 + (1));
i__29506__auto___36636 = G__36637;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36634))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36634){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36634);
});})(g__29611__auto___36634))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29611__auto___36634){
return (function (seq36589){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36589));
});})(g__29611__auto___36634))
;


var g__29611__auto___36638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29611__auto___36638){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36639 = arguments.length;
var i__29506__auto___36640 = (0);
while(true){
if((i__29506__auto___36640 < len__29505__auto___36639)){
args__29512__auto__.push((arguments[i__29506__auto___36640]));

var G__36641 = (i__29506__auto___36640 + (1));
i__29506__auto___36640 = G__36641;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36638))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36638){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36638);
});})(g__29611__auto___36638))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29611__auto___36638){
return (function (seq36590){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36590));
});})(g__29611__auto___36638))
;


var g__29611__auto___36642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29611__auto___36642){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36643 = arguments.length;
var i__29506__auto___36644 = (0);
while(true){
if((i__29506__auto___36644 < len__29505__auto___36643)){
args__29512__auto__.push((arguments[i__29506__auto___36644]));

var G__36645 = (i__29506__auto___36644 + (1));
i__29506__auto___36644 = G__36645;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36642))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36642){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36642);
});})(g__29611__auto___36642))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29611__auto___36642){
return (function (seq36591){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36591));
});})(g__29611__auto___36642))
;


var g__29611__auto___36646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29611__auto___36646){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36647 = arguments.length;
var i__29506__auto___36648 = (0);
while(true){
if((i__29506__auto___36648 < len__29505__auto___36647)){
args__29512__auto__.push((arguments[i__29506__auto___36648]));

var G__36649 = (i__29506__auto___36648 + (1));
i__29506__auto___36648 = G__36649;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36646))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36646){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36646);
});})(g__29611__auto___36646))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29611__auto___36646){
return (function (seq36592){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36592));
});})(g__29611__auto___36646))
;


var g__29611__auto___36650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29611__auto___36650){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36651 = arguments.length;
var i__29506__auto___36652 = (0);
while(true){
if((i__29506__auto___36652 < len__29505__auto___36651)){
args__29512__auto__.push((arguments[i__29506__auto___36652]));

var G__36653 = (i__29506__auto___36652 + (1));
i__29506__auto___36652 = G__36653;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36650))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36650){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36650);
});})(g__29611__auto___36650))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29611__auto___36650){
return (function (seq36593){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36593));
});})(g__29611__auto___36650))
;


var g__29611__auto___36654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29611__auto___36654){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36655 = arguments.length;
var i__29506__auto___36656 = (0);
while(true){
if((i__29506__auto___36656 < len__29505__auto___36655)){
args__29512__auto__.push((arguments[i__29506__auto___36656]));

var G__36657 = (i__29506__auto___36656 + (1));
i__29506__auto___36656 = G__36657;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36654))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36654){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36654);
});})(g__29611__auto___36654))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29611__auto___36654){
return (function (seq36594){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36594));
});})(g__29611__auto___36654))
;


var g__29611__auto___36658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29611__auto___36658){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36659 = arguments.length;
var i__29506__auto___36660 = (0);
while(true){
if((i__29506__auto___36660 < len__29505__auto___36659)){
args__29512__auto__.push((arguments[i__29506__auto___36660]));

var G__36661 = (i__29506__auto___36660 + (1));
i__29506__auto___36660 = G__36661;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36658))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36658){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36658);
});})(g__29611__auto___36658))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29611__auto___36658){
return (function (seq36595){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36595));
});})(g__29611__auto___36658))
;


var g__29611__auto___36662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29611__auto___36662){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36663 = arguments.length;
var i__29506__auto___36664 = (0);
while(true){
if((i__29506__auto___36664 < len__29505__auto___36663)){
args__29512__auto__.push((arguments[i__29506__auto___36664]));

var G__36665 = (i__29506__auto___36664 + (1));
i__29506__auto___36664 = G__36665;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36662))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36662){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36662);
});})(g__29611__auto___36662))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29611__auto___36662){
return (function (seq36596){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36596));
});})(g__29611__auto___36662))
;


var g__29611__auto___36666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29611__auto___36666){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36667 = arguments.length;
var i__29506__auto___36668 = (0);
while(true){
if((i__29506__auto___36668 < len__29505__auto___36667)){
args__29512__auto__.push((arguments[i__29506__auto___36668]));

var G__36669 = (i__29506__auto___36668 + (1));
i__29506__auto___36668 = G__36669;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36666))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36666){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36666);
});})(g__29611__auto___36666))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29611__auto___36666){
return (function (seq36597){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36597));
});})(g__29611__auto___36666))
;


var g__29611__auto___36670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29611__auto___36670){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36671 = arguments.length;
var i__29506__auto___36672 = (0);
while(true){
if((i__29506__auto___36672 < len__29505__auto___36671)){
args__29512__auto__.push((arguments[i__29506__auto___36672]));

var G__36673 = (i__29506__auto___36672 + (1));
i__29506__auto___36672 = G__36673;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36670))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36670){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36670);
});})(g__29611__auto___36670))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29611__auto___36670){
return (function (seq36598){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36598));
});})(g__29611__auto___36670))
;


var g__29611__auto___36674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29611__auto___36674){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36675 = arguments.length;
var i__29506__auto___36676 = (0);
while(true){
if((i__29506__auto___36676 < len__29505__auto___36675)){
args__29512__auto__.push((arguments[i__29506__auto___36676]));

var G__36677 = (i__29506__auto___36676 + (1));
i__29506__auto___36676 = G__36677;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36674))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36674){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36674);
});})(g__29611__auto___36674))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29611__auto___36674){
return (function (seq36599){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36599));
});})(g__29611__auto___36674))
;


var g__29611__auto___36678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29611__auto___36678){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36679 = arguments.length;
var i__29506__auto___36680 = (0);
while(true){
if((i__29506__auto___36680 < len__29505__auto___36679)){
args__29512__auto__.push((arguments[i__29506__auto___36680]));

var G__36681 = (i__29506__auto___36680 + (1));
i__29506__auto___36680 = G__36681;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36678))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36678){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36678);
});})(g__29611__auto___36678))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29611__auto___36678){
return (function (seq36600){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36600));
});})(g__29611__auto___36678))
;


var g__29611__auto___36682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29611__auto___36682){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36683 = arguments.length;
var i__29506__auto___36684 = (0);
while(true){
if((i__29506__auto___36684 < len__29505__auto___36683)){
args__29512__auto__.push((arguments[i__29506__auto___36684]));

var G__36685 = (i__29506__auto___36684 + (1));
i__29506__auto___36684 = G__36685;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});})(g__29611__auto___36682))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29611__auto___36682){
return (function (args){
return cljs.core.deref.call(null,g__29611__auto___36682);
});})(g__29611__auto___36682))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29611__auto___36682){
return (function (seq36601){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36601));
});})(g__29611__auto___36682))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29512__auto__ = [];
var len__29505__auto___36688 = arguments.length;
var i__29506__auto___36689 = (0);
while(true){
if((i__29506__auto___36689 < len__29505__auto___36688)){
args__29512__auto__.push((arguments[i__29506__auto___36689]));

var G__36690 = (i__29506__auto___36689 + (1));
i__29506__auto___36689 = G__36690;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__36686_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36686_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq36687){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36687));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__36691_SHARP_){
return (new Date(p1__36691_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1517031115086
