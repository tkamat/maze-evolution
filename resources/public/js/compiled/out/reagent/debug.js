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
var G__9362__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9363__i = 0, G__9363__a = new Array(arguments.length -  0);
while (G__9363__i < G__9363__a.length) {G__9363__a[G__9363__i] = arguments[G__9363__i + 0]; ++G__9363__i;}
  args = new cljs.core.IndexedSeq(G__9363__a,0,null);
} 
return G__9362__delegate.call(this,args);};
G__9362.cljs$lang$maxFixedArity = 0;
G__9362.cljs$lang$applyTo = (function (arglist__9364){
var args = cljs.core.seq(arglist__9364);
return G__9362__delegate(args);
});
G__9362.cljs$core$IFn$_invoke$arity$variadic = G__9362__delegate;
return G__9362;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9365__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9366__i = 0, G__9366__a = new Array(arguments.length -  0);
while (G__9366__i < G__9366__a.length) {G__9366__a[G__9366__i] = arguments[G__9366__i + 0]; ++G__9366__i;}
  args = new cljs.core.IndexedSeq(G__9366__a,0,null);
} 
return G__9365__delegate.call(this,args);};
G__9365.cljs$lang$maxFixedArity = 0;
G__9365.cljs$lang$applyTo = (function (arglist__9367){
var args = cljs.core.seq(arglist__9367);
return G__9365__delegate(args);
});
G__9365.cljs$core$IFn$_invoke$arity$variadic = G__9365__delegate;
return G__9365;
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

//# sourceMappingURL=debug.js.map?rel=1518330935987
