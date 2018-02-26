// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20260 = arguments.length;
var i__9668__auto___20261 = (0);
while(true){
if((i__9668__auto___20261 < len__9667__auto___20260)){
args__9674__auto__.push((arguments[i__9668__auto___20261]));

var G__20262 = (i__9668__auto___20261 + (1));
i__9668__auto___20261 = G__20262;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq20259){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20259));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20264 = arguments.length;
var i__9668__auto___20265 = (0);
while(true){
if((i__9668__auto___20265 < len__9667__auto___20264)){
args__9674__auto__.push((arguments[i__9668__auto___20265]));

var G__20266 = (i__9668__auto___20265 + (1));
i__9668__auto___20265 = G__20266;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq20263){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20263));
});

var g_QMARK__20270 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_20271 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__20270){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__20270))
,null));
var mkg_20272 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__20270,g_20271){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__20270,g_20271))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__20270,g_20271,mkg_20272){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__20267 = cljs.core.deref(g_QMARK__20270);
return (fexpr__20267.cljs$core$IFn$_invoke$arity$1 ? fexpr__20267.cljs$core$IFn$_invoke$arity$1(x) : fexpr__20267.call(null,x));
});})(g_QMARK__20270,g_20271,mkg_20272))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__20270,g_20271,mkg_20272){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__20268 = cljs.core.deref(mkg_20272);
return (fexpr__20268.cljs$core$IFn$_invoke$arity$1 ? fexpr__20268.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__20268.call(null,gfn));
});})(g_QMARK__20270,g_20271,mkg_20272))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__20270,g_20271,mkg_20272){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__20269 = cljs.core.deref(g_20271);
return (fexpr__20269.cljs$core$IFn$_invoke$arity$1 ? fexpr__20269.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__20269.call(null,generator));
});})(g_QMARK__20270,g_20271,mkg_20272))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__20273 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__20273.cljs$core$IFn$_invoke$arity$2 ? fexpr__20273.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__20273.call(null,rnd,size));
}));
});
var g__20231__auto___20293 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__20231__auto___20293){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20294 = arguments.length;
var i__9668__auto___20295 = (0);
while(true){
if((i__9668__auto___20295 < len__9667__auto___20294)){
args__9674__auto__.push((arguments[i__9668__auto___20295]));

var G__20296 = (i__9668__auto___20295 + (1));
i__9668__auto___20295 = G__20296;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20293))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20293){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20293),args);
});})(g__20231__auto___20293))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__20231__auto___20293){
return (function (seq20274){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20274));
});})(g__20231__auto___20293))
;


var g__20231__auto___20297 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__20231__auto___20297){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20298 = arguments.length;
var i__9668__auto___20299 = (0);
while(true){
if((i__9668__auto___20299 < len__9667__auto___20298)){
args__9674__auto__.push((arguments[i__9668__auto___20299]));

var G__20300 = (i__9668__auto___20299 + (1));
i__9668__auto___20299 = G__20300;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20297))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20297){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20297),args);
});})(g__20231__auto___20297))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__20231__auto___20297){
return (function (seq20275){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20275));
});})(g__20231__auto___20297))
;


var g__20231__auto___20301 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__20231__auto___20301){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20302 = arguments.length;
var i__9668__auto___20303 = (0);
while(true){
if((i__9668__auto___20303 < len__9667__auto___20302)){
args__9674__auto__.push((arguments[i__9668__auto___20303]));

var G__20304 = (i__9668__auto___20303 + (1));
i__9668__auto___20303 = G__20304;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20301))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20301){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20301),args);
});})(g__20231__auto___20301))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__20231__auto___20301){
return (function (seq20276){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20276));
});})(g__20231__auto___20301))
;


var g__20231__auto___20305 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__20231__auto___20305){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20306 = arguments.length;
var i__9668__auto___20307 = (0);
while(true){
if((i__9668__auto___20307 < len__9667__auto___20306)){
args__9674__auto__.push((arguments[i__9668__auto___20307]));

var G__20308 = (i__9668__auto___20307 + (1));
i__9668__auto___20307 = G__20308;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20305))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20305){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20305),args);
});})(g__20231__auto___20305))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__20231__auto___20305){
return (function (seq20277){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20277));
});})(g__20231__auto___20305))
;


