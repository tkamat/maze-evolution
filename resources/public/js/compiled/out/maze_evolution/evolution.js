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
var iter__40808__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__42795(s__42796){
return (new cljs.core.LazySeq(null,(function (){
var s__42796__$1 = s__42796;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42796__$1);
if(temp__4657__auto__){
var s__42796__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42796__$2)){
var c__40806__auto__ = cljs.core.chunk_first.call(null,s__42796__$2);
var size__40807__auto__ = cljs.core.count.call(null,c__40806__auto__);
var b__42798 = cljs.core.chunk_buffer.call(null,size__40807__auto__);
if((function (){var i__42797 = (0);
while(true){
if((i__42797 < size__40807__auto__)){
var _ = cljs.core._nth.call(null,c__40806__auto__,i__42797);
cljs.core.chunk_append.call(null,b__42798,maze_evolution.evolution.random_move.call(null));

var G__42799 = (i__42797 + (1));
i__42797 = G__42799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42798),maze_evolution$evolution$create_initial_individual_$_iter__42795.call(null,cljs.core.chunk_rest.call(null,s__42796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42798),null);
}
} else {
var _ = cljs.core.first.call(null,s__42796__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__42795.call(null,cljs.core.rest.call(null,s__42796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__40808__auto__.call(null,cljs.core.range.call(null,(0),(64)));
});
maze_evolution.evolution.create_initial_population = (function maze_evolution$evolution$create_initial_population(){
var iter__40808__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__42800(s__42801){
return (new cljs.core.LazySeq(null,(function (){
var s__42801__$1 = s__42801;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42801__$1);
if(temp__4657__auto__){
var s__42801__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42801__$2)){
var c__40806__auto__ = cljs.core.chunk_first.call(null,s__42801__$2);
var size__40807__auto__ = cljs.core.count.call(null,c__40806__auto__);
var b__42803 = cljs.core.chunk_buffer.call(null,size__40807__auto__);
if((function (){var i__42802 = (0);
while(true){
if((i__42802 < size__40807__auto__)){
var x = cljs.core._nth.call(null,c__40806__auto__,i__42802);
cljs.core.chunk_append.call(null,b__42803,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__42804 = (i__42802 + (1));
i__42802 = G__42804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42803),maze_evolution$evolution$create_initial_population_$_iter__42800.call(null,cljs.core.chunk_rest.call(null,s__42801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42803),null);
}
} else {
var x = cljs.core.first.call(null,s__42801__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__42800.call(null,cljs.core.rest.call(null,s__42801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__40808__auto__.call(null,cljs.core.range.call(null,(0),maze_evolution.evolution.population_size));
});
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(move_sequence,id){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

var c__42750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42750__auto__){
return (function (){
var f__42751__auto__ = (function (){var switch__42729__auto__ = ((function (c__42750__auto__){
return (function (state_42841){
var state_val_42842 = (state_42841[(1)]);
if((state_val_42842 === (1))){
var inst_42805 = move_sequence;
var state_42841__$1 = (function (){var statearr_42843 = state_42841;
(statearr_42843[(7)] = inst_42805);

return statearr_42843;
})();
var statearr_42844_42858 = state_42841__$1;
(statearr_42844_42858[(2)] = null);

(statearr_42844_42858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (2))){
var inst_42805 = (state_42841[(7)]);
var inst_42807 = (state_42841[(8)]);
var inst_42807__$1 = cljs.core.first.call(null,inst_42805);
var state_42841__$1 = (function (){var statearr_42845 = state_42841;
(statearr_42845[(8)] = inst_42807__$1);

return statearr_42845;
})();
if(cljs.core.truth_(inst_42807__$1)){
var statearr_42846_42859 = state_42841__$1;
(statearr_42846_42859[(1)] = (4));

} else {
var statearr_42847_42860 = state_42841__$1;
(statearr_42847_42860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (3))){
var inst_42839 = (state_42841[(2)]);
var state_42841__$1 = state_42841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42841__$1,inst_42839);
} else {
if((state_val_42842 === (4))){
var inst_42807 = (state_42841[(8)]);
var inst_42809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42810 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_42807];
var inst_42811 = (new cljs.core.PersistentVector(null,2,(5),inst_42809,inst_42810,null));
var inst_42812 = re_frame.core.dispatch.call(null,inst_42811);
var inst_42813 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_42841__$1 = (function (){var statearr_42848 = state_42841;
(statearr_42848[(9)] = inst_42812);

return statearr_42848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42841__$1,(7),inst_42813);
} else {
if((state_val_42842 === (5))){
var state_42841__$1 = state_42841;
var statearr_42849_42861 = state_42841__$1;
(statearr_42849_42861[(2)] = null);

(statearr_42849_42861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (6))){
var inst_42820 = (state_42841[(2)]);
var inst_42821 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42822 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42823 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42824 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_42825 = (new cljs.core.PersistentVector(null,1,(5),inst_42823,inst_42824,null));
var inst_42826 = re_frame.core.subscribe.call(null,inst_42825);
var inst_42827 = cljs.core.deref.call(null,inst_42826);
var inst_42828 = [id,inst_42827];
var inst_42829 = (new cljs.core.PersistentVector(null,2,(5),inst_42822,inst_42828,null));
var inst_42830 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_42829];
var inst_42831 = (new cljs.core.PersistentVector(null,2,(5),inst_42821,inst_42830,null));
var inst_42832 = re_frame.core.dispatch.call(null,inst_42831);
var inst_42833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42834 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_42835 = (new cljs.core.PersistentVector(null,1,(5),inst_42833,inst_42834,null));
var inst_42836 = re_frame.core.subscribe.call(null,inst_42835);
var inst_42837 = cljs.core.deref.call(null,inst_42836);
var state_42841__$1 = (function (){var statearr_42850 = state_42841;
(statearr_42850[(10)] = inst_42832);

(statearr_42850[(11)] = inst_42820);

return statearr_42850;
})();
var statearr_42851_42862 = state_42841__$1;
(statearr_42851_42862[(2)] = inst_42837);

(statearr_42851_42862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (7))){
var inst_42805 = (state_42841[(7)]);
var inst_42815 = (state_42841[(2)]);
var inst_42816 = cljs.core.rest.call(null,inst_42805);
var inst_42805__$1 = inst_42816;
var state_42841__$1 = (function (){var statearr_42852 = state_42841;
(statearr_42852[(7)] = inst_42805__$1);

(statearr_42852[(12)] = inst_42815);

return statearr_42852;
})();
var statearr_42853_42863 = state_42841__$1;
(statearr_42853_42863[(2)] = null);

(statearr_42853_42863[(1)] = (2));


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
});})(c__42750__auto__))
;
return ((function (switch__42729__auto__,c__42750__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__42730__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__42730__auto____0 = (function (){
var statearr_42854 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42854[(0)] = maze_evolution$evolution$test_individual_$_state_machine__42730__auto__);

(statearr_42854[(1)] = (1));

return statearr_42854;
});
var maze_evolution$evolution$test_individual_$_state_machine__42730__auto____1 = (function (state_42841){
while(true){
var ret_value__42731__auto__ = (function (){try{while(true){
var result__42732__auto__ = switch__42729__auto__.call(null,state_42841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42732__auto__;
}
break;
}
}catch (e42855){if((e42855 instanceof Object)){
var ex__42733__auto__ = e42855;
var statearr_42856_42864 = state_42841;
(statearr_42856_42864[(5)] = ex__42733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42865 = state_42841;
state_42841 = G__42865;
continue;
} else {
return ret_value__42731__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__42730__auto__ = function(state_42841){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__42730__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__42730__auto____1.call(this,state_42841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__42730__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__42730__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__42730__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__42730__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__42730__auto__;
})()
;})(switch__42729__auto__,c__42750__auto__))
})();
var state__42752__auto__ = (function (){var statearr_42857 = f__42751__auto__.call(null);
(statearr_42857[(6)] = c__42750__auto__);

return statearr_42857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42752__auto__);
});})(c__42750__auto__))
);

return c__42750__auto__;
});
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__42750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42750__auto__){
return (function (){
var f__42751__auto__ = (function (){var switch__42729__auto__ = ((function (c__42750__auto__){
return (function (state_42911){
var state_val_42912 = (state_42911[(1)]);
if((state_val_42912 === (7))){
var inst_42872 = (state_42911[(7)]);
var inst_42888 = (state_42911[(8)]);
var inst_42891 = (state_42911[(2)]);
var inst_42892 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42893 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_42894 = (new cljs.core.PersistentVector(null,1,(5),inst_42892,inst_42893,null));
var inst_42895 = re_frame.core.dispatch.call(null,inst_42894);
var inst_42896 = (inst_42888 > inst_42872);
var state_42911__$1 = (function (){var statearr_42913 = state_42911;
(statearr_42913[(9)] = inst_42895);

(statearr_42913[(10)] = inst_42891);

return statearr_42913;
})();
if(cljs.core.truth_(inst_42896)){
var statearr_42914_42935 = state_42911__$1;
(statearr_42914_42935[(1)] = (8));

} else {
var statearr_42915_42936 = state_42911__$1;
(statearr_42915_42936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (1))){
var inst_42866 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42867 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_42868 = (new cljs.core.PersistentVector(null,1,(5),inst_42866,inst_42867,null));
var inst_42869 = re_frame.core.subscribe.call(null,inst_42868);
var inst_42870 = cljs.core.deref.call(null,inst_42869);
var inst_42871 = inst_42870;
var inst_42872 = (0);
var state_42911__$1 = (function (){var statearr_42916 = state_42911;
(statearr_42916[(7)] = inst_42872);

(statearr_42916[(11)] = inst_42871);

return statearr_42916;
})();
var statearr_42917_42937 = state_42911__$1;
(statearr_42917_42937[(2)] = null);

(statearr_42917_42937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (4))){
var inst_42874 = (state_42911[(12)]);
var inst_42876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42877 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_42874);
var inst_42878 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_42877];
var inst_42879 = (new cljs.core.PersistentVector(null,2,(5),inst_42876,inst_42878,null));
var inst_42880 = re_frame.core.dispatch.call(null,inst_42879);
var inst_42881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42882 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42874);
var inst_42883 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_42882];
var inst_42884 = (new cljs.core.PersistentVector(null,2,(5),inst_42881,inst_42883,null));
var inst_42885 = re_frame.core.dispatch.call(null,inst_42884);
var inst_42886 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_42874);
var inst_42887 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42874);
var inst_42888 = maze_evolution.evolution.test_individual.call(null,inst_42886,inst_42887);
var inst_42889 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_42911__$1 = (function (){var statearr_42918 = state_42911;
(statearr_42918[(13)] = inst_42885);

(statearr_42918[(14)] = inst_42880);

(statearr_42918[(8)] = inst_42888);

return statearr_42918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42911__$1,(7),inst_42889);
} else {
if((state_val_42912 === (6))){
var inst_42872 = (state_42911[(7)]);
var inst_42907 = (state_42911[(2)]);
var state_42911__$1 = (function (){var statearr_42919 = state_42911;
(statearr_42919[(15)] = inst_42907);

return statearr_42919;
})();
var statearr_42920_42938 = state_42911__$1;
(statearr_42920_42938[(2)] = inst_42872);

(statearr_42920_42938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (3))){
var inst_42909 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42911__$1,inst_42909);
} else {
if((state_val_42912 === (2))){
var inst_42874 = (state_42911[(12)]);
var inst_42871 = (state_42911[(11)]);
var inst_42874__$1 = cljs.core.first.call(null,inst_42871);
var state_42911__$1 = (function (){var statearr_42922 = state_42911;
(statearr_42922[(12)] = inst_42874__$1);

return statearr_42922;
})();
if(cljs.core.truth_(inst_42874__$1)){
var statearr_42923_42939 = state_42911__$1;
(statearr_42923_42939[(1)] = (4));

} else {
var statearr_42924_42940 = state_42911__$1;
(statearr_42924_42940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (9))){
var inst_42872 = (state_42911[(7)]);
var inst_42871 = (state_42911[(11)]);
var inst_42901 = cljs.core.rest.call(null,inst_42871);
var tmp42921 = inst_42872;
var inst_42871__$1 = inst_42901;
var inst_42872__$1 = tmp42921;
var state_42911__$1 = (function (){var statearr_42925 = state_42911;
(statearr_42925[(7)] = inst_42872__$1);

(statearr_42925[(11)] = inst_42871__$1);

return statearr_42925;
})();
var statearr_42926_42941 = state_42911__$1;
(statearr_42926_42941[(2)] = null);

(statearr_42926_42941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (5))){
var state_42911__$1 = state_42911;
var statearr_42927_42942 = state_42911__$1;
(statearr_42927_42942[(2)] = null);

(statearr_42927_42942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (10))){
var inst_42904 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
var statearr_42928_42943 = state_42911__$1;
(statearr_42928_42943[(2)] = inst_42904);

(statearr_42928_42943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (8))){
var inst_42871 = (state_42911[(11)]);
var inst_42888 = (state_42911[(8)]);
var inst_42898 = cljs.core.rest.call(null,inst_42871);
var inst_42871__$1 = inst_42898;
var inst_42872 = inst_42888;
var state_42911__$1 = (function (){var statearr_42929 = state_42911;
(statearr_42929[(7)] = inst_42872);

(statearr_42929[(11)] = inst_42871__$1);

return statearr_42929;
})();
var statearr_42930_42944 = state_42911__$1;
(statearr_42930_42944[(2)] = null);

(statearr_42930_42944[(1)] = (2));


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
});})(c__42750__auto__))
;
return ((function (switch__42729__auto__,c__42750__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__42730__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__42730__auto____0 = (function (){
var statearr_42931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42931[(0)] = maze_evolution$evolution$test_population_$_state_machine__42730__auto__);

(statearr_42931[(1)] = (1));

return statearr_42931;
});
var maze_evolution$evolution$test_population_$_state_machine__42730__auto____1 = (function (state_42911){
while(true){
var ret_value__42731__auto__ = (function (){try{while(true){
var result__42732__auto__ = switch__42729__auto__.call(null,state_42911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42732__auto__;
}
break;
}
}catch (e42932){if((e42932 instanceof Object)){
var ex__42733__auto__ = e42932;
var statearr_42933_42945 = state_42911;
(statearr_42933_42945[(5)] = ex__42733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42946 = state_42911;
state_42911 = G__42946;
continue;
} else {
return ret_value__42731__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__42730__auto__ = function(state_42911){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__42730__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__42730__auto____1.call(this,state_42911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__42730__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__42730__auto____0;
maze_evolution$evolution$test_population_$_state_machine__42730__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__42730__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__42730__auto__;
})()
;})(switch__42729__auto__,c__42750__auto__))
})();
var state__42752__auto__ = (function (){var statearr_42934 = f__42751__auto__.call(null);
(statearr_42934[(6)] = c__42750__auto__);

return statearr_42934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42752__auto__);
});})(c__42750__auto__))
);

return c__42750__auto__;
});
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(){
var population = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null));
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (population){
return (function (p1__42947_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__42947_SHARP_);
});})(population))
,cljs.core.deref.call(null,population))));
});
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__42948_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__42948_SHARP_);
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

var new_population_42949 = maze_evolution.evolution.pair_and_reproduce.call(null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_42949], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_42949))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_42949))], null));

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

//# sourceMappingURL=evolution.js.map?rel=1518316015718
