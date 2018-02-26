// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var iter__9270__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__27183(s__27184){
return (new cljs.core.LazySeq(null,(function (){
var s__27184__$1 = s__27184;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27184__$1);
if(temp__5457__auto__){
var s__27184__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27184__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27184__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27186 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27185 = (0);
while(true){
if((i__27185 < size__9269__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27185);
cljs.core.chunk_append(b__27186,maze_evolution.evolution.random_move());

var G__27187 = (i__27185 + (1));
i__27185 = G__27187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27186),maze_evolution$evolution$create_initial_individual_$_iter__27183(cljs.core.chunk_rest(s__27184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27186),null);
}
} else {
var _ = cljs.core.first(s__27184__$2);
return cljs.core.cons(maze_evolution.evolution.random_move(),maze_evolution$evolution$create_initial_individual_$_iter__27183(cljs.core.rest(s__27184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(64)));
});
/**
 * Creates a sequence of randomly generated individuals representing the original population
 */
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__9270__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__27188(s__27189){
return (new cljs.core.LazySeq(null,(function (){
var s__27189__$1 = s__27189;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27189__$1);
if(temp__5457__auto__){
var s__27189__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27189__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27189__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27191 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27190 = (0);
while(true){
if((i__27190 < size__9269__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27190);
cljs.core.chunk_append(b__27191,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("individual"))].join(''),cljs.core.cst$kw$move_DASH_sequence,maze_evolution.evolution.create_initial_individual(),cljs.core.cst$kw$fitness,(0)], null));

var G__27192 = (i__27190 + (1));
i__27190 = G__27192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27191),maze_evolution$evolution$create_initial_population_$_iter__27188(cljs.core.chunk_rest(s__27189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27191),null);
}
} else {
var x = cljs.core.first(s__27189__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("individual"))].join(''),cljs.core.cst$kw$move_DASH_sequence,maze_evolution.evolution.create_initial_individual(),cljs.core.cst$kw$fitness,(0)], null),maze_evolution$evolution$create_initial_population_$_iter__27188(cljs.core.rest(s__27189__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),maze_evolution.evolution.population_size));
});
/**
 * Tests an individual through the maze using its move sequence
 */
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
var G__27193_27242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27193_27242) : re_frame.core.dispatch.call(null,G__27193_27242));

