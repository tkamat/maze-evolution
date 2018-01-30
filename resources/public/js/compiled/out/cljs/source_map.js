// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__48922){
var vec__48923 = p__48922;
var i = cljs.core.nth.call(null,vec__48923,(0),null);
var v = cljs.core.nth.call(null,vec__48923,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__48926 = seg;
var gcol = cljs.core.nth.call(null,vec__48926,(0),null);
var source = cljs.core.nth.call(null,vec__48926,(1),null);
var line = cljs.core.nth.call(null,vec__48926,(2),null);
var col = cljs.core.nth.call(null,vec__48926,(3),null);
var name = cljs.core.nth.call(null,vec__48926,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__48929 = seg;
var gcol = cljs.core.nth.call(null,vec__48929,(0),null);
var source = cljs.core.nth.call(null,vec__48929,(1),null);
var line = cljs.core.nth.call(null,vec__48929,(2),null);
var col = cljs.core.nth.call(null,vec__48929,(3),null);
var name = cljs.core.nth.call(null,vec__48929,(4),null);
var vec__48932 = relseg;
var rgcol = cljs.core.nth.call(null,vec__48932,(0),null);
var rsource = cljs.core.nth.call(null,vec__48932,(1),null);
var rline = cljs.core.nth.call(null,vec__48932,(2),null);
var rcol = cljs.core.nth.call(null,vec__48932,(3),null);
var rname = cljs.core.nth.call(null,vec__48932,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__36308__auto__ = source;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__36308__auto__ = line;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__36308__auto__ = col;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__36308__auto__ = name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__48935 = segmap;
var map__48935__$1 = ((((!((map__48935 == null)))?((((map__48935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48935):map__48935);
var gcol = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__48935,map__48935__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__48935,map__48935__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__48935,map__48935__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__48935,map__48935__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__48935,map__48935__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__48935,map__48935__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__48938 = arguments.length;
switch (G__48938) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__48939 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__48943 = cljs.core.next.call(null,segs__$1);
var G__48944 = nrelseg;
var G__48945 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__48943;
relseg__$1 = G__48944;
result__$1 = G__48945;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__48939,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__48939,(1),null);
var G__48946 = (gline + (1));
var G__48947 = cljs.core.next.call(null,lines__$1);
var G__48948 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__48949 = result__$1;
gline = G__48946;
lines__$1 = G__48947;
relseg = G__48948;
result = G__48949;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__48951 = segmap;
var map__48951__$1 = ((((!((map__48951 == null)))?((((map__48951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48951):map__48951);
var gcol = cljs.core.get.call(null,map__48951__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__48951__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__48951__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__48951__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__48951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__48951,map__48951__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__48951,map__48951__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__48950_SHARP_){
return cljs.core.conj.call(null,p1__48950_SHARP_,d__$1);
});})(map__48951,map__48951__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__48951,map__48951__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__48954 = arguments.length;
switch (G__48954) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__48955 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__48959 = cljs.core.next.call(null,segs__$1);
var G__48960 = nrelseg;
var G__48961 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__48959;
relseg__$1 = G__48960;
result__$1 = G__48961;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__48955,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__48955,(1),null);
var G__48962 = (gline + (1));
var G__48963 = cljs.core.next.call(null,lines__$1);
var G__48964 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__48965 = result__$1;
gline = G__48962;
lines__$1 = G__48963;
relseg = G__48964;
result = G__48965;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__48966){
var vec__48967 = p__48966;
var _ = cljs.core.nth.call(null,vec__48967,(0),null);
var source = cljs.core.nth.call(null,vec__48967,(1),null);
var line = cljs.core.nth.call(null,vec__48967,(2),null);
var col = cljs.core.nth.call(null,vec__48967,(3),null);
var name = cljs.core.nth.call(null,vec__48967,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__48970){
var vec__48971 = p__48970;
var gcol = cljs.core.nth.call(null,vec__48971,(0),null);
var sidx = cljs.core.nth.call(null,vec__48971,(1),null);
var line = cljs.core.nth.call(null,vec__48971,(2),null);
var col = cljs.core.nth.call(null,vec__48971,(3),null);
var name = cljs.core.nth.call(null,vec__48971,(4),null);
var seg = vec__48971;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__48971,gcol,sidx,line,col,name,seg,relseg){
return (function (p__48974){
var vec__48975 = p__48974;
var _ = cljs.core.nth.call(null,vec__48975,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__48975,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__48975,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__48975,(3),null);
var lname = cljs.core.nth.call(null,vec__48975,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__36308__auto__ = name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__48971,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__36308__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__48981 = cljs.core.seq.call(null,infos);
var chunk__48982 = null;
var count__48983 = (0);
var i__48984 = (0);
while(true){
if((i__48984 < count__48983)){
var info = cljs.core._nth.call(null,chunk__48982,i__48984);
var segv_49063 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_49064 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_49065 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_49064 > (lc_49065 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__48981,chunk__48982,count__48983,i__48984,segv_49063,gline_49064,lc_49065,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_49064 - (lc_49065 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_49063], null));
});})(seq__48981,chunk__48982,count__48983,i__48984,segv_49063,gline_49064,lc_49065,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__48981,chunk__48982,count__48983,i__48984,segv_49063,gline_49064,lc_49065,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49064], null),cljs.core.conj,segv_49063);
});})(seq__48981,chunk__48982,count__48983,i__48984,segv_49063,gline_49064,lc_49065,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__49066 = seq__48981;
var G__49067 = chunk__48982;
var G__49068 = count__48983;
var G__49069 = (i__48984 + (1));
seq__48981 = G__49066;
chunk__48982 = G__49067;
count__48983 = G__49068;
i__48984 = G__49069;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48981);
if(temp__4657__auto__){
var seq__48981__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48981__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__48981__$1);
var G__49070 = cljs.core.chunk_rest.call(null,seq__48981__$1);
var G__49071 = c__37147__auto__;
var G__49072 = cljs.core.count.call(null,c__37147__auto__);
var G__49073 = (0);
seq__48981 = G__49070;
chunk__48982 = G__49071;
count__48983 = G__49072;
i__48984 = G__49073;
continue;
} else {
var info = cljs.core.first.call(null,seq__48981__$1);
var segv_49074 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_49075 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_49076 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_49075 > (lc_49076 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__48981,chunk__48982,count__48983,i__48984,segv_49074,gline_49075,lc_49076,info,seq__48981__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_49075 - (lc_49076 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_49074], null));
});})(seq__48981,chunk__48982,count__48983,i__48984,segv_49074,gline_49075,lc_49076,info,seq__48981__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__48981,chunk__48982,count__48983,i__48984,segv_49074,gline_49075,lc_49076,info,seq__48981__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49075], null),cljs.core.conj,segv_49074);
});})(seq__48981,chunk__48982,count__48983,i__48984,segv_49074,gline_49075,lc_49076,info,seq__48981__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__49077 = cljs.core.next.call(null,seq__48981__$1);
var G__49078 = null;
var G__49079 = (0);
var G__49080 = (0);
seq__48981 = G__49077;
chunk__48982 = G__49078;
count__48983 = G__49079;
i__48984 = G__49080;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__48985_49081 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__48986_49082 = null;
var count__48987_49083 = (0);
var i__48988_49084 = (0);
while(true){
if((i__48988_49084 < count__48987_49083)){
var vec__48989_49085 = cljs.core._nth.call(null,chunk__48986_49082,i__48988_49084);
var source_idx_49086 = cljs.core.nth.call(null,vec__48989_49085,(0),null);
var vec__48992_49087 = cljs.core.nth.call(null,vec__48989_49085,(1),null);
var __49088 = cljs.core.nth.call(null,vec__48992_49087,(0),null);
var lines_49089__$1 = cljs.core.nth.call(null,vec__48992_49087,(1),null);
var seq__48995_49090 = cljs.core.seq.call(null,lines_49089__$1);
var chunk__48996_49091 = null;
var count__48997_49092 = (0);
var i__48998_49093 = (0);
while(true){
if((i__48998_49093 < count__48997_49092)){
var vec__48999_49094 = cljs.core._nth.call(null,chunk__48996_49091,i__48998_49093);
var line_49095 = cljs.core.nth.call(null,vec__48999_49094,(0),null);
var cols_49096 = cljs.core.nth.call(null,vec__48999_49094,(1),null);
var seq__49002_49097 = cljs.core.seq.call(null,cols_49096);
var chunk__49003_49098 = null;
var count__49004_49099 = (0);
var i__49005_49100 = (0);
while(true){
if((i__49005_49100 < count__49004_49099)){
var vec__49006_49101 = cljs.core._nth.call(null,chunk__49003_49098,i__49005_49100);
var col_49102 = cljs.core.nth.call(null,vec__49006_49101,(0),null);
var infos_49103 = cljs.core.nth.call(null,vec__49006_49101,(1),null);
encode_cols.call(null,infos_49103,source_idx_49086,line_49095,col_49102);

var G__49104 = seq__49002_49097;
var G__49105 = chunk__49003_49098;
var G__49106 = count__49004_49099;
var G__49107 = (i__49005_49100 + (1));
seq__49002_49097 = G__49104;
chunk__49003_49098 = G__49105;
count__49004_49099 = G__49106;
i__49005_49100 = G__49107;
continue;
} else {
var temp__4657__auto___49108 = cljs.core.seq.call(null,seq__49002_49097);
if(temp__4657__auto___49108){
var seq__49002_49109__$1 = temp__4657__auto___49108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49002_49109__$1)){
var c__37147__auto___49110 = cljs.core.chunk_first.call(null,seq__49002_49109__$1);
var G__49111 = cljs.core.chunk_rest.call(null,seq__49002_49109__$1);
var G__49112 = c__37147__auto___49110;
var G__49113 = cljs.core.count.call(null,c__37147__auto___49110);
var G__49114 = (0);
seq__49002_49097 = G__49111;
chunk__49003_49098 = G__49112;
count__49004_49099 = G__49113;
i__49005_49100 = G__49114;
continue;
} else {
var vec__49009_49115 = cljs.core.first.call(null,seq__49002_49109__$1);
var col_49116 = cljs.core.nth.call(null,vec__49009_49115,(0),null);
var infos_49117 = cljs.core.nth.call(null,vec__49009_49115,(1),null);
encode_cols.call(null,infos_49117,source_idx_49086,line_49095,col_49116);

var G__49118 = cljs.core.next.call(null,seq__49002_49109__$1);
var G__49119 = null;
var G__49120 = (0);
var G__49121 = (0);
seq__49002_49097 = G__49118;
chunk__49003_49098 = G__49119;
count__49004_49099 = G__49120;
i__49005_49100 = G__49121;
continue;
}
} else {
}
}
break;
}

var G__49122 = seq__48995_49090;
var G__49123 = chunk__48996_49091;
var G__49124 = count__48997_49092;
var G__49125 = (i__48998_49093 + (1));
seq__48995_49090 = G__49122;
chunk__48996_49091 = G__49123;
count__48997_49092 = G__49124;
i__48998_49093 = G__49125;
continue;
} else {
var temp__4657__auto___49126 = cljs.core.seq.call(null,seq__48995_49090);
if(temp__4657__auto___49126){
var seq__48995_49127__$1 = temp__4657__auto___49126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48995_49127__$1)){
var c__37147__auto___49128 = cljs.core.chunk_first.call(null,seq__48995_49127__$1);
var G__49129 = cljs.core.chunk_rest.call(null,seq__48995_49127__$1);
var G__49130 = c__37147__auto___49128;
var G__49131 = cljs.core.count.call(null,c__37147__auto___49128);
var G__49132 = (0);
seq__48995_49090 = G__49129;
chunk__48996_49091 = G__49130;
count__48997_49092 = G__49131;
i__48998_49093 = G__49132;
continue;
} else {
var vec__49012_49133 = cljs.core.first.call(null,seq__48995_49127__$1);
var line_49134 = cljs.core.nth.call(null,vec__49012_49133,(0),null);
var cols_49135 = cljs.core.nth.call(null,vec__49012_49133,(1),null);
var seq__49015_49136 = cljs.core.seq.call(null,cols_49135);
var chunk__49016_49137 = null;
var count__49017_49138 = (0);
var i__49018_49139 = (0);
while(true){
if((i__49018_49139 < count__49017_49138)){
var vec__49019_49140 = cljs.core._nth.call(null,chunk__49016_49137,i__49018_49139);
var col_49141 = cljs.core.nth.call(null,vec__49019_49140,(0),null);
var infos_49142 = cljs.core.nth.call(null,vec__49019_49140,(1),null);
encode_cols.call(null,infos_49142,source_idx_49086,line_49134,col_49141);

var G__49143 = seq__49015_49136;
var G__49144 = chunk__49016_49137;
var G__49145 = count__49017_49138;
var G__49146 = (i__49018_49139 + (1));
seq__49015_49136 = G__49143;
chunk__49016_49137 = G__49144;
count__49017_49138 = G__49145;
i__49018_49139 = G__49146;
continue;
} else {
var temp__4657__auto___49147__$1 = cljs.core.seq.call(null,seq__49015_49136);
if(temp__4657__auto___49147__$1){
var seq__49015_49148__$1 = temp__4657__auto___49147__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49015_49148__$1)){
var c__37147__auto___49149 = cljs.core.chunk_first.call(null,seq__49015_49148__$1);
var G__49150 = cljs.core.chunk_rest.call(null,seq__49015_49148__$1);
var G__49151 = c__37147__auto___49149;
var G__49152 = cljs.core.count.call(null,c__37147__auto___49149);
var G__49153 = (0);
seq__49015_49136 = G__49150;
chunk__49016_49137 = G__49151;
count__49017_49138 = G__49152;
i__49018_49139 = G__49153;
continue;
} else {
var vec__49022_49154 = cljs.core.first.call(null,seq__49015_49148__$1);
var col_49155 = cljs.core.nth.call(null,vec__49022_49154,(0),null);
var infos_49156 = cljs.core.nth.call(null,vec__49022_49154,(1),null);
encode_cols.call(null,infos_49156,source_idx_49086,line_49134,col_49155);

var G__49157 = cljs.core.next.call(null,seq__49015_49148__$1);
var G__49158 = null;
var G__49159 = (0);
var G__49160 = (0);
seq__49015_49136 = G__49157;
chunk__49016_49137 = G__49158;
count__49017_49138 = G__49159;
i__49018_49139 = G__49160;
continue;
}
} else {
}
}
break;
}

var G__49161 = cljs.core.next.call(null,seq__48995_49127__$1);
var G__49162 = null;
var G__49163 = (0);
var G__49164 = (0);
seq__48995_49090 = G__49161;
chunk__48996_49091 = G__49162;
count__48997_49092 = G__49163;
i__48998_49093 = G__49164;
continue;
}
} else {
}
}
break;
}

