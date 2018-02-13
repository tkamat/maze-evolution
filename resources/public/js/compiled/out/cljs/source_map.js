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
return cljs.core.reduce.call(null,(function (m,p__11277){
var vec__11278 = p__11277;
var i = cljs.core.nth.call(null,vec__11278,(0),null);
var v = cljs.core.nth.call(null,vec__11278,(1),null);
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
var vec__11281 = seg;
var gcol = cljs.core.nth.call(null,vec__11281,(0),null);
var source = cljs.core.nth.call(null,vec__11281,(1),null);
var line = cljs.core.nth.call(null,vec__11281,(2),null);
var col = cljs.core.nth.call(null,vec__11281,(3),null);
var name = cljs.core.nth.call(null,vec__11281,(4),null);
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
var vec__11284 = seg;
var gcol = cljs.core.nth.call(null,vec__11284,(0),null);
var source = cljs.core.nth.call(null,vec__11284,(1),null);
var line = cljs.core.nth.call(null,vec__11284,(2),null);
var col = cljs.core.nth.call(null,vec__11284,(3),null);
var name = cljs.core.nth.call(null,vec__11284,(4),null);
var vec__11287 = relseg;
var rgcol = cljs.core.nth.call(null,vec__11287,(0),null);
var rsource = cljs.core.nth.call(null,vec__11287,(1),null);
var rline = cljs.core.nth.call(null,vec__11287,(2),null);
var rcol = cljs.core.nth.call(null,vec__11287,(3),null);
var rname = cljs.core.nth.call(null,vec__11287,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__7668__auto__ = source;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__7668__auto__ = line;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__7668__auto__ = col;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
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
var map__11290 = segmap;
var map__11290__$1 = ((((!((map__11290 == null)))?((((map__11290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11290):map__11290);
var gcol = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__11290,map__11290__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__11290,map__11290__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__11290,map__11290__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__11290,map__11290__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11290,map__11290__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__11290,map__11290__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__11293 = arguments.length;
switch (G__11293) {
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
var vec__11294 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11298 = cljs.core.next.call(null,segs__$1);
var G__11299 = nrelseg;
var G__11300 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11298;
relseg__$1 = G__11299;
result__$1 = G__11300;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11294,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11294,(1),null);
var G__11301 = (gline + (1));
var G__11302 = cljs.core.next.call(null,lines__$1);
var G__11303 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11304 = result__$1;
gline = G__11301;
lines__$1 = G__11302;
relseg = G__11303;
result = G__11304;
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
var map__11306 = segmap;
var map__11306__$1 = ((((!((map__11306 == null)))?((((map__11306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11306):map__11306);
var gcol = cljs.core.get.call(null,map__11306__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11306__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11306__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11306__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__11306,map__11306__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__11306,map__11306__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__11305_SHARP_){
return cljs.core.conj.call(null,p1__11305_SHARP_,d__$1);
});})(map__11306,map__11306__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11306,map__11306__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__11309 = arguments.length;
switch (G__11309) {
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
var vec__11310 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11314 = cljs.core.next.call(null,segs__$1);
var G__11315 = nrelseg;
var G__11316 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11314;
relseg__$1 = G__11315;
result__$1 = G__11316;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11310,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11310,(1),null);
var G__11317 = (gline + (1));
var G__11318 = cljs.core.next.call(null,lines__$1);
var G__11319 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11320 = result__$1;
gline = G__11317;
lines__$1 = G__11318;
relseg = G__11319;
result = G__11320;
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
return (function (p__11321){
var vec__11322 = p__11321;
var _ = cljs.core.nth.call(null,vec__11322,(0),null);
var source = cljs.core.nth.call(null,vec__11322,(1),null);
var line = cljs.core.nth.call(null,vec__11322,(2),null);
var col = cljs.core.nth.call(null,vec__11322,(3),null);
var name = cljs.core.nth.call(null,vec__11322,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__11325){
var vec__11326 = p__11325;
var gcol = cljs.core.nth.call(null,vec__11326,(0),null);
var sidx = cljs.core.nth.call(null,vec__11326,(1),null);
var line = cljs.core.nth.call(null,vec__11326,(2),null);
var col = cljs.core.nth.call(null,vec__11326,(3),null);
var name = cljs.core.nth.call(null,vec__11326,(4),null);
var seg = vec__11326;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__11326,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11329){
var vec__11330 = p__11329;
var _ = cljs.core.nth.call(null,vec__11330,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11330,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11330,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11330,(3),null);
var lname = cljs.core.nth.call(null,vec__11330,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11326,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__7668__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
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
var seq__11336 = cljs.core.seq.call(null,infos);
var chunk__11337 = null;
var count__11338 = (0);
var i__11339 = (0);
while(true){
if((i__11339 < count__11338)){
var info = cljs.core._nth.call(null,chunk__11337,i__11339);
var segv_11418 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11419 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11420 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11419 > (lc_11420 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11336,chunk__11337,count__11338,i__11339,segv_11418,gline_11419,lc_11420,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11419 - (lc_11420 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11418], null));
});})(seq__11336,chunk__11337,count__11338,i__11339,segv_11418,gline_11419,lc_11420,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11336,chunk__11337,count__11338,i__11339,segv_11418,gline_11419,lc_11420,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11419], null),cljs.core.conj,segv_11418);
});})(seq__11336,chunk__11337,count__11338,i__11339,segv_11418,gline_11419,lc_11420,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11421 = seq__11336;
var G__11422 = chunk__11337;
var G__11423 = count__11338;
var G__11424 = (i__11339 + (1));
seq__11336 = G__11421;
chunk__11337 = G__11422;
count__11338 = G__11423;
i__11339 = G__11424;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11336);
if(temp__4657__auto__){
var seq__11336__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11336__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__11336__$1);
var G__11425 = cljs.core.chunk_rest.call(null,seq__11336__$1);
var G__11426 = c__8507__auto__;
var G__11427 = cljs.core.count.call(null,c__8507__auto__);
var G__11428 = (0);
seq__11336 = G__11425;
chunk__11337 = G__11426;
count__11338 = G__11427;
i__11339 = G__11428;
continue;
} else {
var info = cljs.core.first.call(null,seq__11336__$1);
var segv_11429 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11430 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11431 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11430 > (lc_11431 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11336,chunk__11337,count__11338,i__11339,segv_11429,gline_11430,lc_11431,info,seq__11336__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11430 - (lc_11431 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11429], null));
});})(seq__11336,chunk__11337,count__11338,i__11339,segv_11429,gline_11430,lc_11431,info,seq__11336__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11336,chunk__11337,count__11338,i__11339,segv_11429,gline_11430,lc_11431,info,seq__11336__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11430], null),cljs.core.conj,segv_11429);
});})(seq__11336,chunk__11337,count__11338,i__11339,segv_11429,gline_11430,lc_11431,info,seq__11336__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11432 = cljs.core.next.call(null,seq__11336__$1);
var G__11433 = null;
var G__11434 = (0);
var G__11435 = (0);
seq__11336 = G__11432;
chunk__11337 = G__11433;
count__11338 = G__11434;
i__11339 = G__11435;
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
var seq__11340_11436 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11341_11437 = null;
var count__11342_11438 = (0);
var i__11343_11439 = (0);
while(true){
if((i__11343_11439 < count__11342_11438)){
var vec__11344_11440 = cljs.core._nth.call(null,chunk__11341_11437,i__11343_11439);
var source_idx_11441 = cljs.core.nth.call(null,vec__11344_11440,(0),null);
var vec__11347_11442 = cljs.core.nth.call(null,vec__11344_11440,(1),null);
var __11443 = cljs.core.nth.call(null,vec__11347_11442,(0),null);
var lines_11444__$1 = cljs.core.nth.call(null,vec__11347_11442,(1),null);
var seq__11350_11445 = cljs.core.seq.call(null,lines_11444__$1);
var chunk__11351_11446 = null;
var count__11352_11447 = (0);
var i__11353_11448 = (0);
while(true){
if((i__11353_11448 < count__11352_11447)){
var vec__11354_11449 = cljs.core._nth.call(null,chunk__11351_11446,i__11353_11448);
var line_11450 = cljs.core.nth.call(null,vec__11354_11449,(0),null);
var cols_11451 = cljs.core.nth.call(null,vec__11354_11449,(1),null);
var seq__11357_11452 = cljs.core.seq.call(null,cols_11451);
var chunk__11358_11453 = null;
var count__11359_11454 = (0);
var i__11360_11455 = (0);
while(true){
if((i__11360_11455 < count__11359_11454)){
var vec__11361_11456 = cljs.core._nth.call(null,chunk__11358_11453,i__11360_11455);
var col_11457 = cljs.core.nth.call(null,vec__11361_11456,(0),null);
var infos_11458 = cljs.core.nth.call(null,vec__11361_11456,(1),null);
encode_cols.call(null,infos_11458,source_idx_11441,line_11450,col_11457);

var G__11459 = seq__11357_11452;
var G__11460 = chunk__11358_11453;
var G__11461 = count__11359_11454;
var G__11462 = (i__11360_11455 + (1));
seq__11357_11452 = G__11459;
chunk__11358_11453 = G__11460;
count__11359_11454 = G__11461;
i__11360_11455 = G__11462;
continue;
} else {
var temp__4657__auto___11463 = cljs.core.seq.call(null,seq__11357_11452);
if(temp__4657__auto___11463){
var seq__11357_11464__$1 = temp__4657__auto___11463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11357_11464__$1)){
var c__8507__auto___11465 = cljs.core.chunk_first.call(null,seq__11357_11464__$1);
var G__11466 = cljs.core.chunk_rest.call(null,seq__11357_11464__$1);
var G__11467 = c__8507__auto___11465;
var G__11468 = cljs.core.count.call(null,c__8507__auto___11465);
var G__11469 = (0);
seq__11357_11452 = G__11466;
chunk__11358_11453 = G__11467;
count__11359_11454 = G__11468;
i__11360_11455 = G__11469;
continue;
} else {
var vec__11364_11470 = cljs.core.first.call(null,seq__11357_11464__$1);
var col_11471 = cljs.core.nth.call(null,vec__11364_11470,(0),null);
var infos_11472 = cljs.core.nth.call(null,vec__11364_11470,(1),null);
encode_cols.call(null,infos_11472,source_idx_11441,line_11450,col_11471);

var G__11473 = cljs.core.next.call(null,seq__11357_11464__$1);
var G__11474 = null;
var G__11475 = (0);
var G__11476 = (0);
seq__11357_11452 = G__11473;
chunk__11358_11453 = G__11474;
count__11359_11454 = G__11475;
i__11360_11455 = G__11476;
continue;
}
} else {
}
}
break;
}

var G__11477 = seq__11350_11445;
var G__11478 = chunk__11351_11446;
var G__11479 = count__11352_11447;
var G__11480 = (i__11353_11448 + (1));
seq__11350_11445 = G__11477;
chunk__11351_11446 = G__11478;
count__11352_11447 = G__11479;
i__11353_11448 = G__11480;
continue;
} else {
var temp__4657__auto___11481 = cljs.core.seq.call(null,seq__11350_11445);
if(temp__4657__auto___11481){
var seq__11350_11482__$1 = temp__4657__auto___11481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11350_11482__$1)){
var c__8507__auto___11483 = cljs.core.chunk_first.call(null,seq__11350_11482__$1);
var G__11484 = cljs.core.chunk_rest.call(null,seq__11350_11482__$1);
var G__11485 = c__8507__auto___11483;
var G__11486 = cljs.core.count.call(null,c__8507__auto___11483);
var G__11487 = (0);
seq__11350_11445 = G__11484;
chunk__11351_11446 = G__11485;
count__11352_11447 = G__11486;
i__11353_11448 = G__11487;
continue;
} else {
var vec__11367_11488 = cljs.core.first.call(null,seq__11350_11482__$1);
var line_11489 = cljs.core.nth.call(null,vec__11367_11488,(0),null);
var cols_11490 = cljs.core.nth.call(null,vec__11367_11488,(1),null);
var seq__11370_11491 = cljs.core.seq.call(null,cols_11490);
var chunk__11371_11492 = null;
var count__11372_11493 = (0);
var i__11373_11494 = (0);
while(true){
if((i__11373_11494 < count__11372_11493)){
var vec__11374_11495 = cljs.core._nth.call(null,chunk__11371_11492,i__11373_11494);
var col_11496 = cljs.core.nth.call(null,vec__11374_11495,(0),null);
var infos_11497 = cljs.core.nth.call(null,vec__11374_11495,(1),null);
encode_cols.call(null,infos_11497,source_idx_11441,line_11489,col_11496);

var G__11498 = seq__11370_11491;
var G__11499 = chunk__11371_11492;
var G__11500 = count__11372_11493;
var G__11501 = (i__11373_11494 + (1));
seq__11370_11491 = G__11498;
chunk__11371_11492 = G__11499;
count__11372_11493 = G__11500;
i__11373_11494 = G__11501;
continue;
} else {
var temp__4657__auto___11502__$1 = cljs.core.seq.call(null,seq__11370_11491);
if(temp__4657__auto___11502__$1){
var seq__11370_11503__$1 = temp__4657__auto___11502__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11370_11503__$1)){
var c__8507__auto___11504 = cljs.core.chunk_first.call(null,seq__11370_11503__$1);
var G__11505 = cljs.core.chunk_rest.call(null,seq__11370_11503__$1);
var G__11506 = c__8507__auto___11504;
var G__11507 = cljs.core.count.call(null,c__8507__auto___11504);
var G__11508 = (0);
seq__11370_11491 = G__11505;
chunk__11371_11492 = G__11506;
count__11372_11493 = G__11507;
i__11373_11494 = G__11508;
continue;
} else {
var vec__11377_11509 = cljs.core.first.call(null,seq__11370_11503__$1);
var col_11510 = cljs.core.nth.call(null,vec__11377_11509,(0),null);
var infos_11511 = cljs.core.nth.call(null,vec__11377_11509,(1),null);
encode_cols.call(null,infos_11511,source_idx_11441,line_11489,col_11510);

var G__11512 = cljs.core.next.call(null,seq__11370_11503__$1);
var G__11513 = null;
var G__11514 = (0);
var G__11515 = (0);
seq__11370_11491 = G__11512;
chunk__11371_11492 = G__11513;
count__11372_11493 = G__11514;
i__11373_11494 = G__11515;
continue;
}
} else {
}
}
break;
}

var G__11516 = cljs.core.next.call(null,seq__11350_11482__$1);
var G__11517 = null;
var G__11518 = (0);
var G__11519 = (0);
seq__11350_11445 = G__11516;
chunk__11351_11446 = G__11517;
count__11352_11447 = G__11518;
i__11353_11448 = G__11519;
continue;
}
} else {
}
}
break;
}

