// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.core.reducers');
goog.require('re_frame.core');
maze_evolution.evolution.population_size = (64);
maze_evolution.evolution.move_time = (2);
maze_evolution.evolution.individual_time = ((100) + ((64) * maze_evolution.evolution.move_time));
maze_evolution.evolution.generation_time = (maze_evolution.evolution.individual_time * maze_evolution.evolution.population_size);
maze_evolution.evolution.crossing_over_chance = ((1) / (20));
maze_evolution.evolution.mutation_chance = ((1) / (64));
/**
 * Generates a random move between :N, :S, :E, and :W
 */
maze_evolution.evolution.random_move = (function maze_evolution$evolution$random_move(){
var num = cljs.core.rand_int((4));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num,(0))){
return cljs.core.cst$kw$N;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num,(1))){
return cljs.core.cst$kw$E;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num,(2))){
return cljs.core.cst$kw$S;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num,(3))){
return cljs.core.cst$kw$W;
} else {
return null;
}
}
}
}
});
/**
 * Move an individual by a cardinal direction, if there isn't a wall.
 */
maze_evolution.evolution.move_if_eligible = (function maze_evolution$evolution$move_if_eligible(direction,maze_map,current_position){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$N)){
if((((cljs.core.first(current_position) - (1)) >= (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(maze_map,(cljs.core.first(current_position) - (1))),cljs.core.last(current_position))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(current_position) - (1)),cljs.core.last(current_position)], null);
} else {
return current_position;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$S)){
if((((cljs.core.first(current_position) + (1)) <= (10))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(maze_map,(cljs.core.first(current_position) + (1))),cljs.core.last(current_position))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(current_position) + (1)),cljs.core.last(current_position)], null);
} else {
return current_position;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$E)){
if((((cljs.core.last(current_position) + (1)) <= (20))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(maze_map,cljs.core.first(current_position)),(cljs.core.last(current_position) + (1)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(current_position),(cljs.core.last(current_position) + (1))], null);
} else {
return current_position;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$W)){
if((((cljs.core.last(current_position) - (1)) >= (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(maze_map,cljs.core.first(current_position)),(cljs.core.last(current_position) - (1)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(current_position),(cljs.core.last(current_position) - (1))], null);
} else {
return current_position;
}
} else {
return null;
}
}
}
}
});
/**
 * Creates a sequence of random moves representing an initial individual
 */
