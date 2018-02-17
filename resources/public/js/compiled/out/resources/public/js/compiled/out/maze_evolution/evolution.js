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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__43240(s__43241){
return (new cljs.core.LazySeq(null,(function (){
var s__43241__$1 = s__43241;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43241__$1);
if(temp__4657__auto__){
var s__43241__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43241__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__43241__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__43243 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__43242 = (0);
while(true){
if((i__43242 < size__37115__auto__)){
var _ = cljs.core._nth.call(null,c__37114__auto__,i__43242);
cljs.core.chunk_append.call(null,b__43243,maze_evolution.evolution.random_move.call(null));

var G__43244 = (i__43242 + (1));
i__43242 = G__43244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43243),maze_evolution$evolution$create_initial_individual_$_iter__43240.call(null,cljs.core.chunk_rest.call(null,s__43241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43243),null);
}
} else {
var _ = cljs.core.first.call(null,s__43241__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__43240.call(null,cljs.core.rest.call(null,s__43241__$2)));
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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__43245(s__43246){
return (new cljs.core.LazySeq(null,(function (){
var s__43246__$1 = s__43246;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43246__$1);
if(temp__4657__auto__){
var s__43246__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43246__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__43246__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__43248 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__43247 = (0);
while(true){
if((i__43247 < size__37115__auto__)){
var x = cljs.core._nth.call(null,c__37114__auto__,i__43247);
cljs.core.chunk_append.call(null,b__43248,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__43249 = (i__43247 + (1));
i__43247 = G__43249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43248),maze_evolution$evolution$create_initial_population_$_iter__43245.call(null,cljs.core.chunk_rest.call(null,s__43246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43248),null);
}
} else {
var x = cljs.core.first.call(null,s__43246__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__43245.call(null,cljs.core.rest.call(null,s__43246__$2)));
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

var c__39684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto__){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto__){
return (function (state_43281){
var state_val_43282 = (state_43281[(1)]);
if((state_val_43282 === (1))){
var inst_43250 = move_sequence;
var state_43281__$1 = (function (){var statearr_43283 = state_43281;
(statearr_43283[(7)] = inst_43250);

return statearr_43283;
})();
var statearr_43284_43298 = state_43281__$1;
(statearr_43284_43298[(2)] = null);

(statearr_43284_43298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (2))){
var inst_43250 = (state_43281[(7)]);
var inst_43252 = (state_43281[(8)]);
var inst_43252__$1 = cljs.core.first.call(null,inst_43250);
var state_43281__$1 = (function (){var statearr_43285 = state_43281;
(statearr_43285[(8)] = inst_43252__$1);

return statearr_43285;
})();
if(cljs.core.truth_(inst_43252__$1)){
var statearr_43286_43299 = state_43281__$1;
(statearr_43286_43299[(1)] = (4));

} else {
var statearr_43287_43300 = state_43281__$1;
(statearr_43287_43300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (3))){
var inst_43279 = (state_43281[(2)]);
var state_43281__$1 = state_43281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43281__$1,inst_43279);
} else {
if((state_val_43282 === (4))){
var inst_43252 = (state_43281[(8)]);
var inst_43254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43255 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_43252];
var inst_43256 = (new cljs.core.PersistentVector(null,2,(5),inst_43254,inst_43255,null));
var inst_43257 = re_frame.core.dispatch.call(null,inst_43256);
var inst_43258 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_43281__$1 = (function (){var statearr_43288 = state_43281;
(statearr_43288[(9)] = inst_43257);

return statearr_43288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43281__$1,(7),inst_43258);
} else {
if((state_val_43282 === (5))){
var state_43281__$1 = state_43281;
var statearr_43289_43301 = state_43281__$1;
(statearr_43289_43301[(2)] = null);

(statearr_43289_43301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (6))){
var inst_43265 = (state_43281[(2)]);
var inst_43266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43267 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43269 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_43270 = (new cljs.core.PersistentVector(null,1,(5),inst_43268,inst_43269,null));
var inst_43271 = re_frame.core.subscribe.call(null,inst_43270);
var inst_43272 = cljs.core.deref.call(null,inst_43271);
var inst_43273 = [id,inst_43272];
var inst_43274 = (new cljs.core.PersistentVector(null,2,(5),inst_43267,inst_43273,null));
var inst_43275 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_43274];
var inst_43276 = (new cljs.core.PersistentVector(null,2,(5),inst_43266,inst_43275,null));
var inst_43277 = re_frame.core.dispatch.call(null,inst_43276);
var state_43281__$1 = (function (){var statearr_43290 = state_43281;
(statearr_43290[(10)] = inst_43265);

return statearr_43290;
})();
var statearr_43291_43302 = state_43281__$1;
(statearr_43291_43302[(2)] = inst_43277);

(statearr_43291_43302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (7))){
var inst_43250 = (state_43281[(7)]);
var inst_43260 = (state_43281[(2)]);
var inst_43261 = cljs.core.rest.call(null,inst_43250);
var inst_43250__$1 = inst_43261;
var state_43281__$1 = (function (){var statearr_43292 = state_43281;
(statearr_43292[(7)] = inst_43250__$1);

(statearr_43292[(11)] = inst_43260);

return statearr_43292;
})();
var statearr_43293_43303 = state_43281__$1;
(statearr_43293_43303[(2)] = null);

(statearr_43293_43303[(1)] = (2));


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
});})(c__39684__auto__))
;
return ((function (switch__39663__auto__,c__39684__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__39664__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__39664__auto____0 = (function (){
var statearr_43294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43294[(0)] = maze_evolution$evolution$test_individual_$_state_machine__39664__auto__);

(statearr_43294[(1)] = (1));

return statearr_43294;
});
var maze_evolution$evolution$test_individual_$_state_machine__39664__auto____1 = (function (state_43281){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_43281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e43295){if((e43295 instanceof Object)){
var ex__39667__auto__ = e43295;
var statearr_43296_43304 = state_43281;
(statearr_43296_43304[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43305 = state_43281;
state_43281 = G__43305;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__39664__auto__ = function(state_43281){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__39664__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__39664__auto____1.call(this,state_43281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__39664__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__39664__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto__))
})();
var state__39686__auto__ = (function (){var statearr_43297 = f__39685__auto__.call(null);
(statearr_43297[(6)] = c__39684__auto__);

return statearr_43297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto__))
);

return c__39684__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__39684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto__){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto__){
return (function (state_43343){
var state_val_43344 = (state_43343[(1)]);
if((state_val_43344 === (1))){
var inst_43306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43307 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_43308 = (new cljs.core.PersistentVector(null,1,(5),inst_43306,inst_43307,null));
var inst_43309 = re_frame.core.subscribe.call(null,inst_43308);
var inst_43310 = cljs.core.deref.call(null,inst_43309);
var inst_43311 = inst_43310;
var state_43343__$1 = (function (){var statearr_43345 = state_43343;
(statearr_43345[(7)] = inst_43311);

return statearr_43345;
})();
var statearr_43346_43359 = state_43343__$1;
(statearr_43346_43359[(2)] = null);

(statearr_43346_43359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43344 === (2))){
var inst_43313 = (state_43343[(8)]);
var inst_43311 = (state_43343[(7)]);
var inst_43313__$1 = cljs.core.first.call(null,inst_43311);
var state_43343__$1 = (function (){var statearr_43347 = state_43343;
(statearr_43347[(8)] = inst_43313__$1);

return statearr_43347;
})();
if(cljs.core.truth_(inst_43313__$1)){
var statearr_43348_43360 = state_43343__$1;
(statearr_43348_43360[(1)] = (4));

} else {
var statearr_43349_43361 = state_43343__$1;
(statearr_43349_43361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43344 === (3))){
var inst_43341 = (state_43343[(2)]);
var state_43343__$1 = state_43343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43343__$1,inst_43341);
} else {
if((state_val_43344 === (4))){
var inst_43313 = (state_43343[(8)]);
var inst_43315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43316 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_43313);
var inst_43317 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_43316];
var inst_43318 = (new cljs.core.PersistentVector(null,2,(5),inst_43315,inst_43317,null));
var inst_43319 = re_frame.core.dispatch.call(null,inst_43318);
var inst_43320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43321 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_43313);
var inst_43322 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_43321];
var inst_43323 = (new cljs.core.PersistentVector(null,2,(5),inst_43320,inst_43322,null));
var inst_43324 = re_frame.core.dispatch.call(null,inst_43323);
var inst_43325 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_43313);
var inst_43326 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_43313);
var inst_43327 = maze_evolution.evolution.test_individual.call(null,inst_43325,inst_43326);
var inst_43328 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_43343__$1 = (function (){var statearr_43350 = state_43343;
(statearr_43350[(9)] = inst_43327);

(statearr_43350[(10)] = inst_43319);

(statearr_43350[(11)] = inst_43324);

return statearr_43350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43343__$1,(7),inst_43328);
} else {
if((state_val_43344 === (5))){
var state_43343__$1 = state_43343;
var statearr_43351_43362 = state_43343__$1;
(statearr_43351_43362[(2)] = null);

(statearr_43351_43362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43344 === (6))){
var inst_43339 = (state_43343[(2)]);
var state_43343__$1 = state_43343;
var statearr_43352_43363 = state_43343__$1;
(statearr_43352_43363[(2)] = inst_43339);

(statearr_43352_43363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43344 === (7))){
var inst_43311 = (state_43343[(7)]);
var inst_43330 = (state_43343[(2)]);
var inst_43331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43332 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_43333 = (new cljs.core.PersistentVector(null,1,(5),inst_43331,inst_43332,null));
var inst_43334 = re_frame.core.dispatch.call(null,inst_43333);
var inst_43335 = cljs.core.rest.call(null,inst_43311);
var inst_43311__$1 = inst_43335;
var state_43343__$1 = (function (){var statearr_43353 = state_43343;
(statearr_43353[(12)] = inst_43330);

(statearr_43353[(13)] = inst_43334);

(statearr_43353[(7)] = inst_43311__$1);

return statearr_43353;
})();
var statearr_43354_43364 = state_43343__$1;
(statearr_43354_43364[(2)] = null);

(statearr_43354_43364[(1)] = (2));


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
});})(c__39684__auto__))
;
return ((function (switch__39663__auto__,c__39684__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__39664__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__39664__auto____0 = (function (){
var statearr_43355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43355[(0)] = maze_evolution$evolution$test_population_$_state_machine__39664__auto__);

(statearr_43355[(1)] = (1));

return statearr_43355;
});
var maze_evolution$evolution$test_population_$_state_machine__39664__auto____1 = (function (state_43343){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_43343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e43356){if((e43356 instanceof Object)){
var ex__39667__auto__ = e43356;
var statearr_43357_43365 = state_43343;
(statearr_43357_43365[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43366 = state_43343;
state_43343 = G__43366;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__39664__auto__ = function(state_43343){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__39664__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__39664__auto____1.call(this,state_43343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__39664__auto____0;
maze_evolution$evolution$test_population_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__39664__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto__))
})();
var state__39686__auto__ = (function (){var statearr_43358 = f__39685__auto__.call(null);
(statearr_43358[(6)] = c__39684__auto__);

return statearr_43358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto__))
);

return c__39684__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(population){
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p1__43367_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__43367_SHARP_);
}),population)));
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__43368_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__43368_SHARP_);
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

var new_population_43369 = maze_evolution.evolution.pair_and_reproduce.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null))));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_43369], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_43369))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_43369))], null));

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
return (function (){
return cljs.core.nth.call(null,fitness_list,i__$1);
});})(i,population,max_fitness_list,fitness_list))
);
});})(i,population,max_fitness_list,fitness_list))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,fitness_list))));
if((i >= n)){
return max_fitness_list;
} else {
var G__43370 = (i + (1));
var G__43371 = new_population;
var G__43372 = cljs.core.conj.call(null,max_fitness_list,cljs.core.apply.call(null,cljs.core.max,fitness_list));
i = G__43370;
population = G__43371;
max_fitness_list = G__43372;
continue;
}
break;
}
});

//# sourceMappingURL=evolution.js.map?rel=1518730250021
