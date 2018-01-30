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
var map__49544 = s;
var map__49544__$1 = ((((!((map__49544 == null)))?((((map__49544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49544):map__49544);
var name = cljs.core.get.call(null,map__49544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__49544__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__49547 = info;
var map__49548 = G__49547;
var map__49548__$1 = ((((!((map__49548 == null)))?((((map__49548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49548):map__49548);
var shadow = cljs.core.get.call(null,map__49548__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__49547__$1 = G__49547;
while(true){
var d__$2 = d__$1;
var map__49550 = G__49547__$1;
var map__49550__$1 = ((((!((map__49550 == null)))?((((map__49550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49550):map__49550);
var shadow__$1 = cljs.core.get.call(null,map__49550__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__49552 = (d__$2 + (1));
var G__49553 = shadow__$1;
d__$1 = G__49552;
G__49547__$1 = G__49553;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__49554){
var map__49555 = p__49554;
var map__49555__$1 = ((((!((map__49555 == null)))?((((map__49555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49555):map__49555);
var name_var = map__49555__$1;
var name = cljs.core.get.call(null,map__49555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__49555__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__49557 = info;
var map__49557__$1 = ((((!((map__49557 == null)))?((((map__49557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49557):map__49557);
var ns = cljs.core.get.call(null,map__49557__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__49557__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__49560 = arguments.length;
switch (G__49560) {
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
var G__49562 = cp;
switch (G__49562) {
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
var seq__49564_49568 = cljs.core.seq.call(null,s);
var chunk__49565_49569 = null;
var count__49566_49570 = (0);
var i__49567_49571 = (0);
while(true){
if((i__49567_49571 < count__49566_49570)){
var c_49572 = cljs.core._nth.call(null,chunk__49565_49569,i__49567_49571);
sb.append(cljs.compiler.escape_char.call(null,c_49572));

var G__49573 = seq__49564_49568;
var G__49574 = chunk__49565_49569;
var G__49575 = count__49566_49570;
var G__49576 = (i__49567_49571 + (1));
seq__49564_49568 = G__49573;
chunk__49565_49569 = G__49574;
count__49566_49570 = G__49575;
i__49567_49571 = G__49576;
continue;
} else {
var temp__4657__auto___49577 = cljs.core.seq.call(null,seq__49564_49568);
if(temp__4657__auto___49577){
var seq__49564_49578__$1 = temp__4657__auto___49577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49564_49578__$1)){
var c__37147__auto___49579 = cljs.core.chunk_first.call(null,seq__49564_49578__$1);
var G__49580 = cljs.core.chunk_rest.call(null,seq__49564_49578__$1);
var G__49581 = c__37147__auto___49579;
var G__49582 = cljs.core.count.call(null,c__37147__auto___49579);
var G__49583 = (0);
seq__49564_49568 = G__49580;
chunk__49565_49569 = G__49581;
count__49566_49570 = G__49582;
i__49567_49571 = G__49583;
continue;
} else {
var c_49584 = cljs.core.first.call(null,seq__49564_49578__$1);
sb.append(cljs.compiler.escape_char.call(null,c_49584));

var G__49585 = cljs.core.next.call(null,seq__49564_49578__$1);
var G__49586 = null;
var G__49587 = (0);
var G__49588 = (0);
seq__49564_49568 = G__49585;
chunk__49565_49569 = G__49586;
count__49566_49570 = G__49587;
i__49567_49571 = G__49588;
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
var val__47941__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__47941__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__49589_49594 = ast;
var map__49589_49595__$1 = ((((!((map__49589_49594 == null)))?((((map__49589_49594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49589_49594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49589_49594):map__49589_49594);
var env_49596 = cljs.core.get.call(null,map__49589_49595__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_49596))){
var map__49591_49597 = env_49596;
var map__49591_49598__$1 = ((((!((map__49591_49597 == null)))?((((map__49591_49597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49591_49597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49591_49597):map__49591_49597);
var line_49599 = cljs.core.get.call(null,map__49591_49598__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49600 = cljs.core.get.call(null,map__49591_49598__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__49591_49597,map__49591_49598__$1,line_49599,column_49600,map__49589_49594,map__49589_49595__$1,env_49596,val__47941__auto__){
return (function (m){
var minfo = (function (){var G__49593 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__49593,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__49593;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_49599 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__49591_49597,map__49591_49598__$1,line_49599,column_49600,map__49589_49594,map__49589_49595__$1,env_49596,val__47941__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_49600)?(column_49600 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__49591_49597,map__49591_49598__$1,line_49599,column_49600,map__49589_49594,map__49589_49595__$1,env_49596,val__47941__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__49591_49597,map__49591_49598__$1,line_49599,column_49600,map__49589_49594,map__49589_49595__$1,env_49596,val__47941__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__49591_49597,map__49591_49598__$1,line_49599,column_49600,map__49589_49594,map__49589_49595__$1,env_49596,val__47941__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__49591_49597,map__49591_49598__$1,line_49599,column_49600,map__49589_49594,map__49589_49595__$1,env_49596,val__47941__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__47941__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__37486__auto__ = [];
var len__37479__auto___49607 = arguments.length;
var i__37480__auto___49608 = (0);
while(true){
if((i__37480__auto___49608 < len__37479__auto___49607)){
args__37486__auto__.push((arguments[i__37480__auto___49608]));

var G__49609 = (i__37480__auto___49608 + (1));
i__37480__auto___49608 = G__49609;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__49603_49610 = cljs.core.seq.call(null,xs);
var chunk__49604_49611 = null;
var count__49605_49612 = (0);
var i__49606_49613 = (0);
while(true){
if((i__49606_49613 < count__49605_49612)){
var x_49614 = cljs.core._nth.call(null,chunk__49604_49611,i__49606_49613);
if((x_49614 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_49614)){
cljs.compiler.emit.call(null,x_49614);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_49614)){
cljs.core.apply.call(null,cljs.compiler.emits,x_49614);
} else {
if(goog.isFunction(x_49614)){
x_49614.call(null);
} else {
var s_49615 = cljs.core.print_str.call(null,x_49614);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__49603_49610,chunk__49604_49611,count__49605_49612,i__49606_49613,s_49615,x_49614){
return (function (p1__49601_SHARP_){
return (p1__49601_SHARP_ + cljs.core.count.call(null,s_49615));
});})(seq__49603_49610,chunk__49604_49611,count__49605_49612,i__49606_49613,s_49615,x_49614))
);
}

cljs.core.print.call(null,s_49615);

}
}
}
}

var G__49616 = seq__49603_49610;
var G__49617 = chunk__49604_49611;
var G__49618 = count__49605_49612;
var G__49619 = (i__49606_49613 + (1));
seq__49603_49610 = G__49616;
chunk__49604_49611 = G__49617;
count__49605_49612 = G__49618;
i__49606_49613 = G__49619;
continue;
} else {
var temp__4657__auto___49620 = cljs.core.seq.call(null,seq__49603_49610);
if(temp__4657__auto___49620){
var seq__49603_49621__$1 = temp__4657__auto___49620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49603_49621__$1)){
var c__37147__auto___49622 = cljs.core.chunk_first.call(null,seq__49603_49621__$1);
var G__49623 = cljs.core.chunk_rest.call(null,seq__49603_49621__$1);
var G__49624 = c__37147__auto___49622;
var G__49625 = cljs.core.count.call(null,c__37147__auto___49622);
var G__49626 = (0);
seq__49603_49610 = G__49623;
chunk__49604_49611 = G__49624;
count__49605_49612 = G__49625;
i__49606_49613 = G__49626;
continue;
} else {
var x_49627 = cljs.core.first.call(null,seq__49603_49621__$1);
if((x_49627 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_49627)){
cljs.compiler.emit.call(null,x_49627);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_49627)){
cljs.core.apply.call(null,cljs.compiler.emits,x_49627);
} else {
if(goog.isFunction(x_49627)){
x_49627.call(null);
} else {
var s_49628 = cljs.core.print_str.call(null,x_49627);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__49603_49610,chunk__49604_49611,count__49605_49612,i__49606_49613,s_49628,x_49627,seq__49603_49621__$1,temp__4657__auto___49620){
return (function (p1__49601_SHARP_){
return (p1__49601_SHARP_ + cljs.core.count.call(null,s_49628));
});})(seq__49603_49610,chunk__49604_49611,count__49605_49612,i__49606_49613,s_49628,x_49627,seq__49603_49621__$1,temp__4657__auto___49620))
);
}

cljs.core.print.call(null,s_49628);

}
}
}
}

var G__49629 = cljs.core.next.call(null,seq__49603_49621__$1);
var G__49630 = null;
var G__49631 = (0);
var G__49632 = (0);
seq__49603_49610 = G__49629;
chunk__49604_49611 = G__49630;
count__49605_49612 = G__49631;
i__49606_49613 = G__49632;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq49602){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49602));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__37486__auto__ = [];
var len__37479__auto___49638 = arguments.length;
var i__37480__auto___49639 = (0);
while(true){
if((i__37480__auto___49639 < len__37479__auto___49638)){
args__37486__auto__.push((arguments[i__37480__auto___49639]));

var G__49640 = (i__37480__auto___49639 + (1));
i__37480__auto___49639 = G__49640;
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

var _STAR_flush_on_newline_STAR_49634_49641 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_49634_49641;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__49635){
var map__49636 = p__49635;
var map__49636__$1 = ((((!((map__49636 == null)))?((((map__49636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49636):map__49636);
var m = map__49636__$1;
var gen_line = cljs.core.get.call(null,map__49636__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq49633){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49633));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__37337__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_49642_49644 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_49643_49645 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_49642_49644,_STAR_print_fn_STAR_49643_49645,sb__37337__auto__){
return (function (x__37338__auto__){
return sb__37337__auto__.append(x__37338__auto__);
});})(_STAR_print_newline_STAR_49642_49644,_STAR_print_fn_STAR_49643_49645,sb__37337__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_49643_49645;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_49642_49644;
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
var vec__49646 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__49646,(0),null);
var flags = cljs.core.nth.call(null,vec__49646,(1),null);
var pattern = cljs.core.nth.call(null,vec__49646,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__49650){
var map__49651 = p__49650;
var map__49651__$1 = ((((!((map__49651 == null)))?((((map__49651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49651):map__49651);
var ast = map__49651__$1;
var info = cljs.core.get.call(null,map__49651__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__49651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__49651__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__49653 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__49653__$1 = ((((!((map__49653 == null)))?((((map__49653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49653):map__49653);
var cenv = map__49653__$1;
var options = cljs.core.get.call(null,map__49653__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__49655 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__36296__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__36296__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__36296__auto__;
}
})())){
return clojure.set.difference.call(null,G__49655,cljs.analyzer.es5_allowed);
} else {
return G__49655;
}
})();
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__49656 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__49656,reserved);
} else {
return G__49656;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__49657){
var map__49658 = p__49657;
var map__49658__$1 = ((((!((map__49658 == null)))?((((map__49658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49658):map__49658);
var arg = map__49658__$1;
var env = cljs.core.get.call(null,map__49658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__49658__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__49658__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__49658__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__49660 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__49660__$1 = ((((!((map__49660 == null)))?((((map__49660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49660):map__49660);
var name = cljs.core.get.call(null,map__49660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__49662){
var map__49663 = p__49662;
var map__49663__$1 = ((((!((map__49663 == null)))?((((map__49663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49663):map__49663);
var expr = cljs.core.get.call(null,map__49663__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__49663__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__49663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__49665_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__49665_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__49666){
var map__49667 = p__49666;
var map__49667__$1 = ((((!((map__49667 == null)))?((((map__49667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49667):map__49667);
var env = cljs.core.get.call(null,map__49667__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__49667__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__49667__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__49669){
var map__49670 = p__49669;
var map__49670__$1 = ((((!((map__49670 == null)))?((((map__49670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49670):map__49670);
var items = cljs.core.get.call(null,map__49670__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__49670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__49672){
var map__49673 = p__49672;
var map__49673__$1 = ((((!((map__49673 == null)))?((((map__49673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49673):map__49673);
var items = cljs.core.get.call(null,map__49673__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__49673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_49675 = cljs.core.count.call(null,items);
if((cnt_49675 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_49675,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__49676_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__49676_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__49677){
var map__49678 = p__49677;
var map__49678__$1 = ((((!((map__49678 == null)))?((((map__49678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49678):map__49678);
var items = cljs.core.get.call(null,map__49678__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__49678__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__49680){
var map__49681 = p__49680;
var map__49681__$1 = ((((!((map__49681 == null)))?((((map__49681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49681):map__49681);
var items = cljs.core.get.call(null,map__49681__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__49681__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__49681__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___49699 = cljs.core.seq.call(null,items);
if(temp__4657__auto___49699){
var items_49700__$1 = temp__4657__auto___49699;
var vec__49683_49701 = items_49700__$1;
var seq__49684_49702 = cljs.core.seq.call(null,vec__49683_49701);
var first__49685_49703 = cljs.core.first.call(null,seq__49684_49702);
var seq__49684_49704__$1 = cljs.core.next.call(null,seq__49684_49702);
var vec__49686_49705 = first__49685_49703;
var k_49706 = cljs.core.nth.call(null,vec__49686_49705,(0),null);
var v_49707 = cljs.core.nth.call(null,vec__49686_49705,(1),null);
var r_49708 = seq__49684_49704__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_49706),"\": ",v_49707);

var seq__49689_49709 = cljs.core.seq.call(null,r_49708);
var chunk__49690_49710 = null;
var count__49691_49711 = (0);
var i__49692_49712 = (0);
while(true){
if((i__49692_49712 < count__49691_49711)){
var vec__49693_49713 = cljs.core._nth.call(null,chunk__49690_49710,i__49692_49712);
var k_49714__$1 = cljs.core.nth.call(null,vec__49693_49713,(0),null);
var v_49715__$1 = cljs.core.nth.call(null,vec__49693_49713,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_49714__$1),"\": ",v_49715__$1);

var G__49716 = seq__49689_49709;
var G__49717 = chunk__49690_49710;
var G__49718 = count__49691_49711;
var G__49719 = (i__49692_49712 + (1));
seq__49689_49709 = G__49716;
chunk__49690_49710 = G__49717;
count__49691_49711 = G__49718;
i__49692_49712 = G__49719;
continue;
} else {
var temp__4657__auto___49720__$1 = cljs.core.seq.call(null,seq__49689_49709);
if(temp__4657__auto___49720__$1){
var seq__49689_49721__$1 = temp__4657__auto___49720__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49689_49721__$1)){
var c__37147__auto___49722 = cljs.core.chunk_first.call(null,seq__49689_49721__$1);
var G__49723 = cljs.core.chunk_rest.call(null,seq__49689_49721__$1);
var G__49724 = c__37147__auto___49722;
var G__49725 = cljs.core.count.call(null,c__37147__auto___49722);
var G__49726 = (0);
seq__49689_49709 = G__49723;
chunk__49690_49710 = G__49724;
count__49691_49711 = G__49725;
i__49692_49712 = G__49726;
continue;
} else {
var vec__49696_49727 = cljs.core.first.call(null,seq__49689_49721__$1);
var k_49728__$1 = cljs.core.nth.call(null,vec__49696_49727,(0),null);
var v_49729__$1 = cljs.core.nth.call(null,vec__49696_49727,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_49728__$1),"\": ",v_49729__$1);

var G__49730 = cljs.core.next.call(null,seq__49689_49721__$1);
var G__49731 = null;
var G__49732 = (0);
var G__49733 = (0);
seq__49689_49709 = G__49730;
chunk__49690_49710 = G__49731;
count__49691_49711 = G__49732;
i__49692_49712 = G__49733;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__49734){
var map__49735 = p__49734;
var map__49735__$1 = ((((!((map__49735 == null)))?((((map__49735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49735):map__49735);
var items = cljs.core.get.call(null,map__49735__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__49735__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__49735__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__49735__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__49737){
var map__49738 = p__49737;
var map__49738__$1 = ((((!((map__49738 == null)))?((((map__49738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49738):map__49738);
var form = cljs.core.get.call(null,map__49738__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__49738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__49740){
var map__49741 = p__49740;
var map__49741__$1 = ((((!((map__49741 == null)))?((((map__49741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49741):map__49741);
var op = cljs.core.get.call(null,map__49741__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__49741__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__49741__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__49743){
var map__49744 = p__49743;
var map__49744__$1 = ((((!((map__49744 == null)))?((((map__49744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49744):map__49744);
var op = cljs.core.get.call(null,map__49744__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__49744__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__49744__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__49746){
var map__49747 = p__49746;
var map__49747__$1 = ((((!((map__49747 == null)))?((((map__49747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49747):map__49747);
var test = cljs.core.get.call(null,map__49747__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__49747__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__49747__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__49747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__49747__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__49749){
var map__49750 = p__49749;
var map__49750__$1 = ((((!((map__49750 == null)))?((((map__49750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49750):map__49750);
var v = cljs.core.get.call(null,map__49750__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__49750__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__49750__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__49750__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__49750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__49752_49770 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__49753_49771 = null;
var count__49754_49772 = (0);
var i__49755_49773 = (0);
while(true){
if((i__49755_49773 < count__49754_49772)){
var vec__49756_49774 = cljs.core._nth.call(null,chunk__49753_49771,i__49755_49773);
var ts_49775 = cljs.core.nth.call(null,vec__49756_49774,(0),null);
var then_49776 = cljs.core.nth.call(null,vec__49756_49774,(1),null);
var seq__49759_49777 = cljs.core.seq.call(null,ts_49775);
var chunk__49760_49778 = null;
var count__49761_49779 = (0);
var i__49762_49780 = (0);
while(true){
if((i__49762_49780 < count__49761_49779)){
var test_49781 = cljs.core._nth.call(null,chunk__49760_49778,i__49762_49780);
cljs.compiler.emitln.call(null,"case ",test_49781,":");

var G__49782 = seq__49759_49777;
var G__49783 = chunk__49760_49778;
var G__49784 = count__49761_49779;
var G__49785 = (i__49762_49780 + (1));
seq__49759_49777 = G__49782;
chunk__49760_49778 = G__49783;
count__49761_49779 = G__49784;
i__49762_49780 = G__49785;
continue;
} else {
var temp__4657__auto___49786 = cljs.core.seq.call(null,seq__49759_49777);
if(temp__4657__auto___49786){
var seq__49759_49787__$1 = temp__4657__auto___49786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49759_49787__$1)){
var c__37147__auto___49788 = cljs.core.chunk_first.call(null,seq__49759_49787__$1);
var G__49789 = cljs.core.chunk_rest.call(null,seq__49759_49787__$1);
var G__49790 = c__37147__auto___49788;
var G__49791 = cljs.core.count.call(null,c__37147__auto___49788);
var G__49792 = (0);
seq__49759_49777 = G__49789;
chunk__49760_49778 = G__49790;
count__49761_49779 = G__49791;
i__49762_49780 = G__49792;
continue;
} else {
var test_49793 = cljs.core.first.call(null,seq__49759_49787__$1);
cljs.compiler.emitln.call(null,"case ",test_49793,":");

var G__49794 = cljs.core.next.call(null,seq__49759_49787__$1);
var G__49795 = null;
var G__49796 = (0);
var G__49797 = (0);
seq__49759_49777 = G__49794;
chunk__49760_49778 = G__49795;
count__49761_49779 = G__49796;
i__49762_49780 = G__49797;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_49776);
} else {
cljs.compiler.emitln.call(null,then_49776);
}

cljs.compiler.emitln.call(null,"break;");

var G__49798 = seq__49752_49770;
var G__49799 = chunk__49753_49771;
var G__49800 = count__49754_49772;
var G__49801 = (i__49755_49773 + (1));
seq__49752_49770 = G__49798;
chunk__49753_49771 = G__49799;
count__49754_49772 = G__49800;
i__49755_49773 = G__49801;
continue;
} else {
var temp__4657__auto___49802 = cljs.core.seq.call(null,seq__49752_49770);
if(temp__4657__auto___49802){
var seq__49752_49803__$1 = temp__4657__auto___49802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49752_49803__$1)){
var c__37147__auto___49804 = cljs.core.chunk_first.call(null,seq__49752_49803__$1);
var G__49805 = cljs.core.chunk_rest.call(null,seq__49752_49803__$1);
var G__49806 = c__37147__auto___49804;
var G__49807 = cljs.core.count.call(null,c__37147__auto___49804);
var G__49808 = (0);
seq__49752_49770 = G__49805;
chunk__49753_49771 = G__49806;
count__49754_49772 = G__49807;
i__49755_49773 = G__49808;
continue;
} else {
var vec__49763_49809 = cljs.core.first.call(null,seq__49752_49803__$1);
var ts_49810 = cljs.core.nth.call(null,vec__49763_49809,(0),null);
var then_49811 = cljs.core.nth.call(null,vec__49763_49809,(1),null);
var seq__49766_49812 = cljs.core.seq.call(null,ts_49810);
var chunk__49767_49813 = null;
var count__49768_49814 = (0);
var i__49769_49815 = (0);
while(true){
if((i__49769_49815 < count__49768_49814)){
var test_49816 = cljs.core._nth.call(null,chunk__49767_49813,i__49769_49815);
cljs.compiler.emitln.call(null,"case ",test_49816,":");

var G__49817 = seq__49766_49812;
var G__49818 = chunk__49767_49813;
var G__49819 = count__49768_49814;
var G__49820 = (i__49769_49815 + (1));
seq__49766_49812 = G__49817;
chunk__49767_49813 = G__49818;
count__49768_49814 = G__49819;
i__49769_49815 = G__49820;
continue;
} else {
var temp__4657__auto___49821__$1 = cljs.core.seq.call(null,seq__49766_49812);
if(temp__4657__auto___49821__$1){
var seq__49766_49822__$1 = temp__4657__auto___49821__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49766_49822__$1)){
var c__37147__auto___49823 = cljs.core.chunk_first.call(null,seq__49766_49822__$1);
var G__49824 = cljs.core.chunk_rest.call(null,seq__49766_49822__$1);
var G__49825 = c__37147__auto___49823;
var G__49826 = cljs.core.count.call(null,c__37147__auto___49823);
var G__49827 = (0);
seq__49766_49812 = G__49824;
chunk__49767_49813 = G__49825;
count__49768_49814 = G__49826;
i__49769_49815 = G__49827;
continue;
} else {
var test_49828 = cljs.core.first.call(null,seq__49766_49822__$1);
cljs.compiler.emitln.call(null,"case ",test_49828,":");

var G__49829 = cljs.core.next.call(null,seq__49766_49822__$1);
var G__49830 = null;
var G__49831 = (0);
var G__49832 = (0);
seq__49766_49812 = G__49829;
chunk__49767_49813 = G__49830;
count__49768_49814 = G__49831;
i__49769_49815 = G__49832;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_49811);
} else {
cljs.compiler.emitln.call(null,then_49811);
}

cljs.compiler.emitln.call(null,"break;");

var G__49833 = cljs.core.next.call(null,seq__49752_49803__$1);
var G__49834 = null;
var G__49835 = (0);
var G__49836 = (0);
seq__49752_49770 = G__49833;
chunk__49753_49771 = G__49834;
count__49754_49772 = G__49835;
i__49755_49773 = G__49836;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__49837){
var map__49838 = p__49837;
var map__49838__$1 = ((((!((map__49838 == null)))?((((map__49838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49838):map__49838);
var throw$ = cljs.core.get.call(null,map__49838__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__49838__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__49841 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__49841,(0),null);
var rstr = cljs.core.nth.call(null,vec__49841,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__49841,fstr,rstr,ret_t,axstr){
return (function (p1__49840_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__49840_SHARP_);
});})(idx,vec__49841,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__49844 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49844),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__49844;
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
return (function (p1__49845_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__49845_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__49846 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__49847 = cljs.core.seq.call(null,vec__49846);
var first__49848 = cljs.core.first.call(null,seq__49847);
var seq__49847__$1 = cljs.core.next.call(null,seq__49847);
var p = first__49848;
var first__49848__$1 = cljs.core.first.call(null,seq__49847__$1);
var seq__49847__$2 = cljs.core.next.call(null,seq__49847__$1);
var ts = first__49848__$1;
var first__49848__$2 = cljs.core.first.call(null,seq__49847__$2);
var seq__49847__$3 = cljs.core.next.call(null,seq__49847__$2);
var n = first__49848__$2;
var xs = seq__49847__$3;
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
var vec__49849 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__49850 = cljs.core.seq.call(null,vec__49849);
var first__49851 = cljs.core.first.call(null,seq__49850);
var seq__49850__$1 = cljs.core.next.call(null,seq__49850);
var p = first__49851;
var first__49851__$1 = cljs.core.first.call(null,seq__49850__$1);
var seq__49850__$2 = cljs.core.next.call(null,seq__49850__$1);
var ts = first__49851__$1;
var xs = seq__49850__$2;
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
var G__49854 = arguments.length;
switch (G__49854) {
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
var vec__49862 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__49852_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__49852_SHARP_);
} else {
return p1__49852_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__49863 = cljs.core.seq.call(null,vec__49862);
var first__49864 = cljs.core.first.call(null,seq__49863);
var seq__49863__$1 = cljs.core.next.call(null,seq__49863);
var x = first__49864;
var ys = seq__49863__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__49865 = cljs.core.seq.call(null,ys);
var chunk__49866 = null;
var count__49867 = (0);
var i__49868 = (0);
while(true){
if((i__49868 < count__49867)){
var next_line = cljs.core._nth.call(null,chunk__49866,i__49868);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__49874 = seq__49865;
var G__49875 = chunk__49866;
var G__49876 = count__49867;
var G__49877 = (i__49868 + (1));
seq__49865 = G__49874;
chunk__49866 = G__49875;
count__49867 = G__49876;
i__49868 = G__49877;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49865);
if(temp__4657__auto__){
var seq__49865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49865__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__49865__$1);
var G__49878 = cljs.core.chunk_rest.call(null,seq__49865__$1);
var G__49879 = c__37147__auto__;
var G__49880 = cljs.core.count.call(null,c__37147__auto__);
var G__49881 = (0);
seq__49865 = G__49878;
chunk__49866 = G__49879;
count__49867 = G__49880;
i__49868 = G__49881;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__49865__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__49882 = cljs.core.next.call(null,seq__49865__$1);
var G__49883 = null;
var G__49884 = (0);
var G__49885 = (0);
seq__49865 = G__49882;
chunk__49866 = G__49883;
count__49867 = G__49884;
i__49868 = G__49885;
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

var seq__49869_49886 = cljs.core.seq.call(null,docs__$2);
var chunk__49870_49887 = null;
var count__49871_49888 = (0);
var i__49872_49889 = (0);
while(true){
if((i__49872_49889 < count__49871_49888)){
var e_49890 = cljs.core._nth.call(null,chunk__49870_49887,i__49872_49889);
if(cljs.core.truth_(e_49890)){
print_comment_lines.call(null,e_49890);
} else {
}

var G__49891 = seq__49869_49886;
var G__49892 = chunk__49870_49887;
var G__49893 = count__49871_49888;
var G__49894 = (i__49872_49889 + (1));
seq__49869_49886 = G__49891;
chunk__49870_49887 = G__49892;
count__49871_49888 = G__49893;
i__49872_49889 = G__49894;
continue;
} else {
var temp__4657__auto___49895 = cljs.core.seq.call(null,seq__49869_49886);
if(temp__4657__auto___49895){
var seq__49869_49896__$1 = temp__4657__auto___49895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49869_49896__$1)){
var c__37147__auto___49897 = cljs.core.chunk_first.call(null,seq__49869_49896__$1);
var G__49898 = cljs.core.chunk_rest.call(null,seq__49869_49896__$1);
var G__49899 = c__37147__auto___49897;
var G__49900 = cljs.core.count.call(null,c__37147__auto___49897);
var G__49901 = (0);
seq__49869_49886 = G__49898;
chunk__49870_49887 = G__49899;
count__49871_49888 = G__49900;
i__49872_49889 = G__49901;
continue;
} else {
var e_49902 = cljs.core.first.call(null,seq__49869_49896__$1);
if(cljs.core.truth_(e_49902)){
print_comment_lines.call(null,e_49902);
} else {
}

var G__49903 = cljs.core.next.call(null,seq__49869_49896__$1);
var G__49904 = null;
var G__49905 = (0);
var G__49906 = (0);
seq__49869_49886 = G__49903;
chunk__49870_49887 = G__49904;
count__49871_49888 = G__49905;
i__49872_49889 = G__49906;
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
return (function (p1__49908_SHARP_){
return goog.string.startsWith(p1__49908_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__49909){
var map__49910 = p__49909;
var map__49910__$1 = ((((!((map__49910 == null)))?((((map__49910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49910):map__49910);
var name = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__49912){
var map__49913 = p__49912;
var map__49913__$1 = ((((!((map__49913 == null)))?((((map__49913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49913):map__49913);
var name = cljs.core.get.call(null,map__49913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__49913__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__49913__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__49915_49933 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__49916_49934 = null;
var count__49917_49935 = (0);
var i__49918_49936 = (0);
while(true){
if((i__49918_49936 < count__49917_49935)){
var vec__49919_49937 = cljs.core._nth.call(null,chunk__49916_49934,i__49918_49936);
var i_49938 = cljs.core.nth.call(null,vec__49919_49937,(0),null);
var param_49939 = cljs.core.nth.call(null,vec__49919_49937,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_49939);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__49940 = seq__49915_49933;
var G__49941 = chunk__49916_49934;
var G__49942 = count__49917_49935;
var G__49943 = (i__49918_49936 + (1));
seq__49915_49933 = G__49940;
chunk__49916_49934 = G__49941;
count__49917_49935 = G__49942;
i__49918_49936 = G__49943;
continue;
} else {
var temp__4657__auto___49944 = cljs.core.seq.call(null,seq__49915_49933);
if(temp__4657__auto___49944){
var seq__49915_49945__$1 = temp__4657__auto___49944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49915_49945__$1)){
var c__37147__auto___49946 = cljs.core.chunk_first.call(null,seq__49915_49945__$1);
var G__49947 = cljs.core.chunk_rest.call(null,seq__49915_49945__$1);
var G__49948 = c__37147__auto___49946;
var G__49949 = cljs.core.count.call(null,c__37147__auto___49946);
var G__49950 = (0);
seq__49915_49933 = G__49947;
chunk__49916_49934 = G__49948;
count__49917_49935 = G__49949;
i__49918_49936 = G__49950;
continue;
} else {
var vec__49922_49951 = cljs.core.first.call(null,seq__49915_49945__$1);
var i_49952 = cljs.core.nth.call(null,vec__49922_49951,(0),null);
var param_49953 = cljs.core.nth.call(null,vec__49922_49951,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_49953);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__49954 = cljs.core.next.call(null,seq__49915_49945__$1);
var G__49955 = null;
var G__49956 = (0);
var G__49957 = (0);
seq__49915_49933 = G__49954;
chunk__49916_49934 = G__49955;
count__49917_49935 = G__49956;
i__49918_49936 = G__49957;
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

var seq__49925_49958 = cljs.core.seq.call(null,params);
var chunk__49926_49959 = null;
var count__49927_49960 = (0);
var i__49928_49961 = (0);
while(true){
if((i__49928_49961 < count__49927_49960)){
var param_49962 = cljs.core._nth.call(null,chunk__49926_49959,i__49928_49961);
cljs.compiler.emit.call(null,param_49962);

if(cljs.core._EQ_.call(null,param_49962,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__49963 = seq__49925_49958;
var G__49964 = chunk__49926_49959;
var G__49965 = count__49927_49960;
var G__49966 = (i__49928_49961 + (1));
seq__49925_49958 = G__49963;
chunk__49926_49959 = G__49964;
count__49927_49960 = G__49965;
i__49928_49961 = G__49966;
continue;
} else {
var temp__4657__auto___49967 = cljs.core.seq.call(null,seq__49925_49958);
if(temp__4657__auto___49967){
var seq__49925_49968__$1 = temp__4657__auto___49967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49925_49968__$1)){
var c__37147__auto___49969 = cljs.core.chunk_first.call(null,seq__49925_49968__$1);
var G__49970 = cljs.core.chunk_rest.call(null,seq__49925_49968__$1);
var G__49971 = c__37147__auto___49969;
var G__49972 = cljs.core.count.call(null,c__37147__auto___49969);
var G__49973 = (0);
seq__49925_49958 = G__49970;
chunk__49926_49959 = G__49971;
count__49927_49960 = G__49972;
i__49928_49961 = G__49973;
continue;
} else {
var param_49974 = cljs.core.first.call(null,seq__49925_49968__$1);
cljs.compiler.emit.call(null,param_49974);

if(cljs.core._EQ_.call(null,param_49974,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__49975 = cljs.core.next.call(null,seq__49925_49968__$1);
var G__49976 = null;
var G__49977 = (0);
var G__49978 = (0);
seq__49925_49958 = G__49975;
chunk__49926_49959 = G__49976;
count__49927_49960 = G__49977;
i__49928_49961 = G__49978;
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

var seq__49929_49979 = cljs.core.seq.call(null,params);
var chunk__49930_49980 = null;
var count__49931_49981 = (0);
var i__49932_49982 = (0);
while(true){
if((i__49932_49982 < count__49931_49981)){
var param_49983 = cljs.core._nth.call(null,chunk__49930_49980,i__49932_49982);
cljs.compiler.emit.call(null,param_49983);

if(cljs.core._EQ_.call(null,param_49983,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__49984 = seq__49929_49979;
var G__49985 = chunk__49930_49980;
var G__49986 = count__49931_49981;
var G__49987 = (i__49932_49982 + (1));
seq__49929_49979 = G__49984;
chunk__49930_49980 = G__49985;
count__49931_49981 = G__49986;
i__49932_49982 = G__49987;
continue;
} else {
var temp__4657__auto___49988 = cljs.core.seq.call(null,seq__49929_49979);
if(temp__4657__auto___49988){
var seq__49929_49989__$1 = temp__4657__auto___49988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49929_49989__$1)){
var c__37147__auto___49990 = cljs.core.chunk_first.call(null,seq__49929_49989__$1);
var G__49991 = cljs.core.chunk_rest.call(null,seq__49929_49989__$1);
var G__49992 = c__37147__auto___49990;
var G__49993 = cljs.core.count.call(null,c__37147__auto___49990);
var G__49994 = (0);
seq__49929_49979 = G__49991;
chunk__49930_49980 = G__49992;
count__49931_49981 = G__49993;
i__49932_49982 = G__49994;
continue;
} else {
var param_49995 = cljs.core.first.call(null,seq__49929_49989__$1);
cljs.compiler.emit.call(null,param_49995);

if(cljs.core._EQ_.call(null,param_49995,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__49996 = cljs.core.next.call(null,seq__49929_49989__$1);
var G__49997 = null;
var G__49998 = (0);
var G__49999 = (0);
seq__49929_49979 = G__49996;
chunk__49930_49980 = G__49997;
count__49931_49981 = G__49998;
i__49932_49982 = G__49999;
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
var seq__50000 = cljs.core.seq.call(null,params);
var chunk__50001 = null;
var count__50002 = (0);
var i__50003 = (0);
while(true){
if((i__50003 < count__50002)){
var param = cljs.core._nth.call(null,chunk__50001,i__50003);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__50004 = seq__50000;
var G__50005 = chunk__50001;
var G__50006 = count__50002;
var G__50007 = (i__50003 + (1));
seq__50000 = G__50004;
chunk__50001 = G__50005;
count__50002 = G__50006;
i__50003 = G__50007;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50000);
if(temp__4657__auto__){
var seq__50000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50000__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__50000__$1);
var G__50008 = cljs.core.chunk_rest.call(null,seq__50000__$1);
var G__50009 = c__37147__auto__;
var G__50010 = cljs.core.count.call(null,c__37147__auto__);
var G__50011 = (0);
seq__50000 = G__50008;
chunk__50001 = G__50009;
count__50002 = G__50010;
i__50003 = G__50011;
continue;
} else {
var param = cljs.core.first.call(null,seq__50000__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__50012 = cljs.core.next.call(null,seq__50000__$1);
var G__50013 = null;
var G__50014 = (0);
var G__50015 = (0);
seq__50000 = G__50012;
chunk__50001 = G__50013;
count__50002 = G__50014;
i__50003 = G__50015;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__50016){
var map__50017 = p__50016;
var map__50017__$1 = ((((!((map__50017 == null)))?((((map__50017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50017):map__50017);
var type = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__50019){
var map__50020 = p__50019;
var map__50020__$1 = ((((!((map__50020 == null)))?((((map__50020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50020):map__50020);
var f = map__50020__$1;
var type = cljs.core.get.call(null,map__50020__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__50020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__50020__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__50020__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__50020__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__50020__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__50020__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__50020__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_50030__$1 = (function (){var or__36308__auto__ = name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_50031 = cljs.compiler.munge.call(null,name_50030__$1);
var delegate_name_50032 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_50031),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_50032," = function (");

var seq__50022_50033 = cljs.core.seq.call(null,params);
var chunk__50023_50034 = null;
var count__50024_50035 = (0);
var i__50025_50036 = (0);
while(true){
if((i__50025_50036 < count__50024_50035)){
var param_50037 = cljs.core._nth.call(null,chunk__50023_50034,i__50025_50036);
cljs.compiler.emit.call(null,param_50037);

if(cljs.core._EQ_.call(null,param_50037,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__50038 = seq__50022_50033;
var G__50039 = chunk__50023_50034;
var G__50040 = count__50024_50035;
var G__50041 = (i__50025_50036 + (1));
seq__50022_50033 = G__50038;
chunk__50023_50034 = G__50039;
count__50024_50035 = G__50040;
i__50025_50036 = G__50041;
continue;
} else {
var temp__4657__auto___50042 = cljs.core.seq.call(null,seq__50022_50033);
if(temp__4657__auto___50042){
var seq__50022_50043__$1 = temp__4657__auto___50042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50022_50043__$1)){
var c__37147__auto___50044 = cljs.core.chunk_first.call(null,seq__50022_50043__$1);
var G__50045 = cljs.core.chunk_rest.call(null,seq__50022_50043__$1);
var G__50046 = c__37147__auto___50044;
var G__50047 = cljs.core.count.call(null,c__37147__auto___50044);
var G__50048 = (0);
seq__50022_50033 = G__50045;
chunk__50023_50034 = G__50046;
count__50024_50035 = G__50047;
i__50025_50036 = G__50048;
continue;
} else {
var param_50049 = cljs.core.first.call(null,seq__50022_50043__$1);
cljs.compiler.emit.call(null,param_50049);

if(cljs.core._EQ_.call(null,param_50049,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__50050 = cljs.core.next.call(null,seq__50022_50043__$1);
var G__50051 = null;
var G__50052 = (0);
var G__50053 = (0);
seq__50022_50033 = G__50050;
chunk__50023_50034 = G__50051;
count__50024_50035 = G__50052;
i__50025_50036 = G__50053;
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

cljs.compiler.emitln.call(null,"var ",mname_50031," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_50054 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_50054,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_50032,".call(this,");

var seq__50026_50055 = cljs.core.seq.call(null,params);
var chunk__50027_50056 = null;
var count__50028_50057 = (0);
var i__50029_50058 = (0);
while(true){
if((i__50029_50058 < count__50028_50057)){
var param_50059 = cljs.core._nth.call(null,chunk__50027_50056,i__50029_50058);
cljs.compiler.emit.call(null,param_50059);

if(cljs.core._EQ_.call(null,param_50059,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__50060 = seq__50026_50055;
var G__50061 = chunk__50027_50056;
var G__50062 = count__50028_50057;
var G__50063 = (i__50029_50058 + (1));
seq__50026_50055 = G__50060;
chunk__50027_50056 = G__50061;
count__50028_50057 = G__50062;
i__50029_50058 = G__50063;
continue;
} else {
var temp__4657__auto___50064 = cljs.core.seq.call(null,seq__50026_50055);
if(temp__4657__auto___50064){
var seq__50026_50065__$1 = temp__4657__auto___50064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50026_50065__$1)){
var c__37147__auto___50066 = cljs.core.chunk_first.call(null,seq__50026_50065__$1);
var G__50067 = cljs.core.chunk_rest.call(null,seq__50026_50065__$1);
var G__50068 = c__37147__auto___50066;
var G__50069 = cljs.core.count.call(null,c__37147__auto___50066);
var G__50070 = (0);
seq__50026_50055 = G__50067;
chunk__50027_50056 = G__50068;
count__50028_50057 = G__50069;
i__50029_50058 = G__50070;
continue;
} else {
var param_50071 = cljs.core.first.call(null,seq__50026_50065__$1);
cljs.compiler.emit.call(null,param_50071);

if(cljs.core._EQ_.call(null,param_50071,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__50072 = cljs.core.next.call(null,seq__50026_50065__$1);
var G__50073 = null;
var G__50074 = (0);
var G__50075 = (0);
seq__50026_50055 = G__50072;
chunk__50027_50056 = G__50073;
count__50028_50057 = G__50074;
i__50029_50058 = G__50075;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_50031,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_50031,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_50030__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_50031,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_50032,";");

cljs.compiler.emitln.call(null,"return ",mname_50031,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__50079){
var map__50080 = p__50079;
var map__50080__$1 = ((((!((map__50080 == null)))?((((map__50080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50080):map__50080);
var name = cljs.core.get.call(null,map__50080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__50080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__50080__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__50080__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__50080__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__50080__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__50080__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__50080,map__50080__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__50076_SHARP_){
var and__36296__auto__ = p1__50076_SHARP_;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__50076_SHARP_));
} else {
return and__36296__auto__;
}
});})(map__50080,map__50080__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_50115__$1 = (function (){var or__36308__auto__ = name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_50116 = cljs.compiler.munge.call(null,name_50115__$1);
var maxparams_50117 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_50118 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_50115__$1,mname_50116,maxparams_50117,loop_locals,map__50080,map__50080__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_50116),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_50115__$1,mname_50116,maxparams_50117,loop_locals,map__50080,map__50080__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_50119 = cljs.core.sort_by.call(null,((function (name_50115__$1,mname_50116,maxparams_50117,mmap_50118,loop_locals,map__50080,map__50080__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__50077_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__50077_SHARP_)));
});})(name_50115__$1,mname_50116,maxparams_50117,mmap_50118,loop_locals,map__50080,map__50080__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_50118));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_50116," = null;");

var seq__50082_50120 = cljs.core.seq.call(null,ms_50119);
var chunk__50083_50121 = null;
var count__50084_50122 = (0);
var i__50085_50123 = (0);
while(true){
if((i__50085_50123 < count__50084_50122)){
var vec__50086_50124 = cljs.core._nth.call(null,chunk__50083_50121,i__50085_50123);
var n_50125 = cljs.core.nth.call(null,vec__50086_50124,(0),null);
var meth_50126 = cljs.core.nth.call(null,vec__50086_50124,(1),null);
cljs.compiler.emits.call(null,"var ",n_50125," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_50126))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_50126);
} else {
cljs.compiler.emit_fn_method.call(null,meth_50126);
}

cljs.compiler.emitln.call(null,";");

var G__50127 = seq__50082_50120;
var G__50128 = chunk__50083_50121;
var G__50129 = count__50084_50122;
var G__50130 = (i__50085_50123 + (1));
seq__50082_50120 = G__50127;
chunk__50083_50121 = G__50128;
count__50084_50122 = G__50129;
i__50085_50123 = G__50130;
continue;
} else {
var temp__4657__auto___50131 = cljs.core.seq.call(null,seq__50082_50120);
if(temp__4657__auto___50131){
var seq__50082_50132__$1 = temp__4657__auto___50131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50082_50132__$1)){
var c__37147__auto___50133 = cljs.core.chunk_first.call(null,seq__50082_50132__$1);
var G__50134 = cljs.core.chunk_rest.call(null,seq__50082_50132__$1);
var G__50135 = c__37147__auto___50133;
var G__50136 = cljs.core.count.call(null,c__37147__auto___50133);
var G__50137 = (0);
seq__50082_50120 = G__50134;
chunk__50083_50121 = G__50135;
count__50084_50122 = G__50136;
i__50085_50123 = G__50137;
continue;
} else {
var vec__50089_50138 = cljs.core.first.call(null,seq__50082_50132__$1);
var n_50139 = cljs.core.nth.call(null,vec__50089_50138,(0),null);
var meth_50140 = cljs.core.nth.call(null,vec__50089_50138,(1),null);
cljs.compiler.emits.call(null,"var ",n_50139," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_50140))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_50140);
} else {
cljs.compiler.emit_fn_method.call(null,meth_50140);
}

cljs.compiler.emitln.call(null,";");

var G__50141 = cljs.core.next.call(null,seq__50082_50132__$1);
var G__50142 = null;
var G__50143 = (0);
var G__50144 = (0);
seq__50082_50120 = G__50141;
chunk__50083_50121 = G__50142;
count__50084_50122 = G__50143;
i__50085_50123 = G__50144;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_50116," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_50117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_50117)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_50117));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__50092_50145 = cljs.core.seq.call(null,ms_50119);
var chunk__50093_50146 = null;
var count__50094_50147 = (0);
var i__50095_50148 = (0);
while(true){
if((i__50095_50148 < count__50094_50147)){
var vec__50096_50149 = cljs.core._nth.call(null,chunk__50093_50146,i__50095_50148);
var n_50150 = cljs.core.nth.call(null,vec__50096_50149,(0),null);
var meth_50151 = cljs.core.nth.call(null,vec__50096_50149,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_50151))){
cljs.compiler.emitln.call(null,"default:");

var restarg_50152 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_50152," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_50153 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_50152," = new cljs.core.IndexedSeq(",a_50153,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_50150,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_50117)),(((cljs.core.count.call(null,maxparams_50117) > (1)))?", ":null),restarg_50152,");");
} else {
var pcnt_50154 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_50151));
cljs.compiler.emitln.call(null,"case ",pcnt_50154,":");

cljs.compiler.emitln.call(null,"return ",n_50150,".call(this",(((pcnt_50154 === (0)))?null:cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_50154,maxparams_50117));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),",")),");");
}

var G__50155 = seq__50092_50145;
var G__50156 = chunk__50093_50146;
var G__50157 = count__50094_50147;
var G__50158 = (i__50095_50148 + (1));
seq__50092_50145 = G__50155;
chunk__50093_50146 = G__50156;
count__50094_50147 = G__50157;
i__50095_50148 = G__50158;
continue;
} else {
var temp__4657__auto___50159 = cljs.core.seq.call(null,seq__50092_50145);
if(temp__4657__auto___50159){
var seq__50092_50160__$1 = temp__4657__auto___50159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50092_50160__$1)){
var c__37147__auto___50161 = cljs.core.chunk_first.call(null,seq__50092_50160__$1);
var G__50162 = cljs.core.chunk_rest.call(null,seq__50092_50160__$1);
var G__50163 = c__37147__auto___50161;
var G__50164 = cljs.core.count.call(null,c__37147__auto___50161);
var G__50165 = (0);
seq__50092_50145 = G__50162;
chunk__50093_50146 = G__50163;
count__50094_50147 = G__50164;
i__50095_50148 = G__50165;
continue;
} else {
var vec__50099_50166 = cljs.core.first.call(null,seq__50092_50160__$1);
var n_50167 = cljs.core.nth.call(null,vec__50099_50166,(0),null);
var meth_50168 = cljs.core.nth.call(null,vec__50099_50166,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_50168))){
cljs.compiler.emitln.call(null,"default:");

var restarg_50169 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_50169," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_50170 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_50169," = new cljs.core.IndexedSeq(",a_50170,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_50167,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_50117)),(((cljs.core.count.call(null,maxparams_50117) > (1)))?", ":null),restarg_50169,");");
} else {
var pcnt_50171 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_50168));
cljs.compiler.emitln.call(null,"case ",pcnt_50171,":");

cljs.compiler.emitln.call(null,"return ",n_50167,".call(this",(((pcnt_50171 === (0)))?null:cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_50171,maxparams_50117));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),",")),");");
}

var G__50172 = cljs.core.next.call(null,seq__50092_50160__$1);
var G__50173 = null;
var G__50174 = (0);
var G__50175 = (0);
seq__50092_50145 = G__50172;
chunk__50093_50146 = G__50173;
count__50094_50147 = G__50174;
i__50095_50148 = G__50175;
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
cljs.compiler.emitln.call(null,mname_50116,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_50116,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_50115__$1,mname_50116,maxparams_50117,mmap_50118,ms_50119,loop_locals,map__50080,map__50080__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__50078_SHARP_){
var vec__50102 = p1__50078_SHARP_;
var n = cljs.core.nth.call(null,vec__50102,(0),null);
var m = cljs.core.nth.call(null,vec__50102,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_50115__$1,mname_50116,maxparams_50117,mmap_50118,ms_50119,loop_locals,map__50080,map__50080__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_50119),".cljs$lang$applyTo;");
} else {
}

var seq__50105_50176 = cljs.core.seq.call(null,ms_50119);
var chunk__50106_50177 = null;
var count__50107_50178 = (0);
var i__50108_50179 = (0);
while(true){
if((i__50108_50179 < count__50107_50178)){
var vec__50109_50180 = cljs.core._nth.call(null,chunk__50106_50177,i__50108_50179);
var n_50181 = cljs.core.nth.call(null,vec__50109_50180,(0),null);
var meth_50182 = cljs.core.nth.call(null,vec__50109_50180,(1),null);
var c_50183 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_50182));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_50182))){
cljs.compiler.emitln.call(null,mname_50116,".cljs$core$IFn$_invoke$arity$variadic = ",n_50181,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_50116,".cljs$core$IFn$_invoke$arity$",c_50183," = ",n_50181,";");
}

var G__50184 = seq__50105_50176;
var G__50185 = chunk__50106_50177;
var G__50186 = count__50107_50178;
var G__50187 = (i__50108_50179 + (1));
seq__50105_50176 = G__50184;
chunk__50106_50177 = G__50185;
count__50107_50178 = G__50186;
i__50108_50179 = G__50187;
continue;
} else {
var temp__4657__auto___50188 = cljs.core.seq.call(null,seq__50105_50176);
if(temp__4657__auto___50188){
var seq__50105_50189__$1 = temp__4657__auto___50188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50105_50189__$1)){
var c__37147__auto___50190 = cljs.core.chunk_first.call(null,seq__50105_50189__$1);
var G__50191 = cljs.core.chunk_rest.call(null,seq__50105_50189__$1);
var G__50192 = c__37147__auto___50190;
var G__50193 = cljs.core.count.call(null,c__37147__auto___50190);
var G__50194 = (0);
seq__50105_50176 = G__50191;
chunk__50106_50177 = G__50192;
count__50107_50178 = G__50193;
i__50108_50179 = G__50194;
continue;
} else {
var vec__50112_50195 = cljs.core.first.call(null,seq__50105_50189__$1);
var n_50196 = cljs.core.nth.call(null,vec__50112_50195,(0),null);
var meth_50197 = cljs.core.nth.call(null,vec__50112_50195,(1),null);
var c_50198 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_50197));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_50197))){
cljs.compiler.emitln.call(null,mname_50116,".cljs$core$IFn$_invoke$arity$variadic = ",n_50196,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_50116,".cljs$core$IFn$_invoke$arity$",c_50198," = ",n_50196,";");
}

var G__50199 = cljs.core.next.call(null,seq__50105_50189__$1);
var G__50200 = null;
var G__50201 = (0);
var G__50202 = (0);
seq__50105_50176 = G__50199;
chunk__50106_50177 = G__50200;
count__50107_50178 = G__50201;
i__50108_50179 = G__50202;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_50116,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__50203){
var map__50204 = p__50203;
var map__50204__$1 = ((((!((map__50204 == null)))?((((map__50204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50204):map__50204);
var statements = cljs.core.get.call(null,map__50204__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__50204__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__50204__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__50206_50210 = cljs.core.seq.call(null,statements);
var chunk__50207_50211 = null;
var count__50208_50212 = (0);
var i__50209_50213 = (0);
while(true){
if((i__50209_50213 < count__50208_50212)){
var s_50214 = cljs.core._nth.call(null,chunk__50207_50211,i__50209_50213);
cljs.compiler.emitln.call(null,s_50214);

var G__50215 = seq__50206_50210;
var G__50216 = chunk__50207_50211;
var G__50217 = count__50208_50212;
var G__50218 = (i__50209_50213 + (1));
seq__50206_50210 = G__50215;
chunk__50207_50211 = G__50216;
count__50208_50212 = G__50217;
i__50209_50213 = G__50218;
continue;
} else {
var temp__4657__auto___50219 = cljs.core.seq.call(null,seq__50206_50210);
if(temp__4657__auto___50219){
var seq__50206_50220__$1 = temp__4657__auto___50219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50206_50220__$1)){
var c__37147__auto___50221 = cljs.core.chunk_first.call(null,seq__50206_50220__$1);
var G__50222 = cljs.core.chunk_rest.call(null,seq__50206_50220__$1);
var G__50223 = c__37147__auto___50221;
var G__50224 = cljs.core.count.call(null,c__37147__auto___50221);
var G__50225 = (0);
seq__50206_50210 = G__50222;
chunk__50207_50211 = G__50223;
count__50208_50212 = G__50224;
i__50209_50213 = G__50225;
continue;
} else {
var s_50226 = cljs.core.first.call(null,seq__50206_50220__$1);
cljs.compiler.emitln.call(null,s_50226);

var G__50227 = cljs.core.next.call(null,seq__50206_50220__$1);
var G__50228 = null;
var G__50229 = (0);
var G__50230 = (0);
seq__50206_50210 = G__50227;
chunk__50207_50211 = G__50228;
count__50208_50212 = G__50229;
i__50209_50213 = G__50230;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__50231){
var map__50232 = p__50231;
var map__50232__$1 = ((((!((map__50232 == null)))?((((map__50232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50232):map__50232);
var env = cljs.core.get.call(null,map__50232__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__50232__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__50232__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__50232__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__50232__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__50234,is_loop){
var map__50235 = p__50234;
var map__50235__$1 = ((((!((map__50235 == null)))?((((map__50235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50235):map__50235);
var bindings = cljs.core.get.call(null,map__50235__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__50235__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__50235__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_50237_50246 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_50237_50246,context,map__50235,map__50235__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_50237_50246,context,map__50235,map__50235__$1,bindings,expr,env))
,bindings):null));

try{var seq__50238_50247 = cljs.core.seq.call(null,bindings);
var chunk__50239_50248 = null;
var count__50240_50249 = (0);
var i__50241_50250 = (0);
while(true){
if((i__50241_50250 < count__50240_50249)){
var map__50242_50251 = cljs.core._nth.call(null,chunk__50239_50248,i__50241_50250);
var map__50242_50252__$1 = ((((!((map__50242_50251 == null)))?((((map__50242_50251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50242_50251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50242_50251):map__50242_50251);
var binding_50253 = map__50242_50252__$1;
var init_50254 = cljs.core.get.call(null,map__50242_50252__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_50253);

cljs.compiler.emitln.call(null," = ",init_50254,";");

var G__50255 = seq__50238_50247;
var G__50256 = chunk__50239_50248;
var G__50257 = count__50240_50249;
var G__50258 = (i__50241_50250 + (1));
seq__50238_50247 = G__50255;
chunk__50239_50248 = G__50256;
count__50240_50249 = G__50257;
i__50241_50250 = G__50258;
continue;
} else {
var temp__4657__auto___50259 = cljs.core.seq.call(null,seq__50238_50247);
if(temp__4657__auto___50259){
var seq__50238_50260__$1 = temp__4657__auto___50259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50238_50260__$1)){
var c__37147__auto___50261 = cljs.core.chunk_first.call(null,seq__50238_50260__$1);
var G__50262 = cljs.core.chunk_rest.call(null,seq__50238_50260__$1);
var G__50263 = c__37147__auto___50261;
var G__50264 = cljs.core.count.call(null,c__37147__auto___50261);
var G__50265 = (0);
seq__50238_50247 = G__50262;
chunk__50239_50248 = G__50263;
count__50240_50249 = G__50264;
i__50241_50250 = G__50265;
continue;
} else {
var map__50244_50266 = cljs.core.first.call(null,seq__50238_50260__$1);
var map__50244_50267__$1 = ((((!((map__50244_50266 == null)))?((((map__50244_50266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50244_50266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50244_50266):map__50244_50266);
var binding_50268 = map__50244_50267__$1;
var init_50269 = cljs.core.get.call(null,map__50244_50267__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_50268);

cljs.compiler.emitln.call(null," = ",init_50269,";");

var G__50270 = cljs.core.next.call(null,seq__50238_50260__$1);
var G__50271 = null;
var G__50272 = (0);
var G__50273 = (0);
seq__50238_50247 = G__50270;
chunk__50239_50248 = G__50271;
count__50240_50249 = G__50272;
i__50241_50250 = G__50273;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_50237_50246;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__50274){
var map__50275 = p__50274;
var map__50275__$1 = ((((!((map__50275 == null)))?((((map__50275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50275):map__50275);
var frame = cljs.core.get.call(null,map__50275__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__50275__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__50275__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__37255__auto___50277 = cljs.core.count.call(null,exprs);
var i_50278 = (0);
while(true){
if((i_50278 < n__37255__auto___50277)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_50278)," = ",exprs.call(null,i_50278),";");

var G__50279 = (i_50278 + (1));
i_50278 = G__50279;
continue;
} else {
}
break;
}

var n__37255__auto___50280 = cljs.core.count.call(null,exprs);
var i_50281 = (0);
while(true){
if((i_50281 < n__37255__auto___50280)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_50281))," = ",temps.call(null,i_50281),";");

var G__50282 = (i_50281 + (1));
i_50281 = G__50282;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__50283){
var map__50284 = p__50283;
var map__50284__$1 = ((((!((map__50284 == null)))?((((map__50284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50284):map__50284);
var bindings = cljs.core.get.call(null,map__50284__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__50284__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__50284__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__50286_50294 = cljs.core.seq.call(null,bindings);
var chunk__50287_50295 = null;
var count__50288_50296 = (0);
var i__50289_50297 = (0);
while(true){
if((i__50289_50297 < count__50288_50296)){
var map__50290_50298 = cljs.core._nth.call(null,chunk__50287_50295,i__50289_50297);
var map__50290_50299__$1 = ((((!((map__50290_50298 == null)))?((((map__50290_50298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50290_50298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50290_50298):map__50290_50298);
var binding_50300 = map__50290_50299__$1;
var init_50301 = cljs.core.get.call(null,map__50290_50299__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_50300)," = ",init_50301,";");

var G__50302 = seq__50286_50294;
var G__50303 = chunk__50287_50295;
var G__50304 = count__50288_50296;
var G__50305 = (i__50289_50297 + (1));
seq__50286_50294 = G__50302;
chunk__50287_50295 = G__50303;
count__50288_50296 = G__50304;
i__50289_50297 = G__50305;
continue;
} else {
var temp__4657__auto___50306 = cljs.core.seq.call(null,seq__50286_50294);
if(temp__4657__auto___50306){
var seq__50286_50307__$1 = temp__4657__auto___50306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50286_50307__$1)){
var c__37147__auto___50308 = cljs.core.chunk_first.call(null,seq__50286_50307__$1);
var G__50309 = cljs.core.chunk_rest.call(null,seq__50286_50307__$1);
var G__50310 = c__37147__auto___50308;
var G__50311 = cljs.core.count.call(null,c__37147__auto___50308);
var G__50312 = (0);
seq__50286_50294 = G__50309;
chunk__50287_50295 = G__50310;
count__50288_50296 = G__50311;
i__50289_50297 = G__50312;
continue;
} else {
var map__50292_50313 = cljs.core.first.call(null,seq__50286_50307__$1);
var map__50292_50314__$1 = ((((!((map__50292_50313 == null)))?((((map__50292_50313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50292_50313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50292_50313):map__50292_50313);
var binding_50315 = map__50292_50314__$1;
var init_50316 = cljs.core.get.call(null,map__50292_50314__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_50315)," = ",init_50316,";");

var G__50317 = cljs.core.next.call(null,seq__50286_50307__$1);
var G__50318 = null;
var G__50319 = (0);
var G__50320 = (0);
seq__50286_50294 = G__50317;
chunk__50287_50295 = G__50318;
count__50288_50296 = G__50319;
i__50289_50297 = G__50320;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__50323){
var map__50324 = p__50323;
var map__50324__$1 = ((((!((map__50324 == null)))?((((map__50324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50324):map__50324);
var expr = map__50324__$1;
var f = cljs.core.get.call(null,map__50324__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__50324__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__50324__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__50326 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__50324,map__50324__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__50324,map__50324__$1,expr,f,args,env){
return (function (p1__50321_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__50321_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__50324,map__50324__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__50324,map__50324__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__50324,map__50324__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__50324,map__50324__$1,expr,f,args,env){
return (function (p1__50322_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__50322_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__50324,map__50324__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__50324,map__50324__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__50326,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__50326,(1),null);
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_50329 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_50329,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_50330 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_50330,args)),(((mfa_50330 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_50330,args)),"], 0))");
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
var fprop_50331 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_50331," ? ",f__$1,fprop_50331,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_50331," ? ",f__$1,fprop_50331,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__50332){
var map__50333 = p__50332;
var map__50333__$1 = ((((!((map__50333 == null)))?((((map__50333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50333):map__50333);
var ctor = cljs.core.get.call(null,map__50333__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__50333__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__50333__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__50335){
var map__50336 = p__50335;
var map__50336__$1 = ((((!((map__50336 == null)))?((((map__50336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50336):map__50336);
var target = cljs.core.get.call(null,map__50336__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__50336__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__50336__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__50338 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__50338__$1 = ((((!((map__50338 == null)))?((((map__50338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50338):map__50338);
var options = cljs.core.get.call(null,map__50338__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__50338__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__50339 = options;
var map__50339__$1 = ((((!((map__50339 == null)))?((((map__50339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50339):map__50339);
var target = cljs.core.get.call(null,map__50339__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__50339__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__50340 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__50346 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__50346__$1 = ((((!((map__50346 == null)))?((((map__50346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50346):map__50346);
var node_libs = cljs.core.get.call(null,map__50346__$1,true);
var libs_to_load = cljs.core.get.call(null,map__50346__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__50340,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__50340,(1),null);
var map__50343 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__50343__$1 = ((((!((map__50343 == null)))?((((map__50343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50343):map__50343);
var global_exports_libs = cljs.core.get.call(null,map__50343__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__50343__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__50349_50365 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__50350_50366 = null;
var count__50351_50367 = (0);
var i__50352_50368 = (0);
while(true){
if((i__50352_50368 < count__50351_50367)){
var lib_50369 = cljs.core._nth.call(null,chunk__50350_50366,i__50352_50368);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_50369)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_50369),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_50369),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_50369),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_50369),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_50369),"');");

}
}
}

var G__50370 = seq__50349_50365;
var G__50371 = chunk__50350_50366;
var G__50372 = count__50351_50367;
var G__50373 = (i__50352_50368 + (1));
seq__50349_50365 = G__50370;
chunk__50350_50366 = G__50371;
count__50351_50367 = G__50372;
i__50352_50368 = G__50373;
continue;
} else {
var temp__4657__auto___50374 = cljs.core.seq.call(null,seq__50349_50365);
if(temp__4657__auto___50374){
var seq__50349_50375__$1 = temp__4657__auto___50374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50349_50375__$1)){
var c__37147__auto___50376 = cljs.core.chunk_first.call(null,seq__50349_50375__$1);
var G__50377 = cljs.core.chunk_rest.call(null,seq__50349_50375__$1);
var G__50378 = c__37147__auto___50376;
var G__50379 = cljs.core.count.call(null,c__37147__auto___50376);
var G__50380 = (0);
seq__50349_50365 = G__50377;
chunk__50350_50366 = G__50378;
count__50351_50367 = G__50379;
i__50352_50368 = G__50380;
continue;
} else {
var lib_50381 = cljs.core.first.call(null,seq__50349_50375__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_50381)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_50381),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_50381),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_50381),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_50381),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_50381),"');");

}
}
}

var G__50382 = cljs.core.next.call(null,seq__50349_50375__$1);
var G__50383 = null;
var G__50384 = (0);
var G__50385 = (0);
seq__50349_50365 = G__50382;
chunk__50350_50366 = G__50383;
count__50351_50367 = G__50384;
i__50352_50368 = G__50385;
continue;
}
} else {
}
}
break;
}

var seq__50353_50386 = cljs.core.seq.call(null,node_libs);
var chunk__50354_50387 = null;
var count__50355_50388 = (0);
var i__50356_50389 = (0);
while(true){
if((i__50356_50389 < count__50355_50388)){
var lib_50390 = cljs.core._nth.call(null,chunk__50354_50387,i__50356_50389);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_50390)," = require('",lib_50390,"');");

var G__50391 = seq__50353_50386;
var G__50392 = chunk__50354_50387;
var G__50393 = count__50355_50388;
var G__50394 = (i__50356_50389 + (1));
seq__50353_50386 = G__50391;
chunk__50354_50387 = G__50392;
count__50355_50388 = G__50393;
i__50356_50389 = G__50394;
continue;
} else {
var temp__4657__auto___50395 = cljs.core.seq.call(null,seq__50353_50386);
if(temp__4657__auto___50395){
var seq__50353_50396__$1 = temp__4657__auto___50395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50353_50396__$1)){
var c__37147__auto___50397 = cljs.core.chunk_first.call(null,seq__50353_50396__$1);
var G__50398 = cljs.core.chunk_rest.call(null,seq__50353_50396__$1);
var G__50399 = c__37147__auto___50397;
var G__50400 = cljs.core.count.call(null,c__37147__auto___50397);
var G__50401 = (0);
seq__50353_50386 = G__50398;
chunk__50354_50387 = G__50399;
count__50355_50388 = G__50400;
i__50356_50389 = G__50401;
continue;
} else {
var lib_50402 = cljs.core.first.call(null,seq__50353_50396__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_50402)," = require('",lib_50402,"');");

var G__50403 = cljs.core.next.call(null,seq__50353_50396__$1);
var G__50404 = null;
var G__50405 = (0);
var G__50406 = (0);
seq__50353_50386 = G__50403;
chunk__50354_50387 = G__50404;
count__50355_50388 = G__50405;
i__50356_50389 = G__50406;
continue;
}
} else {
}
}
break;
}

var seq__50357_50407 = cljs.core.seq.call(null,global_exports_libs);
var chunk__50358_50408 = null;
var count__50359_50409 = (0);
var i__50360_50410 = (0);
while(true){
if((i__50360_50410 < count__50359_50409)){
var lib_50411 = cljs.core._nth.call(null,chunk__50358_50408,i__50360_50410);
var map__50361_50412 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_50411));
var map__50361_50413__$1 = ((((!((map__50361_50412 == null)))?((((map__50361_50412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50361_50412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50361_50412):map__50361_50412);
var global_exports_50414 = cljs.core.get.call(null,map__50361_50413__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_50411)," = goog.global.",cljs.core.get.call(null,global_exports_50414,cljs.core.symbol.call(null,lib_50411)),";");

var G__50415 = seq__50357_50407;
var G__50416 = chunk__50358_50408;
var G__50417 = count__50359_50409;
var G__50418 = (i__50360_50410 + (1));
seq__50357_50407 = G__50415;
chunk__50358_50408 = G__50416;
count__50359_50409 = G__50417;
i__50360_50410 = G__50418;
continue;
} else {
var temp__4657__auto___50419 = cljs.core.seq.call(null,seq__50357_50407);
if(temp__4657__auto___50419){
var seq__50357_50420__$1 = temp__4657__auto___50419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50357_50420__$1)){
var c__37147__auto___50421 = cljs.core.chunk_first.call(null,seq__50357_50420__$1);
var G__50422 = cljs.core.chunk_rest.call(null,seq__50357_50420__$1);
var G__50423 = c__37147__auto___50421;
var G__50424 = cljs.core.count.call(null,c__37147__auto___50421);
var G__50425 = (0);
seq__50357_50407 = G__50422;
chunk__50358_50408 = G__50423;
count__50359_50409 = G__50424;
i__50360_50410 = G__50425;
continue;
} else {
var lib_50426 = cljs.core.first.call(null,seq__50357_50420__$1);
var map__50363_50427 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_50426));
var map__50363_50428__$1 = ((((!((map__50363_50427 == null)))?((((map__50363_50427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50363_50427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50363_50427):map__50363_50427);
var global_exports_50429 = cljs.core.get.call(null,map__50363_50428__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_50426)," = goog.global.",cljs.core.get.call(null,global_exports_50429,cljs.core.symbol.call(null,lib_50426)),";");

var G__50430 = cljs.core.next.call(null,seq__50357_50420__$1);
var G__50431 = null;
var G__50432 = (0);
var G__50433 = (0);
seq__50357_50407 = G__50430;
chunk__50358_50408 = G__50431;
count__50359_50409 = G__50432;
i__50360_50410 = G__50433;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__50434){
var map__50435 = p__50434;
var map__50435__$1 = ((((!((map__50435 == null)))?((((map__50435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50435):map__50435);
var name = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__50437){
var map__50438 = p__50437;
var map__50438__$1 = ((((!((map__50438 == null)))?((((map__50438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50438):map__50438);
var name = cljs.core.get.call(null,map__50438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__50438__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__50438__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__50438__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__50438__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__50438__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__50438__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__50440){
var map__50441 = p__50440;
var map__50441__$1 = ((((!((map__50441 == null)))?((((map__50441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50441):map__50441);
var t = cljs.core.get.call(null,map__50441__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__50441__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__50441__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__50441__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__50441__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__50443_50461 = cljs.core.seq.call(null,protocols);
var chunk__50444_50462 = null;
var count__50445_50463 = (0);
var i__50446_50464 = (0);
while(true){
if((i__50446_50464 < count__50445_50463)){
var protocol_50465 = cljs.core._nth.call(null,chunk__50444_50462,i__50446_50464);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_50465)].join('')),"}");

var G__50466 = seq__50443_50461;
var G__50467 = chunk__50444_50462;
var G__50468 = count__50445_50463;
var G__50469 = (i__50446_50464 + (1));
seq__50443_50461 = G__50466;
chunk__50444_50462 = G__50467;
count__50445_50463 = G__50468;
i__50446_50464 = G__50469;
continue;
} else {
var temp__4657__auto___50470 = cljs.core.seq.call(null,seq__50443_50461);
if(temp__4657__auto___50470){
var seq__50443_50471__$1 = temp__4657__auto___50470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50443_50471__$1)){
var c__37147__auto___50472 = cljs.core.chunk_first.call(null,seq__50443_50471__$1);
var G__50473 = cljs.core.chunk_rest.call(null,seq__50443_50471__$1);
var G__50474 = c__37147__auto___50472;
var G__50475 = cljs.core.count.call(null,c__37147__auto___50472);
var G__50476 = (0);
seq__50443_50461 = G__50473;
chunk__50444_50462 = G__50474;
count__50445_50463 = G__50475;
i__50446_50464 = G__50476;
continue;
} else {
var protocol_50477 = cljs.core.first.call(null,seq__50443_50471__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_50477)].join('')),"}");

var G__50478 = cljs.core.next.call(null,seq__50443_50471__$1);
var G__50479 = null;
var G__50480 = (0);
var G__50481 = (0);
seq__50443_50461 = G__50478;
chunk__50444_50462 = G__50479;
count__50445_50463 = G__50480;
i__50446_50464 = G__50481;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__50447_50482 = cljs.core.seq.call(null,fields__$1);
var chunk__50448_50483 = null;
var count__50449_50484 = (0);
var i__50450_50485 = (0);
while(true){
if((i__50450_50485 < count__50449_50484)){
var fld_50486 = cljs.core._nth.call(null,chunk__50448_50483,i__50450_50485);
cljs.compiler.emitln.call(null,"this.",fld_50486," = ",fld_50486,";");

var G__50487 = seq__50447_50482;
var G__50488 = chunk__50448_50483;
var G__50489 = count__50449_50484;
var G__50490 = (i__50450_50485 + (1));
seq__50447_50482 = G__50487;
chunk__50448_50483 = G__50488;
count__50449_50484 = G__50489;
i__50450_50485 = G__50490;
continue;
} else {
var temp__4657__auto___50491 = cljs.core.seq.call(null,seq__50447_50482);
if(temp__4657__auto___50491){
var seq__50447_50492__$1 = temp__4657__auto___50491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50447_50492__$1)){
var c__37147__auto___50493 = cljs.core.chunk_first.call(null,seq__50447_50492__$1);
var G__50494 = cljs.core.chunk_rest.call(null,seq__50447_50492__$1);
var G__50495 = c__37147__auto___50493;
var G__50496 = cljs.core.count.call(null,c__37147__auto___50493);
var G__50497 = (0);
seq__50447_50482 = G__50494;
chunk__50448_50483 = G__50495;
count__50449_50484 = G__50496;
i__50450_50485 = G__50497;
continue;
} else {
var fld_50498 = cljs.core.first.call(null,seq__50447_50492__$1);
cljs.compiler.emitln.call(null,"this.",fld_50498," = ",fld_50498,";");

var G__50499 = cljs.core.next.call(null,seq__50447_50492__$1);
var G__50500 = null;
var G__50501 = (0);
var G__50502 = (0);
seq__50447_50482 = G__50499;
chunk__50448_50483 = G__50500;
count__50449_50484 = G__50501;
i__50450_50485 = G__50502;
continue;
}
} else {
}
}
break;
}

var seq__50451_50503 = cljs.core.seq.call(null,pmasks);
var chunk__50452_50504 = null;
var count__50453_50505 = (0);
var i__50454_50506 = (0);
while(true){
if((i__50454_50506 < count__50453_50505)){
var vec__50455_50507 = cljs.core._nth.call(null,chunk__50452_50504,i__50454_50506);
var pno_50508 = cljs.core.nth.call(null,vec__50455_50507,(0),null);
var pmask_50509 = cljs.core.nth.call(null,vec__50455_50507,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_50508,"$ = ",pmask_50509,";");

var G__50510 = seq__50451_50503;
var G__50511 = chunk__50452_50504;
var G__50512 = count__50453_50505;
var G__50513 = (i__50454_50506 + (1));
seq__50451_50503 = G__50510;
chunk__50452_50504 = G__50511;
count__50453_50505 = G__50512;
i__50454_50506 = G__50513;
continue;
} else {
var temp__4657__auto___50514 = cljs.core.seq.call(null,seq__50451_50503);
if(temp__4657__auto___50514){
var seq__50451_50515__$1 = temp__4657__auto___50514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50451_50515__$1)){
var c__37147__auto___50516 = cljs.core.chunk_first.call(null,seq__50451_50515__$1);
var G__50517 = cljs.core.chunk_rest.call(null,seq__50451_50515__$1);
var G__50518 = c__37147__auto___50516;
var G__50519 = cljs.core.count.call(null,c__37147__auto___50516);
var G__50520 = (0);
seq__50451_50503 = G__50517;
chunk__50452_50504 = G__50518;
count__50453_50505 = G__50519;
i__50454_50506 = G__50520;
continue;
} else {
var vec__50458_50521 = cljs.core.first.call(null,seq__50451_50515__$1);
var pno_50522 = cljs.core.nth.call(null,vec__50458_50521,(0),null);
var pmask_50523 = cljs.core.nth.call(null,vec__50458_50521,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_50522,"$ = ",pmask_50523,";");

var G__50524 = cljs.core.next.call(null,seq__50451_50515__$1);
var G__50525 = null;
var G__50526 = (0);
var G__50527 = (0);
seq__50451_50503 = G__50524;
chunk__50452_50504 = G__50525;
count__50453_50505 = G__50526;
i__50454_50506 = G__50527;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__50528){
var map__50529 = p__50528;
var map__50529__$1 = ((((!((map__50529 == null)))?((((map__50529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50529):map__50529);
var t = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__50531_50549 = cljs.core.seq.call(null,protocols);
var chunk__50532_50550 = null;
var count__50533_50551 = (0);
var i__50534_50552 = (0);
while(true){
if((i__50534_50552 < count__50533_50551)){
var protocol_50553 = cljs.core._nth.call(null,chunk__50532_50550,i__50534_50552);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_50553)].join('')),"}");

var G__50554 = seq__50531_50549;
var G__50555 = chunk__50532_50550;
var G__50556 = count__50533_50551;
var G__50557 = (i__50534_50552 + (1));
seq__50531_50549 = G__50554;
chunk__50532_50550 = G__50555;
count__50533_50551 = G__50556;
i__50534_50552 = G__50557;
continue;
} else {
var temp__4657__auto___50558 = cljs.core.seq.call(null,seq__50531_50549);
if(temp__4657__auto___50558){
var seq__50531_50559__$1 = temp__4657__auto___50558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50531_50559__$1)){
var c__37147__auto___50560 = cljs.core.chunk_first.call(null,seq__50531_50559__$1);
var G__50561 = cljs.core.chunk_rest.call(null,seq__50531_50559__$1);
var G__50562 = c__37147__auto___50560;
var G__50563 = cljs.core.count.call(null,c__37147__auto___50560);
var G__50564 = (0);
seq__50531_50549 = G__50561;
chunk__50532_50550 = G__50562;
count__50533_50551 = G__50563;
i__50534_50552 = G__50564;
continue;
} else {
var protocol_50565 = cljs.core.first.call(null,seq__50531_50559__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_50565)].join('')),"}");

var G__50566 = cljs.core.next.call(null,seq__50531_50559__$1);
var G__50567 = null;
var G__50568 = (0);
var G__50569 = (0);
seq__50531_50549 = G__50566;
chunk__50532_50550 = G__50567;
count__50533_50551 = G__50568;
i__50534_50552 = G__50569;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__50535_50570 = cljs.core.seq.call(null,fields__$1);
var chunk__50536_50571 = null;
var count__50537_50572 = (0);
var i__50538_50573 = (0);
while(true){
if((i__50538_50573 < count__50537_50572)){
var fld_50574 = cljs.core._nth.call(null,chunk__50536_50571,i__50538_50573);
cljs.compiler.emitln.call(null,"this.",fld_50574," = ",fld_50574,";");

var G__50575 = seq__50535_50570;
var G__50576 = chunk__50536_50571;
var G__50577 = count__50537_50572;
var G__50578 = (i__50538_50573 + (1));
seq__50535_50570 = G__50575;
chunk__50536_50571 = G__50576;
count__50537_50572 = G__50577;
i__50538_50573 = G__50578;
continue;
} else {
var temp__4657__auto___50579 = cljs.core.seq.call(null,seq__50535_50570);
if(temp__4657__auto___50579){
var seq__50535_50580__$1 = temp__4657__auto___50579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50535_50580__$1)){
var c__37147__auto___50581 = cljs.core.chunk_first.call(null,seq__50535_50580__$1);
var G__50582 = cljs.core.chunk_rest.call(null,seq__50535_50580__$1);
var G__50583 = c__37147__auto___50581;
var G__50584 = cljs.core.count.call(null,c__37147__auto___50581);
var G__50585 = (0);
seq__50535_50570 = G__50582;
chunk__50536_50571 = G__50583;
count__50537_50572 = G__50584;
i__50538_50573 = G__50585;
continue;
} else {
var fld_50586 = cljs.core.first.call(null,seq__50535_50580__$1);
cljs.compiler.emitln.call(null,"this.",fld_50586," = ",fld_50586,";");

var G__50587 = cljs.core.next.call(null,seq__50535_50580__$1);
var G__50588 = null;
var G__50589 = (0);
var G__50590 = (0);
seq__50535_50570 = G__50587;
chunk__50536_50571 = G__50588;
count__50537_50572 = G__50589;
i__50538_50573 = G__50590;
continue;
}
} else {
}
}
break;
}

var seq__50539_50591 = cljs.core.seq.call(null,pmasks);
var chunk__50540_50592 = null;
var count__50541_50593 = (0);
var i__50542_50594 = (0);
while(true){
if((i__50542_50594 < count__50541_50593)){
var vec__50543_50595 = cljs.core._nth.call(null,chunk__50540_50592,i__50542_50594);
var pno_50596 = cljs.core.nth.call(null,vec__50543_50595,(0),null);
var pmask_50597 = cljs.core.nth.call(null,vec__50543_50595,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_50596,"$ = ",pmask_50597,";");

var G__50598 = seq__50539_50591;
var G__50599 = chunk__50540_50592;
var G__50600 = count__50541_50593;
var G__50601 = (i__50542_50594 + (1));
seq__50539_50591 = G__50598;
chunk__50540_50592 = G__50599;
count__50541_50593 = G__50600;
i__50542_50594 = G__50601;
continue;
} else {
var temp__4657__auto___50602 = cljs.core.seq.call(null,seq__50539_50591);
if(temp__4657__auto___50602){
var seq__50539_50603__$1 = temp__4657__auto___50602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50539_50603__$1)){
var c__37147__auto___50604 = cljs.core.chunk_first.call(null,seq__50539_50603__$1);
var G__50605 = cljs.core.chunk_rest.call(null,seq__50539_50603__$1);
var G__50606 = c__37147__auto___50604;
var G__50607 = cljs.core.count.call(null,c__37147__auto___50604);
var G__50608 = (0);
seq__50539_50591 = G__50605;
chunk__50540_50592 = G__50606;
count__50541_50593 = G__50607;
i__50542_50594 = G__50608;
continue;
} else {
var vec__50546_50609 = cljs.core.first.call(null,seq__50539_50603__$1);
var pno_50610 = cljs.core.nth.call(null,vec__50546_50609,(0),null);
var pmask_50611 = cljs.core.nth.call(null,vec__50546_50609,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_50610,"$ = ",pmask_50611,";");

var G__50612 = cljs.core.next.call(null,seq__50539_50603__$1);
var G__50613 = null;
var G__50614 = (0);
var G__50615 = (0);
seq__50539_50591 = G__50612;
chunk__50540_50592 = G__50613;
count__50541_50593 = G__50614;
i__50542_50594 = G__50615;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__50616){
var map__50617 = p__50616;
var map__50617__$1 = ((((!((map__50617 == null)))?((((map__50617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50617):map__50617);
var target = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__50619){
var map__50620 = p__50619;
var map__50620__$1 = ((((!((map__50620 == null)))?((((map__50620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50620):map__50620);
var op = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__36296__auto__ = code;
if(cljs.core.truth_(and__36296__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__36296__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__49536__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49536__auto__))){
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

var seq__50625 = cljs.core.seq.call(null,table);
var chunk__50626 = null;
var count__50627 = (0);
var i__50628 = (0);
while(true){
if((i__50628 < count__50627)){
var vec__50629 = cljs.core._nth.call(null,chunk__50626,i__50628);
var sym = cljs.core.nth.call(null,vec__50629,(0),null);
var value = cljs.core.nth.call(null,vec__50629,(1),null);
var ns_50635 = cljs.core.namespace.call(null,sym);
var name_50636 = cljs.core.name.call(null,sym);
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

var G__50637 = seq__50625;
var G__50638 = chunk__50626;
var G__50639 = count__50627;
var G__50640 = (i__50628 + (1));
seq__50625 = G__50637;
chunk__50626 = G__50638;
count__50627 = G__50639;
i__50628 = G__50640;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50625);
if(temp__4657__auto__){
var seq__50625__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50625__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__50625__$1);
var G__50641 = cljs.core.chunk_rest.call(null,seq__50625__$1);
var G__50642 = c__37147__auto__;
var G__50643 = cljs.core.count.call(null,c__37147__auto__);
var G__50644 = (0);
seq__50625 = G__50641;
chunk__50626 = G__50642;
count__50627 = G__50643;
i__50628 = G__50644;
continue;
} else {
var vec__50632 = cljs.core.first.call(null,seq__50625__$1);
var sym = cljs.core.nth.call(null,vec__50632,(0),null);
var value = cljs.core.nth.call(null,vec__50632,(1),null);
var ns_50645 = cljs.core.namespace.call(null,sym);
var name_50646 = cljs.core.name.call(null,sym);
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

var G__50647 = cljs.core.next.call(null,seq__50625__$1);
var G__50648 = null;
var G__50649 = (0);
var G__50650 = (0);
seq__50625 = G__50647;
chunk__50626 = G__50648;
count__50627 = G__50649;
i__50628 = G__50650;
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
var G__50652 = arguments.length;
switch (G__50652) {
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
var k_50657 = cljs.core.first.call(null,ks);
var vec__50653_50658 = cljs.core.conj.call(null,prefix,k_50657);
var top_50659 = cljs.core.nth.call(null,vec__50653_50658,(0),null);
var prefix_SINGLEQUOTE__50660 = vec__50653_50658;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_50657)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__50660) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_50659)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_50659)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__50660)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_50659);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__50660)),";");
}
} else {
}

var m_50661 = cljs.core.get.call(null,externs,k_50657);
if(cljs.core.empty_QMARK_.call(null,m_50661)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__50660,m_50661,top_level,known_externs);
}

var G__50662 = cljs.core.next.call(null,ks);
ks = G__50662;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1517263080725
