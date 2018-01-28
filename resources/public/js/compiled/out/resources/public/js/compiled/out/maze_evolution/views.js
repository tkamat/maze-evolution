// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
maze_evolution.views.main_panel = (function maze_evolution$views$main_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"wj"], null);
});
maze_evolution.views.timer_component = (function maze_evolution$views$timer_component(){
var seconds_elapsed = reagent.core.atom.call(null,(0));
return ((function (seconds_elapsed){
return (function (){
setTimeout(((function (seconds_elapsed){
return (function (){
return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
});})(seconds_elapsed))
,(100));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds elapsed: ",cljs.core.deref.call(null,seconds_elapsed)], null);
});
;})(seconds_elapsed))
});

//# sourceMappingURL=views.js.map?rel=1517159150761
