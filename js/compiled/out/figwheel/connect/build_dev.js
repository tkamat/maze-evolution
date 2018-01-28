// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('maze_evolution.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40969__delegate = function (x){
if(cljs.core.truth_(maze_evolution.core.on_js_reload)){
return cljs.core.apply.call(null,maze_evolution.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'maze-evolution.core/on-js-reload' is missing");
}
};
var G__40969 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40970__i = 0, G__40970__a = new Array(arguments.length -  0);
while (G__40970__i < G__40970__a.length) {G__40970__a[G__40970__i] = arguments[G__40970__i + 0]; ++G__40970__i;}
  x = new cljs.core.IndexedSeq(G__40970__a,0,null);
} 
return G__40969__delegate.call(this,x);};
G__40969.cljs$lang$maxFixedArity = 0;
G__40969.cljs$lang$applyTo = (function (arglist__40971){
var x = cljs.core.seq(arglist__40971);
return G__40969__delegate(x);
});
G__40969.cljs$core$IFn$_invoke$arity$variadic = G__40969__delegate;
return G__40969;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1517058816263
