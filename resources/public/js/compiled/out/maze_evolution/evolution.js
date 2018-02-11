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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__47939(s__47940){
return (new cljs.core.LazySeq(null,(function (){
var s__47940__$1 = s__47940;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47940__$1);
if(temp__4657__auto__){
var s__47940__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47940__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__47940__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__47942 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__47941 = (0);
while(true){
if((i__47941 < size__37115__auto__)){
var _ = cljs.core._nth.call(null,c__37114__auto__,i__47941);
cljs.core.chunk_append.call(null,b__47942,maze_evolution.evolution.random_move.call(null));

var G__47943 = (i__47941 + (1));
i__47941 = G__47943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47942),maze_evolution$evolution$create_initial_individual_$_iter__47939.call(null,cljs.core.chunk_rest.call(null,s__47940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47942),null);
}
} else {
var _ = cljs.core.first.call(null,s__47940__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__47939.call(null,cljs.core.rest.call(null,s__47940__$2)));
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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__47944(s__47945){
return (new cljs.core.LazySeq(null,(function (){
var s__47945__$1 = s__47945;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47945__$1);
if(temp__4657__auto__){
var s__47945__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47945__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__47945__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__47947 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__47946 = (0);
while(true){
if((i__47946 < size__37115__auto__)){
var x = cljs.core._nth.call(null,c__37114__auto__,i__47946);
cljs.core.chunk_append.call(null,b__47947,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__47948 = (i__47946 + (1));
i__47946 = G__47948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47947),maze_evolution$evolution$create_initial_population_$_iter__47944.call(null,cljs.core.chunk_rest.call(null,s__47945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47947),null);
}
} else {
var x = cljs.core.first.call(null,s__47945__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__47944.call(null,cljs.core.rest.call(null,s__47945__$2)));
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

var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__){
return (function (state_47985){
var state_val_47986 = (state_47985[(1)]);
if((state_val_47986 === (1))){
var inst_47949 = move_sequence;
var state_47985__$1 = (function (){var statearr_47987 = state_47985;
(statearr_47987[(7)] = inst_47949);

return statearr_47987;
})();
var statearr_47988_48002 = state_47985__$1;
(statearr_47988_48002[(2)] = null);

(statearr_47988_48002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47986 === (2))){
var inst_47951 = (state_47985[(8)]);
var inst_47949 = (state_47985[(7)]);
var inst_47951__$1 = cljs.core.first.call(null,inst_47949);
var state_47985__$1 = (function (){var statearr_47989 = state_47985;
(statearr_47989[(8)] = inst_47951__$1);

return statearr_47989;
})();
if(cljs.core.truth_(inst_47951__$1)){
var statearr_47990_48003 = state_47985__$1;
(statearr_47990_48003[(1)] = (4));

} else {
var statearr_47991_48004 = state_47985__$1;
(statearr_47991_48004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47986 === (3))){
var inst_47983 = (state_47985[(2)]);
var state_47985__$1 = state_47985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47985__$1,inst_47983);
} else {
if((state_val_47986 === (4))){
var inst_47951 = (state_47985[(8)]);
var inst_47953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47954 = [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),inst_47951];
var inst_47955 = (new cljs.core.PersistentVector(null,2,(5),inst_47953,inst_47954,null));
var inst_47956 = re_frame.core.dispatch.call(null,inst_47955);
var inst_47957 = cljs.core.async.timeout.call(null,maze_evolution.evolution.move_time);
var state_47985__$1 = (function (){var statearr_47992 = state_47985;
(statearr_47992[(9)] = inst_47956);

return statearr_47992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47985__$1,(7),inst_47957);
} else {
if((state_val_47986 === (5))){
var state_47985__$1 = state_47985;
var statearr_47993_48005 = state_47985__$1;
(statearr_47993_48005[(2)] = null);

(statearr_47993_48005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47986 === (6))){
var inst_47964 = (state_47985[(2)]);
var inst_47965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47966 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47968 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_47969 = (new cljs.core.PersistentVector(null,1,(5),inst_47967,inst_47968,null));
var inst_47970 = re_frame.core.subscribe.call(null,inst_47969);
var inst_47971 = cljs.core.deref.call(null,inst_47970);
var inst_47972 = [id,inst_47971];
var inst_47973 = (new cljs.core.PersistentVector(null,2,(5),inst_47966,inst_47972,null));
var inst_47974 = [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),inst_47973];
var inst_47975 = (new cljs.core.PersistentVector(null,2,(5),inst_47965,inst_47974,null));
var inst_47976 = re_frame.core.dispatch.call(null,inst_47975);
var inst_47977 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47978 = [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)];
var inst_47979 = (new cljs.core.PersistentVector(null,1,(5),inst_47977,inst_47978,null));
var inst_47980 = re_frame.core.subscribe.call(null,inst_47979);
var inst_47981 = cljs.core.deref.call(null,inst_47980);
var state_47985__$1 = (function (){var statearr_47994 = state_47985;
(statearr_47994[(10)] = inst_47964);

(statearr_47994[(11)] = inst_47976);

return statearr_47994;
})();
var statearr_47995_48006 = state_47985__$1;
(statearr_47995_48006[(2)] = inst_47981);

(statearr_47995_48006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47986 === (7))){
var inst_47949 = (state_47985[(7)]);
var inst_47959 = (state_47985[(2)]);
var inst_47960 = cljs.core.rest.call(null,inst_47949);
var inst_47949__$1 = inst_47960;
var state_47985__$1 = (function (){var statearr_47996 = state_47985;
(statearr_47996[(12)] = inst_47959);

(statearr_47996[(7)] = inst_47949__$1);

return statearr_47996;
})();
var statearr_47997_48007 = state_47985__$1;
(statearr_47997_48007[(2)] = null);

(statearr_47997_48007[(1)] = (2));


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
});})(c__45492__auto__))
;
return ((function (switch__45404__auto__,c__45492__auto__){
return (function() {
var maze_evolution$evolution$test_individual_$_state_machine__45405__auto__ = null;
var maze_evolution$evolution$test_individual_$_state_machine__45405__auto____0 = (function (){
var statearr_47998 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47998[(0)] = maze_evolution$evolution$test_individual_$_state_machine__45405__auto__);

(statearr_47998[(1)] = (1));

return statearr_47998;
});
var maze_evolution$evolution$test_individual_$_state_machine__45405__auto____1 = (function (state_47985){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_47985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e47999){if((e47999 instanceof Object)){
var ex__45408__auto__ = e47999;
var statearr_48000_48008 = state_47985;
(statearr_48000_48008[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48009 = state_47985;
state_47985 = G__48009;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
maze_evolution$evolution$test_individual_$_state_machine__45405__auto__ = function(state_47985){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_individual_$_state_machine__45405__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_individual_$_state_machine__45405__auto____1.call(this,state_47985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_individual_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_individual_$_state_machine__45405__auto____0;
maze_evolution$evolution$test_individual_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_individual_$_state_machine__45405__auto____1;
return maze_evolution$evolution$test_individual_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__))
})();
var state__45494__auto__ = (function (){var statearr_48001 = f__45493__auto__.call(null);
(statearr_48001[(6)] = c__45492__auto__);

return statearr_48001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__))
);

return c__45492__auto__;
});
maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(running){
var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__){
return (function (state_48055){
var state_val_48056 = (state_48055[(1)]);
if((state_val_48056 === (7))){
var inst_48032 = (state_48055[(7)]);
var inst_48016 = (state_48055[(8)]);
var inst_48035 = (state_48055[(2)]);
var inst_48036 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48037 = [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)];
var inst_48038 = (new cljs.core.PersistentVector(null,1,(5),inst_48036,inst_48037,null));
var inst_48039 = re_frame.core.dispatch.call(null,inst_48038);
var inst_48040 = (inst_48032 > inst_48016);
var state_48055__$1 = (function (){var statearr_48057 = state_48055;
(statearr_48057[(9)] = inst_48035);

(statearr_48057[(10)] = inst_48039);

return statearr_48057;
})();
if(cljs.core.truth_(inst_48040)){
var statearr_48058_48079 = state_48055__$1;
(statearr_48058_48079[(1)] = (8));

} else {
var statearr_48059_48080 = state_48055__$1;
(statearr_48059_48080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48056 === (1))){
var inst_48010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48011 = [new cljs.core.Keyword(null,"population","population",-1209901867)];
var inst_48012 = (new cljs.core.PersistentVector(null,1,(5),inst_48010,inst_48011,null));
var inst_48013 = re_frame.core.subscribe.call(null,inst_48012);
var inst_48014 = cljs.core.deref.call(null,inst_48013);
var inst_48015 = inst_48014;
var inst_48016 = (0);
var state_48055__$1 = (function (){var statearr_48060 = state_48055;
(statearr_48060[(8)] = inst_48016);

(statearr_48060[(11)] = inst_48015);

return statearr_48060;
})();
var statearr_48061_48081 = state_48055__$1;
(statearr_48061_48081[(2)] = null);

(statearr_48061_48081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48056 === (4))){
var inst_48018 = (state_48055[(12)]);
var inst_48020 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48021 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_48018);
var inst_48022 = [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),inst_48021];
var inst_48023 = (new cljs.core.PersistentVector(null,2,(5),inst_48020,inst_48022,null));
var inst_48024 = re_frame.core.dispatch.call(null,inst_48023);
var inst_48025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48026 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_48018);
var inst_48027 = [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),inst_48026];
var inst_48028 = (new cljs.core.PersistentVector(null,2,(5),inst_48025,inst_48027,null));
var inst_48029 = re_frame.core.dispatch.call(null,inst_48028);
var inst_48030 = new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(inst_48018);
var inst_48031 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_48018);
var inst_48032 = maze_evolution.evolution.test_individual.call(null,inst_48030,inst_48031);
var inst_48033 = cljs.core.async.timeout.call(null,maze_evolution.evolution.individual_time);
var state_48055__$1 = (function (){var statearr_48062 = state_48055;
(statearr_48062[(7)] = inst_48032);

(statearr_48062[(13)] = inst_48029);

(statearr_48062[(14)] = inst_48024);

return statearr_48062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48055__$1,(7),inst_48033);
} else {
if((state_val_48056 === (6))){
var inst_48016 = (state_48055[(8)]);
var inst_48051 = (state_48055[(2)]);
var state_48055__$1 = (function (){var statearr_48063 = state_48055;
(statearr_48063[(15)] = inst_48051);

return statearr_48063;
})();
var statearr_48064_48082 = state_48055__$1;
(statearr_48064_48082[(2)] = inst_48016);

(statearr_48064_48082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48056 === (3))){
var inst_48053 = (state_48055[(2)]);
var state_48055__$1 = state_48055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48055__$1,inst_48053);
} else {
if((state_val_48056 === (2))){
var inst_48018 = (state_48055[(12)]);
var inst_48015 = (state_48055[(11)]);
var inst_48018__$1 = cljs.core.first.call(null,inst_48015);
var state_48055__$1 = (function (){var statearr_48066 = state_48055;
(statearr_48066[(12)] = inst_48018__$1);

return statearr_48066;
})();
if(cljs.core.truth_(inst_48018__$1)){
var statearr_48067_48083 = state_48055__$1;
(statearr_48067_48083[(1)] = (4));

} else {
var statearr_48068_48084 = state_48055__$1;
(statearr_48068_48084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48056 === (9))){
var inst_48016 = (state_48055[(8)]);
var inst_48015 = (state_48055[(11)]);
var inst_48045 = cljs.core.rest.call(null,inst_48015);
var tmp48065 = inst_48016;
var inst_48015__$1 = inst_48045;
var inst_48016__$1 = tmp48065;
var state_48055__$1 = (function (){var statearr_48069 = state_48055;
(statearr_48069[(8)] = inst_48016__$1);

(statearr_48069[(11)] = inst_48015__$1);

return statearr_48069;
})();
var statearr_48070_48085 = state_48055__$1;
(statearr_48070_48085[(2)] = null);

(statearr_48070_48085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48056 === (5))){
var state_48055__$1 = state_48055;
var statearr_48071_48086 = state_48055__$1;
(statearr_48071_48086[(2)] = null);

(statearr_48071_48086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48056 === (10))){
var inst_48048 = (state_48055[(2)]);
var state_48055__$1 = state_48055;
var statearr_48072_48087 = state_48055__$1;
(statearr_48072_48087[(2)] = inst_48048);

(statearr_48072_48087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48056 === (8))){
var inst_48032 = (state_48055[(7)]);
var inst_48015 = (state_48055[(11)]);
var inst_48042 = cljs.core.rest.call(null,inst_48015);
var inst_48015__$1 = inst_48042;
var inst_48016 = inst_48032;
var state_48055__$1 = (function (){var statearr_48073 = state_48055;
(statearr_48073[(8)] = inst_48016);

(statearr_48073[(11)] = inst_48015__$1);

return statearr_48073;
})();
var statearr_48074_48088 = state_48055__$1;
(statearr_48074_48088[(2)] = null);

(statearr_48074_48088[(1)] = (2));


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
});})(c__45492__auto__))
;
return ((function (switch__45404__auto__,c__45492__auto__){
return (function() {
var maze_evolution$evolution$test_population_$_state_machine__45405__auto__ = null;
var maze_evolution$evolution$test_population_$_state_machine__45405__auto____0 = (function (){
var statearr_48075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48075[(0)] = maze_evolution$evolution$test_population_$_state_machine__45405__auto__);

(statearr_48075[(1)] = (1));

return statearr_48075;
});
var maze_evolution$evolution$test_population_$_state_machine__45405__auto____1 = (function (state_48055){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_48055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e48076){if((e48076 instanceof Object)){
var ex__45408__auto__ = e48076;
var statearr_48077_48089 = state_48055;
(statearr_48077_48089[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48090 = state_48055;
state_48055 = G__48090;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
maze_evolution$evolution$test_population_$_state_machine__45405__auto__ = function(state_48055){
switch(arguments.length){
case 0:
return maze_evolution$evolution$test_population_$_state_machine__45405__auto____0.call(this);
case 1:
return maze_evolution$evolution$test_population_$_state_machine__45405__auto____1.call(this,state_48055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
maze_evolution$evolution$test_population_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = maze_evolution$evolution$test_population_$_state_machine__45405__auto____0;
maze_evolution$evolution$test_population_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = maze_evolution$evolution$test_population_$_state_machine__45405__auto____1;
return maze_evolution$evolution$test_population_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__))
})();
var state__45494__auto__ = (function (){var statearr_48078 = f__45493__auto__.call(null);
(statearr_48078[(6)] = c__45492__auto__);

return statearr_48078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__))
);

return c__45492__auto__;
});
maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(){
var population = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null));
return cljs.core.take.call(null,(maze_evolution.evolution.population_size / (2)),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (population){
return (function (p1__48091_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__48091_SHARP_);
});})(population))
,cljs.core.deref.call(null,population))));
});
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__48092_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__48092_SHARP_);
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

var new_population_48093 = maze_evolution.evolution.pair_and_reproduce.call(null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_48093], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_48093))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_48093))], null));

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

//# sourceMappingURL=evolution.js.map?rel=1518330184034