var G__49165 = seq__48985_49081;
var G__49166 = chunk__48986_49082;
var G__49167 = count__48987_49083;
var G__49168 = (i__48988_49084 + (1));
seq__48985_49081 = G__49165;
chunk__48986_49082 = G__49166;
count__48987_49083 = G__49167;
i__48988_49084 = G__49168;
continue;
} else {
var temp__4657__auto___49169 = cljs.core.seq.call(null,seq__48985_49081);
if(temp__4657__auto___49169){
var seq__48985_49170__$1 = temp__4657__auto___49169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48985_49170__$1)){
var c__37147__auto___49171 = cljs.core.chunk_first.call(null,seq__48985_49170__$1);
var G__49172 = cljs.core.chunk_rest.call(null,seq__48985_49170__$1);
var G__49173 = c__37147__auto___49171;
var G__49174 = cljs.core.count.call(null,c__37147__auto___49171);
var G__49175 = (0);
seq__48985_49081 = G__49172;
chunk__48986_49082 = G__49173;
count__48987_49083 = G__49174;
i__48988_49084 = G__49175;
continue;
} else {
var vec__49025_49176 = cljs.core.first.call(null,seq__48985_49170__$1);
var source_idx_49177 = cljs.core.nth.call(null,vec__49025_49176,(0),null);
var vec__49028_49178 = cljs.core.nth.call(null,vec__49025_49176,(1),null);
var __49179 = cljs.core.nth.call(null,vec__49028_49178,(0),null);
var lines_49180__$1 = cljs.core.nth.call(null,vec__49028_49178,(1),null);
var seq__49031_49181 = cljs.core.seq.call(null,lines_49180__$1);
var chunk__49032_49182 = null;
var count__49033_49183 = (0);
var i__49034_49184 = (0);
while(true){
if((i__49034_49184 < count__49033_49183)){
var vec__49035_49185 = cljs.core._nth.call(null,chunk__49032_49182,i__49034_49184);
var line_49186 = cljs.core.nth.call(null,vec__49035_49185,(0),null);
var cols_49187 = cljs.core.nth.call(null,vec__49035_49185,(1),null);
var seq__49038_49188 = cljs.core.seq.call(null,cols_49187);
var chunk__49039_49189 = null;
var count__49040_49190 = (0);
var i__49041_49191 = (0);
while(true){
if((i__49041_49191 < count__49040_49190)){
var vec__49042_49192 = cljs.core._nth.call(null,chunk__49039_49189,i__49041_49191);
var col_49193 = cljs.core.nth.call(null,vec__49042_49192,(0),null);
var infos_49194 = cljs.core.nth.call(null,vec__49042_49192,(1),null);
encode_cols.call(null,infos_49194,source_idx_49177,line_49186,col_49193);

var G__49195 = seq__49038_49188;
var G__49196 = chunk__49039_49189;
var G__49197 = count__49040_49190;
var G__49198 = (i__49041_49191 + (1));
seq__49038_49188 = G__49195;
chunk__49039_49189 = G__49196;
count__49040_49190 = G__49197;
i__49041_49191 = G__49198;
continue;
} else {
var temp__4657__auto___49199__$1 = cljs.core.seq.call(null,seq__49038_49188);
if(temp__4657__auto___49199__$1){
var seq__49038_49200__$1 = temp__4657__auto___49199__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49038_49200__$1)){
var c__37147__auto___49201 = cljs.core.chunk_first.call(null,seq__49038_49200__$1);
var G__49202 = cljs.core.chunk_rest.call(null,seq__49038_49200__$1);
var G__49203 = c__37147__auto___49201;
var G__49204 = cljs.core.count.call(null,c__37147__auto___49201);
var G__49205 = (0);
seq__49038_49188 = G__49202;
chunk__49039_49189 = G__49203;
count__49040_49190 = G__49204;
i__49041_49191 = G__49205;
continue;
} else {
var vec__49045_49206 = cljs.core.first.call(null,seq__49038_49200__$1);
var col_49207 = cljs.core.nth.call(null,vec__49045_49206,(0),null);
var infos_49208 = cljs.core.nth.call(null,vec__49045_49206,(1),null);
encode_cols.call(null,infos_49208,source_idx_49177,line_49186,col_49207);

var G__49209 = cljs.core.next.call(null,seq__49038_49200__$1);
var G__49210 = null;
var G__49211 = (0);
var G__49212 = (0);
seq__49038_49188 = G__49209;
chunk__49039_49189 = G__49210;
count__49040_49190 = G__49211;
i__49041_49191 = G__49212;
continue;
}
} else {
}
}
break;
}

var G__49213 = seq__49031_49181;
var G__49214 = chunk__49032_49182;
var G__49215 = count__49033_49183;
var G__49216 = (i__49034_49184 + (1));
seq__49031_49181 = G__49213;
chunk__49032_49182 = G__49214;
count__49033_49183 = G__49215;
i__49034_49184 = G__49216;
continue;
} else {
var temp__4657__auto___49217__$1 = cljs.core.seq.call(null,seq__49031_49181);
if(temp__4657__auto___49217__$1){
var seq__49031_49218__$1 = temp__4657__auto___49217__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49031_49218__$1)){
var c__37147__auto___49219 = cljs.core.chunk_first.call(null,seq__49031_49218__$1);
var G__49220 = cljs.core.chunk_rest.call(null,seq__49031_49218__$1);
var G__49221 = c__37147__auto___49219;
var G__49222 = cljs.core.count.call(null,c__37147__auto___49219);
var G__49223 = (0);
seq__49031_49181 = G__49220;
chunk__49032_49182 = G__49221;
count__49033_49183 = G__49222;
i__49034_49184 = G__49223;
continue;
} else {
var vec__49048_49224 = cljs.core.first.call(null,seq__49031_49218__$1);
var line_49225 = cljs.core.nth.call(null,vec__49048_49224,(0),null);
var cols_49226 = cljs.core.nth.call(null,vec__49048_49224,(1),null);
var seq__49051_49227 = cljs.core.seq.call(null,cols_49226);
var chunk__49052_49228 = null;
var count__49053_49229 = (0);
var i__49054_49230 = (0);
while(true){
if((i__49054_49230 < count__49053_49229)){
var vec__49055_49231 = cljs.core._nth.call(null,chunk__49052_49228,i__49054_49230);
var col_49232 = cljs.core.nth.call(null,vec__49055_49231,(0),null);
var infos_49233 = cljs.core.nth.call(null,vec__49055_49231,(1),null);
encode_cols.call(null,infos_49233,source_idx_49177,line_49225,col_49232);

var G__49234 = seq__49051_49227;
var G__49235 = chunk__49052_49228;
var G__49236 = count__49053_49229;
var G__49237 = (i__49054_49230 + (1));
seq__49051_49227 = G__49234;
chunk__49052_49228 = G__49235;
count__49053_49229 = G__49236;
i__49054_49230 = G__49237;
continue;
} else {
var temp__4657__auto___49238__$2 = cljs.core.seq.call(null,seq__49051_49227);
if(temp__4657__auto___49238__$2){
var seq__49051_49239__$1 = temp__4657__auto___49238__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49051_49239__$1)){
var c__37147__auto___49240 = cljs.core.chunk_first.call(null,seq__49051_49239__$1);
var G__49241 = cljs.core.chunk_rest.call(null,seq__49051_49239__$1);
var G__49242 = c__37147__auto___49240;
var G__49243 = cljs.core.count.call(null,c__37147__auto___49240);
var G__49244 = (0);
seq__49051_49227 = G__49241;
chunk__49052_49228 = G__49242;
count__49053_49229 = G__49243;
i__49054_49230 = G__49244;
continue;
} else {
var vec__49058_49245 = cljs.core.first.call(null,seq__49051_49239__$1);
var col_49246 = cljs.core.nth.call(null,vec__49058_49245,(0),null);
var infos_49247 = cljs.core.nth.call(null,vec__49058_49245,(1),null);
encode_cols.call(null,infos_49247,source_idx_49177,line_49225,col_49246);

var G__49248 = cljs.core.next.call(null,seq__49051_49239__$1);
var G__49249 = null;
var G__49250 = (0);
var G__49251 = (0);
seq__49051_49227 = G__49248;
chunk__49052_49228 = G__49249;
count__49053_49229 = G__49250;
i__49054_49230 = G__49251;
continue;
}
} else {
}
}
break;
}

