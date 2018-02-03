// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.evolution');
goog.require('cljs.core');
goog.require('re_frame.core');
maze_evolution.evolution.random_move = (function maze_evolution$evolution$random_move(){
var num = maze_evolution.evolution.rnad_int.call(null,(4));
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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_individual_$_iter__44594(s__44595){
return (new cljs.core.LazySeq(null,(function (){
var s__44595__$1 = s__44595;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44595__$1);
if(temp__4657__auto__){
var s__44595__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44595__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__44595__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__44597 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__44596 = (0);
while(true){
if((i__44596 < size__37115__auto__)){
var _ = cljs.core._nth.call(null,c__37114__auto__,i__44596);
cljs.core.chunk_append.call(null,b__44597,maze_evolution.evolution.random_move.call(null));

var G__44598 = (i__44596 + (1));
i__44596 = G__44598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44597),maze_evolution$evolution$create_initial_individual_$_iter__44594.call(null,cljs.core.chunk_rest.call(null,s__44595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44597),null);
}
} else {
var _ = cljs.core.first.call(null,s__44595__$2);
return cljs.core.cons.call(null,maze_evolution.evolution.random_move.call(null),maze_evolution$evolution$create_initial_individual_$_iter__44594.call(null,cljs.core.rest.call(null,s__44595__$2)));
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
var iter__37116__auto__ = (function maze_evolution$evolution$create_initial_population_$_iter__44599(s__44600){
return (new cljs.core.LazySeq(null,(function (){
var s__44600__$1 = s__44600;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44600__$1);
if(temp__4657__auto__){
var s__44600__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44600__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__44600__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__44602 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__44601 = (0);
while(true){
if((i__44601 < size__37115__auto__)){
var x = cljs.core._nth.call(null,c__37114__auto__,i__44601);
cljs.core.chunk_append.call(null,b__44602,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null));

var G__44603 = (i__44601 + (1));
i__44601 = G__44603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44602),maze_evolution$evolution$create_initial_population_$_iter__44599.call(null,cljs.core.chunk_rest.call(null,s__44600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44602),null);
}
} else {
var x = cljs.core.first.call(null,s__44600__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"individual"))].join(''),new cljs.core.Keyword(null,"move-sequence","move-sequence",626569291),maze_evolution.evolution.create_initial_individual.call(null),new cljs.core.Keyword(null,"fitness","fitness",-1139386148),(0)], null),maze_evolution$evolution$create_initial_population_$_iter__44599.call(null,cljs.core.rest.call(null,s__44600__$2)));
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
var G__44605 = arguments.length;
switch (G__44605) {
case 0:
return maze_evolution.evolution.test_individual.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return maze_evolution.evolution.test_individual.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

maze_evolution.evolution.test_individual.cljs$core$IFn$_invoke$arity$0 = (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));

return maze_evolution.evolution.test_individual.call(null,(0));
});

maze_evolution.evolution.test_individual.cljs$core$IFn$_invoke$arity$1 = (function (t){
var remaining_moves = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717)], null));
var unique_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unique-id","unique-id",1392653271)], null));
var current_move = cljs.core.nth.call(null,cljs.core.deref.call(null,remaining_moves),t);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),current_move], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,unique_id),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)], null)))], null)], null));

if((t >= (63))){
return "Success";
} else {
return setTimeout(((function (remaining_moves,unique_id,current_move){
return (function (){
return maze_evolution.evolution.test_individual.call(null,(t + (1)));
});})(remaining_moves,unique_id,current_move))
,(10));
}
});

maze_evolution.evolution.test_individual.cljs$lang$maxFixedArity = 1;

maze_evolution.evolution.test_population = (function maze_evolution$evolution$test_population(var_args){
var G__44608 = arguments.length;
switch (G__44608) {
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

maze_evolution.evolution.test_individual.call(null);

if((t >= (63))){
cljs.core.reset_BANG_.call(null,running,false);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496)], null));
} else {
return setTimeout(((function (population,current_individual){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-individual","next-individual",133059767)], null));

return maze_evolution.evolution.test_population.call(null,running,(t + (1)));
});})(population,current_individual))
,(1000));
}
});

maze_evolution.evolution.test_population.cljs$lang$maxFixedArity = 2;

maze_evolution.evolution.sort_and_prune_population = (function maze_evolution$evolution$sort_and_prune_population(){
var population = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"population","population",-1209901867)], null));
return cljs.core.take.call(null,(32),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (population){
return (function (p1__44610_SHARP_){
return new cljs.core.Keyword(null,"fitness","fitness",-1139386148).cljs$core$IFn$_invoke$arity$1(p1__44610_SHARP_);
});})(population))
,cljs.core.deref.call(null,population))));
});
