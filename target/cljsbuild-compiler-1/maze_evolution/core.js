// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('maze_evolution.events');
goog.require('maze_evolution.views');
goog.require('maze_evolution.config');
maze_evolution.core.dev_setup = (function maze_evolution$core$dev_setup(){
if(maze_evolution.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
maze_evolution.core.main = (function maze_evolution$core$main(){
if(typeof maze_evolution.core.db !== 'undefined'){
} else {
maze_evolution.core.db = (function (){var G__28903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__28903) : re_frame.core.dispatch_sync.call(null,G__28903));
})();
}

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('maze_evolution.core.main', maze_evolution.core.main);
