// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
maze_evolution.evolution.population_size = (64);
maze_evolution.evolution.move_time = (3);
maze_evolution.evolution.individual_time = ((300) + ((64) * maze_evolution.evolution.move_time));
maze_evolution.evolution.generation_time = (maze_evolution.evolution.individual_time * maze_evolution.evolution.population_size);
/**
 * Generates a random move between :N, :S, :E, and :W
 */
maze_evolution.evolution.random_move = (function maze_evolution$evolution$random_move(){
var num = cljs.core.rand_int.call(null,(4));
if(cljs.core._EQ_.call(null,num,(0))){
return new cljs.core.Keyword(null,"N","N",-640629860);
} else {
if(cljs.core._EQ_.call(null,num,(1))){
return new cljs.core.Keyword(null,"E","E",230849842);
} else {
if(cljs.core._EQ_.call(null,num,(2))){
return new cljs.core.Keyword(null,"S","S",1267293308);
} else {
if(cljs.core._EQ_.call(null,num,(3))){
return new cljs.core.Keyword(null,"W","W",-2035370425);
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
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"N","N",-640629860))){
if((((cljs.core.first.call(null,current_position) - (1)) >= (0))) && (cljs.core._EQ_.call(null,(0),cljs.core.nth.call(null,cljs.core.nth.call(null,maze_map,(cljs.core.first.call(null,current_position) - (1))),cljs.core.last.call(null,current_position))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,current_position) - (1)),cljs.core.last.call(null,current_position)], null);
} else {
return current_position;
}
} else {
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"S","S",1267293308))){
if((((cljs.core.first.call(null,current_position) + (1)) <= (10))) && (cljs.core._EQ_.call(null,(0),cljs.core.nth.call(null,cljs.core.nth.call(null,maze_map,(cljs.core.first.call(null,current_position) + (1))),cljs.core.last.call(null,current_position))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,current_position) + (1)),cljs.core.last.call(null,current_position)], null);
} else {
return current_position;
}
} else {
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"E","E",230849842))){
if((((cljs.core.last.call(null,current_position) + (1)) <= (20))) && (cljs.core._EQ_.call(null,(0),cljs.core.nth.call(null,cljs.core.nth.call(null,maze_map,cljs.core.first.call(null,current_position)),(cljs.core.last.call(null,current_position) + (1)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,current_position),(cljs.core.last.call(null,current_position) + (1))], null);
} else {
return current_position;
}
} else {
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"W","W",-2035370425))){
if((((cljs.core.last.call(null,current_position) - (1)) >= (0))) && (cljs.core._EQ_.call(null,(0),cljs.core.nth.call(null,cljs.core.nth.call(null,maze_map,cljs.core.first.call(null,current_position)),(cljs.core.last.call(null,current_position) - (1)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,current_position),(cljs.core.last.call(null,current_position) - (1))], null);
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
var iter__39775__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__43040(s__43041){
return (new cljs.core.LazySeq(null,(function (){
var s__43041__$1 = s__43041;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43041__$1);
if(temp__5457__auto__){
var s__43041__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43041__$2)){
var c__39773__auto__ = cljs.core.chunk_first.call(null,s__43041__$2);
var size__39774__auto__ = cljs.core.count.call(null,c__39773__auto__);
var b__43043 = cljs.core.chunk_buffer.call(null,size__39774__auto__);
if((function (){var i__43042 = (0);
while(true){
if((i__43042 < size__39774__auto__)){
var _ = cljs.core._nth.call(null,c__39773__auto__,i__43042);
cljs.core.chunk_append.call(null,b__43043,maze_evolution.evolution.random_move.call(null));

var G__43044 = (i__43042 + (1));
i__43042 = G__43044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43043),maze_evolution$evolution$create_initial_individual_$_iter__43040.call(null,cljs.core.chunk_rest.call(null,s__43041__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43043),null);
}
} else {
var _ = cljs.core.first.call(null,s__43041__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__43040.call(null,cljs.core.rest.call(null,s__43041__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__39775__auto__.call(null,cljs.core.range.call(null,(0),(64)));
});
/**
 * Creates a sequence of randomly generated individuals representing the original population
 */
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__39775__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__43045(s__43046){
return (new cljs.core.LazySeq(null,(function (){
var s__43046__$1 = s__43046;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43046__$1);
if(temp__5457__auto__){
var s__43046__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43046__$2)){
var c__39773__auto__ = cljs.core.chunk_first.call(null,s__43046__$2);
var size__39774__auto__ = cljs.core.count.call(null,c__39773__auto__);
var b__43048 = cljs.core.chunk_buffer.call(null,size__39774__auto__);
if((function (){var i__43047 = (0);
while(true){
if((i__43047 < size__39774__auto__)){
var x = cljs.core._nth.call(null,c__39773__auto__,i__43047);
cljs.core.chunk_append.call(null,b__43048,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__43049 = (i__43047 + (1));
i__43047 = G__43049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43048),maze_evolution$evolution$create_initial_population_$_iter__43045.call(null,cljs.core.chunk_rest.call(null,s__43046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43048),null);
}
} else {
var x = cljs.core.first.call(null,s__43046__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__43045.call(null,cljs.core.rest.call(null,s__43046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__39775__auto__.call(null,cljs.core.range.call(null,(0),maze_evolution.evolution.population_size));
});
/**
 * Tests an individual through the maze using its move sequence
 */
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

var c__41822__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41822__auto__){
return (function (){
var f__41823__auto__ = (function (){var switch__41799__auto__ = ((function (c__41822__auto__){
return (function (state_43081){
var state_val_43082 = (state_43081[(1)]);
if((state_val_43082 === (1))){
var inst_43050 = move_sequence;
var state_43081__$1 = (function (){var statearr_43083 = state_43081;
(statearr_43083[(7)] = inst_43050);

return statearr_43083;
})();
var statearr_43084_43098 = state_43081__$1;
(statearr_43084_43098[(2)] = null);

(statearr_43084_43098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43082 === (2))){
var inst_43052 = (state_43081[(8)]);
var inst_43050 = (state_43081[(7)]);
var inst_43052__$1 = cljs.core.first.call(null,inst_43050);
var state_43081__$1 = (function (){var statearr_43085 = state_43081;
(statearr_43085[(8)] = inst_43052__$1);

return statearr_43085;
})();
if(cljs.core.truth_(inst_43052__$1)){
var statearr_43086_43099 = state_43081__$1;
(statearr_43086_43099[(1)] = (4));

} else {
var statearr_43087_43100 = state_43081__$1;
(statearr_43087_43100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43082 === (3))){
var inst_43079 = (state_43081[(2)]);
var state_43081__$1 = state_43081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43081__$1,inst_43079);
} else {
if((state_val_43082 === (4))){
var inst_43052 = (state_43081[(8)]);
var inst_43054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43055 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_43052];
var inst_43056 = (new cljs.core.PersistentVector(null,2,(5),inst_43054,inst_43055,null));
var inst_43057 = re_frame.core.dispatch.call(null,inst_43056);
var inst_43058 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_43081__$1 = (function (){var statearr_43088 = state_43081;
(statearr_43088[(9)] = inst_43057);

return statearr_43088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43081__$1,(7),inst_43058);
} else {
if((state_val_43082 === (5))){
var state_43081__$1 = state_43081;
var statearr_43089_43101 = state_43081__$1;
(statearr_43089_43101[(2)] = null);

(statearr_43089_43101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43082 === (6))){
var inst_43065 = (state_43081[(2)]);
var inst_43066 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43067 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43069 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_43070 = (new cljs.core.PersistentVector(null,1,(5),inst_43068,inst_43069,null));
var inst_43071 = re_frame.core.subscribe.call(null,inst_43070);
var inst_43072 = cljs.core.deref.call(null,inst_43071);
var inst_43073 = [id,inst_43072];
var inst_43074 = (new cljs.core.PersistentVector(null,2,(5),inst_43067,inst_43073,null));
var inst_43075 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_43074];
var inst_43076 = (new cljs.core.PersistentVector(null,2,(5),inst_43066,inst_43075,null));
var inst_43077 = re_frame.core.dispatch.call(null,inst_43076);
var state_43081__$1 = (function (){var statearr_43090 = state_43081;
(statearr_43090[(10)] = inst_43065);

return statearr_43090;
})();
var statearr_43091_43102 = state_43081__$1;
(statearr_43091_43102[(2)] = inst_43077);

(statearr_43091_43102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43082 === (7))){
var inst_43050 = (state_43081[(7)]);
var inst_43060 = (state_43081[(2)]);
var inst_43061 = cljs.core.rest.call(null,inst_43050);
var inst_43050__$1 = inst_43061;
var state_43081__$1 = (function (){var statearr_43092 = state_43081;
(statearr_43092[(11)] = inst_43060);

(statearr_43092[(7)] = inst_43050__$1);

return statearr_43092;
})();
var statearr_43093_43103 = state_43081__$1;
(statearr_43093_43103[(2)] = null);

(statearr_43093_43103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__41822__auto__))
;
return ((function (switch__41799__auto__,c__41822__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__41800__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__41800__auto____0 = (function (){
var statearr_43094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43094[(0)] = maze_evolution$evolution$test_individual_$_state_machine__41800__auto__);

(statearr_43094[(1)] = (1));

return statearr_43094;
});
var maze_evolution$evolution$test_individual_$_state_machine__41800__auto____1 = (function (state_43081){
while(true){
var ret_value__41801__auto__ = (function (){try{while(true){
var result__41802__auto__ = switch__41799__auto__.call(null,state_43081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41802__auto__;
}
break;
}
}catch (e43095){if((e43095 instanceof Object)){
var ex__41803__auto__ = e43095;
var statearr_43096_43104 = state_43081;
(statearr_43096_43104[(5)] = ex__41803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43105 = state_43081;
state_43081 = G__43105;
continue;
} else {
return ret_value__41801__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__41800__auto__ = function(state_43081){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__41800__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__41800__auto____1.call(this,state_43081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__41800__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__41800__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__41800__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__41800__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__41800__auto__;
})()
;})(switch__41799__auto__,c__41822__auto__))
})();
var state__41824__auto__ = (function (){var statearr_43097 = f__41823__auto__.call(null);
(statearr_43097[(6)] = c__41822__auto__);

return statearr_43097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41824__auto__);
});})(c__41822__auto__))
);

return c__41822__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__41822__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41822__auto__){
return (function (){
var f__41823__auto__ = (function (){var switch__41799__auto__ = ((function (c__41822__auto__){
return (function (state_43143){
var state_val_43144 = (state_43143[(1)]);
if((state_val_43144 === (1))){
var inst_43106 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43107 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_43108 = (new cljs.core.PersistentVector(null,1,(5),inst_43106,inst_43107,null));
var inst_43109 = re_frame.core.subscribe.call(null,inst_43108);
var inst_43110 = cljs.core.deref.call(null,inst_43109);
var inst_43111 = inst_43110;
var state_43143__$1 = (function (){var statearr_43145 = state_43143;
(statearr_43145[(7)] = inst_43111);

return statearr_43145;
})();
var statearr_43146_43159 = state_43143__$1;
(statearr_43146_43159[(2)] = null);

(statearr_43146_43159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43144 === (2))){
var inst_43113 = (state_43143[(8)]);
var inst_43111 = (state_43143[(7)]);
var inst_43113__$1 = cljs.core.first.call(null,inst_43111);
var state_43143__$1 = (function (){var statearr_43147 = state_43143;
(statearr_43147[(8)] = inst_43113__$1);

return statearr_43147;
})();
if(cljs.core.truth_(inst_43113__$1)){
var statearr_43148_43160 = state_43143__$1;
(statearr_43148_43160[(1)] = (4));

} else {
var statearr_43149_43161 = state_43143__$1;
(statearr_43149_43161[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43144 === (3))){
var inst_43141 = (state_43143[(2)]);
var state_43143__$1 = state_43143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43143__$1,inst_43141);
} else {
if((state_val_43144 === (4))){
var inst_43113 = (state_43143[(8)]);
var inst_43115 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43116 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_43113);
var inst_43117 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_43116];
var inst_43118 = (new cljs.core.PersistentVector(null,2,(5),inst_43115,inst_43117,null));
var inst_43119 = re_frame.core.dispatch.call(null,inst_43118);
var inst_43120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43121 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_43113);
var inst_43122 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_43121];
var inst_43123 = (new cljs.core.PersistentVector(null,2,(5),inst_43120,inst_43122,null));
var inst_43124 = re_frame.core.dispatch.call(null,inst_43123);
var inst_43125 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_43113);
var inst_43126 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_43113);
var inst_43127 = maze_evolution.evolution.test_individual.call(null,inst_43125,inst_43126);
var inst_43128 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_43143__$1 = (function (){var statearr_43150 = state_43143;
(statearr_43150[(9)] = inst_43127);

(statearr_43150[(10)] = inst_43119);

(statearr_43150[(11)] = inst_43124);

return statearr_43150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43143__$1,(7),inst_43128);
} else {
if((state_val_43144 === (5))){
var state_43143__$1 = state_43143;
var statearr_43151_43162 = state_43143__$1;
(statearr_43151_43162[(2)] = null);

(statearr_43151_43162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43144 === (6))){
var inst_43139 = (state_43143[(2)]);
var state_43143__$1 = state_43143;
var statearr_43152_43163 = state_43143__$1;
(statearr_43152_43163[(2)] = inst_43139);

(statearr_43152_43163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43144 === (7))){
var inst_43111 = (state_43143[(7)]);
var inst_43130 = (state_43143[(2)]);
var inst_43131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43132 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_43133 = (new cljs.core.PersistentVector(null,1,(5),inst_43131,inst_43132,null));
var inst_43134 = re_frame.core.dispatch.call(null,inst_43133);
var inst_43135 = cljs.core.rest.call(null,inst_43111);
var inst_43111__$1 = inst_43135;
var state_43143__$1 = (function (){var statearr_43153 = state_43143;
(statearr_43153[(7)] = inst_43111__$1);

(statearr_43153[(12)] = inst_43134);

(statearr_43153[(13)] = inst_43130);

return statearr_43153;
})();
var statearr_43154_43164 = state_43143__$1;
(statearr_43154_43164[(2)] = null);

(statearr_43154_43164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__41822__auto__))
;
return ((function (switch__41799__auto__,c__41822__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__41800__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__41800__auto____0 = (function (){
var statearr_43155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43155[(0)] = maze_evolution$evolution$test_population_$_state_machine__41800__auto__);

(statearr_43155[(1)] = (1));

return statearr_43155;
});
var maze_evolution$evolution$test_population_$_state_machine__41800__auto____1 = (function (state_43143){
while(true){
var ret_value__41801__auto__ = (function (){try{while(true){
var result__41802__auto__ = switch__41799__auto__.call(null,state_43143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41802__auto__;
}
break;
}
}catch (e43156){if((e43156 instanceof Object)){
var ex__41803__auto__ = e43156;
var statearr_43157_43165 = state_43143;
(statearr_43157_43165[(5)] = ex__41803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43166 = state_43143;
state_43143 = G__43166;
continue;
} else {
return ret_value__41801__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__41800__auto__ = function(state_43143){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__41800__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__41800__auto____1.call(this,state_43143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__41800__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__41800__auto____0;
maze_evolution$evolution$test_population_$_state_machine__41800__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__41800__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__41800__auto__;
})()
;})(switch__41799__auto__,c__41822__auto__))
})();
var state__41824__auto__ = (function (){var statearr_43158 = f__41823__auto__.call(null);
(statearr_43158[(6)] = c__41822__auto__);

return statearr_43158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41824__auto__);
});})(c__41822__auto__))
);

return c__41822__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(population){
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p1__43167_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__43167_SHARP_);
}),population)));
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__43168_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__43168_SHARP_);
}),breeding_pair));
var baby_sequence = cljs.core.reduce.call(null,((function (move_sequences){
return (function (new_baby_sequence,baby_move){
if((cljs.core.rand.call(null) < ((1) / (64)))){
return cljs.core.conj.call(null,new_baby_sequence,maze_evolution.evolution.random_move.call(null));
} else {
return cljs.core.conj.call(null,new_baby_sequence,baby_move);
}
});})(move_sequences))
,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,((function (move_sequences){
return (function (baby_sequence,parent_move){
var sequence_not_full = (cljs.core.count.call(null,baby_sequence) < (64));
if((sequence_not_full) && ((cljs.core.rand.call(null) < ((1) / (32))))){
return cljs.core.concat.call(null,baby_sequence,cljs.core.take_last.call(null,((64) - cljs.core.count.call(null,baby_sequence)),cljs.core.second.call(null,move_sequences)));
} else {
if(sequence_not_full){
return cljs.core.conj.call(null,baby_sequence,parent_move);
} else {
return baby_sequence;

}
}
});})(move_sequences))
,cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,move_sequences)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),baby_sequence,new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null);
});
/**
 * Pairs all members of the population and run have-child twice
 */
maze_evolution.evolution.pair_and_reproduce = (function maze_evolution$evolution$pair_and_reproduce(population){
var parents = maze_evolution.evolution.sort_and_prune_population.call(null,population);
return cljs.core.reduce.call(null,((function (parents){
return (function (new_generation,breeding_pair){
return cljs.core.concat.call(null,new_generation,breeding_pair,cljs.core.map.call(null,maze_evolution.evolution.have_child,cljs.core.repeat.call(null,(2),breeding_pair)));
});})(parents))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),cljs.core.shuffle.call(null,parents)));
});
/**
 * Creates a new population and updates state
 */
maze_evolution.evolution.create_new_generation = (function maze_evolution$evolution$create_new_generation(running){
cljs.core.reset_BANG_.call(null,running,true);

var new_population_43169 = maze_evolution.evolution.pair_and_reproduce.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null))));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_43169], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_43169))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_43169))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

return cljs.core.reset_BANG_.call(null,running,false);
});
maze_evolution.evolution.update_fitness_list = (function maze_evolution$evolution$update_fitness_list(){
return null;
});
/**
 * Tests population in a loop and creates new generations continuously
 */
maze_evolution.evolution.continuously_evolve = (function maze_evolution$evolution$continuously_evolve(running){
maze_evolution.evolution.test_population.call(null,running);

return setTimeout((function (){
maze_evolution.evolution.create_new_generation.call(null,running);

return setTimeout((function (){
return maze_evolution.evolution.continuously_evolve.call(null,running);
}),(500));
}),(maze_evolution.evolution.generation_time + (5000)));
});
/**
 * Creates an initial population and tests it n times without a user interface.
 *   Returns a list containing the maximum fitness for every generation
 */
maze_evolution.evolution.headless_evolution_test_and_get_maximum_fitness = (function maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness(maze,fitness_map,n){
var i = (1);
var population = maze_evolution.evolution.create_initial_population.call(null);
var max_fitness_list = cljs.core.PersistentVector.EMPTY;
while(true){
var fitness_list = cljs.core.reduce.call(null,((function (i,population,max_fitness_list){
return (function (fitness_list,position){
return cljs.core.conj.call(null,fitness_list,cljs.core.get_in.call(null,fitness_map,position));
});})(i,population,max_fitness_list))
,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,((function (i,population,max_fitness_list){
return (function (position_list,individual){
return cljs.core.conj.call(null,position_list,cljs.core.reduce.call(null,((function (i,population,max_fitness_list){
return (function (position,direction){
return maze_evolution.evolution.move_if_eligible.call(null,direction,maze,position);
});})(i,population,max_fitness_list))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),individual));
});})(i,population,max_fitness_list))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),population)));
var new_population = maze_evolution.evolution.pair_and_reproduce.call(null,cljs.core.map.call(null,((function (i,population,max_fitness_list,fitness_list){
return (function (i__$1){
return cljs.core.update.call(null,cljs.core.nth.call(null,population,i__$1),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),((function (i,population,max_fitness_list,fitness_list){
return (function (_){
return cljs.core.nth.call(null,fitness_list,i__$1);
});})(i,population,max_fitness_list,fitness_list))
);
});})(i,population,max_fitness_list,fitness_list))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,fitness_list))));
if((i >= n)){
return max_fitness_list;
} else {
var G__43170 = (i + (1));
var G__43171 = new_population;
var G__43172 = cljs.core.conj.call(null,max_fitness_list,cljs.core.apply.call(null,cljs.core.max,fitness_list));
i = G__43170;
population = G__43171;
max_fitness_list = G__43172;
continue;
}
break;
}
});

//# sourceMappingURL=evolution.js.map?rel=1518797564185
