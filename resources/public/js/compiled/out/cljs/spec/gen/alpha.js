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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__37486__auto__ = [];
var len__37479__auto___43384 = arguments.length;
var i__37480__auto___43385 = (0);
while(true){
if((i__37480__auto___43385 < len__37479__auto___43384)){
args__37486__auto__.push((arguments[i__37480__auto___43385]));

var G__43386 = (i__37480__auto___43385 + (1));
i__37480__auto___43385 = G__43386;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq43383){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43383));
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
var args__37486__auto__ = [];
var len__37479__auto___43388 = arguments.length;
var i__37480__auto___43389 = (0);
while(true){
if((i__37480__auto___43389 < len__37479__auto___43388)){
args__37486__auto__.push((arguments[i__37480__auto___43389]));

var G__43390 = (i__37480__auto___43389 + (1));
i__37480__auto___43389 = G__43390;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq43387){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43387));
});

var g_QMARK__43391 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_43392 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__43391){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__43391))
,null));
var mkg_43393 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__43391,g_43392){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__43391,g_43392))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__43391,g_43392,mkg_43393){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__43391).call(null,x);
});})(g_QMARK__43391,g_43392,mkg_43393))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__43391,g_43392,mkg_43393){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_43393).call(null,gfn);
});})(g_QMARK__43391,g_43392,mkg_43393))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__43391,g_43392,mkg_43393){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_43392).call(null,generator);
});})(g_QMARK__43391,g_43392,mkg_43393))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__37572__auto___43413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__37572__auto___43413){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43414 = arguments.length;
var i__37480__auto___43415 = (0);
while(true){
if((i__37480__auto___43415 < len__37479__auto___43414)){
args__37486__auto__.push((arguments[i__37480__auto___43415]));

var G__43416 = (i__37480__auto___43415 + (1));
i__37480__auto___43415 = G__43416;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43413))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43413),args);
});})(g__37572__auto___43413))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__37572__auto___43413){
return (function (seq43394){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43394));
});})(g__37572__auto___43413))
;


var g__37572__auto___43417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__37572__auto___43417){
return (function cljs$spec$gen$alpha$list(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43418 = arguments.length;
var i__37480__auto___43419 = (0);
while(true){
if((i__37480__auto___43419 < len__37479__auto___43418)){
args__37486__auto__.push((arguments[i__37480__auto___43419]));

var G__43420 = (i__37480__auto___43419 + (1));
i__37480__auto___43419 = G__43420;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43417))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43417),args);
});})(g__37572__auto___43417))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__37572__auto___43417){
return (function (seq43395){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43395));
});})(g__37572__auto___43417))
;


var g__37572__auto___43421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__37572__auto___43421){
return (function cljs$spec$gen$alpha$map(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43422 = arguments.length;
var i__37480__auto___43423 = (0);
while(true){
if((i__37480__auto___43423 < len__37479__auto___43422)){
args__37486__auto__.push((arguments[i__37480__auto___43423]));

var G__43424 = (i__37480__auto___43423 + (1));
i__37480__auto___43423 = G__43424;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43421))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43421),args);
});})(g__37572__auto___43421))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__37572__auto___43421){
return (function (seq43396){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43396));
});})(g__37572__auto___43421))
;


var g__37572__auto___43425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__37572__auto___43425){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43426 = arguments.length;
var i__37480__auto___43427 = (0);
while(true){
if((i__37480__auto___43427 < len__37479__auto___43426)){
args__37486__auto__.push((arguments[i__37480__auto___43427]));

var G__43428 = (i__37480__auto___43427 + (1));
i__37480__auto___43427 = G__43428;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43425))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43425),args);
});})(g__37572__auto___43425))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__37572__auto___43425){
return (function (seq43397){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43397));
});})(g__37572__auto___43425))
;


var g__37572__auto___43429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__37572__auto___43429){
return (function cljs$spec$gen$alpha$set(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43430 = arguments.length;
var i__37480__auto___43431 = (0);
while(true){
if((i__37480__auto___43431 < len__37479__auto___43430)){
args__37486__auto__.push((arguments[i__37480__auto___43431]));

var G__43432 = (i__37480__auto___43431 + (1));
i__37480__auto___43431 = G__43432;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43429))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43429),args);
});})(g__37572__auto___43429))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__37572__auto___43429){
return (function (seq43398){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43398));
});})(g__37572__auto___43429))
;


