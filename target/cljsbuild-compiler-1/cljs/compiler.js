// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ecmascript5,cljs.core.cst$kw$ecmascript5_DASH_strict,cljs.core.cst$kw$ecmascript6,cljs.core.cst$kw$ecmascript6_DASH_strict,cljs.core.cst$kw$ecmascript_DASH_2015,cljs.core.cst$kw$ecmascript6_DASH_typed,cljs.core.cst$kw$ecmascript_DASH_2016,cljs.core.cst$kw$ecmascript_DASH_2017,cljs.core.cst$kw$ecmascript_DASH_next], null));
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
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__16068 = s;
var map__16068__$1 = ((((!((map__16068 == null)))?((((map__16068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16068):map__16068);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16068__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16068__$1,cljs.core.cst$kw$info);
var d = (0);
var G__16071 = info;
var map__16072 = G__16071;
var map__16072__$1 = ((((!((map__16072 == null)))?((((map__16072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16072):map__16072);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__16071__$1 = G__16071;
while(true){
var d__$2 = d__$1;
var map__16074 = G__16071__$1;
var map__16074__$1 = ((((!((map__16074 == null)))?((((map__16074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16074):map__16074);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16074__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__16076 = (d__$2 + (1));
var G__16077 = shadow__$1;
d__$1 = G__16076;
G__16071__$1 = G__16077;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__16078){
var map__16079 = p__16078;
var map__16079__$1 = ((((!((map__16079 == null)))?((((map__16079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16079):map__16079);
var name_var = map__16079__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16079__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16079__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__16081 = info;
var map__16081__$1 = ((((!((map__16081 == null)))?((((map__16081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16081):map__16081);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16081__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16081__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__16083 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__16083) : cljs.compiler.munge.call(null,G__16083));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__16085 = arguments.length;
switch (G__16085) {
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
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__16087 = cp;
switch (G__16087) {
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
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__16089_16093 = cljs.core.seq(s);
var chunk__16090_16094 = null;
var count__16091_16095 = (0);
var i__16092_16096 = (0);
while(true){
if((i__16092_16096 < count__16091_16095)){
var c_16097 = chunk__16090_16094.cljs$core$IIndexed$_nth$arity$2(null,i__16092_16096);
sb.append(cljs.compiler.escape_char(c_16097));

var G__16098 = seq__16089_16093;
var G__16099 = chunk__16090_16094;
var G__16100 = count__16091_16095;
var G__16101 = (i__16092_16096 + (1));
seq__16089_16093 = G__16098;
chunk__16090_16094 = G__16099;
count__16091_16095 = G__16100;
i__16092_16096 = G__16101;
continue;
} else {
var temp__4657__auto___16102 = cljs.core.seq(seq__16089_16093);
if(temp__4657__auto___16102){
var seq__16089_16103__$1 = temp__4657__auto___16102;
if(cljs.core.chunked_seq_QMARK_(seq__16089_16103__$1)){
var c__8507__auto___16104 = cljs.core.chunk_first(seq__16089_16103__$1);
var G__16105 = cljs.core.chunk_rest(seq__16089_16103__$1);
var G__16106 = c__8507__auto___16104;
var G__16107 = cljs.core.count(c__8507__auto___16104);
var G__16108 = (0);
seq__16089_16093 = G__16105;
chunk__16090_16094 = G__16106;
count__16091_16095 = G__16107;
i__16092_16096 = G__16108;
continue;
} else {
var c_16109 = cljs.core.first(seq__16089_16103__$1);
sb.append(cljs.compiler.escape_char(c_16109));

var G__16110 = cljs.core.next(seq__16089_16103__$1);
var G__16111 = null;
var G__16112 = (0);
var G__16113 = (0);
seq__16089_16093 = G__16110;
chunk__16090_16094 = G__16111;
count__16091_16095 = G__16112;
i__16092_16096 = G__16113;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__8625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8626__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8627__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8628__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8629__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__8629__auto__,method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__14294__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__14294__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__16114_16119 = ast;
var map__16114_16120__$1 = ((((!((map__16114_16119 == null)))?((((map__16114_16119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16114_16119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16114_16119):map__16114_16119);
var env_16121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114_16120__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_16121))){
var map__16116_16122 = env_16121;
var map__16116_16123__$1 = ((((!((map__16116_16122 == null)))?((((map__16116_16122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16116_16122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16116_16122):map__16116_16122);
var line_16124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16116_16123__$1,cljs.core.cst$kw$line);
var column_16125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16116_16123__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__16116_16122,map__16116_16123__$1,line_16124,column_16125,map__16114_16119,map__16114_16120__$1,env_16121,val__14294__auto__){
return (function (m){
var minfo = (function (){var G__16118 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16118,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__16118;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_16124 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__16116_16122,map__16116_16123__$1,line_16124,column_16125,map__16114_16119,map__16114_16120__$1,env_16121,val__14294__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_16125)?(column_16125 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__16116_16122,map__16116_16123__$1,line_16124,column_16125,map__16114_16119,map__16114_16120__$1,env_16121,val__14294__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__16116_16122,map__16116_16123__$1,line_16124,column_16125,map__16114_16119,map__16114_16120__$1,env_16121,val__14294__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__16116_16122,map__16116_16123__$1,line_16124,column_16125,map__16114_16119,map__16114_16120__$1,env_16121,val__14294__auto__))
,cljs.core.sorted_map()));
});})(map__16116_16122,map__16116_16123__$1,line_16124,column_16125,map__16114_16119,map__16114_16120__$1,env_16121,val__14294__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__14294__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__8846__auto__ = [];
var len__8839__auto___16132 = arguments.length;
var i__8840__auto___16133 = (0);
while(true){
if((i__8840__auto___16133 < len__8839__auto___16132)){
args__8846__auto__.push((arguments[i__8840__auto___16133]));

var G__16134 = (i__8840__auto___16133 + (1));
i__8840__auto___16133 = G__16134;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__16128_16135 = cljs.core.seq(xs);
var chunk__16129_16136 = null;
var count__16130_16137 = (0);
var i__16131_16138 = (0);
while(true){
if((i__16131_16138 < count__16130_16137)){
var x_16139 = chunk__16129_16136.cljs$core$IIndexed$_nth$arity$2(null,i__16131_16138);
if((x_16139 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_16139)){
cljs.compiler.emit(x_16139);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_16139)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_16139);
} else {
if(goog.isFunction(x_16139)){
(x_16139.cljs$core$IFn$_invoke$arity$0 ? x_16139.cljs$core$IFn$_invoke$arity$0() : x_16139.call(null));
} else {
var s_16140 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_16139], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__16128_16135,chunk__16129_16136,count__16130_16137,i__16131_16138,s_16140,x_16139){
return (function (p1__16126_SHARP_){
return (p1__16126_SHARP_ + cljs.core.count(s_16140));
});})(seq__16128_16135,chunk__16129_16136,count__16130_16137,i__16131_16138,s_16140,x_16139))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_16140], 0));

}
}
}
}

var G__16141 = seq__16128_16135;
var G__16142 = chunk__16129_16136;
var G__16143 = count__16130_16137;
var G__16144 = (i__16131_16138 + (1));
seq__16128_16135 = G__16141;
chunk__16129_16136 = G__16142;
count__16130_16137 = G__16143;
i__16131_16138 = G__16144;
continue;
} else {
var temp__4657__auto___16145 = cljs.core.seq(seq__16128_16135);
if(temp__4657__auto___16145){
var seq__16128_16146__$1 = temp__4657__auto___16145;
if(cljs.core.chunked_seq_QMARK_(seq__16128_16146__$1)){
var c__8507__auto___16147 = cljs.core.chunk_first(seq__16128_16146__$1);
var G__16148 = cljs.core.chunk_rest(seq__16128_16146__$1);
var G__16149 = c__8507__auto___16147;
var G__16150 = cljs.core.count(c__8507__auto___16147);
var G__16151 = (0);
seq__16128_16135 = G__16148;
chunk__16129_16136 = G__16149;
count__16130_16137 = G__16150;
i__16131_16138 = G__16151;
continue;
} else {
var x_16152 = cljs.core.first(seq__16128_16146__$1);
if((x_16152 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_16152)){
cljs.compiler.emit(x_16152);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_16152)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_16152);
} else {
if(goog.isFunction(x_16152)){
(x_16152.cljs$core$IFn$_invoke$arity$0 ? x_16152.cljs$core$IFn$_invoke$arity$0() : x_16152.call(null));
} else {
var s_16153 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_16152], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__16128_16135,chunk__16129_16136,count__16130_16137,i__16131_16138,s_16153,x_16152,seq__16128_16146__$1,temp__4657__auto___16145){
return (function (p1__16126_SHARP_){
return (p1__16126_SHARP_ + cljs.core.count(s_16153));
});})(seq__16128_16135,chunk__16129_16136,count__16130_16137,i__16131_16138,s_16153,x_16152,seq__16128_16146__$1,temp__4657__auto___16145))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_16153], 0));

}
}
}
}

var G__16154 = cljs.core.next(seq__16128_16146__$1);
var G__16155 = null;
var G__16156 = (0);
var G__16157 = (0);
seq__16128_16135 = G__16154;
chunk__16129_16136 = G__16155;
count__16130_16137 = G__16156;
i__16131_16138 = G__16157;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq16127){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16127));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__8846__auto__ = [];
var len__8839__auto___16163 = arguments.length;
var i__8840__auto___16164 = (0);
while(true){
if((i__8840__auto___16164 < len__8839__auto___16163)){
args__8846__auto__.push((arguments[i__8840__auto___16164]));

var G__16165 = (i__8840__auto___16164 + (1));
i__8840__auto___16164 = G__16165;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_16159_16166 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_16159_16166;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__16160){
var map__16161 = p__16160;
var map__16161__$1 = ((((!((map__16161 == null)))?((((map__16161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16161):map__16161);
var m = map__16161__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16161__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq16158){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16158));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__8697__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16167_16169 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16168_16170 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16167_16169,_STAR_print_fn_STAR_16168_16170,sb__8697__auto__){
return (function (x__8698__auto__){
return sb__8697__auto__.append(x__8698__auto__);
});})(_STAR_print_newline_STAR_16167_16169,_STAR_print_fn_STAR_16168_16170,sb__8697__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16168_16170;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16167_16169;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8697__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__8625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8626__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8627__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8628__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8629__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__8629__auto__,method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NaN"], 0));
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((x > (0)))?"Infinity":"-Infinity")], 0));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));

}
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__16171 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__16174_16176 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__16174_16176) : cljs.compiler.emit_constant.call(null,G__16174_16176));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__16175_16177 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__16175_16177) : cljs.compiler.emit_constant.call(null,G__16175_16177));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__16178_16179 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__16178_16179) : cljs.compiler.emit_constant.call(null,G__16178_16179));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__4655__auto__ = (function (){var and__7656__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__7656__auto__)){
var G__16180 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__16180) : x.call(null,G__16180));
} else {
return and__7656__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__4655__auto__ = (function (){var and__7656__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__7656__auto__)){
var G__16181 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__16181) : x.call(null,G__16181));
} else {
return and__7656__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__16183){
var map__16184 = p__16183;
var map__16184__$1 = ((((!((map__16184 == null)))?((((map__16184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16184):map__16184);
var ast = map__16184__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16184__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16184__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16184__$1,cljs.core.cst$kw$form);
var temp__4655__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__16186 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__16186__$1 = ((((!((map__16186 == null)))?((((map__16186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16186):map__16186);
var cenv = map__16186__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__7668__auto__ = js_module_name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__16188 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__7656__auto__ = (function (){var G__16190 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__16190) : cljs.compiler.es5_GT__EQ_.call(null,G__16190));
})();
if(cljs.core.truth_(and__7656__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__7656__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__16188,cljs.analyzer.es5_allowed);
} else {
return G__16188;
}
})();
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__16191 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__16191,reserved);
} else {
return G__16191;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__16192){
var map__16193 = p__16192;
var map__16193__$1 = ((((!((map__16193 == null)))?((((map__16193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16193):map__16193);
var arg = map__16193__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__16195 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__16195__$1 = ((((!((map__16195 == null)))?((((map__16195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16195):map__16195);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16195__$1,cljs.core.cst$kw$name);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__16197){
var map__16198 = p__16197;
var map__16198__$1 = ((((!((map__16198 == null)))?((((map__16198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16198):map__16198);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__16200_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__16200_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__16201){
var map__16202 = p__16201;
var map__16202__$1 = ((((!((map__16202 == null)))?((((map__16202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16202):map__16202);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16202__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16202__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16202__$1,cljs.core.cst$kw$vals);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__16204){
var map__16205 = p__16204;
var map__16205__$1 = ((((!((map__16205 == null)))?((((map__16205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16205):map__16205);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__16207){
var map__16208 = p__16207;
var map__16208__$1 = ((((!((map__16208 == null)))?((((map__16208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16208):map__16208);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16208__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16208__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_16210 = cljs.core.count(items);
if((cnt_16210 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_16210,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__16211_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__16211_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__16212){
var map__16213 = p__16212;
var map__16213__$1 = ((((!((map__16213 == null)))?((((map__16213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16213):map__16213);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__16215){
var map__16216 = p__16215;
var map__16216__$1 = ((((!((map__16216 == null)))?((((map__16216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16216):map__16216);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16216__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16216__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16216__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__4657__auto___16234 = cljs.core.seq(items);
if(temp__4657__auto___16234){
var items_16235__$1 = temp__4657__auto___16234;
var vec__16218_16236 = items_16235__$1;
var seq__16219_16237 = cljs.core.seq(vec__16218_16236);
var first__16220_16238 = cljs.core.first(seq__16219_16237);
var seq__16219_16239__$1 = cljs.core.next(seq__16219_16237);
var vec__16221_16240 = first__16220_16238;
var k_16241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16221_16240,(0),null);
var v_16242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16221_16240,(1),null);
var r_16243 = seq__16219_16239__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_16241),"\": ",v_16242], 0));

var seq__16224_16244 = cljs.core.seq(r_16243);
var chunk__16225_16245 = null;
var count__16226_16246 = (0);
var i__16227_16247 = (0);
while(true){
if((i__16227_16247 < count__16226_16246)){
var vec__16228_16248 = chunk__16225_16245.cljs$core$IIndexed$_nth$arity$2(null,i__16227_16247);
var k_16249__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228_16248,(0),null);
var v_16250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228_16248,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_16249__$1),"\": ",v_16250__$1], 0));

var G__16251 = seq__16224_16244;
var G__16252 = chunk__16225_16245;
var G__16253 = count__16226_16246;
var G__16254 = (i__16227_16247 + (1));
seq__16224_16244 = G__16251;
chunk__16225_16245 = G__16252;
count__16226_16246 = G__16253;
i__16227_16247 = G__16254;
continue;
} else {
var temp__4657__auto___16255__$1 = cljs.core.seq(seq__16224_16244);
if(temp__4657__auto___16255__$1){
var seq__16224_16256__$1 = temp__4657__auto___16255__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16224_16256__$1)){
var c__8507__auto___16257 = cljs.core.chunk_first(seq__16224_16256__$1);
var G__16258 = cljs.core.chunk_rest(seq__16224_16256__$1);
var G__16259 = c__8507__auto___16257;
var G__16260 = cljs.core.count(c__8507__auto___16257);
var G__16261 = (0);
seq__16224_16244 = G__16258;
chunk__16225_16245 = G__16259;
count__16226_16246 = G__16260;
i__16227_16247 = G__16261;
continue;
} else {
var vec__16231_16262 = cljs.core.first(seq__16224_16256__$1);
var k_16263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231_16262,(0),null);
var v_16264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231_16262,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_16263__$1),"\": ",v_16264__$1], 0));

var G__16265 = cljs.core.next(seq__16224_16256__$1);
var G__16266 = null;
var G__16267 = (0);
var G__16268 = (0);
seq__16224_16244 = G__16265;
chunk__16225_16245 = G__16266;
count__16226_16246 = G__16267;
i__16227_16247 = G__16268;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__16269){
var map__16270 = p__16269;
var map__16270__$1 = ((((!((map__16270 == null)))?((((map__16270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16270):map__16270);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16270__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16270__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16270__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16270__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__16272){
var map__16273 = p__16272;
var map__16273__$1 = ((((!((map__16273 == null)))?((((map__16273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16273):map__16273);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16273__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16273__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__16275){
var map__16276 = p__16275;
var map__16276__$1 = ((((!((map__16276 == null)))?((((map__16276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16276):map__16276);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16276__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16276__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16276__$1,cljs.core.cst$kw$const_DASH_expr);
var or__7668__auto__ = (function (){var and__7656__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__7656__auto__){
var and__7656__auto____$1 = form;
if(cljs.core.truth_(and__7656__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})();
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
var and__7656__auto__ = !((const_expr == null));
if(and__7656__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__7656__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__16278){
var map__16279 = p__16278;
var map__16279__$1 = ((((!((map__16279 == null)))?((((map__16279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16279):map__16279);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16279__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16279__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16279__$1,cljs.core.cst$kw$const_DASH_expr);
var or__7668__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
if(or__7668__auto__){
return or__7668__auto__;
} else {
var and__7656__auto__ = !((const_expr == null));
if(and__7656__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__7656__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__7668__auto__ = (function (){var fexpr__16282 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__16282.cljs$core$IFn$_invoke$arity$1 ? fexpr__16282.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__16282.call(null,tag));
})();
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__16283){
var map__16284 = p__16283;
var map__16284__$1 = ((((!((map__16284 == null)))?((((map__16284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16284):map__16284);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16284__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16284__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16284__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16284__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16284__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__7668__auto__ = unchecked;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__16286){
var map__16287 = p__16286;
var map__16287__$1 = ((((!((map__16287 == null)))?((((map__16287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16287):map__16287);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16287__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16287__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16287__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16287__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16287__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__16289_16307 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__16290_16308 = null;
var count__16291_16309 = (0);
var i__16292_16310 = (0);
while(true){
if((i__16292_16310 < count__16291_16309)){
var vec__16293_16311 = chunk__16290_16308.cljs$core$IIndexed$_nth$arity$2(null,i__16292_16310);
var ts_16312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293_16311,(0),null);
var then_16313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293_16311,(1),null);
var seq__16296_16314 = cljs.core.seq(ts_16312);
var chunk__16297_16315 = null;
var count__16298_16316 = (0);
var i__16299_16317 = (0);
while(true){
if((i__16299_16317 < count__16298_16316)){
var test_16318 = chunk__16297_16315.cljs$core$IIndexed$_nth$arity$2(null,i__16299_16317);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_16318,":"], 0));

var G__16319 = seq__16296_16314;
var G__16320 = chunk__16297_16315;
var G__16321 = count__16298_16316;
var G__16322 = (i__16299_16317 + (1));
seq__16296_16314 = G__16319;
chunk__16297_16315 = G__16320;
count__16298_16316 = G__16321;
i__16299_16317 = G__16322;
continue;
} else {
var temp__4657__auto___16323 = cljs.core.seq(seq__16296_16314);
if(temp__4657__auto___16323){
var seq__16296_16324__$1 = temp__4657__auto___16323;
if(cljs.core.chunked_seq_QMARK_(seq__16296_16324__$1)){
var c__8507__auto___16325 = cljs.core.chunk_first(seq__16296_16324__$1);
var G__16326 = cljs.core.chunk_rest(seq__16296_16324__$1);
var G__16327 = c__8507__auto___16325;
var G__16328 = cljs.core.count(c__8507__auto___16325);
var G__16329 = (0);
seq__16296_16314 = G__16326;
chunk__16297_16315 = G__16327;
count__16298_16316 = G__16328;
i__16299_16317 = G__16329;
continue;
} else {
var test_16330 = cljs.core.first(seq__16296_16324__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_16330,":"], 0));

var G__16331 = cljs.core.next(seq__16296_16324__$1);
var G__16332 = null;
var G__16333 = (0);
var G__16334 = (0);
seq__16296_16314 = G__16331;
chunk__16297_16315 = G__16332;
count__16298_16316 = G__16333;
i__16299_16317 = G__16334;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_16313], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_16313], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__16335 = seq__16289_16307;
var G__16336 = chunk__16290_16308;
var G__16337 = count__16291_16309;
var G__16338 = (i__16292_16310 + (1));
seq__16289_16307 = G__16335;
chunk__16290_16308 = G__16336;
count__16291_16309 = G__16337;
i__16292_16310 = G__16338;
continue;
} else {
var temp__4657__auto___16339 = cljs.core.seq(seq__16289_16307);
if(temp__4657__auto___16339){
var seq__16289_16340__$1 = temp__4657__auto___16339;
if(cljs.core.chunked_seq_QMARK_(seq__16289_16340__$1)){
var c__8507__auto___16341 = cljs.core.chunk_first(seq__16289_16340__$1);
var G__16342 = cljs.core.chunk_rest(seq__16289_16340__$1);
var G__16343 = c__8507__auto___16341;
var G__16344 = cljs.core.count(c__8507__auto___16341);
var G__16345 = (0);
seq__16289_16307 = G__16342;
chunk__16290_16308 = G__16343;
count__16291_16309 = G__16344;
i__16292_16310 = G__16345;
continue;
} else {
var vec__16300_16346 = cljs.core.first(seq__16289_16340__$1);
var ts_16347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16300_16346,(0),null);
var then_16348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16300_16346,(1),null);
var seq__16303_16349 = cljs.core.seq(ts_16347);
var chunk__16304_16350 = null;
var count__16305_16351 = (0);
var i__16306_16352 = (0);
while(true){
if((i__16306_16352 < count__16305_16351)){
var test_16353 = chunk__16304_16350.cljs$core$IIndexed$_nth$arity$2(null,i__16306_16352);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_16353,":"], 0));

var G__16354 = seq__16303_16349;
var G__16355 = chunk__16304_16350;
var G__16356 = count__16305_16351;
var G__16357 = (i__16306_16352 + (1));
seq__16303_16349 = G__16354;
chunk__16304_16350 = G__16355;
count__16305_16351 = G__16356;
i__16306_16352 = G__16357;
continue;
} else {
var temp__4657__auto___16358__$1 = cljs.core.seq(seq__16303_16349);
if(temp__4657__auto___16358__$1){
var seq__16303_16359__$1 = temp__4657__auto___16358__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16303_16359__$1)){
var c__8507__auto___16360 = cljs.core.chunk_first(seq__16303_16359__$1);
var G__16361 = cljs.core.chunk_rest(seq__16303_16359__$1);
var G__16362 = c__8507__auto___16360;
var G__16363 = cljs.core.count(c__8507__auto___16360);
var G__16364 = (0);
seq__16303_16349 = G__16361;
chunk__16304_16350 = G__16362;
count__16305_16351 = G__16363;
i__16306_16352 = G__16364;
continue;
} else {
var test_16365 = cljs.core.first(seq__16303_16359__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_16365,":"], 0));

var G__16366 = cljs.core.next(seq__16303_16359__$1);
var G__16367 = null;
var G__16368 = (0);
var G__16369 = (0);
seq__16303_16349 = G__16366;
chunk__16304_16350 = G__16367;
count__16305_16351 = G__16368;
i__16306_16352 = G__16369;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_16348], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_16348], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__16370 = cljs.core.next(seq__16289_16340__$1);
var G__16371 = null;
var G__16372 = (0);
var G__16373 = (0);
seq__16289_16307 = G__16370;
chunk__16290_16308 = G__16371;
count__16291_16309 = G__16372;
i__16292_16310 = G__16373;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__16374){
var map__16375 = p__16374;
var map__16375__$1 = ((((!((map__16375 == null)))?((((map__16375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16375):map__16375);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16375__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16375__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16378 = env;
var G__16379 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16378,G__16379) : cljs.compiler.resolve_type.call(null,G__16378,G__16379));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__16380 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__16380,fstr,rstr,ret_t,axstr){
return (function (p1__16377_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__16377_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__16377_SHARP_));
});})(idx,vec__16380,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__16383 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16383),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__16383;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16384 = env;
var G__16385 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16384,G__16385) : cljs.compiler.resolve_type.call(null,G__16384,G__16385));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__16386_SHARP_){
return cljs.compiler.resolve_type(env,p1__16386_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__16387 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16388 = cljs.core.seq(vec__16387);
var first__16389 = cljs.core.first(seq__16388);
var seq__16388__$1 = cljs.core.next(seq__16388);
var p = first__16389;
var first__16389__$1 = cljs.core.first(seq__16388__$1);
var seq__16388__$2 = cljs.core.next(seq__16388__$1);
var ts = first__16389__$1;
var first__16389__$2 = cljs.core.first(seq__16388__$2);
var seq__16388__$3 = cljs.core.next(seq__16388__$2);
var n = first__16389__$2;
var xs = seq__16388__$3;
if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__7656__auto__){
var and__7656__auto____$1 = ts;
if(cljs.core.truth_(and__7656__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__16390 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16391 = cljs.core.seq(vec__16390);
var first__16392 = cljs.core.first(seq__16391);
var seq__16391__$1 = cljs.core.next(seq__16391);
var p = first__16392;
var first__16392__$1 = cljs.core.first(seq__16391__$1);
var seq__16391__$2 = cljs.core.next(seq__16391__$1);
var ts = first__16392__$1;
var xs = seq__16391__$2;
if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__7656__auto__){
var and__7656__auto____$1 = ts;
if(cljs.core.truth_(and__7656__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__16394 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__16393 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__16393.cljs$core$IFn$_invoke$arity$1 ? fexpr__16393.cljs$core$IFn$_invoke$arity$1(G__16394) : fexpr__16393.call(null,G__16394));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__16397 = arguments.length;
switch (G__16397) {
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
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__16405 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__16395_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__16395_SHARP_);
} else {
return p1__16395_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__16406 = cljs.core.seq(vec__16405);
var first__16407 = cljs.core.first(seq__16406);
var seq__16406__$1 = cljs.core.next(seq__16406);
var x = first__16407;
var ys = seq__16406__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__16408 = cljs.core.seq(ys);
var chunk__16409 = null;
var count__16410 = (0);
var i__16411 = (0);
while(true){
if((i__16411 < count__16410)){
var next_line = chunk__16409.cljs$core$IIndexed$_nth$arity$2(null,i__16411);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__16417 = seq__16408;
var G__16418 = chunk__16409;
var G__16419 = count__16410;
var G__16420 = (i__16411 + (1));
seq__16408 = G__16417;
chunk__16409 = G__16418;
count__16410 = G__16419;
i__16411 = G__16420;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16408);
if(temp__4657__auto__){
var seq__16408__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16408__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__16408__$1);
var G__16421 = cljs.core.chunk_rest(seq__16408__$1);
var G__16422 = c__8507__auto__;
var G__16423 = cljs.core.count(c__8507__auto__);
var G__16424 = (0);
seq__16408 = G__16421;
chunk__16409 = G__16422;
count__16410 = G__16423;
i__16411 = G__16424;
continue;
} else {
var next_line = cljs.core.first(seq__16408__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__16425 = cljs.core.next(seq__16408__$1);
var G__16426 = null;
var G__16427 = (0);
var G__16428 = (0);
seq__16408 = G__16425;
chunk__16409 = G__16426;
count__16410 = G__16427;
i__16411 = G__16428;
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
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__16412_16429 = cljs.core.seq(docs__$2);
var chunk__16413_16430 = null;
var count__16414_16431 = (0);
var i__16415_16432 = (0);
while(true){
if((i__16415_16432 < count__16414_16431)){
var e_16433 = chunk__16413_16430.cljs$core$IIndexed$_nth$arity$2(null,i__16415_16432);
if(cljs.core.truth_(e_16433)){
print_comment_lines(e_16433);
} else {
}

var G__16434 = seq__16412_16429;
var G__16435 = chunk__16413_16430;
var G__16436 = count__16414_16431;
var G__16437 = (i__16415_16432 + (1));
seq__16412_16429 = G__16434;
chunk__16413_16430 = G__16435;
count__16414_16431 = G__16436;
i__16415_16432 = G__16437;
continue;
} else {
var temp__4657__auto___16438 = cljs.core.seq(seq__16412_16429);
if(temp__4657__auto___16438){
var seq__16412_16439__$1 = temp__4657__auto___16438;
if(cljs.core.chunked_seq_QMARK_(seq__16412_16439__$1)){
var c__8507__auto___16440 = cljs.core.chunk_first(seq__16412_16439__$1);
var G__16441 = cljs.core.chunk_rest(seq__16412_16439__$1);
var G__16442 = c__8507__auto___16440;
var G__16443 = cljs.core.count(c__8507__auto___16440);
var G__16444 = (0);
seq__16412_16429 = G__16441;
chunk__16413_16430 = G__16442;
count__16414_16431 = G__16443;
i__16415_16432 = G__16444;
continue;
} else {
var e_16445 = cljs.core.first(seq__16412_16439__$1);
if(cljs.core.truth_(e_16445)){
print_comment_lines(e_16445);
} else {
}

var G__16446 = cljs.core.next(seq__16412_16439__$1);
var G__16447 = null;
var G__16448 = (0);
var G__16449 = (0);
seq__16412_16429 = G__16446;
chunk__16413_16430 = G__16447;
count__16414_16431 = G__16448;
i__16415_16432 = G__16449;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__7656__auto__ = cljs.core.some(((function (opts){
return (function (p1__16451_SHARP_){
return goog.string.startsWith(p1__16451_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__7656__auto__)){
var and__7656__auto____$1 = opts;
if(cljs.core.truth_(and__7656__auto____$1)){
var and__7656__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__7656__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__7656__auto____$2;
}
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__16452){
var map__16453 = p__16452;
var map__16453__$1 = ((((!((map__16453 == null)))?((((map__16453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16453):map__16453);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__7668__auto__ = init;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__7656__auto__){
return test;
} else {
return and__7656__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16455){
var map__16456 = p__16455;
var map__16456__$1 = ((((!((map__16456 == null)))?((((map__16456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16456):map__16456);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16456__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16456__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16456__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__16458_16476 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__16459_16477 = null;
var count__16460_16478 = (0);
var i__16461_16479 = (0);
while(true){
if((i__16461_16479 < count__16460_16478)){
var vec__16462_16480 = chunk__16459_16477.cljs$core$IIndexed$_nth$arity$2(null,i__16461_16479);
var i_16481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16462_16480,(0),null);
var param_16482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16462_16480,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_16482);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__16483 = seq__16458_16476;
var G__16484 = chunk__16459_16477;
var G__16485 = count__16460_16478;
var G__16486 = (i__16461_16479 + (1));
seq__16458_16476 = G__16483;
chunk__16459_16477 = G__16484;
count__16460_16478 = G__16485;
i__16461_16479 = G__16486;
continue;
} else {
var temp__4657__auto___16487 = cljs.core.seq(seq__16458_16476);
if(temp__4657__auto___16487){
var seq__16458_16488__$1 = temp__4657__auto___16487;
if(cljs.core.chunked_seq_QMARK_(seq__16458_16488__$1)){
var c__8507__auto___16489 = cljs.core.chunk_first(seq__16458_16488__$1);
var G__16490 = cljs.core.chunk_rest(seq__16458_16488__$1);
var G__16491 = c__8507__auto___16489;
var G__16492 = cljs.core.count(c__8507__auto___16489);
var G__16493 = (0);
seq__16458_16476 = G__16490;
chunk__16459_16477 = G__16491;
count__16460_16478 = G__16492;
i__16461_16479 = G__16493;
continue;
} else {
var vec__16465_16494 = cljs.core.first(seq__16458_16488__$1);
var i_16495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16465_16494,(0),null);
var param_16496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16465_16494,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_16496);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__16497 = cljs.core.next(seq__16458_16488__$1);
var G__16498 = null;
var G__16499 = (0);
var G__16500 = (0);
seq__16458_16476 = G__16497;
chunk__16459_16477 = G__16498;
count__16460_16478 = G__16499;
i__16461_16479 = G__16500;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__16468_16501 = cljs.core.seq(params);
var chunk__16469_16502 = null;
var count__16470_16503 = (0);
var i__16471_16504 = (0);
while(true){
if((i__16471_16504 < count__16470_16503)){
var param_16505 = chunk__16469_16502.cljs$core$IIndexed$_nth$arity$2(null,i__16471_16504);
cljs.compiler.emit(param_16505);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_16505,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16506 = seq__16468_16501;
var G__16507 = chunk__16469_16502;
var G__16508 = count__16470_16503;
var G__16509 = (i__16471_16504 + (1));
seq__16468_16501 = G__16506;
chunk__16469_16502 = G__16507;
count__16470_16503 = G__16508;
i__16471_16504 = G__16509;
continue;
} else {
var temp__4657__auto___16510 = cljs.core.seq(seq__16468_16501);
if(temp__4657__auto___16510){
var seq__16468_16511__$1 = temp__4657__auto___16510;
if(cljs.core.chunked_seq_QMARK_(seq__16468_16511__$1)){
var c__8507__auto___16512 = cljs.core.chunk_first(seq__16468_16511__$1);
var G__16513 = cljs.core.chunk_rest(seq__16468_16511__$1);
var G__16514 = c__8507__auto___16512;
var G__16515 = cljs.core.count(c__8507__auto___16512);
var G__16516 = (0);
seq__16468_16501 = G__16513;
chunk__16469_16502 = G__16514;
count__16470_16503 = G__16515;
i__16471_16504 = G__16516;
continue;
} else {
var param_16517 = cljs.core.first(seq__16468_16511__$1);
cljs.compiler.emit(param_16517);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_16517,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16518 = cljs.core.next(seq__16468_16511__$1);
var G__16519 = null;
var G__16520 = (0);
var G__16521 = (0);
seq__16468_16501 = G__16518;
chunk__16469_16502 = G__16519;
count__16470_16503 = G__16520;
i__16471_16504 = G__16521;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__16472_16522 = cljs.core.seq(params);
var chunk__16473_16523 = null;
var count__16474_16524 = (0);
var i__16475_16525 = (0);
while(true){
if((i__16475_16525 < count__16474_16524)){
var param_16526 = chunk__16473_16523.cljs$core$IIndexed$_nth$arity$2(null,i__16475_16525);
cljs.compiler.emit(param_16526);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_16526,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16527 = seq__16472_16522;
var G__16528 = chunk__16473_16523;
var G__16529 = count__16474_16524;
var G__16530 = (i__16475_16525 + (1));
seq__16472_16522 = G__16527;
chunk__16473_16523 = G__16528;
count__16474_16524 = G__16529;
i__16475_16525 = G__16530;
continue;
} else {
var temp__4657__auto___16531 = cljs.core.seq(seq__16472_16522);
if(temp__4657__auto___16531){
var seq__16472_16532__$1 = temp__4657__auto___16531;
if(cljs.core.chunked_seq_QMARK_(seq__16472_16532__$1)){
var c__8507__auto___16533 = cljs.core.chunk_first(seq__16472_16532__$1);
var G__16534 = cljs.core.chunk_rest(seq__16472_16532__$1);
var G__16535 = c__8507__auto___16533;
var G__16536 = cljs.core.count(c__8507__auto___16533);
var G__16537 = (0);
seq__16472_16522 = G__16534;
chunk__16473_16523 = G__16535;
count__16474_16524 = G__16536;
i__16475_16525 = G__16537;
continue;
} else {
var param_16538 = cljs.core.first(seq__16472_16532__$1);
cljs.compiler.emit(param_16538);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_16538,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16539 = cljs.core.next(seq__16472_16532__$1);
var G__16540 = null;
var G__16541 = (0);
var G__16542 = (0);
seq__16472_16522 = G__16539;
chunk__16473_16523 = G__16540;
count__16474_16524 = G__16541;
i__16475_16525 = G__16542;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__16543 = cljs.core.seq(params);
var chunk__16544 = null;
var count__16545 = (0);
var i__16546 = (0);
while(true){
if((i__16546 < count__16545)){
var param = chunk__16544.cljs$core$IIndexed$_nth$arity$2(null,i__16546);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16547 = seq__16543;
var G__16548 = chunk__16544;
var G__16549 = count__16545;
var G__16550 = (i__16546 + (1));
seq__16543 = G__16547;
chunk__16544 = G__16548;
count__16545 = G__16549;
i__16546 = G__16550;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16543);
if(temp__4657__auto__){
var seq__16543__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16543__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__16543__$1);
var G__16551 = cljs.core.chunk_rest(seq__16543__$1);
var G__16552 = c__8507__auto__;
var G__16553 = cljs.core.count(c__8507__auto__);
var G__16554 = (0);
seq__16543 = G__16551;
chunk__16544 = G__16552;
count__16545 = G__16553;
i__16546 = G__16554;
continue;
} else {
var param = cljs.core.first(seq__16543__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16555 = cljs.core.next(seq__16543__$1);
var G__16556 = null;
var G__16557 = (0);
var G__16558 = (0);
seq__16543 = G__16555;
chunk__16544 = G__16556;
count__16545 = G__16557;
i__16546 = G__16558;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16559){
var map__16560 = p__16559;
var map__16560__$1 = ((((!((map__16560 == null)))?((((map__16560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16560):map__16560);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16560__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16560__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16560__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16560__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16560__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16560__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16560__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16560__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__16562){
var map__16563 = p__16562;
var map__16563__$1 = ((((!((map__16563 == null)))?((((map__16563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16563):map__16563);
var f = map__16563__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16563__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16563__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16563__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16563__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16563__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16563__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16563__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16563__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_16573__$1 = (function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_16574 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_16573__$1);
var delegate_name_16575 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_16574),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_16575," = function ("], 0));

var seq__16565_16576 = cljs.core.seq(params);
var chunk__16566_16577 = null;
var count__16567_16578 = (0);
var i__16568_16579 = (0);
while(true){
if((i__16568_16579 < count__16567_16578)){
var param_16580 = chunk__16566_16577.cljs$core$IIndexed$_nth$arity$2(null,i__16568_16579);
cljs.compiler.emit(param_16580);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_16580,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16581 = seq__16565_16576;
var G__16582 = chunk__16566_16577;
var G__16583 = count__16567_16578;
var G__16584 = (i__16568_16579 + (1));
seq__16565_16576 = G__16581;
chunk__16566_16577 = G__16582;
count__16567_16578 = G__16583;
i__16568_16579 = G__16584;
continue;
} else {
var temp__4657__auto___16585 = cljs.core.seq(seq__16565_16576);
if(temp__4657__auto___16585){
var seq__16565_16586__$1 = temp__4657__auto___16585;
if(cljs.core.chunked_seq_QMARK_(seq__16565_16586__$1)){
var c__8507__auto___16587 = cljs.core.chunk_first(seq__16565_16586__$1);
var G__16588 = cljs.core.chunk_rest(seq__16565_16586__$1);
var G__16589 = c__8507__auto___16587;
var G__16590 = cljs.core.count(c__8507__auto___16587);
var G__16591 = (0);
seq__16565_16576 = G__16588;
chunk__16566_16577 = G__16589;
count__16567_16578 = G__16590;
i__16568_16579 = G__16591;
continue;
} else {
var param_16592 = cljs.core.first(seq__16565_16586__$1);
cljs.compiler.emit(param_16592);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_16592,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16593 = cljs.core.next(seq__16565_16586__$1);
var G__16594 = null;
var G__16595 = (0);
var G__16596 = (0);
seq__16565_16576 = G__16593;
chunk__16566_16577 = G__16594;
count__16567_16578 = G__16595;
i__16568_16579 = G__16596;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_16574," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_16597 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_16597,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_16575,".call(this,"], 0));

var seq__16569_16598 = cljs.core.seq(params);
var chunk__16570_16599 = null;
var count__16571_16600 = (0);
var i__16572_16601 = (0);
while(true){
if((i__16572_16601 < count__16571_16600)){
var param_16602 = chunk__16570_16599.cljs$core$IIndexed$_nth$arity$2(null,i__16572_16601);
cljs.compiler.emit(param_16602);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_16602,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16603 = seq__16569_16598;
var G__16604 = chunk__16570_16599;
var G__16605 = count__16571_16600;
var G__16606 = (i__16572_16601 + (1));
seq__16569_16598 = G__16603;
chunk__16570_16599 = G__16604;
count__16571_16600 = G__16605;
i__16572_16601 = G__16606;
continue;
} else {
var temp__4657__auto___16607 = cljs.core.seq(seq__16569_16598);
if(temp__4657__auto___16607){
var seq__16569_16608__$1 = temp__4657__auto___16607;
if(cljs.core.chunked_seq_QMARK_(seq__16569_16608__$1)){
var c__8507__auto___16609 = cljs.core.chunk_first(seq__16569_16608__$1);
var G__16610 = cljs.core.chunk_rest(seq__16569_16608__$1);
var G__16611 = c__8507__auto___16609;
var G__16612 = cljs.core.count(c__8507__auto___16609);
var G__16613 = (0);
seq__16569_16598 = G__16610;
chunk__16570_16599 = G__16611;
count__16571_16600 = G__16612;
i__16572_16601 = G__16613;
continue;
} else {
var param_16614 = cljs.core.first(seq__16569_16608__$1);
cljs.compiler.emit(param_16614);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_16614,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__16615 = cljs.core.next(seq__16569_16608__$1);
var G__16616 = null;
var G__16617 = (0);
var G__16618 = (0);
seq__16569_16598 = G__16615;
chunk__16570_16599 = G__16616;
count__16571_16600 = G__16617;
i__16572_16601 = G__16618;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16574,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16574,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_16573__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16574,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_16575,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_16574,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__16622){
var map__16623 = p__16622;
var map__16623__$1 = ((((!((map__16623 == null)))?((((map__16623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16623):map__16623);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16623__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16623__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16623__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16623__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16623__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16623__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16623__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__16623,map__16623__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16619_SHARP_){
var and__7656__auto__ = p1__16619_SHARP_;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__16619_SHARP_));
} else {
return and__7656__auto__;
}
});})(map__16623,map__16623__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_16658__$1 = (function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_16659 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_16658__$1);
var maxparams_16660 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_16661 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_16658__$1,mname_16659,maxparams_16660,loop_locals,map__16623,map__16623__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_16659),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_16658__$1,mname_16659,maxparams_16660,loop_locals,map__16623,map__16623__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_16662 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_16658__$1,mname_16659,maxparams_16660,mmap_16661,loop_locals,map__16623,map__16623__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16620_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__16620_SHARP_)));
});})(name_16658__$1,mname_16659,maxparams_16660,mmap_16661,loop_locals,map__16623,map__16623__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_16661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_16659," = null;"], 0));

var seq__16625_16663 = cljs.core.seq(ms_16662);
var chunk__16626_16664 = null;
var count__16627_16665 = (0);
var i__16628_16666 = (0);
while(true){
if((i__16628_16666 < count__16627_16665)){
var vec__16629_16667 = chunk__16626_16664.cljs$core$IIndexed$_nth$arity$2(null,i__16628_16666);
var n_16668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16629_16667,(0),null);
var meth_16669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16629_16667,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_16668," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_16669))){
cljs.compiler.emit_variadic_fn_method(meth_16669);
} else {
cljs.compiler.emit_fn_method(meth_16669);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__16670 = seq__16625_16663;
var G__16671 = chunk__16626_16664;
var G__16672 = count__16627_16665;
var G__16673 = (i__16628_16666 + (1));
seq__16625_16663 = G__16670;
chunk__16626_16664 = G__16671;
count__16627_16665 = G__16672;
i__16628_16666 = G__16673;
continue;
} else {
var temp__4657__auto___16674 = cljs.core.seq(seq__16625_16663);
if(temp__4657__auto___16674){
var seq__16625_16675__$1 = temp__4657__auto___16674;
if(cljs.core.chunked_seq_QMARK_(seq__16625_16675__$1)){
var c__8507__auto___16676 = cljs.core.chunk_first(seq__16625_16675__$1);
var G__16677 = cljs.core.chunk_rest(seq__16625_16675__$1);
var G__16678 = c__8507__auto___16676;
var G__16679 = cljs.core.count(c__8507__auto___16676);
var G__16680 = (0);
seq__16625_16663 = G__16677;
chunk__16626_16664 = G__16678;
count__16627_16665 = G__16679;
i__16628_16666 = G__16680;
continue;
} else {
var vec__16632_16681 = cljs.core.first(seq__16625_16675__$1);
var n_16682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16632_16681,(0),null);
var meth_16683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16632_16681,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_16682," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_16683))){
cljs.compiler.emit_variadic_fn_method(meth_16683);
} else {
cljs.compiler.emit_fn_method(meth_16683);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__16684 = cljs.core.next(seq__16625_16675__$1);
var G__16685 = null;
var G__16686 = (0);
var G__16687 = (0);
seq__16625_16663 = G__16684;
chunk__16626_16664 = G__16685;
count__16627_16665 = G__16686;
i__16628_16666 = G__16687;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16659," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_16660),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_16660)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_16660));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__16635_16688 = cljs.core.seq(ms_16662);
var chunk__16636_16689 = null;
var count__16637_16690 = (0);
var i__16638_16691 = (0);
while(true){
if((i__16638_16691 < count__16637_16690)){
var vec__16639_16692 = chunk__16636_16689.cljs$core$IIndexed$_nth$arity$2(null,i__16638_16691);
var n_16693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16639_16692,(0),null);
var meth_16694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16639_16692,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_16694))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_16695 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_16695," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_16696 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_16695," = new cljs.core.IndexedSeq(",a_16696,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_16693,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_16660)),(((cljs.core.count(maxparams_16660) > (1)))?", ":null),restarg_16695,");"], 0));
} else {
var pcnt_16697 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_16694));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_16697,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_16693,".call(this",(((pcnt_16697 === (0)))?null:cljs.core._conj((function (){var x__8530__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_16697,maxparams_16660));
return cljs.core._conj(cljs.core.List.EMPTY,x__8530__auto__);
})(),",")),");"], 0));
}

var G__16698 = seq__16635_16688;
var G__16699 = chunk__16636_16689;
var G__16700 = count__16637_16690;
var G__16701 = (i__16638_16691 + (1));
seq__16635_16688 = G__16698;
chunk__16636_16689 = G__16699;
count__16637_16690 = G__16700;
i__16638_16691 = G__16701;
continue;
} else {
var temp__4657__auto___16702 = cljs.core.seq(seq__16635_16688);
if(temp__4657__auto___16702){
var seq__16635_16703__$1 = temp__4657__auto___16702;
if(cljs.core.chunked_seq_QMARK_(seq__16635_16703__$1)){
var c__8507__auto___16704 = cljs.core.chunk_first(seq__16635_16703__$1);
var G__16705 = cljs.core.chunk_rest(seq__16635_16703__$1);
var G__16706 = c__8507__auto___16704;
var G__16707 = cljs.core.count(c__8507__auto___16704);
var G__16708 = (0);
seq__16635_16688 = G__16705;
chunk__16636_16689 = G__16706;
count__16637_16690 = G__16707;
i__16638_16691 = G__16708;
continue;
} else {
var vec__16642_16709 = cljs.core.first(seq__16635_16703__$1);
var n_16710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16642_16709,(0),null);
var meth_16711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16642_16709,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_16711))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_16712 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_16712," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_16713 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_16712," = new cljs.core.IndexedSeq(",a_16713,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_16710,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_16660)),(((cljs.core.count(maxparams_16660) > (1)))?", ":null),restarg_16712,");"], 0));
} else {
var pcnt_16714 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_16711));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_16714,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_16710,".call(this",(((pcnt_16714 === (0)))?null:cljs.core._conj((function (){var x__8530__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_16714,maxparams_16660));
return cljs.core._conj(cljs.core.List.EMPTY,x__8530__auto__);
})(),",")),");"], 0));
}

var G__16715 = cljs.core.next(seq__16635_16703__$1);
var G__16716 = null;
var G__16717 = (0);
var G__16718 = (0);
seq__16635_16688 = G__16715;
chunk__16636_16689 = G__16716;
count__16637_16690 = G__16717;
i__16638_16691 = G__16718;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + (arguments.length - 1)));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16659,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16659,".cljs$lang$applyTo = ",cljs.core.some(((function (name_16658__$1,mname_16659,maxparams_16660,mmap_16661,ms_16662,loop_locals,map__16623,map__16623__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16621_SHARP_){
var vec__16645 = p1__16621_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16645,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16645,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_16658__$1,mname_16659,maxparams_16660,mmap_16661,ms_16662,loop_locals,map__16623,map__16623__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_16662),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__16648_16719 = cljs.core.seq(ms_16662);
var chunk__16649_16720 = null;
var count__16650_16721 = (0);
var i__16651_16722 = (0);
while(true){
if((i__16651_16722 < count__16650_16721)){
var vec__16652_16723 = chunk__16649_16720.cljs$core$IIndexed$_nth$arity$2(null,i__16651_16722);
var n_16724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16652_16723,(0),null);
var meth_16725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16652_16723,(1),null);
var c_16726 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_16725));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_16725))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16659,".cljs$core$IFn$_invoke$arity$variadic = ",n_16724,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16659,".cljs$core$IFn$_invoke$arity$",c_16726," = ",n_16724,";"], 0));
}

var G__16727 = seq__16648_16719;
var G__16728 = chunk__16649_16720;
var G__16729 = count__16650_16721;
var G__16730 = (i__16651_16722 + (1));
seq__16648_16719 = G__16727;
chunk__16649_16720 = G__16728;
count__16650_16721 = G__16729;
i__16651_16722 = G__16730;
continue;
} else {
var temp__4657__auto___16731 = cljs.core.seq(seq__16648_16719);
if(temp__4657__auto___16731){
var seq__16648_16732__$1 = temp__4657__auto___16731;
if(cljs.core.chunked_seq_QMARK_(seq__16648_16732__$1)){
var c__8507__auto___16733 = cljs.core.chunk_first(seq__16648_16732__$1);
var G__16734 = cljs.core.chunk_rest(seq__16648_16732__$1);
var G__16735 = c__8507__auto___16733;
var G__16736 = cljs.core.count(c__8507__auto___16733);
var G__16737 = (0);
seq__16648_16719 = G__16734;
chunk__16649_16720 = G__16735;
count__16650_16721 = G__16736;
i__16651_16722 = G__16737;
continue;
} else {
var vec__16655_16738 = cljs.core.first(seq__16648_16732__$1);
var n_16739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16655_16738,(0),null);
var meth_16740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16655_16738,(1),null);
var c_16741 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_16740));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_16740))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16659,".cljs$core$IFn$_invoke$arity$variadic = ",n_16739,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_16659,".cljs$core$IFn$_invoke$arity$",c_16741," = ",n_16739,";"], 0));
}

var G__16742 = cljs.core.next(seq__16648_16732__$1);
var G__16743 = null;
var G__16744 = (0);
var G__16745 = (0);
seq__16648_16719 = G__16742;
chunk__16649_16720 = G__16743;
count__16650_16721 = G__16744;
i__16651_16722 = G__16745;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_16659,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__16746){
var map__16747 = p__16746;
var map__16747__$1 = ((((!((map__16747 == null)))?((((map__16747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16747):map__16747);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16747__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16747__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16747__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__7656__auto__ = statements;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__7656__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__16749_16753 = cljs.core.seq(statements);
var chunk__16750_16754 = null;
var count__16751_16755 = (0);
var i__16752_16756 = (0);
while(true){
if((i__16752_16756 < count__16751_16755)){
var s_16757 = chunk__16750_16754.cljs$core$IIndexed$_nth$arity$2(null,i__16752_16756);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_16757], 0));

var G__16758 = seq__16749_16753;
var G__16759 = chunk__16750_16754;
var G__16760 = count__16751_16755;
var G__16761 = (i__16752_16756 + (1));
seq__16749_16753 = G__16758;
chunk__16750_16754 = G__16759;
count__16751_16755 = G__16760;
i__16752_16756 = G__16761;
continue;
} else {
var temp__4657__auto___16762 = cljs.core.seq(seq__16749_16753);
if(temp__4657__auto___16762){
var seq__16749_16763__$1 = temp__4657__auto___16762;
if(cljs.core.chunked_seq_QMARK_(seq__16749_16763__$1)){
var c__8507__auto___16764 = cljs.core.chunk_first(seq__16749_16763__$1);
var G__16765 = cljs.core.chunk_rest(seq__16749_16763__$1);
var G__16766 = c__8507__auto___16764;
var G__16767 = cljs.core.count(c__8507__auto___16764);
var G__16768 = (0);
seq__16749_16753 = G__16765;
chunk__16750_16754 = G__16766;
count__16751_16755 = G__16767;
i__16752_16756 = G__16768;
continue;
} else {
var s_16769 = cljs.core.first(seq__16749_16763__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_16769], 0));

var G__16770 = cljs.core.next(seq__16749_16763__$1);
var G__16771 = null;
var G__16772 = (0);
var G__16773 = (0);
seq__16749_16753 = G__16770;
chunk__16750_16754 = G__16771;
count__16751_16755 = G__16772;
i__16752_16756 = G__16773;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__7656__auto__ = statements;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__7656__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__16774){
var map__16775 = p__16774;
var map__16775__$1 = ((((!((map__16775 == null)))?((((map__16775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16775):map__16775);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16777,is_loop){
var map__16778 = p__16777;
var map__16778__$1 = ((((!((map__16778 == null)))?((((map__16778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16778):map__16778);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16778__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16778__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16778__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_16780_16789 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_16780_16789,context,map__16778,map__16778__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_16780_16789,context,map__16778,map__16778__$1,bindings,expr,env))
,bindings):null));

try{var seq__16781_16790 = cljs.core.seq(bindings);
var chunk__16782_16791 = null;
var count__16783_16792 = (0);
var i__16784_16793 = (0);
while(true){
if((i__16784_16793 < count__16783_16792)){
var map__16785_16794 = chunk__16782_16791.cljs$core$IIndexed$_nth$arity$2(null,i__16784_16793);
var map__16785_16795__$1 = ((((!((map__16785_16794 == null)))?((((map__16785_16794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16785_16794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16785_16794):map__16785_16794);
var binding_16796 = map__16785_16795__$1;
var init_16797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16785_16795__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_16796);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_16797,";"], 0));

var G__16798 = seq__16781_16790;
var G__16799 = chunk__16782_16791;
var G__16800 = count__16783_16792;
var G__16801 = (i__16784_16793 + (1));
seq__16781_16790 = G__16798;
chunk__16782_16791 = G__16799;
count__16783_16792 = G__16800;
i__16784_16793 = G__16801;
continue;
} else {
var temp__4657__auto___16802 = cljs.core.seq(seq__16781_16790);
if(temp__4657__auto___16802){
var seq__16781_16803__$1 = temp__4657__auto___16802;
if(cljs.core.chunked_seq_QMARK_(seq__16781_16803__$1)){
var c__8507__auto___16804 = cljs.core.chunk_first(seq__16781_16803__$1);
var G__16805 = cljs.core.chunk_rest(seq__16781_16803__$1);
var G__16806 = c__8507__auto___16804;
var G__16807 = cljs.core.count(c__8507__auto___16804);
var G__16808 = (0);
seq__16781_16790 = G__16805;
chunk__16782_16791 = G__16806;
count__16783_16792 = G__16807;
i__16784_16793 = G__16808;
continue;
} else {
var map__16787_16809 = cljs.core.first(seq__16781_16803__$1);
var map__16787_16810__$1 = ((((!((map__16787_16809 == null)))?((((map__16787_16809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16787_16809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16787_16809):map__16787_16809);
var binding_16811 = map__16787_16810__$1;
var init_16812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16787_16810__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_16811);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_16812,";"], 0));

var G__16813 = cljs.core.next(seq__16781_16803__$1);
var G__16814 = null;
var G__16815 = (0);
var G__16816 = (0);
seq__16781_16790 = G__16813;
chunk__16782_16791 = G__16814;
count__16783_16792 = G__16815;
i__16784_16793 = G__16816;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_16780_16789;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__16817){
var map__16818 = p__16817;
var map__16818__$1 = ((((!((map__16818 == null)))?((((map__16818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16818):map__16818);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16818__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16818__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16818__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__8615__auto___16820 = cljs.core.count(exprs);
var i_16821 = (0);
while(true){
if((i_16821 < n__8615__auto___16820)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_16821) : temps.call(null,i_16821))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_16821) : exprs.call(null,i_16821)),";"], 0));

var G__16822 = (i_16821 + (1));
i_16821 = G__16822;
continue;
} else {
}
break;
}

var n__8615__auto___16823 = cljs.core.count(exprs);
var i_16824 = (0);
while(true){
if((i_16824 < n__8615__auto___16823)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_16824) : params.call(null,i_16824)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_16824) : temps.call(null,i_16824)),";"], 0));

var G__16825 = (i_16824 + (1));
i_16824 = G__16825;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__16826){
var map__16827 = p__16826;
var map__16827__$1 = ((((!((map__16827 == null)))?((((map__16827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16827):map__16827);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16827__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16827__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16827__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__16829_16837 = cljs.core.seq(bindings);
var chunk__16830_16838 = null;
var count__16831_16839 = (0);
var i__16832_16840 = (0);
while(true){
if((i__16832_16840 < count__16831_16839)){
var map__16833_16841 = chunk__16830_16838.cljs$core$IIndexed$_nth$arity$2(null,i__16832_16840);
var map__16833_16842__$1 = ((((!((map__16833_16841 == null)))?((((map__16833_16841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16833_16841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16833_16841):map__16833_16841);
var binding_16843 = map__16833_16842__$1;
var init_16844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16833_16842__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_16843)," = ",init_16844,";"], 0));

var G__16845 = seq__16829_16837;
var G__16846 = chunk__16830_16838;
var G__16847 = count__16831_16839;
var G__16848 = (i__16832_16840 + (1));
seq__16829_16837 = G__16845;
chunk__16830_16838 = G__16846;
count__16831_16839 = G__16847;
i__16832_16840 = G__16848;
continue;
} else {
var temp__4657__auto___16849 = cljs.core.seq(seq__16829_16837);
if(temp__4657__auto___16849){
var seq__16829_16850__$1 = temp__4657__auto___16849;
if(cljs.core.chunked_seq_QMARK_(seq__16829_16850__$1)){
var c__8507__auto___16851 = cljs.core.chunk_first(seq__16829_16850__$1);
var G__16852 = cljs.core.chunk_rest(seq__16829_16850__$1);
var G__16853 = c__8507__auto___16851;
var G__16854 = cljs.core.count(c__8507__auto___16851);
var G__16855 = (0);
seq__16829_16837 = G__16852;
chunk__16830_16838 = G__16853;
count__16831_16839 = G__16854;
i__16832_16840 = G__16855;
continue;
} else {
var map__16835_16856 = cljs.core.first(seq__16829_16850__$1);
var map__16835_16857__$1 = ((((!((map__16835_16856 == null)))?((((map__16835_16856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16835_16856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16835_16856):map__16835_16856);
var binding_16858 = map__16835_16857__$1;
var init_16859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16835_16857__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_16858)," = ",init_16859,";"], 0));

var G__16860 = cljs.core.next(seq__16829_16850__$1);
var G__16861 = null;
var G__16862 = (0);
var G__16863 = (0);
seq__16829_16837 = G__16860;
chunk__16830_16838 = G__16861;
count__16831_16839 = G__16862;
i__16832_16840 = G__16863;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__16866){
var map__16867 = p__16866;
var map__16867__$1 = ((((!((map__16867 == null)))?((((map__16867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16867):map__16867);
var expr = map__16867__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16867__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16867__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16867__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__7656__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__7656__auto__){
var and__7656__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__7656__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__7656__auto__ = protocol;
if(cljs.core.truth_(and__7656__auto__)){
var and__7656__auto____$1 = tag;
if(cljs.core.truth_(and__7656__auto____$1)){
var or__7668__auto__ = (function (){var and__7656__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__7656__auto____$2){
var and__7656__auto____$3 = protocol;
if(cljs.core.truth_(and__7656__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__7656__auto____$3;
}
} else {
return and__7656__auto____$2;
}
})();
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
var and__7656__auto____$2 = (function (){var or__7668__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__7668__auto____$1){
return or__7668__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__7656__auto____$2)){
var or__7668__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__7668__auto____$1){
return or__7668__auto____$1;
} else {
var and__7656__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__7656__auto____$3){
var and__7656__auto____$4 = cljs.core.not((function (){var fexpr__16877 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__16877.cljs$core$IFn$_invoke$arity$1 ? fexpr__16877.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__16877.call(null,tag));
})());
if(and__7656__auto____$4){
var temp__4657__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__7656__auto____$4;
}
} else {
return and__7656__auto____$3;
}
}
} else {
return and__7656__auto____$2;
}
}
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__7668__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__7668__auto__){
return or__7668__auto__;
} else {
var or__7668__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__7668__auto____$1)){
return or__7668__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.analyzer.infer_tag(env,f))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__16869 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__7656__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__7656__auto__)){
return (arity > mfa);
} else {
return and__7656__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16867,map__16867__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16867,map__16867__$1,expr,f,args,env){
return (function (p1__16864_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16864_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16867,map__16867__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16867,map__16867__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16867,map__16867__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16867,map__16867__$1,expr,f,args,env){
return (function (p1__16865_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16865_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16867,map__16867__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16867,map__16867__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(1),null);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_16878 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_16878,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_16879 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_16879,args)),(((mfa_16879 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_16879,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
var or__7668__auto____$1 = js_QMARK_;
if(or__7668__auto____$1){
return or__7668__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var))){
var fprop_16880 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_16880," ? ",f__$1,fprop_16880,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_16880," ? ",f__$1,fprop_16880,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__16881){
var map__16882 = p__16881;
var map__16882__$1 = ((((!((map__16882 == null)))?((((map__16882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16882):map__16882);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16882__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16882__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16882__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__16884){
var map__16885 = p__16884;
var map__16885__$1 = ((((!((map__16885 == null)))?((((map__16885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16885):map__16885);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__16887 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__16887__$1 = ((((!((map__16887 == null)))?((((map__16887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16887):map__16887);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16887__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16887__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__16888 = options;
var map__16888__$1 = ((((!((map__16888 == null)))?((((map__16888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16888):map__16888);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16888__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16888__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__16889 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__16895 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__16895__$1 = ((((!((map__16895 == null)))?((((map__16895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16895):map__16895);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16895__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16895__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16889,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16889,(1),null);
var map__16892 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__16892__$1 = ((((!((map__16892 == null)))?((((map__16892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16892):map__16892);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16892__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16892__$1,false);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__16898_16914 = cljs.core.seq(libs_to_load__$1);
var chunk__16899_16915 = null;
var count__16900_16916 = (0);
var i__16901_16917 = (0);
while(true){
if((i__16901_16917 < count__16900_16916)){
var lib_16918 = chunk__16899_16915.cljs$core$IIndexed$_nth$arity$2(null,i__16901_16917);
if((cljs.analyzer.foreign_dep_QMARK_(lib_16918)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_16918),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_16918),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_16918),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_16918),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_16918),"');"], 0));

}
}
}

var G__16919 = seq__16898_16914;
var G__16920 = chunk__16899_16915;
var G__16921 = count__16900_16916;
var G__16922 = (i__16901_16917 + (1));
seq__16898_16914 = G__16919;
chunk__16899_16915 = G__16920;
count__16900_16916 = G__16921;
i__16901_16917 = G__16922;
continue;
} else {
var temp__4657__auto___16923 = cljs.core.seq(seq__16898_16914);
if(temp__4657__auto___16923){
var seq__16898_16924__$1 = temp__4657__auto___16923;
if(cljs.core.chunked_seq_QMARK_(seq__16898_16924__$1)){
var c__8507__auto___16925 = cljs.core.chunk_first(seq__16898_16924__$1);
var G__16926 = cljs.core.chunk_rest(seq__16898_16924__$1);
var G__16927 = c__8507__auto___16925;
var G__16928 = cljs.core.count(c__8507__auto___16925);
var G__16929 = (0);
seq__16898_16914 = G__16926;
chunk__16899_16915 = G__16927;
count__16900_16916 = G__16928;
i__16901_16917 = G__16929;
continue;
} else {
var lib_16930 = cljs.core.first(seq__16898_16924__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_16930)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_16930),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_16930),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_16930),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_16930),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_16930),"');"], 0));

}
}
}

var G__16931 = cljs.core.next(seq__16898_16924__$1);
var G__16932 = null;
var G__16933 = (0);
var G__16934 = (0);
seq__16898_16914 = G__16931;
chunk__16899_16915 = G__16932;
count__16900_16916 = G__16933;
i__16901_16917 = G__16934;
continue;
}
} else {
}
}
break;
}

var seq__16902_16935 = cljs.core.seq(node_libs);
var chunk__16903_16936 = null;
var count__16904_16937 = (0);
var i__16905_16938 = (0);
while(true){
if((i__16905_16938 < count__16904_16937)){
var lib_16939 = chunk__16903_16936.cljs$core$IIndexed$_nth$arity$2(null,i__16905_16938);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_16939)," = require('",lib_16939,"');"], 0));

var G__16940 = seq__16902_16935;
var G__16941 = chunk__16903_16936;
var G__16942 = count__16904_16937;
var G__16943 = (i__16905_16938 + (1));
seq__16902_16935 = G__16940;
chunk__16903_16936 = G__16941;
count__16904_16937 = G__16942;
i__16905_16938 = G__16943;
continue;
} else {
var temp__4657__auto___16944 = cljs.core.seq(seq__16902_16935);
if(temp__4657__auto___16944){
var seq__16902_16945__$1 = temp__4657__auto___16944;
if(cljs.core.chunked_seq_QMARK_(seq__16902_16945__$1)){
var c__8507__auto___16946 = cljs.core.chunk_first(seq__16902_16945__$1);
var G__16947 = cljs.core.chunk_rest(seq__16902_16945__$1);
var G__16948 = c__8507__auto___16946;
var G__16949 = cljs.core.count(c__8507__auto___16946);
var G__16950 = (0);
seq__16902_16935 = G__16947;
chunk__16903_16936 = G__16948;
count__16904_16937 = G__16949;
i__16905_16938 = G__16950;
continue;
} else {
var lib_16951 = cljs.core.first(seq__16902_16945__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_16951)," = require('",lib_16951,"');"], 0));

var G__16952 = cljs.core.next(seq__16902_16945__$1);
var G__16953 = null;
var G__16954 = (0);
var G__16955 = (0);
seq__16902_16935 = G__16952;
chunk__16903_16936 = G__16953;
count__16904_16937 = G__16954;
i__16905_16938 = G__16955;
continue;
}
} else {
}
}
break;
}

var seq__16906_16956 = cljs.core.seq(global_exports_libs);
var chunk__16907_16957 = null;
var count__16908_16958 = (0);
var i__16909_16959 = (0);
while(true){
if((i__16909_16959 < count__16908_16958)){
var lib_16960 = chunk__16907_16957.cljs$core$IIndexed$_nth$arity$2(null,i__16909_16959);
var map__16910_16961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_16960));
var map__16910_16962__$1 = ((((!((map__16910_16961 == null)))?((((map__16910_16961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16910_16961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16910_16961):map__16910_16961);
var global_exports_16963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16910_16962__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_16960)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_16963,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_16960)),";"], 0));

var G__16964 = seq__16906_16956;
var G__16965 = chunk__16907_16957;
var G__16966 = count__16908_16958;
var G__16967 = (i__16909_16959 + (1));
seq__16906_16956 = G__16964;
chunk__16907_16957 = G__16965;
count__16908_16958 = G__16966;
i__16909_16959 = G__16967;
continue;
} else {
var temp__4657__auto___16968 = cljs.core.seq(seq__16906_16956);
if(temp__4657__auto___16968){
var seq__16906_16969__$1 = temp__4657__auto___16968;
if(cljs.core.chunked_seq_QMARK_(seq__16906_16969__$1)){
var c__8507__auto___16970 = cljs.core.chunk_first(seq__16906_16969__$1);
var G__16971 = cljs.core.chunk_rest(seq__16906_16969__$1);
var G__16972 = c__8507__auto___16970;
var G__16973 = cljs.core.count(c__8507__auto___16970);
var G__16974 = (0);
seq__16906_16956 = G__16971;
chunk__16907_16957 = G__16972;
count__16908_16958 = G__16973;
i__16909_16959 = G__16974;
continue;
} else {
var lib_16975 = cljs.core.first(seq__16906_16969__$1);
var map__16912_16976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_16975));
var map__16912_16977__$1 = ((((!((map__16912_16976 == null)))?((((map__16912_16976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16912_16976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16912_16976):map__16912_16976);
var global_exports_16978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16912_16977__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_16975)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_16978,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_16975)),";"], 0));

var G__16979 = cljs.core.next(seq__16906_16969__$1);
var G__16980 = null;
var G__16981 = (0);
var G__16982 = (0);
seq__16906_16956 = G__16979;
chunk__16907_16957 = G__16980;
count__16908_16958 = G__16981;
i__16909_16959 = G__16982;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__16983){
var map__16984 = p__16983;
var map__16984__$1 = ((((!((map__16984 == null)))?((((map__16984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16984):map__16984);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16984__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16984__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16984__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16984__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16984__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16984__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16984__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__16986){
var map__16987 = p__16986;
var map__16987__$1 = ((((!((map__16987 == null)))?((((map__16987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16987):map__16987);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16987__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16987__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16987__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16987__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16987__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16987__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16987__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__16989){
var map__16990 = p__16989;
var map__16990__$1 = ((((!((map__16990 == null)))?((((map__16990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16990):map__16990);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__16992_17010 = cljs.core.seq(protocols);
var chunk__16993_17011 = null;
var count__16994_17012 = (0);
var i__16995_17013 = (0);
while(true){
if((i__16995_17013 < count__16994_17012)){
var protocol_17014 = chunk__16993_17011.cljs$core$IIndexed$_nth$arity$2(null,i__16995_17013);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17014)].join('')),"}"], 0));

var G__17015 = seq__16992_17010;
var G__17016 = chunk__16993_17011;
var G__17017 = count__16994_17012;
var G__17018 = (i__16995_17013 + (1));
seq__16992_17010 = G__17015;
chunk__16993_17011 = G__17016;
count__16994_17012 = G__17017;
i__16995_17013 = G__17018;
continue;
} else {
var temp__4657__auto___17019 = cljs.core.seq(seq__16992_17010);
if(temp__4657__auto___17019){
var seq__16992_17020__$1 = temp__4657__auto___17019;
if(cljs.core.chunked_seq_QMARK_(seq__16992_17020__$1)){
var c__8507__auto___17021 = cljs.core.chunk_first(seq__16992_17020__$1);
var G__17022 = cljs.core.chunk_rest(seq__16992_17020__$1);
var G__17023 = c__8507__auto___17021;
var G__17024 = cljs.core.count(c__8507__auto___17021);
var G__17025 = (0);
seq__16992_17010 = G__17022;
chunk__16993_17011 = G__17023;
count__16994_17012 = G__17024;
i__16995_17013 = G__17025;
continue;
} else {
var protocol_17026 = cljs.core.first(seq__16992_17020__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17026)].join('')),"}"], 0));

var G__17027 = cljs.core.next(seq__16992_17020__$1);
var G__17028 = null;
var G__17029 = (0);
var G__17030 = (0);
seq__16992_17010 = G__17027;
chunk__16993_17011 = G__17028;
count__16994_17012 = G__17029;
i__16995_17013 = G__17030;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__16996_17031 = cljs.core.seq(fields__$1);
var chunk__16997_17032 = null;
var count__16998_17033 = (0);
var i__16999_17034 = (0);
while(true){
if((i__16999_17034 < count__16998_17033)){
var fld_17035 = chunk__16997_17032.cljs$core$IIndexed$_nth$arity$2(null,i__16999_17034);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_17035," = ",fld_17035,";"], 0));

var G__17036 = seq__16996_17031;
var G__17037 = chunk__16997_17032;
var G__17038 = count__16998_17033;
var G__17039 = (i__16999_17034 + (1));
seq__16996_17031 = G__17036;
chunk__16997_17032 = G__17037;
count__16998_17033 = G__17038;
i__16999_17034 = G__17039;
continue;
} else {
var temp__4657__auto___17040 = cljs.core.seq(seq__16996_17031);
if(temp__4657__auto___17040){
var seq__16996_17041__$1 = temp__4657__auto___17040;
if(cljs.core.chunked_seq_QMARK_(seq__16996_17041__$1)){
var c__8507__auto___17042 = cljs.core.chunk_first(seq__16996_17041__$1);
var G__17043 = cljs.core.chunk_rest(seq__16996_17041__$1);
var G__17044 = c__8507__auto___17042;
var G__17045 = cljs.core.count(c__8507__auto___17042);
var G__17046 = (0);
seq__16996_17031 = G__17043;
chunk__16997_17032 = G__17044;
count__16998_17033 = G__17045;
i__16999_17034 = G__17046;
continue;
} else {
var fld_17047 = cljs.core.first(seq__16996_17041__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_17047," = ",fld_17047,";"], 0));

var G__17048 = cljs.core.next(seq__16996_17041__$1);
var G__17049 = null;
var G__17050 = (0);
var G__17051 = (0);
seq__16996_17031 = G__17048;
chunk__16997_17032 = G__17049;
count__16998_17033 = G__17050;
i__16999_17034 = G__17051;
continue;
}
} else {
}
}
break;
}

var seq__17000_17052 = cljs.core.seq(pmasks);
var chunk__17001_17053 = null;
var count__17002_17054 = (0);
var i__17003_17055 = (0);
while(true){
if((i__17003_17055 < count__17002_17054)){
var vec__17004_17056 = chunk__17001_17053.cljs$core$IIndexed$_nth$arity$2(null,i__17003_17055);
var pno_17057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17004_17056,(0),null);
var pmask_17058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17004_17056,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_17057,"$ = ",pmask_17058,";"], 0));

var G__17059 = seq__17000_17052;
var G__17060 = chunk__17001_17053;
var G__17061 = count__17002_17054;
var G__17062 = (i__17003_17055 + (1));
seq__17000_17052 = G__17059;
chunk__17001_17053 = G__17060;
count__17002_17054 = G__17061;
i__17003_17055 = G__17062;
continue;
} else {
var temp__4657__auto___17063 = cljs.core.seq(seq__17000_17052);
if(temp__4657__auto___17063){
var seq__17000_17064__$1 = temp__4657__auto___17063;
if(cljs.core.chunked_seq_QMARK_(seq__17000_17064__$1)){
var c__8507__auto___17065 = cljs.core.chunk_first(seq__17000_17064__$1);
var G__17066 = cljs.core.chunk_rest(seq__17000_17064__$1);
var G__17067 = c__8507__auto___17065;
var G__17068 = cljs.core.count(c__8507__auto___17065);
var G__17069 = (0);
seq__17000_17052 = G__17066;
chunk__17001_17053 = G__17067;
count__17002_17054 = G__17068;
i__17003_17055 = G__17069;
continue;
} else {
var vec__17007_17070 = cljs.core.first(seq__17000_17064__$1);
var pno_17071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17007_17070,(0),null);
var pmask_17072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17007_17070,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_17071,"$ = ",pmask_17072,";"], 0));

var G__17073 = cljs.core.next(seq__17000_17064__$1);
var G__17074 = null;
var G__17075 = (0);
var G__17076 = (0);
seq__17000_17052 = G__17073;
chunk__17001_17053 = G__17074;
count__17002_17054 = G__17075;
i__17003_17055 = G__17076;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__17077){
var map__17078 = p__17077;
var map__17078__$1 = ((((!((map__17078 == null)))?((((map__17078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17078):map__17078);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__17080_17098 = cljs.core.seq(protocols);
var chunk__17081_17099 = null;
var count__17082_17100 = (0);
var i__17083_17101 = (0);
while(true){
if((i__17083_17101 < count__17082_17100)){
var protocol_17102 = chunk__17081_17099.cljs$core$IIndexed$_nth$arity$2(null,i__17083_17101);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17102)].join('')),"}"], 0));

var G__17103 = seq__17080_17098;
var G__17104 = chunk__17081_17099;
var G__17105 = count__17082_17100;
var G__17106 = (i__17083_17101 + (1));
seq__17080_17098 = G__17103;
chunk__17081_17099 = G__17104;
count__17082_17100 = G__17105;
i__17083_17101 = G__17106;
continue;
} else {
var temp__4657__auto___17107 = cljs.core.seq(seq__17080_17098);
if(temp__4657__auto___17107){
var seq__17080_17108__$1 = temp__4657__auto___17107;
if(cljs.core.chunked_seq_QMARK_(seq__17080_17108__$1)){
var c__8507__auto___17109 = cljs.core.chunk_first(seq__17080_17108__$1);
var G__17110 = cljs.core.chunk_rest(seq__17080_17108__$1);
var G__17111 = c__8507__auto___17109;
var G__17112 = cljs.core.count(c__8507__auto___17109);
var G__17113 = (0);
seq__17080_17098 = G__17110;
chunk__17081_17099 = G__17111;
count__17082_17100 = G__17112;
i__17083_17101 = G__17113;
continue;
} else {
var protocol_17114 = cljs.core.first(seq__17080_17108__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17114)].join('')),"}"], 0));

var G__17115 = cljs.core.next(seq__17080_17108__$1);
var G__17116 = null;
var G__17117 = (0);
var G__17118 = (0);
seq__17080_17098 = G__17115;
chunk__17081_17099 = G__17116;
count__17082_17100 = G__17117;
i__17083_17101 = G__17118;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__17084_17119 = cljs.core.seq(fields__$1);
var chunk__17085_17120 = null;
var count__17086_17121 = (0);
var i__17087_17122 = (0);
while(true){
if((i__17087_17122 < count__17086_17121)){
var fld_17123 = chunk__17085_17120.cljs$core$IIndexed$_nth$arity$2(null,i__17087_17122);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_17123," = ",fld_17123,";"], 0));

var G__17124 = seq__17084_17119;
var G__17125 = chunk__17085_17120;
var G__17126 = count__17086_17121;
var G__17127 = (i__17087_17122 + (1));
seq__17084_17119 = G__17124;
chunk__17085_17120 = G__17125;
count__17086_17121 = G__17126;
i__17087_17122 = G__17127;
continue;
} else {
var temp__4657__auto___17128 = cljs.core.seq(seq__17084_17119);
if(temp__4657__auto___17128){
var seq__17084_17129__$1 = temp__4657__auto___17128;
if(cljs.core.chunked_seq_QMARK_(seq__17084_17129__$1)){
var c__8507__auto___17130 = cljs.core.chunk_first(seq__17084_17129__$1);
var G__17131 = cljs.core.chunk_rest(seq__17084_17129__$1);
var G__17132 = c__8507__auto___17130;
var G__17133 = cljs.core.count(c__8507__auto___17130);
var G__17134 = (0);
seq__17084_17119 = G__17131;
chunk__17085_17120 = G__17132;
count__17086_17121 = G__17133;
i__17087_17122 = G__17134;
continue;
} else {
var fld_17135 = cljs.core.first(seq__17084_17129__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_17135," = ",fld_17135,";"], 0));

var G__17136 = cljs.core.next(seq__17084_17129__$1);
var G__17137 = null;
var G__17138 = (0);
var G__17139 = (0);
seq__17084_17119 = G__17136;
chunk__17085_17120 = G__17137;
count__17086_17121 = G__17138;
i__17087_17122 = G__17139;
continue;
}
} else {
}
}
break;
}

var seq__17088_17140 = cljs.core.seq(pmasks);
var chunk__17089_17141 = null;
var count__17090_17142 = (0);
var i__17091_17143 = (0);
while(true){
if((i__17091_17143 < count__17090_17142)){
var vec__17092_17144 = chunk__17089_17141.cljs$core$IIndexed$_nth$arity$2(null,i__17091_17143);
var pno_17145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17092_17144,(0),null);
var pmask_17146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17092_17144,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_17145,"$ = ",pmask_17146,";"], 0));

var G__17147 = seq__17088_17140;
var G__17148 = chunk__17089_17141;
var G__17149 = count__17090_17142;
var G__17150 = (i__17091_17143 + (1));
seq__17088_17140 = G__17147;
chunk__17089_17141 = G__17148;
count__17090_17142 = G__17149;
i__17091_17143 = G__17150;
continue;
} else {
var temp__4657__auto___17151 = cljs.core.seq(seq__17088_17140);
if(temp__4657__auto___17151){
var seq__17088_17152__$1 = temp__4657__auto___17151;
if(cljs.core.chunked_seq_QMARK_(seq__17088_17152__$1)){
var c__8507__auto___17153 = cljs.core.chunk_first(seq__17088_17152__$1);
var G__17154 = cljs.core.chunk_rest(seq__17088_17152__$1);
var G__17155 = c__8507__auto___17153;
var G__17156 = cljs.core.count(c__8507__auto___17153);
var G__17157 = (0);
seq__17088_17140 = G__17154;
chunk__17089_17141 = G__17155;
count__17090_17142 = G__17156;
i__17091_17143 = G__17157;
continue;
} else {
var vec__17095_17158 = cljs.core.first(seq__17088_17152__$1);
var pno_17159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17095_17158,(0),null);
var pmask_17160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17095_17158,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_17159,"$ = ",pmask_17160,";"], 0));

var G__17161 = cljs.core.next(seq__17088_17152__$1);
var G__17162 = null;
var G__17163 = (0);
var G__17164 = (0);
seq__17088_17140 = G__17161;
chunk__17089_17141 = G__17162;
count__17090_17142 = G__17163;
i__17091_17143 = G__17164;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__17165){
var map__17166 = p__17165;
var map__17166__$1 = ((((!((map__17166 == null)))?((((map__17166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17166):map__17166);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,cljs.core.cst$kw$env);
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__17168){
var map__17169 = p__17168;
var map__17169__$1 = ((((!((map__17169 == null)))?((((map__17169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17169):map__17169);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17169__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17169__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17169__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17169__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17169__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__7656__auto__ = code;
if(cljs.core.truth_(and__7656__auto__)){
var G__17171 = clojure.string.trim(code);
var G__17172 = "/*";
return goog.string.startsWith(G__17171,G__17172);
} else {
return and__7656__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__16060__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16060__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$fn_DASH_invoke_DASH_direct,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target,cljs.core.cst$kw$cache_DASH_key,cljs.core.cst$kw$checked_DASH_arrays,cljs.core.cst$kw$language_DASH_out], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__17176 = cljs.core.seq(table);
var chunk__17177 = null;
var count__17178 = (0);
var i__17179 = (0);
while(true){
if((i__17179 < count__17178)){
var vec__17180 = chunk__17177.cljs$core$IIndexed$_nth$arity$2(null,i__17179);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17180,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17180,(1),null);
var ns_17186 = cljs.core.namespace(sym);
var name_17187 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__17188 = seq__17176;
var G__17189 = chunk__17177;
var G__17190 = count__17178;
var G__17191 = (i__17179 + (1));
seq__17176 = G__17188;
chunk__17177 = G__17189;
count__17178 = G__17190;
i__17179 = G__17191;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17176);
if(temp__4657__auto__){
var seq__17176__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17176__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__17176__$1);
var G__17192 = cljs.core.chunk_rest(seq__17176__$1);
var G__17193 = c__8507__auto__;
var G__17194 = cljs.core.count(c__8507__auto__);
var G__17195 = (0);
seq__17176 = G__17192;
chunk__17177 = G__17193;
count__17178 = G__17194;
i__17179 = G__17195;
continue;
} else {
var vec__17183 = cljs.core.first(seq__17176__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17183,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17183,(1),null);
var ns_17196 = cljs.core.namespace(sym);
var name_17197 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__17198 = cljs.core.next(seq__17176__$1);
var G__17199 = null;
var G__17200 = (0);
var G__17201 = (0);
seq__17176 = G__17198;
chunk__17177 = G__17199;
count__17178 = G__17200;
i__17179 = G__17201;
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
var G__17203 = arguments.length;
switch (G__17203) {
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
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_17208 = cljs.core.first(ks);
var vec__17204_17209 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_17208);
var top_17210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17204_17209,(0),null);
var prefix_SINGLEQUOTE__17211 = vec__17204_17209;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_17208)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__17211) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_17210)) || (cljs.core.contains_QMARK_(known_externs,top_17210)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__17211)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_17210);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__17211)),";"], 0));
}
} else {
}

var m_17212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_17208);
if(cljs.core.empty_QMARK_(m_17212)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__17211,m_17212,top_level,known_externs);
}

var G__17213 = cljs.core.next(ks);
ks = G__17213;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