var g__20231__auto___20309 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__20231__auto___20309){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20310 = arguments.length;
var i__9668__auto___20311 = (0);
while(true){
if((i__9668__auto___20311 < len__9667__auto___20310)){
args__9674__auto__.push((arguments[i__9668__auto___20311]));

var G__20312 = (i__9668__auto___20311 + (1));
i__9668__auto___20311 = G__20312;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20309))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20309){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20309),args);
});})(g__20231__auto___20309))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__20231__auto___20309){
return (function (seq20278){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20278));
});})(g__20231__auto___20309))
;


var g__20231__auto___20313 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__20231__auto___20313){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20314 = arguments.length;
var i__9668__auto___20315 = (0);
while(true){
if((i__9668__auto___20315 < len__9667__auto___20314)){
args__9674__auto__.push((arguments[i__9668__auto___20315]));

var G__20316 = (i__9668__auto___20315 + (1));
i__9668__auto___20315 = G__20316;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20313))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20313){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20313),args);
});})(g__20231__auto___20313))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__20231__auto___20313){
return (function (seq20279){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20279));
});})(g__20231__auto___20313))
;


var g__20231__auto___20317 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__20231__auto___20317){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20318 = arguments.length;
var i__9668__auto___20319 = (0);
while(true){
if((i__9668__auto___20319 < len__9667__auto___20318)){
args__9674__auto__.push((arguments[i__9668__auto___20319]));

var G__20320 = (i__9668__auto___20319 + (1));
i__9668__auto___20319 = G__20320;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20317))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20317){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20317),args);
});})(g__20231__auto___20317))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__20231__auto___20317){
return (function (seq20280){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20280));
});})(g__20231__auto___20317))
;


var g__20231__auto___20321 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__20231__auto___20321){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20322 = arguments.length;
var i__9668__auto___20323 = (0);
while(true){
if((i__9668__auto___20323 < len__9667__auto___20322)){
args__9674__auto__.push((arguments[i__9668__auto___20323]));

var G__20324 = (i__9668__auto___20323 + (1));
i__9668__auto___20323 = G__20324;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20321))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20321){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20321),args);
});})(g__20231__auto___20321))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__20231__auto___20321){
return (function (seq20281){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20281));
});})(g__20231__auto___20321))
;


var g__20231__auto___20325 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__20231__auto___20325){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20326 = arguments.length;
var i__9668__auto___20327 = (0);
while(true){
if((i__9668__auto___20327 < len__9667__auto___20326)){
args__9674__auto__.push((arguments[i__9668__auto___20327]));

var G__20328 = (i__9668__auto___20327 + (1));
i__9668__auto___20327 = G__20328;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20325))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20325){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20325),args);
});})(g__20231__auto___20325))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__20231__auto___20325){
return (function (seq20282){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20282));
});})(g__20231__auto___20325))
;


var g__20231__auto___20329 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__20231__auto___20329){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20330 = arguments.length;
var i__9668__auto___20331 = (0);
while(true){
if((i__9668__auto___20331 < len__9667__auto___20330)){
args__9674__auto__.push((arguments[i__9668__auto___20331]));

var G__20332 = (i__9668__auto___20331 + (1));
i__9668__auto___20331 = G__20332;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20329))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20329){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20329),args);
});})(g__20231__auto___20329))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__20231__auto___20329){
return (function (seq20283){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20283));
});})(g__20231__auto___20329))
;


var g__20231__auto___20333 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__20231__auto___20333){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20334 = arguments.length;
var i__9668__auto___20335 = (0);
while(true){
if((i__9668__auto___20335 < len__9667__auto___20334)){
args__9674__auto__.push((arguments[i__9668__auto___20335]));

var G__20336 = (i__9668__auto___20335 + (1));
i__9668__auto___20335 = G__20336;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20333))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20333){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20333),args);
});})(g__20231__auto___20333))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__20231__auto___20333){
return (function (seq20284){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20284));
});})(g__20231__auto___20333))
;


var g__20231__auto___20337 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__20231__auto___20337){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20338 = arguments.length;
var i__9668__auto___20339 = (0);
while(true){
if((i__9668__auto___20339 < len__9667__auto___20338)){
args__9674__auto__.push((arguments[i__9668__auto___20339]));

var G__20340 = (i__9668__auto___20339 + (1));
i__9668__auto___20339 = G__20340;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20337))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20337){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20337),args);
});})(g__20231__auto___20337))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__20231__auto___20337){
return (function (seq20285){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20285));
});})(g__20231__auto___20337))
;