var g__37572__auto___43433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__37572__auto___43433){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43434 = arguments.length;
var i__37480__auto___43435 = (0);
while(true){
if((i__37480__auto___43435 < len__37479__auto___43434)){
args__37486__auto__.push((arguments[i__37480__auto___43435]));

var G__43436 = (i__37480__auto___43435 + (1));
i__37480__auto___43435 = G__43436;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43433))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43433),args);
});})(g__37572__auto___43433))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__37572__auto___43433){
return (function (seq43399){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43399));
});})(g__37572__auto___43433))
;


var g__37572__auto___43437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__37572__auto___43437){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43438 = arguments.length;
var i__37480__auto___43439 = (0);
while(true){
if((i__37480__auto___43439 < len__37479__auto___43438)){
args__37486__auto__.push((arguments[i__37480__auto___43439]));

var G__43440 = (i__37480__auto___43439 + (1));
i__37480__auto___43439 = G__43440;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43437))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43437),args);
});})(g__37572__auto___43437))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__37572__auto___43437){
return (function (seq43400){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43400));
});})(g__37572__auto___43437))
;


var g__37572__auto___43441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__37572__auto___43441){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43442 = arguments.length;
var i__37480__auto___43443 = (0);
while(true){
if((i__37480__auto___43443 < len__37479__auto___43442)){
args__37486__auto__.push((arguments[i__37480__auto___43443]));

var G__43444 = (i__37480__auto___43443 + (1));
i__37480__auto___43443 = G__43444;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43441))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43441),args);
});})(g__37572__auto___43441))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__37572__auto___43441){
return (function (seq43401){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43401));
});})(g__37572__auto___43441))
;


var g__37572__auto___43445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__37572__auto___43445){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43446 = arguments.length;
var i__37480__auto___43447 = (0);
while(true){
if((i__37480__auto___43447 < len__37479__auto___43446)){
args__37486__auto__.push((arguments[i__37480__auto___43447]));

var G__43448 = (i__37480__auto___43447 + (1));
i__37480__auto___43447 = G__43448;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43445))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43445),args);
});})(g__37572__auto___43445))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__37572__auto___43445){
return (function (seq43402){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43402));
});})(g__37572__auto___43445))
;


var g__37572__auto___43449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__37572__auto___43449){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43450 = arguments.length;
var i__37480__auto___43451 = (0);
while(true){
if((i__37480__auto___43451 < len__37479__auto___43450)){
args__37486__auto__.push((arguments[i__37480__auto___43451]));

var G__43452 = (i__37480__auto___43451 + (1));
i__37480__auto___43451 = G__43452;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43449))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43449),args);
});})(g__37572__auto___43449))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__37572__auto___43449){
return (function (seq43403){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43403));
});})(g__37572__auto___43449))
;


var g__37572__auto___43453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__37572__auto___43453){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43454 = arguments.length;
var i__37480__auto___43455 = (0);
while(true){
if((i__37480__auto___43455 < len__37479__auto___43454)){
args__37486__auto__.push((arguments[i__37480__auto___43455]));

var G__43456 = (i__37480__auto___43455 + (1));
i__37480__auto___43455 = G__43456;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43453))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43453),args);
});})(g__37572__auto___43453))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__37572__auto___43453){
return (function (seq43404){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43404));
});})(g__37572__auto___43453))
;


var g__37572__auto___43457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__37572__auto___43457){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43458 = arguments.length;
var i__37480__auto___43459 = (0);
while(true){
if((i__37480__auto___43459 < len__37479__auto___43458)){
args__37486__auto__.push((arguments[i__37480__auto___43459]));

var G__43460 = (i__37480__auto___43459 + (1));
i__37480__auto___43459 = G__43460;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43457))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43457),args);
});})(g__37572__auto___43457))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__37572__auto___43457){
return (function (seq43405){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43405));
});})(g__37572__auto___43457))
;


