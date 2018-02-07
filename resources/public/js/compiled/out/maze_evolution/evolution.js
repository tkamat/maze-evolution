// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
maze_evolution.evolution.population_size = (64);
maze_evolution.evolution.move_time = (3);
maze_evolution.evolution.individual_time = ((300) + ((64) * maze_evolution.evolution.move_time));
maze_evolution.evolution.generation_time = (maze_evolution.evolution.individual_time * maze_evolution.evolution.population_size);
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
maze_evolution.evolution.create_initial_individual = (function maze_evolution$evolution$create_initial_individual(){
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__42441(s__42442){
return (new cljs.core.LazySeq(null,(function (){
var s__42442__$1 = s__42442;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42442__$1);
if(temp__4657__auto__){
var s__42442__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42442__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__42442__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__42444 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__42443 = (0);
while(true){
if((i__42443 < size__37115__auto__)){
var _ = cljs.core._nth.call(null,c__37114__auto__,i__42443);
cljs.core.chunk_append.call(null,b__42444,maze_evolution.evolution.random_move.call(null));

var G__42445 = (i__42443 + (1));
i__42443 = G__42445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42444),maze_evolution$evolution$create_initial_individual_$_iter__42441.call(null,cljs.core.chunk_rest.call(null,s__42442__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42444),null);
}
} else {
var _ = cljs.core.first.call(null,s__42442__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__42441.call(null,cljs.core.rest.call(null,s__42442__$2)));
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
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__42446(s__42447){
return (new cljs.core.LazySeq(null,(function (){
var s__42447__$1 = s__42447;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42447__$1);
if(temp__4657__auto__){
var s__42447__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42447__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__42447__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__42449 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__42448 = (0);
while(true){
if((i__42448 < size__37115__auto__)){
var x = cljs.core._nth.call(null,c__37114__auto__,i__42448);
cljs.core.chunk_append.call(null,b__42449,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__42450 = (i__42448 + (1));
i__42448 = G__42450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42449),maze_evolution$evolution$create_initial_population_$_iter__42446.call(null,cljs.core.chunk_rest.call(null,s__42447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42449),null);
}
} else {
var x = cljs.core.first.call(null,s__42447__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__42446.call(null,cljs.core.rest.call(null,s__42447__$2)));
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
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

var c__39058__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39058__auto__){
return (function (){
var f__39059__auto__ = (function (){var switch__39037__auto__ = ((function (c__39058__auto__){
return (function (state_42482){
var state_val_42483 = (state_42482[(1)]);
if((state_val_42483 === (1))){
var inst_42451 = move_sequence;
var state_42482__$1 = (function (){var statearr_42484 = state_42482;
(statearr_42484[(7)] = inst_42451);

return statearr_42484;
})();
var statearr_42485_42499 = state_42482__$1;
(statearr_42485_42499[(2)] = null);

(statearr_42485_42499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (2))){
var inst_42453 = (state_42482[(8)]);
var inst_42451 = (state_42482[(7)]);
var inst_42453__$1 = cljs.core.first.call(null,inst_42451);
var state_42482__$1 = (function (){var statearr_42486 = state_42482;
(statearr_42486[(8)] = inst_42453__$1);

return statearr_42486;
})();
if(cljs.core.truth_(inst_42453__$1)){
var statearr_42487_42500 = state_42482__$1;
(statearr_42487_42500[(1)] = (4));

} else {
var statearr_42488_42501 = state_42482__$1;
(statearr_42488_42501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (3))){
var inst_42480 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42482__$1,inst_42480);
} else {
if((state_val_42483 === (4))){
var inst_42453 = (state_42482[(8)]);
var inst_42455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42456 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_42453];
var inst_42457 = (new cljs.core.PersistentVector(null,2,(5),inst_42455,inst_42456,null));
var inst_42458 = re_frame.core.dispatch.call(null,inst_42457);
var inst_42459 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_42482__$1 = (function (){var statearr_42489 = state_42482;
(statearr_42489[(9)] = inst_42458);

return statearr_42489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42482__$1,(7),inst_42459);
} else {
if((state_val_42483 === (5))){
var state_42482__$1 = state_42482;
var statearr_42490_42502 = state_42482__$1;
(statearr_42490_42502[(2)] = null);

(statearr_42490_42502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (6))){
var inst_42466 = (state_42482[(2)]);
var inst_42467 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42469 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42470 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_42471 = (new cljs.core.PersistentVector(null,1,(5),inst_42469,inst_42470,null));
var inst_42472 = re_frame.core.subscribe.call(null,inst_42471);
var inst_42473 = cljs.core.deref.call(null,inst_42472);
var inst_42474 = [id,inst_42473];
var inst_42475 = (new cljs.core.PersistentVector(null,2,(5),inst_42468,inst_42474,null));
var inst_42476 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_42475];
var inst_42477 = (new cljs.core.PersistentVector(null,2,(5),inst_42467,inst_42476,null));
var inst_42478 = re_frame.core.dispatch.call(null,inst_42477);
var state_42482__$1 = (function (){var statearr_42491 = state_42482;
(statearr_42491[(10)] = inst_42466);

return statearr_42491;
})();
var statearr_42492_42503 = state_42482__$1;
(statearr_42492_42503[(2)] = inst_42478);

(statearr_42492_42503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (7))){
var inst_42451 = (state_42482[(7)]);
var inst_42461 = (state_42482[(2)]);
var inst_42462 = cljs.core.rest.call(null,inst_42451);
var inst_42451__$1 = inst_42462;
var state_42482__$1 = (function (){var statearr_42493 = state_42482;
(statearr_42493[(7)] = inst_42451__$1);

(statearr_42493[(11)] = inst_42461);

return statearr_42493;
})();
var statearr_42494_42504 = state_42482__$1;
(statearr_42494_42504[(2)] = null);

(statearr_42494_42504[(1)] = (2));


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
var statearr_42495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42495[(0)] = maze_evolution$evolution$test_individual_$_state_machine__39038__auto__);

(statearr_42495[(1)] = (1));

return statearr_42495;
});
var maze_evolution$evolution$test_individual_$_state_machine__39038__auto____1 = (function (state_42482){
while(true){
var ret_value__39039__auto__ = (function (){try{while(true){
var result__39040__auto__ = switch__39037__auto__.call(null,state_42482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39040__auto__;
}
break;
}
}catch (e42496){if((e42496 instanceof Object)){
var ex__39041__auto__ = e42496;
var statearr_42497_42505 = state_42482;
(statearr_42497_42505[(5)] = ex__39041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42506 = state_42482;
state_42482 = G__42506;
continue;
} else {
return ret_value__39039__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__39038__auto__ = function(state_42482){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__39038__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__39038__auto____1.call(this,state_42482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__39038__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__39038__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__39038__auto__;
})()
;})(switch__39037__auto__,c__39058__auto__))
})();
var state__39060__auto__ = (function (){var statearr_42498 = f__39059__auto__.call(null);
(statearr_42498[(6)] = c__39058__auto__);

return statearr_42498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39060__auto__);
});})(c__39058__auto__))
);

return c__39058__auto__;
});
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
cljs.core.reset_BANG_.call(null,running,true);

var c__39058__auto___42560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39058__auto___42560){
return (function (){
var f__39059__auto__ = (function (){var switch__39037__auto__ = ((function (c__39058__auto___42560){
return (function (state_42544){
var state_val_42545 = (state_42544[(1)]);
if((state_val_42545 === (1))){
var inst_42507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42508 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_42509 = (new cljs.core.PersistentVector(null,1,(5),inst_42507,inst_42508,null));
var inst_42510 = re_frame.core.subscribe.call(null,inst_42509);
var inst_42511 = cljs.core.deref.call(null,inst_42510);
var inst_42512 = inst_42511;
var state_42544__$1 = (function (){var statearr_42546 = state_42544;
(statearr_42546[(7)] = inst_42512);

return statearr_42546;
})();
var statearr_42547_42561 = state_42544__$1;
(statearr_42547_42561[(2)] = null);

(statearr_42547_42561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (2))){
var inst_42514 = (state_42544[(8)]);
var inst_42512 = (state_42544[(7)]);
var inst_42514__$1 = cljs.core.first.call(null,inst_42512);
var state_42544__$1 = (function (){var statearr_42548 = state_42544;
(statearr_42548[(8)] = inst_42514__$1);

return statearr_42548;
})();
if(cljs.core.truth_(inst_42514__$1)){
var statearr_42549_42562 = state_42544__$1;
(statearr_42549_42562[(1)] = (4));

} else {
var statearr_42550_42563 = state_42544__$1;
(statearr_42550_42563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (3))){
var inst_42542 = (state_42544[(2)]);
var state_42544__$1 = state_42544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42544__$1,inst_42542);
} else {
if((state_val_42545 === (4))){
var inst_42514 = (state_42544[(8)]);
var inst_42516 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42517 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_42514);
var inst_42518 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_42517];
var inst_42519 = (new cljs.core.PersistentVector(null,2,(5),inst_42516,inst_42518,null));
var inst_42520 = re_frame.core.dispatch.call(null,inst_42519);
var inst_42521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42522 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42514);
var inst_42523 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_42522];
var inst_42524 = (new cljs.core.PersistentVector(null,2,(5),inst_42521,inst_42523,null));
var inst_42525 = re_frame.core.dispatch.call(null,inst_42524);
var inst_42526 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_42514);
var inst_42527 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42514);
var inst_42528 = maze_evolution.evolution.test_individual.call(null,inst_42526,inst_42527);
var inst_42529 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_42544__$1 = (function (){var statearr_42551 = state_42544;
(statearr_42551[(9)] = inst_42525);

(statearr_42551[(10)] = inst_42528);

(statearr_42551[(11)] = inst_42520);

return statearr_42551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42544__$1,(7),inst_42529);
} else {
if((state_val_42545 === (5))){
var state_42544__$1 = state_42544;
var statearr_42552_42564 = state_42544__$1;
(statearr_42552_42564[(2)] = null);

(statearr_42552_42564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (6))){
var inst_42540 = (state_42544[(2)]);
var state_42544__$1 = state_42544;
var statearr_42553_42565 = state_42544__$1;
(statearr_42553_42565[(2)] = inst_42540);

(statearr_42553_42565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42545 === (7))){
var inst_42512 = (state_42544[(7)]);
var inst_42531 = (state_42544[(2)]);
var inst_42532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42533 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_42534 = (new cljs.core.PersistentVector(null,1,(5),inst_42532,inst_42533,null));
var inst_42535 = re_frame.core.dispatch.call(null,inst_42534);
var inst_42536 = cljs.core.rest.call(null,inst_42512);
var inst_42512__$1 = inst_42536;
var state_42544__$1 = (function (){var statearr_42554 = state_42544;
(statearr_42554[(12)] = inst_42535);

(statearr_42554[(13)] = inst_42531);

(statearr_42554[(7)] = inst_42512__$1);

return statearr_42554;
})();
var statearr_42555_42566 = state_42544__$1;
(statearr_42555_42566[(2)] = null);

(statearr_42555_42566[(1)] = (2));


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
});})(c__39058__auto___42560))
;
return ((function (switch__39037__auto__,c__39058__auto___42560){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__39038__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__39038__auto____0 = (function (){
var statearr_42556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42556[(0)] = maze_evolution$evolution$test_population_$_state_machine__39038__auto__);

(statearr_42556[(1)] = (1));

return statearr_42556;
});
var maze_evolution$evolution$test_population_$_state_machine__39038__auto____1 = (function (state_42544){
while(true){
var ret_value__39039__auto__ = (function (){try{while(true){
var result__39040__auto__ = switch__39037__auto__.call(null,state_42544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39040__auto__;
}
break;
}
}catch (e42557){if((e42557 instanceof Object)){
var ex__39041__auto__ = e42557;
var statearr_42558_42567 = state_42544;
(statearr_42558_42567[(5)] = ex__39041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42568 = state_42544;
state_42544 = G__42568;
continue;
} else {
return ret_value__39039__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__39038__auto__ = function(state_42544){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__39038__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__39038__auto____1.call(this,state_42544);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__39038__auto____0;
maze_evolution$evolution$test_population_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__39038__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__39038__auto__;
})()
;})(switch__39037__auto__,c__39058__auto___42560))
})();
var state__39060__auto__ = (function (){var statearr_42559 = f__39059__auto__.call(null);
(statearr_42559[(6)] = c__39058__auto___42560);

return statearr_42559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39060__auto__);
});})(c__39058__auto___42560))
);


return cljs.core.reset_BANG_.call(null,running,false);
});
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(){
var population = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null));
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (population){
return (function (p1__42569_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__42569_SHARP_);
});})(population))
,cljs.core.deref.call(null,population))));
});
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__42570_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__42570_SHARP_);
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
maze_evolution.evolution.pair_and_reproduce = (function maze_evolution$evolution$pair_and_reproduce(){
var parents = maze_evolution.evolution.sort_and_prune_population.call(null);
return cljs.core.reduce.call(null,((function (parents){
return (function (new_generation,breeding_pair){
return cljs.core.concat.call(null,new_generation,breeding_pair,cljs.core.map.call(null,maze_evolution.evolution.have_child,cljs.core.repeat.call(null,(2),breeding_pair)));
});})(parents))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),cljs.core.shuffle.call(null,parents)));
});
maze_evolution.evolution.create_new_generation = (function maze_evolution$evolution$create_new_generation(running){
cljs.core.reset_BANG_.call(null,running,true);

var new_population_42571 = maze_evolution.evolution.pair_and_reproduce.call(null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_42571], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_42571))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_42571))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

return cljs.core.reset_BANG_.call(null,running,false);
});
maze_evolution.evolution.continuously_evolve = (function maze_evolution$evolution$continuously_evolve(running){
maze_evolution.evolution.test_population.call(null,running);

return setTimeout((function (){
maze_evolution.evolution.create_new_generation.call(null,running);

return setTimeout((function (){
return maze_evolution.evolution.continuously_evolve.call(null,running);
}),(500));
}),(maze_evolution.evolution.generation_time + (5000)));
});

//# sourceMappingURL=evolution.js.map?rel=1517845601684