var G__11520 = seq__11340_11436;
var G__11521 = chunk__11341_11437;
var G__11522 = count__11342_11438;
var G__11523 = (i__11343_11439 + (1));
seq__11340_11436 = G__11520;
chunk__11341_11437 = G__11521;
count__11342_11438 = G__11522;
i__11343_11439 = G__11523;
continue;
} else {
var temp__4657__auto___11524 = cljs.core.seq.call(null,seq__11340_11436);
if(temp__4657__auto___11524){
var seq__11340_11525__$1 = temp__4657__auto___11524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11340_11525__$1)){
var c__8507__auto___11526 = cljs.core.chunk_first.call(null,seq__11340_11525__$1);
var G__11527 = cljs.core.chunk_rest.call(null,seq__11340_11525__$1);
var G__11528 = c__8507__auto___11526;
var G__11529 = cljs.core.count.call(null,c__8507__auto___11526);
var G__11530 = (0);
seq__11340_11436 = G__11527;
chunk__11341_11437 = G__11528;
count__11342_11438 = G__11529;
i__11343_11439 = G__11530;
continue;
} else {
var vec__11380_11531 = cljs.core.first.call(null,seq__11340_11525__$1);
var source_idx_11532 = cljs.core.nth.call(null,vec__11380_11531,(0),null);
var vec__11383_11533 = cljs.core.nth.call(null,vec__11380_11531,(1),null);
var __11534 = cljs.core.nth.call(null,vec__11383_11533,(0),null);
var lines_11535__$1 = cljs.core.nth.call(null,vec__11383_11533,(1),null);
var seq__11386_11536 = cljs.core.seq.call(null,lines_11535__$1);
var chunk__11387_11537 = null;
var count__11388_11538 = (0);
var i__11389_11539 = (0);
while(true){
if((i__11389_11539 < count__11388_11538)){
var vec__11390_11540 = cljs.core._nth.call(null,chunk__11387_11537,i__11389_11539);
var line_11541 = cljs.core.nth.call(null,vec__11390_11540,(0),null);
var cols_11542 = cljs.core.nth.call(null,vec__11390_11540,(1),null);
var seq__11393_11543 = cljs.core.seq.call(null,cols_11542);
var chunk__11394_11544 = null;
var count__11395_11545 = (0);
var i__11396_11546 = (0);
while(true){
if((i__11396_11546 < count__11395_11545)){
var vec__11397_11547 = cljs.core._nth.call(null,chunk__11394_11544,i__11396_11546);
var col_11548 = cljs.core.nth.call(null,vec__11397_11547,(0),null);
var infos_11549 = cljs.core.nth.call(null,vec__11397_11547,(1),null);
encode_cols.call(null,infos_11549,source_idx_11532,line_11541,col_11548);

var G__11550 = seq__11393_11543;
var G__11551 = chunk__11394_11544;
var G__11552 = count__11395_11545;
var G__11553 = (i__11396_11546 + (1));
seq__11393_11543 = G__11550;
chunk__11394_11544 = G__11551;
count__11395_11545 = G__11552;
i__11396_11546 = G__11553;
continue;
} else {
var temp__4657__auto___11554__$1 = cljs.core.seq.call(null,seq__11393_11543);
if(temp__4657__auto___11554__$1){
var seq__11393_11555__$1 = temp__4657__auto___11554__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11393_11555__$1)){
var c__8507__auto___11556 = cljs.core.chunk_first.call(null,seq__11393_11555__$1);
var G__11557 = cljs.core.chunk_rest.call(null,seq__11393_11555__$1);
var G__11558 = c__8507__auto___11556;
var G__11559 = cljs.core.count.call(null,c__8507__auto___11556);
var G__11560 = (0);
seq__11393_11543 = G__11557;
chunk__11394_11544 = G__11558;
count__11395_11545 = G__11559;
i__11396_11546 = G__11560;
continue;
} else {
var vec__11400_11561 = cljs.core.first.call(null,seq__11393_11555__$1);
var col_11562 = cljs.core.nth.call(null,vec__11400_11561,(0),null);
var infos_11563 = cljs.core.nth.call(null,vec__11400_11561,(1),null);
encode_cols.call(null,infos_11563,source_idx_11532,line_11541,col_11562);

var G__11564 = cljs.core.next.call(null,seq__11393_11555__$1);
var G__11565 = null;
var G__11566 = (0);
var G__11567 = (0);
seq__11393_11543 = G__11564;
chunk__11394_11544 = G__11565;
count__11395_11545 = G__11566;
i__11396_11546 = G__11567;
continue;
}
} else {
}
}
break;
}

var G__11568 = seq__11386_11536;
var G__11569 = chunk__11387_11537;
var G__11570 = count__11388_11538;
var G__11571 = (i__11389_11539 + (1));
seq__11386_11536 = G__11568;
chunk__11387_11537 = G__11569;
count__11388_11538 = G__11570;
i__11389_11539 = G__11571;
continue;
} else {
var temp__4657__auto___11572__$1 = cljs.core.seq.call(null,seq__11386_11536);
if(temp__4657__auto___11572__$1){
var seq__11386_11573__$1 = temp__4657__auto___11572__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11386_11573__$1)){
var c__8507__auto___11574 = cljs.core.chunk_first.call(null,seq__11386_11573__$1);
var G__11575 = cljs.core.chunk_rest.call(null,seq__11386_11573__$1);
var G__11576 = c__8507__auto___11574;
var G__11577 = cljs.core.count.call(null,c__8507__auto___11574);
var G__11578 = (0);
seq__11386_11536 = G__11575;
chunk__11387_11537 = G__11576;
count__11388_11538 = G__11577;
i__11389_11539 = G__11578;
continue;
} else {
var vec__11403_11579 = cljs.core.first.call(null,seq__11386_11573__$1);
var line_11580 = cljs.core.nth.call(null,vec__11403_11579,(0),null);
var cols_11581 = cljs.core.nth.call(null,vec__11403_11579,(1),null);
var seq__11406_11582 = cljs.core.seq.call(null,cols_11581);
var chunk__11407_11583 = null;
var count__11408_11584 = (0);
var i__11409_11585 = (0);
while(true){
if((i__11409_11585 < count__11408_11584)){
var vec__11410_11586 = cljs.core._nth.call(null,chunk__11407_11583,i__11409_11585);
var col_11587 = cljs.core.nth.call(null,vec__11410_11586,(0),null);
var infos_11588 = cljs.core.nth.call(null,vec__11410_11586,(1),null);
encode_cols.call(null,infos_11588,source_idx_11532,line_11580,col_11587);

var G__11589 = seq__11406_11582;
var G__11590 = chunk__11407_11583;
var G__11591 = count__11408_11584;
var G__11592 = (i__11409_11585 + (1));
seq__11406_11582 = G__11589;
chunk__11407_11583 = G__11590;
count__11408_11584 = G__11591;
i__11409_11585 = G__11592;
continue;
} else {
var temp__4657__auto___11593__$2 = cljs.core.seq.call(null,seq__11406_11582);
if(temp__4657__auto___11593__$2){
var seq__11406_11594__$1 = temp__4657__auto___11593__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11406_11594__$1)){
var c__8507__auto___11595 = cljs.core.chunk_first.call(null,seq__11406_11594__$1);
var G__11596 = cljs.core.chunk_rest.call(null,seq__11406_11594__$1);
var G__11597 = c__8507__auto___11595;
var G__11598 = cljs.core.count.call(null,c__8507__auto___11595);
var G__11599 = (0);
seq__11406_11582 = G__11596;
chunk__11407_11583 = G__11597;
count__11408_11584 = G__11598;
i__11409_11585 = G__11599;
continue;
} else {
var vec__11413_11600 = cljs.core.first.call(null,seq__11406_11594__$1);
var col_11601 = cljs.core.nth.call(null,vec__11413_11600,(0),null);
var infos_11602 = cljs.core.nth.call(null,vec__11413_11600,(1),null);
encode_cols.call(null,infos_11602,source_idx_11532,line_11580,col_11601);

var G__11603 = cljs.core.next.call(null,seq__11406_11594__$1);
var G__11604 = null;
var G__11605 = (0);
var G__11606 = (0);
seq__11406_11582 = G__11603;
chunk__11407_11583 = G__11604;
count__11408_11584 = G__11605;
i__11409_11585 = G__11606;
continue;
}
} else {
}
}
break;
}