var c__23661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto__){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto__){
return (function (state_27225){
var state_val_27226 = (state_27225[(1)]);
if((state_val_27226 === (1))){
var inst_27194 = move_sequence;
var state_27225__$1 = (function (){var statearr_27227 = state_27225;
(statearr_27227[(7)] = inst_27194);

return statearr_27227;
})();
var statearr_27228_27243 = state_27225__$1;
(statearr_27228_27243[(2)] = null);

(statearr_27228_27243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27226 === (2))){
var inst_27196 = (state_27225[(8)]);
var inst_27194 = (state_27225[(7)]);
var inst_27196__$1 = cljs.core.first(inst_27194);
var state_27225__$1 = (function (){var statearr_27229 = state_27225;
(statearr_27229[(8)] = inst_27196__$1);

return statearr_27229;
})();
if(cljs.core.truth_(inst_27196__$1)){
var statearr_27230_27244 = state_27225__$1;
(statearr_27230_27244[(1)] = (4));

} else {
var statearr_27231_27245 = state_27225__$1;
(statearr_27231_27245[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27226 === (3))){
var inst_27223 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27225__$1,inst_27223);
} else {
if((state_val_27226 === (4))){
var inst_27196 = (state_27225[(8)]);
var inst_27198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27199 = [cljs.core.cst$kw$move_DASH_ball,inst_27196];
var inst_27200 = (new cljs.core.PersistentVector(null,2,(5),inst_27198,inst_27199,null));
var inst_27201 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_27200) : re_frame.core.dispatch.call(null,inst_27200));
var inst_27202 = cljs.core.async.timeout(maze_evolution.evolution.move_time);
var state_27225__$1 = (function (){var statearr_27232 = state_27225;
(statearr_27232[(9)] = inst_27201);

return statearr_27232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27225__$1,(7),inst_27202);
} else {
if((state_val_27226 === (5))){
var state_27225__$1 = state_27225;
var statearr_27233_27246 = state_27225__$1;
(statearr_27233_27246[(2)] = null);

(statearr_27233_27246[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27226 === (6))){
var inst_27209 = (state_27225[(2)]);
var inst_27210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27213 = [cljs.core.cst$kw$current_DASH_fitness];
var inst_27214 = (new cljs.core.PersistentVector(null,1,(5),inst_27212,inst_27213,null));
var inst_27215 = (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(inst_27214) : re_frame.core.subscribe.call(null,inst_27214));
var inst_27216 = cljs.core.deref(inst_27215);
var inst_27217 = [id,inst_27216];
var inst_27218 = (new cljs.core.PersistentVector(null,2,(5),inst_27211,inst_27217,null));
var inst_27219 = [cljs.core.cst$kw$update_DASH_fitness,inst_27218];
var inst_27220 = (new cljs.core.PersistentVector(null,2,(5),inst_27210,inst_27219,null));
var inst_27221 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_27220) : re_frame.core.dispatch.call(null,inst_27220));
var state_27225__$1 = (function (){var statearr_27234 = state_27225;
(statearr_27234[(10)] = inst_27209);

return statearr_27234;
})();
var statearr_27235_27247 = state_27225__$1;
(statearr_27235_27247[(2)] = inst_27221);

(statearr_27235_27247[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27226 === (7))){
var inst_27194 = (state_27225[(7)]);
var inst_27204 = (state_27225[(2)]);
var inst_27205 = cljs.core.rest(inst_27194);
var inst_27194__$1 = inst_27205;
var state_27225__$1 = (function (){var statearr_27236 = state_27225;
(statearr_27236[(7)] = inst_27194__$1);

(statearr_27236[(11)] = inst_27204);

return statearr_27236;
})();
var statearr_27237_27248 = state_27225__$1;
(statearr_27237_27248[(2)] = null);

(statearr_27237_27248[(1)] = (2));


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
});})(c__23661__auto__))
;
return ((function (switch__23559__auto__,c__23661__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__23560__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__23560__auto____0 = (function (){
var statearr_27238 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27238[(0)] = maze_evolution$evolution$test_individual_$_state_machine__23560__auto__);

(statearr_27238[(1)] = (1));

return statearr_27238;
});
var maze_evolution$evolution$test_individual_$_state_machine__23560__auto____1 = (function (state_27225){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_27225);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e27239){if((e27239 instanceof Object)){
var ex__23563__auto__ = e27239;
var statearr_27240_27249 = state_27225;
(statearr_27240_27249[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27225);

return cljs.core.cst$kw$recur;
} else {
throw e27239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__27250 = state_27225;
state_27225 = G__27250;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__23560__auto__ = function(state_27225){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__23560__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__23560__auto____1.call(this,state_27225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__23560__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__23560__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto__))
})();
var state__23663__auto__ = (function (){var statearr_27241 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_27241[(6)] = c__23661__auto__);

return statearr_27241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto__))
);

return c__23661__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__23661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto__){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto__){
return (function (state_27288){
var state_val_27289 = (state_27288[(1)]);
if((state_val_27289 === (1))){
var inst_27251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27252 = [cljs.core.cst$kw$population];
var inst_27253 = (new cljs.core.PersistentVector(null,1,(5),inst_27251,inst_27252,null));
var inst_27254 = (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(inst_27253) : re_frame.core.subscribe.call(null,inst_27253));
var inst_27255 = cljs.core.deref(inst_27254);
var inst_27256 = inst_27255;
var state_27288__$1 = (function (){var statearr_27290 = state_27288;
(statearr_27290[(7)] = inst_27256);

return statearr_27290;
})();
var statearr_27291_27304 = state_27288__$1;
(statearr_27291_27304[(2)] = null);

(statearr_27291_27304[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27289 === (2))){
var inst_27258 = (state_27288[(8)]);
var inst_27256 = (state_27288[(7)]);
var inst_27258__$1 = cljs.core.first(inst_27256);
var state_27288__$1 = (function (){var statearr_27292 = state_27288;
(statearr_27292[(8)] = inst_27258__$1);

return statearr_27292;
})();
if(cljs.core.truth_(inst_27258__$1)){
var statearr_27293_27305 = state_27288__$1;
(statearr_27293_27305[(1)] = (4));

} else {
var statearr_27294_27306 = state_27288__$1;
(statearr_27294_27306[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27289 === (3))){
var inst_27286 = (state_27288[(2)]);
var state_27288__$1 = state_27288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27288__$1,inst_27286);
} else {
if((state_val_27289 === (4))){
var inst_27258 = (state_27288[(8)]);
var inst_27260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27261 = cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(inst_27258);
var inst_27262 = [cljs.core.cst$kw$set_DASH_new_DASH_move_DASH_sequence,inst_27261];
var inst_27263 = (new cljs.core.PersistentVector(null,2,(5),inst_27260,inst_27262,null));
var inst_27264 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_27263) : re_frame.core.dispatch.call(null,inst_27263));
var inst_27265 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27266 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inst_27258);
var inst_27267 = [cljs.core.cst$kw$set_DASH_new_DASH_unique_DASH_id,inst_27266];
var inst_27268 = (new cljs.core.PersistentVector(null,2,(5),inst_27265,inst_27267,null));
var inst_27269 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_27268) : re_frame.core.dispatch.call(null,inst_27268));
var inst_27270 = cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(inst_27258);
var inst_27271 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inst_27258);
var inst_27272 = maze_evolution.evolution.test_individual(inst_27270,inst_27271);
var inst_27273 = cljs.core.async.timeout(maze_evolution.evolution.individual_time);
var state_27288__$1 = (function (){var statearr_27295 = state_27288;
(statearr_27295[(9)] = inst_27264);

(statearr_27295[(10)] = inst_27272);

(statearr_27295[(11)] = inst_27269);

return statearr_27295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27288__$1,(7),inst_27273);
} else {
if((state_val_27289 === (5))){
var state_27288__$1 = state_27288;
var statearr_27296_27307 = state_27288__$1;
(statearr_27296_27307[(2)] = null);

(statearr_27296_27307[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27289 === (6))){
var inst_27284 = (state_27288[(2)]);
var state_27288__$1 = state_27288;
var statearr_27297_27308 = state_27288__$1;
(statearr_27297_27308[(2)] = inst_27284);

(statearr_27297_27308[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27289 === (7))){
var inst_27256 = (state_27288[(7)]);
var inst_27275 = (state_27288[(2)]);
var inst_27276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27277 = [cljs.core.cst$kw$next_DASH_individual];
var inst_27278 = (new cljs.core.PersistentVector(null,1,(5),inst_27276,inst_27277,null));
var inst_27279 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_27278) : re_frame.core.dispatch.call(null,inst_27278));
var inst_27280 = cljs.core.rest(inst_27256);
var inst_27256__$1 = inst_27280;
var state_27288__$1 = (function (){var statearr_27298 = state_27288;
(statearr_27298[(12)] = inst_27275);

(statearr_27298[(7)] = inst_27256__$1);

(statearr_27298[(13)] = inst_27279);

return statearr_27298;
})();
var statearr_27299_27309 = state_27288__$1;
(statearr_27299_27309[(2)] = null);

(statearr_27299_27309[(1)] = (2));


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
});})(c__23661__auto__))
;
return ((function (switch__23559__auto__,c__23661__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__23560__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__23560__auto____0 = (function (){
var statearr_27300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27300[(0)] = maze_evolution$evolution$test_population_$_state_machine__23560__auto__);

(statearr_27300[(1)] = (1));

return statearr_27300;
});
var maze_evolution$evolution$test_population_$_state_machine__23560__auto____1 = (function (state_27288){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_27288);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e27301){if((e27301 instanceof Object)){
var ex__23563__auto__ = e27301;
var statearr_27302_27310 = state_27288;
(statearr_27302_27310[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27288);

return cljs.core.cst$kw$recur;
} else {
throw e27301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__27311 = state_27288;
state_27288 = G__27311;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__23560__auto__ = function(state_27288){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__23560__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__23560__auto____1.call(this,state_27288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__23560__auto____0;
maze_evolution$evolution$test_population_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__23560__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto__))
})();
var state__23663__auto__ = (function (){var statearr_27303 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_27303[(6)] = c__23661__auto__);

return statearr_27303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto__))
);

return c__23661__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(population){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((maze_evolution.evolution.population_size / (2)),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__27312_SHARP_){
return cljs.core.cst$kw$fitness.cljs$core$IFn$_invoke$arity$1(p1__27312_SHARP_);
}),population)));
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27313_SHARP_){
return cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(p1__27313_SHARP_);
}),breeding_pair));
var baby_sequence = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (move_sequences){
return (function (new_baby_sequence,baby_move){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / (64)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_baby_sequence,maze_evolution.evolution.random_move());
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_baby_sequence,baby_move);
}
});})(move_sequences))
,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (move_sequences){
return (function (baby_sequence,parent_move){
var sequence_not_full = (cljs.core.count(baby_sequence) < (64));
if((sequence_not_full) && ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / (32))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(baby_sequence,cljs.core.take_last(((64) - cljs.core.count(baby_sequence)),cljs.core.second(move_sequences)));
} else {
if(sequence_not_full){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(baby_sequence,parent_move);
} else {
return baby_sequence;

}
}
});})(move_sequences))
,cljs.core.PersistentVector.EMPTY,cljs.core.first(move_sequences)));
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

