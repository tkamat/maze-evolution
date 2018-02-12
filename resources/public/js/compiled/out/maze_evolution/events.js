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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),(function (db,p__44145){
var vec__44146 = p__44145;
var _ = cljs.core.nth.call(null,vec__44146,(0),null);
var direction = cljs.core.nth.call(null,vec__44146,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null),((function (vec__44146,_,direction){
return (function (current_position){
var maze_map = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"map","map",1371690461)], null));
return maze_evolution.events.move_if_eligible.call(null,direction,maze_map,current_position);
});})(vec__44146,_,direction))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),(function (db,p__44151){
var vec__44152 = p__44151;
var _ = cljs.core.nth.call(null,vec__44152,(0),null);
var vec__44155 = cljs.core.nth.call(null,vec__44152,(1),null);
var unique_id = cljs.core.nth.call(null,vec__44155,(0),null);
var fitness = cljs.core.nth.call(null,vec__44155,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"population","population",-1209901867)], null),((function (vec__44152,_,vec__44155,unique_id,fitness){
return (function (population){
return cljs.core.conj.call(null,cljs.core.filter.call(null,((function (vec__44152,_,vec__44155,unique_id,fitness){
return (function (p1__44150_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44150_SHARP_),unique_id);
});})(vec__44152,_,vec__44155,unique_id,fitness))
,population),cljs.core.update_in.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__44152,_,vec__44155,unique_id,fitness){
return (function (p1__44149_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44149_SHARP_),unique_id);
});})(vec__44152,_,vec__44155,unique_id,fitness))
,population)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fitness","fitness",-1139386148)], null),((function (vec__44152,_,vec__44155,unique_id,fitness){
return (function (old_fitness){
return fitness;
});})(vec__44152,_,vec__44155,unique_id,fitness))
));
});})(vec__44152,_,vec__44155,unique_id,fitness))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__44158){
var vec__44159 = p__44158;
var _ = cljs.core.nth.call(null,vec__44159,(0),null);
var position = cljs.core.nth.call(null,vec__44159,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null),((function (vec__44159,_,position){
return (function (old_position){
return position;
});})(vec__44159,_,position))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),(function (db,p__44162){
var vec__44163 = p__44162;
var _ = cljs.core.nth.call(null,vec__44163,(0),null);
var move_sequence = cljs.core.nth.call(null,vec__44163,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717)], null),((function (vec__44163,_,move_sequence){
return (function (old_move_sequence){
return move_sequence;
});})(vec__44163,_,move_sequence))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),(function (db,p__44166){
var vec__44167 = p__44166;
var _ = cljs.core.nth.call(null,vec__44167,(0),null);
var unique_id = cljs.core.nth.call(null,vec__44167,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"unique-id","unique-id",1392653271)], null),((function (vec__44167,_,unique_id){
return (function (old_id){
return unique_id;
});})(vec__44167,_,unique_id))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-population","update-population",1950427164),(function (db,p__44170){
var vec__44171 = p__44170;
var _ = cljs.core.nth.call(null,vec__44171,(0),null);
var population = cljs.core.nth.call(null,vec__44171,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"population","population",-1209901867)], null),((function (vec__44171,_,population){
return (function (old_population){
return population;
});})(vec__44171,_,population))
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-to-fitness-list","add-to-fitness-list",-1182529447),(function (db,p__44174){
var vec__44175 = p__44174;
var _ = cljs.core.nth.call(null,vec__44175,(0),null);
var new_fitness = cljs.core.nth.call(null,vec__44175,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"fitness-list","fitness-list",-482294999)], null),((function (vec__44175,_,new_fitness){
return (function (old_fitness_list){
return cljs.core.conj.call(null,old_fitness_list,new_fitness);
});})(vec__44175,_,new_fitness))
);
}));

//# sourceMappingURL=events.js.map?rel=1518465261278