var g__20231__auto___20341 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__20231__auto___20341){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20342 = arguments.length;
var i__9668__auto___20343 = (0);
while(true){
if((i__9668__auto___20343 < len__9667__auto___20342)){
args__9674__auto__.push((arguments[i__9668__auto___20343]));

var G__20344 = (i__9668__auto___20343 + (1));
i__9668__auto___20343 = G__20344;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20341))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20341){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20341),args);
});})(g__20231__auto___20341))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__20231__auto___20341){
return (function (seq20286){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20286));
});})(g__20231__auto___20341))
;


var g__20231__auto___20345 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__20231__auto___20345){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20346 = arguments.length;
var i__9668__auto___20347 = (0);
while(true){
if((i__9668__auto___20347 < len__9667__auto___20346)){
args__9674__auto__.push((arguments[i__9668__auto___20347]));

var G__20348 = (i__9668__auto___20347 + (1));
i__9668__auto___20347 = G__20348;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20345))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20345){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20345),args);
});})(g__20231__auto___20345))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__20231__auto___20345){
return (function (seq20287){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20287));
});})(g__20231__auto___20345))
;


var g__20231__auto___20349 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__20231__auto___20349){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20350 = arguments.length;
var i__9668__auto___20351 = (0);
while(true){
if((i__9668__auto___20351 < len__9667__auto___20350)){
args__9674__auto__.push((arguments[i__9668__auto___20351]));

var G__20352 = (i__9668__auto___20351 + (1));
i__9668__auto___20351 = G__20352;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20349))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20349){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20349),args);
});})(g__20231__auto___20349))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__20231__auto___20349){
return (function (seq20288){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20288));
});})(g__20231__auto___20349))
;


var g__20231__auto___20353 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__20231__auto___20353){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20354 = arguments.length;
var i__9668__auto___20355 = (0);
while(true){
if((i__9668__auto___20355 < len__9667__auto___20354)){
args__9674__auto__.push((arguments[i__9668__auto___20355]));

var G__20356 = (i__9668__auto___20355 + (1));
i__9668__auto___20355 = G__20356;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20353))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20353){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20353),args);
});})(g__20231__auto___20353))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__20231__auto___20353){
return (function (seq20289){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20289));
});})(g__20231__auto___20353))
;


var g__20231__auto___20357 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__20231__auto___20357){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20358 = arguments.length;
var i__9668__auto___20359 = (0);
while(true){
if((i__9668__auto___20359 < len__9667__auto___20358)){
args__9674__auto__.push((arguments[i__9668__auto___20359]));

var G__20360 = (i__9668__auto___20359 + (1));
i__9668__auto___20359 = G__20360;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20357))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20357){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20357),args);
});})(g__20231__auto___20357))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__20231__auto___20357){
return (function (seq20290){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20290));
});})(g__20231__auto___20357))
;


var g__20231__auto___20361 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__20231__auto___20361){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20362 = arguments.length;
var i__9668__auto___20363 = (0);
while(true){
if((i__9668__auto___20363 < len__9667__auto___20362)){
args__9674__auto__.push((arguments[i__9668__auto___20363]));

var G__20364 = (i__9668__auto___20363 + (1));
i__9668__auto___20363 = G__20364;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20361))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20361){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20361),args);
});})(g__20231__auto___20361))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__20231__auto___20361){
return (function (seq20291){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20291));
});})(g__20231__auto___20361))
;


var g__20231__auto___20365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__20231__auto___20365){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20366 = arguments.length;
var i__9668__auto___20367 = (0);
while(true){
if((i__9668__auto___20367 < len__9667__auto___20366)){
args__9674__auto__.push((arguments[i__9668__auto___20367]));

var G__20368 = (i__9668__auto___20367 + (1));
i__9668__auto___20367 = G__20368;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20231__auto___20365))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20231__auto___20365){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__20231__auto___20365),args);
});})(g__20231__auto___20365))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__20231__auto___20365){
return (function (seq20292){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20292));
});})(g__20231__auto___20365))
;

var g__20244__auto___20390 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__20244__auto___20390){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20391 = arguments.length;
var i__9668__auto___20392 = (0);
while(true){
if((i__9668__auto___20392 < len__9667__auto___20391)){
args__9674__auto__.push((arguments[i__9668__auto___20392]));

var G__20393 = (i__9668__auto___20392 + (1));
i__9668__auto___20392 = G__20393;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20390))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20390){
return (function (args){
return cljs.core.deref(g__20244__auto___20390);
});})(g__20244__auto___20390))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__20244__auto___20390){
return (function (seq20369){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20369));
});})(g__20244__auto___20390))
;


