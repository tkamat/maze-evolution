// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_client');
goog.require('cljs.core');
goog.require('maze_evolution.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39761__delegate = function (x){
if(cljs.core.truth_(maze_evolution.core.main)){
return cljs.core.apply.call(null,maze_evolution.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'maze-evolution.core/main' is missing");
}
};
var G__39761 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39762__i = 0, G__39762__a = new Array(arguments.length -  0);
while (G__39762__i < G__39762__a.length) {G__39762__a[G__39762__i] = arguments[G__39762__i + 0]; ++G__39762__i;}
  x = new cljs.core.IndexedSeq(G__39762__a,0,null);
} 
return G__39761__delegate.call(this,x);};
G__39761.cljs$lang$maxFixedArity = 0;
G__39761.cljs$lang$applyTo = (function (arglist__39763){
var x = cljs.core.seq(arglist__39763);
return G__39761__delegate(x);
});
G__39761.cljs$core$IFn$_invoke$arity$variadic = G__39761__delegate;
return G__39761;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_client.js.map?rel=1518329140136
