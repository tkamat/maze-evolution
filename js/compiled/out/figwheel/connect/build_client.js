// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_client');
goog.require('cljs.core');
goog.require('maze_evolution.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41310__delegate = function (x){
if(cljs.core.truth_(maze_evolution.core.main)){
return cljs.core.apply.call(null,maze_evolution.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'maze-evolution.core/main' is missing");
}
};
var G__41310 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__41311__i = 0, G__41311__a = new Array(arguments.length -  0);
while (G__41311__i < G__41311__a.length) {G__41311__a[G__41311__i] = arguments[G__41311__i + 0]; ++G__41311__i;}
  x = new cljs.core.IndexedSeq(G__41311__a,0,null);
} 
return G__41310__delegate.call(this,x);};
G__41310.cljs$lang$maxFixedArity = 0;
G__41310.cljs$lang$applyTo = (function (arglist__41312){
var x = cljs.core.seq(arglist__41312);
return G__41310__delegate(x);
});
G__41310.cljs$core$IFn$_invoke$arity$variadic = G__41310__delegate;
return G__41310;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_client.js.map?rel=1517197358117