var G__11607 = cljs.core.next.call(null,seq__11386_11573__$1);
var G__11608 = null;
var G__11609 = (0);
var G__11610 = (0);
seq__11386_11536 = G__11607;
chunk__11387_11537 = G__11608;
count__11388_11538 = G__11609;
i__11389_11539 = G__11610;
continue;
}
} else {
}
}
break;
}

var G__11611 = cljs.core.next.call(null,seq__11340_11525__$1);
var G__11612 = null;
var G__11613 = (0);
var G__11614 = (0);
seq__11340_11436 = G__11611;
chunk__11341_11437 = G__11612;
count__11342_11438 = G__11613;
i__11343_11439 = G__11614;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11416 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11333_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11333_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11334_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11334_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11335_SHARP_){
return clojure.string.join.call(null,",",p1__11335_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__11417 = G__11416;
goog.object.set(G__11417,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__11417;
} else {
return G__11416;
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
var vec__11615 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__11615,(0),null);
var col_map = cljs.core.nth.call(null,vec__11615,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__11618 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__11618,(0),null);
var infos = cljs.core.nth.call(null,vec__11618,(1),null);
var G__11624 = cljs.core.next.call(null,col_map_seq);
var G__11625 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__11618,col,infos,vec__11615,line,col_map){
return (function (v,p__11621){
var map__11622 = p__11621;
var map__11622__$1 = ((((!((map__11622 == null)))?((((map__11622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11622):map__11622);
var gline = cljs.core.get.call(null,map__11622__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__11622__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__11618,col,infos,vec__11615,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__11624;
new_cols = G__11625;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__11626 = cljs.core.next.call(null,line_map_seq);
var G__11627 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__11626;
new_lines = G__11627;
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
var seq__11628_11690 = cljs.core.seq.call(null,reverse_map);
var chunk__11629_11691 = null;
var count__11630_11692 = (0);
var i__11631_11693 = (0);
while(true){
if((i__11631_11693 < count__11630_11692)){
var vec__11632_11694 = cljs.core._nth.call(null,chunk__11629_11691,i__11631_11693);
var line_11695 = cljs.core.nth.call(null,vec__11632_11694,(0),null);
var columns_11696 = cljs.core.nth.call(null,vec__11632_11694,(1),null);
var seq__11635_11697 = cljs.core.seq.call(null,columns_11696);
var chunk__11636_11698 = null;
var count__11637_11699 = (0);
var i__11638_11700 = (0);
while(true){
if((i__11638_11700 < count__11637_11699)){
var vec__11639_11701 = cljs.core._nth.call(null,chunk__11636_11698,i__11638_11700);
var column_11702 = cljs.core.nth.call(null,vec__11639_11701,(0),null);
var column_info_11703 = cljs.core.nth.call(null,vec__11639_11701,(1),null);
var seq__11642_11704 = cljs.core.seq.call(null,column_info_11703);
var chunk__11643_11705 = null;
var count__11644_11706 = (0);
var i__11645_11707 = (0);
while(true){
if((i__11645_11707 < count__11644_11706)){
var map__11646_11708 = cljs.core._nth.call(null,chunk__11643_11705,i__11645_11707);
var map__11646_11709__$1 = ((((!((map__11646_11708 == null)))?((((map__11646_11708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11646_11708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11646_11708):map__11646_11708);
var gline_11710 = cljs.core.get.call(null,map__11646_11709__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11711 = cljs.core.get.call(null,map__11646_11709__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11712 = cljs.core.get.call(null,map__11646_11709__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11710], null),cljs.core.fnil.call(null,((function (seq__11642_11704,chunk__11643_11705,count__11644_11706,i__11645_11707,seq__11635_11697,chunk__11636_11698,count__11637_11699,i__11638_11700,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11646_11708,map__11646_11709__$1,gline_11710,gcol_11711,name_11712,vec__11639_11701,column_11702,column_info_11703,vec__11632_11694,line_11695,columns_11696,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11711], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11695,new cljs.core.Keyword(null,"col","col",-1959363084),column_11702,new cljs.core.Keyword(null,"name","name",1843675177),name_11712], null));
});})(seq__11642_11704,chunk__11643_11705,count__11644_11706,i__11645_11707,seq__11635_11697,chunk__11636_11698,count__11637_11699,i__11638_11700,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11646_11708,map__11646_11709__$1,gline_11710,gcol_11711,name_11712,vec__11639_11701,column_11702,column_info_11703,vec__11632_11694,line_11695,columns_11696,inverted))
,cljs.core.sorted_map.call(null)));

var G__11713 = seq__11642_11704;
var G__11714 = chunk__11643_11705;
var G__11715 = count__11644_11706;
var G__11716 = (i__11645_11707 + (1));
seq__11642_11704 = G__11713;
chunk__11643_11705 = G__11714;
count__11644_11706 = G__11715;
i__11645_11707 = G__11716;
continue;
} else {
var temp__4657__auto___11717 = cljs.core.seq.call(null,seq__11642_11704);
if(temp__4657__auto___11717){
var seq__11642_11718__$1 = temp__4657__auto___11717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11642_11718__$1)){
var c__8507__auto___11719 = cljs.core.chunk_first.call(null,seq__11642_11718__$1);
var G__11720 = cljs.core.chunk_rest.call(null,seq__11642_11718__$1);
var G__11721 = c__8507__auto___11719;
var G__11722 = cljs.core.count.call(null,c__8507__auto___11719);
var G__11723 = (0);
seq__11642_11704 = G__11720;
chunk__11643_11705 = G__11721;
count__11644_11706 = G__11722;
i__11645_11707 = G__11723;
continue;
} else {
var map__11648_11724 = cljs.core.first.call(null,seq__11642_11718__$1);
var map__11648_11725__$1 = ((((!((map__11648_11724 == null)))?((((map__11648_11724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11648_11724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11648_11724):map__11648_11724);
var gline_11726 = cljs.core.get.call(null,map__11648_11725__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11727 = cljs.core.get.call(null,map__11648_11725__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11728 = cljs.core.get.call(null,map__11648_11725__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11726], null),cljs.core.fnil.call(null,((function (seq__11642_11704,chunk__11643_11705,count__11644_11706,i__11645_11707,seq__11635_11697,chunk__11636_11698,count__11637_11699,i__11638_11700,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11648_11724,map__11648_11725__$1,gline_11726,gcol_11727,name_11728,seq__11642_11718__$1,temp__4657__auto___11717,vec__11639_11701,column_11702,column_info_11703,vec__11632_11694,line_11695,columns_11696,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11727], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11695,new cljs.core.Keyword(null,"col","col",-1959363084),column_11702,new cljs.core.Keyword(null,"name","name",1843675177),name_11728], null));
});})(seq__11642_11704,chunk__11643_11705,count__11644_11706,i__11645_11707,seq__11635_11697,chunk__11636_11698,count__11637_11699,i__11638_11700,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11648_11724,map__11648_11725__$1,gline_11726,gcol_11727,name_11728,seq__11642_11718__$1,temp__4657__auto___11717,vec__11639_11701,column_11702,column_info_11703,vec__11632_11694,line_11695,columns_11696,inverted))
,cljs.core.sorted_map.call(null)));

var G__11729 = cljs.core.next.call(null,seq__11642_11718__$1);
var G__11730 = null;
var G__11731 = (0);
var G__11732 = (0);
seq__11642_11704 = G__11729;
chunk__11643_11705 = G__11730;
count__11644_11706 = G__11731;
i__11645_11707 = G__11732;
continue;
}
} else {
}
}
break;
}

var G__11733 = seq__11635_11697;
var G__11734 = chunk__11636_11698;
var G__11735 = count__11637_11699;
var G__11736 = (i__11638_11700 + (1));
seq__11635_11697 = G__11733;
chunk__11636_11698 = G__11734;
count__11637_11699 = G__11735;
i__11638_11700 = G__11736;
continue;
} else {
var temp__4657__auto___11737 = cljs.core.seq.call(null,seq__11635_11697);
if(temp__4657__auto___11737){
var seq__11635_11738__$1 = temp__4657__auto___11737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11635_11738__$1)){
var c__8507__auto___11739 = cljs.core.chunk_first.call(null,seq__11635_11738__$1);
var G__11740 = cljs.core.chunk_rest.call(null,seq__11635_11738__$1);
var G__11741 = c__8507__auto___11739;
var G__11742 = cljs.core.count.call(null,c__8507__auto___11739);
var G__11743 = (0);
seq__11635_11697 = G__11740;
chunk__11636_11698 = G__11741;
count__11637_11699 = G__11742;
i__11638_11700 = G__11743;
continue;
} else {
var vec__11650_11744 = cljs.core.first.call(null,seq__11635_11738__$1);
var column_11745 = cljs.core.nth.call(null,vec__11650_11744,(0),null);
var column_info_11746 = cljs.core.nth.call(null,vec__11650_11744,(1),null);
var seq__11653_11747 = cljs.core.seq.call(null,column_info_11746);
var chunk__11654_11748 = null;
var count__11655_11749 = (0);
var i__11656_11750 = (0);
while(true){
if((i__11656_11750 < count__11655_11749)){
var map__11657_11751 = cljs.core._nth.call(null,chunk__11654_11748,i__11656_11750);
var map__11657_11752__$1 = ((((!((map__11657_11751 == null)))?((((map__11657_11751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11657_11751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11657_11751):map__11657_11751);
var gline_11753 = cljs.core.get.call(null,map__11657_11752__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11754 = cljs.core.get.call(null,map__11657_11752__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11755 = cljs.core.get.call(null,map__11657_11752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11753], null),cljs.core.fnil.call(null,((function (seq__11653_11747,chunk__11654_11748,count__11655_11749,i__11656_11750,seq__11635_11697,chunk__11636_11698,count__11637_11699,i__11638_11700,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11657_11751,map__11657_11752__$1,gline_11753,gcol_11754,name_11755,vec__11650_11744,column_11745,column_info_11746,seq__11635_11738__$1,temp__4657__auto___11737,vec__11632_11694,line_11695,columns_11696,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11754], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11695,new cljs.core.Keyword(null,"col","col",-1959363084),column_11745,new cljs.core.Keyword(null,"name","name",1843675177),name_11755], null));
});})(seq__11653_11747,chunk__11654_11748,count__11655_11749,i__11656_11750,seq__11635_11697,chunk__11636_11698,count__11637_11699,i__11638_11700,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11657_11751,map__11657_11752__$1,gline_11753,gcol_11754,name_11755,vec__11650_11744,column_11745,column_info_11746,seq__11635_11738__$1,temp__4657__auto___11737,vec__11632_11694,line_11695,columns_11696,inverted))
,cljs.core.sorted_map.call(null)));

var G__11756 = seq__11653_11747;
var G__11757 = chunk__11654_11748;
var G__11758 = count__11655_11749;
var G__11759 = (i__11656_11750 + (1));
seq__11653_11747 = G__11756;
chunk__11654_11748 = G__11757;
count__11655_11749 = G__11758;
i__11656_11750 = G__11759;
continue;
} else {
var temp__4657__auto___11760__$1 = cljs.core.seq.call(null,seq__11653_11747);
if(temp__4657__auto___11760__$1){
var seq__11653_11761__$1 = temp__4657__auto___11760__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11653_11761__$1)){
var c__8507__auto___11762 = cljs.core.chunk_first.call(null,seq__11653_11761__$1);
var G__11763 = cljs.core.chunk_rest.call(null,seq__11653_11761__$1);
var G__11764 = c__8507__auto___11762;
var G__11765 = cljs.core.count.call(null,c__8507__auto___11762);
var G__11766 = (0);
seq__11653_11747 = G__11763;
chunk__11654_11748 = G__11764;
count__11655_11749 = G__11765;
i__11656_11750 = G__11766;
continue;
} else {
var map__11659_11767 = cljs.core.first.call(null,seq__11653_11761__$1);
var map__11659_11768__$1 = ((((!((map__11659_11767 == null)))?((((map__11659_11767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11659_11767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11659_11767):map__11659_11767);
var gline_11769 = cljs.core.get.call(null,map__11659_11768__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11770 = cljs.core.get.call(null,map__11659_11768__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11771 = cljs.core.get.call(null,map__11659_11768__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11769], null),cljs.core.fnil.call(null,((function (seq__11653_11747,chunk__11654_11748,count__11655_11749,i__11656_11750,seq__11635_11697,chunk__11636_11698,count__11637_11699,i__11638_11700,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11659_11767,map__11659_11768__$1,gline_11769,gcol_11770,name_11771,seq__11653_11761__$1,temp__4657__auto___11760__$1,vec__11650_11744,column_11745,column_info_11746,seq__11635_11738__$1,temp__4657__auto___11737,vec__11632_11694,line_11695,columns_11696,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11770], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11695,new cljs.core.Keyword(null,"col","col",-1959363084),column_11745,new cljs.core.Keyword(null,"name","name",1843675177),name_11771], null));
});})(seq__11653_11747,chunk__11654_11748,count__11655_11749,i__11656_11750,seq__11635_11697,chunk__11636_11698,count__11637_11699,i__11638_11700,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11659_11767,map__11659_11768__$1,gline_11769,gcol_11770,name_11771,seq__11653_11761__$1,temp__4657__auto___11760__$1,vec__11650_11744,column_11745,column_info_11746,seq__11635_11738__$1,temp__4657__auto___11737,vec__11632_11694,line_11695,columns_11696,inverted))
,cljs.core.sorted_map.call(null)));

var G__11772 = cljs.core.next.call(null,seq__11653_11761__$1);
var G__11773 = null;
var G__11774 = (0);
var G__11775 = (0);
seq__11653_11747 = G__11772;
chunk__11654_11748 = G__11773;
count__11655_11749 = G__11774;
i__11656_11750 = G__11775;
continue;
}
} else {
}
}
break;
}

var G__11776 = cljs.core.next.call(null,seq__11635_11738__$1);
var G__11777 = null;
var G__11778 = (0);
var G__11779 = (0);
seq__11635_11697 = G__11776;
chunk__11636_11698 = G__11777;
count__11637_11699 = G__11778;
i__11638_11700 = G__11779;
continue;
}
} else {
}
}
break;
}

var G__11780 = seq__11628_11690;
var G__11781 = chunk__11629_11691;
var G__11782 = count__11630_11692;
var G__11783 = (i__11631_11693 + (1));
seq__11628_11690 = G__11780;
chunk__11629_11691 = G__11781;
count__11630_11692 = G__11782;
i__11631_11693 = G__11783;
continue;
} else {
var temp__4657__auto___11784 = cljs.core.seq.call(null,seq__11628_11690);
if(temp__4657__auto___11784){
var seq__11628_11785__$1 = temp__4657__auto___11784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11628_11785__$1)){
var c__8507__auto___11786 = cljs.core.chunk_first.call(null,seq__11628_11785__$1);
var G__11787 = cljs.core.chunk_rest.call(null,seq__11628_11785__$1);
var G__11788 = c__8507__auto___11786;
var G__11789 = cljs.core.count.call(null,c__8507__auto___11786);
var G__11790 = (0);
seq__11628_11690 = G__11787;
chunk__11629_11691 = G__11788;
count__11630_11692 = G__11789;
i__11631_11693 = G__11790;
continue;
} else {
var vec__11661_11791 = cljs.core.first.call(null,seq__11628_11785__$1);
var line_11792 = cljs.core.nth.call(null,vec__11661_11791,(0),null);
var columns_11793 = cljs.core.nth.call(null,vec__11661_11791,(1),null);
var seq__11664_11794 = cljs.core.seq.call(null,columns_11793);
var chunk__11665_11795 = null;
var count__11666_11796 = (0);
var i__11667_11797 = (0);
while(true){
if((i__11667_11797 < count__11666_11796)){
var vec__11668_11798 = cljs.core._nth.call(null,chunk__11665_11795,i__11667_11797);
var column_11799 = cljs.core.nth.call(null,vec__11668_11798,(0),null);
var column_info_11800 = cljs.core.nth.call(null,vec__11668_11798,(1),null);
var seq__11671_11801 = cljs.core.seq.call(null,column_info_11800);
var chunk__11672_11802 = null;
var count__11673_11803 = (0);
var i__11674_11804 = (0);
while(true){
if((i__11674_11804 < count__11673_11803)){
var map__11675_11805 = cljs.core._nth.call(null,chunk__11672_11802,i__11674_11804);
var map__11675_11806__$1 = ((((!((map__11675_11805 == null)))?((((map__11675_11805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11675_11805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11675_11805):map__11675_11805);
var gline_11807 = cljs.core.get.call(null,map__11675_11806__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11808 = cljs.core.get.call(null,map__11675_11806__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11809 = cljs.core.get.call(null,map__11675_11806__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11807], null),cljs.core.fnil.call(null,((function (seq__11671_11801,chunk__11672_11802,count__11673_11803,i__11674_11804,seq__11664_11794,chunk__11665_11795,count__11666_11796,i__11667_11797,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11675_11805,map__11675_11806__$1,gline_11807,gcol_11808,name_11809,vec__11668_11798,column_11799,column_info_11800,vec__11661_11791,line_11792,columns_11793,seq__11628_11785__$1,temp__4657__auto___11784,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11808], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11792,new cljs.core.Keyword(null,"col","col",-1959363084),column_11799,new cljs.core.Keyword(null,"name","name",1843675177),name_11809], null));
});})(seq__11671_11801,chunk__11672_11802,count__11673_11803,i__11674_11804,seq__11664_11794,chunk__11665_11795,count__11666_11796,i__11667_11797,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11675_11805,map__11675_11806__$1,gline_11807,gcol_11808,name_11809,vec__11668_11798,column_11799,column_info_11800,vec__11661_11791,line_11792,columns_11793,seq__11628_11785__$1,temp__4657__auto___11784,inverted))
,cljs.core.sorted_map.call(null)));

var G__11810 = seq__11671_11801;
var G__11811 = chunk__11672_11802;
var G__11812 = count__11673_11803;
var G__11813 = (i__11674_11804 + (1));
seq__11671_11801 = G__11810;
chunk__11672_11802 = G__11811;
count__11673_11803 = G__11812;
i__11674_11804 = G__11813;
continue;
} else {
var temp__4657__auto___11814__$1 = cljs.core.seq.call(null,seq__11671_11801);
if(temp__4657__auto___11814__$1){
var seq__11671_11815__$1 = temp__4657__auto___11814__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11671_11815__$1)){
var c__8507__auto___11816 = cljs.core.chunk_first.call(null,seq__11671_11815__$1);
var G__11817 = cljs.core.chunk_rest.call(null,seq__11671_11815__$1);
var G__11818 = c__8507__auto___11816;
var G__11819 = cljs.core.count.call(null,c__8507__auto___11816);
var G__11820 = (0);
seq__11671_11801 = G__11817;
chunk__11672_11802 = G__11818;
count__11673_11803 = G__11819;
i__11674_11804 = G__11820;
continue;
} else {
var map__11677_11821 = cljs.core.first.call(null,seq__11671_11815__$1);
var map__11677_11822__$1 = ((((!((map__11677_11821 == null)))?((((map__11677_11821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11677_11821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11677_11821):map__11677_11821);
var gline_11823 = cljs.core.get.call(null,map__11677_11822__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11824 = cljs.core.get.call(null,map__11677_11822__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11825 = cljs.core.get.call(null,map__11677_11822__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11823], null),cljs.core.fnil.call(null,((function (seq__11671_11801,chunk__11672_11802,count__11673_11803,i__11674_11804,seq__11664_11794,chunk__11665_11795,count__11666_11796,i__11667_11797,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11677_11821,map__11677_11822__$1,gline_11823,gcol_11824,name_11825,seq__11671_11815__$1,temp__4657__auto___11814__$1,vec__11668_11798,column_11799,column_info_11800,vec__11661_11791,line_11792,columns_11793,seq__11628_11785__$1,temp__4657__auto___11784,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11824], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11792,new cljs.core.Keyword(null,"col","col",-1959363084),column_11799,new cljs.core.Keyword(null,"name","name",1843675177),name_11825], null));
});})(seq__11671_11801,chunk__11672_11802,count__11673_11803,i__11674_11804,seq__11664_11794,chunk__11665_11795,count__11666_11796,i__11667_11797,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11677_11821,map__11677_11822__$1,gline_11823,gcol_11824,name_11825,seq__11671_11815__$1,temp__4657__auto___11814__$1,vec__11668_11798,column_11799,column_info_11800,vec__11661_11791,line_11792,columns_11793,seq__11628_11785__$1,temp__4657__auto___11784,inverted))
,cljs.core.sorted_map.call(null)));

var G__11826 = cljs.core.next.call(null,seq__11671_11815__$1);
var G__11827 = null;
var G__11828 = (0);
var G__11829 = (0);
seq__11671_11801 = G__11826;
chunk__11672_11802 = G__11827;
count__11673_11803 = G__11828;
i__11674_11804 = G__11829;
continue;
}
} else {
}
}
break;
}