maze_evolution.evolution.create_initial_individual = (function maze_evolution$evolution$create_initial_individual(){
var iter__8476__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__25899(s__25900){
return (new cljs.core.LazySeq(null,(function (){
var s__25900__$1 = s__25900;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25900__$1);
if(temp__4657__auto__){
var s__25900__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25900__$2)){
var c__8474__auto__ = cljs.core.chunk_first(s__25900__$2);
var size__8475__auto__ = cljs.core.count(c__8474__auto__);
var b__25902 = cljs.core.chunk_buffer(size__8475__auto__);
if((function (){var i__25901 = (0);
while(true){
if((i__25901 < size__8475__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8474__auto__,i__25901);
cljs.core.chunk_append(b__25902,maze_evolution.evolution.random_move());

var G__25903 = (i__25901 + (1));
i__25901 = G__25903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25902),maze_evolution$evolution$create_initial_individual_$_iter__25899(cljs.core.chunk_rest(s__25900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25902),null);
}
} else {
var _ = cljs.core.first(s__25900__$2);
return cljs.core.cons(maze_evolution.evolution.random_move(),maze_evolution$evolution$create_initial_individual_$_iter__25899(cljs.core.rest(s__25900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(64)));
});
/**
 * Creates a sequence of randomly generated individuals representing the original
 *   population
 */
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__8476__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__25904(s__25905){
return (new cljs.core.LazySeq(null,(function (){
var s__25905__$1 = s__25905;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25905__$1);
if(temp__4657__auto__){
var s__25905__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25905__$2)){
var c__8474__auto__ = cljs.core.chunk_first(s__25905__$2);
var size__8475__auto__ = cljs.core.count(c__8474__auto__);
var b__25907 = cljs.core.chunk_buffer(size__8475__auto__);
if((function (){var i__25906 = (0);
while(true){
if((i__25906 < size__8475__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8474__auto__,i__25906);
cljs.core.chunk_append(b__25907,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("individual"))].join(''),cljs.core.cst$kw$move_DASH_sequence,maze_evolution.evolution.create_initial_individual(),cljs.core.cst$kw$fitness,(0)], null));

var G__25908 = (i__25906 + (1));
i__25906 = G__25908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25907),maze_evolution$evolution$create_initial_population_$_iter__25904(cljs.core.chunk_rest(s__25905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25907),null);
}
} else {
var x = cljs.core.first(s__25905__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("individual"))].join(''),cljs.core.cst$kw$move_DASH_sequence,maze_evolution.evolution.create_initial_individual(),cljs.core.cst$kw$fitness,(0)], null),maze_evolution$evolution$create_initial_population_$_iter__25904(cljs.core.rest(s__25905__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),maze_evolution.evolution.population_size));
});
/**
 * Tests an individual through the maze using its move sequence
 */
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
var G__25909_25958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25909_25958) : re_frame.core.dispatch.call(null,G__25909_25958));

var c__22439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto__){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto__){
return (function (state_25941){
var state_val_25942 = (state_25941[(1)]);
if((state_val_25942 === (1))){
var inst_25910 = move_sequence;
var state_25941__$1 = (function (){var statearr_25943 = state_25941;
(statearr_25943[(7)] = inst_25910);

return statearr_25943;
})();
var statearr_25944_25959 = state_25941__$1;
(statearr_25944_25959[(2)] = null);

(statearr_25944_25959[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (2))){
var inst_25910 = (state_25941[(7)]);
var inst_25912 = (state_25941[(8)]);
var inst_25912__$1 = cljs.core.first(inst_25910);
var state_25941__$1 = (function (){var statearr_25945 = state_25941;
(statearr_25945[(8)] = inst_25912__$1);

return statearr_25945;
})();
if(cljs.core.truth_(inst_25912__$1)){
var statearr_25946_25960 = state_25941__$1;
(statearr_25946_25960[(1)] = (4));

} else {
var statearr_25947_25961 = state_25941__$1;
(statearr_25947_25961[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (3))){
var inst_25939 = (state_25941[(2)]);
var state_25941__$1 = state_25941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25941__$1,inst_25939);
} else {
if((state_val_25942 === (4))){
var inst_25912 = (state_25941[(8)]);
var inst_25914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25915 = [cljs.core.cst$kw$move_DASH_ball,inst_25912];
var inst_25916 = (new cljs.core.PersistentVector(null,2,(5),inst_25914,inst_25915,null));
var inst_25917 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_25916) : re_frame.core.dispatch.call(null,inst_25916));
var inst_25918 = cljs.core.async.timeout(maze_evolution.evolution.move_time);
var state_25941__$1 = (function (){var statearr_25948 = state_25941;
(statearr_25948[(9)] = inst_25917);

return statearr_25948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25941__$1,(7),inst_25918);
} else {
if((state_val_25942 === (5))){
var state_25941__$1 = state_25941;
var statearr_25949_25962 = state_25941__$1;
(statearr_25949_25962[(2)] = null);

(statearr_25949_25962[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (6))){
var inst_25925 = (state_25941[(2)]);
var inst_25926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25929 = [cljs.core.cst$kw$current_DASH_fitness];
var inst_25930 = (new cljs.core.PersistentVector(null,1,(5),inst_25928,inst_25929,null));
var inst_25931 = (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(inst_25930) : re_frame.core.subscribe.call(null,inst_25930));
var inst_25932 = cljs.core.deref(inst_25931);
var inst_25933 = [id,inst_25932];
var inst_25934 = (new cljs.core.PersistentVector(null,2,(5),inst_25927,inst_25933,null));
var inst_25935 = [cljs.core.cst$kw$update_DASH_fitness,inst_25934];
var inst_25936 = (new cljs.core.PersistentVector(null,2,(5),inst_25926,inst_25935,null));
var inst_25937 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_25936) : re_frame.core.dispatch.call(null,inst_25936));
var state_25941__$1 = (function (){var statearr_25950 = state_25941;
(statearr_25950[(10)] = inst_25925);

return statearr_25950;
})();
var statearr_25951_25963 = state_25941__$1;
(statearr_25951_25963[(2)] = inst_25937);

(statearr_25951_25963[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (7))){
var inst_25910 = (state_25941[(7)]);
var inst_25920 = (state_25941[(2)]);
var inst_25921 = cljs.core.rest(inst_25910);
var inst_25910__$1 = inst_25921;
var state_25941__$1 = (function (){var statearr_25952 = state_25941;
(statearr_25952[(11)] = inst_25920);

(statearr_25952[(7)] = inst_25910__$1);

return statearr_25952;
})();
var statearr_25953_25964 = state_25941__$1;
(statearr_25953_25964[(2)] = null);

(statearr_25953_25964[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__22439__auto__))
;
return ((function (switch__22339__auto__,c__22439__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__22340__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__22340__auto____0 = (function (){
var statearr_25954 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25954[(0)] = maze_evolution$evolution$test_individual_$_state_machine__22340__auto__);

(statearr_25954[(1)] = (1));

return statearr_25954;
});
var maze_evolution$evolution$test_individual_$_state_machine__22340__auto____1 = (function (state_25941){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_25941);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e25955){if((e25955 instanceof Object)){
var ex__22343__auto__ = e25955;
var statearr_25956_25965 = state_25941;
(statearr_25956_25965[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25941);

return cljs.core.cst$kw$recur;
} else {
throw e25955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__25966 = state_25941;
state_25941 = G__25966;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__22340__auto__ = function(state_25941){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__22340__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__22340__auto____1.call(this,state_25941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__22340__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__22340__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto__))
})();
var state__22441__auto__ = (function (){var statearr_25957 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_25957[(6)] = c__22439__auto__);

return statearr_25957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto__))
);

return c__22439__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__22439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto__){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto__){
return (function (state_26004){
var state_val_26005 = (state_26004[(1)]);
if((state_val_26005 === (1))){
var inst_25967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25968 = [cljs.core.cst$kw$population];
var inst_25969 = (new cljs.core.PersistentVector(null,1,(5),inst_25967,inst_25968,null));
var inst_25970 = (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(inst_25969) : re_frame.core.subscribe.call(null,inst_25969));
var inst_25971 = cljs.core.deref(inst_25970);
var inst_25972 = inst_25971;
var state_26004__$1 = (function (){var statearr_26006 = state_26004;
(statearr_26006[(7)] = inst_25972);

return statearr_26006;
})();
var statearr_26007_26020 = state_26004__$1;
(statearr_26007_26020[(2)] = null);

(statearr_26007_26020[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (2))){
var inst_25974 = (state_26004[(8)]);
var inst_25972 = (state_26004[(7)]);
var inst_25974__$1 = cljs.core.first(inst_25972);
var state_26004__$1 = (function (){var statearr_26008 = state_26004;
(statearr_26008[(8)] = inst_25974__$1);

return statearr_26008;
})();
if(cljs.core.truth_(inst_25974__$1)){
var statearr_26009_26021 = state_26004__$1;
(statearr_26009_26021[(1)] = (4));

} else {
var statearr_26010_26022 = state_26004__$1;
(statearr_26010_26022[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (3))){
var inst_26002 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26004__$1,inst_26002);
} else {
if((state_val_26005 === (4))){
var inst_25974 = (state_26004[(8)]);
var inst_25976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25977 = cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(inst_25974);
var inst_25978 = [cljs.core.cst$kw$set_DASH_new_DASH_move_DASH_sequence,inst_25977];
var inst_25979 = (new cljs.core.PersistentVector(null,2,(5),inst_25976,inst_25978,null));
var inst_25980 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_25979) : re_frame.core.dispatch.call(null,inst_25979));
var inst_25981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25982 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inst_25974);
var inst_25983 = [cljs.core.cst$kw$set_DASH_new_DASH_unique_DASH_id,inst_25982];
var inst_25984 = (new cljs.core.PersistentVector(null,2,(5),inst_25981,inst_25983,null));
var inst_25985 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_25984) : re_frame.core.dispatch.call(null,inst_25984));
var inst_25986 = cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(inst_25974);
var inst_25987 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inst_25974);
var inst_25988 = maze_evolution.evolution.test_individual(inst_25986,inst_25987);
var inst_25989 = cljs.core.async.timeout(maze_evolution.evolution.individual_time);
var state_26004__$1 = (function (){var statearr_26011 = state_26004;
(statearr_26011[(9)] = inst_25988);

(statearr_26011[(10)] = inst_25985);

(statearr_26011[(11)] = inst_25980);

return statearr_26011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26004__$1,(7),inst_25989);
} else {
if((state_val_26005 === (5))){
var state_26004__$1 = state_26004;
var statearr_26012_26023 = state_26004__$1;
(statearr_26012_26023[(2)] = null);

(statearr_26012_26023[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (6))){
var inst_26000 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26013_26024 = state_26004__$1;
(statearr_26013_26024[(2)] = inst_26000);

(statearr_26013_26024[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (7))){
var inst_25972 = (state_26004[(7)]);
var inst_25991 = (state_26004[(2)]);
var inst_25992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25993 = [cljs.core.cst$kw$next_DASH_individual];
var inst_25994 = (new cljs.core.PersistentVector(null,1,(5),inst_25992,inst_25993,null));
var inst_25995 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_25994) : re_frame.core.dispatch.call(null,inst_25994));
var inst_25996 = cljs.core.rest(inst_25972);
var inst_25972__$1 = inst_25996;
var state_26004__$1 = (function (){var statearr_26014 = state_26004;
(statearr_26014[(12)] = inst_25991);

(statearr_26014[(13)] = inst_25995);

(statearr_26014[(7)] = inst_25972__$1);

return statearr_26014;
})();
var statearr_26015_26025 = state_26004__$1;
(statearr_26015_26025[(2)] = null);

(statearr_26015_26025[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__22439__auto__))
;
return ((function (switch__22339__auto__,c__22439__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__22340__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__22340__auto____0 = (function (){
var statearr_26016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26016[(0)] = maze_evolution$evolution$test_population_$_state_machine__22340__auto__);

(statearr_26016[(1)] = (1));

return statearr_26016;
});
var maze_evolution$evolution$test_population_$_state_machine__22340__auto____1 = (function (state_26004){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_26004);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e26017){if((e26017 instanceof Object)){
var ex__22343__auto__ = e26017;
var statearr_26018_26026 = state_26004;
(statearr_26018_26026[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26004);

return cljs.core.cst$kw$recur;
} else {
throw e26017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__26027 = state_26004;
state_26004 = G__26027;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__22340__auto__ = function(state_26004){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__22340__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__22340__auto____1.call(this,state_26004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__22340__auto____0;
maze_evolution$evolution$test_population_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__22340__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto__))
})();
var state__22441__auto__ = (function (){var statearr_26019 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_26019[(6)] = c__22439__auto__);

return statearr_26019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto__))
);

return c__22439__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(population){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((maze_evolution.evolution.population_size / (2)),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__26028_SHARP_){
return cljs.core.cst$kw$fitness.cljs$core$IFn$_invoke$arity$1(p1__26028_SHARP_);
}),population)));
});
/**
 * Combines two parent sequences by selecting a random point, splicing each parent
 *   sequence at that point, and combining them to form a new sequence.
 */
maze_evolution.evolution.cross_over = (function maze_evolution$evolution$cross_over(parent_sequences){
var length = cljs.core.count(cljs.core.first(parent_sequences));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (length){
return (function (baby_sequence,parent_move){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < maze_evolution.evolution.crossing_over_chance)){
return cljs.core.reduced(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(baby_sequence,(function (){var G__26029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_last((length - cljs.core.count(baby_sequence)),cljs.core.second(parent_sequences)),cljs.core.take_last((length - cljs.core.count(baby_sequence)),cljs.core.first(parent_sequences))], null);
return (maze_evolution.evolution.cross_over.cljs$core$IFn$_invoke$arity$1 ? maze_evolution.evolution.cross_over.cljs$core$IFn$_invoke$arity$1(G__26029) : maze_evolution.evolution.cross_over.call(null,G__26029));
})()));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(baby_sequence,parent_move);
}
});})(length))
,cljs.core.PersistentVector.EMPTY,cljs.core.first(parent_sequences));
});
/**
 * Loops through a move sequence and mutates points randomly, with the rate of
 *   mutation per move being 1/64
 */
maze_evolution.evolution.mutate = (function maze_evolution$evolution$mutate(move_sequence){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_baby_sequence,baby_move){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < maze_evolution.evolution.mutation_chance)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_baby_sequence,maze_evolution.evolution.random_move());
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_baby_sequence,baby_move);
}
}),cljs.core.PersistentVector.EMPTY,move_sequence);
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var baby_sequence = maze_evolution.evolution.mutate(maze_evolution.evolution.cross_over(cljs.core.shuffle(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26030_SHARP_){
return cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(p1__26030_SHARP_);
}),breeding_pair))));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("individual"))].join(''),cljs.core.cst$kw$move_DASH_sequence,baby_sequence,cljs.core.cst$kw$fitness,(0)], null);
});
/**
 * Pairs all members of the population and run have-child twice
 */
