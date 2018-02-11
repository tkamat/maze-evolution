// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('maze_evolution.events');
goog.require('maze_evolution.subs');
goog.require('maze_evolution.evolution');
maze_evolution.views.title = (function maze_evolution$views$title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Maze Evolution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"created by Tushaar Kamat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generation","generation",-2132542044)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"individual","individual",-1643964808)], null)))], null)], null);
});
maze_evolution.views.create_rectangles = (function maze_evolution$views$create_rectangles(maze){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var row = (0);
var rectangles = cljs.core.PersistentVector.EMPTY;
while(true){
if((row < (11))){
var G__40976 = (row + (1));
var G__40977 = cljs.core.conj.call(null,rectangles,(function (){var col = (0);
var rectangles__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if((col < (21))){
if(cljs.core._EQ_.call(null,(1),cljs.core.nth.call(null,cljs.core.nth.call(null,maze,row),col))){
var G__40978 = (col + (1));
var G__40979 = cljs.core.conj.call(null,rectangles__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((30) * col),new cljs.core.Keyword(null,"y","y",-1757859776),((30) * row),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30)], null)], null));
col = G__40978;
rectangles__$1 = G__40979;
continue;
} else {
var G__40980 = (col + (1));
var G__40981 = rectangles__$1;
col = G__40980;
rectangles__$1 = G__40981;
continue;
}
} else {
return rectangles__$1;
}
break;
}
})());
row = G__40976;
rectangles = G__40977;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(630),new cljs.core.Keyword(null,"height","height",1025178622),(330),new cljs.core.Keyword(null,"id","id",-1388402092),"maze"], null),cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"g","g",1738089905),maze_evolution.views.create_rectangles.call(null,cljs.core.deref.call(null,maze))))], null);
});
;})(maze))
});
maze_evolution.views.draw_ball = (function maze_evolution$views$draw_ball(){
var ball_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return ((function (ball_position){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null),new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"id","id",-1388402092),"ball",new cljs.core.Keyword(null,"cx","cx",1272694324),((15) + ((30) * cljs.core.last.call(null,cljs.core.deref.call(null,ball_position)))),new cljs.core.Keyword(null,"cy","cy",755331060),((15) + ((30) * cljs.core.first.call(null,cljs.core.deref.call(null,ball_position))))], null)], null)], null);
});
;})(ball_position))
});
maze_evolution.views.render_maze_and_ball = (function maze_evolution$views$render_maze_and_ball(){
return cljs.core.conj.call(null,maze_evolution.views.draw_maze.call(null).call(null),maze_evolution.views.draw_ball.call(null).call(null));
});
maze_evolution.views.running = cljs.core.atom.call(null,false);
maze_evolution.views.test_button = (function maze_evolution$views$test_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Test",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.deref.call(null,maze_evolution.views.running) === false){
return maze_evolution.evolution.test_population.call(null,maze_evolution.views.running);
} else {
return null;
}
})], null)], null);
});
});
maze_evolution.views.new_generation_button = (function maze_evolution$views$new_generation_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"TO THE GULAGS!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return maze_evolution.evolution.create_new_generation.call(null,maze_evolution.views.running);
})], null)], null);
});
});
maze_evolution.views.continuously_evolve_button = (function maze_evolution$views$continuously_evolve_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Continuously evolve",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return maze_evolution.evolution.continuously_evolve.call(null,maze_evolution.views.running);
})], null)], null);
});
});
maze_evolution.views.main_panel = (function maze_evolution$views$main_panel(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.render_maze_and_ball], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.test_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.new_generation_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.continuously_evolve_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__37337__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40982_40986 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40983_40987 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40982_40986,_STAR_print_fn_STAR_40983_40987,sb__37337__auto__){
return (function (x__37338__auto__){
return sb__37337__auto__.append(x__37338__auto__);
});})(_STAR_print_newline_STAR_40982_40986,_STAR_print_fn_STAR_40983_40987,sb__37337__auto__))
;

try{cljs.pprint.pprint.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40983_40987;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40982_40986;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__37337__auto__)].join('');
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__37337__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40984_40988 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40985_40989 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40984_40988,_STAR_print_fn_STAR_40985_40989,sb__37337__auto__){
return (function (x__37338__auto__){
return sb__37337__auto__.append(x__37338__auto__);
});})(_STAR_print_newline_STAR_40984_40988,_STAR_print_fn_STAR_40985_40989,sb__37337__auto__))
;

try{cljs.pprint.pprint.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)], null))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40985_40989;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40984_40988;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__37337__auto__)].join('');
})()], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1518320702957
