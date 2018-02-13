// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.events');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('maze_evolution.evolution');
goog.require('maze_evolution.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return maze_evolution.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-ball","move-ball",-1415733914),(function (db,p__20932){
var vec__20933 = p__20932;
var _ = cljs.core.nth.call(null,vec__20933,(0),null);
var direction = cljs.core.nth.call(null,vec__20933,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null),((function (vec__20933,_,direction){
return (function (current_position){
var maze_map = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"map","map",1371690461)], null));
return maze_evolution.evolution.move_if_eligible.call(null,direction,maze_map,current_position);
});})(vec__20933,_,direction))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-fitness","update-fitness",925779649),(function (db,p__20938){
var vec__20939 = p__20938;
var _ = cljs.core.nth.call(null,vec__20939,(0),null);
var vec__20942 = cljs.core.nth.call(null,vec__20939,(1),null);
var unique_id = cljs.core.nth.call(null,vec__20942,(0),null);
var fitness = cljs.core.nth.call(null,vec__20942,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"population","population",-1209901867)], null),((function (vec__20939,_,vec__20942,unique_id,fitness){
return (function (population){
return cljs.core.conj.call(null,cljs.core.filter.call(null,((function (vec__20939,_,vec__20942,unique_id,fitness){
return (function (p1__20937_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20937_SHARP_),unique_id);
});})(vec__20939,_,vec__20942,unique_id,fitness))
,population),cljs.core.update_in.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__20939,_,vec__20942,unique_id,fitness){
return (function (p1__20936_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20936_SHARP_),unique_id);
});})(vec__20939,_,vec__20942,unique_id,fitness))
,population)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fitness","fitness",-1139386148)], null),((function (vec__20939,_,vec__20942,unique_id,fitness){
return (function (old_fitness){
return fitness;
});})(vec__20939,_,vec__20942,unique_id,fitness))
));
});})(vec__20939,_,vec__20942,unique_id,fitness))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__20945){
var vec__20946 = p__20945;
var _ = cljs.core.nth.call(null,vec__20946,(0),null);
var position = cljs.core.nth.call(null,vec__20946,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null),((function (vec__20946,_,position){
return (function (old_position){
return position;
});})(vec__20946,_,position))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-new-move-sequence","set-new-move-sequence",-1388898022),(function (db,p__20949){
var vec__20950 = p__20949;
var _ = cljs.core.nth.call(null,vec__20950,(0),null);
var move_sequence = cljs.core.nth.call(null,vec__20950,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717)], null),((function (vec__20950,_,move_sequence){
return (function (old_move_sequence){
return move_sequence;
});})(vec__20950,_,move_sequence))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-new-unique-id","set-new-unique-id",1113107008),(function (db,p__20953){
var vec__20954 = p__20953;
var _ = cljs.core.nth.call(null,vec__20954,(0),null);
var unique_id = cljs.core.nth.call(null,vec__20954,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"unique-id","unique-id",1392653271)], null),((function (vec__20954,_,unique_id){
return (function (old_id){
return unique_id;
});})(vec__20954,_,unique_id))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-population","update-population",1950427164),(function (db,p__20957){
var vec__20958 = p__20957;
var _ = cljs.core.nth.call(null,vec__20958,(0),null);
var population = cljs.core.nth.call(null,vec__20958,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"population","population",-1209901867)], null),((function (vec__20958,_,population){
return (function (old_population){
return population;
});})(vec__20958,_,population))
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-to-fitness-list","add-to-fitness-list",-1182529447),(function (db,p__20961){
var vec__20962 = p__20961;
var _ = cljs.core.nth.call(null,vec__20962,(0),null);
var new_fitness = cljs.core.nth.call(null,vec__20962,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"fitness-list","fitness-list",-482294999)], null),((function (vec__20962,_,new_fitness){
return (function (old_fitness_list){
return cljs.core.conj.call(null,old_fitness_list,new_fitness);
});})(vec__20962,_,new_fitness))
);
}));

//# sourceMappingURL=events.js.map?rel=1518565222089
