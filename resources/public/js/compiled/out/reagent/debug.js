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
var G__24423__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24424__i = 0, G__24424__a = new Array(arguments.length -  0);
while (G__24424__i < G__24424__a.length) {G__24424__a[G__24424__i] = arguments[G__24424__i + 0]; ++G__24424__i;}
  args = new cljs.core.IndexedSeq(G__24424__a,0,null);
} 
return G__24423__delegate.call(this,args);};
G__24423.cljs$lang$maxFixedArity = 0;
G__24423.cljs$lang$applyTo = (function (arglist__24425){
var args = cljs.core.seq(arglist__24425);
return G__24423__delegate(args);
});
G__24423.cljs$core$IFn$_invoke$arity$variadic = G__24423__delegate;
return G__24423;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24426__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24427__i = 0, G__24427__a = new Array(arguments.length -  0);
while (G__24427__i < G__24427__a.length) {G__24427__a[G__24427__i] = arguments[G__24427__i + 0]; ++G__24427__i;}
  args = new cljs.core.IndexedSeq(G__24427__a,0,null);
} 
return G__24426__delegate.call(this,args);};
G__24426.cljs$lang$maxFixedArity = 0;
G__24426.cljs$lang$applyTo = (function (arglist__24428){
var args = cljs.core.seq(arglist__24428);
return G__24426__delegate(args);
});
G__24426.cljs$core$IFn$_invoke$arity$variadic = G__24426__delegate;
return G__24426;
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

//# sourceMappingURL=debug.js.map?rel=1518565228487
