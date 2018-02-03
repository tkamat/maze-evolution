// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('re_frame.core');
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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__46318(s__46319){
return (new cljs.core.LazySeq(null,(function (){
var s__46319__$1 = s__46319;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46319__$1);
if(temp__4657__auto__){
var s__46319__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46319__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__46319__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__46321 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__46320 = (0);
while(true){
if((i__46320 < size__37115__auto__)){
var _ = cljs.core._nth.call(null,c__37114__auto__,i__46320);
cljs.core.chunk_append.call(null,b__46321,maze_evolution.evolution.random_move.call(null));

var G__46322 = (i__46320 + (1));
i__46320 = G__46322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46321),maze_evolution$evolution$create_initial_individual_$_iter__46318.call(null,cljs.core.chunk_rest.call(null,s__46319__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46321),null);
}
} else {
var _ = cljs.core.first.call(null,s__46319__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__46318.call(null,cljs.core.rest.call(null,s__46319__$2)));
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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__46323(s__46324){
return (new cljs.core.LazySeq(null,(function (){
var s__46324__$1 = s__46324;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46324__$1);
if(temp__4657__auto__){
var s__46324__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46324__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__46324__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__46326 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__46325 = (0);
while(true){
if((i__46325 < size__37115__auto__)){
var x = cljs.core._nth.call(null,c__37114__auto__,i__46325);
cljs.core.chunk_append.call(null,b__46326,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__46327 = (i__46325 + (1));
i__46325 = G__46327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46326),maze_evolution$evolution$create_initial_population_$_iter__46323.call(null,cljs.core.chunk_rest.call(null,s__46324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46326),null);
}
} else {
var x = cljs.core.first.call(null,s__46324__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__46323.call(null,cljs.core.rest.call(null,s__46324__$2)));
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
maze_evolution.evolution.test_individual = (function maze_evolution$evolution$test_individual(var_args){
var G__46329 = arguments.length;
switch (G__46329) {
case 2:
return maze_evolution.evolution.test_individual.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return maze_evolution.evolution.test_individual.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maze_evolution.evolution.test_individual.cljs$core$IFn$_invoke$arity$2 = (function (move_sequence,id){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

return maze_evolution.evolution.test_individual.call(null,(0),move_sequence,id);
});

maze_evolution.evolution.test_individual.cljs$core$IFn$_invoke$arity$3 = (function (t,move_sequence,id){
var current_move = cljs.core.nth.call(null,move_sequence,t);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),current_move], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)], null)))], null)], null));

if((t >= (63))){
return "Success";
} else {
return setTimeout(((function (current_move){
return (function (){
return maze_evolution.evolution.test_individual.call(null,(t + (1)),move_sequence,id);
});})(current_move))
,(3));
}
});

maze_evolution.evolution.test_individual.cljs$lang$maxFixedArity = 3;

maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(var_args){
var G__46332 = arguments.length;
switch (G__46332) {
case 1:
return maze_evolution.evolution.test_population.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return maze_evolution.evolution.test_population.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maze_evolution.evolution.test_population.cljs$core$IFn$_invoke$arity$1 = (function (running){
cljs.core.reset_BANG_.call(null,running,true);

return maze_evolution.evolution.test_population.call(null,running,(0));
});

maze_evolution.evolution.test_population.cljs$core$IFn$_invoke$arity$2 = (function (running,t){
var population = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null));
var current_individual = cljs.core.nth.call(null,cljs.core.deref.call(null,population),t);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(current_individual)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_individual)], null));

maze_evolution.evolution.test_individual.call(null,new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(current_individual),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_individual));

if((t >= (63))){
cljs.core.reset_BANG_.call(null,running,false);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));
} else {
return setTimeout(((function (population,current_individual){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)], null));

return maze_evolution.evolution.test_population.call(null,running,(t + (1)));
});})(population,current_individual))
,(400));
}
});

maze_evolution.evolution.test_population.cljs$lang$maxFixedArity = 2;

maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(){
var population = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null));
return cljs.core.take.call(null,(32),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (population){
return (function (p1__46334_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__46334_SHARP_);
});})(population))
,cljs.core.deref.call(null,population))));
});
maze_evolution.evolution.have_child = (function maze_evolution$evolution$have_child(breeding_pair){
var move_sequences = cljs.core.shuffle.call(null,cljs.core.map.call(null,(function (p1__46335_SHARP_){
return new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(p1__46335_SHARP_);
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
if(((cljs.core.count.call(null,baby_sequence) < (64))) && ((cljs.core.rand.call(null) < ((1) / (32))))){
return cljs.core.concat.call(null,baby_sequence,cljs.core.take_last.call(null,((64) - cljs.core.count.call(null,baby_sequence)),cljs.core.second.call(null,move_sequences)));
} else {
if((cljs.core.count.call(null,baby_sequence) < (64))){
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

var new_population_46336 = maze_evolution.evolution.pair_and_reproduce.call(null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-population","update-population",1950427164),new_population_46336], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_46336))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_population_46336))], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

return cljs.core.reset_BANG_.call(null,running,false);
});

//# sourceMappingURL=evolution.js.map?rel=1517586263479