var g__37572__auto___43461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__37572__auto___43461){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43462 = arguments.length;
var i__37480__auto___43463 = (0);
while(true){
if((i__37480__auto___43463 < len__37479__auto___43462)){
args__37486__auto__.push((arguments[i__37480__auto___43463]));

var G__43464 = (i__37480__auto___43463 + (1));
i__37480__auto___43463 = G__43464;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43461))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43461),args);
});})(g__37572__auto___43461))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__37572__auto___43461){
return (function (seq43406){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43406));
});})(g__37572__auto___43461))
;


var g__37572__auto___43465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__37572__auto___43465){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43466 = arguments.length;
var i__37480__auto___43467 = (0);
while(true){
if((i__37480__auto___43467 < len__37479__auto___43466)){
args__37486__auto__.push((arguments[i__37480__auto___43467]));

var G__43468 = (i__37480__auto___43467 + (1));
i__37480__auto___43467 = G__43468;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43465))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43465),args);
});})(g__37572__auto___43465))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__37572__auto___43465){
return (function (seq43407){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43407));
});})(g__37572__auto___43465))
;


var g__37572__auto___43469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__37572__auto___43469){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43470 = arguments.length;
var i__37480__auto___43471 = (0);
while(true){
if((i__37480__auto___43471 < len__37479__auto___43470)){
args__37486__auto__.push((arguments[i__37480__auto___43471]));

var G__43472 = (i__37480__auto___43471 + (1));
i__37480__auto___43471 = G__43472;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43469))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43469),args);
});})(g__37572__auto___43469))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__37572__auto___43469){
return (function (seq43408){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43408));
});})(g__37572__auto___43469))
;


var g__37572__auto___43473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__37572__auto___43473){
return (function cljs$spec$gen$alpha$return(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43474 = arguments.length;
var i__37480__auto___43475 = (0);
while(true){
if((i__37480__auto___43475 < len__37479__auto___43474)){
args__37486__auto__.push((arguments[i__37480__auto___43475]));

var G__43476 = (i__37480__auto___43475 + (1));
i__37480__auto___43475 = G__43476;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43473))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43473),args);
});})(g__37572__auto___43473))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__37572__auto___43473){
return (function (seq43409){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43409));
});})(g__37572__auto___43473))
;


var g__37572__auto___43477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__37572__auto___43477){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43478 = arguments.length;
var i__37480__auto___43479 = (0);
while(true){
if((i__37480__auto___43479 < len__37479__auto___43478)){
args__37486__auto__.push((arguments[i__37480__auto___43479]));

var G__43480 = (i__37480__auto___43479 + (1));
i__37480__auto___43479 = G__43480;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43477))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43477),args);
});})(g__37572__auto___43477))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__37572__auto___43477){
return (function (seq43410){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43410));
});})(g__37572__auto___43477))
;


var g__37572__auto___43481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__37572__auto___43481){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43482 = arguments.length;
var i__37480__auto___43483 = (0);
while(true){
if((i__37480__auto___43483 < len__37479__auto___43482)){
args__37486__auto__.push((arguments[i__37480__auto___43483]));

var G__43484 = (i__37480__auto___43483 + (1));
i__37480__auto___43483 = G__43484;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43481))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43481),args);
});})(g__37572__auto___43481))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__37572__auto___43481){
return (function (seq43411){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43411));
});})(g__37572__auto___43481))
;


var g__37572__auto___43485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__37572__auto___43485){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43486 = arguments.length;
var i__37480__auto___43487 = (0);
while(true){
if((i__37480__auto___43487 < len__37479__auto___43486)){
args__37486__auto__.push((arguments[i__37480__auto___43487]));

var G__43488 = (i__37480__auto___43487 + (1));
i__37480__auto___43487 = G__43488;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37572__auto___43485))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37572__auto___43485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37572__auto___43485),args);
});})(g__37572__auto___43485))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__37572__auto___43485){
return (function (seq43412){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43412));
});})(g__37572__auto___43485))
;

