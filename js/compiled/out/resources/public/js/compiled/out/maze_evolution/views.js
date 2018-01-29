// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('maze_evolution.subs');
maze_evolution.views.title = (function maze_evolution$views$title(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Maze Evolution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"created by Tushaar Kamat"], null)], null);
});
maze_evolution.views.create_rectangles = (function maze_evolution$views$create_rectangles(maze){
var row = (0);
var rectangles = cljs.core.PersistentVector.EMPTY;
while(true){
if((row < (11))){
var G__47192 = (row + (1));
var G__47193 = cljs.core.conj.call(null,rectangles,(function (){var col = (0);
var rectangles__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if((col < (21))){
if(cljs.core._EQ_.call(null,(1),cljs.core.nth.call(null,cljs.core.nth.call(null,maze,row),col))){
var G__47194 = (col + (1));
var G__47195 = cljs.core.conj.call(null,rectangles__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((10) * row),new cljs.core.Keyword(null,"y","y",-1757859776),((10) * col),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null));
col = G__47194;
rectangles__$1 = G__47195;
continue;
} else {
var G__47196 = (col + (1));
var G__47197 = rectangles__$1;
col = G__47196;
rectangles__$1 = G__47197;
continue;
}
} else {
return rectangles__$1;
}
break;
}
})());
row = G__47192;
rectangles = G__47193;
continue;
} else {
return rectangles;
}
break;
}
});
maze_evolution.views.draw_maze = (function maze_evolution$views$draw_maze(){
var maze = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze-map","maze-map",-1887029450)], null));
return ((function (maze){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null),cljs.core.conj.call(null,maze_evolution.views.create_rectangles.call(null,cljs.core.deref.call(null,maze)),new cljs.core.Keyword(null,"g","g",1738089905))], null);
});
;})(maze))
});
maze_evolution.views.main_panel = (function maze_evolution$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.draw_maze], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1517205831340
