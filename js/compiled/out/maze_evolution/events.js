// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('maze_evolution.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return maze_evolution.db.default_db;
}));
maze_evolution.events.move_if_eligible = (function maze_evolution$events$move_if_eligible(direction,maze_map,current_position){
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),(function (db,p__46341){
var vec__46342 = p__46341;
var _ = cljs.core.nth.call(null,vec__46342,(0),null);
var direction = cljs.core.nth.call(null,vec__46342,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null),((function (vec__46342,_,direction){
return (function (current_position){
var maze_map = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"map","map",1371690461)], null));
return maze_evolution.events.move_if_eligible.call(null,direction,maze_map,current_position);
});})(vec__46342,_,direction))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),(function (db,p__46347){
var vec__46348 = p__46347;
var _ = cljs.core.nth.call(null,vec__46348,(0),null);
var vec__46351 = cljs.core.nth.call(null,vec__46348,(1),null);
var unique_id = cljs.core.nth.call(null,vec__46351,(0),null);
var fitness = cljs.core.nth.call(null,vec__46351,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"population","population",-1209901867)], null),((function (vec__46348,_,vec__46351,unique_id,fitness){
return (function (population){
return cljs.core.conj.call(null,cljs.core.filter.call(null,((function (vec__46348,_,vec__46351,unique_id,fitness){
return (function (p1__46345_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46345_SHARP_),unique_id);
});})(vec__46348,_,vec__46351,unique_id,fitness))
,population),cljs.core.update_in.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__46348,_,vec__46351,unique_id,fitness){
return (function (p1__46346_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46346_SHARP_),unique_id);
});})(vec__46348,_,vec__46351,unique_id,fitness))
,population)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fitness","fitness",-1139386148)], null),((function (vec__46348,_,vec__46351,unique_id,fitness){
return (function (old_fitness){
return fitness;
});})(vec__46348,_,vec__46351,unique_id,fitness))
));
});})(vec__46348,_,vec__46351,unique_id,fitness))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__46354){
var vec__46355 = p__46354;
var _ = cljs.core.nth.call(null,vec__46355,(0),null);
var position = cljs.core.nth.call(null,vec__46355,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null),((function (vec__46355,_,position){
return (function (old_position){
return position;
});})(vec__46355,_,position))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),(function (db,p__46358){
var vec__46359 = p__46358;
var _ = cljs.core.nth.call(null,vec__46359,(0),null);
var move_sequence = cljs.core.nth.call(null,vec__46359,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717)], null),((function (vec__46359,_,move_sequence){
return (function (old_move_sequence){
return move_sequence;
});})(vec__46359,_,move_sequence))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),(function (db,p__46362){
var vec__46363 = p__46362;
var _ = cljs.core.nth.call(null,vec__46363,(0),null);
var unique_id = cljs.core.nth.call(null,vec__46363,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"unique-id","unique-id",1392653271)], null),((function (vec__46363,_,unique_id){
return (function (old_id){
return unique_id;
});})(vec__46363,_,unique_id))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-population","update-population",1950427164),(function (db,p__46366){
var vec__46367 = p__46366;
var _ = cljs.core.nth.call(null,vec__46367,(0),null);
var population = cljs.core.nth.call(null,vec__46367,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"population","population",-1209901867)], null),((function (vec__46367,_,population){
return (function (old_population){
return population;
});})(vec__46367,_,population))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"next-generation","next-generation",-1483119641),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"generation","generation",-2132542044)], null),(function (old_generation){
return ["Generation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((parseInt(cljs.core.last.call(null,clojure.string.split.call(null,old_generation," "))) + (1)))].join('');
}));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"next-individual","next-individual",133059767),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"individual","individual",-1643964808)], null),(function (old_individual){
return ["Individual ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((parseInt(cljs.core.last.call(null,clojure.string.split.call(null,old_individual," "))) + (1)))].join('');
}));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-individual","reset-individual",147559496),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"individual","individual",-1643964808)], null),(function (old_individual){
return "Individual 1";
}));
}));

//# sourceMappingURL=events.js.map?rel=1517586263523