var g__20244__auto___20394 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__20244__auto___20394){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20395 = arguments.length;
var i__9668__auto___20396 = (0);
while(true){
if((i__9668__auto___20396 < len__9667__auto___20395)){
args__9674__auto__.push((arguments[i__9668__auto___20396]));

var G__20397 = (i__9668__auto___20396 + (1));
i__9668__auto___20396 = G__20397;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20394))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20394){
return (function (args){
return cljs.core.deref(g__20244__auto___20394);
});})(g__20244__auto___20394))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__20244__auto___20394){
return (function (seq20370){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20370));
});})(g__20244__auto___20394))
;


var g__20244__auto___20398 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__20244__auto___20398){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20399 = arguments.length;
var i__9668__auto___20400 = (0);
while(true){
if((i__9668__auto___20400 < len__9667__auto___20399)){
args__9674__auto__.push((arguments[i__9668__auto___20400]));

var G__20401 = (i__9668__auto___20400 + (1));
i__9668__auto___20400 = G__20401;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20398))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20398){
return (function (args){
return cljs.core.deref(g__20244__auto___20398);
});})(g__20244__auto___20398))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__20244__auto___20398){
return (function (seq20371){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20371));
});})(g__20244__auto___20398))
;


var g__20244__auto___20402 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__20244__auto___20402){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20403 = arguments.length;
var i__9668__auto___20404 = (0);
while(true){
if((i__9668__auto___20404 < len__9667__auto___20403)){
args__9674__auto__.push((arguments[i__9668__auto___20404]));

var G__20405 = (i__9668__auto___20404 + (1));
i__9668__auto___20404 = G__20405;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20402))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20402){
return (function (args){
return cljs.core.deref(g__20244__auto___20402);
});})(g__20244__auto___20402))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__20244__auto___20402){
return (function (seq20372){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20372));
});})(g__20244__auto___20402))
;


var g__20244__auto___20406 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__20244__auto___20406){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20407 = arguments.length;
var i__9668__auto___20408 = (0);
while(true){
if((i__9668__auto___20408 < len__9667__auto___20407)){
args__9674__auto__.push((arguments[i__9668__auto___20408]));

var G__20409 = (i__9668__auto___20408 + (1));
i__9668__auto___20408 = G__20409;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20406))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20406){
return (function (args){
return cljs.core.deref(g__20244__auto___20406);
});})(g__20244__auto___20406))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__20244__auto___20406){
return (function (seq20373){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20373));
});})(g__20244__auto___20406))
;


var g__20244__auto___20410 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__20244__auto___20410){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20411 = arguments.length;
var i__9668__auto___20412 = (0);
while(true){
if((i__9668__auto___20412 < len__9667__auto___20411)){
args__9674__auto__.push((arguments[i__9668__auto___20412]));

var G__20413 = (i__9668__auto___20412 + (1));
i__9668__auto___20412 = G__20413;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20410))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20410){
return (function (args){
return cljs.core.deref(g__20244__auto___20410);
});})(g__20244__auto___20410))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__20244__auto___20410){
return (function (seq20374){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20374));
});})(g__20244__auto___20410))
;


var g__20244__auto___20414 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__20244__auto___20414){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20415 = arguments.length;
var i__9668__auto___20416 = (0);
while(true){
if((i__9668__auto___20416 < len__9667__auto___20415)){
args__9674__auto__.push((arguments[i__9668__auto___20416]));

var G__20417 = (i__9668__auto___20416 + (1));
i__9668__auto___20416 = G__20417;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20414))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20414){
return (function (args){
return cljs.core.deref(g__20244__auto___20414);
});})(g__20244__auto___20414))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__20244__auto___20414){
return (function (seq20375){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20375));
});})(g__20244__auto___20414))
;


var g__20244__auto___20418 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__20244__auto___20418){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20419 = arguments.length;
var i__9668__auto___20420 = (0);
while(true){
if((i__9668__auto___20420 < len__9667__auto___20419)){
args__9674__auto__.push((arguments[i__9668__auto___20420]));

var G__20421 = (i__9668__auto___20420 + (1));
i__9668__auto___20420 = G__20421;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20418))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20418){
return (function (args){
return cljs.core.deref(g__20244__auto___20418);
});})(g__20244__auto___20418))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__20244__auto___20418){
return (function (seq20376){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20376));
});})(g__20244__auto___20418))
;