maze_evolution.evolution.pair_and_reproduce = (function maze_evolution$evolution$pair_and_reproduce(population){
var parents = maze_evolution.evolution.sort_and_prune_population(population);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parents){
return (function (new_generation,breeding_pair){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new_generation,breeding_pair,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(maze_evolution.evolution.have_child,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),breeding_pair))], 0));
});})(parents))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.shuffle(parents)));
});
/**
 * Creates a new population and updates state
 */
maze_evolution.evolution.create_new_generation = (function maze_evolution$evolution$create_new_generation(running){
cljs.core.reset_BANG_(running,true);

var new_population_26038 = maze_evolution.evolution.pair_and_reproduce(cljs.core.deref((function (){var G__26031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$population], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26031) : re_frame.core.subscribe.call(null,G__26031));
})()));
var G__26032_26039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_population,new_population_26038], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26032_26039) : re_frame.core.dispatch.call(null,G__26032_26039));

var G__26033_26040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_generation], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26033_26040) : re_frame.core.dispatch.call(null,G__26033_26040));

var G__26034_26041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_individual], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26034_26041) : re_frame.core.dispatch.call(null,G__26034_26041));

var G__26035_26042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_new_DASH_move_DASH_sequence,cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new_population_26038))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26035_26042) : re_frame.core.dispatch.call(null,G__26035_26042));

