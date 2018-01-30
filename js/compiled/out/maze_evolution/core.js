// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('maze_evolution.events');
goog.require('maze_evolution.views');
goog.require('maze_evolution.config');
maze_evolution.core.dev_setup = (function maze_evolution$core$dev_setup(){
if(maze_evolution.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
maze_evolution.core.main = (function maze_evolution$core$main(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return maze_evolution.views.main_panel;},new cljs.core.Symbol("maze-evolution.views","main-panel","maze-evolution.views/main-panel",1392349178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"maze-evolution.views","maze-evolution.views",-286828218,null),new cljs.core.Symbol(null,"main-panel","main-panel",-877824119,null),"/home/tushaar/Projects/maze-evolution/src/cljs/maze_evolution/views.cljs",17,1,51,51,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(maze_evolution.views.main_panel)?maze_evolution.views.main_panel.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
goog.exportSymbol('maze_evolution.core.main', maze_evolution.core.main);

//# sourceMappingURL=core.js.map?rel=1517275620419
