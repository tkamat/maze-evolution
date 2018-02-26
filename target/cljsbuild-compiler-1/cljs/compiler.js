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
var map__16912 = s;
var map__16912__$1 = ((((!((map__16912 == null)))?((((map__16912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16912):map__16912);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16912__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16912__$1,cljs.core.cst$kw$info);
var d = (0);
var G__16915 = info;
var map__16916 = G__16915;
var map__16916__$1 = ((((!((map__16916 == null)))?((((map__16916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16916):map__16916);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16916__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__16915__$1 = G__16915;
while(true){
var d__$2 = d__$1;
var map__16918 = G__16915__$1;
var map__16918__$1 = ((((!((map__16918 == null)))?((((map__16918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16918):map__16918);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16918__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__16920 = (d__$2 + (1));
var G__16921 = shadow__$1;
d__$1 = G__16920;
G__16915__$1 = G__16921;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__16922){
var map__16923 = p__16922;
var map__16923__$1 = ((((!((map__16923 == null)))?((((map__16923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16923):map__16923);
var name_var = map__16923__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16923__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16923__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__16925 = info;
var map__16925__$1 = ((((!((map__16925 == null)))?((((map__16925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16925):map__16925);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16925__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16925__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__16927 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__16927) : cljs.compiler.munge.call(null,G__16927));
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
var G__16929 = arguments.length;
switch (G__16929) {
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
var G__16931 = cp;
switch (G__16931) {
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
var seq__16933_16937 = cljs.core.seq(s);
var chunk__16934_16938 = null;
var count__16935_16939 = (0);
var i__16936_16940 = (0);
while(true){
if((i__16936_16940 < count__16935_16939)){
var c_16941 = chunk__16934_16938.cljs$core$IIndexed$_nth$arity$2(null,i__16936_16940);
sb.append(cljs.compiler.escape_char(c_16941));

var G__16942 = seq__16933_16937;
var G__16943 = chunk__16934_16938;
var G__16944 = count__16935_16939;
var G__16945 = (i__16936_16940 + (1));
seq__16933_16937 = G__16942;
chunk__16934_16938 = G__16943;
count__16935_16939 = G__16944;
i__16936_16940 = G__16945;
continue;
} else {
var temp__5457__auto___16946 = cljs.core.seq(seq__16933_16937);
if(temp__5457__auto___16946){
var seq__16933_16947__$1 = temp__5457__auto___16946;
if(cljs.core.chunked_seq_QMARK_(seq__16933_16947__$1)){
var c__9319__auto___16948 = cljs.core.chunk_first(seq__16933_16947__$1);
var G__16949 = cljs.core.chunk_rest(seq__16933_16947__$1);
var G__16950 = c__9319__auto___16948;
var G__16951 = cljs.core.count(c__9319__auto___16948);
var G__16952 = (0);
seq__16933_16937 = G__16949;
chunk__16934_16938 = G__16950;
count__16935_16939 = G__16951;
i__16936_16940 = G__16952;
continue;
} else {
var c_16953 = cljs.core.first(seq__16933_16947__$1);
sb.append(cljs.compiler.escape_char(c_16953));

var G__16954 = cljs.core.next(seq__16933_16947__$1);
var G__16955 = null;
var G__16956 = (0);
var G__16957 = (0);
seq__16933_16937 = G__16954;
chunk__16934_16938 = G__16955;
count__16935_16939 = G__16956;
i__16936_16940 = G__16957;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__9443__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__15138__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__15138__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__16958_16963 = ast;
var map__16958_16964__$1 = ((((!((map__16958_16963 == null)))?((((map__16958_16963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16958_16963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16958_16963):map__16958_16963);
var env_16965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16958_16964__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_16965))){
var map__16960_16966 = env_16965;
var map__16960_16967__$1 = ((((!((map__16960_16966 == null)))?((((map__16960_16966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16960_16966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16960_16966):map__16960_16966);
var line_16968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960_16967__$1,cljs.core.cst$kw$line);
var column_16969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960_16967__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__16960_16966,map__16960_16967__$1,line_16968,column_16969,map__16958_16963,map__16958_16964__$1,env_16965,val__15138__auto__){
return (function (m){
var minfo = (function (){var G__16962 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16962,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__16962;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_16968 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__16960_16966,map__16960_16967__$1,line_16968,column_16969,map__16958_16963,map__16958_16964__$1,env_16965,val__15138__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_16969)?(column_16969 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__16960_16966,map__16960_16967__$1,line_16968,column_16969,map__16958_16963,map__16958_16964__$1,env_16965,val__15138__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__16960_16966,map__16960_16967__$1,line_16968,column_16969,map__16958_16963,map__16958_16964__$1,env_16965,val__15138__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__16960_16966,map__16960_16967__$1,line_16968,column_16969,map__16958_16963,map__16958_16964__$1,env_16965,val__15138__auto__))
,cljs.core.sorted_map()));
});})(map__16960_16966,map__16960_16967__$1,line_16968,column_16969,map__16958_16963,map__16958_16964__$1,env_16965,val__15138__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__15138__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__9674__auto__ = [];
var len__9667__auto___16976 = arguments.length;
var i__9668__auto___16977 = (0);
while(true){
if((i__9668__auto___16977 < len__9667__auto___16976)){
args__9674__auto__.push((arguments[i__9668__auto___16977]));

var G__16978 = (i__9668__auto___16977 + (1));
i__9668__auto___16977 = G__16978;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__16972_16979 = cljs.core.seq(xs);
var chunk__16973_16980 = null;
var count__16974_16981 = (0);
var i__16975_16982 = (0);
while(true){
if((i__16975_16982 < count__16974_16981)){
var x_16983 = chunk__16973_16980.cljs$core$IIndexed$_nth$arity$2(null,i__16975_16982);
if((x_16983 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_16983)){
cljs.compiler.emit(x_16983);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_16983)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_16983);
} else {
if(goog.isFunction(x_16983)){
(x_16983.cljs$core$IFn$_invoke$arity$0 ? x_16983.cljs$core$IFn$_invoke$arity$0() : x_16983.call(null));
} else {
var s_16984 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_16983], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__16972_16979,chunk__16973_16980,count__16974_16981,i__16975_16982,s_16984,x_16983){
return (function (p1__16970_SHARP_){
return (p1__16970_SHARP_ + cljs.core.count(s_16984));
});})(seq__16972_16979,chunk__16973_16980,count__16974_16981,i__16975_16982,s_16984,x_16983))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_16984], 0));

}
}
}
}

var G__16985 = seq__16972_16979;
var G__16986 = chunk__16973_16980;
var G__16987 = count__16974_16981;
var G__16988 = (i__16975_16982 + (1));
seq__16972_16979 = G__16985;
chunk__16973_16980 = G__16986;
count__16974_16981 = G__16987;
i__16975_16982 = G__16988;
continue;
} else {
var temp__5457__auto___16989 = cljs.core.seq(seq__16972_16979);
if(temp__5457__auto___16989){
var seq__16972_16990__$1 = temp__5457__auto___16989;
if(cljs.core.chunked_seq_QMARK_(seq__16972_16990__$1)){
var c__9319__auto___16991 = cljs.core.chunk_first(seq__16972_16990__$1);
var G__16992 = cljs.core.chunk_rest(seq__16972_16990__$1);
var G__16993 = c__9319__auto___16991;
var G__16994 = cljs.core.count(c__9319__auto___16991);
var G__16995 = (0);
seq__16972_16979 = G__16992;
chunk__16973_16980 = G__16993;
count__16974_16981 = G__16994;
i__16975_16982 = G__16995;
continue;
} else {
var x_16996 = cljs.core.first(seq__16972_16990__$1);
if((x_16996 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_16996)){
cljs.compiler.emit(x_16996);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_16996)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_16996);
} else {
if(goog.isFunction(x_16996)){
(x_16996.cljs$core$IFn$_invoke$arity$0 ? x_16996.cljs$core$IFn$_invoke$arity$0() : x_16996.call(null));
} else {
var s_16997 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_16996], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__16972_16979,chunk__16973_16980,count__16974_16981,i__16975_16982,s_16997,x_16996,seq__16972_16990__$1,temp__5457__auto___16989){
return (function (p1__16970_SHARP_){
return (p1__16970_SHARP_ + cljs.core.count(s_16997));
});})(seq__16972_16979,chunk__16973_16980,count__16974_16981,i__16975_16982,s_16997,x_16996,seq__16972_16990__$1,temp__5457__auto___16989))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_16997], 0));

}
}
}
}

var G__16998 = cljs.core.next(seq__16972_16990__$1);
var G__16999 = null;
var G__17000 = (0);
var G__17001 = (0);
seq__16972_16979 = G__16998;
chunk__16973_16980 = G__16999;
count__16974_16981 = G__17000;
i__16975_16982 = G__17001;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq16971){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16971));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__9674__auto__ = [];
var len__9667__auto___17007 = arguments.length;
var i__9668__auto___17008 = (0);
while(true){
if((i__9668__auto___17008 < len__9667__auto___17007)){
args__9674__auto__.push((arguments[i__9668__auto___17008]));

var G__17009 = (i__9668__auto___17008 + (1));
i__9668__auto___17008 = G__17009;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_17003_17010 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_17003_17010;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__17004){
var map__17005 = p__17004;
var map__17005__$1 = ((((!((map__17005 == null)))?((((map__17005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17005):map__17005);
var m = map__17005__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17005__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq17002){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17002));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9515__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17011_17013 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17012_17014 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17011_17013,_STAR_print_fn_STAR_17012_17014,sb__9515__auto__){
return (function (x__9516__auto__){
return sb__9515__auto__.append(x__9516__auto__);
});})(_STAR_print_newline_STAR_17011_17013,_STAR_print_fn_STAR_17012_17014,sb__9515__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17012_17014;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17011_17013;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9515__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9443__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
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
var vec__17015 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17015,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17015,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17015,(2),null);
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

var G__17018_17020 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17018_17020) : cljs.compiler.emit_constant.call(null,G__17018_17020));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__17019_17021 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17019_17021) : cljs.compiler.emit_constant.call(null,G__17019_17021));

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

var G__17022_17023 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17022_17023) : cljs.compiler.emit_constant.call(null,G__17022_17023));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__8376__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8376__auto__)){
var G__17024 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__17024) : x.call(null,G__17024));
} else {
return and__8376__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__8376__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8376__auto__)){
var G__17025 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__17025) : x.call(null,G__17025));
} else {
return and__8376__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__17027){
var map__17028 = p__17027;
var map__17028__$1 = ((((!((map__17028 == null)))?((((map__17028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17028):map__17028);
var ast = map__17028__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17028__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17028__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17028__$1,cljs.core.cst$kw$form);
var temp__5455__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__17030 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__17030__$1 = ((((!((map__17030 == null)))?((((map__17030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17030):map__17030);
var cenv = map__17030__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17030__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__8388__auto__ = js_module_name;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
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
var reserved = (function (){var G__17032 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__8376__auto__ = (function (){var G__17034 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__17034) : cljs.compiler.es5_GT__EQ_.call(null,G__17034));
})();
if(cljs.core.truth_(and__8376__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__8376__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__17032,cljs.analyzer.es5_allowed);
} else {
return G__17032;
}
})();
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17035 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__17035,reserved);
} else {
return G__17035;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__17036){
var map__17037 = p__17036;
var map__17037__$1 = ((((!((map__17037 == null)))?((((map__17037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17037):map__17037);
var arg = map__17037__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17037__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17037__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17037__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17037__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__17039 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__17039__$1 = ((((!((map__17039 == null)))?((((map__17039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17039):map__17039);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17039__$1,cljs.core.cst$kw$name);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__17041){
var map__17042 = p__17041;
var map__17042__$1 = ((((!((map__17042 == null)))?((((map__17042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17042):map__17042);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17042__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17042__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17042__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__17044_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__17044_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__17045){
var map__17046 = p__17045;
var map__17046__$1 = ((((!((map__17046 == null)))?((((map__17046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17046):map__17046);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17046__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17046__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17046__$1,cljs.core.cst$kw$vals);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__17048){
var map__17049 = p__17048;
var map__17049__$1 = ((((!((map__17049 == null)))?((((map__17049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17049):map__17049);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17049__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17049__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__17051){
var map__17052 = p__17051;
var map__17052__$1 = ((((!((map__17052 == null)))?((((map__17052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17052):map__17052);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17052__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17052__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_17054 = cljs.core.count(items);
if((cnt_17054 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_17054,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__17055_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__17055_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__17056){
var map__17057 = p__17056;
var map__17057__$1 = ((((!((map__17057 == null)))?((((map__17057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17057):map__17057);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17057__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17057__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__17059){
var map__17060 = p__17059;
var map__17060__$1 = ((((!((map__17060 == null)))?((((map__17060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17060):map__17060);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5457__auto___17078 = cljs.core.seq(items);
if(temp__5457__auto___17078){
var items_17079__$1 = temp__5457__auto___17078;
var vec__17062_17080 = items_17079__$1;
var seq__17063_17081 = cljs.core.seq(vec__17062_17080);
var first__17064_17082 = cljs.core.first(seq__17063_17081);
var seq__17063_17083__$1 = cljs.core.next(seq__17063_17081);
var vec__17065_17084 = first__17064_17082;
var k_17085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17065_17084,(0),null);
var v_17086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17065_17084,(1),null);
var r_17087 = seq__17063_17083__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_17085),"\": ",v_17086], 0));

var seq__17068_17088 = cljs.core.seq(r_17087);
var chunk__17069_17089 = null;
var count__17070_17090 = (0);
var i__17071_17091 = (0);
while(true){
if((i__17071_17091 < count__17070_17090)){
var vec__17072_17092 = chunk__17069_17089.cljs$core$IIndexed$_nth$arity$2(null,i__17071_17091);
var k_17093__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17072_17092,(0),null);
var v_17094__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17072_17092,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_17093__$1),"\": ",v_17094__$1], 0));

var G__17095 = seq__17068_17088;
var G__17096 = chunk__17069_17089;
var G__17097 = count__17070_17090;
var G__17098 = (i__17071_17091 + (1));
seq__17068_17088 = G__17095;
chunk__17069_17089 = G__17096;
count__17070_17090 = G__17097;
i__17071_17091 = G__17098;
continue;
} else {
var temp__5457__auto___17099__$1 = cljs.core.seq(seq__17068_17088);
if(temp__5457__auto___17099__$1){
var seq__17068_17100__$1 = temp__5457__auto___17099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17068_17100__$1)){
var c__9319__auto___17101 = cljs.core.chunk_first(seq__17068_17100__$1);
var G__17102 = cljs.core.chunk_rest(seq__17068_17100__$1);
var G__17103 = c__9319__auto___17101;
var G__17104 = cljs.core.count(c__9319__auto___17101);
var G__17105 = (0);
seq__17068_17088 = G__17102;
chunk__17069_17089 = G__17103;
count__17070_17090 = G__17104;
i__17071_17091 = G__17105;
continue;
} else {
var vec__17075_17106 = cljs.core.first(seq__17068_17100__$1);
var k_17107__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17075_17106,(0),null);
var v_17108__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17075_17106,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_17107__$1),"\": ",v_17108__$1], 0));

var G__17109 = cljs.core.next(seq__17068_17100__$1);
var G__17110 = null;
var G__17111 = (0);
var G__17112 = (0);
seq__17068_17088 = G__17109;
chunk__17069_17089 = G__17110;
count__17070_17090 = G__17111;
i__17071_17091 = G__17112;
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__17113){
var map__17114 = p__17113;
var map__17114__$1 = ((((!((map__17114 == null)))?((((map__17114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17114):map__17114);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17114__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17114__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17114__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17114__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__17116){
var map__17117 = p__17116;
var map__17117__$1 = ((((!((map__17117 == null)))?((((map__17117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17117):map__17117);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17117__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17117__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__17119){
var map__17120 = p__17119;
var map__17120__$1 = ((((!((map__17120 == null)))?((((map__17120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17120):map__17120);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17120__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17120__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17120__$1,cljs.core.cst$kw$const_DASH_expr);
var or__8388__auto__ = (function (){var and__8376__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__8376__auto__){
var and__8376__auto____$1 = form;
if(cljs.core.truth_(and__8376__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})();
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var and__8376__auto__ = !((const_expr == null));
if(and__8376__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__8376__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__17122){
var map__17123 = p__17122;
var map__17123__$1 = ((((!((map__17123 == null)))?((((map__17123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17123):map__17123);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123__$1,cljs.core.cst$kw$const_DASH_expr);
var or__8388__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = !((const_expr == null));
if(and__8376__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__8376__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__8388__auto__ = (function (){var fexpr__17126 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__17126.cljs$core$IFn$_invoke$arity$1 ? fexpr__17126.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__17126.call(null,tag));
})();
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__17127){
var map__17128 = p__17127;
var map__17128__$1 = ((((!((map__17128 == null)))?((((map__17128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17128):map__17128);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17128__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17128__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17128__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17128__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17128__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__8388__auto__ = unchecked;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__17130){
var map__17131 = p__17130;
var map__17131__$1 = ((((!((map__17131 == null)))?((((map__17131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17131):map__17131);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$env);
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

var seq__17133_17151 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__17134_17152 = null;
var count__17135_17153 = (0);
var i__17136_17154 = (0);
while(true){
if((i__17136_17154 < count__17135_17153)){
var vec__17137_17155 = chunk__17134_17152.cljs$core$IIndexed$_nth$arity$2(null,i__17136_17154);
var ts_17156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17137_17155,(0),null);
var then_17157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17137_17155,(1),null);
var seq__17140_17158 = cljs.core.seq(ts_17156);
var chunk__17141_17159 = null;
var count__17142_17160 = (0);
var i__17143_17161 = (0);
while(true){
if((i__17143_17161 < count__17142_17160)){
var test_17162 = chunk__17141_17159.cljs$core$IIndexed$_nth$arity$2(null,i__17143_17161);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17162,":"], 0));

var G__17163 = seq__17140_17158;
var G__17164 = chunk__17141_17159;
var G__17165 = count__17142_17160;
var G__17166 = (i__17143_17161 + (1));
seq__17140_17158 = G__17163;
chunk__17141_17159 = G__17164;
count__17142_17160 = G__17165;
i__17143_17161 = G__17166;
continue;
} else {
var temp__5457__auto___17167 = cljs.core.seq(seq__17140_17158);
if(temp__5457__auto___17167){
var seq__17140_17168__$1 = temp__5457__auto___17167;
if(cljs.core.chunked_seq_QMARK_(seq__17140_17168__$1)){
var c__9319__auto___17169 = cljs.core.chunk_first(seq__17140_17168__$1);
var G__17170 = cljs.core.chunk_rest(seq__17140_17168__$1);
var G__17171 = c__9319__auto___17169;
var G__17172 = cljs.core.count(c__9319__auto___17169);
var G__17173 = (0);
seq__17140_17158 = G__17170;
chunk__17141_17159 = G__17171;
count__17142_17160 = G__17172;
i__17143_17161 = G__17173;
continue;
} else {
var test_17174 = cljs.core.first(seq__17140_17168__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17174,":"], 0));

var G__17175 = cljs.core.next(seq__17140_17168__$1);
var G__17176 = null;
var G__17177 = (0);
var G__17178 = (0);
seq__17140_17158 = G__17175;
chunk__17141_17159 = G__17176;
count__17142_17160 = G__17177;
i__17143_17161 = G__17178;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_17157], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_17157], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__17179 = seq__17133_17151;
var G__17180 = chunk__17134_17152;
var G__17181 = count__17135_17153;
var G__17182 = (i__17136_17154 + (1));
seq__17133_17151 = G__17179;
chunk__17134_17152 = G__17180;
count__17135_17153 = G__17181;
i__17136_17154 = G__17182;
continue;
} else {
var temp__5457__auto___17183 = cljs.core.seq(seq__17133_17151);
if(temp__5457__auto___17183){
var seq__17133_17184__$1 = temp__5457__auto___17183;
if(cljs.core.chunked_seq_QMARK_(seq__17133_17184__$1)){
var c__9319__auto___17185 = cljs.core.chunk_first(seq__17133_17184__$1);
var G__17186 = cljs.core.chunk_rest(seq__17133_17184__$1);
var G__17187 = c__9319__auto___17185;
var G__17188 = cljs.core.count(c__9319__auto___17185);
var G__17189 = (0);
seq__17133_17151 = G__17186;
chunk__17134_17152 = G__17187;
count__17135_17153 = G__17188;
i__17136_17154 = G__17189;
continue;
} else {
var vec__17144_17190 = cljs.core.first(seq__17133_17184__$1);
var ts_17191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144_17190,(0),null);
var then_17192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144_17190,(1),null);
var seq__17147_17193 = cljs.core.seq(ts_17191);
var chunk__17148_17194 = null;
var count__17149_17195 = (0);
var i__17150_17196 = (0);
while(true){
if((i__17150_17196 < count__17149_17195)){
var test_17197 = chunk__17148_17194.cljs$core$IIndexed$_nth$arity$2(null,i__17150_17196);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17197,":"], 0));

var G__17198 = seq__17147_17193;
var G__17199 = chunk__17148_17194;
var G__17200 = count__17149_17195;
var G__17201 = (i__17150_17196 + (1));
seq__17147_17193 = G__17198;
chunk__17148_17194 = G__17199;
count__17149_17195 = G__17200;
i__17150_17196 = G__17201;
continue;
} else {
var temp__5457__auto___17202__$1 = cljs.core.seq(seq__17147_17193);
if(temp__5457__auto___17202__$1){
var seq__17147_17203__$1 = temp__5457__auto___17202__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17147_17203__$1)){
var c__9319__auto___17204 = cljs.core.chunk_first(seq__17147_17203__$1);
var G__17205 = cljs.core.chunk_rest(seq__17147_17203__$1);
var G__17206 = c__9319__auto___17204;
var G__17207 = cljs.core.count(c__9319__auto___17204);
var G__17208 = (0);
seq__17147_17193 = G__17205;
chunk__17148_17194 = G__17206;
count__17149_17195 = G__17207;
i__17150_17196 = G__17208;
continue;
} else {
var test_17209 = cljs.core.first(seq__17147_17203__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17209,":"], 0));

var G__17210 = cljs.core.next(seq__17147_17203__$1);
var G__17211 = null;
var G__17212 = (0);
var G__17213 = (0);
seq__17147_17193 = G__17210;
chunk__17148_17194 = G__17211;
count__17149_17195 = G__17212;
i__17150_17196 = G__17213;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_17192], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_17192], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__17214 = cljs.core.next(seq__17133_17184__$1);
var G__17215 = null;
var G__17216 = (0);
var G__17217 = (0);
seq__17133_17151 = G__17214;
chunk__17134_17152 = G__17215;
count__17135_17153 = G__17216;
i__17136_17154 = G__17217;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__17218){
var map__17219 = p__17218;
var map__17219__$1 = ((((!((map__17219 == null)))?((((map__17219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17219):map__17219);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17219__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17219__$1,cljs.core.cst$kw$env);
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17222 = env;
var G__17223 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__17222,G__17223) : cljs.compiler.resolve_type.call(null,G__17222,G__17223));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__17224 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17224,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17224,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__17224,fstr,rstr,ret_t,axstr){
return (function (p1__17221_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__17221_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__17221_SHARP_));
});})(idx,vec__17224,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__17227 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17227),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__17227;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17228 = env;
var G__17229 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__17228,G__17229) : cljs.compiler.resolve_type.call(null,G__17228,G__17229));
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
return (function (p1__17230_SHARP_){
return cljs.compiler.resolve_type(env,p1__17230_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__17231 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__17232 = cljs.core.seq(vec__17231);
var first__17233 = cljs.core.first(seq__17232);
var seq__17232__$1 = cljs.core.next(seq__17232);
var p = first__17233;
var first__17233__$1 = cljs.core.first(seq__17232__$1);
var seq__17232__$2 = cljs.core.next(seq__17232__$1);
var ts = first__17233__$1;
var first__17233__$2 = cljs.core.first(seq__17232__$2);
var seq__17232__$3 = cljs.core.next(seq__17232__$2);
var n = first__17233__$2;
var xs = seq__17232__$3;
if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__8376__auto__){
var and__8376__auto____$1 = ts;
if(cljs.core.truth_(and__8376__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__17234 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__17235 = cljs.core.seq(vec__17234);
var first__17236 = cljs.core.first(seq__17235);
var seq__17235__$1 = cljs.core.next(seq__17235);
var p = first__17236;
var first__17236__$1 = cljs.core.first(seq__17235__$1);
var seq__17235__$2 = cljs.core.next(seq__17235__$1);
var ts = first__17236__$1;
var xs = seq__17235__$2;
if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__8376__auto__){
var and__8376__auto____$1 = ts;
if(cljs.core.truth_(and__8376__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
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
var G__17238 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__17237 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__17237.cljs$core$IFn$_invoke$arity$1 ? fexpr__17237.cljs$core$IFn$_invoke$arity$1(G__17238) : fexpr__17237.call(null,G__17238));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__17241 = arguments.length;
switch (G__17241) {
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
var vec__17249 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__17239_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__17239_SHARP_);
} else {
return p1__17239_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__17250 = cljs.core.seq(vec__17249);
var first__17251 = cljs.core.first(seq__17250);
var seq__17250__$1 = cljs.core.next(seq__17250);
var x = first__17251;
var ys = seq__17250__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__17252 = cljs.core.seq(ys);
var chunk__17253 = null;
var count__17254 = (0);
var i__17255 = (0);
while(true){
if((i__17255 < count__17254)){
var next_line = chunk__17253.cljs$core$IIndexed$_nth$arity$2(null,i__17255);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__17261 = seq__17252;
var G__17262 = chunk__17253;
var G__17263 = count__17254;
var G__17264 = (i__17255 + (1));
seq__17252 = G__17261;
chunk__17253 = G__17262;
count__17254 = G__17263;
i__17255 = G__17264;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17252);
if(temp__5457__auto__){
var seq__17252__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17252__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__17252__$1);
var G__17265 = cljs.core.chunk_rest(seq__17252__$1);
var G__17266 = c__9319__auto__;
var G__17267 = cljs.core.count(c__9319__auto__);
var G__17268 = (0);
seq__17252 = G__17265;
chunk__17253 = G__17266;
count__17254 = G__17267;
i__17255 = G__17268;
continue;
} else {
var next_line = cljs.core.first(seq__17252__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__17269 = cljs.core.next(seq__17252__$1);
var G__17270 = null;
var G__17271 = (0);
var G__17272 = (0);
seq__17252 = G__17269;
chunk__17253 = G__17270;
count__17254 = G__17271;
i__17255 = G__17272;
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

var seq__17256_17273 = cljs.core.seq(docs__$2);
var chunk__17257_17274 = null;
var count__17258_17275 = (0);
var i__17259_17276 = (0);
while(true){
if((i__17259_17276 < count__17258_17275)){
var e_17277 = chunk__17257_17274.cljs$core$IIndexed$_nth$arity$2(null,i__17259_17276);
if(cljs.core.truth_(e_17277)){
print_comment_lines(e_17277);
} else {
}

var G__17278 = seq__17256_17273;
var G__17279 = chunk__17257_17274;
var G__17280 = count__17258_17275;
var G__17281 = (i__17259_17276 + (1));
seq__17256_17273 = G__17278;
chunk__17257_17274 = G__17279;
count__17258_17275 = G__17280;
i__17259_17276 = G__17281;
continue;
} else {
var temp__5457__auto___17282 = cljs.core.seq(seq__17256_17273);
if(temp__5457__auto___17282){
var seq__17256_17283__$1 = temp__5457__auto___17282;
if(cljs.core.chunked_seq_QMARK_(seq__17256_17283__$1)){
var c__9319__auto___17284 = cljs.core.chunk_first(seq__17256_17283__$1);
var G__17285 = cljs.core.chunk_rest(seq__17256_17283__$1);
var G__17286 = c__9319__auto___17284;
var G__17287 = cljs.core.count(c__9319__auto___17284);
var G__17288 = (0);
seq__17256_17273 = G__17285;
chunk__17257_17274 = G__17286;
count__17258_17275 = G__17287;
i__17259_17276 = G__17288;
continue;
} else {
var e_17289 = cljs.core.first(seq__17256_17283__$1);
if(cljs.core.truth_(e_17289)){
print_comment_lines(e_17289);
} else {
}

var G__17290 = cljs.core.next(seq__17256_17283__$1);
var G__17291 = null;
var G__17292 = (0);
var G__17293 = (0);
seq__17256_17273 = G__17290;
chunk__17257_17274 = G__17291;
count__17258_17275 = G__17292;
i__17259_17276 = G__17293;
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
var and__8376__auto__ = cljs.core.some(((function (opts){
return (function (p1__17295_SHARP_){
return goog.string.startsWith(p1__17295_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8376__auto__)){
var and__8376__auto____$1 = opts;
if(cljs.core.truth_(and__8376__auto____$1)){
var and__8376__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__8376__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__8376__auto____$2;
}
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__17296){
var map__17297 = p__17296;
var map__17297__$1 = ((((!((map__17297 == null)))?((((map__17297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17297):map__17297);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__8388__auto__ = init;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
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
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
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

if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8376__auto__){
return test;
} else {
return and__8376__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__17299){
var map__17300 = p__17299;
var map__17300__$1 = ((((!((map__17300 == null)))?((((map__17300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17300):map__17300);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17300__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17300__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17300__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__17302_17320 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__17303_17321 = null;
var count__17304_17322 = (0);
var i__17305_17323 = (0);
while(true){
if((i__17305_17323 < count__17304_17322)){
var vec__17306_17324 = chunk__17303_17321.cljs$core$IIndexed$_nth$arity$2(null,i__17305_17323);
var i_17325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17306_17324,(0),null);
var param_17326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17306_17324,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_17326);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__17327 = seq__17302_17320;
var G__17328 = chunk__17303_17321;
var G__17329 = count__17304_17322;
var G__17330 = (i__17305_17323 + (1));
seq__17302_17320 = G__17327;
chunk__17303_17321 = G__17328;
count__17304_17322 = G__17329;
i__17305_17323 = G__17330;
continue;
} else {
var temp__5457__auto___17331 = cljs.core.seq(seq__17302_17320);
if(temp__5457__auto___17331){
var seq__17302_17332__$1 = temp__5457__auto___17331;
if(cljs.core.chunked_seq_QMARK_(seq__17302_17332__$1)){
var c__9319__auto___17333 = cljs.core.chunk_first(seq__17302_17332__$1);
var G__17334 = cljs.core.chunk_rest(seq__17302_17332__$1);
var G__17335 = c__9319__auto___17333;
var G__17336 = cljs.core.count(c__9319__auto___17333);
var G__17337 = (0);
seq__17302_17320 = G__17334;
chunk__17303_17321 = G__17335;
count__17304_17322 = G__17336;
i__17305_17323 = G__17337;
continue;
} else {
var vec__17309_17338 = cljs.core.first(seq__17302_17332__$1);
var i_17339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17309_17338,(0),null);
var param_17340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17309_17338,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_17340);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__17341 = cljs.core.next(seq__17302_17332__$1);
var G__17342 = null;
var G__17343 = (0);
var G__17344 = (0);
seq__17302_17320 = G__17341;
chunk__17303_17321 = G__17342;
count__17304_17322 = G__17343;
i__17305_17323 = G__17344;
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

var seq__17312_17345 = cljs.core.seq(params);
var chunk__17313_17346 = null;
var count__17314_17347 = (0);
var i__17315_17348 = (0);
while(true){
if((i__17315_17348 < count__17314_17347)){
var param_17349 = chunk__17313_17346.cljs$core$IIndexed$_nth$arity$2(null,i__17315_17348);
cljs.compiler.emit(param_17349);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17349,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17350 = seq__17312_17345;
var G__17351 = chunk__17313_17346;
var G__17352 = count__17314_17347;
var G__17353 = (i__17315_17348 + (1));
seq__17312_17345 = G__17350;
chunk__17313_17346 = G__17351;
count__17314_17347 = G__17352;
i__17315_17348 = G__17353;
continue;
} else {
var temp__5457__auto___17354 = cljs.core.seq(seq__17312_17345);
if(temp__5457__auto___17354){
var seq__17312_17355__$1 = temp__5457__auto___17354;
if(cljs.core.chunked_seq_QMARK_(seq__17312_17355__$1)){
var c__9319__auto___17356 = cljs.core.chunk_first(seq__17312_17355__$1);
var G__17357 = cljs.core.chunk_rest(seq__17312_17355__$1);
var G__17358 = c__9319__auto___17356;
var G__17359 = cljs.core.count(c__9319__auto___17356);
var G__17360 = (0);
seq__17312_17345 = G__17357;
chunk__17313_17346 = G__17358;
count__17314_17347 = G__17359;
i__17315_17348 = G__17360;
continue;
} else {
var param_17361 = cljs.core.first(seq__17312_17355__$1);
cljs.compiler.emit(param_17361);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17361,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17362 = cljs.core.next(seq__17312_17355__$1);
var G__17363 = null;
var G__17364 = (0);
var G__17365 = (0);
seq__17312_17345 = G__17362;
chunk__17313_17346 = G__17363;
count__17314_17347 = G__17364;
i__17315_17348 = G__17365;
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

var seq__17316_17366 = cljs.core.seq(params);
var chunk__17317_17367 = null;
var count__17318_17368 = (0);
var i__17319_17369 = (0);
while(true){
if((i__17319_17369 < count__17318_17368)){
var param_17370 = chunk__17317_17367.cljs$core$IIndexed$_nth$arity$2(null,i__17319_17369);
cljs.compiler.emit(param_17370);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17370,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17371 = seq__17316_17366;
var G__17372 = chunk__17317_17367;
var G__17373 = count__17318_17368;
var G__17374 = (i__17319_17369 + (1));
seq__17316_17366 = G__17371;
chunk__17317_17367 = G__17372;
count__17318_17368 = G__17373;
i__17319_17369 = G__17374;
continue;
} else {
var temp__5457__auto___17375 = cljs.core.seq(seq__17316_17366);
if(temp__5457__auto___17375){
var seq__17316_17376__$1 = temp__5457__auto___17375;
if(cljs.core.chunked_seq_QMARK_(seq__17316_17376__$1)){
var c__9319__auto___17377 = cljs.core.chunk_first(seq__17316_17376__$1);
var G__17378 = cljs.core.chunk_rest(seq__17316_17376__$1);
var G__17379 = c__9319__auto___17377;
var G__17380 = cljs.core.count(c__9319__auto___17377);
var G__17381 = (0);
seq__17316_17366 = G__17378;
chunk__17317_17367 = G__17379;
count__17318_17368 = G__17380;
i__17319_17369 = G__17381;
continue;
} else {
var param_17382 = cljs.core.first(seq__17316_17376__$1);
cljs.compiler.emit(param_17382);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17382,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17383 = cljs.core.next(seq__17316_17376__$1);
var G__17384 = null;
var G__17385 = (0);
var G__17386 = (0);
seq__17316_17366 = G__17383;
chunk__17317_17367 = G__17384;
count__17318_17368 = G__17385;
i__17319_17369 = G__17386;
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
var seq__17387 = cljs.core.seq(params);
var chunk__17388 = null;
var count__17389 = (0);
var i__17390 = (0);
while(true){
if((i__17390 < count__17389)){
var param = chunk__17388.cljs$core$IIndexed$_nth$arity$2(null,i__17390);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17391 = seq__17387;
var G__17392 = chunk__17388;
var G__17393 = count__17389;
var G__17394 = (i__17390 + (1));
seq__17387 = G__17391;
chunk__17388 = G__17392;
count__17389 = G__17393;
i__17390 = G__17394;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17387);
if(temp__5457__auto__){
var seq__17387__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17387__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__17387__$1);
var G__17395 = cljs.core.chunk_rest(seq__17387__$1);
var G__17396 = c__9319__auto__;
var G__17397 = cljs.core.count(c__9319__auto__);
var G__17398 = (0);
seq__17387 = G__17395;
chunk__17388 = G__17396;
count__17389 = G__17397;
i__17390 = G__17398;
continue;
} else {
var param = cljs.core.first(seq__17387__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17399 = cljs.core.next(seq__17387__$1);
var G__17400 = null;
var G__17401 = (0);
var G__17402 = (0);
seq__17387 = G__17399;
chunk__17388 = G__17400;
count__17389 = G__17401;
i__17390 = G__17402;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__17403){
var map__17404 = p__17403;
var map__17404__$1 = ((((!((map__17404 == null)))?((((map__17404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17404):map__17404);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__17406){
var map__17407 = p__17406;
var map__17407__$1 = ((((!((map__17407 == null)))?((((map__17407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17407):map__17407);
var f = map__17407__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_17417__$1 = (function (){var or__8388__auto__ = name;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17418 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17417__$1);
var delegate_name_17419 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17418),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_17419," = function ("], 0));

var seq__17409_17420 = cljs.core.seq(params);
var chunk__17410_17421 = null;
var count__17411_17422 = (0);
var i__17412_17423 = (0);
while(true){
if((i__17412_17423 < count__17411_17422)){
var param_17424 = chunk__17410_17421.cljs$core$IIndexed$_nth$arity$2(null,i__17412_17423);
cljs.compiler.emit(param_17424);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17424,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17425 = seq__17409_17420;
var G__17426 = chunk__17410_17421;
var G__17427 = count__17411_17422;
var G__17428 = (i__17412_17423 + (1));
seq__17409_17420 = G__17425;
chunk__17410_17421 = G__17426;
count__17411_17422 = G__17427;
i__17412_17423 = G__17428;
continue;
} else {
var temp__5457__auto___17429 = cljs.core.seq(seq__17409_17420);
if(temp__5457__auto___17429){
var seq__17409_17430__$1 = temp__5457__auto___17429;
if(cljs.core.chunked_seq_QMARK_(seq__17409_17430__$1)){
var c__9319__auto___17431 = cljs.core.chunk_first(seq__17409_17430__$1);
var G__17432 = cljs.core.chunk_rest(seq__17409_17430__$1);
var G__17433 = c__9319__auto___17431;
var G__17434 = cljs.core.count(c__9319__auto___17431);
var G__17435 = (0);
seq__17409_17420 = G__17432;
chunk__17410_17421 = G__17433;
count__17411_17422 = G__17434;
i__17412_17423 = G__17435;
continue;
} else {
var param_17436 = cljs.core.first(seq__17409_17430__$1);
cljs.compiler.emit(param_17436);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17436,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17437 = cljs.core.next(seq__17409_17430__$1);
var G__17438 = null;
var G__17439 = (0);
var G__17440 = (0);
seq__17409_17420 = G__17437;
chunk__17410_17421 = G__17438;
count__17411_17422 = G__17439;
i__17412_17423 = G__17440;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_17418," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_17441 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_17441,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_17419,".call(this,"], 0));

var seq__17413_17442 = cljs.core.seq(params);
var chunk__17414_17443 = null;
var count__17415_17444 = (0);
var i__17416_17445 = (0);
while(true){
if((i__17416_17445 < count__17415_17444)){
var param_17446 = chunk__17414_17443.cljs$core$IIndexed$_nth$arity$2(null,i__17416_17445);
cljs.compiler.emit(param_17446);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17446,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17447 = seq__17413_17442;
var G__17448 = chunk__17414_17443;
var G__17449 = count__17415_17444;
var G__17450 = (i__17416_17445 + (1));
seq__17413_17442 = G__17447;
chunk__17414_17443 = G__17448;
count__17415_17444 = G__17449;
i__17416_17445 = G__17450;
continue;
} else {
var temp__5457__auto___17451 = cljs.core.seq(seq__17413_17442);
if(temp__5457__auto___17451){
var seq__17413_17452__$1 = temp__5457__auto___17451;
if(cljs.core.chunked_seq_QMARK_(seq__17413_17452__$1)){
var c__9319__auto___17453 = cljs.core.chunk_first(seq__17413_17452__$1);
var G__17454 = cljs.core.chunk_rest(seq__17413_17452__$1);
var G__17455 = c__9319__auto___17453;
var G__17456 = cljs.core.count(c__9319__auto___17453);
var G__17457 = (0);
seq__17413_17442 = G__17454;
chunk__17414_17443 = G__17455;
count__17415_17444 = G__17456;
i__17416_17445 = G__17457;
continue;
} else {
var param_17458 = cljs.core.first(seq__17413_17452__$1);
cljs.compiler.emit(param_17458);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17458,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17459 = cljs.core.next(seq__17413_17452__$1);
var G__17460 = null;
var G__17461 = (0);
var G__17462 = (0);
seq__17413_17442 = G__17459;
chunk__17414_17443 = G__17460;
count__17415_17444 = G__17461;
i__17416_17445 = G__17462;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17418,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17418,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_17417__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17418,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_17419,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_17418,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__17466){
var map__17467 = p__17466;
var map__17467__$1 = ((((!((map__17467 == null)))?((((map__17467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17467):map__17467);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__17467,map__17467__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17463_SHARP_){
var and__8376__auto__ = p1__17463_SHARP_;
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__17463_SHARP_));
} else {
return and__8376__auto__;
}
});})(map__17467,map__17467__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_17502__$1 = (function (){var or__8388__auto__ = name;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17503 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17502__$1);
var maxparams_17504 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_17505 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_17502__$1,mname_17503,maxparams_17504,loop_locals,map__17467,map__17467__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17503),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_17502__$1,mname_17503,maxparams_17504,loop_locals,map__17467,map__17467__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_17506 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_17502__$1,mname_17503,maxparams_17504,mmap_17505,loop_locals,map__17467,map__17467__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17464_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__17464_SHARP_)));
});})(name_17502__$1,mname_17503,maxparams_17504,mmap_17505,loop_locals,map__17467,map__17467__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_17505));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_17503," = null;"], 0));

var seq__17469_17507 = cljs.core.seq(ms_17506);
var chunk__17470_17508 = null;
var count__17471_17509 = (0);
var i__17472_17510 = (0);
while(true){
if((i__17472_17510 < count__17471_17509)){
var vec__17473_17511 = chunk__17470_17508.cljs$core$IIndexed$_nth$arity$2(null,i__17472_17510);
var n_17512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17473_17511,(0),null);
var meth_17513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17473_17511,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_17512," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17513))){
cljs.compiler.emit_variadic_fn_method(meth_17513);
} else {
cljs.compiler.emit_fn_method(meth_17513);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__17514 = seq__17469_17507;
var G__17515 = chunk__17470_17508;
var G__17516 = count__17471_17509;
var G__17517 = (i__17472_17510 + (1));
seq__17469_17507 = G__17514;
chunk__17470_17508 = G__17515;
count__17471_17509 = G__17516;
i__17472_17510 = G__17517;
continue;
} else {
var temp__5457__auto___17518 = cljs.core.seq(seq__17469_17507);
if(temp__5457__auto___17518){
var seq__17469_17519__$1 = temp__5457__auto___17518;
if(cljs.core.chunked_seq_QMARK_(seq__17469_17519__$1)){
var c__9319__auto___17520 = cljs.core.chunk_first(seq__17469_17519__$1);
var G__17521 = cljs.core.chunk_rest(seq__17469_17519__$1);
var G__17522 = c__9319__auto___17520;
var G__17523 = cljs.core.count(c__9319__auto___17520);
var G__17524 = (0);
seq__17469_17507 = G__17521;
chunk__17470_17508 = G__17522;
count__17471_17509 = G__17523;
i__17472_17510 = G__17524;
continue;
} else {
var vec__17476_17525 = cljs.core.first(seq__17469_17519__$1);
var n_17526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17476_17525,(0),null);
var meth_17527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17476_17525,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_17526," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17527))){
cljs.compiler.emit_variadic_fn_method(meth_17527);
} else {
cljs.compiler.emit_fn_method(meth_17527);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__17528 = cljs.core.next(seq__17469_17519__$1);
var G__17529 = null;
var G__17530 = (0);
var G__17531 = (0);
seq__17469_17507 = G__17528;
chunk__17470_17508 = G__17529;
count__17471_17509 = G__17530;
i__17472_17510 = G__17531;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17503," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_17504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_17504)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_17504));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__17479_17532 = cljs.core.seq(ms_17506);
var chunk__17480_17533 = null;
var count__17481_17534 = (0);
var i__17482_17535 = (0);
while(true){
if((i__17482_17535 < count__17481_17534)){
var vec__17483_17536 = chunk__17480_17533.cljs$core$IIndexed$_nth$arity$2(null,i__17482_17535);
var n_17537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17483_17536,(0),null);
var meth_17538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17483_17536,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17538))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_17539 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_17539," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_17540 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_17539," = new cljs.core.IndexedSeq(",a_17540,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_17537,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17504)),(((cljs.core.count(maxparams_17504) > (1)))?", ":null),restarg_17539,");"], 0));
} else {
var pcnt_17541 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_17538));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_17541,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_17537,".call(this",(((pcnt_17541 === (0)))?null:cljs.core._conj((function (){var x__9342__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_17541,maxparams_17504));
return cljs.core._conj(cljs.core.List.EMPTY,x__9342__auto__);
})(),",")),");"], 0));
}

var G__17542 = seq__17479_17532;
var G__17543 = chunk__17480_17533;
var G__17544 = count__17481_17534;
var G__17545 = (i__17482_17535 + (1));
seq__17479_17532 = G__17542;
chunk__17480_17533 = G__17543;
count__17481_17534 = G__17544;
i__17482_17535 = G__17545;
continue;
} else {
var temp__5457__auto___17546 = cljs.core.seq(seq__17479_17532);
if(temp__5457__auto___17546){
var seq__17479_17547__$1 = temp__5457__auto___17546;
if(cljs.core.chunked_seq_QMARK_(seq__17479_17547__$1)){
var c__9319__auto___17548 = cljs.core.chunk_first(seq__17479_17547__$1);
var G__17549 = cljs.core.chunk_rest(seq__17479_17547__$1);
var G__17550 = c__9319__auto___17548;
var G__17551 = cljs.core.count(c__9319__auto___17548);
var G__17552 = (0);
seq__17479_17532 = G__17549;
chunk__17480_17533 = G__17550;
count__17481_17534 = G__17551;
i__17482_17535 = G__17552;
continue;
} else {
var vec__17486_17553 = cljs.core.first(seq__17479_17547__$1);
var n_17554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17486_17553,(0),null);
var meth_17555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17486_17553,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17555))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_17556 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_17556," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_17557 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_17556," = new cljs.core.IndexedSeq(",a_17557,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_17554,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17504)),(((cljs.core.count(maxparams_17504) > (1)))?", ":null),restarg_17556,");"], 0));
} else {
var pcnt_17558 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_17555));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_17558,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_17554,".call(this",(((pcnt_17558 === (0)))?null:cljs.core._conj((function (){var x__9342__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_17558,maxparams_17504));
return cljs.core._conj(cljs.core.List.EMPTY,x__9342__auto__);
})(),",")),");"], 0));
}

var G__17559 = cljs.core.next(seq__17479_17547__$1);
var G__17560 = null;
var G__17561 = (0);
var G__17562 = (0);
seq__17479_17532 = G__17559;
chunk__17480_17533 = G__17560;
count__17481_17534 = G__17561;
i__17482_17535 = G__17562;
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
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17503,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17503,".cljs$lang$applyTo = ",cljs.core.some(((function (name_17502__$1,mname_17503,maxparams_17504,mmap_17505,ms_17506,loop_locals,map__17467,map__17467__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17465_SHARP_){
var vec__17489 = p1__17465_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17489,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17489,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_17502__$1,mname_17503,maxparams_17504,mmap_17505,ms_17506,loop_locals,map__17467,map__17467__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_17506),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__17492_17563 = cljs.core.seq(ms_17506);
var chunk__17493_17564 = null;
var count__17494_17565 = (0);
var i__17495_17566 = (0);
while(true){
if((i__17495_17566 < count__17494_17565)){
var vec__17496_17567 = chunk__17493_17564.cljs$core$IIndexed$_nth$arity$2(null,i__17495_17566);
var n_17568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17496_17567,(0),null);
var meth_17569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17496_17567,(1),null);
var c_17570 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_17569));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17569))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17503,".cljs$core$IFn$_invoke$arity$variadic = ",n_17568,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17503,".cljs$core$IFn$_invoke$arity$",c_17570," = ",n_17568,";"], 0));
}

var G__17571 = seq__17492_17563;
var G__17572 = chunk__17493_17564;
var G__17573 = count__17494_17565;
var G__17574 = (i__17495_17566 + (1));
seq__17492_17563 = G__17571;
chunk__17493_17564 = G__17572;
count__17494_17565 = G__17573;
i__17495_17566 = G__17574;
continue;
} else {
var temp__5457__auto___17575 = cljs.core.seq(seq__17492_17563);
if(temp__5457__auto___17575){
var seq__17492_17576__$1 = temp__5457__auto___17575;
if(cljs.core.chunked_seq_QMARK_(seq__17492_17576__$1)){
var c__9319__auto___17577 = cljs.core.chunk_first(seq__17492_17576__$1);
var G__17578 = cljs.core.chunk_rest(seq__17492_17576__$1);
var G__17579 = c__9319__auto___17577;
var G__17580 = cljs.core.count(c__9319__auto___17577);
var G__17581 = (0);
seq__17492_17563 = G__17578;
chunk__17493_17564 = G__17579;
count__17494_17565 = G__17580;
i__17495_17566 = G__17581;
continue;
} else {
var vec__17499_17582 = cljs.core.first(seq__17492_17576__$1);
var n_17583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17499_17582,(0),null);
var meth_17584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17499_17582,(1),null);
var c_17585 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_17584));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17584))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17503,".cljs$core$IFn$_invoke$arity$variadic = ",n_17583,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17503,".cljs$core$IFn$_invoke$arity$",c_17585," = ",n_17583,";"], 0));
}

var G__17586 = cljs.core.next(seq__17492_17576__$1);
var G__17587 = null;
var G__17588 = (0);
var G__17589 = (0);
seq__17492_17563 = G__17586;
chunk__17493_17564 = G__17587;
count__17494_17565 = G__17588;
i__17495_17566 = G__17589;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_17503,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__17590){
var map__17591 = p__17590;
var map__17591__$1 = ((((!((map__17591 == null)))?((((map__17591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17591):map__17591);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17591__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17591__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17591__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8376__auto__ = statements;
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__8376__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__17593_17597 = cljs.core.seq(statements);
var chunk__17594_17598 = null;
var count__17595_17599 = (0);
var i__17596_17600 = (0);
while(true){
if((i__17596_17600 < count__17595_17599)){
var s_17601 = chunk__17594_17598.cljs$core$IIndexed$_nth$arity$2(null,i__17596_17600);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_17601], 0));

var G__17602 = seq__17593_17597;
var G__17603 = chunk__17594_17598;
var G__17604 = count__17595_17599;
var G__17605 = (i__17596_17600 + (1));
seq__17593_17597 = G__17602;
chunk__17594_17598 = G__17603;
count__17595_17599 = G__17604;
i__17596_17600 = G__17605;
continue;
} else {
var temp__5457__auto___17606 = cljs.core.seq(seq__17593_17597);
if(temp__5457__auto___17606){
var seq__17593_17607__$1 = temp__5457__auto___17606;
if(cljs.core.chunked_seq_QMARK_(seq__17593_17607__$1)){
var c__9319__auto___17608 = cljs.core.chunk_first(seq__17593_17607__$1);
var G__17609 = cljs.core.chunk_rest(seq__17593_17607__$1);
var G__17610 = c__9319__auto___17608;
var G__17611 = cljs.core.count(c__9319__auto___17608);
var G__17612 = (0);
seq__17593_17597 = G__17609;
chunk__17594_17598 = G__17610;
count__17595_17599 = G__17611;
i__17596_17600 = G__17612;
continue;
} else {
var s_17613 = cljs.core.first(seq__17593_17607__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_17613], 0));

var G__17614 = cljs.core.next(seq__17593_17607__$1);
var G__17615 = null;
var G__17616 = (0);
var G__17617 = (0);
seq__17593_17597 = G__17614;
chunk__17594_17598 = G__17615;
count__17595_17599 = G__17616;
i__17596_17600 = G__17617;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__8376__auto__ = statements;
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__8376__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__17618){
var map__17619 = p__17618;
var map__17619__$1 = ((((!((map__17619 == null)))?((((map__17619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17619):map__17619);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17619__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17619__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17619__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17619__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17619__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8388__auto__ = name;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__17621,is_loop){
var map__17622 = p__17621;
var map__17622__$1 = ((((!((map__17622 == null)))?((((map__17622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17622):map__17622);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_17624_17633 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_17624_17633,context,map__17622,map__17622__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_17624_17633,context,map__17622,map__17622__$1,bindings,expr,env))
,bindings):null));

try{var seq__17625_17634 = cljs.core.seq(bindings);
var chunk__17626_17635 = null;
var count__17627_17636 = (0);
var i__17628_17637 = (0);
while(true){
if((i__17628_17637 < count__17627_17636)){
var map__17629_17638 = chunk__17626_17635.cljs$core$IIndexed$_nth$arity$2(null,i__17628_17637);
var map__17629_17639__$1 = ((((!((map__17629_17638 == null)))?((((map__17629_17638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17629_17638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17629_17638):map__17629_17638);
var binding_17640 = map__17629_17639__$1;
var init_17641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17629_17639__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_17640);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_17641,";"], 0));

var G__17642 = seq__17625_17634;
var G__17643 = chunk__17626_17635;
var G__17644 = count__17627_17636;
var G__17645 = (i__17628_17637 + (1));
seq__17625_17634 = G__17642;
chunk__17626_17635 = G__17643;
count__17627_17636 = G__17644;
i__17628_17637 = G__17645;
continue;
} else {
var temp__5457__auto___17646 = cljs.core.seq(seq__17625_17634);
if(temp__5457__auto___17646){
var seq__17625_17647__$1 = temp__5457__auto___17646;
if(cljs.core.chunked_seq_QMARK_(seq__17625_17647__$1)){
var c__9319__auto___17648 = cljs.core.chunk_first(seq__17625_17647__$1);
var G__17649 = cljs.core.chunk_rest(seq__17625_17647__$1);
var G__17650 = c__9319__auto___17648;
var G__17651 = cljs.core.count(c__9319__auto___17648);
var G__17652 = (0);
seq__17625_17634 = G__17649;
chunk__17626_17635 = G__17650;
count__17627_17636 = G__17651;
i__17628_17637 = G__17652;
continue;
} else {
var map__17631_17653 = cljs.core.first(seq__17625_17647__$1);
var map__17631_17654__$1 = ((((!((map__17631_17653 == null)))?((((map__17631_17653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17631_17653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17631_17653):map__17631_17653);
var binding_17655 = map__17631_17654__$1;
var init_17656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17631_17654__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_17655);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_17656,";"], 0));

var G__17657 = cljs.core.next(seq__17625_17647__$1);
var G__17658 = null;
var G__17659 = (0);
var G__17660 = (0);
seq__17625_17634 = G__17657;
chunk__17626_17635 = G__17658;
count__17627_17636 = G__17659;
i__17628_17637 = G__17660;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_17624_17633;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__17661){
var map__17662 = p__17661;
var map__17662__$1 = ((((!((map__17662 == null)))?((((map__17662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17662):map__17662);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17662__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17662__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17662__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__9433__auto___17664 = cljs.core.count(exprs);
var i_17665 = (0);
while(true){
if((i_17665 < n__9433__auto___17664)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_17665) : temps.call(null,i_17665))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_17665) : exprs.call(null,i_17665)),";"], 0));

var G__17666 = (i_17665 + (1));
i_17665 = G__17666;
continue;
} else {
}
break;
}

var n__9433__auto___17667 = cljs.core.count(exprs);
var i_17668 = (0);
while(true){
if((i_17668 < n__9433__auto___17667)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_17668) : params.call(null,i_17668)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_17668) : temps.call(null,i_17668)),";"], 0));

var G__17669 = (i_17668 + (1));
i_17668 = G__17669;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__17670){
var map__17671 = p__17670;
var map__17671__$1 = ((((!((map__17671 == null)))?((((map__17671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17671):map__17671);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__17673_17681 = cljs.core.seq(bindings);
var chunk__17674_17682 = null;
var count__17675_17683 = (0);
var i__17676_17684 = (0);
while(true){
if((i__17676_17684 < count__17675_17683)){
var map__17677_17685 = chunk__17674_17682.cljs$core$IIndexed$_nth$arity$2(null,i__17676_17684);
var map__17677_17686__$1 = ((((!((map__17677_17685 == null)))?((((map__17677_17685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17677_17685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17677_17685):map__17677_17685);
var binding_17687 = map__17677_17686__$1;
var init_17688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17677_17686__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_17687)," = ",init_17688,";"], 0));

var G__17689 = seq__17673_17681;
var G__17690 = chunk__17674_17682;
var G__17691 = count__17675_17683;
var G__17692 = (i__17676_17684 + (1));
seq__17673_17681 = G__17689;
chunk__17674_17682 = G__17690;
count__17675_17683 = G__17691;
i__17676_17684 = G__17692;
continue;
} else {
var temp__5457__auto___17693 = cljs.core.seq(seq__17673_17681);
if(temp__5457__auto___17693){
var seq__17673_17694__$1 = temp__5457__auto___17693;
if(cljs.core.chunked_seq_QMARK_(seq__17673_17694__$1)){
var c__9319__auto___17695 = cljs.core.chunk_first(seq__17673_17694__$1);
var G__17696 = cljs.core.chunk_rest(seq__17673_17694__$1);
var G__17697 = c__9319__auto___17695;
var G__17698 = cljs.core.count(c__9319__auto___17695);
var G__17699 = (0);
seq__17673_17681 = G__17696;
chunk__17674_17682 = G__17697;
count__17675_17683 = G__17698;
i__17676_17684 = G__17699;
continue;
} else {
var map__17679_17700 = cljs.core.first(seq__17673_17694__$1);
var map__17679_17701__$1 = ((((!((map__17679_17700 == null)))?((((map__17679_17700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17679_17700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17679_17700):map__17679_17700);
var binding_17702 = map__17679_17701__$1;
var init_17703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17679_17701__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_17702)," = ",init_17703,";"], 0));

var G__17704 = cljs.core.next(seq__17673_17694__$1);
var G__17705 = null;
var G__17706 = (0);
var G__17707 = (0);
seq__17673_17681 = G__17704;
chunk__17674_17682 = G__17705;
count__17675_17683 = G__17706;
i__17676_17684 = G__17707;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__17710){
var map__17711 = p__17710;
var map__17711__$1 = ((((!((map__17711 == null)))?((((map__17711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17711):map__17711);
var expr = map__17711__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8376__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8376__auto__){
var and__8376__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__8376__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8376__auto__ = protocol;
if(cljs.core.truth_(and__8376__auto__)){
var and__8376__auto____$1 = tag;
if(cljs.core.truth_(and__8376__auto____$1)){
var or__8388__auto__ = (function (){var and__8376__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8376__auto____$2){
var and__8376__auto____$3 = protocol;
if(cljs.core.truth_(and__8376__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__8376__auto____$3;
}
} else {
return and__8376__auto____$2;
}
})();
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var and__8376__auto____$2 = (function (){var or__8388__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8388__auto____$1){
return or__8388__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8376__auto____$2)){
var or__8388__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__8388__auto____$1){
return or__8388__auto____$1;
} else {
var and__8376__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__8376__auto____$3){
var and__8376__auto____$4 = cljs.core.not((function (){var fexpr__17721 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__17721.cljs$core$IFn$_invoke$arity$1 ? fexpr__17721.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__17721.call(null,tag));
})());
if(and__8376__auto____$4){
var temp__5457__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__8376__auto____$4;
}
} else {
return and__8376__auto____$3;
}
}
} else {
return and__8376__auto____$2;
}
}
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8388__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__8388__auto__){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__8388__auto____$1)){
return or__8388__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.analyzer.infer_tag(env,f))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__17713 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8376__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8376__auto__)){
return (arity > mfa);
} else {
return and__8376__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17711,map__17711__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17711,map__17711__$1,expr,f,args,env){
return (function (p1__17708_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17708_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17711,map__17711__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17711,map__17711__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17711,map__17711__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17711,map__17711__$1,expr,f,args,env){
return (function (p1__17709_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17709_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17711,map__17711__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17711,map__17711__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17713,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17713,(1),null);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_17722 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_17722,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_17723 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_17723,args)),(((mfa_17723 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_17723,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__8388__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = js_QMARK_;
if(or__8388__auto____$1){
return or__8388__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var))){
var fprop_17724 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_17724," ? ",f__$1,fprop_17724,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_17724," ? ",f__$1,fprop_17724,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__17725){
var map__17726 = p__17725;
var map__17726__$1 = ((((!((map__17726 == null)))?((((map__17726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17726):map__17726);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__17728){
var map__17729 = p__17728;
var map__17729__$1 = ((((!((map__17729 == null)))?((((map__17729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17729):map__17729);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17729__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17729__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17729__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__17731 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__17731__$1 = ((((!((map__17731 == null)))?((((map__17731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17731):map__17731);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17731__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17731__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__17732 = options;
var map__17732__$1 = ((((!((map__17732 == null)))?((((map__17732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17732):map__17732);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__17733 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__17739 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__17739__$1 = ((((!((map__17739 == null)))?((((map__17739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17739):map__17739);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17739__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17739__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17733,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17733,(1),null);
var map__17736 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__17736__$1 = ((((!((map__17736 == null)))?((((map__17736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17736):map__17736);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17736__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17736__$1,false);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__17742_17758 = cljs.core.seq(libs_to_load__$1);
var chunk__17743_17759 = null;
var count__17744_17760 = (0);
var i__17745_17761 = (0);
while(true){
if((i__17745_17761 < count__17744_17760)){
var lib_17762 = chunk__17743_17759.cljs$core$IIndexed$_nth$arity$2(null,i__17745_17761);
if((cljs.analyzer.foreign_dep_QMARK_(lib_17762)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__8388__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17762),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17762),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8388__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17762),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17762),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17762),"');"], 0));

}
}
}

var G__17763 = seq__17742_17758;
var G__17764 = chunk__17743_17759;
var G__17765 = count__17744_17760;
var G__17766 = (i__17745_17761 + (1));
seq__17742_17758 = G__17763;
chunk__17743_17759 = G__17764;
count__17744_17760 = G__17765;
i__17745_17761 = G__17766;
continue;
} else {
var temp__5457__auto___17767 = cljs.core.seq(seq__17742_17758);
if(temp__5457__auto___17767){
var seq__17742_17768__$1 = temp__5457__auto___17767;
if(cljs.core.chunked_seq_QMARK_(seq__17742_17768__$1)){
var c__9319__auto___17769 = cljs.core.chunk_first(seq__17742_17768__$1);
var G__17770 = cljs.core.chunk_rest(seq__17742_17768__$1);
var G__17771 = c__9319__auto___17769;
var G__17772 = cljs.core.count(c__9319__auto___17769);
var G__17773 = (0);
seq__17742_17758 = G__17770;
chunk__17743_17759 = G__17771;
count__17744_17760 = G__17772;
i__17745_17761 = G__17773;
continue;
} else {
var lib_17774 = cljs.core.first(seq__17742_17768__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_17774)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__8388__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17774),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17774),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8388__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17774),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17774),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17774),"');"], 0));

}
}
}

var G__17775 = cljs.core.next(seq__17742_17768__$1);
var G__17776 = null;
var G__17777 = (0);
var G__17778 = (0);
seq__17742_17758 = G__17775;
chunk__17743_17759 = G__17776;
count__17744_17760 = G__17777;
i__17745_17761 = G__17778;
continue;
}
} else {
}
}
break;
}

var seq__17746_17779 = cljs.core.seq(node_libs);
var chunk__17747_17780 = null;
var count__17748_17781 = (0);
var i__17749_17782 = (0);
while(true){
if((i__17749_17782 < count__17748_17781)){
var lib_17783 = chunk__17747_17780.cljs$core$IIndexed$_nth$arity$2(null,i__17749_17782);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_17783)," = require('",lib_17783,"');"], 0));

var G__17784 = seq__17746_17779;
var G__17785 = chunk__17747_17780;
var G__17786 = count__17748_17781;
var G__17787 = (i__17749_17782 + (1));
seq__17746_17779 = G__17784;
chunk__17747_17780 = G__17785;
count__17748_17781 = G__17786;
i__17749_17782 = G__17787;
continue;
} else {
var temp__5457__auto___17788 = cljs.core.seq(seq__17746_17779);
if(temp__5457__auto___17788){
var seq__17746_17789__$1 = temp__5457__auto___17788;
if(cljs.core.chunked_seq_QMARK_(seq__17746_17789__$1)){
var c__9319__auto___17790 = cljs.core.chunk_first(seq__17746_17789__$1);
var G__17791 = cljs.core.chunk_rest(seq__17746_17789__$1);
var G__17792 = c__9319__auto___17790;
var G__17793 = cljs.core.count(c__9319__auto___17790);
var G__17794 = (0);
seq__17746_17779 = G__17791;
chunk__17747_17780 = G__17792;
count__17748_17781 = G__17793;
i__17749_17782 = G__17794;
continue;
} else {
var lib_17795 = cljs.core.first(seq__17746_17789__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_17795)," = require('",lib_17795,"');"], 0));

var G__17796 = cljs.core.next(seq__17746_17789__$1);
var G__17797 = null;
var G__17798 = (0);
var G__17799 = (0);
seq__17746_17779 = G__17796;
chunk__17747_17780 = G__17797;
count__17748_17781 = G__17798;
i__17749_17782 = G__17799;
continue;
}
} else {
}
}
break;
}

var seq__17750_17800 = cljs.core.seq(global_exports_libs);
var chunk__17751_17801 = null;
var count__17752_17802 = (0);
var i__17753_17803 = (0);
while(true){
if((i__17753_17803 < count__17752_17802)){
var lib_17804 = chunk__17751_17801.cljs$core$IIndexed$_nth$arity$2(null,i__17753_17803);
var map__17754_17805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_17804));
var map__17754_17806__$1 = ((((!((map__17754_17805 == null)))?((((map__17754_17805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17754_17805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17754_17805):map__17754_17805);
var global_exports_17807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17754_17806__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_17804)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_17807,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_17804)),";"], 0));

var G__17808 = seq__17750_17800;
var G__17809 = chunk__17751_17801;
var G__17810 = count__17752_17802;
var G__17811 = (i__17753_17803 + (1));
seq__17750_17800 = G__17808;
chunk__17751_17801 = G__17809;
count__17752_17802 = G__17810;
i__17753_17803 = G__17811;
continue;
} else {
var temp__5457__auto___17812 = cljs.core.seq(seq__17750_17800);
if(temp__5457__auto___17812){
var seq__17750_17813__$1 = temp__5457__auto___17812;
if(cljs.core.chunked_seq_QMARK_(seq__17750_17813__$1)){
var c__9319__auto___17814 = cljs.core.chunk_first(seq__17750_17813__$1);
var G__17815 = cljs.core.chunk_rest(seq__17750_17813__$1);
var G__17816 = c__9319__auto___17814;
var G__17817 = cljs.core.count(c__9319__auto___17814);
var G__17818 = (0);
seq__17750_17800 = G__17815;
chunk__17751_17801 = G__17816;
count__17752_17802 = G__17817;
i__17753_17803 = G__17818;
continue;
} else {
var lib_17819 = cljs.core.first(seq__17750_17813__$1);
var map__17756_17820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_17819));
var map__17756_17821__$1 = ((((!((map__17756_17820 == null)))?((((map__17756_17820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17756_17820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17756_17820):map__17756_17820);
var global_exports_17822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17756_17821__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_17819)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_17822,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_17819)),";"], 0));

var G__17823 = cljs.core.next(seq__17750_17813__$1);
var G__17824 = null;
var G__17825 = (0);
var G__17826 = (0);
seq__17750_17800 = G__17823;
chunk__17751_17801 = G__17824;
count__17752_17802 = G__17825;
i__17753_17803 = G__17826;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__17827){
var map__17828 = p__17827;
var map__17828__$1 = ((((!((map__17828 == null)))?((((map__17828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17828):map__17828);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__17830){
var map__17831 = p__17830;
var map__17831__$1 = ((((!((map__17831 == null)))?((((map__17831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17831):map__17831);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17831__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17831__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17831__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17831__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17831__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17831__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17831__$1,cljs.core.cst$kw$deps);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__17833){
var map__17834 = p__17833;
var map__17834__$1 = ((((!((map__17834 == null)))?((((map__17834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17834):map__17834);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17834__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17834__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17834__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17834__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17834__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__17836_17854 = cljs.core.seq(protocols);
var chunk__17837_17855 = null;
var count__17838_17856 = (0);
var i__17839_17857 = (0);
while(true){
if((i__17839_17857 < count__17838_17856)){
var protocol_17858 = chunk__17837_17855.cljs$core$IIndexed$_nth$arity$2(null,i__17839_17857);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17858)].join('')),"}"], 0));

var G__17859 = seq__17836_17854;
var G__17860 = chunk__17837_17855;
var G__17861 = count__17838_17856;
var G__17862 = (i__17839_17857 + (1));
seq__17836_17854 = G__17859;
chunk__17837_17855 = G__17860;
count__17838_17856 = G__17861;
i__17839_17857 = G__17862;
continue;
} else {
var temp__5457__auto___17863 = cljs.core.seq(seq__17836_17854);
if(temp__5457__auto___17863){
var seq__17836_17864__$1 = temp__5457__auto___17863;
if(cljs.core.chunked_seq_QMARK_(seq__17836_17864__$1)){
var c__9319__auto___17865 = cljs.core.chunk_first(seq__17836_17864__$1);
var G__17866 = cljs.core.chunk_rest(seq__17836_17864__$1);
var G__17867 = c__9319__auto___17865;
var G__17868 = cljs.core.count(c__9319__auto___17865);
var G__17869 = (0);
seq__17836_17854 = G__17866;
chunk__17837_17855 = G__17867;
count__17838_17856 = G__17868;
i__17839_17857 = G__17869;
continue;
} else {
var protocol_17870 = cljs.core.first(seq__17836_17864__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17870)].join('')),"}"], 0));

var G__17871 = cljs.core.next(seq__17836_17864__$1);
var G__17872 = null;
var G__17873 = (0);
var G__17874 = (0);
seq__17836_17854 = G__17871;
chunk__17837_17855 = G__17872;
count__17838_17856 = G__17873;
i__17839_17857 = G__17874;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__17840_17875 = cljs.core.seq(fields__$1);
var chunk__17841_17876 = null;
var count__17842_17877 = (0);
var i__17843_17878 = (0);
while(true){
if((i__17843_17878 < count__17842_17877)){
var fld_17879 = chunk__17841_17876.cljs$core$IIndexed$_nth$arity$2(null,i__17843_17878);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_17879," = ",fld_17879,";"], 0));

var G__17880 = seq__17840_17875;
var G__17881 = chunk__17841_17876;
var G__17882 = count__17842_17877;
var G__17883 = (i__17843_17878 + (1));
seq__17840_17875 = G__17880;
chunk__17841_17876 = G__17881;
count__17842_17877 = G__17882;
i__17843_17878 = G__17883;
continue;
} else {
var temp__5457__auto___17884 = cljs.core.seq(seq__17840_17875);
if(temp__5457__auto___17884){
var seq__17840_17885__$1 = temp__5457__auto___17884;
if(cljs.core.chunked_seq_QMARK_(seq__17840_17885__$1)){
var c__9319__auto___17886 = cljs.core.chunk_first(seq__17840_17885__$1);
var G__17887 = cljs.core.chunk_rest(seq__17840_17885__$1);
var G__17888 = c__9319__auto___17886;
var G__17889 = cljs.core.count(c__9319__auto___17886);
var G__17890 = (0);
seq__17840_17875 = G__17887;
chunk__17841_17876 = G__17888;
count__17842_17877 = G__17889;
i__17843_17878 = G__17890;
continue;
} else {
var fld_17891 = cljs.core.first(seq__17840_17885__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_17891," = ",fld_17891,";"], 0));

var G__17892 = cljs.core.next(seq__17840_17885__$1);
var G__17893 = null;
var G__17894 = (0);
var G__17895 = (0);
seq__17840_17875 = G__17892;
chunk__17841_17876 = G__17893;
count__17842_17877 = G__17894;
i__17843_17878 = G__17895;
continue;
}
} else {
}
}
break;
}

var seq__17844_17896 = cljs.core.seq(pmasks);
var chunk__17845_17897 = null;
var count__17846_17898 = (0);
var i__17847_17899 = (0);
while(true){
if((i__17847_17899 < count__17846_17898)){
var vec__17848_17900 = chunk__17845_17897.cljs$core$IIndexed$_nth$arity$2(null,i__17847_17899);
var pno_17901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17848_17900,(0),null);
var pmask_17902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17848_17900,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_17901,"$ = ",pmask_17902,";"], 0));

var G__17903 = seq__17844_17896;
var G__17904 = chunk__17845_17897;
var G__17905 = count__17846_17898;
var G__17906 = (i__17847_17899 + (1));
seq__17844_17896 = G__17903;
chunk__17845_17897 = G__17904;
count__17846_17898 = G__17905;
i__17847_17899 = G__17906;
continue;
} else {
var temp__5457__auto___17907 = cljs.core.seq(seq__17844_17896);
if(temp__5457__auto___17907){
var seq__17844_17908__$1 = temp__5457__auto___17907;
if(cljs.core.chunked_seq_QMARK_(seq__17844_17908__$1)){
var c__9319__auto___17909 = cljs.core.chunk_first(seq__17844_17908__$1);
var G__17910 = cljs.core.chunk_rest(seq__17844_17908__$1);
var G__17911 = c__9319__auto___17909;
var G__17912 = cljs.core.count(c__9319__auto___17909);
var G__17913 = (0);
seq__17844_17896 = G__17910;
chunk__17845_17897 = G__17911;
count__17846_17898 = G__17912;
i__17847_17899 = G__17913;
continue;
} else {
var vec__17851_17914 = cljs.core.first(seq__17844_17908__$1);
var pno_17915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17851_17914,(0),null);
var pmask_17916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17851_17914,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_17915,"$ = ",pmask_17916,";"], 0));

var G__17917 = cljs.core.next(seq__17844_17908__$1);
var G__17918 = null;
var G__17919 = (0);
var G__17920 = (0);
seq__17844_17896 = G__17917;
chunk__17845_17897 = G__17918;
count__17846_17898 = G__17919;
i__17847_17899 = G__17920;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__17921){
var map__17922 = p__17921;
var map__17922__$1 = ((((!((map__17922 == null)))?((((map__17922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17922):map__17922);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17922__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17922__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17922__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17922__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17922__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__17924_17942 = cljs.core.seq(protocols);
var chunk__17925_17943 = null;
var count__17926_17944 = (0);
var i__17927_17945 = (0);
while(true){
if((i__17927_17945 < count__17926_17944)){
var protocol_17946 = chunk__17925_17943.cljs$core$IIndexed$_nth$arity$2(null,i__17927_17945);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17946)].join('')),"}"], 0));

var G__17947 = seq__17924_17942;
var G__17948 = chunk__17925_17943;
var G__17949 = count__17926_17944;
var G__17950 = (i__17927_17945 + (1));
seq__17924_17942 = G__17947;
chunk__17925_17943 = G__17948;
count__17926_17944 = G__17949;
i__17927_17945 = G__17950;
continue;
} else {
var temp__5457__auto___17951 = cljs.core.seq(seq__17924_17942);
if(temp__5457__auto___17951){
var seq__17924_17952__$1 = temp__5457__auto___17951;
if(cljs.core.chunked_seq_QMARK_(seq__17924_17952__$1)){
var c__9319__auto___17953 = cljs.core.chunk_first(seq__17924_17952__$1);
var G__17954 = cljs.core.chunk_rest(seq__17924_17952__$1);
var G__17955 = c__9319__auto___17953;
var G__17956 = cljs.core.count(c__9319__auto___17953);
var G__17957 = (0);
seq__17924_17942 = G__17954;
chunk__17925_17943 = G__17955;
count__17926_17944 = G__17956;
i__17927_17945 = G__17957;
continue;
} else {
var protocol_17958 = cljs.core.first(seq__17924_17952__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17958)].join('')),"}"], 0));

var G__17959 = cljs.core.next(seq__17924_17952__$1);
var G__17960 = null;
var G__17961 = (0);
var G__17962 = (0);
seq__17924_17942 = G__17959;
chunk__17925_17943 = G__17960;
count__17926_17944 = G__17961;
i__17927_17945 = G__17962;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__17928_17963 = cljs.core.seq(fields__$1);
var chunk__17929_17964 = null;
var count__17930_17965 = (0);
var i__17931_17966 = (0);
while(true){
if((i__17931_17966 < count__17930_17965)){
var fld_17967 = chunk__17929_17964.cljs$core$IIndexed$_nth$arity$2(null,i__17931_17966);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_17967," = ",fld_17967,";"], 0));

var G__17968 = seq__17928_17963;
var G__17969 = chunk__17929_17964;
var G__17970 = count__17930_17965;
var G__17971 = (i__17931_17966 + (1));
seq__17928_17963 = G__17968;
chunk__17929_17964 = G__17969;
count__17930_17965 = G__17970;
i__17931_17966 = G__17971;
continue;
} else {
var temp__5457__auto___17972 = cljs.core.seq(seq__17928_17963);
if(temp__5457__auto___17972){
var seq__17928_17973__$1 = temp__5457__auto___17972;
if(cljs.core.chunked_seq_QMARK_(seq__17928_17973__$1)){
var c__9319__auto___17974 = cljs.core.chunk_first(seq__17928_17973__$1);
var G__17975 = cljs.core.chunk_rest(seq__17928_17973__$1);
var G__17976 = c__9319__auto___17974;
var G__17977 = cljs.core.count(c__9319__auto___17974);
var G__17978 = (0);
seq__17928_17963 = G__17975;
chunk__17929_17964 = G__17976;
count__17930_17965 = G__17977;
i__17931_17966 = G__17978;
continue;
} else {
var fld_17979 = cljs.core.first(seq__17928_17973__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_17979," = ",fld_17979,";"], 0));

var G__17980 = cljs.core.next(seq__17928_17973__$1);
var G__17981 = null;
var G__17982 = (0);
var G__17983 = (0);
seq__17928_17963 = G__17980;
chunk__17929_17964 = G__17981;
count__17930_17965 = G__17982;
i__17931_17966 = G__17983;
continue;
}
} else {
}
}
break;
}

var seq__17932_17984 = cljs.core.seq(pmasks);
var chunk__17933_17985 = null;
var count__17934_17986 = (0);
var i__17935_17987 = (0);
while(true){
if((i__17935_17987 < count__17934_17986)){
var vec__17936_17988 = chunk__17933_17985.cljs$core$IIndexed$_nth$arity$2(null,i__17935_17987);
var pno_17989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936_17988,(0),null);
var pmask_17990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936_17988,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_17989,"$ = ",pmask_17990,";"], 0));

var G__17991 = seq__17932_17984;
var G__17992 = chunk__17933_17985;
var G__17993 = count__17934_17986;
var G__17994 = (i__17935_17987 + (1));
seq__17932_17984 = G__17991;
chunk__17933_17985 = G__17992;
count__17934_17986 = G__17993;
i__17935_17987 = G__17994;
continue;
} else {
var temp__5457__auto___17995 = cljs.core.seq(seq__17932_17984);
if(temp__5457__auto___17995){
var seq__17932_17996__$1 = temp__5457__auto___17995;
if(cljs.core.chunked_seq_QMARK_(seq__17932_17996__$1)){
var c__9319__auto___17997 = cljs.core.chunk_first(seq__17932_17996__$1);
var G__17998 = cljs.core.chunk_rest(seq__17932_17996__$1);
var G__17999 = c__9319__auto___17997;
var G__18000 = cljs.core.count(c__9319__auto___17997);
var G__18001 = (0);
seq__17932_17984 = G__17998;
chunk__17933_17985 = G__17999;
count__17934_17986 = G__18000;
i__17935_17987 = G__18001;
continue;
} else {
var vec__17939_18002 = cljs.core.first(seq__17932_17996__$1);
var pno_18003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17939_18002,(0),null);
var pmask_18004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17939_18002,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_18003,"$ = ",pmask_18004,";"], 0));

var G__18005 = cljs.core.next(seq__17932_17996__$1);
var G__18006 = null;
var G__18007 = (0);
var G__18008 = (0);
seq__17932_17984 = G__18005;
chunk__17933_17985 = G__18006;
count__17934_17986 = G__18007;
i__17935_17987 = G__18008;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__18009){
var map__18010 = p__18009;
var map__18010__$1 = ((((!((map__18010 == null)))?((((map__18010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18010):map__18010);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18010__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18010__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18010__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18010__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18010__$1,cljs.core.cst$kw$env);
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__18012){
var map__18013 = p__18012;
var map__18013__$1 = ((((!((map__18013 == null)))?((((map__18013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18013):map__18013);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__8376__auto__ = code;
if(cljs.core.truth_(and__8376__auto__)){
var G__18015 = clojure.string.trim(code);
var G__18016 = "/*";
return goog.string.startsWith(G__18015,G__18016);
} else {
return and__8376__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__16904__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16904__auto__))){
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

var seq__18020 = cljs.core.seq(table);
var chunk__18021 = null;
var count__18022 = (0);
var i__18023 = (0);
while(true){
if((i__18023 < count__18022)){
var vec__18024 = chunk__18021.cljs$core$IIndexed$_nth$arity$2(null,i__18023);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18024,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18024,(1),null);
var ns_18030 = cljs.core.namespace(sym);
var name_18031 = cljs.core.name(sym);
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

var G__18032 = seq__18020;
var G__18033 = chunk__18021;
var G__18034 = count__18022;
var G__18035 = (i__18023 + (1));
seq__18020 = G__18032;
chunk__18021 = G__18033;
count__18022 = G__18034;
i__18023 = G__18035;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18020);
if(temp__5457__auto__){
var seq__18020__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18020__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__18020__$1);
var G__18036 = cljs.core.chunk_rest(seq__18020__$1);
var G__18037 = c__9319__auto__;
var G__18038 = cljs.core.count(c__9319__auto__);
var G__18039 = (0);
seq__18020 = G__18036;
chunk__18021 = G__18037;
count__18022 = G__18038;
i__18023 = G__18039;
continue;
} else {
var vec__18027 = cljs.core.first(seq__18020__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(1),null);
var ns_18040 = cljs.core.namespace(sym);
var name_18041 = cljs.core.name(sym);
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

var G__18042 = cljs.core.next(seq__18020__$1);
var G__18043 = null;
var G__18044 = (0);
var G__18045 = (0);
seq__18020 = G__18042;
chunk__18021 = G__18043;
count__18022 = G__18044;
i__18023 = G__18045;
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
var G__18047 = arguments.length;
switch (G__18047) {
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
var k_18052 = cljs.core.first(ks);
var vec__18048_18053 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_18052);
var top_18054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048_18053,(0),null);
var prefix_SINGLEQUOTE__18055 = vec__18048_18053;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_18052)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__18055) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_18054)) || (cljs.core.contains_QMARK_(known_externs,top_18054)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__18055)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_18054);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__18055)),";"], 0));
}
} else {
}

var m_18056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_18052);
if(cljs.core.empty_QMARK_(m_18056)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__18055,m_18056,top_level,known_externs);
}

var G__18057 = cljs.core.next(ks);
ks = G__18057;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

