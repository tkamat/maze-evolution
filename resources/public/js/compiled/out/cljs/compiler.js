// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__40473 = s;
var map__40473__$1 = ((((!((map__40473 == null)))?((((map__40473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40473):map__40473);
var name = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__40476 = info;
var map__40477 = G__40476;
var map__40477__$1 = ((((!((map__40477 == null)))?((((map__40477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40477):map__40477);
var shadow = cljs.core.get.call(null,map__40477__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__40476__$1 = G__40476;
while(true){
var d__$2 = d__$1;
var map__40479 = G__40476__$1;
var map__40479__$1 = ((((!((map__40479 == null)))?((((map__40479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40479):map__40479);
var shadow__$1 = cljs.core.get.call(null,map__40479__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__40481 = (d__$2 + (1));
var G__40482 = shadow__$1;
d__$1 = G__40481;
G__40476__$1 = G__40482;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__40483){
var map__40484 = p__40483;
var map__40484__$1 = ((((!((map__40484 == null)))?((((map__40484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40484):map__40484);
var name_var = map__40484__$1;
var name = cljs.core.get.call(null,map__40484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__40484__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__40486 = info;
var map__40486__$1 = ((((!((map__40486 == null)))?((((map__40486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40486):map__40486);
var ns = cljs.core.get.call(null,map__40486__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__40486__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__40489 = arguments.length;
switch (G__40489) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__40491 = cp;
switch (G__40491) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__40493_40497 = cljs.core.seq.call(null,s);
var chunk__40494_40498 = null;
var count__40495_40499 = (0);
var i__40496_40500 = (0);
while(true){
if((i__40496_40500 < count__40495_40499)){
var c_40501 = cljs.core._nth.call(null,chunk__40494_40498,i__40496_40500);
sb.append(cljs.compiler.escape_char.call(null,c_40501));

var G__40502 = seq__40493_40497;
var G__40503 = chunk__40494_40498;
var G__40504 = count__40495_40499;
var G__40505 = (i__40496_40500 + (1));
seq__40493_40497 = G__40502;
chunk__40494_40498 = G__40503;
count__40495_40499 = G__40504;
i__40496_40500 = G__40505;
continue;
} else {
var temp__4657__auto___40506 = cljs.core.seq.call(null,seq__40493_40497);
if(temp__4657__auto___40506){
var seq__40493_40507__$1 = temp__4657__auto___40506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40493_40507__$1)){
var c__37147__auto___40508 = cljs.core.chunk_first.call(null,seq__40493_40507__$1);
var G__40509 = cljs.core.chunk_rest.call(null,seq__40493_40507__$1);
var G__40510 = c__37147__auto___40508;
var G__40511 = cljs.core.count.call(null,c__37147__auto___40508);
var G__40512 = (0);
seq__40493_40497 = G__40509;
chunk__40494_40498 = G__40510;
count__40495_40499 = G__40511;
i__40496_40500 = G__40512;
continue;
} else {
var c_40513 = cljs.core.first.call(null,seq__40493_40507__$1);
sb.append(cljs.compiler.escape_char.call(null,c_40513));

var G__40514 = cljs.core.next.call(null,seq__40493_40507__$1);
var G__40515 = null;
var G__40516 = (0);
var G__40517 = (0);
seq__40493_40497 = G__40514;
chunk__40494_40498 = G__40515;
count__40495_40499 = G__40516;
i__40496_40500 = G__40517;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__37265__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37266__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37267__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37268__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37269__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37269__auto__,method_table__37265__auto__,prefer_table__37266__auto__,method_cache__37267__auto__,cached_hierarchy__37268__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__38870__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__38870__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__40518_40523 = ast;
var map__40518_40524__$1 = ((((!((map__40518_40523 == null)))?((((map__40518_40523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40518_40523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40518_40523):map__40518_40523);
var env_40525 = cljs.core.get.call(null,map__40518_40524__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_40525))){
var map__40520_40526 = env_40525;
var map__40520_40527__$1 = ((((!((map__40520_40526 == null)))?((((map__40520_40526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40520_40526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40520_40526):map__40520_40526);
var line_40528 = cljs.core.get.call(null,map__40520_40527__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40529 = cljs.core.get.call(null,map__40520_40527__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__40520_40526,map__40520_40527__$1,line_40528,column_40529,map__40518_40523,map__40518_40524__$1,env_40525,val__38870__auto__){
return (function (m){
var minfo = (function (){var G__40522 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__40522,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__40522;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_40528 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__40520_40526,map__40520_40527__$1,line_40528,column_40529,map__40518_40523,map__40518_40524__$1,env_40525,val__38870__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_40529)?(column_40529 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__40520_40526,map__40520_40527__$1,line_40528,column_40529,map__40518_40523,map__40518_40524__$1,env_40525,val__38870__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__40520_40526,map__40520_40527__$1,line_40528,column_40529,map__40518_40523,map__40518_40524__$1,env_40525,val__38870__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__40520_40526,map__40520_40527__$1,line_40528,column_40529,map__40518_40523,map__40518_40524__$1,env_40525,val__38870__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__40520_40526,map__40520_40527__$1,line_40528,column_40529,map__40518_40523,map__40518_40524__$1,env_40525,val__38870__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__38870__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__37486__auto__ = [];
var len__37479__auto___40536 = arguments.length;
var i__37480__auto___40537 = (0);
while(true){
if((i__37480__auto___40537 < len__37479__auto___40536)){
args__37486__auto__.push((arguments[i__37480__auto___40537]));

var G__40538 = (i__37480__auto___40537 + (1));
i__37480__auto___40537 = G__40538;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__40532_40539 = cljs.core.seq.call(null,xs);
var chunk__40533_40540 = null;
var count__40534_40541 = (0);
var i__40535_40542 = (0);
while(true){
if((i__40535_40542 < count__40534_40541)){
var x_40543 = cljs.core._nth.call(null,chunk__40533_40540,i__40535_40542);
if((x_40543 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_40543)){
cljs.compiler.emit.call(null,x_40543);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_40543)){
cljs.core.apply.call(null,cljs.compiler.emits,x_40543);
} else {
if(goog.isFunction(x_40543)){
x_40543.call(null);
} else {
var s_40544 = cljs.core.print_str.call(null,x_40543);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__40532_40539,chunk__40533_40540,count__40534_40541,i__40535_40542,s_40544,x_40543){
return (function (p1__40530_SHARP_){
return (p1__40530_SHARP_ + cljs.core.count.call(null,s_40544));
});})(seq__40532_40539,chunk__40533_40540,count__40534_40541,i__40535_40542,s_40544,x_40543))
);
}

cljs.core.print.call(null,s_40544);

}
}
}
}

var G__40545 = seq__40532_40539;
var G__40546 = chunk__40533_40540;
var G__40547 = count__40534_40541;
var G__40548 = (i__40535_40542 + (1));
seq__40532_40539 = G__40545;
chunk__40533_40540 = G__40546;
count__40534_40541 = G__40547;
i__40535_40542 = G__40548;
continue;
} else {
var temp__4657__auto___40549 = cljs.core.seq.call(null,seq__40532_40539);
if(temp__4657__auto___40549){
var seq__40532_40550__$1 = temp__4657__auto___40549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40532_40550__$1)){
var c__37147__auto___40551 = cljs.core.chunk_first.call(null,seq__40532_40550__$1);
var G__40552 = cljs.core.chunk_rest.call(null,seq__40532_40550__$1);
var G__40553 = c__37147__auto___40551;
var G__40554 = cljs.core.count.call(null,c__37147__auto___40551);
var G__40555 = (0);
seq__40532_40539 = G__40552;
chunk__40533_40540 = G__40553;
count__40534_40541 = G__40554;
i__40535_40542 = G__40555;
continue;
} else {
var x_40556 = cljs.core.first.call(null,seq__40532_40550__$1);
if((x_40556 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_40556)){
cljs.compiler.emit.call(null,x_40556);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_40556)){
cljs.core.apply.call(null,cljs.compiler.emits,x_40556);
} else {
if(goog.isFunction(x_40556)){
x_40556.call(null);
} else {
var s_40557 = cljs.core.print_str.call(null,x_40556);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__40532_40539,chunk__40533_40540,count__40534_40541,i__40535_40542,s_40557,x_40556,seq__40532_40550__$1,temp__4657__auto___40549){
return (function (p1__40530_SHARP_){
return (p1__40530_SHARP_ + cljs.core.count.call(null,s_40557));
});})(seq__40532_40539,chunk__40533_40540,count__40534_40541,i__40535_40542,s_40557,x_40556,seq__40532_40550__$1,temp__4657__auto___40549))
);
}

cljs.core.print.call(null,s_40557);

}
}
}
}

var G__40558 = cljs.core.next.call(null,seq__40532_40550__$1);
var G__40559 = null;
var G__40560 = (0);
var G__40561 = (0);
seq__40532_40539 = G__40558;
chunk__40533_40540 = G__40559;
count__40534_40541 = G__40560;
i__40535_40542 = G__40561;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq40531){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40531));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__37486__auto__ = [];
var len__37479__auto___40567 = arguments.length;
var i__37480__auto___40568 = (0);
while(true){
if((i__37480__auto___40568 < len__37479__auto___40567)){
args__37486__auto__.push((arguments[i__37480__auto___40568]));

var G__40569 = (i__37480__auto___40568 + (1));
i__37480__auto___40568 = G__40569;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_40563_40570 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_40563_40570;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__40564){
var map__40565 = p__40564;
var map__40565__$1 = ((((!((map__40565 == null)))?((((map__40565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40565):map__40565);
var m = map__40565__$1;
var gen_line = cljs.core.get.call(null,map__40565__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq40562){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40562));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__37337__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40571_40573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40572_40574 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40571_40573,_STAR_print_fn_STAR_40572_40574,sb__37337__auto__){
return (function (x__37338__auto__){
return sb__37337__auto__.append(x__37338__auto__);
});})(_STAR_print_newline_STAR_40571_40573,_STAR_print_fn_STAR_40572_40574,sb__37337__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40572_40574;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40571_40573;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__37337__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__37265__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37266__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37267__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37268__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37269__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37269__auto__,method_table__37265__auto__,prefer_table__37266__auto__,method_cache__37267__auto__,cached_hierarchy__37268__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__40575 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__40575,(0),null);
var flags = cljs.core.nth.call(null,vec__40575,(1),null);
var pattern = cljs.core.nth.call(null,vec__40575,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__4655__auto__ = (function (){var and__36296__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__36296__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__36296__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__4655__auto__ = (function (){var and__36296__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__36296__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__36296__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__40579){
var map__40580 = p__40579;
var map__40580__$1 = ((((!((map__40580 == null)))?((((map__40580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40580):map__40580);
var ast = map__40580__$1;
var info = cljs.core.get.call(null,map__40580__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__40580__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__40580__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__40582 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__40582__$1 = ((((!((map__40582 == null)))?((((map__40582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40582):map__40582);
var cenv = map__40582__$1;
var options = cljs.core.get.call(null,map__40582__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__36308__auto__ = js_module_name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__40584 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__36296__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__36296__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__36296__auto__;
}
})())){
return clojure.set.difference.call(null,G__40584,cljs.analyzer.es5_allowed);
} else {
return G__40584;
}
})();
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__40585 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__40585,reserved);
} else {
return G__40585;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__40586){
var map__40587 = p__40586;
var map__40587__$1 = ((((!((map__40587 == null)))?((((map__40587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40587):map__40587);
var arg = map__40587__$1;
var env = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__40589 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__40589__$1 = ((((!((map__40589 == null)))?((((map__40589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40589):map__40589);
var name = cljs.core.get.call(null,map__40589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__40591){
var map__40592 = p__40591;
var map__40592__$1 = ((((!((map__40592 == null)))?((((map__40592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40592):map__40592);
var expr = cljs.core.get.call(null,map__40592__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__40592__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__40592__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__40594_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40594_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__40595){
var map__40596 = p__40595;
var map__40596__$1 = ((((!((map__40596 == null)))?((((map__40596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40596):map__40596);
var env = cljs.core.get.call(null,map__40596__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__40596__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__40596__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__40598){
var map__40599 = p__40598;
var map__40599__$1 = ((((!((map__40599 == null)))?((((map__40599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40599):map__40599);
var items = cljs.core.get.call(null,map__40599__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40599__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__40601){
var map__40602 = p__40601;
var map__40602__$1 = ((((!((map__40602 == null)))?((((map__40602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40602):map__40602);
var items = cljs.core.get.call(null,map__40602__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_40604 = cljs.core.count.call(null,items);
if((cnt_40604 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_40604,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__40605_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40605_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__40606){
var map__40607 = p__40606;
var map__40607__$1 = ((((!((map__40607 == null)))?((((map__40607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40607):map__40607);
var items = cljs.core.get.call(null,map__40607__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__40607__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__40609){
var map__40610 = p__40609;
var map__40610__$1 = ((((!((map__40610 == null)))?((((map__40610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40610):map__40610);
var items = cljs.core.get.call(null,map__40610__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__40610__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__40610__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___40628 = cljs.core.seq.call(null,items);
if(temp__4657__auto___40628){
var items_40629__$1 = temp__4657__auto___40628;
var vec__40612_40630 = items_40629__$1;
var seq__40613_40631 = cljs.core.seq.call(null,vec__40612_40630);
var first__40614_40632 = cljs.core.first.call(null,seq__40613_40631);
var seq__40613_40633__$1 = cljs.core.next.call(null,seq__40613_40631);
var vec__40615_40634 = first__40614_40632;
var k_40635 = cljs.core.nth.call(null,vec__40615_40634,(0),null);
var v_40636 = cljs.core.nth.call(null,vec__40615_40634,(1),null);
var r_40637 = seq__40613_40633__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_40635),"\": ",v_40636);

var seq__40618_40638 = cljs.core.seq.call(null,r_40637);
var chunk__40619_40639 = null;
var count__40620_40640 = (0);
var i__40621_40641 = (0);
while(true){
if((i__40621_40641 < count__40620_40640)){
var vec__40622_40642 = cljs.core._nth.call(null,chunk__40619_40639,i__40621_40641);
var k_40643__$1 = cljs.core.nth.call(null,vec__40622_40642,(0),null);
var v_40644__$1 = cljs.core.nth.call(null,vec__40622_40642,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_40643__$1),"\": ",v_40644__$1);

var G__40645 = seq__40618_40638;
var G__40646 = chunk__40619_40639;
var G__40647 = count__40620_40640;
var G__40648 = (i__40621_40641 + (1));
seq__40618_40638 = G__40645;
chunk__40619_40639 = G__40646;
count__40620_40640 = G__40647;
i__40621_40641 = G__40648;
continue;
} else {
var temp__4657__auto___40649__$1 = cljs.core.seq.call(null,seq__40618_40638);
if(temp__4657__auto___40649__$1){
var seq__40618_40650__$1 = temp__4657__auto___40649__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40618_40650__$1)){
var c__37147__auto___40651 = cljs.core.chunk_first.call(null,seq__40618_40650__$1);
var G__40652 = cljs.core.chunk_rest.call(null,seq__40618_40650__$1);
var G__40653 = c__37147__auto___40651;
var G__40654 = cljs.core.count.call(null,c__37147__auto___40651);
var G__40655 = (0);
seq__40618_40638 = G__40652;
chunk__40619_40639 = G__40653;
count__40620_40640 = G__40654;
i__40621_40641 = G__40655;
continue;
} else {
var vec__40625_40656 = cljs.core.first.call(null,seq__40618_40650__$1);
var k_40657__$1 = cljs.core.nth.call(null,vec__40625_40656,(0),null);
var v_40658__$1 = cljs.core.nth.call(null,vec__40625_40656,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_40657__$1),"\": ",v_40658__$1);

var G__40659 = cljs.core.next.call(null,seq__40618_40650__$1);
var G__40660 = null;
var G__40661 = (0);
var G__40662 = (0);
seq__40618_40638 = G__40659;
chunk__40619_40639 = G__40660;
count__40620_40640 = G__40661;
i__40621_40641 = G__40662;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__40663){
var map__40664 = p__40663;
var map__40664__$1 = ((((!((map__40664 == null)))?((((map__40664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40664):map__40664);
var items = cljs.core.get.call(null,map__40664__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__40664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__40664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__40664__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__40666){
var map__40667 = p__40666;
var map__40667__$1 = ((((!((map__40667 == null)))?((((map__40667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40667):map__40667);
var form = cljs.core.get.call(null,map__40667__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__40667__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__40669){
var map__40670 = p__40669;
var map__40670__$1 = ((((!((map__40670 == null)))?((((map__40670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40670):map__40670);
var op = cljs.core.get.call(null,map__40670__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__40670__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__40670__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__36308__auto__ = (function (){var and__36296__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__36296__auto__){
var and__36296__auto____$1 = form;
if(cljs.core.truth_(and__36296__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__36296__auto____$1;
}
} else {
return and__36296__auto__;
}
})();
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
var and__36296__auto__ = !((const_expr == null));
if(and__36296__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__36296__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__40672){
var map__40673 = p__40672;
var map__40673__$1 = ((((!((map__40673 == null)))?((((map__40673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40673):map__40673);
var op = cljs.core.get.call(null,map__40673__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__40673__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__40673__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__36308__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__36308__auto__){
return or__36308__auto__;
} else {
var and__36296__auto__ = !((const_expr == null));
if(and__36296__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__36296__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__36308__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__40675){
var map__40676 = p__40675;
var map__40676__$1 = ((((!((map__40676 == null)))?((((map__40676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40676):map__40676);
var test = cljs.core.get.call(null,map__40676__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__40676__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__40676__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__40676__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__40676__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__36308__auto__ = unchecked;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__40678){
var map__40679 = p__40678;
var map__40679__$1 = ((((!((map__40679 == null)))?((((map__40679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40679):map__40679);
var v = cljs.core.get.call(null,map__40679__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__40679__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__40679__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__40679__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__40679__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__40681_40699 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__40682_40700 = null;
var count__40683_40701 = (0);
var i__40684_40702 = (0);
while(true){
if((i__40684_40702 < count__40683_40701)){
var vec__40685_40703 = cljs.core._nth.call(null,chunk__40682_40700,i__40684_40702);
var ts_40704 = cljs.core.nth.call(null,vec__40685_40703,(0),null);
var then_40705 = cljs.core.nth.call(null,vec__40685_40703,(1),null);
var seq__40688_40706 = cljs.core.seq.call(null,ts_40704);
var chunk__40689_40707 = null;
var count__40690_40708 = (0);
var i__40691_40709 = (0);
while(true){
if((i__40691_40709 < count__40690_40708)){
var test_40710 = cljs.core._nth.call(null,chunk__40689_40707,i__40691_40709);
cljs.compiler.emitln.call(null,"case ",test_40710,":");

var G__40711 = seq__40688_40706;
var G__40712 = chunk__40689_40707;
var G__40713 = count__40690_40708;
var G__40714 = (i__40691_40709 + (1));
seq__40688_40706 = G__40711;
chunk__40689_40707 = G__40712;
count__40690_40708 = G__40713;
i__40691_40709 = G__40714;
continue;
} else {
var temp__4657__auto___40715 = cljs.core.seq.call(null,seq__40688_40706);
if(temp__4657__auto___40715){
var seq__40688_40716__$1 = temp__4657__auto___40715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40688_40716__$1)){
var c__37147__auto___40717 = cljs.core.chunk_first.call(null,seq__40688_40716__$1);
var G__40718 = cljs.core.chunk_rest.call(null,seq__40688_40716__$1);
var G__40719 = c__37147__auto___40717;
var G__40720 = cljs.core.count.call(null,c__37147__auto___40717);
var G__40721 = (0);
seq__40688_40706 = G__40718;
chunk__40689_40707 = G__40719;
count__40690_40708 = G__40720;
i__40691_40709 = G__40721;
continue;
} else {
var test_40722 = cljs.core.first.call(null,seq__40688_40716__$1);
cljs.compiler.emitln.call(null,"case ",test_40722,":");

var G__40723 = cljs.core.next.call(null,seq__40688_40716__$1);
var G__40724 = null;
var G__40725 = (0);
var G__40726 = (0);
seq__40688_40706 = G__40723;
chunk__40689_40707 = G__40724;
count__40690_40708 = G__40725;
i__40691_40709 = G__40726;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_40705);
} else {
cljs.compiler.emitln.call(null,then_40705);
}

cljs.compiler.emitln.call(null,"break;");

var G__40727 = seq__40681_40699;
var G__40728 = chunk__40682_40700;
var G__40729 = count__40683_40701;
var G__40730 = (i__40684_40702 + (1));
seq__40681_40699 = G__40727;
chunk__40682_40700 = G__40728;
count__40683_40701 = G__40729;
i__40684_40702 = G__40730;
continue;
} else {
var temp__4657__auto___40731 = cljs.core.seq.call(null,seq__40681_40699);
if(temp__4657__auto___40731){
var seq__40681_40732__$1 = temp__4657__auto___40731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40681_40732__$1)){
var c__37147__auto___40733 = cljs.core.chunk_first.call(null,seq__40681_40732__$1);
var G__40734 = cljs.core.chunk_rest.call(null,seq__40681_40732__$1);
var G__40735 = c__37147__auto___40733;
var G__40736 = cljs.core.count.call(null,c__37147__auto___40733);
var G__40737 = (0);
seq__40681_40699 = G__40734;
chunk__40682_40700 = G__40735;
count__40683_40701 = G__40736;
i__40684_40702 = G__40737;
continue;
} else {
var vec__40692_40738 = cljs.core.first.call(null,seq__40681_40732__$1);
var ts_40739 = cljs.core.nth.call(null,vec__40692_40738,(0),null);
var then_40740 = cljs.core.nth.call(null,vec__40692_40738,(1),null);
var seq__40695_40741 = cljs.core.seq.call(null,ts_40739);
var chunk__40696_40742 = null;
var count__40697_40743 = (0);
var i__40698_40744 = (0);
while(true){
if((i__40698_40744 < count__40697_40743)){
var test_40745 = cljs.core._nth.call(null,chunk__40696_40742,i__40698_40744);
cljs.compiler.emitln.call(null,"case ",test_40745,":");

var G__40746 = seq__40695_40741;
var G__40747 = chunk__40696_40742;
var G__40748 = count__40697_40743;
var G__40749 = (i__40698_40744 + (1));
seq__40695_40741 = G__40746;
chunk__40696_40742 = G__40747;
count__40697_40743 = G__40748;
i__40698_40744 = G__40749;
continue;
} else {
var temp__4657__auto___40750__$1 = cljs.core.seq.call(null,seq__40695_40741);
if(temp__4657__auto___40750__$1){
var seq__40695_40751__$1 = temp__4657__auto___40750__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40695_40751__$1)){
var c__37147__auto___40752 = cljs.core.chunk_first.call(null,seq__40695_40751__$1);
var G__40753 = cljs.core.chunk_rest.call(null,seq__40695_40751__$1);
var G__40754 = c__37147__auto___40752;
var G__40755 = cljs.core.count.call(null,c__37147__auto___40752);
var G__40756 = (0);
seq__40695_40741 = G__40753;
chunk__40696_40742 = G__40754;
count__40697_40743 = G__40755;
i__40698_40744 = G__40756;
continue;
} else {
var test_40757 = cljs.core.first.call(null,seq__40695_40751__$1);
cljs.compiler.emitln.call(null,"case ",test_40757,":");

var G__40758 = cljs.core.next.call(null,seq__40695_40751__$1);
var G__40759 = null;
var G__40760 = (0);
var G__40761 = (0);
seq__40695_40741 = G__40758;
chunk__40696_40742 = G__40759;
count__40697_40743 = G__40760;
i__40698_40744 = G__40761;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_40740);
} else {
cljs.compiler.emitln.call(null,then_40740);
}

cljs.compiler.emitln.call(null,"break;");

var G__40762 = cljs.core.next.call(null,seq__40681_40732__$1);
var G__40763 = null;
var G__40764 = (0);
var G__40765 = (0);
seq__40681_40699 = G__40762;
chunk__40682_40700 = G__40763;
count__40683_40701 = G__40764;
i__40684_40702 = G__40765;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__40766){
var map__40767 = p__40766;
var map__40767__$1 = ((((!((map__40767 == null)))?((((map__40767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40767):map__40767);
var throw$ = cljs.core.get.call(null,map__40767__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__40767__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__40770 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__40770,(0),null);
var rstr = cljs.core.nth.call(null,vec__40770,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__40770,fstr,rstr,ret_t,axstr){
return (function (p1__40769_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__40769_SHARP_);
});})(idx,vec__40770,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__40773 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40773),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__40773;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__40774_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__40774_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__40775 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__40776 = cljs.core.seq.call(null,vec__40775);
var first__40777 = cljs.core.first.call(null,seq__40776);
var seq__40776__$1 = cljs.core.next.call(null,seq__40776);
var p = first__40777;
var first__40777__$1 = cljs.core.first.call(null,seq__40776__$1);
var seq__40776__$2 = cljs.core.next.call(null,seq__40776__$1);
var ts = first__40777__$1;
var first__40777__$2 = cljs.core.first.call(null,seq__40776__$2);
var seq__40776__$3 = cljs.core.next.call(null,seq__40776__$2);
var n = first__40777__$2;
var xs = seq__40776__$3;
if(cljs.core.truth_((function (){var and__36296__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__36296__auto__){
var and__36296__auto____$1 = ts;
if(cljs.core.truth_(and__36296__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__36296__auto____$1;
}
} else {
return and__36296__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__40778 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__40779 = cljs.core.seq.call(null,vec__40778);
var first__40780 = cljs.core.first.call(null,seq__40779);
var seq__40779__$1 = cljs.core.next.call(null,seq__40779);
var p = first__40780;
var first__40780__$1 = cljs.core.first.call(null,seq__40779__$1);
var seq__40779__$2 = cljs.core.next.call(null,seq__40779__$1);
var ts = first__40780__$1;
var xs = seq__40779__$2;
if(cljs.core.truth_((function (){var and__36296__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__36296__auto__){
var and__36296__auto____$1 = ts;
if(cljs.core.truth_(and__36296__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__36296__auto____$1;
}
} else {
return and__36296__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__40783 = arguments.length;
switch (G__40783) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__40791 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__40781_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__40781_SHARP_);
} else {
return p1__40781_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__40792 = cljs.core.seq.call(null,vec__40791);
var first__40793 = cljs.core.first.call(null,seq__40792);
var seq__40792__$1 = cljs.core.next.call(null,seq__40792);
var x = first__40793;
var ys = seq__40792__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__40794 = cljs.core.seq.call(null,ys);
var chunk__40795 = null;
var count__40796 = (0);
var i__40797 = (0);
while(true){
if((i__40797 < count__40796)){
var next_line = cljs.core._nth.call(null,chunk__40795,i__40797);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__40803 = seq__40794;
var G__40804 = chunk__40795;
var G__40805 = count__40796;
var G__40806 = (i__40797 + (1));
seq__40794 = G__40803;
chunk__40795 = G__40804;
count__40796 = G__40805;
i__40797 = G__40806;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40794);
if(temp__4657__auto__){
var seq__40794__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40794__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__40794__$1);
var G__40807 = cljs.core.chunk_rest.call(null,seq__40794__$1);
var G__40808 = c__37147__auto__;
var G__40809 = cljs.core.count.call(null,c__37147__auto__);
var G__40810 = (0);
seq__40794 = G__40807;
chunk__40795 = G__40808;
count__40796 = G__40809;
i__40797 = G__40810;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__40794__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__40811 = cljs.core.next.call(null,seq__40794__$1);
var G__40812 = null;
var G__40813 = (0);
var G__40814 = (0);
seq__40794 = G__40811;
chunk__40795 = G__40812;
count__40796 = G__40813;
i__40797 = G__40814;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__40798_40815 = cljs.core.seq.call(null,docs__$2);
var chunk__40799_40816 = null;
var count__40800_40817 = (0);
var i__40801_40818 = (0);
while(true){
if((i__40801_40818 < count__40800_40817)){
var e_40819 = cljs.core._nth.call(null,chunk__40799_40816,i__40801_40818);
if(cljs.core.truth_(e_40819)){
print_comment_lines.call(null,e_40819);
} else {
}

var G__40820 = seq__40798_40815;
var G__40821 = chunk__40799_40816;
var G__40822 = count__40800_40817;
var G__40823 = (i__40801_40818 + (1));
seq__40798_40815 = G__40820;
chunk__40799_40816 = G__40821;
count__40800_40817 = G__40822;
i__40801_40818 = G__40823;
continue;
} else {
var temp__4657__auto___40824 = cljs.core.seq.call(null,seq__40798_40815);
if(temp__4657__auto___40824){
var seq__40798_40825__$1 = temp__4657__auto___40824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40798_40825__$1)){
var c__37147__auto___40826 = cljs.core.chunk_first.call(null,seq__40798_40825__$1);
var G__40827 = cljs.core.chunk_rest.call(null,seq__40798_40825__$1);
var G__40828 = c__37147__auto___40826;
var G__40829 = cljs.core.count.call(null,c__37147__auto___40826);
var G__40830 = (0);
seq__40798_40815 = G__40827;
chunk__40799_40816 = G__40828;
count__40800_40817 = G__40829;
i__40801_40818 = G__40830;
continue;
} else {
var e_40831 = cljs.core.first.call(null,seq__40798_40825__$1);
if(cljs.core.truth_(e_40831)){
print_comment_lines.call(null,e_40831);
} else {
}

var G__40832 = cljs.core.next.call(null,seq__40798_40825__$1);
var G__40833 = null;
var G__40834 = (0);
var G__40835 = (0);
seq__40798_40815 = G__40832;
chunk__40799_40816 = G__40833;
count__40800_40817 = G__40834;
i__40801_40818 = G__40835;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__36296__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__40837_SHARP_){
return goog.string.startsWith(p1__40837_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__36296__auto__)){
var and__36296__auto____$1 = opts;
if(cljs.core.truth_(and__36296__auto____$1)){
var and__36296__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__36296__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__36296__auto____$2;
}
} else {
return and__36296__auto____$1;
}
} else {
return and__36296__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__40838){
var map__40839 = p__40838;
var map__40839__$1 = ((((!((map__40839 == null)))?((((map__40839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40839):map__40839);
var name = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__36308__auto__ = init;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__36296__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__36296__auto__){
return test;
} else {
return and__36296__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__40841){
var map__40842 = p__40841;
var map__40842__$1 = ((((!((map__40842 == null)))?((((map__40842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40842):map__40842);
var name = cljs.core.get.call(null,map__40842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__40842__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__40842__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__40844_40862 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__40845_40863 = null;
var count__40846_40864 = (0);
var i__40847_40865 = (0);
while(true){
if((i__40847_40865 < count__40846_40864)){
var vec__40848_40866 = cljs.core._nth.call(null,chunk__40845_40863,i__40847_40865);
var i_40867 = cljs.core.nth.call(null,vec__40848_40866,(0),null);
var param_40868 = cljs.core.nth.call(null,vec__40848_40866,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_40868);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__40869 = seq__40844_40862;
var G__40870 = chunk__40845_40863;
var G__40871 = count__40846_40864;
var G__40872 = (i__40847_40865 + (1));
seq__40844_40862 = G__40869;
chunk__40845_40863 = G__40870;
count__40846_40864 = G__40871;
i__40847_40865 = G__40872;
continue;
} else {
var temp__4657__auto___40873 = cljs.core.seq.call(null,seq__40844_40862);
if(temp__4657__auto___40873){
var seq__40844_40874__$1 = temp__4657__auto___40873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40844_40874__$1)){
var c__37147__auto___40875 = cljs.core.chunk_first.call(null,seq__40844_40874__$1);
var G__40876 = cljs.core.chunk_rest.call(null,seq__40844_40874__$1);
var G__40877 = c__37147__auto___40875;
var G__40878 = cljs.core.count.call(null,c__37147__auto___40875);
var G__40879 = (0);
seq__40844_40862 = G__40876;
chunk__40845_40863 = G__40877;
count__40846_40864 = G__40878;
i__40847_40865 = G__40879;
continue;
} else {
var vec__40851_40880 = cljs.core.first.call(null,seq__40844_40874__$1);
var i_40881 = cljs.core.nth.call(null,vec__40851_40880,(0),null);
var param_40882 = cljs.core.nth.call(null,vec__40851_40880,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_40882);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__40883 = cljs.core.next.call(null,seq__40844_40874__$1);
var G__40884 = null;
var G__40885 = (0);
var G__40886 = (0);
seq__40844_40862 = G__40883;
chunk__40845_40863 = G__40884;
count__40846_40864 = G__40885;
i__40847_40865 = G__40886;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__40854_40887 = cljs.core.seq.call(null,params);
var chunk__40855_40888 = null;
var count__40856_40889 = (0);
var i__40857_40890 = (0);
while(true){
if((i__40857_40890 < count__40856_40889)){
var param_40891 = cljs.core._nth.call(null,chunk__40855_40888,i__40857_40890);
cljs.compiler.emit.call(null,param_40891);

if(cljs.core._EQ_.call(null,param_40891,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40892 = seq__40854_40887;
var G__40893 = chunk__40855_40888;
var G__40894 = count__40856_40889;
var G__40895 = (i__40857_40890 + (1));
seq__40854_40887 = G__40892;
chunk__40855_40888 = G__40893;
count__40856_40889 = G__40894;
i__40857_40890 = G__40895;
continue;
} else {
var temp__4657__auto___40896 = cljs.core.seq.call(null,seq__40854_40887);
if(temp__4657__auto___40896){
var seq__40854_40897__$1 = temp__4657__auto___40896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40854_40897__$1)){
var c__37147__auto___40898 = cljs.core.chunk_first.call(null,seq__40854_40897__$1);
var G__40899 = cljs.core.chunk_rest.call(null,seq__40854_40897__$1);
var G__40900 = c__37147__auto___40898;
var G__40901 = cljs.core.count.call(null,c__37147__auto___40898);
var G__40902 = (0);
seq__40854_40887 = G__40899;
chunk__40855_40888 = G__40900;
count__40856_40889 = G__40901;
i__40857_40890 = G__40902;
continue;
} else {
var param_40903 = cljs.core.first.call(null,seq__40854_40897__$1);
cljs.compiler.emit.call(null,param_40903);

if(cljs.core._EQ_.call(null,param_40903,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40904 = cljs.core.next.call(null,seq__40854_40897__$1);
var G__40905 = null;
var G__40906 = (0);
var G__40907 = (0);
seq__40854_40887 = G__40904;
chunk__40855_40888 = G__40905;
count__40856_40889 = G__40906;
i__40857_40890 = G__40907;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__40858_40908 = cljs.core.seq.call(null,params);
var chunk__40859_40909 = null;
var count__40860_40910 = (0);
var i__40861_40911 = (0);
while(true){
if((i__40861_40911 < count__40860_40910)){
var param_40912 = cljs.core._nth.call(null,chunk__40859_40909,i__40861_40911);
cljs.compiler.emit.call(null,param_40912);

if(cljs.core._EQ_.call(null,param_40912,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40913 = seq__40858_40908;
var G__40914 = chunk__40859_40909;
var G__40915 = count__40860_40910;
var G__40916 = (i__40861_40911 + (1));
seq__40858_40908 = G__40913;
chunk__40859_40909 = G__40914;
count__40860_40910 = G__40915;
i__40861_40911 = G__40916;
continue;
} else {
var temp__4657__auto___40917 = cljs.core.seq.call(null,seq__40858_40908);
if(temp__4657__auto___40917){
var seq__40858_40918__$1 = temp__4657__auto___40917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40858_40918__$1)){
var c__37147__auto___40919 = cljs.core.chunk_first.call(null,seq__40858_40918__$1);
var G__40920 = cljs.core.chunk_rest.call(null,seq__40858_40918__$1);
var G__40921 = c__37147__auto___40919;
var G__40922 = cljs.core.count.call(null,c__37147__auto___40919);
var G__40923 = (0);
seq__40858_40908 = G__40920;
chunk__40859_40909 = G__40921;
count__40860_40910 = G__40922;
i__40861_40911 = G__40923;
continue;
} else {
var param_40924 = cljs.core.first.call(null,seq__40858_40918__$1);
cljs.compiler.emit.call(null,param_40924);

if(cljs.core._EQ_.call(null,param_40924,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40925 = cljs.core.next.call(null,seq__40858_40918__$1);
var G__40926 = null;
var G__40927 = (0);
var G__40928 = (0);
seq__40858_40908 = G__40925;
chunk__40859_40909 = G__40926;
count__40860_40910 = G__40927;
i__40861_40911 = G__40928;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__40929 = cljs.core.seq.call(null,params);
var chunk__40930 = null;
var count__40931 = (0);
var i__40932 = (0);
while(true){
if((i__40932 < count__40931)){
var param = cljs.core._nth.call(null,chunk__40930,i__40932);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40933 = seq__40929;
var G__40934 = chunk__40930;
var G__40935 = count__40931;
var G__40936 = (i__40932 + (1));
seq__40929 = G__40933;
chunk__40930 = G__40934;
count__40931 = G__40935;
i__40932 = G__40936;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40929);
if(temp__4657__auto__){
var seq__40929__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40929__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__40929__$1);
var G__40937 = cljs.core.chunk_rest.call(null,seq__40929__$1);
var G__40938 = c__37147__auto__;
var G__40939 = cljs.core.count.call(null,c__37147__auto__);
var G__40940 = (0);
seq__40929 = G__40937;
chunk__40930 = G__40938;
count__40931 = G__40939;
i__40932 = G__40940;
continue;
} else {
var param = cljs.core.first.call(null,seq__40929__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40941 = cljs.core.next.call(null,seq__40929__$1);
var G__40942 = null;
var G__40943 = (0);
var G__40944 = (0);
seq__40929 = G__40941;
chunk__40930 = G__40942;
count__40931 = G__40943;
i__40932 = G__40944;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__40945){
var map__40946 = p__40945;
var map__40946__$1 = ((((!((map__40946 == null)))?((((map__40946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40946):map__40946);
var type = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__40948){
var map__40949 = p__40948;
var map__40949__$1 = ((((!((map__40949 == null)))?((((map__40949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40949):map__40949);
var f = map__40949__$1;
var type = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_40959__$1 = (function (){var or__36308__auto__ = name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_40960 = cljs.compiler.munge.call(null,name_40959__$1);
var delegate_name_40961 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_40960),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_40961," = function (");

var seq__40951_40962 = cljs.core.seq.call(null,params);
var chunk__40952_40963 = null;
var count__40953_40964 = (0);
var i__40954_40965 = (0);
while(true){
if((i__40954_40965 < count__40953_40964)){
var param_40966 = cljs.core._nth.call(null,chunk__40952_40963,i__40954_40965);
cljs.compiler.emit.call(null,param_40966);

if(cljs.core._EQ_.call(null,param_40966,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40967 = seq__40951_40962;
var G__40968 = chunk__40952_40963;
var G__40969 = count__40953_40964;
var G__40970 = (i__40954_40965 + (1));
seq__40951_40962 = G__40967;
chunk__40952_40963 = G__40968;
count__40953_40964 = G__40969;
i__40954_40965 = G__40970;
continue;
} else {
var temp__4657__auto___40971 = cljs.core.seq.call(null,seq__40951_40962);
if(temp__4657__auto___40971){
var seq__40951_40972__$1 = temp__4657__auto___40971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40951_40972__$1)){
var c__37147__auto___40973 = cljs.core.chunk_first.call(null,seq__40951_40972__$1);
var G__40974 = cljs.core.chunk_rest.call(null,seq__40951_40972__$1);
var G__40975 = c__37147__auto___40973;
var G__40976 = cljs.core.count.call(null,c__37147__auto___40973);
var G__40977 = (0);
seq__40951_40962 = G__40974;
chunk__40952_40963 = G__40975;
count__40953_40964 = G__40976;
i__40954_40965 = G__40977;
continue;
} else {
var param_40978 = cljs.core.first.call(null,seq__40951_40972__$1);
cljs.compiler.emit.call(null,param_40978);

if(cljs.core._EQ_.call(null,param_40978,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40979 = cljs.core.next.call(null,seq__40951_40972__$1);
var G__40980 = null;
var G__40981 = (0);
var G__40982 = (0);
seq__40951_40962 = G__40979;
chunk__40952_40963 = G__40980;
count__40953_40964 = G__40981;
i__40954_40965 = G__40982;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_40960," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_40983 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_40983,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_40961,".call(this,");

var seq__40955_40984 = cljs.core.seq.call(null,params);
var chunk__40956_40985 = null;
var count__40957_40986 = (0);
var i__40958_40987 = (0);
while(true){
if((i__40958_40987 < count__40957_40986)){
var param_40988 = cljs.core._nth.call(null,chunk__40956_40985,i__40958_40987);
cljs.compiler.emit.call(null,param_40988);

if(cljs.core._EQ_.call(null,param_40988,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__40989 = seq__40955_40984;
var G__40990 = chunk__40956_40985;
var G__40991 = count__40957_40986;
var G__40992 = (i__40958_40987 + (1));
seq__40955_40984 = G__40989;
chunk__40956_40985 = G__40990;
count__40957_40986 = G__40991;
i__40958_40987 = G__40992;
continue;
} else {
var temp__4657__auto___40993 = cljs.core.seq.call(null,seq__40955_40984);
if(temp__4657__auto___40993){
var seq__40955_40994__$1 = temp__4657__auto___40993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40955_40994__$1)){
var c__37147__auto___40995 = cljs.core.chunk_first.call(null,seq__40955_40994__$1);
var G__40996 = cljs.core.chunk_rest.call(null,seq__40955_40994__$1);
var G__40997 = c__37147__auto___40995;
var G__40998 = cljs.core.count.call(null,c__37147__auto___40995);
var G__40999 = (0);
seq__40955_40984 = G__40996;
chunk__40956_40985 = G__40997;
count__40957_40986 = G__40998;
i__40958_40987 = G__40999;
continue;
} else {
var param_41000 = cljs.core.first.call(null,seq__40955_40994__$1);
cljs.compiler.emit.call(null,param_41000);

if(cljs.core._EQ_.call(null,param_41000,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__41001 = cljs.core.next.call(null,seq__40955_40994__$1);
var G__41002 = null;
var G__41003 = (0);
var G__41004 = (0);
seq__40955_40984 = G__41001;
chunk__40956_40985 = G__41002;
count__40957_40986 = G__41003;
i__40958_40987 = G__41004;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_40960,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_40960,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_40959__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_40960,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_40961,";");

cljs.compiler.emitln.call(null,"return ",mname_40960,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__41008){
var map__41009 = p__41008;
var map__41009__$1 = ((((!((map__41009 == null)))?((((map__41009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41009):map__41009);
var name = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__41009,map__41009__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__41005_SHARP_){
var and__36296__auto__ = p1__41005_SHARP_;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__41005_SHARP_));
} else {
return and__36296__auto__;
}
});})(map__41009,map__41009__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_41044__$1 = (function (){var or__36308__auto__ = name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_41045 = cljs.compiler.munge.call(null,name_41044__$1);
var maxparams_41046 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_41047 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_41044__$1,mname_41045,maxparams_41046,loop_locals,map__41009,map__41009__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_41045),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_41044__$1,mname_41045,maxparams_41046,loop_locals,map__41009,map__41009__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_41048 = cljs.core.sort_by.call(null,((function (name_41044__$1,mname_41045,maxparams_41046,mmap_41047,loop_locals,map__41009,map__41009__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__41006_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__41006_SHARP_)));
});})(name_41044__$1,mname_41045,maxparams_41046,mmap_41047,loop_locals,map__41009,map__41009__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_41047));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_41045," = null;");

var seq__41011_41049 = cljs.core.seq.call(null,ms_41048);
var chunk__41012_41050 = null;
var count__41013_41051 = (0);
var i__41014_41052 = (0);
while(true){
if((i__41014_41052 < count__41013_41051)){
var vec__41015_41053 = cljs.core._nth.call(null,chunk__41012_41050,i__41014_41052);
var n_41054 = cljs.core.nth.call(null,vec__41015_41053,(0),null);
var meth_41055 = cljs.core.nth.call(null,vec__41015_41053,(1),null);
cljs.compiler.emits.call(null,"var ",n_41054," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41055))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_41055);
} else {
cljs.compiler.emit_fn_method.call(null,meth_41055);
}

cljs.compiler.emitln.call(null,";");

var G__41056 = seq__41011_41049;
var G__41057 = chunk__41012_41050;
var G__41058 = count__41013_41051;
var G__41059 = (i__41014_41052 + (1));
seq__41011_41049 = G__41056;
chunk__41012_41050 = G__41057;
count__41013_41051 = G__41058;
i__41014_41052 = G__41059;
continue;
} else {
var temp__4657__auto___41060 = cljs.core.seq.call(null,seq__41011_41049);
if(temp__4657__auto___41060){
var seq__41011_41061__$1 = temp__4657__auto___41060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41011_41061__$1)){
var c__37147__auto___41062 = cljs.core.chunk_first.call(null,seq__41011_41061__$1);
var G__41063 = cljs.core.chunk_rest.call(null,seq__41011_41061__$1);
var G__41064 = c__37147__auto___41062;
var G__41065 = cljs.core.count.call(null,c__37147__auto___41062);
var G__41066 = (0);
seq__41011_41049 = G__41063;
chunk__41012_41050 = G__41064;
count__41013_41051 = G__41065;
i__41014_41052 = G__41066;
continue;
} else {
var vec__41018_41067 = cljs.core.first.call(null,seq__41011_41061__$1);
var n_41068 = cljs.core.nth.call(null,vec__41018_41067,(0),null);
var meth_41069 = cljs.core.nth.call(null,vec__41018_41067,(1),null);
cljs.compiler.emits.call(null,"var ",n_41068," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41069))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_41069);
} else {
cljs.compiler.emit_fn_method.call(null,meth_41069);
}

cljs.compiler.emitln.call(null,";");

var G__41070 = cljs.core.next.call(null,seq__41011_41061__$1);
var G__41071 = null;
var G__41072 = (0);
var G__41073 = (0);
seq__41011_41049 = G__41070;
chunk__41012_41050 = G__41071;
count__41013_41051 = G__41072;
i__41014_41052 = G__41073;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_41045," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_41046),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_41046)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_41046));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__41021_41074 = cljs.core.seq.call(null,ms_41048);
var chunk__41022_41075 = null;
var count__41023_41076 = (0);
var i__41024_41077 = (0);
while(true){
if((i__41024_41077 < count__41023_41076)){
var vec__41025_41078 = cljs.core._nth.call(null,chunk__41022_41075,i__41024_41077);
var n_41079 = cljs.core.nth.call(null,vec__41025_41078,(0),null);
var meth_41080 = cljs.core.nth.call(null,vec__41025_41078,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41080))){
cljs.compiler.emitln.call(null,"default:");

var restarg_41081 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_41081," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_41082 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_41081," = new cljs.core.IndexedSeq(",a_41082,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_41079,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_41046)),(((cljs.core.count.call(null,maxparams_41046) > (1)))?", ":null),restarg_41081,");");
} else {
var pcnt_41083 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_41080));
cljs.compiler.emitln.call(null,"case ",pcnt_41083,":");

cljs.compiler.emitln.call(null,"return ",n_41079,".call(this",(((pcnt_41083 === (0)))?null:cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_41083,maxparams_41046));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),",")),");");
}

var G__41084 = seq__41021_41074;
var G__41085 = chunk__41022_41075;
var G__41086 = count__41023_41076;
var G__41087 = (i__41024_41077 + (1));
seq__41021_41074 = G__41084;
chunk__41022_41075 = G__41085;
count__41023_41076 = G__41086;
i__41024_41077 = G__41087;
continue;
} else {
var temp__4657__auto___41088 = cljs.core.seq.call(null,seq__41021_41074);
if(temp__4657__auto___41088){
var seq__41021_41089__$1 = temp__4657__auto___41088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41021_41089__$1)){
var c__37147__auto___41090 = cljs.core.chunk_first.call(null,seq__41021_41089__$1);
var G__41091 = cljs.core.chunk_rest.call(null,seq__41021_41089__$1);
var G__41092 = c__37147__auto___41090;
var G__41093 = cljs.core.count.call(null,c__37147__auto___41090);
var G__41094 = (0);
seq__41021_41074 = G__41091;
chunk__41022_41075 = G__41092;
count__41023_41076 = G__41093;
i__41024_41077 = G__41094;
continue;
} else {
var vec__41028_41095 = cljs.core.first.call(null,seq__41021_41089__$1);
var n_41096 = cljs.core.nth.call(null,vec__41028_41095,(0),null);
var meth_41097 = cljs.core.nth.call(null,vec__41028_41095,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41097))){
cljs.compiler.emitln.call(null,"default:");

var restarg_41098 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_41098," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_41099 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_41098," = new cljs.core.IndexedSeq(",a_41099,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_41096,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_41046)),(((cljs.core.count.call(null,maxparams_41046) > (1)))?", ":null),restarg_41098,");");
} else {
var pcnt_41100 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_41097));
cljs.compiler.emitln.call(null,"case ",pcnt_41100,":");

cljs.compiler.emitln.call(null,"return ",n_41096,".call(this",(((pcnt_41100 === (0)))?null:cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_41100,maxparams_41046));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),",")),");");
}

var G__41101 = cljs.core.next.call(null,seq__41021_41089__$1);
var G__41102 = null;
var G__41103 = (0);
var G__41104 = (0);
seq__41021_41074 = G__41101;
chunk__41022_41075 = G__41102;
count__41023_41076 = G__41103;
i__41024_41077 = G__41104;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_41045,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_41045,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_41044__$1,mname_41045,maxparams_41046,mmap_41047,ms_41048,loop_locals,map__41009,map__41009__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__41007_SHARP_){
var vec__41031 = p1__41007_SHARP_;
var n = cljs.core.nth.call(null,vec__41031,(0),null);
var m = cljs.core.nth.call(null,vec__41031,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_41044__$1,mname_41045,maxparams_41046,mmap_41047,ms_41048,loop_locals,map__41009,map__41009__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_41048),".cljs$lang$applyTo;");
} else {
}

var seq__41034_41105 = cljs.core.seq.call(null,ms_41048);
var chunk__41035_41106 = null;
var count__41036_41107 = (0);
var i__41037_41108 = (0);
while(true){
if((i__41037_41108 < count__41036_41107)){
var vec__41038_41109 = cljs.core._nth.call(null,chunk__41035_41106,i__41037_41108);
var n_41110 = cljs.core.nth.call(null,vec__41038_41109,(0),null);
var meth_41111 = cljs.core.nth.call(null,vec__41038_41109,(1),null);
var c_41112 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_41111));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41111))){
cljs.compiler.emitln.call(null,mname_41045,".cljs$core$IFn$_invoke$arity$variadic = ",n_41110,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_41045,".cljs$core$IFn$_invoke$arity$",c_41112," = ",n_41110,";");
}

var G__41113 = seq__41034_41105;
var G__41114 = chunk__41035_41106;
var G__41115 = count__41036_41107;
var G__41116 = (i__41037_41108 + (1));
seq__41034_41105 = G__41113;
chunk__41035_41106 = G__41114;
count__41036_41107 = G__41115;
i__41037_41108 = G__41116;
continue;
} else {
var temp__4657__auto___41117 = cljs.core.seq.call(null,seq__41034_41105);
if(temp__4657__auto___41117){
var seq__41034_41118__$1 = temp__4657__auto___41117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41034_41118__$1)){
var c__37147__auto___41119 = cljs.core.chunk_first.call(null,seq__41034_41118__$1);
var G__41120 = cljs.core.chunk_rest.call(null,seq__41034_41118__$1);
var G__41121 = c__37147__auto___41119;
var G__41122 = cljs.core.count.call(null,c__37147__auto___41119);
var G__41123 = (0);
seq__41034_41105 = G__41120;
chunk__41035_41106 = G__41121;
count__41036_41107 = G__41122;
i__41037_41108 = G__41123;
continue;
} else {
var vec__41041_41124 = cljs.core.first.call(null,seq__41034_41118__$1);
var n_41125 = cljs.core.nth.call(null,vec__41041_41124,(0),null);
var meth_41126 = cljs.core.nth.call(null,vec__41041_41124,(1),null);
var c_41127 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_41126));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_41126))){
cljs.compiler.emitln.call(null,mname_41045,".cljs$core$IFn$_invoke$arity$variadic = ",n_41125,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_41045,".cljs$core$IFn$_invoke$arity$",c_41127," = ",n_41125,";");
}

var G__41128 = cljs.core.next.call(null,seq__41034_41118__$1);
var G__41129 = null;
var G__41130 = (0);
var G__41131 = (0);
seq__41034_41105 = G__41128;
chunk__41035_41106 = G__41129;
count__41036_41107 = G__41130;
i__41037_41108 = G__41131;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_41045,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__41132){
var map__41133 = p__41132;
var map__41133__$1 = ((((!((map__41133 == null)))?((((map__41133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41133):map__41133);
var statements = cljs.core.get.call(null,map__41133__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__41133__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__41133__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__36296__auto__ = statements;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__36296__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__41135_41139 = cljs.core.seq.call(null,statements);
var chunk__41136_41140 = null;
var count__41137_41141 = (0);
var i__41138_41142 = (0);
while(true){
if((i__41138_41142 < count__41137_41141)){
var s_41143 = cljs.core._nth.call(null,chunk__41136_41140,i__41138_41142);
cljs.compiler.emitln.call(null,s_41143);

var G__41144 = seq__41135_41139;
var G__41145 = chunk__41136_41140;
var G__41146 = count__41137_41141;
var G__41147 = (i__41138_41142 + (1));
seq__41135_41139 = G__41144;
chunk__41136_41140 = G__41145;
count__41137_41141 = G__41146;
i__41138_41142 = G__41147;
continue;
} else {
var temp__4657__auto___41148 = cljs.core.seq.call(null,seq__41135_41139);
if(temp__4657__auto___41148){
var seq__41135_41149__$1 = temp__4657__auto___41148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41135_41149__$1)){
var c__37147__auto___41150 = cljs.core.chunk_first.call(null,seq__41135_41149__$1);
var G__41151 = cljs.core.chunk_rest.call(null,seq__41135_41149__$1);
var G__41152 = c__37147__auto___41150;
var G__41153 = cljs.core.count.call(null,c__37147__auto___41150);
var G__41154 = (0);
seq__41135_41139 = G__41151;
chunk__41136_41140 = G__41152;
count__41137_41141 = G__41153;
i__41138_41142 = G__41154;
continue;
} else {
var s_41155 = cljs.core.first.call(null,seq__41135_41149__$1);
cljs.compiler.emitln.call(null,s_41155);

var G__41156 = cljs.core.next.call(null,seq__41135_41149__$1);
var G__41157 = null;
var G__41158 = (0);
var G__41159 = (0);
seq__41135_41139 = G__41156;
chunk__41136_41140 = G__41157;
count__41137_41141 = G__41158;
i__41138_41142 = G__41159;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__36296__auto__ = statements;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__36296__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__41160){
var map__41161 = p__41160;
var map__41161__$1 = ((((!((map__41161 == null)))?((((map__41161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41161):map__41161);
var env = cljs.core.get.call(null,map__41161__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__41161__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__41161__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__41161__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__41161__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__36308__auto__ = name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__41163,is_loop){
var map__41164 = p__41163;
var map__41164__$1 = ((((!((map__41164 == null)))?((((map__41164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41164):map__41164);
var bindings = cljs.core.get.call(null,map__41164__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__41164__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__41164__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_41166_41175 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_41166_41175,context,map__41164,map__41164__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_41166_41175,context,map__41164,map__41164__$1,bindings,expr,env))
,bindings):null));

try{var seq__41167_41176 = cljs.core.seq.call(null,bindings);
var chunk__41168_41177 = null;
var count__41169_41178 = (0);
var i__41170_41179 = (0);
while(true){
if((i__41170_41179 < count__41169_41178)){
var map__41171_41180 = cljs.core._nth.call(null,chunk__41168_41177,i__41170_41179);
var map__41171_41181__$1 = ((((!((map__41171_41180 == null)))?((((map__41171_41180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41171_41180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41171_41180):map__41171_41180);
var binding_41182 = map__41171_41181__$1;
var init_41183 = cljs.core.get.call(null,map__41171_41181__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_41182);

cljs.compiler.emitln.call(null," = ",init_41183,";");

var G__41184 = seq__41167_41176;
var G__41185 = chunk__41168_41177;
var G__41186 = count__41169_41178;
var G__41187 = (i__41170_41179 + (1));
seq__41167_41176 = G__41184;
chunk__41168_41177 = G__41185;
count__41169_41178 = G__41186;
i__41170_41179 = G__41187;
continue;
} else {
var temp__4657__auto___41188 = cljs.core.seq.call(null,seq__41167_41176);
if(temp__4657__auto___41188){
var seq__41167_41189__$1 = temp__4657__auto___41188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41167_41189__$1)){
var c__37147__auto___41190 = cljs.core.chunk_first.call(null,seq__41167_41189__$1);
var G__41191 = cljs.core.chunk_rest.call(null,seq__41167_41189__$1);
var G__41192 = c__37147__auto___41190;
var G__41193 = cljs.core.count.call(null,c__37147__auto___41190);
var G__41194 = (0);
seq__41167_41176 = G__41191;
chunk__41168_41177 = G__41192;
count__41169_41178 = G__41193;
i__41170_41179 = G__41194;
continue;
} else {
var map__41173_41195 = cljs.core.first.call(null,seq__41167_41189__$1);
var map__41173_41196__$1 = ((((!((map__41173_41195 == null)))?((((map__41173_41195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41173_41195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41173_41195):map__41173_41195);
var binding_41197 = map__41173_41196__$1;
var init_41198 = cljs.core.get.call(null,map__41173_41196__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_41197);

cljs.compiler.emitln.call(null," = ",init_41198,";");

var G__41199 = cljs.core.next.call(null,seq__41167_41189__$1);
var G__41200 = null;
var G__41201 = (0);
var G__41202 = (0);
seq__41167_41176 = G__41199;
chunk__41168_41177 = G__41200;
count__41169_41178 = G__41201;
i__41170_41179 = G__41202;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_41166_41175;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__41203){
var map__41204 = p__41203;
var map__41204__$1 = ((((!((map__41204 == null)))?((((map__41204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41204):map__41204);
var frame = cljs.core.get.call(null,map__41204__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__41204__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__41204__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__37255__auto___41206 = cljs.core.count.call(null,exprs);
var i_41207 = (0);
while(true){
if((i_41207 < n__37255__auto___41206)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_41207)," = ",exprs.call(null,i_41207),";");

var G__41208 = (i_41207 + (1));
i_41207 = G__41208;
continue;
} else {
}
break;
}

var n__37255__auto___41209 = cljs.core.count.call(null,exprs);
var i_41210 = (0);
while(true){
if((i_41210 < n__37255__auto___41209)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_41210))," = ",temps.call(null,i_41210),";");

var G__41211 = (i_41210 + (1));
i_41210 = G__41211;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__41212){
var map__41213 = p__41212;
var map__41213__$1 = ((((!((map__41213 == null)))?((((map__41213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41213):map__41213);
var bindings = cljs.core.get.call(null,map__41213__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__41213__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__41213__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__41215_41223 = cljs.core.seq.call(null,bindings);
var chunk__41216_41224 = null;
var count__41217_41225 = (0);
var i__41218_41226 = (0);
while(true){
if((i__41218_41226 < count__41217_41225)){
var map__41219_41227 = cljs.core._nth.call(null,chunk__41216_41224,i__41218_41226);
var map__41219_41228__$1 = ((((!((map__41219_41227 == null)))?((((map__41219_41227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41219_41227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41219_41227):map__41219_41227);
var binding_41229 = map__41219_41228__$1;
var init_41230 = cljs.core.get.call(null,map__41219_41228__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_41229)," = ",init_41230,";");

var G__41231 = seq__41215_41223;
var G__41232 = chunk__41216_41224;
var G__41233 = count__41217_41225;
var G__41234 = (i__41218_41226 + (1));
seq__41215_41223 = G__41231;
chunk__41216_41224 = G__41232;
count__41217_41225 = G__41233;
i__41218_41226 = G__41234;
continue;
} else {
var temp__4657__auto___41235 = cljs.core.seq.call(null,seq__41215_41223);
if(temp__4657__auto___41235){
var seq__41215_41236__$1 = temp__4657__auto___41235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41215_41236__$1)){
var c__37147__auto___41237 = cljs.core.chunk_first.call(null,seq__41215_41236__$1);
var G__41238 = cljs.core.chunk_rest.call(null,seq__41215_41236__$1);
var G__41239 = c__37147__auto___41237;
var G__41240 = cljs.core.count.call(null,c__37147__auto___41237);
var G__41241 = (0);
seq__41215_41223 = G__41238;
chunk__41216_41224 = G__41239;
count__41217_41225 = G__41240;
i__41218_41226 = G__41241;
continue;
} else {
var map__41221_41242 = cljs.core.first.call(null,seq__41215_41236__$1);
var map__41221_41243__$1 = ((((!((map__41221_41242 == null)))?((((map__41221_41242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41221_41242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41221_41242):map__41221_41242);
var binding_41244 = map__41221_41243__$1;
var init_41245 = cljs.core.get.call(null,map__41221_41243__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_41244)," = ",init_41245,";");

var G__41246 = cljs.core.next.call(null,seq__41215_41236__$1);
var G__41247 = null;
var G__41248 = (0);
var G__41249 = (0);
seq__41215_41223 = G__41246;
chunk__41216_41224 = G__41247;
count__41217_41225 = G__41248;
i__41218_41226 = G__41249;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__41252){
var map__41253 = p__41252;
var map__41253__$1 = ((((!((map__41253 == null)))?((((map__41253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41253):map__41253);
var expr = map__41253__$1;
var f = cljs.core.get.call(null,map__41253__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__41253__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__41253__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__36296__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__36296__auto__){
var and__36296__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__36296__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__36296__auto____$1;
}
} else {
return and__36296__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__36296__auto__ = protocol;
if(cljs.core.truth_(and__36296__auto__)){
var and__36296__auto____$1 = tag;
if(cljs.core.truth_(and__36296__auto____$1)){
var or__36308__auto__ = (function (){var and__36296__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__36296__auto____$2){
var and__36296__auto____$3 = protocol;
if(cljs.core.truth_(and__36296__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__36296__auto____$3;
}
} else {
return and__36296__auto____$2;
}
})();
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
var and__36296__auto____$2 = (function (){var or__36308__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__36308__auto____$1){
return or__36308__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__36296__auto____$2)){
var or__36308__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__36308__auto____$1){
return or__36308__auto____$1;
} else {
var and__36296__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__36296__auto____$3){
var and__36296__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__36296__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__36296__auto____$4;
}
} else {
return and__36296__auto____$3;
}
}
} else {
return and__36296__auto____$2;
}
}
} else {
return and__36296__auto____$1;
}
} else {
return and__36296__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__36308__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__36308__auto__){
return or__36308__auto__;
} else {
var or__36308__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__36308__auto____$1)){
return or__36308__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__41255 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__36296__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__36296__auto__)){
return (arity > mfa);
} else {
return and__36296__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41253,map__41253__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41253,map__41253__$1,expr,f,args,env){
return (function (p1__41250_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__41250_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41253,map__41253__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41253,map__41253__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41253,map__41253__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41253,map__41253__$1,expr,f,args,env){
return (function (p1__41251_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__41251_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41253,map__41253__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__41253,map__41253__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__41255,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__41255,(1),null);
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_41258 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_41258,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_41259 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_41259,args)),(((mfa_41259 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_41259,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
var or__36308__auto____$1 = js_QMARK_;
if(or__36308__auto____$1){
return or__36308__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_41260 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_41260," ? ",f__$1,fprop_41260,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_41260," ? ",f__$1,fprop_41260,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__41261){
var map__41262 = p__41261;
var map__41262__$1 = ((((!((map__41262 == null)))?((((map__41262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41262):map__41262);
var ctor = cljs.core.get.call(null,map__41262__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__41262__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__41262__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__41264){
var map__41265 = p__41264;
var map__41265__$1 = ((((!((map__41265 == null)))?((((map__41265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41265):map__41265);
var target = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__41267 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__41267__$1 = ((((!((map__41267 == null)))?((((map__41267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41267):map__41267);
var options = cljs.core.get.call(null,map__41267__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__41267__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__41268 = options;
var map__41268__$1 = ((((!((map__41268 == null)))?((((map__41268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41268):map__41268);
var target = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__41269 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__41275 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__41275__$1 = ((((!((map__41275 == null)))?((((map__41275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41275):map__41275);
var node_libs = cljs.core.get.call(null,map__41275__$1,true);
var libs_to_load = cljs.core.get.call(null,map__41275__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__41269,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__41269,(1),null);
var map__41272 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__41272__$1 = ((((!((map__41272 == null)))?((((map__41272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41272):map__41272);
var global_exports_libs = cljs.core.get.call(null,map__41272__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__41272__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__41278_41294 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__41279_41295 = null;
var count__41280_41296 = (0);
var i__41281_41297 = (0);
while(true){
if((i__41281_41297 < count__41280_41296)){
var lib_41298 = cljs.core._nth.call(null,chunk__41279_41295,i__41281_41297);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_41298)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_41298),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41298),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_41298),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41298),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41298),"');");

}
}
}

var G__41299 = seq__41278_41294;
var G__41300 = chunk__41279_41295;
var G__41301 = count__41280_41296;
var G__41302 = (i__41281_41297 + (1));
seq__41278_41294 = G__41299;
chunk__41279_41295 = G__41300;
count__41280_41296 = G__41301;
i__41281_41297 = G__41302;
continue;
} else {
var temp__4657__auto___41303 = cljs.core.seq.call(null,seq__41278_41294);
if(temp__4657__auto___41303){
var seq__41278_41304__$1 = temp__4657__auto___41303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41278_41304__$1)){
var c__37147__auto___41305 = cljs.core.chunk_first.call(null,seq__41278_41304__$1);
var G__41306 = cljs.core.chunk_rest.call(null,seq__41278_41304__$1);
var G__41307 = c__37147__auto___41305;
var G__41308 = cljs.core.count.call(null,c__37147__auto___41305);
var G__41309 = (0);
seq__41278_41294 = G__41306;
chunk__41279_41295 = G__41307;
count__41280_41296 = G__41308;
i__41281_41297 = G__41309;
continue;
} else {
var lib_41310 = cljs.core.first.call(null,seq__41278_41304__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_41310)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_41310),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41310),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_41310),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41310),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_41310),"');");

}
}
}

var G__41311 = cljs.core.next.call(null,seq__41278_41304__$1);
var G__41312 = null;
var G__41313 = (0);
var G__41314 = (0);
seq__41278_41294 = G__41311;
chunk__41279_41295 = G__41312;
count__41280_41296 = G__41313;
i__41281_41297 = G__41314;
continue;
}
} else {
}
}
break;
}

var seq__41282_41315 = cljs.core.seq.call(null,node_libs);
var chunk__41283_41316 = null;
var count__41284_41317 = (0);
var i__41285_41318 = (0);
while(true){
if((i__41285_41318 < count__41284_41317)){
var lib_41319 = cljs.core._nth.call(null,chunk__41283_41316,i__41285_41318);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_41319)," = require('",lib_41319,"');");

var G__41320 = seq__41282_41315;
var G__41321 = chunk__41283_41316;
var G__41322 = count__41284_41317;
var G__41323 = (i__41285_41318 + (1));
seq__41282_41315 = G__41320;
chunk__41283_41316 = G__41321;
count__41284_41317 = G__41322;
i__41285_41318 = G__41323;
continue;
} else {
var temp__4657__auto___41324 = cljs.core.seq.call(null,seq__41282_41315);
if(temp__4657__auto___41324){
var seq__41282_41325__$1 = temp__4657__auto___41324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41282_41325__$1)){
var c__37147__auto___41326 = cljs.core.chunk_first.call(null,seq__41282_41325__$1);
var G__41327 = cljs.core.chunk_rest.call(null,seq__41282_41325__$1);
var G__41328 = c__37147__auto___41326;
var G__41329 = cljs.core.count.call(null,c__37147__auto___41326);
var G__41330 = (0);
seq__41282_41315 = G__41327;
chunk__41283_41316 = G__41328;
count__41284_41317 = G__41329;
i__41285_41318 = G__41330;
continue;
} else {
var lib_41331 = cljs.core.first.call(null,seq__41282_41325__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_41331)," = require('",lib_41331,"');");

var G__41332 = cljs.core.next.call(null,seq__41282_41325__$1);
var G__41333 = null;
var G__41334 = (0);
var G__41335 = (0);
seq__41282_41315 = G__41332;
chunk__41283_41316 = G__41333;
count__41284_41317 = G__41334;
i__41285_41318 = G__41335;
continue;
}
} else {
}
}
break;
}

var seq__41286_41336 = cljs.core.seq.call(null,global_exports_libs);
var chunk__41287_41337 = null;
var count__41288_41338 = (0);
var i__41289_41339 = (0);
while(true){
if((i__41289_41339 < count__41288_41338)){
var lib_41340 = cljs.core._nth.call(null,chunk__41287_41337,i__41289_41339);
var map__41290_41341 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_41340));
var map__41290_41342__$1 = ((((!((map__41290_41341 == null)))?((((map__41290_41341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41290_41341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41290_41341):map__41290_41341);
var global_exports_41343 = cljs.core.get.call(null,map__41290_41342__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_41340)," = goog.global.",cljs.core.get.call(null,global_exports_41343,cljs.core.symbol.call(null,lib_41340)),";");

var G__41344 = seq__41286_41336;
var G__41345 = chunk__41287_41337;
var G__41346 = count__41288_41338;
var G__41347 = (i__41289_41339 + (1));
seq__41286_41336 = G__41344;
chunk__41287_41337 = G__41345;
count__41288_41338 = G__41346;
i__41289_41339 = G__41347;
continue;
} else {
var temp__4657__auto___41348 = cljs.core.seq.call(null,seq__41286_41336);
if(temp__4657__auto___41348){
var seq__41286_41349__$1 = temp__4657__auto___41348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41286_41349__$1)){
var c__37147__auto___41350 = cljs.core.chunk_first.call(null,seq__41286_41349__$1);
var G__41351 = cljs.core.chunk_rest.call(null,seq__41286_41349__$1);
var G__41352 = c__37147__auto___41350;
var G__41353 = cljs.core.count.call(null,c__37147__auto___41350);
var G__41354 = (0);
seq__41286_41336 = G__41351;
chunk__41287_41337 = G__41352;
count__41288_41338 = G__41353;
i__41289_41339 = G__41354;
continue;
} else {
var lib_41355 = cljs.core.first.call(null,seq__41286_41349__$1);
var map__41292_41356 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_41355));
var map__41292_41357__$1 = ((((!((map__41292_41356 == null)))?((((map__41292_41356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41292_41356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41292_41356):map__41292_41356);
var global_exports_41358 = cljs.core.get.call(null,map__41292_41357__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_41355)," = goog.global.",cljs.core.get.call(null,global_exports_41358,cljs.core.symbol.call(null,lib_41355)),";");

var G__41359 = cljs.core.next.call(null,seq__41286_41349__$1);
var G__41360 = null;
var G__41361 = (0);
var G__41362 = (0);
seq__41286_41336 = G__41359;
chunk__41287_41337 = G__41360;
count__41288_41338 = G__41361;
i__41289_41339 = G__41362;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__41363){
var map__41364 = p__41363;
var map__41364__$1 = ((((!((map__41364 == null)))?((((map__41364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41364):map__41364);
var name = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__41366){
var map__41367 = p__41366;
var map__41367__$1 = ((((!((map__41367 == null)))?((((map__41367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41367):map__41367);
var name = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__41369){
var map__41370 = p__41369;
var map__41370__$1 = ((((!((map__41370 == null)))?((((map__41370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41370):map__41370);
var t = cljs.core.get.call(null,map__41370__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__41370__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__41370__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__41370__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__41370__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__41372_41390 = cljs.core.seq.call(null,protocols);
var chunk__41373_41391 = null;
var count__41374_41392 = (0);
var i__41375_41393 = (0);
while(true){
if((i__41375_41393 < count__41374_41392)){
var protocol_41394 = cljs.core._nth.call(null,chunk__41373_41391,i__41375_41393);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41394)].join('')),"}");

var G__41395 = seq__41372_41390;
var G__41396 = chunk__41373_41391;
var G__41397 = count__41374_41392;
var G__41398 = (i__41375_41393 + (1));
seq__41372_41390 = G__41395;
chunk__41373_41391 = G__41396;
count__41374_41392 = G__41397;
i__41375_41393 = G__41398;
continue;
} else {
var temp__4657__auto___41399 = cljs.core.seq.call(null,seq__41372_41390);
if(temp__4657__auto___41399){
var seq__41372_41400__$1 = temp__4657__auto___41399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41372_41400__$1)){
var c__37147__auto___41401 = cljs.core.chunk_first.call(null,seq__41372_41400__$1);
var G__41402 = cljs.core.chunk_rest.call(null,seq__41372_41400__$1);
var G__41403 = c__37147__auto___41401;
var G__41404 = cljs.core.count.call(null,c__37147__auto___41401);
var G__41405 = (0);
seq__41372_41390 = G__41402;
chunk__41373_41391 = G__41403;
count__41374_41392 = G__41404;
i__41375_41393 = G__41405;
continue;
} else {
var protocol_41406 = cljs.core.first.call(null,seq__41372_41400__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41406)].join('')),"}");

var G__41407 = cljs.core.next.call(null,seq__41372_41400__$1);
var G__41408 = null;
var G__41409 = (0);
var G__41410 = (0);
seq__41372_41390 = G__41407;
chunk__41373_41391 = G__41408;
count__41374_41392 = G__41409;
i__41375_41393 = G__41410;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__41376_41411 = cljs.core.seq.call(null,fields__$1);
var chunk__41377_41412 = null;
var count__41378_41413 = (0);
var i__41379_41414 = (0);
while(true){
if((i__41379_41414 < count__41378_41413)){
var fld_41415 = cljs.core._nth.call(null,chunk__41377_41412,i__41379_41414);
cljs.compiler.emitln.call(null,"this.",fld_41415," = ",fld_41415,";");

var G__41416 = seq__41376_41411;
var G__41417 = chunk__41377_41412;
var G__41418 = count__41378_41413;
var G__41419 = (i__41379_41414 + (1));
seq__41376_41411 = G__41416;
chunk__41377_41412 = G__41417;
count__41378_41413 = G__41418;
i__41379_41414 = G__41419;
continue;
} else {
var temp__4657__auto___41420 = cljs.core.seq.call(null,seq__41376_41411);
if(temp__4657__auto___41420){
var seq__41376_41421__$1 = temp__4657__auto___41420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41376_41421__$1)){
var c__37147__auto___41422 = cljs.core.chunk_first.call(null,seq__41376_41421__$1);
var G__41423 = cljs.core.chunk_rest.call(null,seq__41376_41421__$1);
var G__41424 = c__37147__auto___41422;
var G__41425 = cljs.core.count.call(null,c__37147__auto___41422);
var G__41426 = (0);
seq__41376_41411 = G__41423;
chunk__41377_41412 = G__41424;
count__41378_41413 = G__41425;
i__41379_41414 = G__41426;
continue;
} else {
var fld_41427 = cljs.core.first.call(null,seq__41376_41421__$1);
cljs.compiler.emitln.call(null,"this.",fld_41427," = ",fld_41427,";");

var G__41428 = cljs.core.next.call(null,seq__41376_41421__$1);
var G__41429 = null;
var G__41430 = (0);
var G__41431 = (0);
seq__41376_41411 = G__41428;
chunk__41377_41412 = G__41429;
count__41378_41413 = G__41430;
i__41379_41414 = G__41431;
continue;
}
} else {
}
}
break;
}

var seq__41380_41432 = cljs.core.seq.call(null,pmasks);
var chunk__41381_41433 = null;
var count__41382_41434 = (0);
var i__41383_41435 = (0);
while(true){
if((i__41383_41435 < count__41382_41434)){
var vec__41384_41436 = cljs.core._nth.call(null,chunk__41381_41433,i__41383_41435);
var pno_41437 = cljs.core.nth.call(null,vec__41384_41436,(0),null);
var pmask_41438 = cljs.core.nth.call(null,vec__41384_41436,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41437,"$ = ",pmask_41438,";");

var G__41439 = seq__41380_41432;
var G__41440 = chunk__41381_41433;
var G__41441 = count__41382_41434;
var G__41442 = (i__41383_41435 + (1));
seq__41380_41432 = G__41439;
chunk__41381_41433 = G__41440;
count__41382_41434 = G__41441;
i__41383_41435 = G__41442;
continue;
} else {
var temp__4657__auto___41443 = cljs.core.seq.call(null,seq__41380_41432);
if(temp__4657__auto___41443){
var seq__41380_41444__$1 = temp__4657__auto___41443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41380_41444__$1)){
var c__37147__auto___41445 = cljs.core.chunk_first.call(null,seq__41380_41444__$1);
var G__41446 = cljs.core.chunk_rest.call(null,seq__41380_41444__$1);
var G__41447 = c__37147__auto___41445;
var G__41448 = cljs.core.count.call(null,c__37147__auto___41445);
var G__41449 = (0);
seq__41380_41432 = G__41446;
chunk__41381_41433 = G__41447;
count__41382_41434 = G__41448;
i__41383_41435 = G__41449;
continue;
} else {
var vec__41387_41450 = cljs.core.first.call(null,seq__41380_41444__$1);
var pno_41451 = cljs.core.nth.call(null,vec__41387_41450,(0),null);
var pmask_41452 = cljs.core.nth.call(null,vec__41387_41450,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41451,"$ = ",pmask_41452,";");

var G__41453 = cljs.core.next.call(null,seq__41380_41444__$1);
var G__41454 = null;
var G__41455 = (0);
var G__41456 = (0);
seq__41380_41432 = G__41453;
chunk__41381_41433 = G__41454;
count__41382_41434 = G__41455;
i__41383_41435 = G__41456;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__41457){
var map__41458 = p__41457;
var map__41458__$1 = ((((!((map__41458 == null)))?((((map__41458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41458):map__41458);
var t = cljs.core.get.call(null,map__41458__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__41458__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__41458__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__41458__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__41458__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__41460_41478 = cljs.core.seq.call(null,protocols);
var chunk__41461_41479 = null;
var count__41462_41480 = (0);
var i__41463_41481 = (0);
while(true){
if((i__41463_41481 < count__41462_41480)){
var protocol_41482 = cljs.core._nth.call(null,chunk__41461_41479,i__41463_41481);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41482)].join('')),"}");

var G__41483 = seq__41460_41478;
var G__41484 = chunk__41461_41479;
var G__41485 = count__41462_41480;
var G__41486 = (i__41463_41481 + (1));
seq__41460_41478 = G__41483;
chunk__41461_41479 = G__41484;
count__41462_41480 = G__41485;
i__41463_41481 = G__41486;
continue;
} else {
var temp__4657__auto___41487 = cljs.core.seq.call(null,seq__41460_41478);
if(temp__4657__auto___41487){
var seq__41460_41488__$1 = temp__4657__auto___41487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41460_41488__$1)){
var c__37147__auto___41489 = cljs.core.chunk_first.call(null,seq__41460_41488__$1);
var G__41490 = cljs.core.chunk_rest.call(null,seq__41460_41488__$1);
var G__41491 = c__37147__auto___41489;
var G__41492 = cljs.core.count.call(null,c__37147__auto___41489);
var G__41493 = (0);
seq__41460_41478 = G__41490;
chunk__41461_41479 = G__41491;
count__41462_41480 = G__41492;
i__41463_41481 = G__41493;
continue;
} else {
var protocol_41494 = cljs.core.first.call(null,seq__41460_41488__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_41494)].join('')),"}");

var G__41495 = cljs.core.next.call(null,seq__41460_41488__$1);
var G__41496 = null;
var G__41497 = (0);
var G__41498 = (0);
seq__41460_41478 = G__41495;
chunk__41461_41479 = G__41496;
count__41462_41480 = G__41497;
i__41463_41481 = G__41498;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__41464_41499 = cljs.core.seq.call(null,fields__$1);
var chunk__41465_41500 = null;
var count__41466_41501 = (0);
var i__41467_41502 = (0);
while(true){
if((i__41467_41502 < count__41466_41501)){
var fld_41503 = cljs.core._nth.call(null,chunk__41465_41500,i__41467_41502);
cljs.compiler.emitln.call(null,"this.",fld_41503," = ",fld_41503,";");

var G__41504 = seq__41464_41499;
var G__41505 = chunk__41465_41500;
var G__41506 = count__41466_41501;
var G__41507 = (i__41467_41502 + (1));
seq__41464_41499 = G__41504;
chunk__41465_41500 = G__41505;
count__41466_41501 = G__41506;
i__41467_41502 = G__41507;
continue;
} else {
var temp__4657__auto___41508 = cljs.core.seq.call(null,seq__41464_41499);
if(temp__4657__auto___41508){
var seq__41464_41509__$1 = temp__4657__auto___41508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41464_41509__$1)){
var c__37147__auto___41510 = cljs.core.chunk_first.call(null,seq__41464_41509__$1);
var G__41511 = cljs.core.chunk_rest.call(null,seq__41464_41509__$1);
var G__41512 = c__37147__auto___41510;
var G__41513 = cljs.core.count.call(null,c__37147__auto___41510);
var G__41514 = (0);
seq__41464_41499 = G__41511;
chunk__41465_41500 = G__41512;
count__41466_41501 = G__41513;
i__41467_41502 = G__41514;
continue;
} else {
var fld_41515 = cljs.core.first.call(null,seq__41464_41509__$1);
cljs.compiler.emitln.call(null,"this.",fld_41515," = ",fld_41515,";");

var G__41516 = cljs.core.next.call(null,seq__41464_41509__$1);
var G__41517 = null;
var G__41518 = (0);
var G__41519 = (0);
seq__41464_41499 = G__41516;
chunk__41465_41500 = G__41517;
count__41466_41501 = G__41518;
i__41467_41502 = G__41519;
continue;
}
} else {
}
}
break;
}

var seq__41468_41520 = cljs.core.seq.call(null,pmasks);
var chunk__41469_41521 = null;
var count__41470_41522 = (0);
var i__41471_41523 = (0);
while(true){
if((i__41471_41523 < count__41470_41522)){
var vec__41472_41524 = cljs.core._nth.call(null,chunk__41469_41521,i__41471_41523);
var pno_41525 = cljs.core.nth.call(null,vec__41472_41524,(0),null);
var pmask_41526 = cljs.core.nth.call(null,vec__41472_41524,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41525,"$ = ",pmask_41526,";");

var G__41527 = seq__41468_41520;
var G__41528 = chunk__41469_41521;
var G__41529 = count__41470_41522;
var G__41530 = (i__41471_41523 + (1));
seq__41468_41520 = G__41527;
chunk__41469_41521 = G__41528;
count__41470_41522 = G__41529;
i__41471_41523 = G__41530;
continue;
} else {
var temp__4657__auto___41531 = cljs.core.seq.call(null,seq__41468_41520);
if(temp__4657__auto___41531){
var seq__41468_41532__$1 = temp__4657__auto___41531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41468_41532__$1)){
var c__37147__auto___41533 = cljs.core.chunk_first.call(null,seq__41468_41532__$1);
var G__41534 = cljs.core.chunk_rest.call(null,seq__41468_41532__$1);
var G__41535 = c__37147__auto___41533;
var G__41536 = cljs.core.count.call(null,c__37147__auto___41533);
var G__41537 = (0);
seq__41468_41520 = G__41534;
chunk__41469_41521 = G__41535;
count__41470_41522 = G__41536;
i__41471_41523 = G__41537;
continue;
} else {
var vec__41475_41538 = cljs.core.first.call(null,seq__41468_41532__$1);
var pno_41539 = cljs.core.nth.call(null,vec__41475_41538,(0),null);
var pmask_41540 = cljs.core.nth.call(null,vec__41475_41538,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_41539,"$ = ",pmask_41540,";");

var G__41541 = cljs.core.next.call(null,seq__41468_41532__$1);
var G__41542 = null;
var G__41543 = (0);
var G__41544 = (0);
seq__41468_41520 = G__41541;
chunk__41469_41521 = G__41542;
count__41470_41522 = G__41543;
i__41471_41523 = G__41544;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__41545){
var map__41546 = p__41545;
var map__41546__$1 = ((((!((map__41546 == null)))?((((map__41546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41546):map__41546);
var target = cljs.core.get.call(null,map__41546__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__41546__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__41546__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__41546__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__41546__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__41548){
var map__41549 = p__41548;
var map__41549__$1 = ((((!((map__41549 == null)))?((((map__41549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41549):map__41549);
var op = cljs.core.get.call(null,map__41549__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__41549__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__41549__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__41549__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__41549__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__36296__auto__ = code;
if(cljs.core.truth_(and__36296__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__36296__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__40465__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__40465__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__41554 = cljs.core.seq.call(null,table);
var chunk__41555 = null;
var count__41556 = (0);
var i__41557 = (0);
while(true){
if((i__41557 < count__41556)){
var vec__41558 = cljs.core._nth.call(null,chunk__41555,i__41557);
var sym = cljs.core.nth.call(null,vec__41558,(0),null);
var value = cljs.core.nth.call(null,vec__41558,(1),null);
var ns_41564 = cljs.core.namespace.call(null,sym);
var name_41565 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__41566 = seq__41554;
var G__41567 = chunk__41555;
var G__41568 = count__41556;
var G__41569 = (i__41557 + (1));
seq__41554 = G__41566;
chunk__41555 = G__41567;
count__41556 = G__41568;
i__41557 = G__41569;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41554);
if(temp__4657__auto__){
var seq__41554__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41554__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__41554__$1);
var G__41570 = cljs.core.chunk_rest.call(null,seq__41554__$1);
var G__41571 = c__37147__auto__;
var G__41572 = cljs.core.count.call(null,c__37147__auto__);
var G__41573 = (0);
seq__41554 = G__41570;
chunk__41555 = G__41571;
count__41556 = G__41572;
i__41557 = G__41573;
continue;
} else {
var vec__41561 = cljs.core.first.call(null,seq__41554__$1);
var sym = cljs.core.nth.call(null,vec__41561,(0),null);
var value = cljs.core.nth.call(null,vec__41561,(1),null);
var ns_41574 = cljs.core.namespace.call(null,sym);
var name_41575 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__41576 = cljs.core.next.call(null,seq__41554__$1);
var G__41577 = null;
var G__41578 = (0);
var G__41579 = (0);
seq__41554 = G__41576;
chunk__41555 = G__41577;
count__41556 = G__41578;
i__41557 = G__41579;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__41581 = arguments.length;
switch (G__41581) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_41586 = cljs.core.first.call(null,ks);
var vec__41582_41587 = cljs.core.conj.call(null,prefix,k_41586);
var top_41588 = cljs.core.nth.call(null,vec__41582_41587,(0),null);
var prefix_SINGLEQUOTE__41589 = vec__41582_41587;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_41586)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__41589) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_41588)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_41588)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__41589)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_41588);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__41589)),";");
}
} else {
}

var m_41590 = cljs.core.get.call(null,externs,k_41586);
if(cljs.core.empty_QMARK_.call(null,m_41590)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__41589,m_41590,top_level,known_externs);
}

var G__41591 = cljs.core.next.call(null,ks);
ks = G__41591;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1518330161176
