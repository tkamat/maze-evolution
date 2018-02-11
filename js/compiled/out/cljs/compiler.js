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
var map__11899 = s;
var map__11899__$1 = ((((!((map__11899 == null)))?((((map__11899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11899):map__11899);
var name = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11902 = info;
var map__11903 = G__11902;
var map__11903__$1 = ((((!((map__11903 == null)))?((((map__11903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11903):map__11903);
var shadow = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11902__$1 = G__11902;
while(true){
var d__$2 = d__$1;
var map__11905 = G__11902__$1;
var map__11905__$1 = ((((!((map__11905 == null)))?((((map__11905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11905):map__11905);
var shadow__$1 = cljs.core.get.call(null,map__11905__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__11907 = (d__$2 + (1));
var G__11908 = shadow__$1;
d__$1 = G__11907;
G__11902__$1 = G__11908;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11909){
var map__11910 = p__11909;
var map__11910__$1 = ((((!((map__11910 == null)))?((((map__11910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11910):map__11910);
var name_var = map__11910__$1;
var name = cljs.core.get.call(null,map__11910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11910__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__11912 = info;
var map__11912__$1 = ((((!((map__11912 == null)))?((((map__11912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11912):map__11912);
var ns = cljs.core.get.call(null,map__11912__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__11912__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__11915 = arguments.length;
switch (G__11915) {
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
var G__11917 = cp;
switch (G__11917) {
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
var seq__11919_11923 = cljs.core.seq.call(null,s);
var chunk__11920_11924 = null;
var count__11921_11925 = (0);
var i__11922_11926 = (0);
while(true){
if((i__11922_11926 < count__11921_11925)){
var c_11927 = cljs.core._nth.call(null,chunk__11920_11924,i__11922_11926);
sb.append(cljs.compiler.escape_char.call(null,c_11927));

var G__11928 = seq__11919_11923;
var G__11929 = chunk__11920_11924;
var G__11930 = count__11921_11925;
var G__11931 = (i__11922_11926 + (1));
seq__11919_11923 = G__11928;
chunk__11920_11924 = G__11929;
count__11921_11925 = G__11930;
i__11922_11926 = G__11931;
continue;
} else {
var temp__4657__auto___11932 = cljs.core.seq.call(null,seq__11919_11923);
if(temp__4657__auto___11932){
var seq__11919_11933__$1 = temp__4657__auto___11932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11919_11933__$1)){
var c__8507__auto___11934 = cljs.core.chunk_first.call(null,seq__11919_11933__$1);
var G__11935 = cljs.core.chunk_rest.call(null,seq__11919_11933__$1);
var G__11936 = c__8507__auto___11934;
var G__11937 = cljs.core.count.call(null,c__8507__auto___11934);
var G__11938 = (0);
seq__11919_11923 = G__11935;
chunk__11920_11924 = G__11936;
count__11921_11925 = G__11937;
i__11922_11926 = G__11938;
continue;
} else {
var c_11939 = cljs.core.first.call(null,seq__11919_11933__$1);
sb.append(cljs.compiler.escape_char.call(null,c_11939));

var G__11940 = cljs.core.next.call(null,seq__11919_11933__$1);
var G__11941 = null;
var G__11942 = (0);
var G__11943 = (0);
seq__11919_11923 = G__11940;
chunk__11920_11924 = G__11941;
count__11921_11925 = G__11942;
i__11922_11926 = G__11943;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__8625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8626__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8627__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8628__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8629__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8629__auto__,method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__10296__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__10296__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__11944_11949 = ast;
var map__11944_11950__$1 = ((((!((map__11944_11949 == null)))?((((map__11944_11949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11944_11949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11944_11949):map__11944_11949);
var env_11951 = cljs.core.get.call(null,map__11944_11950__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_11951))){
var map__11946_11952 = env_11951;
var map__11946_11953__$1 = ((((!((map__11946_11952 == null)))?((((map__11946_11952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11946_11952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11946_11952):map__11946_11952);
var line_11954 = cljs.core.get.call(null,map__11946_11953__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_11955 = cljs.core.get.call(null,map__11946_11953__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__11946_11952,map__11946_11953__$1,line_11954,column_11955,map__11944_11949,map__11944_11950__$1,env_11951,val__10296__auto__){
return (function (m){
var minfo = (function (){var G__11948 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__11948,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__11948;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_11954 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__11946_11952,map__11946_11953__$1,line_11954,column_11955,map__11944_11949,map__11944_11950__$1,env_11951,val__10296__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_11955)?(column_11955 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__11946_11952,map__11946_11953__$1,line_11954,column_11955,map__11944_11949,map__11944_11950__$1,env_11951,val__10296__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__11946_11952,map__11946_11953__$1,line_11954,column_11955,map__11944_11949,map__11944_11950__$1,env_11951,val__10296__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__11946_11952,map__11946_11953__$1,line_11954,column_11955,map__11944_11949,map__11944_11950__$1,env_11951,val__10296__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__11946_11952,map__11946_11953__$1,line_11954,column_11955,map__11944_11949,map__11944_11950__$1,env_11951,val__10296__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__10296__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__8846__auto__ = [];
var len__8839__auto___11962 = arguments.length;
var i__8840__auto___11963 = (0);
while(true){
if((i__8840__auto___11963 < len__8839__auto___11962)){
args__8846__auto__.push((arguments[i__8840__auto___11963]));

var G__11964 = (i__8840__auto___11963 + (1));
i__8840__auto___11963 = G__11964;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__11958_11965 = cljs.core.seq.call(null,xs);
var chunk__11959_11966 = null;
var count__11960_11967 = (0);
var i__11961_11968 = (0);
while(true){
if((i__11961_11968 < count__11960_11967)){
var x_11969 = cljs.core._nth.call(null,chunk__11959_11966,i__11961_11968);
if((x_11969 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_11969)){
cljs.compiler.emit.call(null,x_11969);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_11969)){
cljs.core.apply.call(null,cljs.compiler.emits,x_11969);
} else {
if(goog.isFunction(x_11969)){
x_11969.call(null);
} else {
var s_11970 = cljs.core.print_str.call(null,x_11969);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__11958_11965,chunk__11959_11966,count__11960_11967,i__11961_11968,s_11970,x_11969){
return (function (p1__11956_SHARP_){
return (p1__11956_SHARP_ + cljs.core.count.call(null,s_11970));
});})(seq__11958_11965,chunk__11959_11966,count__11960_11967,i__11961_11968,s_11970,x_11969))
);
}

cljs.core.print.call(null,s_11970);

}
}
}
}

var G__11971 = seq__11958_11965;
var G__11972 = chunk__11959_11966;
var G__11973 = count__11960_11967;
var G__11974 = (i__11961_11968 + (1));
seq__11958_11965 = G__11971;
chunk__11959_11966 = G__11972;
count__11960_11967 = G__11973;
i__11961_11968 = G__11974;
continue;
} else {
var temp__4657__auto___11975 = cljs.core.seq.call(null,seq__11958_11965);
if(temp__4657__auto___11975){
var seq__11958_11976__$1 = temp__4657__auto___11975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11958_11976__$1)){
var c__8507__auto___11977 = cljs.core.chunk_first.call(null,seq__11958_11976__$1);
var G__11978 = cljs.core.chunk_rest.call(null,seq__11958_11976__$1);
var G__11979 = c__8507__auto___11977;
var G__11980 = cljs.core.count.call(null,c__8507__auto___11977);
var G__11981 = (0);
seq__11958_11965 = G__11978;
chunk__11959_11966 = G__11979;
count__11960_11967 = G__11980;
i__11961_11968 = G__11981;
continue;
} else {
var x_11982 = cljs.core.first.call(null,seq__11958_11976__$1);
if((x_11982 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_11982)){
cljs.compiler.emit.call(null,x_11982);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_11982)){
cljs.core.apply.call(null,cljs.compiler.emits,x_11982);
} else {
if(goog.isFunction(x_11982)){
x_11982.call(null);
} else {
var s_11983 = cljs.core.print_str.call(null,x_11982);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__11958_11965,chunk__11959_11966,count__11960_11967,i__11961_11968,s_11983,x_11982,seq__11958_11976__$1,temp__4657__auto___11975){
return (function (p1__11956_SHARP_){
return (p1__11956_SHARP_ + cljs.core.count.call(null,s_11983));
});})(seq__11958_11965,chunk__11959_11966,count__11960_11967,i__11961_11968,s_11983,x_11982,seq__11958_11976__$1,temp__4657__auto___11975))
);
}

cljs.core.print.call(null,s_11983);

}
}
}
}

var G__11984 = cljs.core.next.call(null,seq__11958_11976__$1);
var G__11985 = null;
var G__11986 = (0);
var G__11987 = (0);
seq__11958_11965 = G__11984;
chunk__11959_11966 = G__11985;
count__11960_11967 = G__11986;
i__11961_11968 = G__11987;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq11957){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11957));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__8846__auto__ = [];
var len__8839__auto___11993 = arguments.length;
var i__8840__auto___11994 = (0);
while(true){
if((i__8840__auto___11994 < len__8839__auto___11993)){
args__8846__auto__.push((arguments[i__8840__auto___11994]));

var G__11995 = (i__8840__auto___11994 + (1));
i__8840__auto___11994 = G__11995;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_11989_11996 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_11989_11996;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__11990){
var map__11991 = p__11990;
var map__11991__$1 = ((((!((map__11991 == null)))?((((map__11991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11991):map__11991);
var m = map__11991__$1;
var gen_line = cljs.core.get.call(null,map__11991__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11988){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11988));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__8697__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11997_11999 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11998_12000 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11997_11999,_STAR_print_fn_STAR_11998_12000,sb__8697__auto__){
return (function (x__8698__auto__){
return sb__8697__auto__.append(x__8698__auto__);
});})(_STAR_print_newline_STAR_11997_11999,_STAR_print_fn_STAR_11998_12000,sb__8697__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11998_12000;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11997_11999;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8697__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__8625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8626__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8627__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8628__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8629__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8629__auto__,method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__));
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
var vec__12001 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__12001,(0),null);
var flags = cljs.core.nth.call(null,vec__12001,(1),null);
var pattern = cljs.core.nth.call(null,vec__12001,(2),null);
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
var temp__4655__auto__ = (function (){var and__7656__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__7656__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__7656__auto__;
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
var temp__4655__auto__ = (function (){var and__7656__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__7656__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__7656__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__12005){
var map__12006 = p__12005;
var map__12006__$1 = ((((!((map__12006 == null)))?((((map__12006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12006):map__12006);
var ast = map__12006__$1;
var info = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__12008 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12008__$1 = ((((!((map__12008 == null)))?((((map__12008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12008):map__12008);
var cenv = map__12008__$1;
var options = cljs.core.get.call(null,map__12008__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__7668__auto__ = js_module_name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
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
var reserved = (function (){var G__12010 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__7656__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__7656__auto__;
}
})())){
return clojure.set.difference.call(null,G__12010,cljs.analyzer.es5_allowed);
} else {
return G__12010;
}
})();
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__12011 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__12011,reserved);
} else {
return G__12011;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__12012){
var map__12013 = p__12012;
var map__12013__$1 = ((((!((map__12013 == null)))?((((map__12013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12013):map__12013);
var arg = map__12013__$1;
var env = cljs.core.get.call(null,map__12013__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__12013__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__12013__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__12013__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__12015 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12015__$1 = ((((!((map__12015 == null)))?((((map__12015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12015):map__12015);
var name = cljs.core.get.call(null,map__12015__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__12017){
var map__12018 = p__12017;
var map__12018__$1 = ((((!((map__12018 == null)))?((((map__12018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12018):map__12018);
var expr = cljs.core.get.call(null,map__12018__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__12018__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__12018__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__12020_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12020_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12021){
var map__12022 = p__12021;
var map__12022__$1 = ((((!((map__12022 == null)))?((((map__12022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12022):map__12022);
var env = cljs.core.get.call(null,map__12022__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__12022__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12022__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__12024){
var map__12025 = p__12024;
var map__12025__$1 = ((((!((map__12025 == null)))?((((map__12025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12025):map__12025);
var items = cljs.core.get.call(null,map__12025__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12025__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12027){
var map__12028 = p__12027;
var map__12028__$1 = ((((!((map__12028 == null)))?((((map__12028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12028):map__12028);
var items = cljs.core.get.call(null,map__12028__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12028__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_12030 = cljs.core.count.call(null,items);
if((cnt_12030 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_12030,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__12031_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12031_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12032){
var map__12033 = p__12032;
var map__12033__$1 = ((((!((map__12033 == null)))?((((map__12033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12033):map__12033);
var items = cljs.core.get.call(null,map__12033__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12033__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__12035){
var map__12036 = p__12035;
var map__12036__$1 = ((((!((map__12036 == null)))?((((map__12036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12036):map__12036);
var items = cljs.core.get.call(null,map__12036__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__12036__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__12036__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___12054 = cljs.core.seq.call(null,items);
if(temp__4657__auto___12054){
var items_12055__$1 = temp__4657__auto___12054;
var vec__12038_12056 = items_12055__$1;
var seq__12039_12057 = cljs.core.seq.call(null,vec__12038_12056);
var first__12040_12058 = cljs.core.first.call(null,seq__12039_12057);
var seq__12039_12059__$1 = cljs.core.next.call(null,seq__12039_12057);
var vec__12041_12060 = first__12040_12058;
var k_12061 = cljs.core.nth.call(null,vec__12041_12060,(0),null);
var v_12062 = cljs.core.nth.call(null,vec__12041_12060,(1),null);
var r_12063 = seq__12039_12059__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_12061),"\": ",v_12062);

var seq__12044_12064 = cljs.core.seq.call(null,r_12063);
var chunk__12045_12065 = null;
var count__12046_12066 = (0);
var i__12047_12067 = (0);
while(true){
if((i__12047_12067 < count__12046_12066)){
var vec__12048_12068 = cljs.core._nth.call(null,chunk__12045_12065,i__12047_12067);
var k_12069__$1 = cljs.core.nth.call(null,vec__12048_12068,(0),null);
var v_12070__$1 = cljs.core.nth.call(null,vec__12048_12068,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12069__$1),"\": ",v_12070__$1);

var G__12071 = seq__12044_12064;
var G__12072 = chunk__12045_12065;
var G__12073 = count__12046_12066;
var G__12074 = (i__12047_12067 + (1));
seq__12044_12064 = G__12071;
chunk__12045_12065 = G__12072;
count__12046_12066 = G__12073;
i__12047_12067 = G__12074;
continue;
} else {
var temp__4657__auto___12075__$1 = cljs.core.seq.call(null,seq__12044_12064);
if(temp__4657__auto___12075__$1){
var seq__12044_12076__$1 = temp__4657__auto___12075__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12044_12076__$1)){
var c__8507__auto___12077 = cljs.core.chunk_first.call(null,seq__12044_12076__$1);
var G__12078 = cljs.core.chunk_rest.call(null,seq__12044_12076__$1);
var G__12079 = c__8507__auto___12077;
var G__12080 = cljs.core.count.call(null,c__8507__auto___12077);
var G__12081 = (0);
seq__12044_12064 = G__12078;
chunk__12045_12065 = G__12079;
count__12046_12066 = G__12080;
i__12047_12067 = G__12081;
continue;
} else {
var vec__12051_12082 = cljs.core.first.call(null,seq__12044_12076__$1);
var k_12083__$1 = cljs.core.nth.call(null,vec__12051_12082,(0),null);
var v_12084__$1 = cljs.core.nth.call(null,vec__12051_12082,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12083__$1),"\": ",v_12084__$1);

var G__12085 = cljs.core.next.call(null,seq__12044_12076__$1);
var G__12086 = null;
var G__12087 = (0);
var G__12088 = (0);
seq__12044_12064 = G__12085;
chunk__12045_12065 = G__12086;
count__12046_12066 = G__12087;
i__12047_12067 = G__12088;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__12089){
var map__12090 = p__12089;
var map__12090__$1 = ((((!((map__12090 == null)))?((((map__12090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12090):map__12090);
var items = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__12092){
var map__12093 = p__12092;
var map__12093__$1 = ((((!((map__12093 == null)))?((((map__12093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12093):map__12093);
var form = cljs.core.get.call(null,map__12093__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__12093__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__12095){
var map__12096 = p__12095;
var map__12096__$1 = ((((!((map__12096 == null)))?((((map__12096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12096):map__12096);
var op = cljs.core.get.call(null,map__12096__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12096__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__12096__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__7668__auto__ = (function (){var and__7656__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__7656__auto__){
var and__7656__auto____$1 = form;
if(cljs.core.truth_(and__7656__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
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
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__7656__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__12098){
var map__12099 = p__12098;
var map__12099__$1 = ((((!((map__12099 == null)))?((((map__12099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12099):map__12099);
var op = cljs.core.get.call(null,map__12099__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12099__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__12099__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__7668__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__7668__auto__){
return or__7668__auto__;
} else {
var and__7656__auto__ = !((const_expr == null));
if(and__7656__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__7656__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__7668__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12101){
var map__12102 = p__12101;
var map__12102__$1 = ((((!((map__12102 == null)))?((((map__12102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12102):map__12102);
var test = cljs.core.get.call(null,map__12102__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__12102__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__12102__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__12102__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__12102__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__7668__auto__ = unchecked;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__12104){
var map__12105 = p__12104;
var map__12105__$1 = ((((!((map__12105 == null)))?((((map__12105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12105):map__12105);
var v = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__12107_12125 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__12108_12126 = null;
var count__12109_12127 = (0);
var i__12110_12128 = (0);
while(true){
if((i__12110_12128 < count__12109_12127)){
var vec__12111_12129 = cljs.core._nth.call(null,chunk__12108_12126,i__12110_12128);
var ts_12130 = cljs.core.nth.call(null,vec__12111_12129,(0),null);
var then_12131 = cljs.core.nth.call(null,vec__12111_12129,(1),null);
var seq__12114_12132 = cljs.core.seq.call(null,ts_12130);
var chunk__12115_12133 = null;
var count__12116_12134 = (0);
var i__12117_12135 = (0);
while(true){
if((i__12117_12135 < count__12116_12134)){
var test_12136 = cljs.core._nth.call(null,chunk__12115_12133,i__12117_12135);
cljs.compiler.emitln.call(null,"case ",test_12136,":");

var G__12137 = seq__12114_12132;
var G__12138 = chunk__12115_12133;
var G__12139 = count__12116_12134;
var G__12140 = (i__12117_12135 + (1));
seq__12114_12132 = G__12137;
chunk__12115_12133 = G__12138;
count__12116_12134 = G__12139;
i__12117_12135 = G__12140;
continue;
} else {
var temp__4657__auto___12141 = cljs.core.seq.call(null,seq__12114_12132);
if(temp__4657__auto___12141){
var seq__12114_12142__$1 = temp__4657__auto___12141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12114_12142__$1)){
var c__8507__auto___12143 = cljs.core.chunk_first.call(null,seq__12114_12142__$1);
var G__12144 = cljs.core.chunk_rest.call(null,seq__12114_12142__$1);
var G__12145 = c__8507__auto___12143;
var G__12146 = cljs.core.count.call(null,c__8507__auto___12143);
var G__12147 = (0);
seq__12114_12132 = G__12144;
chunk__12115_12133 = G__12145;
count__12116_12134 = G__12146;
i__12117_12135 = G__12147;
continue;
} else {
var test_12148 = cljs.core.first.call(null,seq__12114_12142__$1);
cljs.compiler.emitln.call(null,"case ",test_12148,":");

var G__12149 = cljs.core.next.call(null,seq__12114_12142__$1);
var G__12150 = null;
var G__12151 = (0);
var G__12152 = (0);
seq__12114_12132 = G__12149;
chunk__12115_12133 = G__12150;
count__12116_12134 = G__12151;
i__12117_12135 = G__12152;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12131);
} else {
cljs.compiler.emitln.call(null,then_12131);
}

cljs.compiler.emitln.call(null,"break;");

var G__12153 = seq__12107_12125;
var G__12154 = chunk__12108_12126;
var G__12155 = count__12109_12127;
var G__12156 = (i__12110_12128 + (1));
seq__12107_12125 = G__12153;
chunk__12108_12126 = G__12154;
count__12109_12127 = G__12155;
i__12110_12128 = G__12156;
continue;
} else {
var temp__4657__auto___12157 = cljs.core.seq.call(null,seq__12107_12125);
if(temp__4657__auto___12157){
var seq__12107_12158__$1 = temp__4657__auto___12157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12107_12158__$1)){
var c__8507__auto___12159 = cljs.core.chunk_first.call(null,seq__12107_12158__$1);
var G__12160 = cljs.core.chunk_rest.call(null,seq__12107_12158__$1);
var G__12161 = c__8507__auto___12159;
var G__12162 = cljs.core.count.call(null,c__8507__auto___12159);
var G__12163 = (0);
seq__12107_12125 = G__12160;
chunk__12108_12126 = G__12161;
count__12109_12127 = G__12162;
i__12110_12128 = G__12163;
continue;
} else {
var vec__12118_12164 = cljs.core.first.call(null,seq__12107_12158__$1);
var ts_12165 = cljs.core.nth.call(null,vec__12118_12164,(0),null);
var then_12166 = cljs.core.nth.call(null,vec__12118_12164,(1),null);
var seq__12121_12167 = cljs.core.seq.call(null,ts_12165);
var chunk__12122_12168 = null;
var count__12123_12169 = (0);
var i__12124_12170 = (0);
while(true){
if((i__12124_12170 < count__12123_12169)){
var test_12171 = cljs.core._nth.call(null,chunk__12122_12168,i__12124_12170);
cljs.compiler.emitln.call(null,"case ",test_12171,":");

var G__12172 = seq__12121_12167;
var G__12173 = chunk__12122_12168;
var G__12174 = count__12123_12169;
var G__12175 = (i__12124_12170 + (1));
seq__12121_12167 = G__12172;
chunk__12122_12168 = G__12173;
count__12123_12169 = G__12174;
i__12124_12170 = G__12175;
continue;
} else {
var temp__4657__auto___12176__$1 = cljs.core.seq.call(null,seq__12121_12167);
if(temp__4657__auto___12176__$1){
var seq__12121_12177__$1 = temp__4657__auto___12176__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12121_12177__$1)){
var c__8507__auto___12178 = cljs.core.chunk_first.call(null,seq__12121_12177__$1);
var G__12179 = cljs.core.chunk_rest.call(null,seq__12121_12177__$1);
var G__12180 = c__8507__auto___12178;
var G__12181 = cljs.core.count.call(null,c__8507__auto___12178);
var G__12182 = (0);
seq__12121_12167 = G__12179;
chunk__12122_12168 = G__12180;
count__12123_12169 = G__12181;
i__12124_12170 = G__12182;
continue;
} else {
var test_12183 = cljs.core.first.call(null,seq__12121_12177__$1);
cljs.compiler.emitln.call(null,"case ",test_12183,":");

var G__12184 = cljs.core.next.call(null,seq__12121_12177__$1);
var G__12185 = null;
var G__12186 = (0);
var G__12187 = (0);
seq__12121_12167 = G__12184;
chunk__12122_12168 = G__12185;
count__12123_12169 = G__12186;
i__12124_12170 = G__12187;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12166);
} else {
cljs.compiler.emitln.call(null,then_12166);
}

cljs.compiler.emitln.call(null,"break;");

var G__12188 = cljs.core.next.call(null,seq__12107_12158__$1);
var G__12189 = null;
var G__12190 = (0);
var G__12191 = (0);
seq__12107_12125 = G__12188;
chunk__12108_12126 = G__12189;
count__12109_12127 = G__12190;
i__12110_12128 = G__12191;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12192){
var map__12193 = p__12192;
var map__12193__$1 = ((((!((map__12193 == null)))?((((map__12193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12193):map__12193);
var throw$ = cljs.core.get.call(null,map__12193__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__12193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__12196 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__12196,(0),null);
var rstr = cljs.core.nth.call(null,vec__12196,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__12196,fstr,rstr,ret_t,axstr){
return (function (p1__12195_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12195_SHARP_);
});})(idx,vec__12196,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__12199 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12199),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__12199;
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
return (function (p1__12200_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12200_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__12201 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12202 = cljs.core.seq.call(null,vec__12201);
var first__12203 = cljs.core.first.call(null,seq__12202);
var seq__12202__$1 = cljs.core.next.call(null,seq__12202);
var p = first__12203;
var first__12203__$1 = cljs.core.first.call(null,seq__12202__$1);
var seq__12202__$2 = cljs.core.next.call(null,seq__12202__$1);
var ts = first__12203__$1;
var first__12203__$2 = cljs.core.first.call(null,seq__12202__$2);
var seq__12202__$3 = cljs.core.next.call(null,seq__12202__$2);
var n = first__12203__$2;
var xs = seq__12202__$3;
if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.core._EQ_.call(null,"@param",p);
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
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__12204 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12205 = cljs.core.seq.call(null,vec__12204);
var first__12206 = cljs.core.first.call(null,seq__12205);
var seq__12205__$1 = cljs.core.next.call(null,seq__12205);
var p = first__12206;
var first__12206__$1 = cljs.core.first.call(null,seq__12205__$1);
var seq__12205__$2 = cljs.core.next.call(null,seq__12205__$1);
var ts = first__12206__$1;
var xs = seq__12205__$2;
if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.core._EQ_.call(null,"@return",p);
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
var G__12209 = arguments.length;
switch (G__12209) {
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
var vec__12217 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__12207_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__12207_SHARP_);
} else {
return p1__12207_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__12218 = cljs.core.seq.call(null,vec__12217);
var first__12219 = cljs.core.first.call(null,seq__12218);
var seq__12218__$1 = cljs.core.next.call(null,seq__12218);
var x = first__12219;
var ys = seq__12218__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__12220 = cljs.core.seq.call(null,ys);
var chunk__12221 = null;
var count__12222 = (0);
var i__12223 = (0);
while(true){
if((i__12223 < count__12222)){
var next_line = cljs.core._nth.call(null,chunk__12221,i__12223);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__12229 = seq__12220;
var G__12230 = chunk__12221;
var G__12231 = count__12222;
var G__12232 = (i__12223 + (1));
seq__12220 = G__12229;
chunk__12221 = G__12230;
count__12222 = G__12231;
i__12223 = G__12232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12220);
if(temp__4657__auto__){
var seq__12220__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12220__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__12220__$1);
var G__12233 = cljs.core.chunk_rest.call(null,seq__12220__$1);
var G__12234 = c__8507__auto__;
var G__12235 = cljs.core.count.call(null,c__8507__auto__);
var G__12236 = (0);
seq__12220 = G__12233;
chunk__12221 = G__12234;
count__12222 = G__12235;
i__12223 = G__12236;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__12220__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__12237 = cljs.core.next.call(null,seq__12220__$1);
var G__12238 = null;
var G__12239 = (0);
var G__12240 = (0);
seq__12220 = G__12237;
chunk__12221 = G__12238;
count__12222 = G__12239;
i__12223 = G__12240;
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

var seq__12224_12241 = cljs.core.seq.call(null,docs__$2);
var chunk__12225_12242 = null;
var count__12226_12243 = (0);
var i__12227_12244 = (0);
while(true){
if((i__12227_12244 < count__12226_12243)){
var e_12245 = cljs.core._nth.call(null,chunk__12225_12242,i__12227_12244);
if(cljs.core.truth_(e_12245)){
print_comment_lines.call(null,e_12245);
} else {
}

var G__12246 = seq__12224_12241;
var G__12247 = chunk__12225_12242;
var G__12248 = count__12226_12243;
var G__12249 = (i__12227_12244 + (1));
seq__12224_12241 = G__12246;
chunk__12225_12242 = G__12247;
count__12226_12243 = G__12248;
i__12227_12244 = G__12249;
continue;
} else {
var temp__4657__auto___12250 = cljs.core.seq.call(null,seq__12224_12241);
if(temp__4657__auto___12250){
var seq__12224_12251__$1 = temp__4657__auto___12250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12224_12251__$1)){
var c__8507__auto___12252 = cljs.core.chunk_first.call(null,seq__12224_12251__$1);
var G__12253 = cljs.core.chunk_rest.call(null,seq__12224_12251__$1);
var G__12254 = c__8507__auto___12252;
var G__12255 = cljs.core.count.call(null,c__8507__auto___12252);
var G__12256 = (0);
seq__12224_12241 = G__12253;
chunk__12225_12242 = G__12254;
count__12226_12243 = G__12255;
i__12227_12244 = G__12256;
continue;
} else {
var e_12257 = cljs.core.first.call(null,seq__12224_12251__$1);
if(cljs.core.truth_(e_12257)){
print_comment_lines.call(null,e_12257);
} else {
}

var G__12258 = cljs.core.next.call(null,seq__12224_12251__$1);
var G__12259 = null;
var G__12260 = (0);
var G__12261 = (0);
seq__12224_12241 = G__12258;
chunk__12225_12242 = G__12259;
count__12226_12243 = G__12260;
i__12227_12244 = G__12261;
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
var and__7656__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__12263_SHARP_){
return goog.string.startsWith(p1__12263_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__7656__auto__)){
var and__7656__auto____$1 = opts;
if(cljs.core.truth_(and__7656__auto____$1)){
var and__7656__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__7656__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12264){
var map__12265 = p__12264;
var map__12265__$1 = ((((!((map__12265 == null)))?((((map__12265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12265):map__12265);
var name = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__7668__auto__ = init;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
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

if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__7656__auto__){
return test;
} else {
return and__7656__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12267){
var map__12268 = p__12267;
var map__12268__$1 = ((((!((map__12268 == null)))?((((map__12268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12268):map__12268);
var name = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__12270_12288 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__12271_12289 = null;
var count__12272_12290 = (0);
var i__12273_12291 = (0);
while(true){
if((i__12273_12291 < count__12272_12290)){
var vec__12274_12292 = cljs.core._nth.call(null,chunk__12271_12289,i__12273_12291);
var i_12293 = cljs.core.nth.call(null,vec__12274_12292,(0),null);
var param_12294 = cljs.core.nth.call(null,vec__12274_12292,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_12294);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__12295 = seq__12270_12288;
var G__12296 = chunk__12271_12289;
var G__12297 = count__12272_12290;
var G__12298 = (i__12273_12291 + (1));
seq__12270_12288 = G__12295;
chunk__12271_12289 = G__12296;
count__12272_12290 = G__12297;
i__12273_12291 = G__12298;
continue;
} else {
var temp__4657__auto___12299 = cljs.core.seq.call(null,seq__12270_12288);
if(temp__4657__auto___12299){
var seq__12270_12300__$1 = temp__4657__auto___12299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12270_12300__$1)){
var c__8507__auto___12301 = cljs.core.chunk_first.call(null,seq__12270_12300__$1);
var G__12302 = cljs.core.chunk_rest.call(null,seq__12270_12300__$1);
var G__12303 = c__8507__auto___12301;
var G__12304 = cljs.core.count.call(null,c__8507__auto___12301);
var G__12305 = (0);
seq__12270_12288 = G__12302;
chunk__12271_12289 = G__12303;
count__12272_12290 = G__12304;
i__12273_12291 = G__12305;
continue;
} else {
var vec__12277_12306 = cljs.core.first.call(null,seq__12270_12300__$1);
var i_12307 = cljs.core.nth.call(null,vec__12277_12306,(0),null);
var param_12308 = cljs.core.nth.call(null,vec__12277_12306,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_12308);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__12309 = cljs.core.next.call(null,seq__12270_12300__$1);
var G__12310 = null;
var G__12311 = (0);
var G__12312 = (0);
seq__12270_12288 = G__12309;
chunk__12271_12289 = G__12310;
count__12272_12290 = G__12311;
i__12273_12291 = G__12312;
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

var seq__12280_12313 = cljs.core.seq.call(null,params);
var chunk__12281_12314 = null;
var count__12282_12315 = (0);
var i__12283_12316 = (0);
while(true){
if((i__12283_12316 < count__12282_12315)){
var param_12317 = cljs.core._nth.call(null,chunk__12281_12314,i__12283_12316);
cljs.compiler.emit.call(null,param_12317);

if(cljs.core._EQ_.call(null,param_12317,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12318 = seq__12280_12313;
var G__12319 = chunk__12281_12314;
var G__12320 = count__12282_12315;
var G__12321 = (i__12283_12316 + (1));
seq__12280_12313 = G__12318;
chunk__12281_12314 = G__12319;
count__12282_12315 = G__12320;
i__12283_12316 = G__12321;
continue;
} else {
var temp__4657__auto___12322 = cljs.core.seq.call(null,seq__12280_12313);
if(temp__4657__auto___12322){
var seq__12280_12323__$1 = temp__4657__auto___12322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12280_12323__$1)){
var c__8507__auto___12324 = cljs.core.chunk_first.call(null,seq__12280_12323__$1);
var G__12325 = cljs.core.chunk_rest.call(null,seq__12280_12323__$1);
var G__12326 = c__8507__auto___12324;
var G__12327 = cljs.core.count.call(null,c__8507__auto___12324);
var G__12328 = (0);
seq__12280_12313 = G__12325;
chunk__12281_12314 = G__12326;
count__12282_12315 = G__12327;
i__12283_12316 = G__12328;
continue;
} else {
var param_12329 = cljs.core.first.call(null,seq__12280_12323__$1);
cljs.compiler.emit.call(null,param_12329);

if(cljs.core._EQ_.call(null,param_12329,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12330 = cljs.core.next.call(null,seq__12280_12323__$1);
var G__12331 = null;
var G__12332 = (0);
var G__12333 = (0);
seq__12280_12313 = G__12330;
chunk__12281_12314 = G__12331;
count__12282_12315 = G__12332;
i__12283_12316 = G__12333;
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

var seq__12284_12334 = cljs.core.seq.call(null,params);
var chunk__12285_12335 = null;
var count__12286_12336 = (0);
var i__12287_12337 = (0);
while(true){
if((i__12287_12337 < count__12286_12336)){
var param_12338 = cljs.core._nth.call(null,chunk__12285_12335,i__12287_12337);
cljs.compiler.emit.call(null,param_12338);

if(cljs.core._EQ_.call(null,param_12338,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12339 = seq__12284_12334;
var G__12340 = chunk__12285_12335;
var G__12341 = count__12286_12336;
var G__12342 = (i__12287_12337 + (1));
seq__12284_12334 = G__12339;
chunk__12285_12335 = G__12340;
count__12286_12336 = G__12341;
i__12287_12337 = G__12342;
continue;
} else {
var temp__4657__auto___12343 = cljs.core.seq.call(null,seq__12284_12334);
if(temp__4657__auto___12343){
var seq__12284_12344__$1 = temp__4657__auto___12343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12284_12344__$1)){
var c__8507__auto___12345 = cljs.core.chunk_first.call(null,seq__12284_12344__$1);
var G__12346 = cljs.core.chunk_rest.call(null,seq__12284_12344__$1);
var G__12347 = c__8507__auto___12345;
var G__12348 = cljs.core.count.call(null,c__8507__auto___12345);
var G__12349 = (0);
seq__12284_12334 = G__12346;
chunk__12285_12335 = G__12347;
count__12286_12336 = G__12348;
i__12287_12337 = G__12349;
continue;
} else {
var param_12350 = cljs.core.first.call(null,seq__12284_12344__$1);
cljs.compiler.emit.call(null,param_12350);

if(cljs.core._EQ_.call(null,param_12350,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12351 = cljs.core.next.call(null,seq__12284_12344__$1);
var G__12352 = null;
var G__12353 = (0);
var G__12354 = (0);
seq__12284_12334 = G__12351;
chunk__12285_12335 = G__12352;
count__12286_12336 = G__12353;
i__12287_12337 = G__12354;
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
var seq__12355 = cljs.core.seq.call(null,params);
var chunk__12356 = null;
var count__12357 = (0);
var i__12358 = (0);
while(true){
if((i__12358 < count__12357)){
var param = cljs.core._nth.call(null,chunk__12356,i__12358);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12359 = seq__12355;
var G__12360 = chunk__12356;
var G__12361 = count__12357;
var G__12362 = (i__12358 + (1));
seq__12355 = G__12359;
chunk__12356 = G__12360;
count__12357 = G__12361;
i__12358 = G__12362;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12355);
if(temp__4657__auto__){
var seq__12355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12355__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__12355__$1);
var G__12363 = cljs.core.chunk_rest.call(null,seq__12355__$1);
var G__12364 = c__8507__auto__;
var G__12365 = cljs.core.count.call(null,c__8507__auto__);
var G__12366 = (0);
seq__12355 = G__12363;
chunk__12356 = G__12364;
count__12357 = G__12365;
i__12358 = G__12366;
continue;
} else {
var param = cljs.core.first.call(null,seq__12355__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12367 = cljs.core.next.call(null,seq__12355__$1);
var G__12368 = null;
var G__12369 = (0);
var G__12370 = (0);
seq__12355 = G__12367;
chunk__12356 = G__12368;
count__12357 = G__12369;
i__12358 = G__12370;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__12371){
var map__12372 = p__12371;
var map__12372__$1 = ((((!((map__12372 == null)))?((((map__12372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12372):map__12372);
var type = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__12374){
var map__12375 = p__12374;
var map__12375__$1 = ((((!((map__12375 == null)))?((((map__12375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12375):map__12375);
var f = map__12375__$1;
var type = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_12385__$1 = (function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12386 = cljs.compiler.munge.call(null,name_12385__$1);
var delegate_name_12387 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12386),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_12387," = function (");

var seq__12377_12388 = cljs.core.seq.call(null,params);
var chunk__12378_12389 = null;
var count__12379_12390 = (0);
var i__12380_12391 = (0);
while(true){
if((i__12380_12391 < count__12379_12390)){
var param_12392 = cljs.core._nth.call(null,chunk__12378_12389,i__12380_12391);
cljs.compiler.emit.call(null,param_12392);

if(cljs.core._EQ_.call(null,param_12392,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12393 = seq__12377_12388;
var G__12394 = chunk__12378_12389;
var G__12395 = count__12379_12390;
var G__12396 = (i__12380_12391 + (1));
seq__12377_12388 = G__12393;
chunk__12378_12389 = G__12394;
count__12379_12390 = G__12395;
i__12380_12391 = G__12396;
continue;
} else {
var temp__4657__auto___12397 = cljs.core.seq.call(null,seq__12377_12388);
if(temp__4657__auto___12397){
var seq__12377_12398__$1 = temp__4657__auto___12397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12377_12398__$1)){
var c__8507__auto___12399 = cljs.core.chunk_first.call(null,seq__12377_12398__$1);
var G__12400 = cljs.core.chunk_rest.call(null,seq__12377_12398__$1);
var G__12401 = c__8507__auto___12399;
var G__12402 = cljs.core.count.call(null,c__8507__auto___12399);
var G__12403 = (0);
seq__12377_12388 = G__12400;
chunk__12378_12389 = G__12401;
count__12379_12390 = G__12402;
i__12380_12391 = G__12403;
continue;
} else {
var param_12404 = cljs.core.first.call(null,seq__12377_12398__$1);
cljs.compiler.emit.call(null,param_12404);

if(cljs.core._EQ_.call(null,param_12404,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12405 = cljs.core.next.call(null,seq__12377_12398__$1);
var G__12406 = null;
var G__12407 = (0);
var G__12408 = (0);
seq__12377_12388 = G__12405;
chunk__12378_12389 = G__12406;
count__12379_12390 = G__12407;
i__12380_12391 = G__12408;
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

cljs.compiler.emitln.call(null,"var ",mname_12386," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_12409 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_12409,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_12387,".call(this,");

var seq__12381_12410 = cljs.core.seq.call(null,params);
var chunk__12382_12411 = null;
var count__12383_12412 = (0);
var i__12384_12413 = (0);
while(true){
if((i__12384_12413 < count__12383_12412)){
var param_12414 = cljs.core._nth.call(null,chunk__12382_12411,i__12384_12413);
cljs.compiler.emit.call(null,param_12414);

if(cljs.core._EQ_.call(null,param_12414,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12415 = seq__12381_12410;
var G__12416 = chunk__12382_12411;
var G__12417 = count__12383_12412;
var G__12418 = (i__12384_12413 + (1));
seq__12381_12410 = G__12415;
chunk__12382_12411 = G__12416;
count__12383_12412 = G__12417;
i__12384_12413 = G__12418;
continue;
} else {
var temp__4657__auto___12419 = cljs.core.seq.call(null,seq__12381_12410);
if(temp__4657__auto___12419){
var seq__12381_12420__$1 = temp__4657__auto___12419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12381_12420__$1)){
var c__8507__auto___12421 = cljs.core.chunk_first.call(null,seq__12381_12420__$1);
var G__12422 = cljs.core.chunk_rest.call(null,seq__12381_12420__$1);
var G__12423 = c__8507__auto___12421;
var G__12424 = cljs.core.count.call(null,c__8507__auto___12421);
var G__12425 = (0);
seq__12381_12410 = G__12422;
chunk__12382_12411 = G__12423;
count__12383_12412 = G__12424;
i__12384_12413 = G__12425;
continue;
} else {
var param_12426 = cljs.core.first.call(null,seq__12381_12420__$1);
cljs.compiler.emit.call(null,param_12426);

if(cljs.core._EQ_.call(null,param_12426,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12427 = cljs.core.next.call(null,seq__12381_12420__$1);
var G__12428 = null;
var G__12429 = (0);
var G__12430 = (0);
seq__12381_12410 = G__12427;
chunk__12382_12411 = G__12428;
count__12383_12412 = G__12429;
i__12384_12413 = G__12430;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_12386,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_12386,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_12385__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_12386,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_12387,";");

cljs.compiler.emitln.call(null,"return ",mname_12386,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__12434){
var map__12435 = p__12434;
var map__12435__$1 = ((((!((map__12435 == null)))?((((map__12435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12435):map__12435);
var name = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__12435,map__12435__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12431_SHARP_){
var and__7656__auto__ = p1__12431_SHARP_;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__12431_SHARP_));
} else {
return and__7656__auto__;
}
});})(map__12435,map__12435__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_12470__$1 = (function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12471 = cljs.compiler.munge.call(null,name_12470__$1);
var maxparams_12472 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_12473 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_12470__$1,mname_12471,maxparams_12472,loop_locals,map__12435,map__12435__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12471),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_12470__$1,mname_12471,maxparams_12472,loop_locals,map__12435,map__12435__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_12474 = cljs.core.sort_by.call(null,((function (name_12470__$1,mname_12471,maxparams_12472,mmap_12473,loop_locals,map__12435,map__12435__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12432_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12432_SHARP_)));
});})(name_12470__$1,mname_12471,maxparams_12472,mmap_12473,loop_locals,map__12435,map__12435__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_12473));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_12471," = null;");

var seq__12437_12475 = cljs.core.seq.call(null,ms_12474);
var chunk__12438_12476 = null;
var count__12439_12477 = (0);
var i__12440_12478 = (0);
while(true){
if((i__12440_12478 < count__12439_12477)){
var vec__12441_12479 = cljs.core._nth.call(null,chunk__12438_12476,i__12440_12478);
var n_12480 = cljs.core.nth.call(null,vec__12441_12479,(0),null);
var meth_12481 = cljs.core.nth.call(null,vec__12441_12479,(1),null);
cljs.compiler.emits.call(null,"var ",n_12480," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12481))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12481);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12481);
}

cljs.compiler.emitln.call(null,";");

var G__12482 = seq__12437_12475;
var G__12483 = chunk__12438_12476;
var G__12484 = count__12439_12477;
var G__12485 = (i__12440_12478 + (1));
seq__12437_12475 = G__12482;
chunk__12438_12476 = G__12483;
count__12439_12477 = G__12484;
i__12440_12478 = G__12485;
continue;
} else {
var temp__4657__auto___12486 = cljs.core.seq.call(null,seq__12437_12475);
if(temp__4657__auto___12486){
var seq__12437_12487__$1 = temp__4657__auto___12486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12437_12487__$1)){
var c__8507__auto___12488 = cljs.core.chunk_first.call(null,seq__12437_12487__$1);
var G__12489 = cljs.core.chunk_rest.call(null,seq__12437_12487__$1);
var G__12490 = c__8507__auto___12488;
var G__12491 = cljs.core.count.call(null,c__8507__auto___12488);
var G__12492 = (0);
seq__12437_12475 = G__12489;
chunk__12438_12476 = G__12490;
count__12439_12477 = G__12491;
i__12440_12478 = G__12492;
continue;
} else {
var vec__12444_12493 = cljs.core.first.call(null,seq__12437_12487__$1);
var n_12494 = cljs.core.nth.call(null,vec__12444_12493,(0),null);
var meth_12495 = cljs.core.nth.call(null,vec__12444_12493,(1),null);
cljs.compiler.emits.call(null,"var ",n_12494," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12495))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12495);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12495);
}

cljs.compiler.emitln.call(null,";");

var G__12496 = cljs.core.next.call(null,seq__12437_12487__$1);
var G__12497 = null;
var G__12498 = (0);
var G__12499 = (0);
seq__12437_12475 = G__12496;
chunk__12438_12476 = G__12497;
count__12439_12477 = G__12498;
i__12440_12478 = G__12499;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_12471," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_12472),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_12472)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_12472));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__12447_12500 = cljs.core.seq.call(null,ms_12474);
var chunk__12448_12501 = null;
var count__12449_12502 = (0);
var i__12450_12503 = (0);
while(true){
if((i__12450_12503 < count__12449_12502)){
var vec__12451_12504 = cljs.core._nth.call(null,chunk__12448_12501,i__12450_12503);
var n_12505 = cljs.core.nth.call(null,vec__12451_12504,(0),null);
var meth_12506 = cljs.core.nth.call(null,vec__12451_12504,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12506))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12507 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12507," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12508 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12507," = new cljs.core.IndexedSeq(",a_12508,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12505,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12472)),(((cljs.core.count.call(null,maxparams_12472) > (1)))?", ":null),restarg_12507,");");
} else {
var pcnt_12509 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12506));
cljs.compiler.emitln.call(null,"case ",pcnt_12509,":");

cljs.compiler.emitln.call(null,"return ",n_12505,".call(this",(((pcnt_12509 === (0)))?null:cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12509,maxparams_12472));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),",")),");");
}

var G__12510 = seq__12447_12500;
var G__12511 = chunk__12448_12501;
var G__12512 = count__12449_12502;
var G__12513 = (i__12450_12503 + (1));
seq__12447_12500 = G__12510;
chunk__12448_12501 = G__12511;
count__12449_12502 = G__12512;
i__12450_12503 = G__12513;
continue;
} else {
var temp__4657__auto___12514 = cljs.core.seq.call(null,seq__12447_12500);
if(temp__4657__auto___12514){
var seq__12447_12515__$1 = temp__4657__auto___12514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12447_12515__$1)){
var c__8507__auto___12516 = cljs.core.chunk_first.call(null,seq__12447_12515__$1);
var G__12517 = cljs.core.chunk_rest.call(null,seq__12447_12515__$1);
var G__12518 = c__8507__auto___12516;
var G__12519 = cljs.core.count.call(null,c__8507__auto___12516);
var G__12520 = (0);
seq__12447_12500 = G__12517;
chunk__12448_12501 = G__12518;
count__12449_12502 = G__12519;
i__12450_12503 = G__12520;
continue;
} else {
var vec__12454_12521 = cljs.core.first.call(null,seq__12447_12515__$1);
var n_12522 = cljs.core.nth.call(null,vec__12454_12521,(0),null);
var meth_12523 = cljs.core.nth.call(null,vec__12454_12521,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12523))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12524 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12524," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12525 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12524," = new cljs.core.IndexedSeq(",a_12525,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12522,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12472)),(((cljs.core.count.call(null,maxparams_12472) > (1)))?", ":null),restarg_12524,");");
} else {
var pcnt_12526 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12523));
cljs.compiler.emitln.call(null,"case ",pcnt_12526,":");

cljs.compiler.emitln.call(null,"return ",n_12522,".call(this",(((pcnt_12526 === (0)))?null:cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12526,maxparams_12472));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),",")),");");
}

var G__12527 = cljs.core.next.call(null,seq__12447_12515__$1);
var G__12528 = null;
var G__12529 = (0);
var G__12530 = (0);
seq__12447_12500 = G__12527;
chunk__12448_12501 = G__12528;
count__12449_12502 = G__12529;
i__12450_12503 = G__12530;
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
cljs.compiler.emitln.call(null,mname_12471,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_12471,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_12470__$1,mname_12471,maxparams_12472,mmap_12473,ms_12474,loop_locals,map__12435,map__12435__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12433_SHARP_){
var vec__12457 = p1__12433_SHARP_;
var n = cljs.core.nth.call(null,vec__12457,(0),null);
var m = cljs.core.nth.call(null,vec__12457,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_12470__$1,mname_12471,maxparams_12472,mmap_12473,ms_12474,loop_locals,map__12435,map__12435__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_12474),".cljs$lang$applyTo;");
} else {
}

var seq__12460_12531 = cljs.core.seq.call(null,ms_12474);
var chunk__12461_12532 = null;
var count__12462_12533 = (0);
var i__12463_12534 = (0);
while(true){
if((i__12463_12534 < count__12462_12533)){
var vec__12464_12535 = cljs.core._nth.call(null,chunk__12461_12532,i__12463_12534);
var n_12536 = cljs.core.nth.call(null,vec__12464_12535,(0),null);
var meth_12537 = cljs.core.nth.call(null,vec__12464_12535,(1),null);
var c_12538 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12537));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12537))){
cljs.compiler.emitln.call(null,mname_12471,".cljs$core$IFn$_invoke$arity$variadic = ",n_12536,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12471,".cljs$core$IFn$_invoke$arity$",c_12538," = ",n_12536,";");
}

var G__12539 = seq__12460_12531;
var G__12540 = chunk__12461_12532;
var G__12541 = count__12462_12533;
var G__12542 = (i__12463_12534 + (1));
seq__12460_12531 = G__12539;
chunk__12461_12532 = G__12540;
count__12462_12533 = G__12541;
i__12463_12534 = G__12542;
continue;
} else {
var temp__4657__auto___12543 = cljs.core.seq.call(null,seq__12460_12531);
if(temp__4657__auto___12543){
var seq__12460_12544__$1 = temp__4657__auto___12543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12460_12544__$1)){
var c__8507__auto___12545 = cljs.core.chunk_first.call(null,seq__12460_12544__$1);
var G__12546 = cljs.core.chunk_rest.call(null,seq__12460_12544__$1);
var G__12547 = c__8507__auto___12545;
var G__12548 = cljs.core.count.call(null,c__8507__auto___12545);
var G__12549 = (0);
seq__12460_12531 = G__12546;
chunk__12461_12532 = G__12547;
count__12462_12533 = G__12548;
i__12463_12534 = G__12549;
continue;
} else {
var vec__12467_12550 = cljs.core.first.call(null,seq__12460_12544__$1);
var n_12551 = cljs.core.nth.call(null,vec__12467_12550,(0),null);
var meth_12552 = cljs.core.nth.call(null,vec__12467_12550,(1),null);
var c_12553 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12552));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12552))){
cljs.compiler.emitln.call(null,mname_12471,".cljs$core$IFn$_invoke$arity$variadic = ",n_12551,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12471,".cljs$core$IFn$_invoke$arity$",c_12553," = ",n_12551,";");
}

var G__12554 = cljs.core.next.call(null,seq__12460_12544__$1);
var G__12555 = null;
var G__12556 = (0);
var G__12557 = (0);
seq__12460_12531 = G__12554;
chunk__12461_12532 = G__12555;
count__12462_12533 = G__12556;
i__12463_12534 = G__12557;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_12471,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__12558){
var map__12559 = p__12558;
var map__12559__$1 = ((((!((map__12559 == null)))?((((map__12559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12559):map__12559);
var statements = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__7656__auto__ = statements;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__7656__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__12561_12565 = cljs.core.seq.call(null,statements);
var chunk__12562_12566 = null;
var count__12563_12567 = (0);
var i__12564_12568 = (0);
while(true){
if((i__12564_12568 < count__12563_12567)){
var s_12569 = cljs.core._nth.call(null,chunk__12562_12566,i__12564_12568);
cljs.compiler.emitln.call(null,s_12569);

var G__12570 = seq__12561_12565;
var G__12571 = chunk__12562_12566;
var G__12572 = count__12563_12567;
var G__12573 = (i__12564_12568 + (1));
seq__12561_12565 = G__12570;
chunk__12562_12566 = G__12571;
count__12563_12567 = G__12572;
i__12564_12568 = G__12573;
continue;
} else {
var temp__4657__auto___12574 = cljs.core.seq.call(null,seq__12561_12565);
if(temp__4657__auto___12574){
var seq__12561_12575__$1 = temp__4657__auto___12574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12561_12575__$1)){
var c__8507__auto___12576 = cljs.core.chunk_first.call(null,seq__12561_12575__$1);
var G__12577 = cljs.core.chunk_rest.call(null,seq__12561_12575__$1);
var G__12578 = c__8507__auto___12576;
var G__12579 = cljs.core.count.call(null,c__8507__auto___12576);
var G__12580 = (0);
seq__12561_12565 = G__12577;
chunk__12562_12566 = G__12578;
count__12563_12567 = G__12579;
i__12564_12568 = G__12580;
continue;
} else {
var s_12581 = cljs.core.first.call(null,seq__12561_12575__$1);
cljs.compiler.emitln.call(null,s_12581);

var G__12582 = cljs.core.next.call(null,seq__12561_12575__$1);
var G__12583 = null;
var G__12584 = (0);
var G__12585 = (0);
seq__12561_12565 = G__12582;
chunk__12562_12566 = G__12583;
count__12563_12567 = G__12584;
i__12564_12568 = G__12585;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__7656__auto__ = statements;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__7656__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12586){
var map__12587 = p__12586;
var map__12587__$1 = ((((!((map__12587 == null)))?((((map__12587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12587):map__12587);
var env = cljs.core.get.call(null,map__12587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__12587__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__12587__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__12587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__12587__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__12589,is_loop){
var map__12590 = p__12589;
var map__12590__$1 = ((((!((map__12590 == null)))?((((map__12590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12590):map__12590);
var bindings = cljs.core.get.call(null,map__12590__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__12590__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12590__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_12592_12601 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_12592_12601,context,map__12590,map__12590__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_12592_12601,context,map__12590,map__12590__$1,bindings,expr,env))
,bindings):null));

try{var seq__12593_12602 = cljs.core.seq.call(null,bindings);
var chunk__12594_12603 = null;
var count__12595_12604 = (0);
var i__12596_12605 = (0);
while(true){
if((i__12596_12605 < count__12595_12604)){
var map__12597_12606 = cljs.core._nth.call(null,chunk__12594_12603,i__12596_12605);
var map__12597_12607__$1 = ((((!((map__12597_12606 == null)))?((((map__12597_12606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12597_12606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12597_12606):map__12597_12606);
var binding_12608 = map__12597_12607__$1;
var init_12609 = cljs.core.get.call(null,map__12597_12607__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12608);

cljs.compiler.emitln.call(null," = ",init_12609,";");

var G__12610 = seq__12593_12602;
var G__12611 = chunk__12594_12603;
var G__12612 = count__12595_12604;
var G__12613 = (i__12596_12605 + (1));
seq__12593_12602 = G__12610;
chunk__12594_12603 = G__12611;
count__12595_12604 = G__12612;
i__12596_12605 = G__12613;
continue;
} else {
var temp__4657__auto___12614 = cljs.core.seq.call(null,seq__12593_12602);
if(temp__4657__auto___12614){
var seq__12593_12615__$1 = temp__4657__auto___12614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12593_12615__$1)){
var c__8507__auto___12616 = cljs.core.chunk_first.call(null,seq__12593_12615__$1);
var G__12617 = cljs.core.chunk_rest.call(null,seq__12593_12615__$1);
var G__12618 = c__8507__auto___12616;
var G__12619 = cljs.core.count.call(null,c__8507__auto___12616);
var G__12620 = (0);
seq__12593_12602 = G__12617;
chunk__12594_12603 = G__12618;
count__12595_12604 = G__12619;
i__12596_12605 = G__12620;
continue;
} else {
var map__12599_12621 = cljs.core.first.call(null,seq__12593_12615__$1);
var map__12599_12622__$1 = ((((!((map__12599_12621 == null)))?((((map__12599_12621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12599_12621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12599_12621):map__12599_12621);
var binding_12623 = map__12599_12622__$1;
var init_12624 = cljs.core.get.call(null,map__12599_12622__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12623);

cljs.compiler.emitln.call(null," = ",init_12624,";");

var G__12625 = cljs.core.next.call(null,seq__12593_12615__$1);
var G__12626 = null;
var G__12627 = (0);
var G__12628 = (0);
seq__12593_12602 = G__12625;
chunk__12594_12603 = G__12626;
count__12595_12604 = G__12627;
i__12596_12605 = G__12628;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_12592_12601;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__12629){
var map__12630 = p__12629;
var map__12630__$1 = ((((!((map__12630 == null)))?((((map__12630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12630):map__12630);
var frame = cljs.core.get.call(null,map__12630__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__12630__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__12630__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__8615__auto___12632 = cljs.core.count.call(null,exprs);
var i_12633 = (0);
while(true){
if((i_12633 < n__8615__auto___12632)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_12633)," = ",exprs.call(null,i_12633),";");

var G__12634 = (i_12633 + (1));
i_12633 = G__12634;
continue;
} else {
}
break;
}

var n__8615__auto___12635 = cljs.core.count.call(null,exprs);
var i_12636 = (0);
while(true){
if((i_12636 < n__8615__auto___12635)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_12636))," = ",temps.call(null,i_12636),";");

var G__12637 = (i_12636 + (1));
i_12636 = G__12637;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__12638){
var map__12639 = p__12638;
var map__12639__$1 = ((((!((map__12639 == null)))?((((map__12639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12639):map__12639);
var bindings = cljs.core.get.call(null,map__12639__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__12639__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__12641_12649 = cljs.core.seq.call(null,bindings);
var chunk__12642_12650 = null;
var count__12643_12651 = (0);
var i__12644_12652 = (0);
while(true){
if((i__12644_12652 < count__12643_12651)){
var map__12645_12653 = cljs.core._nth.call(null,chunk__12642_12650,i__12644_12652);
var map__12645_12654__$1 = ((((!((map__12645_12653 == null)))?((((map__12645_12653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12645_12653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12645_12653):map__12645_12653);
var binding_12655 = map__12645_12654__$1;
var init_12656 = cljs.core.get.call(null,map__12645_12654__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12655)," = ",init_12656,";");

var G__12657 = seq__12641_12649;
var G__12658 = chunk__12642_12650;
var G__12659 = count__12643_12651;
var G__12660 = (i__12644_12652 + (1));
seq__12641_12649 = G__12657;
chunk__12642_12650 = G__12658;
count__12643_12651 = G__12659;
i__12644_12652 = G__12660;
continue;
} else {
var temp__4657__auto___12661 = cljs.core.seq.call(null,seq__12641_12649);
if(temp__4657__auto___12661){
var seq__12641_12662__$1 = temp__4657__auto___12661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12641_12662__$1)){
var c__8507__auto___12663 = cljs.core.chunk_first.call(null,seq__12641_12662__$1);
var G__12664 = cljs.core.chunk_rest.call(null,seq__12641_12662__$1);
var G__12665 = c__8507__auto___12663;
var G__12666 = cljs.core.count.call(null,c__8507__auto___12663);
var G__12667 = (0);
seq__12641_12649 = G__12664;
chunk__12642_12650 = G__12665;
count__12643_12651 = G__12666;
i__12644_12652 = G__12667;
continue;
} else {
var map__12647_12668 = cljs.core.first.call(null,seq__12641_12662__$1);
var map__12647_12669__$1 = ((((!((map__12647_12668 == null)))?((((map__12647_12668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12647_12668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12647_12668):map__12647_12668);
var binding_12670 = map__12647_12669__$1;
var init_12671 = cljs.core.get.call(null,map__12647_12669__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12670)," = ",init_12671,";");

var G__12672 = cljs.core.next.call(null,seq__12641_12662__$1);
var G__12673 = null;
var G__12674 = (0);
var G__12675 = (0);
seq__12641_12649 = G__12672;
chunk__12642_12650 = G__12673;
count__12643_12651 = G__12674;
i__12644_12652 = G__12675;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12678){
var map__12679 = p__12678;
var map__12679__$1 = ((((!((map__12679 == null)))?((((map__12679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12679):map__12679);
var expr = map__12679__$1;
var f = cljs.core.get.call(null,map__12679__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__12679__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12679__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__7656__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__7656__auto__){
var and__7656__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__7656__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__7656__auto__ = protocol;
if(cljs.core.truth_(and__7656__auto__)){
var and__7656__auto____$1 = tag;
if(cljs.core.truth_(and__7656__auto____$1)){
var or__7668__auto__ = (function (){var and__7656__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__7656__auto____$2){
var and__7656__auto____$3 = protocol;
if(cljs.core.truth_(and__7656__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
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
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__7656__auto____$2)){
var or__7668__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__7668__auto____$1){
return or__7668__auto____$1;
} else {
var and__7656__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__7656__auto____$3){
var and__7656__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__7656__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
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
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__7668__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__7668__auto__){
return or__7668__auto__;
} else {
var or__7668__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__7668__auto____$1)){
return or__7668__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__12681 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__7656__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__7656__auto__)){
return (arity > mfa);
} else {
return and__7656__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12679,map__12679__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12679,map__12679__$1,expr,f,args,env){
return (function (p1__12676_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12676_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12679,map__12679__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12679,map__12679__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12679,map__12679__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12679,map__12679__$1,expr,f,args,env){
return (function (p1__12677_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12677_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12679,map__12679__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12679,map__12679__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__12681,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__12681,(1),null);
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_12684 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_12684,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_12685 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_12685,args)),(((mfa_12685 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_12685,args)),"], 0))");
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
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_12686 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_12686," ? ",f__$1,fprop_12686,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_12686," ? ",f__$1,fprop_12686,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12687){
var map__12688 = p__12687;
var map__12688__$1 = ((((!((map__12688 == null)))?((((map__12688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12688):map__12688);
var ctor = cljs.core.get.call(null,map__12688__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__12688__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12688__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12690){
var map__12691 = p__12690;
var map__12691__$1 = ((((!((map__12691 == null)))?((((map__12691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12691):map__12691);
var target = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__12693 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12693__$1 = ((((!((map__12693 == null)))?((((map__12693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12693):map__12693);
var options = cljs.core.get.call(null,map__12693__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__12693__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12694 = options;
var map__12694__$1 = ((((!((map__12694 == null)))?((((map__12694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12694):map__12694);
var target = cljs.core.get.call(null,map__12694__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__12694__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12695 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12701 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12701__$1 = ((((!((map__12701 == null)))?((((map__12701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12701):map__12701);
var node_libs = cljs.core.get.call(null,map__12701__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12701__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__12695,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__12695,(1),null);
var map__12698 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__12698__$1 = ((((!((map__12698 == null)))?((((map__12698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12698):map__12698);
var global_exports_libs = cljs.core.get.call(null,map__12698__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__12698__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12704_12720 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__12705_12721 = null;
var count__12706_12722 = (0);
var i__12707_12723 = (0);
while(true){
if((i__12707_12723 < count__12706_12722)){
var lib_12724 = cljs.core._nth.call(null,chunk__12705_12721,i__12707_12723);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12724)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12724),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12724),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12724),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12724),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12724),"');");

}
}
}

var G__12725 = seq__12704_12720;
var G__12726 = chunk__12705_12721;
var G__12727 = count__12706_12722;
var G__12728 = (i__12707_12723 + (1));
seq__12704_12720 = G__12725;
chunk__12705_12721 = G__12726;
count__12706_12722 = G__12727;
i__12707_12723 = G__12728;
continue;
} else {
var temp__4657__auto___12729 = cljs.core.seq.call(null,seq__12704_12720);
if(temp__4657__auto___12729){
var seq__12704_12730__$1 = temp__4657__auto___12729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12704_12730__$1)){
var c__8507__auto___12731 = cljs.core.chunk_first.call(null,seq__12704_12730__$1);
var G__12732 = cljs.core.chunk_rest.call(null,seq__12704_12730__$1);
var G__12733 = c__8507__auto___12731;
var G__12734 = cljs.core.count.call(null,c__8507__auto___12731);
var G__12735 = (0);
seq__12704_12720 = G__12732;
chunk__12705_12721 = G__12733;
count__12706_12722 = G__12734;
i__12707_12723 = G__12735;
continue;
} else {
var lib_12736 = cljs.core.first.call(null,seq__12704_12730__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12736)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12736),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12736),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__7668__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12736),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12736),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12736),"');");

}
}
}

var G__12737 = cljs.core.next.call(null,seq__12704_12730__$1);
var G__12738 = null;
var G__12739 = (0);
var G__12740 = (0);
seq__12704_12720 = G__12737;
chunk__12705_12721 = G__12738;
count__12706_12722 = G__12739;
i__12707_12723 = G__12740;
continue;
}
} else {
}
}
break;
}

var seq__12708_12741 = cljs.core.seq.call(null,node_libs);
var chunk__12709_12742 = null;
var count__12710_12743 = (0);
var i__12711_12744 = (0);
while(true){
if((i__12711_12744 < count__12710_12743)){
var lib_12745 = cljs.core._nth.call(null,chunk__12709_12742,i__12711_12744);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12745)," = require('",lib_12745,"');");

var G__12746 = seq__12708_12741;
var G__12747 = chunk__12709_12742;
var G__12748 = count__12710_12743;
var G__12749 = (i__12711_12744 + (1));
seq__12708_12741 = G__12746;
chunk__12709_12742 = G__12747;
count__12710_12743 = G__12748;
i__12711_12744 = G__12749;
continue;
} else {
var temp__4657__auto___12750 = cljs.core.seq.call(null,seq__12708_12741);
if(temp__4657__auto___12750){
var seq__12708_12751__$1 = temp__4657__auto___12750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12708_12751__$1)){
var c__8507__auto___12752 = cljs.core.chunk_first.call(null,seq__12708_12751__$1);
var G__12753 = cljs.core.chunk_rest.call(null,seq__12708_12751__$1);
var G__12754 = c__8507__auto___12752;
var G__12755 = cljs.core.count.call(null,c__8507__auto___12752);
var G__12756 = (0);
seq__12708_12741 = G__12753;
chunk__12709_12742 = G__12754;
count__12710_12743 = G__12755;
i__12711_12744 = G__12756;
continue;
} else {
var lib_12757 = cljs.core.first.call(null,seq__12708_12751__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12757)," = require('",lib_12757,"');");

var G__12758 = cljs.core.next.call(null,seq__12708_12751__$1);
var G__12759 = null;
var G__12760 = (0);
var G__12761 = (0);
seq__12708_12741 = G__12758;
chunk__12709_12742 = G__12759;
count__12710_12743 = G__12760;
i__12711_12744 = G__12761;
continue;
}
} else {
}
}
break;
}

var seq__12712_12762 = cljs.core.seq.call(null,global_exports_libs);
var chunk__12713_12763 = null;
var count__12714_12764 = (0);
var i__12715_12765 = (0);
while(true){
if((i__12715_12765 < count__12714_12764)){
var lib_12766 = cljs.core._nth.call(null,chunk__12713_12763,i__12715_12765);
var map__12716_12767 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12766));
var map__12716_12768__$1 = ((((!((map__12716_12767 == null)))?((((map__12716_12767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12716_12767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12716_12767):map__12716_12767);
var global_exports_12769 = cljs.core.get.call(null,map__12716_12768__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_12766)," = goog.global.",cljs.core.get.call(null,global_exports_12769,cljs.core.symbol.call(null,lib_12766)),";");

var G__12770 = seq__12712_12762;
var G__12771 = chunk__12713_12763;
var G__12772 = count__12714_12764;
var G__12773 = (i__12715_12765 + (1));
seq__12712_12762 = G__12770;
chunk__12713_12763 = G__12771;
count__12714_12764 = G__12772;
i__12715_12765 = G__12773;
continue;
} else {
var temp__4657__auto___12774 = cljs.core.seq.call(null,seq__12712_12762);
if(temp__4657__auto___12774){
var seq__12712_12775__$1 = temp__4657__auto___12774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12712_12775__$1)){
var c__8507__auto___12776 = cljs.core.chunk_first.call(null,seq__12712_12775__$1);
var G__12777 = cljs.core.chunk_rest.call(null,seq__12712_12775__$1);
var G__12778 = c__8507__auto___12776;
var G__12779 = cljs.core.count.call(null,c__8507__auto___12776);
var G__12780 = (0);
seq__12712_12762 = G__12777;
chunk__12713_12763 = G__12778;
count__12714_12764 = G__12779;
i__12715_12765 = G__12780;
continue;
} else {
var lib_12781 = cljs.core.first.call(null,seq__12712_12775__$1);
var map__12718_12782 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12781));
var map__12718_12783__$1 = ((((!((map__12718_12782 == null)))?((((map__12718_12782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12718_12782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12718_12782):map__12718_12782);
var global_exports_12784 = cljs.core.get.call(null,map__12718_12783__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_12781)," = goog.global.",cljs.core.get.call(null,global_exports_12784,cljs.core.symbol.call(null,lib_12781)),";");

var G__12785 = cljs.core.next.call(null,seq__12712_12775__$1);
var G__12786 = null;
var G__12787 = (0);
var G__12788 = (0);
seq__12712_12762 = G__12785;
chunk__12713_12763 = G__12786;
count__12714_12764 = G__12787;
i__12715_12765 = G__12788;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12789){
var map__12790 = p__12789;
var map__12790__$1 = ((((!((map__12790 == null)))?((((map__12790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12790):map__12790);
var name = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12792){
var map__12793 = p__12792;
var map__12793__$1 = ((((!((map__12793 == null)))?((((map__12793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12793):map__12793);
var name = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__12795){
var map__12796 = p__12795;
var map__12796__$1 = ((((!((map__12796 == null)))?((((map__12796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12796):map__12796);
var t = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12798_12816 = cljs.core.seq.call(null,protocols);
var chunk__12799_12817 = null;
var count__12800_12818 = (0);
var i__12801_12819 = (0);
while(true){
if((i__12801_12819 < count__12800_12818)){
var protocol_12820 = cljs.core._nth.call(null,chunk__12799_12817,i__12801_12819);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12820)].join('')),"}");

var G__12821 = seq__12798_12816;
var G__12822 = chunk__12799_12817;
var G__12823 = count__12800_12818;
var G__12824 = (i__12801_12819 + (1));
seq__12798_12816 = G__12821;
chunk__12799_12817 = G__12822;
count__12800_12818 = G__12823;
i__12801_12819 = G__12824;
continue;
} else {
var temp__4657__auto___12825 = cljs.core.seq.call(null,seq__12798_12816);
if(temp__4657__auto___12825){
var seq__12798_12826__$1 = temp__4657__auto___12825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12798_12826__$1)){
var c__8507__auto___12827 = cljs.core.chunk_first.call(null,seq__12798_12826__$1);
var G__12828 = cljs.core.chunk_rest.call(null,seq__12798_12826__$1);
var G__12829 = c__8507__auto___12827;
var G__12830 = cljs.core.count.call(null,c__8507__auto___12827);
var G__12831 = (0);
seq__12798_12816 = G__12828;
chunk__12799_12817 = G__12829;
count__12800_12818 = G__12830;
i__12801_12819 = G__12831;
continue;
} else {
var protocol_12832 = cljs.core.first.call(null,seq__12798_12826__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12832)].join('')),"}");

var G__12833 = cljs.core.next.call(null,seq__12798_12826__$1);
var G__12834 = null;
var G__12835 = (0);
var G__12836 = (0);
seq__12798_12816 = G__12833;
chunk__12799_12817 = G__12834;
count__12800_12818 = G__12835;
i__12801_12819 = G__12836;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12802_12837 = cljs.core.seq.call(null,fields__$1);
var chunk__12803_12838 = null;
var count__12804_12839 = (0);
var i__12805_12840 = (0);
while(true){
if((i__12805_12840 < count__12804_12839)){
var fld_12841 = cljs.core._nth.call(null,chunk__12803_12838,i__12805_12840);
cljs.compiler.emitln.call(null,"this.",fld_12841," = ",fld_12841,";");

var G__12842 = seq__12802_12837;
var G__12843 = chunk__12803_12838;
var G__12844 = count__12804_12839;
var G__12845 = (i__12805_12840 + (1));
seq__12802_12837 = G__12842;
chunk__12803_12838 = G__12843;
count__12804_12839 = G__12844;
i__12805_12840 = G__12845;
continue;
} else {
var temp__4657__auto___12846 = cljs.core.seq.call(null,seq__12802_12837);
if(temp__4657__auto___12846){
var seq__12802_12847__$1 = temp__4657__auto___12846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12802_12847__$1)){
var c__8507__auto___12848 = cljs.core.chunk_first.call(null,seq__12802_12847__$1);
var G__12849 = cljs.core.chunk_rest.call(null,seq__12802_12847__$1);
var G__12850 = c__8507__auto___12848;
var G__12851 = cljs.core.count.call(null,c__8507__auto___12848);
var G__12852 = (0);
seq__12802_12837 = G__12849;
chunk__12803_12838 = G__12850;
count__12804_12839 = G__12851;
i__12805_12840 = G__12852;
continue;
} else {
var fld_12853 = cljs.core.first.call(null,seq__12802_12847__$1);
cljs.compiler.emitln.call(null,"this.",fld_12853," = ",fld_12853,";");

var G__12854 = cljs.core.next.call(null,seq__12802_12847__$1);
var G__12855 = null;
var G__12856 = (0);
var G__12857 = (0);
seq__12802_12837 = G__12854;
chunk__12803_12838 = G__12855;
count__12804_12839 = G__12856;
i__12805_12840 = G__12857;
continue;
}
} else {
}
}
break;
}

var seq__12806_12858 = cljs.core.seq.call(null,pmasks);
var chunk__12807_12859 = null;
var count__12808_12860 = (0);
var i__12809_12861 = (0);
while(true){
if((i__12809_12861 < count__12808_12860)){
var vec__12810_12862 = cljs.core._nth.call(null,chunk__12807_12859,i__12809_12861);
var pno_12863 = cljs.core.nth.call(null,vec__12810_12862,(0),null);
var pmask_12864 = cljs.core.nth.call(null,vec__12810_12862,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12863,"$ = ",pmask_12864,";");

var G__12865 = seq__12806_12858;
var G__12866 = chunk__12807_12859;
var G__12867 = count__12808_12860;
var G__12868 = (i__12809_12861 + (1));
seq__12806_12858 = G__12865;
chunk__12807_12859 = G__12866;
count__12808_12860 = G__12867;
i__12809_12861 = G__12868;
continue;
} else {
var temp__4657__auto___12869 = cljs.core.seq.call(null,seq__12806_12858);
if(temp__4657__auto___12869){
var seq__12806_12870__$1 = temp__4657__auto___12869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12806_12870__$1)){
var c__8507__auto___12871 = cljs.core.chunk_first.call(null,seq__12806_12870__$1);
var G__12872 = cljs.core.chunk_rest.call(null,seq__12806_12870__$1);
var G__12873 = c__8507__auto___12871;
var G__12874 = cljs.core.count.call(null,c__8507__auto___12871);
var G__12875 = (0);
seq__12806_12858 = G__12872;
chunk__12807_12859 = G__12873;
count__12808_12860 = G__12874;
i__12809_12861 = G__12875;
continue;
} else {
var vec__12813_12876 = cljs.core.first.call(null,seq__12806_12870__$1);
var pno_12877 = cljs.core.nth.call(null,vec__12813_12876,(0),null);
var pmask_12878 = cljs.core.nth.call(null,vec__12813_12876,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12877,"$ = ",pmask_12878,";");

var G__12879 = cljs.core.next.call(null,seq__12806_12870__$1);
var G__12880 = null;
var G__12881 = (0);
var G__12882 = (0);
seq__12806_12858 = G__12879;
chunk__12807_12859 = G__12880;
count__12808_12860 = G__12881;
i__12809_12861 = G__12882;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__12883){
var map__12884 = p__12883;
var map__12884__$1 = ((((!((map__12884 == null)))?((((map__12884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12884):map__12884);
var t = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12886_12904 = cljs.core.seq.call(null,protocols);
var chunk__12887_12905 = null;
var count__12888_12906 = (0);
var i__12889_12907 = (0);
while(true){
if((i__12889_12907 < count__12888_12906)){
var protocol_12908 = cljs.core._nth.call(null,chunk__12887_12905,i__12889_12907);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12908)].join('')),"}");

var G__12909 = seq__12886_12904;
var G__12910 = chunk__12887_12905;
var G__12911 = count__12888_12906;
var G__12912 = (i__12889_12907 + (1));
seq__12886_12904 = G__12909;
chunk__12887_12905 = G__12910;
count__12888_12906 = G__12911;
i__12889_12907 = G__12912;
continue;
} else {
var temp__4657__auto___12913 = cljs.core.seq.call(null,seq__12886_12904);
if(temp__4657__auto___12913){
var seq__12886_12914__$1 = temp__4657__auto___12913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12886_12914__$1)){
var c__8507__auto___12915 = cljs.core.chunk_first.call(null,seq__12886_12914__$1);
var G__12916 = cljs.core.chunk_rest.call(null,seq__12886_12914__$1);
var G__12917 = c__8507__auto___12915;
var G__12918 = cljs.core.count.call(null,c__8507__auto___12915);
var G__12919 = (0);
seq__12886_12904 = G__12916;
chunk__12887_12905 = G__12917;
count__12888_12906 = G__12918;
i__12889_12907 = G__12919;
continue;
} else {
var protocol_12920 = cljs.core.first.call(null,seq__12886_12914__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12920)].join('')),"}");

var G__12921 = cljs.core.next.call(null,seq__12886_12914__$1);
var G__12922 = null;
var G__12923 = (0);
var G__12924 = (0);
seq__12886_12904 = G__12921;
chunk__12887_12905 = G__12922;
count__12888_12906 = G__12923;
i__12889_12907 = G__12924;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12890_12925 = cljs.core.seq.call(null,fields__$1);
var chunk__12891_12926 = null;
var count__12892_12927 = (0);
var i__12893_12928 = (0);
while(true){
if((i__12893_12928 < count__12892_12927)){
var fld_12929 = cljs.core._nth.call(null,chunk__12891_12926,i__12893_12928);
cljs.compiler.emitln.call(null,"this.",fld_12929," = ",fld_12929,";");

var G__12930 = seq__12890_12925;
var G__12931 = chunk__12891_12926;
var G__12932 = count__12892_12927;
var G__12933 = (i__12893_12928 + (1));
seq__12890_12925 = G__12930;
chunk__12891_12926 = G__12931;
count__12892_12927 = G__12932;
i__12893_12928 = G__12933;
continue;
} else {
var temp__4657__auto___12934 = cljs.core.seq.call(null,seq__12890_12925);
if(temp__4657__auto___12934){
var seq__12890_12935__$1 = temp__4657__auto___12934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12890_12935__$1)){
var c__8507__auto___12936 = cljs.core.chunk_first.call(null,seq__12890_12935__$1);
var G__12937 = cljs.core.chunk_rest.call(null,seq__12890_12935__$1);
var G__12938 = c__8507__auto___12936;
var G__12939 = cljs.core.count.call(null,c__8507__auto___12936);
var G__12940 = (0);
seq__12890_12925 = G__12937;
chunk__12891_12926 = G__12938;
count__12892_12927 = G__12939;
i__12893_12928 = G__12940;
continue;
} else {
var fld_12941 = cljs.core.first.call(null,seq__12890_12935__$1);
cljs.compiler.emitln.call(null,"this.",fld_12941," = ",fld_12941,";");

var G__12942 = cljs.core.next.call(null,seq__12890_12935__$1);
var G__12943 = null;
var G__12944 = (0);
var G__12945 = (0);
seq__12890_12925 = G__12942;
chunk__12891_12926 = G__12943;
count__12892_12927 = G__12944;
i__12893_12928 = G__12945;
continue;
}
} else {
}
}
break;
}

var seq__12894_12946 = cljs.core.seq.call(null,pmasks);
var chunk__12895_12947 = null;
var count__12896_12948 = (0);
var i__12897_12949 = (0);
while(true){
if((i__12897_12949 < count__12896_12948)){
var vec__12898_12950 = cljs.core._nth.call(null,chunk__12895_12947,i__12897_12949);
var pno_12951 = cljs.core.nth.call(null,vec__12898_12950,(0),null);
var pmask_12952 = cljs.core.nth.call(null,vec__12898_12950,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12951,"$ = ",pmask_12952,";");

var G__12953 = seq__12894_12946;
var G__12954 = chunk__12895_12947;
var G__12955 = count__12896_12948;
var G__12956 = (i__12897_12949 + (1));
seq__12894_12946 = G__12953;
chunk__12895_12947 = G__12954;
count__12896_12948 = G__12955;
i__12897_12949 = G__12956;
continue;
} else {
var temp__4657__auto___12957 = cljs.core.seq.call(null,seq__12894_12946);
if(temp__4657__auto___12957){
var seq__12894_12958__$1 = temp__4657__auto___12957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12894_12958__$1)){
var c__8507__auto___12959 = cljs.core.chunk_first.call(null,seq__12894_12958__$1);
var G__12960 = cljs.core.chunk_rest.call(null,seq__12894_12958__$1);
var G__12961 = c__8507__auto___12959;
var G__12962 = cljs.core.count.call(null,c__8507__auto___12959);
var G__12963 = (0);
seq__12894_12946 = G__12960;
chunk__12895_12947 = G__12961;
count__12896_12948 = G__12962;
i__12897_12949 = G__12963;
continue;
} else {
var vec__12901_12964 = cljs.core.first.call(null,seq__12894_12958__$1);
var pno_12965 = cljs.core.nth.call(null,vec__12901_12964,(0),null);
var pmask_12966 = cljs.core.nth.call(null,vec__12901_12964,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12965,"$ = ",pmask_12966,";");

var G__12967 = cljs.core.next.call(null,seq__12894_12958__$1);
var G__12968 = null;
var G__12969 = (0);
var G__12970 = (0);
seq__12894_12946 = G__12967;
chunk__12895_12947 = G__12968;
count__12896_12948 = G__12969;
i__12897_12949 = G__12970;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__12971){
var map__12972 = p__12971;
var map__12972__$1 = ((((!((map__12972 == null)))?((((map__12972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12972):map__12972);
var target = cljs.core.get.call(null,map__12972__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__12972__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__12972__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__12972__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12972__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12974){
var map__12975 = p__12974;
var map__12975__$1 = ((((!((map__12975 == null)))?((((map__12975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12975):map__12975);
var op = cljs.core.get.call(null,map__12975__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__12975__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__12975__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__12975__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__12975__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__7656__auto__ = code;
if(cljs.core.truth_(and__7656__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__7656__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11891__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11891__auto__))){
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

var seq__12980 = cljs.core.seq.call(null,table);
var chunk__12981 = null;
var count__12982 = (0);
var i__12983 = (0);
while(true){
if((i__12983 < count__12982)){
var vec__12984 = cljs.core._nth.call(null,chunk__12981,i__12983);
var sym = cljs.core.nth.call(null,vec__12984,(0),null);
var value = cljs.core.nth.call(null,vec__12984,(1),null);
var ns_12990 = cljs.core.namespace.call(null,sym);
var name_12991 = cljs.core.name.call(null,sym);
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

var G__12992 = seq__12980;
var G__12993 = chunk__12981;
var G__12994 = count__12982;
var G__12995 = (i__12983 + (1));
seq__12980 = G__12992;
chunk__12981 = G__12993;
count__12982 = G__12994;
i__12983 = G__12995;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12980);
if(temp__4657__auto__){
var seq__12980__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12980__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__12980__$1);
var G__12996 = cljs.core.chunk_rest.call(null,seq__12980__$1);
var G__12997 = c__8507__auto__;
var G__12998 = cljs.core.count.call(null,c__8507__auto__);
var G__12999 = (0);
seq__12980 = G__12996;
chunk__12981 = G__12997;
count__12982 = G__12998;
i__12983 = G__12999;
continue;
} else {
var vec__12987 = cljs.core.first.call(null,seq__12980__$1);
var sym = cljs.core.nth.call(null,vec__12987,(0),null);
var value = cljs.core.nth.call(null,vec__12987,(1),null);
var ns_13000 = cljs.core.namespace.call(null,sym);
var name_13001 = cljs.core.name.call(null,sym);
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

var G__13002 = cljs.core.next.call(null,seq__12980__$1);
var G__13003 = null;
var G__13004 = (0);
var G__13005 = (0);
seq__12980 = G__13002;
chunk__12981 = G__13003;
count__12982 = G__13004;
i__12983 = G__13005;
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
var G__13007 = arguments.length;
switch (G__13007) {
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
var k_13012 = cljs.core.first.call(null,ks);
var vec__13008_13013 = cljs.core.conj.call(null,prefix,k_13012);
var top_13014 = cljs.core.nth.call(null,vec__13008_13013,(0),null);
var prefix_SINGLEQUOTE__13015 = vec__13008_13013;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_13012)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__13015) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_13014)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_13014)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__13015)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_13014);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__13015)),";");
}
} else {
}

var m_13016 = cljs.core.get.call(null,externs,k_13012);
if(cljs.core.empty_QMARK_.call(null,m_13016)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__13015,m_13016,top_level,known_externs);
}

var G__13017 = cljs.core.next.call(null,ks);
ks = G__13017;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1518330942829
