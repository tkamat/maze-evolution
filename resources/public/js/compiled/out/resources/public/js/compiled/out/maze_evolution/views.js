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
var G__41697 = (row + (1));
var G__41698 = cljs.core.conj.call(null,rectangles,(function (){var col = (0);
var rectangles__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if((col < (21))){
if(cljs.core._EQ_.call(null,(1),cljs.core.nth.call(null,cljs.core.nth.call(null,maze,row),col))){
var G__41699 = (col + (1));
var G__41700 = cljs.core.conj.call(null,rectangles__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((30) * col),new cljs.core.Keyword(null,"y","y",-1757859776),((30) * row),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30)], null)], null));
col = G__41699;
rectangles__$1 = G__41700;
continue;
} else {
var G__41701 = (col + (1));
var G__41702 = rectangles__$1;
col = G__41701;
rectangles__$1 = G__41702;
continue;
}
} else {
return rectangles__$1;
}
break;
}
})());
row = G__41697;
rectangles = G__41698;
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
return cljs.core.map.call(null,(function (move){
var c__39611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39611__auto__){
return (function (){
var f__39612__auto__ = (function (){var switch__39590__auto__ = ((function (c__39611__auto__){
return (function (state_41711){
var state_val_41712 = (state_41711[(1)]);
if((state_val_41712 === (1))){
var inst_41703 = cljs.core.async.timeout.call(null,(500));
var state_41711__$1 = state_41711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41711__$1,(2),inst_41703);
} else {
if((state_val_41712 === (2))){
var inst_41705 = (state_41711[(2)]);
var inst_41706 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41707 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),move];
var inst_41708 = (new cljs.core.PersistentVector(null,2,(5),inst_41706,inst_41707,null));
var inst_41709 = re_frame.core.dispatch.call(null,inst_41708);
var state_41711__$1 = (function (){var statearr_41713 = state_41711;
(statearr_41713[(7)] = inst_41705);

return statearr_41713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41711__$1,inst_41709);
} else {
return null;
}
}
});})(c__39611__auto__))
;
return ((function (switch__39590__auto__,c__39611__auto__){
return (function() {
var maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto__ = null;
var maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto____0 = (function (){
var statearr_41714 = [null,null,null,null,null,null,null,null];
(statearr_41714[(0)] = maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto__);

(statearr_41714[(1)] = (1));

return statearr_41714;
});
var maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto____1 = (function (state_41711){
while(true){
var ret_value__39592__auto__ = (function (){try{while(true){
var result__39593__auto__ = switch__39590__auto__.call(null,state_41711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39593__auto__;
}
break;
}
}catch (e41715){if((e41715 instanceof Object)){
var ex__39594__auto__ = e41715;
var statearr_41716_41718 = state_41711;
(statearr_41716_41718[(5)] = ex__39594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41719 = state_41711;
state_41711 = G__41719;
continue;
} else {
return ret_value__39592__auto__;
}
break;
}
});
maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto__ = function(state_41711){
switch(arguments.length){
case 0:
return maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto____0.call(this);
case 1:
return maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto____1.call(this,state_41711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto____0;
maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto____1;
return maze_evolution$views$move_ball_in_interval_$_state_machine__39591__auto__;
})()
;})(switch__39590__auto__,c__39611__auto__))
})();
var state__39613__auto__ = (function (){var statearr_41717 = f__39612__auto__.call(null);
(statearr_41717[(6)] = c__39611__auto__);

return statearr_41717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39613__auto__);
});})(c__39611__auto__))
);

return c__39611__auto__;
}),remaining_moves);
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

//# sourceMappingURL=views.js.map?rel=1517275105257