var g__37585__auto___43510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__37585__auto___43510){
return (function cljs$spec$gen$alpha$any(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43511 = arguments.length;
var i__37480__auto___43512 = (0);
while(true){
if((i__37480__auto___43512 < len__37479__auto___43511)){
args__37486__auto__.push((arguments[i__37480__auto___43512]));

var G__43513 = (i__37480__auto___43512 + (1));
i__37480__auto___43512 = G__43513;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43510))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43510){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43510);
});})(g__37585__auto___43510))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__37585__auto___43510){
return (function (seq43489){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43489));
});})(g__37585__auto___43510))
;


var g__37585__auto___43514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__37585__auto___43514){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43515 = arguments.length;
var i__37480__auto___43516 = (0);
while(true){
if((i__37480__auto___43516 < len__37479__auto___43515)){
args__37486__auto__.push((arguments[i__37480__auto___43516]));

var G__43517 = (i__37480__auto___43516 + (1));
i__37480__auto___43516 = G__43517;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43514))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43514){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43514);
});})(g__37585__auto___43514))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__37585__auto___43514){
return (function (seq43490){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43490));
});})(g__37585__auto___43514))
;


var g__37585__auto___43518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__37585__auto___43518){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43519 = arguments.length;
var i__37480__auto___43520 = (0);
while(true){
if((i__37480__auto___43520 < len__37479__auto___43519)){
args__37486__auto__.push((arguments[i__37480__auto___43520]));

var G__43521 = (i__37480__auto___43520 + (1));
i__37480__auto___43520 = G__43521;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43518))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43518){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43518);
});})(g__37585__auto___43518))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__37585__auto___43518){
return (function (seq43491){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43491));
});})(g__37585__auto___43518))
;


var g__37585__auto___43522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__37585__auto___43522){
return (function cljs$spec$gen$alpha$char(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43523 = arguments.length;
var i__37480__auto___43524 = (0);
while(true){
if((i__37480__auto___43524 < len__37479__auto___43523)){
args__37486__auto__.push((arguments[i__37480__auto___43524]));

var G__43525 = (i__37480__auto___43524 + (1));
i__37480__auto___43524 = G__43525;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43522))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43522){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43522);
});})(g__37585__auto___43522))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__37585__auto___43522){
return (function (seq43492){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43492));
});})(g__37585__auto___43522))
;


var g__37585__auto___43526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__37585__auto___43526){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43527 = arguments.length;
var i__37480__auto___43528 = (0);
while(true){
if((i__37480__auto___43528 < len__37479__auto___43527)){
args__37486__auto__.push((arguments[i__37480__auto___43528]));

var G__43529 = (i__37480__auto___43528 + (1));
i__37480__auto___43528 = G__43529;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43526))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43526){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43526);
});})(g__37585__auto___43526))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__37585__auto___43526){
return (function (seq43493){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43493));
});})(g__37585__auto___43526))
;


var g__37585__auto___43530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__37585__auto___43530){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43531 = arguments.length;
var i__37480__auto___43532 = (0);
while(true){
if((i__37480__auto___43532 < len__37479__auto___43531)){
args__37486__auto__.push((arguments[i__37480__auto___43532]));

var G__43533 = (i__37480__auto___43532 + (1));
i__37480__auto___43532 = G__43533;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43530))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43530){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43530);
});})(g__37585__auto___43530))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__37585__auto___43530){
return (function (seq43494){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43494));
});})(g__37585__auto___43530))
;


var g__37585__auto___43534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__37585__auto___43534){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43535 = arguments.length;
var i__37480__auto___43536 = (0);
while(true){
if((i__37480__auto___43536 < len__37479__auto___43535)){
args__37486__auto__.push((arguments[i__37480__auto___43536]));

var G__43537 = (i__37480__auto___43536 + (1));
i__37480__auto___43536 = G__43537;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43534))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43534){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43534);
});})(g__37585__auto___43534))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__37585__auto___43534){
return (function (seq43495){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43495));
});})(g__37585__auto___43534))
;


