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
var G__37935__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37936__i = 0, G__37936__a = new Array(arguments.length -  0);
while (G__37936__i < G__37936__a.length) {G__37936__a[G__37936__i] = arguments[G__37936__i + 0]; ++G__37936__i;}
  args = new cljs.core.IndexedSeq(G__37936__a,0,null);
} 
return G__37935__delegate.call(this,args);};
G__37935.cljs$lang$maxFixedArity = 0;
G__37935.cljs$lang$applyTo = (function (arglist__37937){
var args = cljs.core.seq(arglist__37937);
return G__37935__delegate(args);
});
G__37935.cljs$core$IFn$_invoke$arity$variadic = G__37935__delegate;
return G__37935;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37938__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37939__i = 0, G__37939__a = new Array(arguments.length -  0);
while (G__37939__i < G__37939__a.length) {G__37939__a[G__37939__i] = arguments[G__37939__i + 0]; ++G__37939__i;}
  args = new cljs.core.IndexedSeq(G__37939__a,0,null);
} 
return G__37938__delegate.call(this,args);};
G__37938.cljs$lang$maxFixedArity = 0;
G__37938.cljs$lang$applyTo = (function (arglist__37940){
var args = cljs.core.seq(arglist__37940);
return G__37938__delegate(args);
});
G__37938.cljs$core$IFn$_invoke$arity$variadic = G__37938__delegate;
return G__37938;
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

//# sourceMappingURL=debug.js.map?rel=1518330151449
