// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
goog.require('clojure.core.reducers');
maze_evolution.evolution.population_size = (64);
maze_evolution.evolution.move_time = (1);
maze_evolution.evolution.individual_time = ((50) + ((64) * maze_evolution.evolution.move_time));
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
var iter__39670__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__42935(s__42936){
return (new cljs.core.LazySeq(null,(function (){
var s__42936__$1 = s__42936;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42936__$1);
if(temp__5457__auto__){
var s__42936__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42936__$2)){
var c__39668__auto__ = cljs.core.chunk_first.call(null,s__42936__$2);
var size__39669__auto__ = cljs.core.count.call(null,c__39668__auto__);
var b__42938 = cljs.core.chunk_buffer.call(null,size__39669__auto__);
if((function (){var i__42937 = (0);
while(true){
if((i__42937 < size__39669__auto__)){
var _ = cljs.core._nth.call(null,c__39668__auto__,i__42937);
cljs.core.chunk_append.call(null,b__42938,maze_evolution.evolution.random_move.call(null));

var G__42939 = (i__42937 + (1));
i__42937 = G__42939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42938),maze_evolution$evolution$create_initial_individual_$_iter__42935.call(null,cljs.core.chunk_rest.call(null,s__42936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42938),null);
}
} else {
var _ = cljs.core.first.call(null,s__42936__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__42935.call(null,cljs.core.rest.call(null,s__42936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__39670__auto__.call(null,cljs.core.range.call(null,(0),(64)));
});
/**
 * Creates a sequence of randomly generated individuals representing the original population
 */
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__39670__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__42940(s__42941){
return (new cljs.core.LazySeq(null,(function (){
var s__42941__$1 = s__42941;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42941__$1);
if(temp__5457__auto__){
var s__42941__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42941__$2)){
var c__39668__auto__ = cljs.core.chunk_first.call(null,s__42941__$2);
var size__39669__auto__ = cljs.core.count.call(null,c__39668__auto__);
var b__42943 = cljs.core.chunk_buffer.call(null,size__39669__auto__);
if((function (){var i__42942 = (0);
while(true){
if((i__42942 < size__39669__auto__)){
var x = cljs.core._nth.call(null,c__39668__auto__,i__42942);
cljs.core.chunk_append.call(null,b__42943,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__42944 = (i__42942 + (1));
i__42942 = G__42944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42943),maze_evolution$evolution$create_initial_population_$_iter__42940.call(null,cljs.core.chunk_rest.call(null,s__42941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42943),null);
}
} else {
var x = cljs.core.first.call(null,s__42941__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__42940.call(null,cljs.core.rest.call(null,s__42941__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__39670__auto__.call(null,cljs.core.range.call(null,(0),maze_evolution.evolution.population_size));
});
/**
 * Tests an individual through the maze using its move sequence
 */
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

var c__41717__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41717__auto__){
return (function (){
var f__41718__auto__ = (function (){var switch__41694__auto__ = ((function (c__41717__auto__){
return (function (state_42976){
var state_val_42977 = (state_42976[(1)]);
if((state_val_42977 === (1))){
var inst_42945 = move_sequence;
var state_42976__$1 = (function (){var statearr_42978 = state_42976;
(statearr_42978[(7)] = inst_42945);

return statearr_42978;
})();
var statearr_42979_42993 = state_42976__$1;
(statearr_42979_42993[(2)] = null);

(statearr_42979_42993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (2))){
var inst_42947 = (state_42976[(8)]);
var inst_42945 = (state_42976[(7)]);
var inst_42947__$1 = cljs.core.first.call(null,inst_42945);
var state_42976__$1 = (function (){var statearr_42980 = state_42976;
(statearr_42980[(8)] = inst_42947__$1);

return statearr_42980;
})();
if(cljs.core.truth_(inst_42947__$1)){
var statearr_42981_42994 = state_42976__$1;
(statearr_42981_42994[(1)] = (4));

} else {
var statearr_42982_42995 = state_42976__$1;
(statearr_42982_42995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (3))){
var inst_42974 = (state_42976[(2)]);
var state_42976__$1 = state_42976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42976__$1,inst_42974);
} else {
if((state_val_42977 === (4))){
var inst_42947 = (state_42976[(8)]);
var inst_42949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42950 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_42947];
var inst_42951 = (new cljs.core.PersistentVector(null,2,(5),inst_42949,inst_42950,null));
var inst_42952 = re_frame.core.dispatch.call(null,inst_42951);
var inst_42953 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_42976__$1 = (function (){var statearr_42983 = state_42976;
(statearr_42983[(9)] = inst_42952);

return statearr_42983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42976__$1,(7),inst_42953);
} else {
if((state_val_42977 === (5))){
var state_42976__$1 = state_42976;
var statearr_42984_42996 = state_42976__$1;
(statearr_42984_42996[(2)] = null);

(statearr_42984_42996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (6))){
var inst_42960 = (state_42976[(2)]);
var inst_42961 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42962 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42964 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_42965 = (new cljs.core.PersistentVector(null,1,(5),inst_42963,inst_42964,null));
var inst_42966 = re_frame.core.subscribe.call(null,inst_42965);
var inst_42967 = cljs.core.deref.call(null,inst_42966);
var inst_42968 = [id,inst_42967];
var inst_42969 = (new cljs.core.PersistentVector(null,2,(5),inst_42962,inst_42968,null));
var inst_42970 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_42969];
var inst_42971 = (new cljs.core.PersistentVector(null,2,(5),inst_42961,inst_42970,null));
var inst_42972 = re_frame.core.dispatch.call(null,inst_42971);
var state_42976__$1 = (function (){var statearr_42985 = state_42976;
(statearr_42985[(10)] = inst_42960);

return statearr_42985;
})();
var statearr_42986_42997 = state_42976__$1;
(statearr_42986_42997[(2)] = inst_42972);

(statearr_42986_42997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (7))){
var inst_42945 = (state_42976[(7)]);
var inst_42955 = (state_42976[(2)]);
var inst_42956 = cljs.core.rest.call(null,inst_42945);
var inst_42945__$1 = inst_42956;
var state_42976__$1 = (function (){var statearr_42987 = state_42976;
(statearr_42987[(11)] = inst_42955);

(statearr_42987[(7)] = inst_42945__$1);

return statearr_42987;
})();
var statearr_42988_42998 = state_42976__$1;
(statearr_42988_42998[(2)] = null);

(statearr_42988_42998[(1)] = (2));


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
});})(c__41717__auto__))
;
return ((function (switch__41694__auto__,c__41717__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__41695__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__41695__auto____0 = (function (){
var statearr_42989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42989[(0)] = maze_evolution$evolution$test_individual_$_state_machine__41695__auto__);

(statearr_42989[(1)] = (1));

return statearr_42989;
});
var maze_evolution$evolution$test_individual_$_state_machine__41695__auto____1 = (function (state_42976){
while(true){
var ret_value__41696__auto__ = (function (){try{while(true){
var result__41697__auto__ = switch__41694__auto__.call(null,state_42976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41697__auto__;
}
break;
}
}catch (e42990){if((e42990 instanceof Object)){
var ex__41698__auto__ = e42990;
var statearr_42991_42999 = state_42976;
(statearr_42991_42999[(5)] = ex__41698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43000 = state_42976;
state_42976 = G__43000;
continue;
} else {
return ret_value__41696__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__41695__auto__ = function(state_42976){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__41695__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__41695__auto____1.call(this,state_42976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__41695__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__41695__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__41695__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__41695__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__41695__auto__;
})()
;})(switch__41694__auto__,c__41717__auto__))
})();
var state__41719__auto__ = (function (){var statearr_42992 = f__41718__auto__.call(null);
(statearr_42992[(6)] = c__41717__auto__);

return statearr_42992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41719__auto__);
});})(c__41717__auto__))
);

return c__41717__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__41717__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41717__auto__){
return (function (){
var f__41718__auto__ = (function (){var switch__41694__auto__ = ((function (c__41717__auto__){
return (function (state_43038){
var state_val_43039 = (state_43038[(1)]);
if((state_val_43039 === (1))){
var inst_43001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43002 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_43003 = (new cljs.core.PersistentVector(null,1,(5),inst_43001,inst_43002,null));
var inst_43004 = re_frame.core.subscribe.call(null,inst_43003);
var inst_43005 = cljs.core.deref.call(null,inst_43004);
var inst_43006 = inst_43005;
var state_43038__$1 = (function (){var statearr_43040 = state_43038;
(statearr_43040[(7)] = inst_43006);

return statearr_43040;
})();
var statearr_43041_43054 = state_43038__$1;
(statearr_43041_43054[(2)] = null);

(statearr_43041_43054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (2))){
var inst_43008 = (state_43038[(8)]);
var inst_43006 = (state_43038[(7)]);
var inst_43008__$1 = cljs.core.first.call(null,inst_43006);
var state_43038__$1 = (function (){var statearr_43042 = state_43038;
(statearr_43042[(8)] = inst_43008__$1);

return statearr_43042;
})();
if(cljs.core.truth_(inst_43008__$1)){
var statearr_43043_43055 = state_43038__$1;
(statearr_43043_43055[(1)] = (4));

} else {
var statearr_43044_43056 = state_43038__$1;
(statearr_43044_43056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (3))){
var inst_43036 = (state_43038[(2)]);
var state_43038__$1 = state_43038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43038__$1,inst_43036);
} else {
if((state_val_43039 === (4))){
var inst_43008 = (state_43038[(8)]);
var inst_43010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43011 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_43008);
var inst_43012 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_43011];
var inst_43013 = (new cljs.core.PersistentVector(null,2,(5),inst_43010,inst_43012,null));
var inst_43014 = re_frame.core.dispatch.call(null,inst_43013);
var inst_43015 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43016 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_43008);
var inst_43017 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_43016];
var inst_43018 = (new cljs.core.PersistentVector(null,2,(5),inst_43015,inst_43017,null));
var inst_43019 = re_frame.core.dispatch.call(null,inst_43018);
var inst_43020 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_43008);
var inst_43021 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_43008);
var inst_43022 = maze_evolution.evolution.test_individual.call(null,inst_43020,inst_43021);
var inst_43023 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_43038__$1 = (function (){var statearr_43045 = state_43038;
(statearr_43045[(9)] = inst_43019);

(statearr_43045[(10)] = inst_43022);

(statearr_43045[(11)] = inst_43014);

return statearr_43045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43038__$1,(7),inst_43023);
} else {
if((state_val_43039 === (5))){
var state_43038__$1 = state_43038;
var statearr_43046_43057 = state_43038__$1;
(statearr_43046_43057[(2)] = null);

(statearr_43046_43057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (6))){
var inst_43034 = (state_43038[(2)]);
var state_43038__$1 = state_43038;
var statearr_43047_43058 = state_43038__$1;
(statearr_43047_43058[(2)] = inst_43034);

(statearr_43047_43058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (7))){
var inst_43006 = (state_43038[(7)]);
var inst_43025 = (state_43038[(2)]);
var inst_43026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43027 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_43028 = (new cljs.core.PersistentVector(null,1,(5),inst_43026,inst_43027,null));
var inst_43029 = re_frame.core.dispatch.call(null,inst_43028);
var inst_43030 = cljs.core.rest.call(null,inst_43006);
var inst_43006__$1 = inst_43030;
var state_43038__$1 = (function (){var statearr_43048 = state_43038;
(statearr_43048[(12)] = inst_43025);

(statearr_43048[(7)] = inst_43006__$1);

(statearr_43048[(13)] = inst_43029);

return statearr_43048;
})();
var statearr_43049_43059 = state_43038__$1;
(statearr_43049_43059[(2)] = null);

(statearr_43049_43059[(1)] = (2));


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
});})(c__41717__auto__))
;
return ((function (switch__41694__auto__,c__41717__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__41695__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__41695__auto____0 = (function (){
var statearr_43050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43050[(0)] = maze_evolution$evolution$test_population_$_state_machine__41695__auto__);

(statearr_43050[(1)] = (1));

return statearr_43050;
});
var maze_evolution$evolution$test_population_$_state_machine__41695__auto____1 = (function (state_43038){
while(true){
var ret_value__41696__auto__ = (function (){try{while(true){
var result__41697__auto__ = switch__41694__auto__.call(null,state_43038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41697__auto__;
}
break;
}
}catch (e43051){if((e43051 instanceof Object)){
var ex__41698__auto__ = e43051;
var statearr_43052_43060 = state_43038;
(statearr_43052_43060[(5)] = ex__41698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43061 = state_43038;
state_43038 = G__43061;
continue;
} else {
return ret_value__41696__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__41695__auto__ = function(state_43038){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__41695__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__41695__auto____1.call(this,state_43038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__41695__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__41695__auto____0;
maze_evolution$evolution$test_population_$_state_machine__41695__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__41695__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__41695__auto__;
})()
;})(switch__41694__auto__,c__41717__auto__))
})();
var state__41719__auto__ = (function (){var statearr_43053 = f__41718__auto__.call(null);
(statearr_43053[(6)] = c__41717__auto__);

return statearr_43053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41719__auto__);
});})(c__41717__auto__))
);

return c__41717__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(population){
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p1__43062_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__43062_SHARP_);
}),population)));
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__43063_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__43063_SHARP_);
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

var new_population_43064 = maze_evolution.evolution.pair_and_reproduce.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null))));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_43064], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_43064))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_43064))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

return cljs.core.reset_BANG_.call(null,running,false);
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
,cljs.core.PersistentVector.EMPTY,clojure.core.reducers.fold.call(null,((function (i,population,max_fitness_list){
return (function() {
var G__43065 = null;
var G__43065__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__43065__2 = (function (position_list,individual){
return cljs.core.conj.call(null,position_list,cljs.core.reduce.call(null,((function (i,population,max_fitness_list){
return (function (position,direction){
return maze_evolution.evolution.move_if_eligible.call(null,direction,maze,position);
});})(i,population,max_fitness_list))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),individual));
});
G__43065 = function(position_list,individual){
switch(arguments.length){
case 0:
return G__43065__0.call(this);
case 2:
return G__43065__2.call(this,position_list,individual);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__43065.cljs$core$IFn$_invoke$arity$0 = G__43065__0;
G__43065.cljs$core$IFn$_invoke$arity$2 = G__43065__2;
return G__43065;
})()
;})(i,population,max_fitness_list))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),population)));
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
var G__43066 = (i + (1));
var G__43067 = new_population;
var G__43068 = cljs.core.conj.call(null,max_fitness_list,cljs.core.apply.call(null,cljs.core.max,fitness_list));
i = G__43066;
population = G__43067;
max_fitness_list = G__43068;
continue;
}
break;
}
});

//# sourceMappingURL=evolution.js.map?rel=1519394919189