var g__37585__auto___43538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__37585__auto___43538){
return (function cljs$spec$gen$alpha$double(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43539 = arguments.length;
var i__37480__auto___43540 = (0);
while(true){
if((i__37480__auto___43540 < len__37479__auto___43539)){
args__37486__auto__.push((arguments[i__37480__auto___43540]));

var G__43541 = (i__37480__auto___43540 + (1));
i__37480__auto___43540 = G__43541;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43538))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43538){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43538);
});})(g__37585__auto___43538))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__37585__auto___43538){
return (function (seq43496){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43496));
});})(g__37585__auto___43538))
;


var g__37585__auto___43542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__37585__auto___43542){
return (function cljs$spec$gen$alpha$int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43543 = arguments.length;
var i__37480__auto___43544 = (0);
while(true){
if((i__37480__auto___43544 < len__37479__auto___43543)){
args__37486__auto__.push((arguments[i__37480__auto___43544]));

var G__43545 = (i__37480__auto___43544 + (1));
i__37480__auto___43544 = G__43545;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43542))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43542){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43542);
});})(g__37585__auto___43542))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__37585__auto___43542){
return (function (seq43497){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43497));
});})(g__37585__auto___43542))
;


var g__37585__auto___43546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__37585__auto___43546){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43547 = arguments.length;
var i__37480__auto___43548 = (0);
while(true){
if((i__37480__auto___43548 < len__37479__auto___43547)){
args__37486__auto__.push((arguments[i__37480__auto___43548]));

var G__43549 = (i__37480__auto___43548 + (1));
i__37480__auto___43548 = G__43549;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43546))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43546){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43546);
});})(g__37585__auto___43546))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__37585__auto___43546){
return (function (seq43498){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43498));
});})(g__37585__auto___43546))
;


var g__37585__auto___43550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__37585__auto___43550){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43551 = arguments.length;
var i__37480__auto___43552 = (0);
while(true){
if((i__37480__auto___43552 < len__37479__auto___43551)){
args__37486__auto__.push((arguments[i__37480__auto___43552]));

var G__43553 = (i__37480__auto___43552 + (1));
i__37480__auto___43552 = G__43553;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43550))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43550){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43550);
});})(g__37585__auto___43550))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__37585__auto___43550){
return (function (seq43499){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43499));
});})(g__37585__auto___43550))
;


var g__37585__auto___43554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__37585__auto___43554){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43555 = arguments.length;
var i__37480__auto___43556 = (0);
while(true){
if((i__37480__auto___43556 < len__37479__auto___43555)){
args__37486__auto__.push((arguments[i__37480__auto___43556]));

var G__43557 = (i__37480__auto___43556 + (1));
i__37480__auto___43556 = G__43557;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43554))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43554){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43554);
});})(g__37585__auto___43554))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__37585__auto___43554){
return (function (seq43500){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43500));
});})(g__37585__auto___43554))
;


var g__37585__auto___43558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__37585__auto___43558){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43559 = arguments.length;
var i__37480__auto___43560 = (0);
while(true){
if((i__37480__auto___43560 < len__37479__auto___43559)){
args__37486__auto__.push((arguments[i__37480__auto___43560]));

var G__43561 = (i__37480__auto___43560 + (1));
i__37480__auto___43560 = G__43561;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43558))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43558){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43558);
});})(g__37585__auto___43558))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__37585__auto___43558){
return (function (seq43501){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43501));
});})(g__37585__auto___43558))
;


var g__37585__auto___43562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__37585__auto___43562){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43563 = arguments.length;
var i__37480__auto___43564 = (0);
while(true){
if((i__37480__auto___43564 < len__37479__auto___43563)){
args__37486__auto__.push((arguments[i__37480__auto___43564]));

var G__43565 = (i__37480__auto___43564 + (1));
i__37480__auto___43564 = G__43565;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43562))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43562){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43562);
});})(g__37585__auto___43562))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__37585__auto___43562){
return (function (seq43502){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43502));
});})(g__37585__auto___43562))
;


var g__37585__auto___43566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__37585__auto___43566){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43567 = arguments.length;
var i__37480__auto___43568 = (0);
while(true){
if((i__37480__auto___43568 < len__37479__auto___43567)){
args__37486__auto__.push((arguments[i__37480__auto___43568]));

var G__43569 = (i__37480__auto___43568 + (1));
i__37480__auto___43568 = G__43569;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43566))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43566){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43566);
});})(g__37585__auto___43566))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__37585__auto___43566){
return (function (seq43503){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43503));
});})(g__37585__auto___43566))
;


