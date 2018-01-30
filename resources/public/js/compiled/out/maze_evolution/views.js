// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs.js');
goog.require('cljs.core.async');
goog.require('maze_evolution.events');
goog.require('maze_evolution.subs');
maze_evolution.views.title = (function maze_evolution$views$title(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Maze Evolution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"created by Tushaar Kamat"], null)], null);
});
maze_evolution.views.create_rectangles = (function maze_evolution$views$create_rectangles(maze){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var row = (0);
var rectangles = cljs.core.PersistentVector.EMPTY;
while(true){
if((row < (11))){
var G__42025 = (row + (1));
var G__42026 = cljs.core.conj.call(null,rectangles,(function (){var col = (0);
var rectangles__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if((col < (21))){
if(cljs.core._EQ_.call(null,(1),cljs.core.nth.call(null,cljs.core.nth.call(null,maze,row),col))){
var G__42027 = (col + (1));
var G__42028 = cljs.core.conj.call(null,rectangles__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((30) * col),new cljs.core.Keyword(null,"y","y",-1757859776),((30) * row),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30)], null)], null));
col = G__42027;
rectangles__$1 = G__42028;
continue;
} else {
var G__42029 = (col + (1));
var G__42030 = rectangles__$1;
col = G__42029;
rectangles__$1 = G__42030;
continue;
}
} else {
return rectangles__$1;
}
break;
}
})());
row = G__42025;
rectangles = G__42026;
continue;
} else {
return rectangles;
}
break;
}
})());
});
maze_evolution.views.draw_maze = (function maze_evolution$views$draw_maze(){
var maze = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze-map","maze-map",-1887029450)], null));
return ((function (maze){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(630),new cljs.core.Keyword(null,"height","height",1025178622),(330),new cljs.core.Keyword(null,"id","id",-1388402092),"maze"], null),cljs.core.conj.call(null,maze_evolution.views.create_rectangles.call(null,cljs.core.deref.call(null,maze)),new cljs.core.Keyword(null,"g","g",1738089905))], null);
});
;})(maze))
});
maze_evolution.views.draw_ball = (function maze_evolution$views$draw_ball(){
var ball_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return ((function (ball_position){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null),new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"id","id",-1388402092),"ball",new cljs.core.Keyword(null,"cx","cx",1272694324),((15) + ((30) * cljs.core.last.call(null,cljs.core.deref.call(null,ball_position)))),new cljs.core.Keyword(null,"cy","cy",755331060),((15) + ((30) * cljs.core.first.call(null,cljs.core.deref.call(null,ball_position))))], null)], null);
});
;})(ball_position))
});
maze_evolution.views.render_maze_and_ball = (function maze_evolution$views$render_maze_and_ball(){
return cljs.core.conj.call(null,maze_evolution.views.draw_maze.call(null).call(null),maze_evolution.views.draw_ball.call(null).call(null));
});
maze_evolution.views.move_ball_in_interval = (function maze_evolution$views$move_ball_in_interval(remaining_moves){
var seq__42031 = cljs.core.seq.call(null,remaining_moves);
var chunk__42032 = null;
var count__42033 = (0);
var i__42034 = (0);
while(true){
if((i__42034 < count__42033)){
var move = cljs.core._nth.call(null,chunk__42032,i__42034);
setTimeout(((function (seq__42031,chunk__42032,count__42033,i__42034,move){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),move], null));
});})(seq__42031,chunk__42032,count__42033,i__42034,move))
,(500));

var G__42035 = seq__42031;
var G__42036 = chunk__42032;
var G__42037 = count__42033;
var G__42038 = (i__42034 + (1));
seq__42031 = G__42035;
chunk__42032 = G__42036;
count__42033 = G__42037;
i__42034 = G__42038;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42031);
if(temp__4657__auto__){
var seq__42031__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42031__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__42031__$1);
var G__42039 = cljs.core.chunk_rest.call(null,seq__42031__$1);
var G__42040 = c__37147__auto__;
var G__42041 = cljs.core.count.call(null,c__37147__auto__);
var G__42042 = (0);
seq__42031 = G__42039;
chunk__42032 = G__42040;
count__42033 = G__42041;
i__42034 = G__42042;
continue;
} else {
var move = cljs.core.first.call(null,seq__42031__$1);
setTimeout(((function (seq__42031,chunk__42032,count__42033,i__42034,move,seq__42031__$1,temp__4657__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),move], null));
});})(seq__42031,chunk__42032,count__42033,i__42034,move,seq__42031__$1,temp__4657__auto__))
,(500));

var G__42043 = cljs.core.next.call(null,seq__42031__$1);
var G__42044 = null;
var G__42045 = (0);
var G__42046 = (0);
seq__42031 = G__42043;
chunk__42032 = G__42044;
count__42033 = G__42045;
i__42034 = G__42046;
continue;
}
} else {
return null;
}
}
break;
}
});
maze_evolution.views.button = (function maze_evolution$views$button(){
var remaining_moves = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717)], null));
return ((function (remaining_moves){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"CLICK!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (remaining_moves){
return (function (){
return maze_evolution.views.move_ball_in_interval.call(null,cljs.core.deref.call(null,remaining_moves));
});})(remaining_moves))
], null)], null);
});
;})(remaining_moves))
});
maze_evolution.views.main_panel = (function maze_evolution$views$main_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.render_maze_and_ball], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.button], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1517275620406
