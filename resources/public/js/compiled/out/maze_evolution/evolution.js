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
var iter__8476__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__20795(s__20796){
return (new cljs.core.LazySeq(null,(function (){
var s__20796__$1 = s__20796;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20796__$1);
if(temp__4657__auto__){
var s__20796__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20796__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__20796__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__20798 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__20797 = (0);
while(true){
if((i__20797 < size__8475__auto__)){
var _ = cljs.core._nth.call(null,c__8474__auto__,i__20797);
cljs.core.chunk_append.call(null,b__20798,maze_evolution.evolution.random_move.call(null));

var G__20799 = (i__20797 + (1));
i__20797 = G__20799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20798),maze_evolution$evolution$create_initial_individual_$_iter__20795.call(null,cljs.core.chunk_rest.call(null,s__20796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20798),null);
}
} else {
var _ = cljs.core.first.call(null,s__20796__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__20795.call(null,cljs.core.rest.call(null,s__20796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__.call(null,cljs.core.range.call(null,(0),(64)));
});
/**
 * Creates a sequence of randomly generated individuals representing the original population
 */
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__8476__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__20800(s__20801){
return (new cljs.core.LazySeq(null,(function (){
var s__20801__$1 = s__20801;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20801__$1);
if(temp__4657__auto__){
var s__20801__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20801__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__20801__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__20803 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__20802 = (0);
while(true){
if((i__20802 < size__8475__auto__)){
var x = cljs.core._nth.call(null,c__8474__auto__,i__20802);
cljs.core.chunk_append.call(null,b__20803,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__20804 = (i__20802 + (1));
i__20802 = G__20804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20803),maze_evolution$evolution$create_initial_population_$_iter__20800.call(null,cljs.core.chunk_rest.call(null,s__20801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20803),null);
}
} else {
var x = cljs.core.first.call(null,s__20801__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__20800.call(null,cljs.core.rest.call(null,s__20801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__.call(null,cljs.core.range.call(null,(0),maze_evolution.evolution.population_size));
});
/**
 * Tests an individual through the maze using its move sequence
 */
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__){
return (function (state_20836){
var state_val_20837 = (state_20836[(1)]);
if((state_val_20837 === (1))){
var inst_20805 = move_sequence;
var state_20836__$1 = (function (){var statearr_20838 = state_20836;
(statearr_20838[(7)] = inst_20805);

return statearr_20838;
})();
var statearr_20839_20853 = state_20836__$1;
(statearr_20839_20853[(2)] = null);

(statearr_20839_20853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (2))){
var inst_20807 = (state_20836[(8)]);
var inst_20805 = (state_20836[(7)]);
var inst_20807__$1 = cljs.core.first.call(null,inst_20805);
var state_20836__$1 = (function (){var statearr_20840 = state_20836;
(statearr_20840[(8)] = inst_20807__$1);

return statearr_20840;
})();
if(cljs.core.truth_(inst_20807__$1)){
var statearr_20841_20854 = state_20836__$1;
(statearr_20841_20854[(1)] = (4));

} else {
var statearr_20842_20855 = state_20836__$1;
(statearr_20842_20855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (3))){
var inst_20834 = (state_20836[(2)]);
var state_20836__$1 = state_20836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20836__$1,inst_20834);
} else {
if((state_val_20837 === (4))){
var inst_20807 = (state_20836[(8)]);
var inst_20809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20810 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_20807];
var inst_20811 = (new cljs.core.PersistentVector(null,2,(5),inst_20809,inst_20810,null));
var inst_20812 = re_frame.core.dispatch.call(null,inst_20811);
var inst_20813 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_20836__$1 = (function (){var statearr_20843 = state_20836;
(statearr_20843[(9)] = inst_20812);

return statearr_20843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20836__$1,(7),inst_20813);
} else {
if((state_val_20837 === (5))){
var state_20836__$1 = state_20836;
var statearr_20844_20856 = state_20836__$1;
(statearr_20844_20856[(2)] = null);

(statearr_20844_20856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (6))){
var inst_20820 = (state_20836[(2)]);
var inst_20821 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20822 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20823 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20824 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_20825 = (new cljs.core.PersistentVector(null,1,(5),inst_20823,inst_20824,null));
var inst_20826 = re_frame.core.subscribe.call(null,inst_20825);
var inst_20827 = cljs.core.deref.call(null,inst_20826);
var inst_20828 = [id,inst_20827];
var inst_20829 = (new cljs.core.PersistentVector(null,2,(5),inst_20822,inst_20828,null));
var inst_20830 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_20829];
var inst_20831 = (new cljs.core.PersistentVector(null,2,(5),inst_20821,inst_20830,null));
var inst_20832 = re_frame.core.dispatch.call(null,inst_20831);
var state_20836__$1 = (function (){var statearr_20845 = state_20836;
(statearr_20845[(10)] = inst_20820);

return statearr_20845;
})();
var statearr_20846_20857 = state_20836__$1;
(statearr_20846_20857[(2)] = inst_20832);

(statearr_20846_20857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20837 === (7))){
var inst_20805 = (state_20836[(7)]);
var inst_20815 = (state_20836[(2)]);
var inst_20816 = cljs.core.rest.call(null,inst_20805);
var inst_20805__$1 = inst_20816;
var state_20836__$1 = (function (){var statearr_20847 = state_20836;
(statearr_20847[(11)] = inst_20815);

(statearr_20847[(7)] = inst_20805__$1);

return statearr_20847;
})();
var statearr_20848_20858 = state_20836__$1;
(statearr_20848_20858[(2)] = null);

(statearr_20848_20858[(1)] = (2));


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
});})(c__17552__auto__))
;
return ((function (switch__17464__auto__,c__17552__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__17465__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__17465__auto____0 = (function (){
var statearr_20849 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20849[(0)] = maze_evolution$evolution$test_individual_$_state_machine__17465__auto__);

(statearr_20849[(1)] = (1));

return statearr_20849;
});
var maze_evolution$evolution$test_individual_$_state_machine__17465__auto____1 = (function (state_20836){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_20836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e20850){if((e20850 instanceof Object)){
var ex__17468__auto__ = e20850;
var statearr_20851_20859 = state_20836;
(statearr_20851_20859[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20860 = state_20836;
state_20836 = G__20860;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__17465__auto__ = function(state_20836){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__17465__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__17465__auto____1.call(this,state_20836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__17465__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__17465__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_20852 = f__17553__auto__.call(null);
(statearr_20852[(6)] = c__17552__auto__);

return statearr_20852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto__))
);

return c__17552__auto__;
});
/**
 * Tests the entire population by looping through and testing each individual
 */
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__){
return (function (state_20898){
var state_val_20899 = (state_20898[(1)]);
if((state_val_20899 === (1))){
var inst_20861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20862 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_20863 = (new cljs.core.PersistentVector(null,1,(5),inst_20861,inst_20862,null));
var inst_20864 = re_frame.core.subscribe.call(null,inst_20863);
var inst_20865 = cljs.core.deref.call(null,inst_20864);
var inst_20866 = inst_20865;
var state_20898__$1 = (function (){var statearr_20900 = state_20898;
(statearr_20900[(7)] = inst_20866);

return statearr_20900;
})();
var statearr_20901_20914 = state_20898__$1;
(statearr_20901_20914[(2)] = null);

(statearr_20901_20914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (2))){
var inst_20866 = (state_20898[(7)]);
var inst_20868 = (state_20898[(8)]);
var inst_20868__$1 = cljs.core.first.call(null,inst_20866);
var state_20898__$1 = (function (){var statearr_20902 = state_20898;
(statearr_20902[(8)] = inst_20868__$1);

return statearr_20902;
})();
if(cljs.core.truth_(inst_20868__$1)){
var statearr_20903_20915 = state_20898__$1;
(statearr_20903_20915[(1)] = (4));

} else {
var statearr_20904_20916 = state_20898__$1;
(statearr_20904_20916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (3))){
var inst_20896 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20898__$1,inst_20896);
} else {
if((state_val_20899 === (4))){
var inst_20868 = (state_20898[(8)]);
var inst_20870 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20871 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_20868);
var inst_20872 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_20871];
var inst_20873 = (new cljs.core.PersistentVector(null,2,(5),inst_20870,inst_20872,null));
var inst_20874 = re_frame.core.dispatch.call(null,inst_20873);
var inst_20875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20876 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_20868);
var inst_20877 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_20876];
var inst_20878 = (new cljs.core.PersistentVector(null,2,(5),inst_20875,inst_20877,null));
var inst_20879 = re_frame.core.dispatch.call(null,inst_20878);
var inst_20880 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_20868);
var inst_20881 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_20868);
var inst_20882 = maze_evolution.evolution.test_individual.call(null,inst_20880,inst_20881);
var inst_20883 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_20898__$1 = (function (){var statearr_20905 = state_20898;
(statearr_20905[(9)] = inst_20874);

(statearr_20905[(10)] = inst_20882);

(statearr_20905[(11)] = inst_20879);

return statearr_20905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20898__$1,(7),inst_20883);
} else {
if((state_val_20899 === (5))){
var state_20898__$1 = state_20898;
var statearr_20906_20917 = state_20898__$1;
(statearr_20906_20917[(2)] = null);

(statearr_20906_20917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (6))){
var inst_20894 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
var statearr_20907_20918 = state_20898__$1;
(statearr_20907_20918[(2)] = inst_20894);

(statearr_20907_20918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (7))){
var inst_20866 = (state_20898[(7)]);
var inst_20885 = (state_20898[(2)]);
var inst_20886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20887 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_20888 = (new cljs.core.PersistentVector(null,1,(5),inst_20886,inst_20887,null));
var inst_20889 = re_frame.core.dispatch.call(null,inst_20888);
var inst_20890 = cljs.core.rest.call(null,inst_20866);
var inst_20866__$1 = inst_20890;
var state_20898__$1 = (function (){var statearr_20908 = state_20898;
(statearr_20908[(12)] = inst_20889);

(statearr_20908[(7)] = inst_20866__$1);

(statearr_20908[(13)] = inst_20885);

return statearr_20908;
})();
var statearr_20909_20919 = state_20898__$1;
(statearr_20909_20919[(2)] = null);

(statearr_20909_20919[(1)] = (2));


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
});})(c__17552__auto__))
;
return ((function (switch__17464__auto__,c__17552__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__17465__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__17465__auto____0 = (function (){
var statearr_20910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20910[(0)] = maze_evolution$evolution$test_population_$_state_machine__17465__auto__);

(statearr_20910[(1)] = (1));

return statearr_20910;
});
var maze_evolution$evolution$test_population_$_state_machine__17465__auto____1 = (function (state_20898){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_20898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e20911){if((e20911 instanceof Object)){
var ex__17468__auto__ = e20911;
var statearr_20912_20920 = state_20898;
(statearr_20912_20920[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20921 = state_20898;
state_20898 = G__20921;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__17465__auto__ = function(state_20898){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__17465__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__17465__auto____1.call(this,state_20898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__17465__auto____0;
maze_evolution$evolution$test_population_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__17465__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_20913 = f__17553__auto__.call(null);
(statearr_20913[(6)] = c__17552__auto__);

return statearr_20913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto__))
);

return c__17552__auto__;
});
/**
 * Kills the bottom half of the population and sorts the remaining individuals by
 *   fitness
 */
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(population){
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p1__20922_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__20922_SHARP_);
}),population)));
});
/**
 * Uses crossing over and mutation to create an offspring from two parents
 */
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__20923_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__20923_SHARP_);
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

var new_population_20924 = maze_evolution.evolution.pair_and_reproduce.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null))));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_20924], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_20924))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_20924))], null));

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
var G__20925 = (i + (1));
var G__20926 = new_population;
var G__20927 = cljs.core.conj.call(null,max_fitness_list,cljs.core.apply.call(null,cljs.core.max,fitness_list));
i = G__20925;
population = G__20926;
max_fitness_list = G__20927;
continue;
}
break;
}
});

//# sourceMappingURL=evolution.js.map?rel=1518565221991
