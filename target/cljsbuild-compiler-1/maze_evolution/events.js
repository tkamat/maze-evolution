// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('maze_evolution.evolution');
goog.require('maze_evolution.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return maze_evolution.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_ball,(function (db,p__27344){
var vec__27345 = p__27344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27345,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27345,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$current_DASH_position], null),((function (vec__27345,_,direction){
return (function (current_position){
var maze_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$map], null));
return maze_evolution.evolution.move_if_eligible(direction,maze_map,current_position);
});})(vec__27345,_,direction))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_fitness,(function (db,p__27350){
var vec__27351 = p__27350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27351,(0),null);
var vec__27354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27351,(1),null);
var unique_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27354,(0),null);
var fitness = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27354,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$population], null),((function (vec__27351,_,vec__27354,unique_id,fitness){
return (function (population){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__27351,_,vec__27354,unique_id,fitness){
return (function (p1__27349_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__27349_SHARP_),unique_id);
});})(vec__27351,_,vec__27354,unique_id,fitness))
,population),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__27351,_,vec__27354,unique_id,fitness){
return (function (p1__27348_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__27348_SHARP_),unique_id);
});})(vec__27351,_,vec__27354,unique_id,fitness))
,population)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fitness], null),((function (vec__27351,_,vec__27354,unique_id,fitness){
return (function (old_fitness){
return fitness;
});})(vec__27351,_,vec__27354,unique_id,fitness))
));
});})(vec__27351,_,vec__27354,unique_id,fitness))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__27357){
var vec__27358 = p__27357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27358,(0),null);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27358,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$current_DASH_position], null),((function (vec__27358,_,position){
return (function (old_position){
return position;
});})(vec__27358,_,position))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_new_DASH_move_DASH_sequence,(function (db,p__27361){
var vec__27362 = p__27361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27362,(0),null);
var move_sequence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27362,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$remaining_DASH_moves], null),((function (vec__27362,_,move_sequence){
return (function (old_move_sequence){
return move_sequence;
});})(vec__27362,_,move_sequence))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_new_DASH_unique_DASH_id,(function (db,p__27365){
var vec__27366 = p__27365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27366,(0),null);
var unique_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27366,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze,cljs.core.cst$kw$unique_DASH_id], null),((function (vec__27366,_,unique_id){
return (function (old_id){
return unique_id;
});})(vec__27366,_,unique_id))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_population,(function (db,p__27369){
var vec__27370 = p__27369;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370,(0),null);
var population = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$population], null),((function (vec__27370,_,population){
return (function (old_population){
return population;
});})(vec__27370,_,population))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_generation,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$generation], null),(function (old_generation){
return ["Generation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((function (){var G__27373 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(old_generation," "));
return parseInt(G__27373);
})() + (1)))].join('');
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_individual,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$individual], null),(function (old_individual){
return ["Individual ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((function (){var G__27374 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(old_individual," "));
return parseInt(G__27374);
})() + (1)))].join('');
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_individual,(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$individual], null),(function (old_individual){
return "Individual 1";
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_to_DASH_fitness_DASH_list,(function (db,p__27375){
var vec__27376 = p__27375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376,(0),null);
var new_fitness = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$fitness_DASH_list], null),((function (vec__27376,_,new_fitness){
return (function (old_fitness_list){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old_fitness_list,new_fitness);
});})(vec__27376,_,new_fitness))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_tab,(function (db,p__27379){
var vec__27380 = p__27379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27380,(0),null);
var new_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27380,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab], null),((function (vec__27380,_,new_tab){
return (function (old_tab){
return new_tab;
});})(vec__27380,_,new_tab))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_generations_DASH_to_DASH_run,(function (db,p__27383){
var vec__27384 = p__27383;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27384,(0),null);
var new_generations_to_run = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27384,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$generations_DASH_to_DASH_run], null),((function (vec__27384,_,new_generations_to_run){
return (function (old_num){
return new_generations_to_run;
});})(vec__27384,_,new_generations_to_run))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_max_DASH_fitness_DASH_list,(function (db,p__27387){
var vec__27388 = p__27387;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27388,(0),null);
var new_max_fitness_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27388,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evolution,cljs.core.cst$kw$max_DASH_fitness_DASH_list], null),((function (vec__27388,_,new_max_fitness_list){
return (function (old_list){
return new_max_fitness_list;
});})(vec__27388,_,new_max_fitness_list))
);
}));
