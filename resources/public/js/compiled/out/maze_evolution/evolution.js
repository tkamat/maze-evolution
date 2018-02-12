// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
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
 * Creates a sequence of random moves representing an initial individual
 */
maze_evolution.evolution.create_initial_individual = (function maze_evolution$evolution$create_initial_individual(){
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__43986(s__43987){
return (new cljs.core.LazySeq(null,(function (){
var s__43987__$1 = s__43987;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43987__$1);
if(temp__4657__auto__){
var s__43987__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43987__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__43987__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__43989 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__43988 = (0);
while(true){
if((i__43988 < size__37115__auto__)){
var _ = cljs.core._nth.call(null,c__37114__auto__,i__43988);
cljs.core.chunk_append.call(null,b__43989,maze_evolution.evolution.random_move.call(null));

var G__43990 = (i__43988 + (1));
i__43988 = G__43990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43989),maze_evolution$evolution$create_initial_individual_$_iter__43986.call(null,cljs.core.chunk_rest.call(null,s__43987__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43989),null);
}
} else {
var _ = cljs.core.first.call(null,s__43987__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__43986.call(null,cljs.core.rest.call(null,s__43987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37116__auto__.call(null,cljs.core.range.call(null,(0),(64)));
});
/**
 * Creates a sequence of randomly generated individuals representing the original population
 */
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__43991(s__43992){
return (new cljs.core.LazySeq(null,(function (){
var s__43992__$1 = s__43992;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43992__$1);
if(temp__4657__auto__){
var s__43992__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43992__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__43992__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__43994 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__43993 = (0);
while(true){
if((i__43993 < size__37115__auto__)){
var x = cljs.core._nth.call(null,c__37114__auto__,i__43993);
cljs.core.chunk_append.call(null,b__43994,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__43995 = (i__43993 + (1));
i__43993 = G__43995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43994),maze_evolution$evolution$create_initial_population_$_iter__43991.call(null,cljs.core.chunk_rest.call(null,s__43992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43994),null);
}
} else {
var x = cljs.core.first.call(null,s__43992__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__43991.call(null,cljs.core.rest.call(null,s__43992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37116__auto__.call(null,cljs.core.range.call(null,(0),maze_evolution.evolution.population_size));
});
/**
 * Tests an individual through the maze using its move sequence
 */
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

var c__39058__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39058__auto__){
return (function (){
var f__39059__auto__ = (function (){var switch__39037__auto__ = ((function (c__39058__auto__){
return (function (state_44032){
var state_val_44033 = (state_44032[(1)]);
if((state_val_44033 === (1))){
var inst_43996 = move_sequence;
var state_44032__$1 = (function (){var statearr_44034 = state_44032;
(statearr_44034[(7)] = inst_43996);

return statearr_44034;
})();
var statearr_44035_44049 = state_44032__$1;
(statearr_44035_44049[(2)] = null);

(statearr_44035_44049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (2))){
var inst_43998 = (state_44032[(8)]);
var inst_43996 = (state_44032[(7)]);
var inst_43998__$1 = cljs.core.first.call(null,inst_43996);
var state_44032__$1 = (function (){var statearr_44036 = state_44032;
(statearr_44036[(8)] = inst_43998__$1);

return statearr_44036;
})();
if(cljs.core.truth_(inst_43998__$1)){
var statearr_44037_44050 = state_44032__$1;
(statearr_44037_44050[(1)] = (4));

} else {
var statearr_44038_44051 = state_44032__$1;
(statearr_44038_44051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (3))){
var inst_44030 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44032__$1,inst_44030);
} else {
if((state_val_44033 === (4))){
var inst_43998 = (state_44032[(8)]);
var inst_44000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44001 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_43998];
var inst_44002 = (new cljs.core.PersistentVector(null,2,(5),inst_44000,inst_44001,null));
var inst_44003 = re_frame.core.dispatch.call(null,inst_44002);
var inst_44004 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_44032__$1 = (function (){var statearr_44039 = state_44032;
(statearr_44039[(9)] = inst_44003);

return statearr_44039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44032__$1,(7),inst_44004);
} else {
if((state_val_44033 === (5))){
var state_44032__$1 = state_44032;
var statearr_44040_44052 = state_44032__$1;
(statearr_44040_44052[(2)] = null);

(statearr_44040_44052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (6))){
var inst_44011 = (state_44032[(2)]);
var inst_44012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44013 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44015 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_44016 = (new cljs.core.PersistentVector(null,1,(5),inst_44014,inst_44015,null));
var inst_44017 = re_frame.core.subscribe.call(null,inst_44016);
var inst_44018 = cljs.core.deref.call(null,inst_44017);
var inst_44019 = [id,inst_44018];
var inst_44020 = (new cljs.core.PersistentVector(null,2,(5),inst_44013,inst_44019,null));
var inst_44021 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_44020];
var inst_44022 = (new cljs.core.PersistentVector(null,2,(5),inst_44012,inst_44021,null));
var inst_44023 = re_frame.core.dispatch.call(null,inst_44022);
var inst_44024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44025 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_44026 = (new cljs.core.PersistentVector(null,1,(5),inst_44024,inst_44025,null));
var inst_44027 = re_frame.core.subscribe.call(null,inst_44026);
var inst_44028 = cljs.core.deref.call(null,inst_44027);
var state_44032__$1 = (function (){var statearr_44041 = state_44032;
(statearr_44041[(10)] = inst_44023);

(statearr_44041[(11)] = inst_44011);

return statearr_44041;
})();
var statearr_44042_44053 = state_44032__$1;
(statearr_44042_44053[(2)] = inst_44028);

(statearr_44042_44053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (7))){
var inst_43996 = (state_44032[(7)]);
var inst_44006 = (state_44032[(2)]);
var inst_44007 = cljs.core.rest.call(null,inst_43996);
var inst_43996__$1 = inst_44007;
var state_44032__$1 = (function (){var statearr_44043 = state_44032;
(statearr_44043[(7)] = inst_43996__$1);

(statearr_44043[(12)] = inst_44006);

return statearr_44043;
})();
var statearr_44044_44054 = state_44032__$1;
(statearr_44044_44054[(2)] = null);

(statearr_44044_44054[(1)] = (2));


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
});})(c__39058__auto__))
;
return ((function (switch__39037__auto__,c__39058__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__39038__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__39038__auto____0 = (function (){
var statearr_44045 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44045[(0)] = maze_evolution$evolution$test_individual_$_state_machine__39038__auto__);

(statearr_44045[(1)] = (1));

return statearr_44045;
});
var maze_evolution$evolution$test_individual_$_state_machine__39038__auto____1 = (function (state_44032){
while(true){
var ret_value__39039__auto__ = (function (){try{while(true){
var result__39040__auto__ = switch__39037__auto__.call(null,state_44032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39040__auto__;
}
break;
}
}catch (e44046){if((e44046 instanceof Object)){
var ex__39041__auto__ = e44046;
var statearr_44047_44055 = state_44032;
(statearr_44047_44055[(5)] = ex__39041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44056 = state_44032;
state_44032 = G__44056;
continue;
} else {
return ret_value__39039__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__39038__auto__ = function(state_44032){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__39038__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__39038__auto____1.call(this,state_44032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__39038__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__39038__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__39038__auto__;
})()
;})(switch__39037__auto__,c__39058__auto__))
})();
var state__39060__auto__ = (function (){var statearr_44048 = f__39059__auto__.call(null);
(statearr_44048[(6)] = c__39058__auto__);

return statearr_44048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39060__auto__);
});})(c__39058__auto__))
);

return c__39058__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__39058__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39058__auto__){
return (function (){
var f__39059__auto__ = (function (){var switch__39037__auto__ = ((function (c__39058__auto__){
return (function (state_44102){
var state_val_44103 = (state_44102[(1)]);
if((state_val_44103 === (7))){
var inst_44063 = (state_44102[(7)]);
var inst_44079 = (state_44102[(8)]);
var inst_44082 = (state_44102[(2)]);
var inst_44083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44084 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_44085 = (new cljs.core.PersistentVector(null,1,(5),inst_44083,inst_44084,null));
var inst_44086 = re_frame.core.dispatch.call(null,inst_44085);
var inst_44087 = (inst_44079 > inst_44063);
var state_44102__$1 = (function (){var statearr_44104 = state_44102;
(statearr_44104[(9)] = inst_44082);

(statearr_44104[(10)] = inst_44086);

return statearr_44104;
})();
if(cljs.core.truth_(inst_44087)){
var statearr_44105_44126 = state_44102__$1;
(statearr_44105_44126[(1)] = (8));

} else {
var statearr_44106_44127 = state_44102__$1;
(statearr_44106_44127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44103 === (1))){
var inst_44057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44058 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_44059 = (new cljs.core.PersistentVector(null,1,(5),inst_44057,inst_44058,null));
var inst_44060 = re_frame.core.subscribe.call(null,inst_44059);
var inst_44061 = cljs.core.deref.call(null,inst_44060);
var inst_44062 = inst_44061;
var inst_44063 = (0);
var state_44102__$1 = (function (){var statearr_44107 = state_44102;
(statearr_44107[(7)] = inst_44063);

(statearr_44107[(11)] = inst_44062);

return statearr_44107;
})();
var statearr_44108_44128 = state_44102__$1;
(statearr_44108_44128[(2)] = null);

(statearr_44108_44128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44103 === (4))){
var inst_44065 = (state_44102[(12)]);
var inst_44067 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44068 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_44065);
var inst_44069 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_44068];
var inst_44070 = (new cljs.core.PersistentVector(null,2,(5),inst_44067,inst_44069,null));
var inst_44071 = re_frame.core.dispatch.call(null,inst_44070);
var inst_44072 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44073 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_44065);
var inst_44074 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_44073];
var inst_44075 = (new cljs.core.PersistentVector(null,2,(5),inst_44072,inst_44074,null));
var inst_44076 = re_frame.core.dispatch.call(null,inst_44075);
var inst_44077 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_44065);
var inst_44078 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_44065);
var inst_44079 = maze_evolution.evolution.test_individual.call(null,inst_44077,inst_44078);
var inst_44080 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_44102__$1 = (function (){var statearr_44109 = state_44102;
(statearr_44109[(13)] = inst_44071);

(statearr_44109[(8)] = inst_44079);

(statearr_44109[(14)] = inst_44076);

return statearr_44109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44102__$1,(7),inst_44080);
} else {
if((state_val_44103 === (6))){
var inst_44063 = (state_44102[(7)]);
var inst_44098 = (state_44102[(2)]);
var state_44102__$1 = (function (){var statearr_44110 = state_44102;
(statearr_44110[(15)] = inst_44098);

return statearr_44110;
})();
var statearr_44111_44129 = state_44102__$1;
(statearr_44111_44129[(2)] = inst_44063);

(statearr_44111_44129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44103 === (3))){
var inst_44100 = (state_44102[(2)]);
var state_44102__$1 = state_44102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44102__$1,inst_44100);
} else {
if((state_val_44103 === (2))){
var inst_44065 = (state_44102[(12)]);
var inst_44062 = (state_44102[(11)]);
var inst_44065__$1 = cljs.core.first.call(null,inst_44062);
var state_44102__$1 = (function (){var statearr_44113 = state_44102;
(statearr_44113[(12)] = inst_44065__$1);

return statearr_44113;
})();
if(cljs.core.truth_(inst_44065__$1)){
var statearr_44114_44130 = state_44102__$1;
(statearr_44114_44130[(1)] = (4));

} else {
var statearr_44115_44131 = state_44102__$1;
(statearr_44115_44131[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44103 === (9))){
var inst_44063 = (state_44102[(7)]);
var inst_44062 = (state_44102[(11)]);
var inst_44092 = cljs.core.rest.call(null,inst_44062);
var tmp44112 = inst_44063;
var inst_44062__$1 = inst_44092;
var inst_44063__$1 = tmp44112;
var state_44102__$1 = (function (){var statearr_44116 = state_44102;
(statearr_44116[(7)] = inst_44063__$1);

(statearr_44116[(11)] = inst_44062__$1);

return statearr_44116;
})();
var statearr_44117_44132 = state_44102__$1;
(statearr_44117_44132[(2)] = null);

(statearr_44117_44132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44103 === (5))){
var state_44102__$1 = state_44102;
var statearr_44118_44133 = state_44102__$1;
(statearr_44118_44133[(2)] = null);

(statearr_44118_44133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44103 === (10))){
var inst_44095 = (state_44102[(2)]);
var state_44102__$1 = state_44102;
var statearr_44119_44134 = state_44102__$1;
(statearr_44119_44134[(2)] = inst_44095);

(statearr_44119_44134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44103 === (8))){
var inst_44079 = (state_44102[(8)]);
var inst_44062 = (state_44102[(11)]);
var inst_44089 = cljs.core.rest.call(null,inst_44062);
var inst_44062__$1 = inst_44089;
var inst_44063 = inst_44079;
var state_44102__$1 = (function (){var statearr_44120 = state_44102;
(statearr_44120[(7)] = inst_44063);

(statearr_44120[(11)] = inst_44062__$1);

return statearr_44120;
})();
var statearr_44121_44135 = state_44102__$1;
(statearr_44121_44135[(2)] = null);

(statearr_44121_44135[(1)] = (2));


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
}
}
}
});})(c__39058__auto__))
;
return ((function (switch__39037__auto__,c__39058__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__39038__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__39038__auto____0 = (function (){
var statearr_44122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44122[(0)] = maze_evolution$evolution$test_population_$_state_machine__39038__auto__);

(statearr_44122[(1)] = (1));

return statearr_44122;
});
var maze_evolution$evolution$test_population_$_state_machine__39038__auto____1 = (function (state_44102){
while(true){
var ret_value__39039__auto__ = (function (){try{while(true){
var result__39040__auto__ = switch__39037__auto__.call(null,state_44102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39040__auto__;
}
break;
}
}catch (e44123){if((e44123 instanceof Object)){
var ex__39041__auto__ = e44123;
var statearr_44124_44136 = state_44102;
(statearr_44124_44136[(5)] = ex__39041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44137 = state_44102;
state_44102 = G__44137;
continue;
} else {
return ret_value__39039__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__39038__auto__ = function(state_44102){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__39038__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__39038__auto____1.call(this,state_44102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__39038__auto____0;
maze_evolution$evolution$test_population_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__39038__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__39038__auto__;
})()
;})(switch__39037__auto__,c__39058__auto__))
})();
var state__39060__auto__ = (function (){var statearr_44125 = f__39059__auto__.call(null);
(statearr_44125[(6)] = c__39058__auto__);

return statearr_44125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39060__auto__);
});})(c__39058__auto__))
);

return c__39058__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(){
var population = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null));
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (population){
return (function (p1__44138_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__44138_SHARP_);
});})(population))
,cljs.core.deref.call(null,population))));
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__44139_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__44139_SHARP_);
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
maze_evolution.evolution.pair_and_reproduce = (function maze_evolution$evolution$pair_and_reproduce(){
var parents = maze_evolution.evolution.sort_and_prune_population.call(null);
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

var new_population_44140 = maze_evolution.evolution.pair_and_reproduce.call(null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_44140], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_44140))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_44140))], null));

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

//# sourceMappingURL=evolution.js.map?rel=1518465261226