var G__49252 = cljs.core.next.call(null,seq__49031_49218__$1);
var G__49253 = null;
var G__49254 = (0);
var G__49255 = (0);
seq__49031_49181 = G__49252;
chunk__49032_49182 = G__49253;
count__49033_49183 = G__49254;
i__49034_49184 = G__49255;
continue;
}
} else {
}
}
break;
}

var G__49256 = cljs.core.next.call(null,seq__48985_49170__$1);
var G__49257 = null;
var G__49258 = (0);
var G__49259 = (0);
seq__48985_49081 = G__49256;
chunk__48986_49082 = G__49257;
count__48987_49083 = G__49258;
i__48988_49084 = G__49259;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__49061 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__48978_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48978_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__48979_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__48979_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__48980_SHARP_){
return clojure.string.join.call(null,",",p1__48980_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__49062 = G__49061;
goog.object.set(G__49062,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__49062;
} else {
return G__49061;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__49260 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__49260,(0),null);
var col_map = cljs.core.nth.call(null,vec__49260,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__49263 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__49263,(0),null);
var infos = cljs.core.nth.call(null,vec__49263,(1),null);
var G__49269 = cljs.core.next.call(null,col_map_seq);
var G__49270 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__49263,col,infos,vec__49260,line,col_map){
return (function (v,p__49266){
var map__49267 = p__49266;
var map__49267__$1 = ((((!((map__49267 == null)))?((((map__49267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49267):map__49267);
var gline = cljs.core.get.call(null,map__49267__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__49267__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__49263,col,infos,vec__49260,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__49269;
new_cols = G__49270;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__49271 = cljs.core.next.call(null,line_map_seq);
var G__49272 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__49271;
new_lines = G__49272;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__49273_49335 = cljs.core.seq.call(null,reverse_map);
var chunk__49274_49336 = null;
var count__49275_49337 = (0);
var i__49276_49338 = (0);
while(true){
if((i__49276_49338 < count__49275_49337)){
var vec__49277_49339 = cljs.core._nth.call(null,chunk__49274_49336,i__49276_49338);
var line_49340 = cljs.core.nth.call(null,vec__49277_49339,(0),null);
var columns_49341 = cljs.core.nth.call(null,vec__49277_49339,(1),null);
var seq__49280_49342 = cljs.core.seq.call(null,columns_49341);
var chunk__49281_49343 = null;
var count__49282_49344 = (0);
var i__49283_49345 = (0);
while(true){
if((i__49283_49345 < count__49282_49344)){
var vec__49284_49346 = cljs.core._nth.call(null,chunk__49281_49343,i__49283_49345);
var column_49347 = cljs.core.nth.call(null,vec__49284_49346,(0),null);
var column_info_49348 = cljs.core.nth.call(null,vec__49284_49346,(1),null);
var seq__49287_49349 = cljs.core.seq.call(null,column_info_49348);
var chunk__49288_49350 = null;
var count__49289_49351 = (0);
var i__49290_49352 = (0);
while(true){
if((i__49290_49352 < count__49289_49351)){
var map__49291_49353 = cljs.core._nth.call(null,chunk__49288_49350,i__49290_49352);
var map__49291_49354__$1 = ((((!((map__49291_49353 == null)))?((((map__49291_49353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49291_49353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49291_49353):map__49291_49353);
var gline_49355 = cljs.core.get.call(null,map__49291_49354__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49356 = cljs.core.get.call(null,map__49291_49354__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49357 = cljs.core.get.call(null,map__49291_49354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49355], null),cljs.core.fnil.call(null,((function (seq__49287_49349,chunk__49288_49350,count__49289_49351,i__49290_49352,seq__49280_49342,chunk__49281_49343,count__49282_49344,i__49283_49345,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49291_49353,map__49291_49354__$1,gline_49355,gcol_49356,name_49357,vec__49284_49346,column_49347,column_info_49348,vec__49277_49339,line_49340,columns_49341,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49356], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49340,new cljs.core.Keyword(null,"col","col",-1959363084),column_49347,new cljs.core.Keyword(null,"name","name",1843675177),name_49357], null));
});})(seq__49287_49349,chunk__49288_49350,count__49289_49351,i__49290_49352,seq__49280_49342,chunk__49281_49343,count__49282_49344,i__49283_49345,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49291_49353,map__49291_49354__$1,gline_49355,gcol_49356,name_49357,vec__49284_49346,column_49347,column_info_49348,vec__49277_49339,line_49340,columns_49341,inverted))
,cljs.core.sorted_map.call(null)));

var G__49358 = seq__49287_49349;
var G__49359 = chunk__49288_49350;
var G__49360 = count__49289_49351;
var G__49361 = (i__49290_49352 + (1));
seq__49287_49349 = G__49358;
chunk__49288_49350 = G__49359;
count__49289_49351 = G__49360;
i__49290_49352 = G__49361;
continue;
} else {
var temp__4657__auto___49362 = cljs.core.seq.call(null,seq__49287_49349);
if(temp__4657__auto___49362){
var seq__49287_49363__$1 = temp__4657__auto___49362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49287_49363__$1)){
var c__37147__auto___49364 = cljs.core.chunk_first.call(null,seq__49287_49363__$1);
var G__49365 = cljs.core.chunk_rest.call(null,seq__49287_49363__$1);
var G__49366 = c__37147__auto___49364;
var G__49367 = cljs.core.count.call(null,c__37147__auto___49364);
var G__49368 = (0);
seq__49287_49349 = G__49365;
chunk__49288_49350 = G__49366;
count__49289_49351 = G__49367;
i__49290_49352 = G__49368;
continue;
} else {
var map__49293_49369 = cljs.core.first.call(null,seq__49287_49363__$1);
var map__49293_49370__$1 = ((((!((map__49293_49369 == null)))?((((map__49293_49369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49293_49369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49293_49369):map__49293_49369);
var gline_49371 = cljs.core.get.call(null,map__49293_49370__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49372 = cljs.core.get.call(null,map__49293_49370__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49373 = cljs.core.get.call(null,map__49293_49370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49371], null),cljs.core.fnil.call(null,((function (seq__49287_49349,chunk__49288_49350,count__49289_49351,i__49290_49352,seq__49280_49342,chunk__49281_49343,count__49282_49344,i__49283_49345,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49293_49369,map__49293_49370__$1,gline_49371,gcol_49372,name_49373,seq__49287_49363__$1,temp__4657__auto___49362,vec__49284_49346,column_49347,column_info_49348,vec__49277_49339,line_49340,columns_49341,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49372], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49340,new cljs.core.Keyword(null,"col","col",-1959363084),column_49347,new cljs.core.Keyword(null,"name","name",1843675177),name_49373], null));
});})(seq__49287_49349,chunk__49288_49350,count__49289_49351,i__49290_49352,seq__49280_49342,chunk__49281_49343,count__49282_49344,i__49283_49345,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49293_49369,map__49293_49370__$1,gline_49371,gcol_49372,name_49373,seq__49287_49363__$1,temp__4657__auto___49362,vec__49284_49346,column_49347,column_info_49348,vec__49277_49339,line_49340,columns_49341,inverted))
,cljs.core.sorted_map.call(null)));

var G__49374 = cljs.core.next.call(null,seq__49287_49363__$1);
var G__49375 = null;
var G__49376 = (0);
var G__49377 = (0);
seq__49287_49349 = G__49374;
chunk__49288_49350 = G__49375;
count__49289_49351 = G__49376;
i__49290_49352 = G__49377;
continue;
}
} else {
}
}
break;
}

var G__49378 = seq__49280_49342;
var G__49379 = chunk__49281_49343;
var G__49380 = count__49282_49344;
var G__49381 = (i__49283_49345 + (1));
seq__49280_49342 = G__49378;
chunk__49281_49343 = G__49379;
count__49282_49344 = G__49380;
i__49283_49345 = G__49381;
continue;
} else {
var temp__4657__auto___49382 = cljs.core.seq.call(null,seq__49280_49342);
if(temp__4657__auto___49382){
var seq__49280_49383__$1 = temp__4657__auto___49382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49280_49383__$1)){
var c__37147__auto___49384 = cljs.core.chunk_first.call(null,seq__49280_49383__$1);
var G__49385 = cljs.core.chunk_rest.call(null,seq__49280_49383__$1);
var G__49386 = c__37147__auto___49384;
var G__49387 = cljs.core.count.call(null,c__37147__auto___49384);
var G__49388 = (0);
seq__49280_49342 = G__49385;
chunk__49281_49343 = G__49386;
count__49282_49344 = G__49387;
i__49283_49345 = G__49388;
continue;
} else {
var vec__49295_49389 = cljs.core.first.call(null,seq__49280_49383__$1);
var column_49390 = cljs.core.nth.call(null,vec__49295_49389,(0),null);
var column_info_49391 = cljs.core.nth.call(null,vec__49295_49389,(1),null);
var seq__49298_49392 = cljs.core.seq.call(null,column_info_49391);
var chunk__49299_49393 = null;
var count__49300_49394 = (0);
var i__49301_49395 = (0);
while(true){
if((i__49301_49395 < count__49300_49394)){
var map__49302_49396 = cljs.core._nth.call(null,chunk__49299_49393,i__49301_49395);
var map__49302_49397__$1 = ((((!((map__49302_49396 == null)))?((((map__49302_49396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49302_49396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49302_49396):map__49302_49396);
var gline_49398 = cljs.core.get.call(null,map__49302_49397__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49399 = cljs.core.get.call(null,map__49302_49397__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49400 = cljs.core.get.call(null,map__49302_49397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49398], null),cljs.core.fnil.call(null,((function (seq__49298_49392,chunk__49299_49393,count__49300_49394,i__49301_49395,seq__49280_49342,chunk__49281_49343,count__49282_49344,i__49283_49345,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49302_49396,map__49302_49397__$1,gline_49398,gcol_49399,name_49400,vec__49295_49389,column_49390,column_info_49391,seq__49280_49383__$1,temp__4657__auto___49382,vec__49277_49339,line_49340,columns_49341,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49399], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49340,new cljs.core.Keyword(null,"col","col",-1959363084),column_49390,new cljs.core.Keyword(null,"name","name",1843675177),name_49400], null));
});})(seq__49298_49392,chunk__49299_49393,count__49300_49394,i__49301_49395,seq__49280_49342,chunk__49281_49343,count__49282_49344,i__49283_49345,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49302_49396,map__49302_49397__$1,gline_49398,gcol_49399,name_49400,vec__49295_49389,column_49390,column_info_49391,seq__49280_49383__$1,temp__4657__auto___49382,vec__49277_49339,line_49340,columns_49341,inverted))
,cljs.core.sorted_map.call(null)));

var G__49401 = seq__49298_49392;
var G__49402 = chunk__49299_49393;
var G__49403 = count__49300_49394;
var G__49404 = (i__49301_49395 + (1));
seq__49298_49392 = G__49401;
chunk__49299_49393 = G__49402;
count__49300_49394 = G__49403;
i__49301_49395 = G__49404;
continue;
} else {
var temp__4657__auto___49405__$1 = cljs.core.seq.call(null,seq__49298_49392);
if(temp__4657__auto___49405__$1){
var seq__49298_49406__$1 = temp__4657__auto___49405__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49298_49406__$1)){
var c__37147__auto___49407 = cljs.core.chunk_first.call(null,seq__49298_49406__$1);
var G__49408 = cljs.core.chunk_rest.call(null,seq__49298_49406__$1);
var G__49409 = c__37147__auto___49407;
var G__49410 = cljs.core.count.call(null,c__37147__auto___49407);
var G__49411 = (0);
seq__49298_49392 = G__49408;
chunk__49299_49393 = G__49409;
count__49300_49394 = G__49410;
i__49301_49395 = G__49411;
continue;
} else {
var map__49304_49412 = cljs.core.first.call(null,seq__49298_49406__$1);
var map__49304_49413__$1 = ((((!((map__49304_49412 == null)))?((((map__49304_49412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49304_49412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49304_49412):map__49304_49412);
var gline_49414 = cljs.core.get.call(null,map__49304_49413__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49415 = cljs.core.get.call(null,map__49304_49413__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49416 = cljs.core.get.call(null,map__49304_49413__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49414], null),cljs.core.fnil.call(null,((function (seq__49298_49392,chunk__49299_49393,count__49300_49394,i__49301_49395,seq__49280_49342,chunk__49281_49343,count__49282_49344,i__49283_49345,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49304_49412,map__49304_49413__$1,gline_49414,gcol_49415,name_49416,seq__49298_49406__$1,temp__4657__auto___49405__$1,vec__49295_49389,column_49390,column_info_49391,seq__49280_49383__$1,temp__4657__auto___49382,vec__49277_49339,line_49340,columns_49341,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49415], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49340,new cljs.core.Keyword(null,"col","col",-1959363084),column_49390,new cljs.core.Keyword(null,"name","name",1843675177),name_49416], null));
});})(seq__49298_49392,chunk__49299_49393,count__49300_49394,i__49301_49395,seq__49280_49342,chunk__49281_49343,count__49282_49344,i__49283_49345,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49304_49412,map__49304_49413__$1,gline_49414,gcol_49415,name_49416,seq__49298_49406__$1,temp__4657__auto___49405__$1,vec__49295_49389,column_49390,column_info_49391,seq__49280_49383__$1,temp__4657__auto___49382,vec__49277_49339,line_49340,columns_49341,inverted))
,cljs.core.sorted_map.call(null)));

var G__49417 = cljs.core.next.call(null,seq__49298_49406__$1);
var G__49418 = null;
var G__49419 = (0);
var G__49420 = (0);
seq__49298_49392 = G__49417;
chunk__49299_49393 = G__49418;
count__49300_49394 = G__49419;
i__49301_49395 = G__49420;
continue;
}
} else {
}
}
break;
}

var G__49421 = cljs.core.next.call(null,seq__49280_49383__$1);
var G__49422 = null;
var G__49423 = (0);
var G__49424 = (0);
seq__49280_49342 = G__49421;
chunk__49281_49343 = G__49422;
count__49282_49344 = G__49423;
i__49283_49345 = G__49424;
continue;
}
} else {
}
}
break;
}

var G__49425 = seq__49273_49335;
var G__49426 = chunk__49274_49336;
var G__49427 = count__49275_49337;
var G__49428 = (i__49276_49338 + (1));
seq__49273_49335 = G__49425;
chunk__49274_49336 = G__49426;
count__49275_49337 = G__49427;
i__49276_49338 = G__49428;
continue;
} else {
var temp__4657__auto___49429 = cljs.core.seq.call(null,seq__49273_49335);
if(temp__4657__auto___49429){
var seq__49273_49430__$1 = temp__4657__auto___49429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49273_49430__$1)){
var c__37147__auto___49431 = cljs.core.chunk_first.call(null,seq__49273_49430__$1);
var G__49432 = cljs.core.chunk_rest.call(null,seq__49273_49430__$1);
var G__49433 = c__37147__auto___49431;
var G__49434 = cljs.core.count.call(null,c__37147__auto___49431);
var G__49435 = (0);
seq__49273_49335 = G__49432;
chunk__49274_49336 = G__49433;
count__49275_49337 = G__49434;
i__49276_49338 = G__49435;
continue;
} else {
var vec__49306_49436 = cljs.core.first.call(null,seq__49273_49430__$1);
var line_49437 = cljs.core.nth.call(null,vec__49306_49436,(0),null);
var columns_49438 = cljs.core.nth.call(null,vec__49306_49436,(1),null);
var seq__49309_49439 = cljs.core.seq.call(null,columns_49438);
var chunk__49310_49440 = null;
var count__49311_49441 = (0);
var i__49312_49442 = (0);
while(true){
if((i__49312_49442 < count__49311_49441)){
var vec__49313_49443 = cljs.core._nth.call(null,chunk__49310_49440,i__49312_49442);
var column_49444 = cljs.core.nth.call(null,vec__49313_49443,(0),null);
var column_info_49445 = cljs.core.nth.call(null,vec__49313_49443,(1),null);
var seq__49316_49446 = cljs.core.seq.call(null,column_info_49445);
var chunk__49317_49447 = null;
var count__49318_49448 = (0);
var i__49319_49449 = (0);
while(true){
if((i__49319_49449 < count__49318_49448)){
var map__49320_49450 = cljs.core._nth.call(null,chunk__49317_49447,i__49319_49449);
var map__49320_49451__$1 = ((((!((map__49320_49450 == null)))?((((map__49320_49450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49320_49450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49320_49450):map__49320_49450);
var gline_49452 = cljs.core.get.call(null,map__49320_49451__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49453 = cljs.core.get.call(null,map__49320_49451__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49454 = cljs.core.get.call(null,map__49320_49451__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49452], null),cljs.core.fnil.call(null,((function (seq__49316_49446,chunk__49317_49447,count__49318_49448,i__49319_49449,seq__49309_49439,chunk__49310_49440,count__49311_49441,i__49312_49442,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49320_49450,map__49320_49451__$1,gline_49452,gcol_49453,name_49454,vec__49313_49443,column_49444,column_info_49445,vec__49306_49436,line_49437,columns_49438,seq__49273_49430__$1,temp__4657__auto___49429,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49453], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49437,new cljs.core.Keyword(null,"col","col",-1959363084),column_49444,new cljs.core.Keyword(null,"name","name",1843675177),name_49454], null));
});})(seq__49316_49446,chunk__49317_49447,count__49318_49448,i__49319_49449,seq__49309_49439,chunk__49310_49440,count__49311_49441,i__49312_49442,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49320_49450,map__49320_49451__$1,gline_49452,gcol_49453,name_49454,vec__49313_49443,column_49444,column_info_49445,vec__49306_49436,line_49437,columns_49438,seq__49273_49430__$1,temp__4657__auto___49429,inverted))
,cljs.core.sorted_map.call(null)));

var G__49455 = seq__49316_49446;
var G__49456 = chunk__49317_49447;
var G__49457 = count__49318_49448;
var G__49458 = (i__49319_49449 + (1));
seq__49316_49446 = G__49455;
chunk__49317_49447 = G__49456;
count__49318_49448 = G__49457;
i__49319_49449 = G__49458;
continue;
} else {
var temp__4657__auto___49459__$1 = cljs.core.seq.call(null,seq__49316_49446);
if(temp__4657__auto___49459__$1){
var seq__49316_49460__$1 = temp__4657__auto___49459__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49316_49460__$1)){
var c__37147__auto___49461 = cljs.core.chunk_first.call(null,seq__49316_49460__$1);
var G__49462 = cljs.core.chunk_rest.call(null,seq__49316_49460__$1);
var G__49463 = c__37147__auto___49461;
var G__49464 = cljs.core.count.call(null,c__37147__auto___49461);
var G__49465 = (0);
seq__49316_49446 = G__49462;
chunk__49317_49447 = G__49463;
count__49318_49448 = G__49464;
i__49319_49449 = G__49465;
continue;
} else {
var map__49322_49466 = cljs.core.first.call(null,seq__49316_49460__$1);
var map__49322_49467__$1 = ((((!((map__49322_49466 == null)))?((((map__49322_49466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49322_49466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49322_49466):map__49322_49466);
var gline_49468 = cljs.core.get.call(null,map__49322_49467__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49469 = cljs.core.get.call(null,map__49322_49467__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49470 = cljs.core.get.call(null,map__49322_49467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49468], null),cljs.core.fnil.call(null,((function (seq__49316_49446,chunk__49317_49447,count__49318_49448,i__49319_49449,seq__49309_49439,chunk__49310_49440,count__49311_49441,i__49312_49442,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49322_49466,map__49322_49467__$1,gline_49468,gcol_49469,name_49470,seq__49316_49460__$1,temp__4657__auto___49459__$1,vec__49313_49443,column_49444,column_info_49445,vec__49306_49436,line_49437,columns_49438,seq__49273_49430__$1,temp__4657__auto___49429,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49469], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49437,new cljs.core.Keyword(null,"col","col",-1959363084),column_49444,new cljs.core.Keyword(null,"name","name",1843675177),name_49470], null));
});})(seq__49316_49446,chunk__49317_49447,count__49318_49448,i__49319_49449,seq__49309_49439,chunk__49310_49440,count__49311_49441,i__49312_49442,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49322_49466,map__49322_49467__$1,gline_49468,gcol_49469,name_49470,seq__49316_49460__$1,temp__4657__auto___49459__$1,vec__49313_49443,column_49444,column_info_49445,vec__49306_49436,line_49437,columns_49438,seq__49273_49430__$1,temp__4657__auto___49429,inverted))
,cljs.core.sorted_map.call(null)));

var G__49471 = cljs.core.next.call(null,seq__49316_49460__$1);
var G__49472 = null;
var G__49473 = (0);
var G__49474 = (0);
seq__49316_49446 = G__49471;
chunk__49317_49447 = G__49472;
count__49318_49448 = G__49473;
i__49319_49449 = G__49474;
continue;
}
} else {
}
}
break;
}