var new_population_27321 = maze_evolution.evolution.pair_and_reproduce(cljs.core.deref((function (){var G__27314 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$population], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27314) : re_frame.core.subscribe.call(null,G__27314));
})()));
var G__27315_27322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_population,new_population_27321], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27315_27322) : re_frame.core.dispatch.call(null,G__27315_27322));

var G__27316_27323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_generation], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27316_27323) : re_frame.core.dispatch.call(null,G__27316_27323));

var G__27317_27324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_individual], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27317_27324) : re_frame.core.dispatch.call(null,G__27317_27324));

var G__27318_27325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_new_DASH_move_DASH_sequence,cljs.core.cst$kw$move_DASH_sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new_population_27321))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27318_27325) : re_frame.core.dispatch.call(null,G__27318_27325));

var G__27319_27326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_new_DASH_unique_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new_population_27321))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27319_27326) : re_frame.core.dispatch.call(null,G__27319_27326));

var G__27320_27327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27320_27327) : re_frame.core.dispatch.call(null,G__27320_27327));

return cljs.core.reset_BANG_(running,false);
});
/**
 * Tests population in a loop and creates new generations continuously
 */
maze_evolution.evolution.continuously_evolve = (function maze_evolution$evolution$continuously_evolve(running){
maze_evolution.evolution.test_population(running);

var G__27328 = (function (){
maze_evolution.evolution.create_new_generation(running);

var G__27330 = (function (){
return (maze_evolution.evolution.continuously_evolve.cljs$core$IFn$_invoke$arity$1 ? maze_evolution.evolution.continuously_evolve.cljs$core$IFn$_invoke$arity$1(running) : maze_evolution.evolution.continuously_evolve.call(null,running));
});
var G__27331 = (500);
return setTimeout(G__27330,G__27331);
});
var G__27329 = (maze_evolution.evolution.generation_time + (5000));
return setTimeout(G__27328,G__27329);
});
/**
 * Creates an initial population and tests it n times without a user interface.
 *   Returns a list containing the maximum fitness for every generation
 */