var g__37585__auto___43570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__37585__auto___43570){
return (function cljs$spec$gen$alpha$string(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43571 = arguments.length;
var i__37480__auto___43572 = (0);
while(true){
if((i__37480__auto___43572 < len__37479__auto___43571)){
args__37486__auto__.push((arguments[i__37480__auto___43572]));

var G__43573 = (i__37480__auto___43572 + (1));
i__37480__auto___43572 = G__43573;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43570))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43570){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43570);
});})(g__37585__auto___43570))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__37585__auto___43570){
return (function (seq43504){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43504));
});})(g__37585__auto___43570))
;


var g__37585__auto___43574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__37585__auto___43574){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43575 = arguments.length;
var i__37480__auto___43576 = (0);
while(true){
if((i__37480__auto___43576 < len__37479__auto___43575)){
args__37486__auto__.push((arguments[i__37480__auto___43576]));

var G__43577 = (i__37480__auto___43576 + (1));
i__37480__auto___43576 = G__43577;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43574))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43574){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43574);
});})(g__37585__auto___43574))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__37585__auto___43574){
return (function (seq43505){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43505));
});})(g__37585__auto___43574))
;


var g__37585__auto___43578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__37585__auto___43578){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43579 = arguments.length;
var i__37480__auto___43580 = (0);
while(true){
if((i__37480__auto___43580 < len__37479__auto___43579)){
args__37486__auto__.push((arguments[i__37480__auto___43580]));

var G__43581 = (i__37480__auto___43580 + (1));
i__37480__auto___43580 = G__43581;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43578))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43578){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43578);
});})(g__37585__auto___43578))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__37585__auto___43578){
return (function (seq43506){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43506));
});})(g__37585__auto___43578))
;


var g__37585__auto___43582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__37585__auto___43582){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43583 = arguments.length;
var i__37480__auto___43584 = (0);
while(true){
if((i__37480__auto___43584 < len__37479__auto___43583)){
args__37486__auto__.push((arguments[i__37480__auto___43584]));

var G__43585 = (i__37480__auto___43584 + (1));
i__37480__auto___43584 = G__43585;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43582))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43582){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43582);
});})(g__37585__auto___43582))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__37585__auto___43582){
return (function (seq43507){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43507));
});})(g__37585__auto___43582))
;


var g__37585__auto___43586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__37585__auto___43586){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43587 = arguments.length;
var i__37480__auto___43588 = (0);
while(true){
if((i__37480__auto___43588 < len__37479__auto___43587)){
args__37486__auto__.push((arguments[i__37480__auto___43588]));

var G__43589 = (i__37480__auto___43588 + (1));
i__37480__auto___43588 = G__43589;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43586))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43586){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43586);
});})(g__37585__auto___43586))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__37585__auto___43586){
return (function (seq43508){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43508));
});})(g__37585__auto___43586))
;


var g__37585__auto___43590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__37585__auto___43590){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43591 = arguments.length;
var i__37480__auto___43592 = (0);
while(true){
if((i__37480__auto___43592 < len__37479__auto___43591)){
args__37486__auto__.push((arguments[i__37480__auto___43592]));

var G__43593 = (i__37480__auto___43592 + (1));
i__37480__auto___43592 = G__43593;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});})(g__37585__auto___43590))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37585__auto___43590){
return (function (args){
return cljs.core.deref.call(null,g__37585__auto___43590);
});})(g__37585__auto___43590))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__37585__auto___43590){
return (function (seq43509){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43509));
});})(g__37585__auto___43590))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43596 = arguments.length;
var i__37480__auto___43597 = (0);
while(true){
if((i__37480__auto___43597 < len__37479__auto___43596)){
args__37486__auto__.push((arguments[i__37480__auto___43597]));

var G__43598 = (i__37480__auto___43597 + (1));
i__37480__auto___43597 = G__43598;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__43594_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__43594_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq43595){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43595));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__43599_SHARP_){
return (new Date(p1__43599_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1518330175536
