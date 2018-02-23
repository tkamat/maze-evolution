// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
goog.require('clojure.core.reducers');
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
var iter__39670__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__46384(s__46385){
return (new cljs.core.LazySeq(null,(function (){
var s__46385__$1 = s__46385;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__46385__$1);
if(temp__5457__auto__){
var s__46385__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46385__$2)){
var c__39668__auto__ = cljs.core.chunk_first.call(null,s__46385__$2);
var size__39669__auto__ = cljs.core.count.call(null,c__39668__auto__);
var b__46387 = cljs.core.chunk_buffer.call(null,size__39669__auto__);
if((function (){var i__46386 = (0);
while(true){
if((i__46386 < size__39669__auto__)){
var _ = cljs.core._nth.call(null,c__39668__auto__,i__46386);
cljs.core.chunk_append.call(null,b__46387,maze_evolution.evolution.random_move.call(null));

var G__46388 = (i__46386 + (1));
i__46386 = G__46388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46387),maze_evolution$evolution$create_initial_individual_$_iter__46384.call(null,cljs.core.chunk_rest.call(null,s__46385__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46387),null);
}
} else {
var _ = cljs.core.first.call(null,s__46385__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__46384.call(null,cljs.core.rest.call(null,s__46385__$2)));
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
var iter__39670__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__46389(s__46390){
return (new cljs.core.LazySeq(null,(function (){
var s__46390__$1 = s__46390;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__46390__$1);
if(temp__5457__auto__){
var s__46390__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46390__$2)){
var c__39668__auto__ = cljs.core.chunk_first.call(null,s__46390__$2);
var size__39669__auto__ = cljs.core.count.call(null,c__39668__auto__);
var b__46392 = cljs.core.chunk_buffer.call(null,size__39669__auto__);
if((function (){var i__46391 = (0);
while(true){
if((i__46391 < size__39669__auto__)){
var x = cljs.core._nth.call(null,c__39668__auto__,i__46391);
cljs.core.chunk_append.call(null,b__46392,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__46393 = (i__46391 + (1));
i__46391 = G__46393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46392),maze_evolution$evolution$create_initial_population_$_iter__46389.call(null,cljs.core.chunk_rest.call(null,s__46390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46392),null);
}
} else {
var x = cljs.core.first.call(null,s__46390__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__46389.call(null,cljs.core.rest.call(null,s__46390__$2)));
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

var c__42032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42032__auto__){
return (function (){
var f__42033__auto__ = (function (){var switch__42009__auto__ = ((function (c__42032__auto__){
return (function (state_46425){
var state_val_46426 = (state_46425[(1)]);
if((state_val_46426 === (1))){
var inst_46394 = move_sequence;
var state_46425__$1 = (function (){var statearr_46427 = state_46425;
(statearr_46427[(7)] = inst_46394);

return statearr_46427;
})();
var statearr_46428_46442 = state_46425__$1;
(statearr_46428_46442[(2)] = null);

(statearr_46428_46442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (2))){
var inst_46396 = (state_46425[(8)]);
var inst_46394 = (state_46425[(7)]);
var inst_46396__$1 = cljs.core.first.call(null,inst_46394);
var state_46425__$1 = (function (){var statearr_46429 = state_46425;
(statearr_46429[(8)] = inst_46396__$1);

return statearr_46429;
})();
if(cljs.core.truth_(inst_46396__$1)){
var statearr_46430_46443 = state_46425__$1;
(statearr_46430_46443[(1)] = (4));

} else {
var statearr_46431_46444 = state_46425__$1;
(statearr_46431_46444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (3))){
var inst_46423 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46425__$1,inst_46423);
} else {
if((state_val_46426 === (4))){
var inst_46396 = (state_46425[(8)]);
var inst_46398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46399 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_46396];
var inst_46400 = (new cljs.core.PersistentVector(null,2,(5),inst_46398,inst_46399,null));
var inst_46401 = re_frame.core.dispatch.call(null,inst_46400);
var inst_46402 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_46425__$1 = (function (){var statearr_46432 = state_46425;
(statearr_46432[(9)] = inst_46401);

return statearr_46432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46425__$1,(7),inst_46402);
} else {
if((state_val_46426 === (5))){
var state_46425__$1 = state_46425;
var statearr_46433_46445 = state_46425__$1;
(statearr_46433_46445[(2)] = null);

(statearr_46433_46445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (6))){
var inst_46409 = (state_46425[(2)]);
var inst_46410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46413 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_46414 = (new cljs.core.PersistentVector(null,1,(5),inst_46412,inst_46413,null));
var inst_46415 = re_frame.core.subscribe.call(null,inst_46414);
var inst_46416 = cljs.core.deref.call(null,inst_46415);
var inst_46417 = [id,inst_46416];
var inst_46418 = (new cljs.core.PersistentVector(null,2,(5),inst_46411,inst_46417,null));
var inst_46419 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_46418];
var inst_46420 = (new cljs.core.PersistentVector(null,2,(5),inst_46410,inst_46419,null));
var inst_46421 = re_frame.core.dispatch.call(null,inst_46420);
var state_46425__$1 = (function (){var statearr_46434 = state_46425;
(statearr_46434[(10)] = inst_46409);

return statearr_46434;
})();
var statearr_46435_46446 = state_46425__$1;
(statearr_46435_46446[(2)] = inst_46421);

(statearr_46435_46446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (7))){
var inst_46394 = (state_46425[(7)]);
var inst_46404 = (state_46425[(2)]);
var inst_46405 = cljs.core.rest.call(null,inst_46394);
var inst_46394__$1 = inst_46405;
var state_46425__$1 = (function (){var statearr_46436 = state_46425;
(statearr_46436[(7)] = inst_46394__$1);

(statearr_46436[(11)] = inst_46404);

return statearr_46436;
})();
var statearr_46437_46447 = state_46425__$1;
(statearr_46437_46447[(2)] = null);

(statearr_46437_46447[(1)] = (2));


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
});})(c__42032__auto__))
;
return ((function (switch__42009__auto__,c__42032__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__42010__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__42010__auto____0 = (function (){
var statearr_46438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46438[(0)] = maze_evolution$evolution$test_individual_$_state_machine__42010__auto__);

(statearr_46438[(1)] = (1));

return statearr_46438;
});
var maze_evolution$evolution$test_individual_$_state_machine__42010__auto____1 = (function (state_46425){
while(true){
var ret_value__42011__auto__ = (function (){try{while(true){
var result__42012__auto__ = switch__42009__auto__.call(null,state_46425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42012__auto__;
}
break;
}
}catch (e46439){if((e46439 instanceof Object)){
var ex__42013__auto__ = e46439;
var statearr_46440_46448 = state_46425;
(statearr_46440_46448[(5)] = ex__42013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46449 = state_46425;
state_46425 = G__46449;
continue;
} else {
return ret_value__42011__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__42010__auto__ = function(state_46425){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__42010__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__42010__auto____1.call(this,state_46425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__42010__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__42010__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__42010__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__42010__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__42010__auto__;
})()
;})(switch__42009__auto__,c__42032__auto__))
})();
var state__42034__auto__ = (function (){var statearr_46441 = f__42033__auto__.call(null);
(statearr_46441[(6)] = c__42032__auto__);

return statearr_46441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42034__auto__);
});})(c__42032__auto__))
);

return c__42032__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__42032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42032__auto__){
return (function (){
var f__42033__auto__ = (function (){var switch__42009__auto__ = ((function (c__42032__auto__){
return (function (state_46487){
var state_val_46488 = (state_46487[(1)]);
if((state_val_46488 === (1))){
var inst_46450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46451 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_46452 = (new cljs.core.PersistentVector(null,1,(5),inst_46450,inst_46451,null));
var inst_46453 = re_frame.core.subscribe.call(null,inst_46452);
var inst_46454 = cljs.core.deref.call(null,inst_46453);
var inst_46455 = inst_46454;
var state_46487__$1 = (function (){var statearr_46489 = state_46487;
(statearr_46489[(7)] = inst_46455);

return statearr_46489;
})();
var statearr_46490_46503 = state_46487__$1;
(statearr_46490_46503[(2)] = null);

(statearr_46490_46503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46488 === (2))){
var inst_46455 = (state_46487[(7)]);
var inst_46457 = (state_46487[(8)]);
var inst_46457__$1 = cljs.core.first.call(null,inst_46455);
var state_46487__$1 = (function (){var statearr_46491 = state_46487;
(statearr_46491[(8)] = inst_46457__$1);

return statearr_46491;
})();
if(cljs.core.truth_(inst_46457__$1)){
var statearr_46492_46504 = state_46487__$1;
(statearr_46492_46504[(1)] = (4));

} else {
var statearr_46493_46505 = state_46487__$1;
(statearr_46493_46505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46488 === (3))){
var inst_46485 = (state_46487[(2)]);
var state_46487__$1 = state_46487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46487__$1,inst_46485);
} else {
if((state_val_46488 === (4))){
var inst_46457 = (state_46487[(8)]);
var inst_46459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46460 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_46457);
var inst_46461 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_46460];
var inst_46462 = (new cljs.core.PersistentVector(null,2,(5),inst_46459,inst_46461,null));
var inst_46463 = re_frame.core.dispatch.call(null,inst_46462);
var inst_46464 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46465 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_46457);
var inst_46466 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_46465];
var inst_46467 = (new cljs.core.PersistentVector(null,2,(5),inst_46464,inst_46466,null));
var inst_46468 = re_frame.core.dispatch.call(null,inst_46467);
var inst_46469 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_46457);
var inst_46470 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_46457);
var inst_46471 = maze_evolution.evolution.test_individual.call(null,inst_46469,inst_46470);
var inst_46472 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_46487__$1 = (function (){var statearr_46494 = state_46487;
(statearr_46494[(9)] = inst_46471);

(statearr_46494[(10)] = inst_46463);

(statearr_46494[(11)] = inst_46468);

return statearr_46494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46487__$1,(7),inst_46472);
} else {
if((state_val_46488 === (5))){
var state_46487__$1 = state_46487;
var statearr_46495_46506 = state_46487__$1;
(statearr_46495_46506[(2)] = null);

(statearr_46495_46506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46488 === (6))){
var inst_46483 = (state_46487[(2)]);
var state_46487__$1 = state_46487;
var statearr_46496_46507 = state_46487__$1;
(statearr_46496_46507[(2)] = inst_46483);

(statearr_46496_46507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46488 === (7))){
var inst_46455 = (state_46487[(7)]);
var inst_46474 = (state_46487[(2)]);
var inst_46475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46476 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_46477 = (new cljs.core.PersistentVector(null,1,(5),inst_46475,inst_46476,null));
var inst_46478 = re_frame.core.dispatch.call(null,inst_46477);
var inst_46479 = cljs.core.rest.call(null,inst_46455);
var inst_46455__$1 = inst_46479;
var state_46487__$1 = (function (){var statearr_46497 = state_46487;
(statearr_46497[(7)] = inst_46455__$1);

(statearr_46497[(12)] = inst_46478);

(statearr_46497[(13)] = inst_46474);

return statearr_46497;
})();
var statearr_46498_46508 = state_46487__$1;
(statearr_46498_46508[(2)] = null);

(statearr_46498_46508[(1)] = (2));


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
});})(c__42032__auto__))
;
return ((function (switch__42009__auto__,c__42032__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__42010__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__42010__auto____0 = (function (){
var statearr_46499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46499[(0)] = maze_evolution$evolution$test_population_$_state_machine__42010__auto__);

(statearr_46499[(1)] = (1));

return statearr_46499;
});
var maze_evolution$evolution$test_population_$_state_machine__42010__auto____1 = (function (state_46487){
while(true){
var ret_value__42011__auto__ = (function (){try{while(true){
var result__42012__auto__ = switch__42009__auto__.call(null,state_46487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42012__auto__;
}
break;
}
}catch (e46500){if((e46500 instanceof Object)){
var ex__42013__auto__ = e46500;
var statearr_46501_46509 = state_46487;
(statearr_46501_46509[(5)] = ex__42013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46510 = state_46487;
state_46487 = G__46510;
continue;
} else {
return ret_value__42011__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__42010__auto__ = function(state_46487){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__42010__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__42010__auto____1.call(this,state_46487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__42010__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__42010__auto____0;
maze_evolution$evolution$test_population_$_state_machine__42010__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__42010__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__42010__auto__;
})()
;})(switch__42009__auto__,c__42032__auto__))
})();
var state__42034__auto__ = (function (){var statearr_46502 = f__42033__auto__.call(null);
(statearr_46502[(6)] = c__42032__auto__);

return statearr_46502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42034__auto__);
});})(c__42032__auto__))
);

return c__42032__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(population){
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p1__46511_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__46511_SHARP_);
}),population)));
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__46512_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__46512_SHARP_);
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

var new_population_46513 = maze_evolution.evolution.pair_and_reproduce.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null))));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_46513], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_46513))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_46513))], null));

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
,cljs.core.PersistentVector.EMPTY,clojure.core.reducers.fold.call(null,(100),cljs.core.concat,((function (i,population,max_fitness_list){
return (function() {
var G__46514 = null;
var G__46514__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__46514__2 = (function (position_list,individual){
return cljs.core.conj.call(null,position_list,cljs.core.reduce.call(null,((function (i,population,max_fitness_list){
return (function (position,direction){
return maze_evolution.evolution.move_if_eligible.call(null,direction,maze,position);
});})(i,population,max_fitness_list))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),individual));
});
G__46514 = function(position_list,individual){
switch(arguments.length){
case 0:
return G__46514__0.call(this);
case 2:
return G__46514__2.call(this,position_list,individual);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46514.cljs$core$IFn$_invoke$arity$0 = G__46514__0;
G__46514.cljs$core$IFn$_invoke$arity$2 = G__46514__2;
return G__46514;
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
var G__46515 = (i + (1));
var G__46516 = new_population;
var G__46517 = cljs.core.conj.call(null,max_fitness_list,cljs.core.apply.call(null,cljs.core.max,fitness_list));
i = G__46515;
population = G__46516;
max_fitness_list = G__46517;
continue;
}
break;
}
});

//# sourceMappingURL=evolution.js.map?rel=1519088359756
