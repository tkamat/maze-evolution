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

//# sourceMappingURL=subs.js.map?rel=1517266437277