var G__26036_26043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_new_DASH_unique_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new_population_26038))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26036_26043) : re_frame.core.dispatch.call(null,G__26036_26043));

var G__26037_26044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26037_26044) : re_frame.core.dispatch.call(null,G__26037_26044));

return cljs.core.reset_BANG_(running,false);
});
/**
 * Tests population in a loop and creates new generations continuously
 */
maze_evolution.evolution.continuously_evolve = (function maze_evolution$evolution$continuously_evolve(running){
maze_evolution.evolution.test_population(running);

var G__26045 = (function (){
maze_evolution.evolution.create_new_generation(running);

var G__26047 = (function (){
return (maze_evolution.evolution.continuously_evolve.cljs$core$IFn$_invoke$arity$1 ? maze_evolution.evolution.continuously_evolve.cljs$core$IFn$_invoke$arity$1(running) : maze_evolution.evolution.continuously_evolve.call(null,running));
});
var G__26048 = (500);
return setTimeout(G__26047,G__26048);
});
var G__26046 = (maze_evolution.evolution.generation_time + (5000));
return setTimeout(G__26045,G__26046);
});
/**
 * Tests population, sorts by fitness, breeds them, and evolves without the visual
 *   interface. Takes a maze vector, a map of the possible fitness values, and n,
 *   the number of generations to evolve. Returns a list of the maximum fitness
 *   values for each generation
 */
