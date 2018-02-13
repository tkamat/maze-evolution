// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"maze-map","maze-map",-1887029450),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"map","map",1371690461)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"unique-id","unique-id",1392653271),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"unique-id","unique-id",1392653271)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"fitness-map","fitness-map",1754216654),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"fitness-map","fitness-map",1754216654)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fitness-map","fitness-map",1754216654)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null),(function (p__22068,_){
var vec__22069 = p__22068;
var fitness_map = cljs.core.nth.call(null,vec__22069,(0),null);
var current_position = cljs.core.nth.call(null,vec__22069,(1),null);
return cljs.core.nth.call(null,cljs.core.nth.call(null,fitness_map,cljs.core.first.call(null,current_position)),cljs.core.last.call(null,current_position));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"population","population",-1209901867),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"population","population",-1209901867)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"generation","generation",-2132542044)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"individual","individual",-1643964808),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"individual","individual",-1643964808)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"fitness-list","fitness-list",-482294999),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolution","evolution",944820557),new cljs.core.Keyword(null,"fitness-list","fitness-list",-482294999)], null));
}));

//# sourceMappingURL=subs.js.map?rel=1518565224214