var G__49475 = seq__49309_49439;
var G__49476 = chunk__49310_49440;
var G__49477 = count__49311_49441;
var G__49478 = (i__49312_49442 + (1));
seq__49309_49439 = G__49475;
chunk__49310_49440 = G__49476;
count__49311_49441 = G__49477;
i__49312_49442 = G__49478;
continue;
} else {
var temp__4657__auto___49479__$1 = cljs.core.seq.call(null,seq__49309_49439);
if(temp__4657__auto___49479__$1){
var seq__49309_49480__$1 = temp__4657__auto___49479__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49309_49480__$1)){
var c__37147__auto___49481 = cljs.core.chunk_first.call(null,seq__49309_49480__$1);
var G__49482 = cljs.core.chunk_rest.call(null,seq__49309_49480__$1);
var G__49483 = c__37147__auto___49481;
var G__49484 = cljs.core.count.call(null,c__37147__auto___49481);
var G__49485 = (0);
seq__49309_49439 = G__49482;
chunk__49310_49440 = G__49483;
count__49311_49441 = G__49484;
i__49312_49442 = G__49485;
continue;
} else {
var vec__49324_49486 = cljs.core.first.call(null,seq__49309_49480__$1);
var column_49487 = cljs.core.nth.call(null,vec__49324_49486,(0),null);
var column_info_49488 = cljs.core.nth.call(null,vec__49324_49486,(1),null);
var seq__49327_49489 = cljs.core.seq.call(null,column_info_49488);
var chunk__49328_49490 = null;
var count__49329_49491 = (0);
var i__49330_49492 = (0);
while(true){
if((i__49330_49492 < count__49329_49491)){
var map__49331_49493 = cljs.core._nth.call(null,chunk__49328_49490,i__49330_49492);
var map__49331_49494__$1 = ((((!((map__49331_49493 == null)))?((((map__49331_49493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49331_49493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49331_49493):map__49331_49493);
var gline_49495 = cljs.core.get.call(null,map__49331_49494__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49496 = cljs.core.get.call(null,map__49331_49494__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49497 = cljs.core.get.call(null,map__49331_49494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49495], null),cljs.core.fnil.call(null,((function (seq__49327_49489,chunk__49328_49490,count__49329_49491,i__49330_49492,seq__49309_49439,chunk__49310_49440,count__49311_49441,i__49312_49442,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49331_49493,map__49331_49494__$1,gline_49495,gcol_49496,name_49497,vec__49324_49486,column_49487,column_info_49488,seq__49309_49480__$1,temp__4657__auto___49479__$1,vec__49306_49436,line_49437,columns_49438,seq__49273_49430__$1,temp__4657__auto___49429,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49496], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49437,new cljs.core.Keyword(null,"col","col",-1959363084),column_49487,new cljs.core.Keyword(null,"name","name",1843675177),name_49497], null));
});})(seq__49327_49489,chunk__49328_49490,count__49329_49491,i__49330_49492,seq__49309_49439,chunk__49310_49440,count__49311_49441,i__49312_49442,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49331_49493,map__49331_49494__$1,gline_49495,gcol_49496,name_49497,vec__49324_49486,column_49487,column_info_49488,seq__49309_49480__$1,temp__4657__auto___49479__$1,vec__49306_49436,line_49437,columns_49438,seq__49273_49430__$1,temp__4657__auto___49429,inverted))
,cljs.core.sorted_map.call(null)));

var G__49498 = seq__49327_49489;
var G__49499 = chunk__49328_49490;
var G__49500 = count__49329_49491;
var G__49501 = (i__49330_49492 + (1));
seq__49327_49489 = G__49498;
chunk__49328_49490 = G__49499;
count__49329_49491 = G__49500;
i__49330_49492 = G__49501;
continue;
} else {
var temp__4657__auto___49502__$2 = cljs.core.seq.call(null,seq__49327_49489);
if(temp__4657__auto___49502__$2){
var seq__49327_49503__$1 = temp__4657__auto___49502__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49327_49503__$1)){
var c__37147__auto___49504 = cljs.core.chunk_first.call(null,seq__49327_49503__$1);
var G__49505 = cljs.core.chunk_rest.call(null,seq__49327_49503__$1);
var G__49506 = c__37147__auto___49504;
var G__49507 = cljs.core.count.call(null,c__37147__auto___49504);
var G__49508 = (0);
seq__49327_49489 = G__49505;
chunk__49328_49490 = G__49506;
count__49329_49491 = G__49507;
i__49330_49492 = G__49508;
continue;
} else {
var map__49333_49509 = cljs.core.first.call(null,seq__49327_49503__$1);
var map__49333_49510__$1 = ((((!((map__49333_49509 == null)))?((((map__49333_49509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49333_49509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49333_49509):map__49333_49509);
var gline_49511 = cljs.core.get.call(null,map__49333_49510__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49512 = cljs.core.get.call(null,map__49333_49510__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49513 = cljs.core.get.call(null,map__49333_49510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49511], null),cljs.core.fnil.call(null,((function (seq__49327_49489,chunk__49328_49490,count__49329_49491,i__49330_49492,seq__49309_49439,chunk__49310_49440,count__49311_49441,i__49312_49442,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49333_49509,map__49333_49510__$1,gline_49511,gcol_49512,name_49513,seq__49327_49503__$1,temp__4657__auto___49502__$2,vec__49324_49486,column_49487,column_info_49488,seq__49309_49480__$1,temp__4657__auto___49479__$1,vec__49306_49436,line_49437,columns_49438,seq__49273_49430__$1,temp__4657__auto___49429,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49512], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49437,new cljs.core.Keyword(null,"col","col",-1959363084),column_49487,new cljs.core.Keyword(null,"name","name",1843675177),name_49513], null));
});})(seq__49327_49489,chunk__49328_49490,count__49329_49491,i__49330_49492,seq__49309_49439,chunk__49310_49440,count__49311_49441,i__49312_49442,seq__49273_49335,chunk__49274_49336,count__49275_49337,i__49276_49338,map__49333_49509,map__49333_49510__$1,gline_49511,gcol_49512,name_49513,seq__49327_49503__$1,temp__4657__auto___49502__$2,vec__49324_49486,column_49487,column_info_49488,seq__49309_49480__$1,temp__4657__auto___49479__$1,vec__49306_49436,line_49437,columns_49438,seq__49273_49430__$1,temp__4657__auto___49429,inverted))
,cljs.core.sorted_map.call(null)));

var G__49514 = cljs.core.next.call(null,seq__49327_49503__$1);
var G__49515 = null;
var G__49516 = (0);
var G__49517 = (0);
seq__49327_49489 = G__49514;
chunk__49328_49490 = G__49515;
count__49329_49491 = G__49516;
i__49330_49492 = G__49517;
continue;
}
} else {
}
}
break;
}

var G__49518 = cljs.core.next.call(null,seq__49309_49480__$1);
var G__49519 = null;
var G__49520 = (0);
var G__49521 = (0);
seq__49309_49439 = G__49518;
chunk__49310_49440 = G__49519;
count__49311_49441 = G__49520;
i__49312_49442 = G__49521;
continue;
}
} else {
}
}
break;
}

var G__49522 = cljs.core.next.call(null,seq__49273_49430__$1);
var G__49523 = null;
var G__49524 = (0);
var G__49525 = (0);
seq__49273_49335 = G__49522;
chunk__49274_49336 = G__49523;
count__49275_49337 = G__49524;
i__49276_49338 = G__49525;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1517263079758
