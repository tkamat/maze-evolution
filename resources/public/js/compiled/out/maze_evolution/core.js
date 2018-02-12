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
if(typeof maze_evolution.core.db !== 'undefined'){
} else {
maze_evolution.core.db = re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));
}

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('maze_evolution.core.main', maze_evolution.core.main);

//# sourceMappingURL=core.js.map?rel=1518465261334
