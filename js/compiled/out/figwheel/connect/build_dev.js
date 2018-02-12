// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('maze_evolution.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44198__delegate = function (x){
if(cljs.core.truth_(maze_evolution.core.main)){
return cljs.core.apply.call(null,maze_evolution.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'maze-evolution.core/main' is missing");
}
};
var G__44198 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44199__i = 0, G__44199__a = new Array(arguments.length -  0);
while (G__44199__i < G__44199__a.length) {G__44199__a[G__44199__i] = arguments[G__44199__i + 0]; ++G__44199__i;}
  x = new cljs.core.IndexedSeq(G__44199__a,0,null);
} 
return G__44198__delegate.call(this,x);};
G__44198.cljs$lang$maxFixedArity = 0;
G__44198.cljs$lang$applyTo = (function (arglist__44200){
var x = cljs.core.seq(arglist__44200);
return G__44198__delegate(x);
});
G__44198.cljs$core$IFn$_invoke$arity$variadic = G__44198__delegate;
return G__44198;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1518465261348