var G__11830 = seq__11664_11794;
var G__11831 = chunk__11665_11795;
var G__11832 = count__11666_11796;
var G__11833 = (i__11667_11797 + (1));
seq__11664_11794 = G__11830;
chunk__11665_11795 = G__11831;
count__11666_11796 = G__11832;
i__11667_11797 = G__11833;
continue;
} else {
var temp__4657__auto___11834__$1 = cljs.core.seq.call(null,seq__11664_11794);
if(temp__4657__auto___11834__$1){
var seq__11664_11835__$1 = temp__4657__auto___11834__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11664_11835__$1)){
var c__8507__auto___11836 = cljs.core.chunk_first.call(null,seq__11664_11835__$1);
var G__11837 = cljs.core.chunk_rest.call(null,seq__11664_11835__$1);
var G__11838 = c__8507__auto___11836;
var G__11839 = cljs.core.count.call(null,c__8507__auto___11836);
var G__11840 = (0);
seq__11664_11794 = G__11837;
chunk__11665_11795 = G__11838;
count__11666_11796 = G__11839;
i__11667_11797 = G__11840;
continue;
} else {
var vec__11679_11841 = cljs.core.first.call(null,seq__11664_11835__$1);
var column_11842 = cljs.core.nth.call(null,vec__11679_11841,(0),null);
var column_info_11843 = cljs.core.nth.call(null,vec__11679_11841,(1),null);
var seq__11682_11844 = cljs.core.seq.call(null,column_info_11843);
var chunk__11683_11845 = null;
var count__11684_11846 = (0);
var i__11685_11847 = (0);
while(true){
if((i__11685_11847 < count__11684_11846)){
var map__11686_11848 = cljs.core._nth.call(null,chunk__11683_11845,i__11685_11847);
var map__11686_11849__$1 = ((((!((map__11686_11848 == null)))?((((map__11686_11848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11686_11848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11686_11848):map__11686_11848);
var gline_11850 = cljs.core.get.call(null,map__11686_11849__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11851 = cljs.core.get.call(null,map__11686_11849__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11852 = cljs.core.get.call(null,map__11686_11849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11850], null),cljs.core.fnil.call(null,((function (seq__11682_11844,chunk__11683_11845,count__11684_11846,i__11685_11847,seq__11664_11794,chunk__11665_11795,count__11666_11796,i__11667_11797,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11686_11848,map__11686_11849__$1,gline_11850,gcol_11851,name_11852,vec__11679_11841,column_11842,column_info_11843,seq__11664_11835__$1,temp__4657__auto___11834__$1,vec__11661_11791,line_11792,columns_11793,seq__11628_11785__$1,temp__4657__auto___11784,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11851], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11792,new cljs.core.Keyword(null,"col","col",-1959363084),column_11842,new cljs.core.Keyword(null,"name","name",1843675177),name_11852], null));
});})(seq__11682_11844,chunk__11683_11845,count__11684_11846,i__11685_11847,seq__11664_11794,chunk__11665_11795,count__11666_11796,i__11667_11797,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11686_11848,map__11686_11849__$1,gline_11850,gcol_11851,name_11852,vec__11679_11841,column_11842,column_info_11843,seq__11664_11835__$1,temp__4657__auto___11834__$1,vec__11661_11791,line_11792,columns_11793,seq__11628_11785__$1,temp__4657__auto___11784,inverted))
,cljs.core.sorted_map.call(null)));

var G__11853 = seq__11682_11844;
var G__11854 = chunk__11683_11845;
var G__11855 = count__11684_11846;
var G__11856 = (i__11685_11847 + (1));
seq__11682_11844 = G__11853;
chunk__11683_11845 = G__11854;
count__11684_11846 = G__11855;
i__11685_11847 = G__11856;
continue;
} else {
var temp__4657__auto___11857__$2 = cljs.core.seq.call(null,seq__11682_11844);
if(temp__4657__auto___11857__$2){
var seq__11682_11858__$1 = temp__4657__auto___11857__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11682_11858__$1)){
var c__8507__auto___11859 = cljs.core.chunk_first.call(null,seq__11682_11858__$1);
var G__11860 = cljs.core.chunk_rest.call(null,seq__11682_11858__$1);
var G__11861 = c__8507__auto___11859;
var G__11862 = cljs.core.count.call(null,c__8507__auto___11859);
var G__11863 = (0);
seq__11682_11844 = G__11860;
chunk__11683_11845 = G__11861;
count__11684_11846 = G__11862;
i__11685_11847 = G__11863;
continue;
} else {
var map__11688_11864 = cljs.core.first.call(null,seq__11682_11858__$1);
var map__11688_11865__$1 = ((((!((map__11688_11864 == null)))?((((map__11688_11864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11688_11864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11688_11864):map__11688_11864);
var gline_11866 = cljs.core.get.call(null,map__11688_11865__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11867 = cljs.core.get.call(null,map__11688_11865__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11868 = cljs.core.get.call(null,map__11688_11865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11866], null),cljs.core.fnil.call(null,((function (seq__11682_11844,chunk__11683_11845,count__11684_11846,i__11685_11847,seq__11664_11794,chunk__11665_11795,count__11666_11796,i__11667_11797,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11688_11864,map__11688_11865__$1,gline_11866,gcol_11867,name_11868,seq__11682_11858__$1,temp__4657__auto___11857__$2,vec__11679_11841,column_11842,column_info_11843,seq__11664_11835__$1,temp__4657__auto___11834__$1,vec__11661_11791,line_11792,columns_11793,seq__11628_11785__$1,temp__4657__auto___11784,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11867], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11792,new cljs.core.Keyword(null,"col","col",-1959363084),column_11842,new cljs.core.Keyword(null,"name","name",1843675177),name_11868], null));
});})(seq__11682_11844,chunk__11683_11845,count__11684_11846,i__11685_11847,seq__11664_11794,chunk__11665_11795,count__11666_11796,i__11667_11797,seq__11628_11690,chunk__11629_11691,count__11630_11692,i__11631_11693,map__11688_11864,map__11688_11865__$1,gline_11866,gcol_11867,name_11868,seq__11682_11858__$1,temp__4657__auto___11857__$2,vec__11679_11841,column_11842,column_info_11843,seq__11664_11835__$1,temp__4657__auto___11834__$1,vec__11661_11791,line_11792,columns_11793,seq__11628_11785__$1,temp__4657__auto___11784,inverted))
,cljs.core.sorted_map.call(null)));

var G__11869 = cljs.core.next.call(null,seq__11682_11858__$1);
var G__11870 = null;
var G__11871 = (0);
var G__11872 = (0);
seq__11682_11844 = G__11869;
chunk__11683_11845 = G__11870;
count__11684_11846 = G__11871;
i__11685_11847 = G__11872;
continue;
}
} else {
}
}
break;
}

var G__11873 = cljs.core.next.call(null,seq__11664_11835__$1);
var G__11874 = null;
var G__11875 = (0);
var G__11876 = (0);
seq__11664_11794 = G__11873;
chunk__11665_11795 = G__11874;
count__11666_11796 = G__11875;
i__11667_11797 = G__11876;
continue;
}
} else {
}
}
break;
}

var G__11877 = cljs.core.next.call(null,seq__11628_11785__$1);
var G__11878 = null;
var G__11879 = (0);
var G__11880 = (0);
seq__11628_11690 = G__11877;
chunk__11629_11691 = G__11878;
count__11630_11692 = G__11879;
i__11631_11693 = G__11880;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1518565197079