maze_evolution.evolution.headless_evolution_test_and_get_maximum_fitness = (function maze_evolution$evolution$headless_evolution_test_and_get_maximum_fitness(maze,fitness_map,n){
var i = (1);
var population = maze_evolution.evolution.create_initial_population();
var max_fitness_list = cljs.core.PersistentVector.EMPTY;
while(true){
var fitness_list = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,population,max_fitness_list){
return (function (fitness_list,position){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fitness_list,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fitness_map,position));
});})(i,population,max_fitness_list))
,cljs.core.PersistentVector.EMPTY,clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2(((function (i,population,max_fitness_list){
return (function() {
var G__27332 = null;
var G__27332__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__27332__2 = (function (position_list,individual){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(position_list,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,population,max_fitness_list){
return (function (position,direction){
return maze_evolution.evolution.move_if_eligible(direction,maze,position);
});})(i,population,max_fitness_list))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),individual));
});
G__27332 = function(position_list,individual){
switch(arguments.length){
case 0:
return G__27332__0.call(this);
case 2:
return G__27332__2.call(this,position_list,individual);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27332.cljs$core$IFn$_invoke$arity$0 = G__27332__0;
G__27332.cljs$core$IFn$_invoke$arity$2 = G__27332__2;
return G__27332;
})()
;})(i,population,max_fitness_list))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_sequence,population)));
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
var G__27333 = (i + (1));
var G__27334 = new_population;
var G__27335 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(max_fitness_list,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,fitness_list));
i = G__27333;
population = G__27334;
max_fitness_list = G__27335;
continue;
}
break;
}
});
