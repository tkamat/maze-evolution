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
var iter__38290__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__45418(s__45419){
return (new cljs.core.LazySeq(null,(function (){
var s__45419__$1 = s__45419;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45419__$1);
if(temp__4657__auto__){
var s__45419__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45419__$2)){
var c__38288__auto__ = cljs.core.chunk_first.call(null,s__45419__$2);
var size__38289__auto__ = cljs.core.count.call(null,c__38288__auto__);
var b__45421 = cljs.core.chunk_buffer.call(null,size__38289__auto__);
if((function (){var i__45420 = (0);
while(true){
if((i__45420 < size__38289__auto__)){
var _ = cljs.core._nth.call(null,c__38288__auto__,i__45420);
cljs.core.chunk_append.call(null,b__45421,maze_evolution.evolution.random_move.call(null));

var G__45422 = (i__45420 + (1));
i__45420 = G__45422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45421),maze_evolution$evolution$create_initial_individual_$_iter__45418.call(null,cljs.core.chunk_rest.call(null,s__45419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45421),null);
}
} else {
var _ = cljs.core.first.call(null,s__45419__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__45418.call(null,cljs.core.rest.call(null,s__45419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__38290__auto__.call(null,cljs.core.range.call(null,(0),(64)));
});
/**
 * Creates a sequence of randomly generated individuals representing the original population
 */
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__38290__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__45423(s__45424){
return (new cljs.core.LazySeq(null,(function (){
var s__45424__$1 = s__45424;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45424__$1);
if(temp__4657__auto__){
var s__45424__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45424__$2)){
var c__38288__auto__ = cljs.core.chunk_first.call(null,s__45424__$2);
var size__38289__auto__ = cljs.core.count.call(null,c__38288__auto__);
var b__45426 = cljs.core.chunk_buffer.call(null,size__38289__auto__);
if((function (){var i__45425 = (0);
while(true){
if((i__45425 < size__38289__auto__)){
var x = cljs.core._nth.call(null,c__38288__auto__,i__45425);
cljs.core.chunk_append.call(null,b__45426,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__45427 = (i__45425 + (1));
i__45425 = G__45427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45426),maze_evolution$evolution$create_initial_population_$_iter__45423.call(null,cljs.core.chunk_rest.call(null,s__45424__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45426),null);
}
} else {
var x = cljs.core.first.call(null,s__45424__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__45423.call(null,cljs.core.rest.call(null,s__45424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__38290__auto__.call(null,cljs.core.range.call(null,(0),maze_evolution.evolution.population_size));
});
/**
 * Tests an individual through the maze using its move sequence
 */
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

var c__40232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40232__auto__){
return (function (){
var f__40233__auto__ = (function (){var switch__40211__auto__ = ((function (c__40232__auto__){
return (function (state_45459){
var state_val_45460 = (state_45459[(1)]);
if((state_val_45460 === (1))){
var inst_45428 = move_sequence;
var state_45459__$1 = (function (){var statearr_45461 = state_45459;
(statearr_45461[(7)] = inst_45428);

return statearr_45461;
})();
var statearr_45462_45476 = state_45459__$1;
(statearr_45462_45476[(2)] = null);

(statearr_45462_45476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45460 === (2))){
var inst_45430 = (state_45459[(8)]);
var inst_45428 = (state_45459[(7)]);
var inst_45430__$1 = cljs.core.first.call(null,inst_45428);
var state_45459__$1 = (function (){var statearr_45463 = state_45459;
(statearr_45463[(8)] = inst_45430__$1);

return statearr_45463;
})();
if(cljs.core.truth_(inst_45430__$1)){
var statearr_45464_45477 = state_45459__$1;
(statearr_45464_45477[(1)] = (4));

} else {
var statearr_45465_45478 = state_45459__$1;
(statearr_45465_45478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45460 === (3))){
var inst_45457 = (state_45459[(2)]);
var state_45459__$1 = state_45459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45459__$1,inst_45457);
} else {
if((state_val_45460 === (4))){
var inst_45430 = (state_45459[(8)]);
var inst_45432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45433 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_45430];
var inst_45434 = (new cljs.core.PersistentVector(null,2,(5),inst_45432,inst_45433,null));
var inst_45435 = re_frame.core.dispatch.call(null,inst_45434);
var inst_45436 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_45459__$1 = (function (){var statearr_45466 = state_45459;
(statearr_45466[(9)] = inst_45435);

return statearr_45466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45459__$1,(7),inst_45436);
} else {
if((state_val_45460 === (5))){
var state_45459__$1 = state_45459;
var statearr_45467_45479 = state_45459__$1;
(statearr_45467_45479[(2)] = null);

(statearr_45467_45479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45460 === (6))){
var inst_45443 = (state_45459[(2)]);
var inst_45444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45447 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_45448 = (new cljs.core.PersistentVector(null,1,(5),inst_45446,inst_45447,null));
var inst_45449 = re_frame.core.subscribe.call(null,inst_45448);
var inst_45450 = cljs.core.deref.call(null,inst_45449);
var inst_45451 = [id,inst_45450];
var inst_45452 = (new cljs.core.PersistentVector(null,2,(5),inst_45445,inst_45451,null));
var inst_45453 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_45452];
var inst_45454 = (new cljs.core.PersistentVector(null,2,(5),inst_45444,inst_45453,null));
var inst_45455 = re_frame.core.dispatch.call(null,inst_45454);
var state_45459__$1 = (function (){var statearr_45468 = state_45459;
(statearr_45468[(10)] = inst_45443);

return statearr_45468;
})();
var statearr_45469_45480 = state_45459__$1;
(statearr_45469_45480[(2)] = inst_45455);

(statearr_45469_45480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45460 === (7))){
var inst_45428 = (state_45459[(7)]);
var inst_45438 = (state_45459[(2)]);
var inst_45439 = cljs.core.rest.call(null,inst_45428);
var inst_45428__$1 = inst_45439;
var state_45459__$1 = (function (){var statearr_45470 = state_45459;
(statearr_45470[(11)] = inst_45438);

(statearr_45470[(7)] = inst_45428__$1);

return statearr_45470;
})();
var statearr_45471_45481 = state_45459__$1;
(statearr_45471_45481[(2)] = null);

(statearr_45471_45481[(1)] = (2));


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
});})(c__40232__auto__))
;
return ((function (switch__40211__auto__,c__40232__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__40212__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__40212__auto____0 = (function (){
var statearr_45472 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45472[(0)] = maze_evolution$evolution$test_individual_$_state_machine__40212__auto__);

(statearr_45472[(1)] = (1));

return statearr_45472;
});
var maze_evolution$evolution$test_individual_$_state_machine__40212__auto____1 = (function (state_45459){
while(true){
var ret_value__40213__auto__ = (function (){try{while(true){
var result__40214__auto__ = switch__40211__auto__.call(null,state_45459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40214__auto__;
}
break;
}
}catch (e45473){if((e45473 instanceof Object)){
var ex__40215__auto__ = e45473;
var statearr_45474_45482 = state_45459;
(statearr_45474_45482[(5)] = ex__40215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45483 = state_45459;
state_45459 = G__45483;
continue;
} else {
return ret_value__40213__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__40212__auto__ = function(state_45459){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__40212__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__40212__auto____1.call(this,state_45459);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__40212__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__40212__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__40212__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__40212__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__40212__auto__;
})()
;})(switch__40211__auto__,c__40232__auto__))
})();
var state__40234__auto__ = (function (){var statearr_45475 = f__40233__auto__.call(null);
(statearr_45475[(6)] = c__40232__auto__);

return statearr_45475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40234__auto__);
});})(c__40232__auto__))
);

return c__40232__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__40232__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40232__auto__){
return (function (){
var f__40233__auto__ = (function (){var switch__40211__auto__ = ((function (c__40232__auto__){
return (function (state_45521){
var state_val_45522 = (state_45521[(1)]);
if((state_val_45522 === (1))){
var inst_45484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45485 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_45486 = (new cljs.core.PersistentVector(null,1,(5),inst_45484,inst_45485,null));
var inst_45487 = re_frame.core.subscribe.call(null,inst_45486);
var inst_45488 = cljs.core.deref.call(null,inst_45487);
var inst_45489 = inst_45488;
var state_45521__$1 = (function (){var statearr_45523 = state_45521;
(statearr_45523[(7)] = inst_45489);

return statearr_45523;
})();
var statearr_45524_45537 = state_45521__$1;
(statearr_45524_45537[(2)] = null);

(statearr_45524_45537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (2))){
var inst_45489 = (state_45521[(7)]);
var inst_45491 = (state_45521[(8)]);
var inst_45491__$1 = cljs.core.first.call(null,inst_45489);
var state_45521__$1 = (function (){var statearr_45525 = state_45521;
(statearr_45525[(8)] = inst_45491__$1);

return statearr_45525;
})();
if(cljs.core.truth_(inst_45491__$1)){
var statearr_45526_45538 = state_45521__$1;
(statearr_45526_45538[(1)] = (4));

} else {
var statearr_45527_45539 = state_45521__$1;
(statearr_45527_45539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (3))){
var inst_45519 = (state_45521[(2)]);
var state_45521__$1 = state_45521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45521__$1,inst_45519);
} else {
if((state_val_45522 === (4))){
var inst_45491 = (state_45521[(8)]);
var inst_45493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45494 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_45491);
var inst_45495 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_45494];
var inst_45496 = (new cljs.core.PersistentVector(null,2,(5),inst_45493,inst_45495,null));
var inst_45497 = re_frame.core.dispatch.call(null,inst_45496);
var inst_45498 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45499 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_45491);
var inst_45500 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_45499];
var inst_45501 = (new cljs.core.PersistentVector(null,2,(5),inst_45498,inst_45500,null));
var inst_45502 = re_frame.core.dispatch.call(null,inst_45501);
var inst_45503 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_45491);
var inst_45504 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_45491);
var inst_45505 = maze_evolution.evolution.test_individual.call(null,inst_45503,inst_45504);
var inst_45506 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_45521__$1 = (function (){var statearr_45528 = state_45521;
(statearr_45528[(9)] = inst_45505);

(statearr_45528[(10)] = inst_45497);

(statearr_45528[(11)] = inst_45502);

return statearr_45528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45521__$1,(7),inst_45506);
} else {
if((state_val_45522 === (5))){
var state_45521__$1 = state_45521;
var statearr_45529_45540 = state_45521__$1;
(statearr_45529_45540[(2)] = null);

(statearr_45529_45540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (6))){
var inst_45517 = (state_45521[(2)]);
var state_45521__$1 = state_45521;
var statearr_45530_45541 = state_45521__$1;
(statearr_45530_45541[(2)] = inst_45517);

(statearr_45530_45541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (7))){
var inst_45489 = (state_45521[(7)]);
var inst_45508 = (state_45521[(2)]);
var inst_45509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45510 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_45511 = (new cljs.core.PersistentVector(null,1,(5),inst_45509,inst_45510,null));
var inst_45512 = re_frame.core.dispatch.call(null,inst_45511);
var inst_45513 = cljs.core.rest.call(null,inst_45489);
var inst_45489__$1 = inst_45513;
var state_45521__$1 = (function (){var statearr_45531 = state_45521;
(statearr_45531[(12)] = inst_45512);

(statearr_45531[(13)] = inst_45508);

(statearr_45531[(7)] = inst_45489__$1);

return statearr_45531;
})();
var statearr_45532_45542 = state_45521__$1;
(statearr_45532_45542[(2)] = null);

(statearr_45532_45542[(1)] = (2));


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
});})(c__40232__auto__))
;
return ((function (switch__40211__auto__,c__40232__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__40212__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__40212__auto____0 = (function (){
var statearr_45533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45533[(0)] = maze_evolution$evolution$test_population_$_state_machine__40212__auto__);

(statearr_45533[(1)] = (1));

return statearr_45533;
});
var maze_evolution$evolution$test_population_$_state_machine__40212__auto____1 = (function (state_45521){
while(true){
var ret_value__40213__auto__ = (function (){try{while(true){
var result__40214__auto__ = switch__40211__auto__.call(null,state_45521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40214__auto__;
}
break;
}
}catch (e45534){if((e45534 instanceof Object)){
var ex__40215__auto__ = e45534;
var statearr_45535_45543 = state_45521;
(statearr_45535_45543[(5)] = ex__40215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45544 = state_45521;
state_45521 = G__45544;
continue;
} else {
return ret_value__40213__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__40212__auto__ = function(state_45521){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__40212__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__40212__auto____1.call(this,state_45521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__40212__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__40212__auto____0;
maze_evolution$evolution$test_population_$_state_machine__40212__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__40212__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__40212__auto__;
})()
;})(switch__40211__auto__,c__40232__auto__))
})();
var state__40234__auto__ = (function (){var statearr_45536 = f__40233__auto__.call(null);
(statearr_45536[(6)] = c__40232__auto__);

return statearr_45536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40234__auto__);
});})(c__40232__auto__))
);

return c__40232__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(population){
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p1__45545_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__45545_SHARP_);
}),population)));
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__45546_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__45546_SHARP_);
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

var new_population_45547 = maze_evolution.evolution.pair_and_reproduce.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null))));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_45547], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_45547))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_45547))], null));

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
var G__45548 = (i + (1));
var G__45549 = new_population;
var G__45550 = cljs.core.conj.call(null,max_fitness_list,cljs.core.apply.call(null,cljs.core.max,fitness_list));
i = G__45548;
population = G__45549;
max_fitness_list = G__45550;
continue;
}
break;
}
});

//# sourceMappingURL=evolution.js.map?rel=1518563072061