var g__20244__auto___20422 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__20244__auto___20422){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20423 = arguments.length;
var i__9668__auto___20424 = (0);
while(true){
if((i__9668__auto___20424 < len__9667__auto___20423)){
args__9674__auto__.push((arguments[i__9668__auto___20424]));

var G__20425 = (i__9668__auto___20424 + (1));
i__9668__auto___20424 = G__20425;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20422))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20422){
return (function (args){
return cljs.core.deref(g__20244__auto___20422);
});})(g__20244__auto___20422))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__20244__auto___20422){
return (function (seq20377){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20377));
});})(g__20244__auto___20422))
;


var g__20244__auto___20426 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__20244__auto___20426){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20427 = arguments.length;
var i__9668__auto___20428 = (0);
while(true){
if((i__9668__auto___20428 < len__9667__auto___20427)){
args__9674__auto__.push((arguments[i__9668__auto___20428]));

var G__20429 = (i__9668__auto___20428 + (1));
i__9668__auto___20428 = G__20429;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20426))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20426){
return (function (args){
return cljs.core.deref(g__20244__auto___20426);
});})(g__20244__auto___20426))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__20244__auto___20426){
return (function (seq20378){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20378));
});})(g__20244__auto___20426))
;


var g__20244__auto___20430 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__20244__auto___20430){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20431 = arguments.length;
var i__9668__auto___20432 = (0);
while(true){
if((i__9668__auto___20432 < len__9667__auto___20431)){
args__9674__auto__.push((arguments[i__9668__auto___20432]));

var G__20433 = (i__9668__auto___20432 + (1));
i__9668__auto___20432 = G__20433;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20430))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20430){
return (function (args){
return cljs.core.deref(g__20244__auto___20430);
});})(g__20244__auto___20430))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__20244__auto___20430){
return (function (seq20379){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20379));
});})(g__20244__auto___20430))
;


var g__20244__auto___20434 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__20244__auto___20434){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20435 = arguments.length;
var i__9668__auto___20436 = (0);
while(true){
if((i__9668__auto___20436 < len__9667__auto___20435)){
args__9674__auto__.push((arguments[i__9668__auto___20436]));

var G__20437 = (i__9668__auto___20436 + (1));
i__9668__auto___20436 = G__20437;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20434))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20434){
return (function (args){
return cljs.core.deref(g__20244__auto___20434);
});})(g__20244__auto___20434))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__20244__auto___20434){
return (function (seq20380){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20380));
});})(g__20244__auto___20434))
;


var g__20244__auto___20438 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__20244__auto___20438){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20439 = arguments.length;
var i__9668__auto___20440 = (0);
while(true){
if((i__9668__auto___20440 < len__9667__auto___20439)){
args__9674__auto__.push((arguments[i__9668__auto___20440]));

var G__20441 = (i__9668__auto___20440 + (1));
i__9668__auto___20440 = G__20441;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20438))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20438){
return (function (args){
return cljs.core.deref(g__20244__auto___20438);
});})(g__20244__auto___20438))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__20244__auto___20438){
return (function (seq20381){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20381));
});})(g__20244__auto___20438))
;


var g__20244__auto___20442 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__20244__auto___20442){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20443 = arguments.length;
var i__9668__auto___20444 = (0);
while(true){
if((i__9668__auto___20444 < len__9667__auto___20443)){
args__9674__auto__.push((arguments[i__9668__auto___20444]));

var G__20445 = (i__9668__auto___20444 + (1));
i__9668__auto___20444 = G__20445;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20442))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20442){
return (function (args){
return cljs.core.deref(g__20244__auto___20442);
});})(g__20244__auto___20442))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__20244__auto___20442){
return (function (seq20382){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20382));
});})(g__20244__auto___20442))
;


var g__20244__auto___20446 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__20244__auto___20446){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20447 = arguments.length;
var i__9668__auto___20448 = (0);
while(true){
if((i__9668__auto___20448 < len__9667__auto___20447)){
args__9674__auto__.push((arguments[i__9668__auto___20448]));

var G__20449 = (i__9668__auto___20448 + (1));
i__9668__auto___20448 = G__20449;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20446))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20446){
return (function (args){
return cljs.core.deref(g__20244__auto___20446);
});})(g__20244__auto___20446))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__20244__auto___20446){
return (function (seq20383){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20383));
});})(g__20244__auto___20446))
;


