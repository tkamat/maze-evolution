// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29961__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29962__i = 0, G__29962__a = new Array(arguments.length -  0);
while (G__29962__i < G__29962__a.length) {G__29962__a[G__29962__i] = arguments[G__29962__i + 0]; ++G__29962__i;}
  args = new cljs.core.IndexedSeq(G__29962__a,0,null);
} 
return G__29961__delegate.call(this,args);};
G__29961.cljs$lang$maxFixedArity = 0;
G__29961.cljs$lang$applyTo = (function (arglist__29963){
var args = cljs.core.seq(arglist__29963);
return G__29961__delegate(args);
});
G__29961.cljs$core$IFn$_invoke$arity$variadic = G__29961__delegate;
return G__29961;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29964__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29965__i = 0, G__29965__a = new Array(arguments.length -  0);
while (G__29965__i < G__29965__a.length) {G__29965__a[G__29965__i] = arguments[G__29965__i + 0]; ++G__29965__i;}
  args = new cljs.core.IndexedSeq(G__29965__a,0,null);
} 
return G__29964__delegate.call(this,args);};
G__29964.cljs$lang$maxFixedArity = 0;
G__29964.cljs$lang$applyTo = (function (arglist__29966){
var args = cljs.core.seq(arglist__29966);
return G__29964__delegate(args);
});
G__29964.cljs$core$IFn$_invoke$arity$variadic = G__29964__delegate;
return G__29964;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1517031103085