maze_evolution.evolution.headless_evolution_test_and_get_maximum_fitness = (function maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness(maze,fitness_map,n){
var i = (0);
var population = maze_evolution.evolution.create_initial_population();
var max_fitness_list = cljs.core.PersistentVector.EMPTY;
while(true){
var fitness_list = clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((10),((function (i,population,max_fitness_list){
return (function() { 
var maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef__delegate = function (args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,args));
};
var maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26049__i = 0, G__26049__a = new Array(arguments.length -  0);
while (G__26049__i < G__26049__a.length) {G__26049__a[G__26049__i] = arguments[G__26049__i + 0]; ++G__26049__i;}
  args = new cljs.core.IndexedSeq(G__26049__a,0,null);
} 
return maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef__delegate.call(this,args);};
maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef.cljs$lang$maxFixedArity = 0;
maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef.cljs$lang$applyTo = (function (arglist__26050){
var args = cljs.core.seq(arglist__26050);
return maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef__delegate(args);
});
maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef.cljs$core$IFn$_invoke$arity$variadic = maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef__delegate;
return maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef;
})()
;})(i,population,max_fitness_list))
,((function (i,population,max_fitness_list){
return (function maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_reducef(fitness_list,position){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fitness_list,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fitness_map,position));
});})(i,population,max_fitness_list))
,clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((10),((function (i,population,max_fitness_list){
return (function() { 
var maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef__delegate = function (args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,args));
};
var maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26051__i = 0, G__26051__a = new Array(arguments.length -  0);
while (G__26051__i < G__26051__a.length) {G__26051__a[G__26051__i] = arguments[G__26051__i + 0]; ++G__26051__i;}
  args = new cljs.core.IndexedSeq(G__26051__a,0,null);
} 
return maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef__delegate.call(this,args);};
maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef.cljs$lang$maxFixedArity = 0;
maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef.cljs$lang$applyTo = (function (arglist__26052){
var args = cljs.core.seq(arglist__26052);
return maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef__delegate(args);
});
maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef.cljs$core$IFn$_invoke$arity$variadic = maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef__delegate;
return maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_combinef;
})()
;})(i,population,max_fitness_list))
,((function (i,population,max_fitness_list){
return (function maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness_$_reducef(position_list,individual){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(position_list,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,population,max_fitness_list){
return (function (position,direction){
return maze_evolution.evolution.move_if_eligible(direction,maze,position);
});})(i,population,max_fitness_list))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),individual));
});})(i,population,max_fitness_list))
,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_sequence,population))));
var new_population = maze_evolution.evolution.pair_and_reproduce(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i,population,max_fitness_list,fitness_list){
return (function (i__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(population,i__$1),cljs.core.cst$kw$fitness,((function (i,population,max_fitness_list,fitness_list){
return (function (_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fitness_list,i__$1);
});})(i,population,max_fitness_list,fitness_list))
);
});})(i,population,max_fitness_list,fitness_list))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(fitness_list))));
if((i >= n)){
return max_fitness_list;
} else {
var G__26053 = (i + (1));
var G__26054 = new_population;
var G__26055 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(max_fitness_list,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,fitness_list));
i = G__26053;
population = G__26054;
max_fitness_list = G__26055;
continue;
}
break;
}
});
