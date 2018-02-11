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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__41252(s__41253){
return (new cljs.core.LazySeq(null,(function (){
var s__41253__$1 = s__41253;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41253__$1);
if(temp__4657__auto__){
var s__41253__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41253__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__41253__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__41255 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__41254 = (0);
while(true){
if((i__41254 < size__37115__auto__)){
var _ = cljs.core._nth.call(null,c__37114__auto__,i__41254);
cljs.core.chunk_append.call(null,b__41255,maze_evolution.evolution.random_move.call(null));

var G__41256 = (i__41254 + (1));
i__41254 = G__41256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41255),maze_evolution$evolution$create_initial_individual_$_iter__41252.call(null,cljs.core.chunk_rest.call(null,s__41253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41255),null);
}
} else {
var _ = cljs.core.first.call(null,s__41253__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__41252.call(null,cljs.core.rest.call(null,s__41253__$2)));
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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__41257(s__41258){
return (new cljs.core.LazySeq(null,(function (){
var s__41258__$1 = s__41258;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41258__$1);
if(temp__4657__auto__){
var s__41258__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41258__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__41258__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__41260 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__41259 = (0);
while(true){
if((i__41259 < size__37115__auto__)){
var x = cljs.core._nth.call(null,c__37114__auto__,i__41259);
cljs.core.chunk_append.call(null,b__41260,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__41261 = (i__41259 + (1));
i__41259 = G__41261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41260),maze_evolution$evolution$create_initial_population_$_iter__41257.call(null,cljs.core.chunk_rest.call(null,s__41258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41260),null);
}
} else {
var x = cljs.core.first.call(null,s__41258__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__41257.call(null,cljs.core.rest.call(null,s__41258__$2)));
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

var c__38905__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto__){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto__){
return (function (state_41298){
var state_val_41299 = (state_41298[(1)]);
if((state_val_41299 === (1))){
var inst_41262 = move_sequence;
var state_41298__$1 = (function (){var statearr_41300 = state_41298;
(statearr_41300[(7)] = inst_41262);

return statearr_41300;
})();
var statearr_41301_41315 = state_41298__$1;
(statearr_41301_41315[(2)] = null);

(statearr_41301_41315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (2))){
var inst_41264 = (state_41298[(8)]);
var inst_41262 = (state_41298[(7)]);
var inst_41264__$1 = cljs.core.first.call(null,inst_41262);
var state_41298__$1 = (function (){var statearr_41302 = state_41298;
(statearr_41302[(8)] = inst_41264__$1);

return statearr_41302;
})();
if(cljs.core.truth_(inst_41264__$1)){
var statearr_41303_41316 = state_41298__$1;
(statearr_41303_41316[(1)] = (4));

} else {
var statearr_41304_41317 = state_41298__$1;
(statearr_41304_41317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (3))){
var inst_41296 = (state_41298[(2)]);
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41298__$1,inst_41296);
} else {
if((state_val_41299 === (4))){
var inst_41264 = (state_41298[(8)]);
var inst_41266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41267 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_41264];
var inst_41268 = (new cljs.core.PersistentVector(null,2,(5),inst_41266,inst_41267,null));
var inst_41269 = re_frame.core.dispatch.call(null,inst_41268);
var inst_41270 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_41298__$1 = (function (){var statearr_41305 = state_41298;
(statearr_41305[(9)] = inst_41269);

return statearr_41305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41298__$1,(7),inst_41270);
} else {
if((state_val_41299 === (5))){
var state_41298__$1 = state_41298;
var statearr_41306_41318 = state_41298__$1;
(statearr_41306_41318[(2)] = null);

(statearr_41306_41318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (6))){
var inst_41277 = (state_41298[(2)]);
var inst_41278 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41281 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_41282 = (new cljs.core.PersistentVector(null,1,(5),inst_41280,inst_41281,null));
var inst_41283 = re_frame.core.subscribe.call(null,inst_41282);
var inst_41284 = cljs.core.deref.call(null,inst_41283);
var inst_41285 = [id,inst_41284];
var inst_41286 = (new cljs.core.PersistentVector(null,2,(5),inst_41279,inst_41285,null));
var inst_41287 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_41286];
var inst_41288 = (new cljs.core.PersistentVector(null,2,(5),inst_41278,inst_41287,null));
var inst_41289 = re_frame.core.dispatch.call(null,inst_41288);
var inst_41290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41291 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_41292 = (new cljs.core.PersistentVector(null,1,(5),inst_41290,inst_41291,null));
var inst_41293 = re_frame.core.subscribe.call(null,inst_41292);
var inst_41294 = cljs.core.deref.call(null,inst_41293);
var state_41298__$1 = (function (){var statearr_41307 = state_41298;
(statearr_41307[(10)] = inst_41277);

(statearr_41307[(11)] = inst_41289);

return statearr_41307;
})();
var statearr_41308_41319 = state_41298__$1;
(statearr_41308_41319[(2)] = inst_41294);

(statearr_41308_41319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (7))){
var inst_41262 = (state_41298[(7)]);
var inst_41272 = (state_41298[(2)]);
var inst_41273 = cljs.core.rest.call(null,inst_41262);
var inst_41262__$1 = inst_41273;
var state_41298__$1 = (function (){var statearr_41309 = state_41298;
(statearr_41309[(12)] = inst_41272);

(statearr_41309[(7)] = inst_41262__$1);

return statearr_41309;
})();
var statearr_41310_41320 = state_41298__$1;
(statearr_41310_41320[(2)] = null);

(statearr_41310_41320[(1)] = (2));


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
});})(c__38905__auto__))
;
return ((function (switch__38884__auto__,c__38905__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__38885__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__38885__auto____0 = (function (){
var statearr_41311 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41311[(0)] = maze_evolution$evolution$test_individual_$_state_machine__38885__auto__);

(statearr_41311[(1)] = (1));

return statearr_41311;
});
var maze_evolution$evolution$test_individual_$_state_machine__38885__auto____1 = (function (state_41298){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_41298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e41312){if((e41312 instanceof Object)){
var ex__38888__auto__ = e41312;
var statearr_41313_41321 = state_41298;
(statearr_41313_41321[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41322 = state_41298;
state_41298 = G__41322;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__38885__auto__ = function(state_41298){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__38885__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__38885__auto____1.call(this,state_41298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__38885__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__38885__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto__))
})();
var state__38907__auto__ = (function (){var statearr_41314 = f__38906__auto__.call(null);
(statearr_41314[(6)] = c__38905__auto__);

return statearr_41314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto__))
);

return c__38905__auto__;
});
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__38905__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto__){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto__){
return (function (state_41368){
var state_val_41369 = (state_41368[(1)]);
if((state_val_41369 === (7))){
var inst_41345 = (state_41368[(7)]);
var inst_41329 = (state_41368[(8)]);
var inst_41348 = (state_41368[(2)]);
var inst_41349 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41350 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_41351 = (new cljs.core.PersistentVector(null,1,(5),inst_41349,inst_41350,null));
var inst_41352 = re_frame.core.dispatch.call(null,inst_41351);
var inst_41353 = (inst_41345 > inst_41329);
var state_41368__$1 = (function (){var statearr_41370 = state_41368;
(statearr_41370[(9)] = inst_41352);

(statearr_41370[(10)] = inst_41348);

return statearr_41370;
})();
if(cljs.core.truth_(inst_41353)){
var statearr_41371_41392 = state_41368__$1;
(statearr_41371_41392[(1)] = (8));

} else {
var statearr_41372_41393 = state_41368__$1;
(statearr_41372_41393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41369 === (1))){
var inst_41323 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41324 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_41325 = (new cljs.core.PersistentVector(null,1,(5),inst_41323,inst_41324,null));
var inst_41326 = re_frame.core.subscribe.call(null,inst_41325);
var inst_41327 = cljs.core.deref.call(null,inst_41326);
var inst_41328 = inst_41327;
var inst_41329 = (0);
var state_41368__$1 = (function (){var statearr_41373 = state_41368;
(statearr_41373[(11)] = inst_41328);

(statearr_41373[(8)] = inst_41329);

return statearr_41373;
})();
var statearr_41374_41394 = state_41368__$1;
(statearr_41374_41394[(2)] = null);

(statearr_41374_41394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41369 === (4))){
var inst_41331 = (state_41368[(12)]);
var inst_41333 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41334 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_41331);
var inst_41335 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_41334];
var inst_41336 = (new cljs.core.PersistentVector(null,2,(5),inst_41333,inst_41335,null));
var inst_41337 = re_frame.core.dispatch.call(null,inst_41336);
var inst_41338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41339 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_41331);
var inst_41340 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_41339];
var inst_41341 = (new cljs.core.PersistentVector(null,2,(5),inst_41338,inst_41340,null));
var inst_41342 = re_frame.core.dispatch.call(null,inst_41341);
var inst_41343 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_41331);
var inst_41344 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_41331);
var inst_41345 = maze_evolution.evolution.test_individual.call(null,inst_41343,inst_41344);
var inst_41346 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_41368__$1 = (function (){var statearr_41375 = state_41368;
(statearr_41375[(13)] = inst_41337);

(statearr_41375[(7)] = inst_41345);

(statearr_41375[(14)] = inst_41342);

return statearr_41375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41368__$1,(7),inst_41346);
} else {
if((state_val_41369 === (6))){
var inst_41329 = (state_41368[(8)]);
var inst_41364 = (state_41368[(2)]);
var state_41368__$1 = (function (){var statearr_41376 = state_41368;
(statearr_41376[(15)] = inst_41364);

return statearr_41376;
})();
var statearr_41377_41395 = state_41368__$1;
(statearr_41377_41395[(2)] = inst_41329);

(statearr_41377_41395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41369 === (3))){
var inst_41366 = (state_41368[(2)]);
var state_41368__$1 = state_41368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41368__$1,inst_41366);
} else {
if((state_val_41369 === (2))){
var inst_41328 = (state_41368[(11)]);
var inst_41331 = (state_41368[(12)]);
var inst_41331__$1 = cljs.core.first.call(null,inst_41328);
var state_41368__$1 = (function (){var statearr_41379 = state_41368;
(statearr_41379[(12)] = inst_41331__$1);

return statearr_41379;
})();
if(cljs.core.truth_(inst_41331__$1)){
var statearr_41380_41396 = state_41368__$1;
(statearr_41380_41396[(1)] = (4));

} else {
var statearr_41381_41397 = state_41368__$1;
(statearr_41381_41397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41369 === (9))){
var inst_41328 = (state_41368[(11)]);
var inst_41329 = (state_41368[(8)]);
var inst_41358 = cljs.core.rest.call(null,inst_41328);
var tmp41378 = inst_41329;
var inst_41328__$1 = inst_41358;
var inst_41329__$1 = tmp41378;
var state_41368__$1 = (function (){var statearr_41382 = state_41368;
(statearr_41382[(11)] = inst_41328__$1);

(statearr_41382[(8)] = inst_41329__$1);

return statearr_41382;
})();
var statearr_41383_41398 = state_41368__$1;
(statearr_41383_41398[(2)] = null);

(statearr_41383_41398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41369 === (5))){
var state_41368__$1 = state_41368;
var statearr_41384_41399 = state_41368__$1;
(statearr_41384_41399[(2)] = null);

(statearr_41384_41399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41369 === (10))){
var inst_41361 = (state_41368[(2)]);
var state_41368__$1 = state_41368;
var statearr_41385_41400 = state_41368__$1;
(statearr_41385_41400[(2)] = inst_41361);

(statearr_41385_41400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41369 === (8))){
var inst_41328 = (state_41368[(11)]);
var inst_41345 = (state_41368[(7)]);
var inst_41355 = cljs.core.rest.call(null,inst_41328);
var inst_41328__$1 = inst_41355;
var inst_41329 = inst_41345;
var state_41368__$1 = (function (){var statearr_41386 = state_41368;
(statearr_41386[(11)] = inst_41328__$1);

(statearr_41386[(8)] = inst_41329);

return statearr_41386;
})();
var statearr_41387_41401 = state_41368__$1;
(statearr_41387_41401[(2)] = null);

(statearr_41387_41401[(1)] = (2));


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
});})(c__38905__auto__))
;
return ((function (switch__38884__auto__,c__38905__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__38885__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__38885__auto____0 = (function (){
var statearr_41388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41388[(0)] = maze_evolution$evolution$test_population_$_state_machine__38885__auto__);

(statearr_41388[(1)] = (1));

return statearr_41388;
});
var maze_evolution$evolution$test_population_$_state_machine__38885__auto____1 = (function (state_41368){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_41368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e41389){if((e41389 instanceof Object)){
var ex__38888__auto__ = e41389;
var statearr_41390_41402 = state_41368;
(statearr_41390_41402[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41403 = state_41368;
state_41368 = G__41403;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__38885__auto__ = function(state_41368){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__38885__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__38885__auto____1.call(this,state_41368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__38885__auto____0;
maze_evolution$evolution$test_population_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__38885__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto__))
})();
var state__38907__auto__ = (function (){var statearr_41391 = f__38906__auto__.call(null);
(statearr_41391[(6)] = c__38905__auto__);

return statearr_41391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto__))
);

return c__38905__auto__;
});
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(){
var population = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null));
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (population){
return (function (p1__41404_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__41404_SHARP_);
});})(population))
,cljs.core.deref.call(null,population))));
});
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__41405_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__41405_SHARP_);
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

var new_population_41406 = maze_evolution.evolution.pair_and_reproduce.call(null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_41406], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_41406))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_41406))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

return cljs.core.reset_BANG_.call(null,running,false);
});
maze_evolution.evolution.update_fitness_list = (function maze_evolution$evolution$update_fitness_list(){
return null;
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

//# sourceMappingURL=evolution.js.map?rel=1518331044701