var g__20244__auto___20450 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__20244__auto___20450){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20451 = arguments.length;
var i__9668__auto___20452 = (0);
while(true){
if((i__9668__auto___20452 < len__9667__auto___20451)){
args__9674__auto__.push((arguments[i__9668__auto___20452]));

var G__20453 = (i__9668__auto___20452 + (1));
i__9668__auto___20452 = G__20453;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20450))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20450){
return (function (args){
return cljs.core.deref(g__20244__auto___20450);
});})(g__20244__auto___20450))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__20244__auto___20450){
return (function (seq20384){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20384));
});})(g__20244__auto___20450))
;


var g__20244__auto___20454 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__20244__auto___20454){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20455 = arguments.length;
var i__9668__auto___20456 = (0);
while(true){
if((i__9668__auto___20456 < len__9667__auto___20455)){
args__9674__auto__.push((arguments[i__9668__auto___20456]));

var G__20457 = (i__9668__auto___20456 + (1));
i__9668__auto___20456 = G__20457;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20454))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20454){
return (function (args){
return cljs.core.deref(g__20244__auto___20454);
});})(g__20244__auto___20454))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__20244__auto___20454){
return (function (seq20385){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20385));
});})(g__20244__auto___20454))
;


var g__20244__auto___20458 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__20244__auto___20458){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20459 = arguments.length;
var i__9668__auto___20460 = (0);
while(true){
if((i__9668__auto___20460 < len__9667__auto___20459)){
args__9674__auto__.push((arguments[i__9668__auto___20460]));

var G__20461 = (i__9668__auto___20460 + (1));
i__9668__auto___20460 = G__20461;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20458))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20458){
return (function (args){
return cljs.core.deref(g__20244__auto___20458);
});})(g__20244__auto___20458))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__20244__auto___20458){
return (function (seq20386){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20386));
});})(g__20244__auto___20458))
;


var g__20244__auto___20462 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__20244__auto___20462){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20463 = arguments.length;
var i__9668__auto___20464 = (0);
while(true){
if((i__9668__auto___20464 < len__9667__auto___20463)){
args__9674__auto__.push((arguments[i__9668__auto___20464]));

var G__20465 = (i__9668__auto___20464 + (1));
i__9668__auto___20464 = G__20465;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20462))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20462){
return (function (args){
return cljs.core.deref(g__20244__auto___20462);
});})(g__20244__auto___20462))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__20244__auto___20462){
return (function (seq20387){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20387));
});})(g__20244__auto___20462))
;


var g__20244__auto___20466 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__20244__auto___20466){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20467 = arguments.length;
var i__9668__auto___20468 = (0);
while(true){
if((i__9668__auto___20468 < len__9667__auto___20467)){
args__9674__auto__.push((arguments[i__9668__auto___20468]));

var G__20469 = (i__9668__auto___20468 + (1));
i__9668__auto___20468 = G__20469;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20466))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20466){
return (function (args){
return cljs.core.deref(g__20244__auto___20466);
});})(g__20244__auto___20466))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__20244__auto___20466){
return (function (seq20388){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20388));
});})(g__20244__auto___20466))
;


var g__20244__auto___20470 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__20244__auto___20470){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20471 = arguments.length;
var i__9668__auto___20472 = (0);
while(true){
if((i__9668__auto___20472 < len__9667__auto___20471)){
args__9674__auto__.push((arguments[i__9668__auto___20472]));

var G__20473 = (i__9668__auto___20472 + (1));
i__9668__auto___20472 = G__20473;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});})(g__20244__auto___20470))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20244__auto___20470){
return (function (args){
return cljs.core.deref(g__20244__auto___20470);
});})(g__20244__auto___20470))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__20244__auto___20470){
return (function (seq20389){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20389));
});})(g__20244__auto___20470))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9674__auto__ = [];
var len__9667__auto___20476 = arguments.length;
var i__9668__auto___20477 = (0);
while(true){
if((i__9668__auto___20477 < len__9667__auto___20476)){
args__9674__auto__.push((arguments[i__9668__auto___20477]));

var G__20478 = (i__9668__auto___20477 + (1));
i__9668__auto___20477 = G__20478;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__20474_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__20474_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq20475){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20475));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__20479_SHARP_){
return (new Date(p1__20479_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
