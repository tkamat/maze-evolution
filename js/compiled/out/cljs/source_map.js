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
return cljs.core.reduce.call(null,(function (m,p__39851){
var vec__39852 = p__39851;
var i = cljs.core.nth.call(null,vec__39852,(0),null);
var v = cljs.core.nth.call(null,vec__39852,(1),null);
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
var vec__39855 = seg;
var gcol = cljs.core.nth.call(null,vec__39855,(0),null);
var source = cljs.core.nth.call(null,vec__39855,(1),null);
var line = cljs.core.nth.call(null,vec__39855,(2),null);
var col = cljs.core.nth.call(null,vec__39855,(3),null);
var name = cljs.core.nth.call(null,vec__39855,(4),null);
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
var vec__39858 = seg;
var gcol = cljs.core.nth.call(null,vec__39858,(0),null);
var source = cljs.core.nth.call(null,vec__39858,(1),null);
var line = cljs.core.nth.call(null,vec__39858,(2),null);
var col = cljs.core.nth.call(null,vec__39858,(3),null);
var name = cljs.core.nth.call(null,vec__39858,(4),null);
var vec__39861 = relseg;
var rgcol = cljs.core.nth.call(null,vec__39861,(0),null);
var rsource = cljs.core.nth.call(null,vec__39861,(1),null);
var rline = cljs.core.nth.call(null,vec__39861,(2),null);
var rcol = cljs.core.nth.call(null,vec__39861,(3),null);
var rname = cljs.core.nth.call(null,vec__39861,(4),null);
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
var map__39864 = segmap;
var map__39864__$1 = ((((!((map__39864 == null)))?((((map__39864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39864):map__39864);
var gcol = cljs.core.get.call(null,map__39864__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__39864__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__39864__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__39864__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__39864__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__39864,map__39864__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__39864,map__39864__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__39864,map__39864__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__39864,map__39864__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__39864,map__39864__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__39864,map__39864__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__39867 = arguments.length;
switch (G__39867) {
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
var vec__39868 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__39872 = cljs.core.next.call(null,segs__$1);
var G__39873 = nrelseg;
var G__39874 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__39872;
relseg__$1 = G__39873;
result__$1 = G__39874;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__39868,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__39868,(1),null);
var G__39875 = (gline + (1));
var G__39876 = cljs.core.next.call(null,lines__$1);
var G__39877 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__39878 = result__$1;
gline = G__39875;
lines__$1 = G__39876;
relseg = G__39877;
result = G__39878;
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
var map__39880 = segmap;
var map__39880__$1 = ((((!((map__39880 == null)))?((((map__39880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39880):map__39880);
var gcol = cljs.core.get.call(null,map__39880__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__39880__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__39880__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__39880__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__39880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__39880,map__39880__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__39880,map__39880__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__39879_SHARP_){
return cljs.core.conj.call(null,p1__39879_SHARP_,d__$1);
});})(map__39880,map__39880__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__39880,map__39880__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__39883 = arguments.length;
switch (G__39883) {
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
var vec__39884 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__39888 = cljs.core.next.call(null,segs__$1);
var G__39889 = nrelseg;
var G__39890 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__39888;
relseg__$1 = G__39889;
result__$1 = G__39890;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__39884,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__39884,(1),null);
var G__39891 = (gline + (1));
var G__39892 = cljs.core.next.call(null,lines__$1);
var G__39893 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__39894 = result__$1;
gline = G__39891;
lines__$1 = G__39892;
relseg = G__39893;
result = G__39894;
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
return (function (p__39895){
var vec__39896 = p__39895;
var _ = cljs.core.nth.call(null,vec__39896,(0),null);
var source = cljs.core.nth.call(null,vec__39896,(1),null);
var line = cljs.core.nth.call(null,vec__39896,(2),null);
var col = cljs.core.nth.call(null,vec__39896,(3),null);
var name = cljs.core.nth.call(null,vec__39896,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__39899){
var vec__39900 = p__39899;
var gcol = cljs.core.nth.call(null,vec__39900,(0),null);
var sidx = cljs.core.nth.call(null,vec__39900,(1),null);
var line = cljs.core.nth.call(null,vec__39900,(2),null);
var col = cljs.core.nth.call(null,vec__39900,(3),null);
var name = cljs.core.nth.call(null,vec__39900,(4),null);
var seg = vec__39900;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__39900,gcol,sidx,line,col,name,seg,relseg){
return (function (p__39903){
var vec__39904 = p__39903;
var _ = cljs.core.nth.call(null,vec__39904,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__39904,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__39904,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__39904,(3),null);
var lname = cljs.core.nth.call(null,vec__39904,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__36308__auto__ = name;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__39900,gcol,sidx,line,col,name,seg,relseg))
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
var seq__39910 = cljs.core.seq.call(null,infos);
var chunk__39911 = null;
var count__39912 = (0);
var i__39913 = (0);
while(true){
if((i__39913 < count__39912)){
var info = cljs.core._nth.call(null,chunk__39911,i__39913);
var segv_39992 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_39993 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_39994 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_39993 > (lc_39994 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__39910,chunk__39911,count__39912,i__39913,segv_39992,gline_39993,lc_39994,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_39993 - (lc_39994 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_39992], null));
});})(seq__39910,chunk__39911,count__39912,i__39913,segv_39992,gline_39993,lc_39994,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__39910,chunk__39911,count__39912,i__39913,segv_39992,gline_39993,lc_39994,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_39993], null),cljs.core.conj,segv_39992);
});})(seq__39910,chunk__39911,count__39912,i__39913,segv_39992,gline_39993,lc_39994,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__39995 = seq__39910;
var G__39996 = chunk__39911;
var G__39997 = count__39912;
var G__39998 = (i__39913 + (1));
seq__39910 = G__39995;
chunk__39911 = G__39996;
count__39912 = G__39997;
i__39913 = G__39998;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39910);
if(temp__4657__auto__){
var seq__39910__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39910__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__39910__$1);
var G__39999 = cljs.core.chunk_rest.call(null,seq__39910__$1);
var G__40000 = c__37147__auto__;
var G__40001 = cljs.core.count.call(null,c__37147__auto__);
var G__40002 = (0);
seq__39910 = G__39999;
chunk__39911 = G__40000;
count__39912 = G__40001;
i__39913 = G__40002;
continue;
} else {
var info = cljs.core.first.call(null,seq__39910__$1);
var segv_40003 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_40004 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_40005 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_40004 > (lc_40005 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__39910,chunk__39911,count__39912,i__39913,segv_40003,gline_40004,lc_40005,info,seq__39910__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_40004 - (lc_40005 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_40003], null));
});})(seq__39910,chunk__39911,count__39912,i__39913,segv_40003,gline_40004,lc_40005,info,seq__39910__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__39910,chunk__39911,count__39912,i__39913,segv_40003,gline_40004,lc_40005,info,seq__39910__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40004], null),cljs.core.conj,segv_40003);
});})(seq__39910,chunk__39911,count__39912,i__39913,segv_40003,gline_40004,lc_40005,info,seq__39910__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__40006 = cljs.core.next.call(null,seq__39910__$1);
var G__40007 = null;
var G__40008 = (0);
var G__40009 = (0);
seq__39910 = G__40006;
chunk__39911 = G__40007;
count__39912 = G__40008;
i__39913 = G__40009;
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
var seq__39914_40010 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__39915_40011 = null;
var count__39916_40012 = (0);
var i__39917_40013 = (0);
while(true){
if((i__39917_40013 < count__39916_40012)){
var vec__39918_40014 = cljs.core._nth.call(null,chunk__39915_40011,i__39917_40013);
var source_idx_40015 = cljs.core.nth.call(null,vec__39918_40014,(0),null);
var vec__39921_40016 = cljs.core.nth.call(null,vec__39918_40014,(1),null);
var __40017 = cljs.core.nth.call(null,vec__39921_40016,(0),null);
var lines_40018__$1 = cljs.core.nth.call(null,vec__39921_40016,(1),null);
var seq__39924_40019 = cljs.core.seq.call(null,lines_40018__$1);
var chunk__39925_40020 = null;
var count__39926_40021 = (0);
var i__39927_40022 = (0);
while(true){
if((i__39927_40022 < count__39926_40021)){
var vec__39928_40023 = cljs.core._nth.call(null,chunk__39925_40020,i__39927_40022);
var line_40024 = cljs.core.nth.call(null,vec__39928_40023,(0),null);
var cols_40025 = cljs.core.nth.call(null,vec__39928_40023,(1),null);
var seq__39931_40026 = cljs.core.seq.call(null,cols_40025);
var chunk__39932_40027 = null;
var count__39933_40028 = (0);
var i__39934_40029 = (0);
while(true){
if((i__39934_40029 < count__39933_40028)){
var vec__39935_40030 = cljs.core._nth.call(null,chunk__39932_40027,i__39934_40029);
var col_40031 = cljs.core.nth.call(null,vec__39935_40030,(0),null);
var infos_40032 = cljs.core.nth.call(null,vec__39935_40030,(1),null);
encode_cols.call(null,infos_40032,source_idx_40015,line_40024,col_40031);

var G__40033 = seq__39931_40026;
var G__40034 = chunk__39932_40027;
var G__40035 = count__39933_40028;
var G__40036 = (i__39934_40029 + (1));
seq__39931_40026 = G__40033;
chunk__39932_40027 = G__40034;
count__39933_40028 = G__40035;
i__39934_40029 = G__40036;
continue;
} else {
var temp__4657__auto___40037 = cljs.core.seq.call(null,seq__39931_40026);
if(temp__4657__auto___40037){
var seq__39931_40038__$1 = temp__4657__auto___40037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39931_40038__$1)){
var c__37147__auto___40039 = cljs.core.chunk_first.call(null,seq__39931_40038__$1);
var G__40040 = cljs.core.chunk_rest.call(null,seq__39931_40038__$1);
var G__40041 = c__37147__auto___40039;
var G__40042 = cljs.core.count.call(null,c__37147__auto___40039);
var G__40043 = (0);
seq__39931_40026 = G__40040;
chunk__39932_40027 = G__40041;
count__39933_40028 = G__40042;
i__39934_40029 = G__40043;
continue;
} else {
var vec__39938_40044 = cljs.core.first.call(null,seq__39931_40038__$1);
var col_40045 = cljs.core.nth.call(null,vec__39938_40044,(0),null);
var infos_40046 = cljs.core.nth.call(null,vec__39938_40044,(1),null);
encode_cols.call(null,infos_40046,source_idx_40015,line_40024,col_40045);

var G__40047 = cljs.core.next.call(null,seq__39931_40038__$1);
var G__40048 = null;
var G__40049 = (0);
var G__40050 = (0);
seq__39931_40026 = G__40047;
chunk__39932_40027 = G__40048;
count__39933_40028 = G__40049;
i__39934_40029 = G__40050;
continue;
}
} else {
}
}
break;
}

var G__40051 = seq__39924_40019;
var G__40052 = chunk__39925_40020;
var G__40053 = count__39926_40021;
var G__40054 = (i__39927_40022 + (1));
seq__39924_40019 = G__40051;
chunk__39925_40020 = G__40052;
count__39926_40021 = G__40053;
i__39927_40022 = G__40054;
continue;
} else {
var temp__4657__auto___40055 = cljs.core.seq.call(null,seq__39924_40019);
if(temp__4657__auto___40055){
var seq__39924_40056__$1 = temp__4657__auto___40055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39924_40056__$1)){
var c__37147__auto___40057 = cljs.core.chunk_first.call(null,seq__39924_40056__$1);
var G__40058 = cljs.core.chunk_rest.call(null,seq__39924_40056__$1);
var G__40059 = c__37147__auto___40057;
var G__40060 = cljs.core.count.call(null,c__37147__auto___40057);
var G__40061 = (0);
seq__39924_40019 = G__40058;
chunk__39925_40020 = G__40059;
count__39926_40021 = G__40060;
i__39927_40022 = G__40061;
continue;
} else {
var vec__39941_40062 = cljs.core.first.call(null,seq__39924_40056__$1);
var line_40063 = cljs.core.nth.call(null,vec__39941_40062,(0),null);
var cols_40064 = cljs.core.nth.call(null,vec__39941_40062,(1),null);
var seq__39944_40065 = cljs.core.seq.call(null,cols_40064);
var chunk__39945_40066 = null;
var count__39946_40067 = (0);
var i__39947_40068 = (0);
while(true){
if((i__39947_40068 < count__39946_40067)){
var vec__39948_40069 = cljs.core._nth.call(null,chunk__39945_40066,i__39947_40068);
var col_40070 = cljs.core.nth.call(null,vec__39948_40069,(0),null);
var infos_40071 = cljs.core.nth.call(null,vec__39948_40069,(1),null);
encode_cols.call(null,infos_40071,source_idx_40015,line_40063,col_40070);

var G__40072 = seq__39944_40065;
var G__40073 = chunk__39945_40066;
var G__40074 = count__39946_40067;
var G__40075 = (i__39947_40068 + (1));
seq__39944_40065 = G__40072;
chunk__39945_40066 = G__40073;
count__39946_40067 = G__40074;
i__39947_40068 = G__40075;
continue;
} else {
var temp__4657__auto___40076__$1 = cljs.core.seq.call(null,seq__39944_40065);
if(temp__4657__auto___40076__$1){
var seq__39944_40077__$1 = temp__4657__auto___40076__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39944_40077__$1)){
var c__37147__auto___40078 = cljs.core.chunk_first.call(null,seq__39944_40077__$1);
var G__40079 = cljs.core.chunk_rest.call(null,seq__39944_40077__$1);
var G__40080 = c__37147__auto___40078;
var G__40081 = cljs.core.count.call(null,c__37147__auto___40078);
var G__40082 = (0);
seq__39944_40065 = G__40079;
chunk__39945_40066 = G__40080;
count__39946_40067 = G__40081;
i__39947_40068 = G__40082;
continue;
} else {
var vec__39951_40083 = cljs.core.first.call(null,seq__39944_40077__$1);
var col_40084 = cljs.core.nth.call(null,vec__39951_40083,(0),null);
var infos_40085 = cljs.core.nth.call(null,vec__39951_40083,(1),null);
encode_cols.call(null,infos_40085,source_idx_40015,line_40063,col_40084);

var G__40086 = cljs.core.next.call(null,seq__39944_40077__$1);
var G__40087 = null;
var G__40088 = (0);
var G__40089 = (0);
seq__39944_40065 = G__40086;
chunk__39945_40066 = G__40087;
count__39946_40067 = G__40088;
i__39947_40068 = G__40089;
continue;
}
} else {
}
}
break;
}

var G__40090 = cljs.core.next.call(null,seq__39924_40056__$1);
var G__40091 = null;
var G__40092 = (0);
var G__40093 = (0);
seq__39924_40019 = G__40090;
chunk__39925_40020 = G__40091;
count__39926_40021 = G__40092;
i__39927_40022 = G__40093;
continue;
}
} else {
}
}
break;
}

var G__40094 = seq__39914_40010;
var G__40095 = chunk__39915_40011;
var G__40096 = count__39916_40012;
var G__40097 = (i__39917_40013 + (1));
seq__39914_40010 = G__40094;
chunk__39915_40011 = G__40095;
count__39916_40012 = G__40096;
i__39917_40013 = G__40097;
continue;
} else {
var temp__4657__auto___40098 = cljs.core.seq.call(null,seq__39914_40010);
if(temp__4657__auto___40098){
var seq__39914_40099__$1 = temp__4657__auto___40098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39914_40099__$1)){
var c__37147__auto___40100 = cljs.core.chunk_first.call(null,seq__39914_40099__$1);
var G__40101 = cljs.core.chunk_rest.call(null,seq__39914_40099__$1);
var G__40102 = c__37147__auto___40100;
var G__40103 = cljs.core.count.call(null,c__37147__auto___40100);
var G__40104 = (0);
seq__39914_40010 = G__40101;
chunk__39915_40011 = G__40102;
count__39916_40012 = G__40103;
i__39917_40013 = G__40104;
continue;
} else {
var vec__39954_40105 = cljs.core.first.call(null,seq__39914_40099__$1);
var source_idx_40106 = cljs.core.nth.call(null,vec__39954_40105,(0),null);
var vec__39957_40107 = cljs.core.nth.call(null,vec__39954_40105,(1),null);
var __40108 = cljs.core.nth.call(null,vec__39957_40107,(0),null);
var lines_40109__$1 = cljs.core.nth.call(null,vec__39957_40107,(1),null);
var seq__39960_40110 = cljs.core.seq.call(null,lines_40109__$1);
var chunk__39961_40111 = null;
var count__39962_40112 = (0);
var i__39963_40113 = (0);
while(true){
if((i__39963_40113 < count__39962_40112)){
var vec__39964_40114 = cljs.core._nth.call(null,chunk__39961_40111,i__39963_40113);
var line_40115 = cljs.core.nth.call(null,vec__39964_40114,(0),null);
var cols_40116 = cljs.core.nth.call(null,vec__39964_40114,(1),null);
var seq__39967_40117 = cljs.core.seq.call(null,cols_40116);
var chunk__39968_40118 = null;
var count__39969_40119 = (0);
var i__39970_40120 = (0);
while(true){
if((i__39970_40120 < count__39969_40119)){
var vec__39971_40121 = cljs.core._nth.call(null,chunk__39968_40118,i__39970_40120);
var col_40122 = cljs.core.nth.call(null,vec__39971_40121,(0),null);
var infos_40123 = cljs.core.nth.call(null,vec__39971_40121,(1),null);
encode_cols.call(null,infos_40123,source_idx_40106,line_40115,col_40122);

var G__40124 = seq__39967_40117;
var G__40125 = chunk__39968_40118;
var G__40126 = count__39969_40119;
var G__40127 = (i__39970_40120 + (1));
seq__39967_40117 = G__40124;
chunk__39968_40118 = G__40125;
count__39969_40119 = G__40126;
i__39970_40120 = G__40127;
continue;
} else {
var temp__4657__auto___40128__$1 = cljs.core.seq.call(null,seq__39967_40117);
if(temp__4657__auto___40128__$1){
var seq__39967_40129__$1 = temp__4657__auto___40128__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39967_40129__$1)){
var c__37147__auto___40130 = cljs.core.chunk_first.call(null,seq__39967_40129__$1);
var G__40131 = cljs.core.chunk_rest.call(null,seq__39967_40129__$1);
var G__40132 = c__37147__auto___40130;
var G__40133 = cljs.core.count.call(null,c__37147__auto___40130);
var G__40134 = (0);
seq__39967_40117 = G__40131;
chunk__39968_40118 = G__40132;
count__39969_40119 = G__40133;
i__39970_40120 = G__40134;
continue;
} else {
var vec__39974_40135 = cljs.core.first.call(null,seq__39967_40129__$1);
var col_40136 = cljs.core.nth.call(null,vec__39974_40135,(0),null);
var infos_40137 = cljs.core.nth.call(null,vec__39974_40135,(1),null);
encode_cols.call(null,infos_40137,source_idx_40106,line_40115,col_40136);

var G__40138 = cljs.core.next.call(null,seq__39967_40129__$1);
var G__40139 = null;
var G__40140 = (0);
var G__40141 = (0);
seq__39967_40117 = G__40138;
chunk__39968_40118 = G__40139;
count__39969_40119 = G__40140;
i__39970_40120 = G__40141;
continue;
}
} else {
}
}
break;
}

var G__40142 = seq__39960_40110;
var G__40143 = chunk__39961_40111;
var G__40144 = count__39962_40112;
var G__40145 = (i__39963_40113 + (1));
seq__39960_40110 = G__40142;
chunk__39961_40111 = G__40143;
count__39962_40112 = G__40144;
i__39963_40113 = G__40145;
continue;
} else {
var temp__4657__auto___40146__$1 = cljs.core.seq.call(null,seq__39960_40110);
if(temp__4657__auto___40146__$1){
var seq__39960_40147__$1 = temp__4657__auto___40146__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39960_40147__$1)){
var c__37147__auto___40148 = cljs.core.chunk_first.call(null,seq__39960_40147__$1);
var G__40149 = cljs.core.chunk_rest.call(null,seq__39960_40147__$1);
var G__40150 = c__37147__auto___40148;
var G__40151 = cljs.core.count.call(null,c__37147__auto___40148);
var G__40152 = (0);
seq__39960_40110 = G__40149;
chunk__39961_40111 = G__40150;
count__39962_40112 = G__40151;
i__39963_40113 = G__40152;
continue;
} else {
var vec__39977_40153 = cljs.core.first.call(null,seq__39960_40147__$1);
var line_40154 = cljs.core.nth.call(null,vec__39977_40153,(0),null);
var cols_40155 = cljs.core.nth.call(null,vec__39977_40153,(1),null);
var seq__39980_40156 = cljs.core.seq.call(null,cols_40155);
var chunk__39981_40157 = null;
var count__39982_40158 = (0);
var i__39983_40159 = (0);
while(true){
if((i__39983_40159 < count__39982_40158)){
var vec__39984_40160 = cljs.core._nth.call(null,chunk__39981_40157,i__39983_40159);
var col_40161 = cljs.core.nth.call(null,vec__39984_40160,(0),null);
var infos_40162 = cljs.core.nth.call(null,vec__39984_40160,(1),null);
encode_cols.call(null,infos_40162,source_idx_40106,line_40154,col_40161);

var G__40163 = seq__39980_40156;
var G__40164 = chunk__39981_40157;
var G__40165 = count__39982_40158;
var G__40166 = (i__39983_40159 + (1));
seq__39980_40156 = G__40163;
chunk__39981_40157 = G__40164;
count__39982_40158 = G__40165;
i__39983_40159 = G__40166;
continue;
} else {
var temp__4657__auto___40167__$2 = cljs.core.seq.call(null,seq__39980_40156);
if(temp__4657__auto___40167__$2){
var seq__39980_40168__$1 = temp__4657__auto___40167__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39980_40168__$1)){
var c__37147__auto___40169 = cljs.core.chunk_first.call(null,seq__39980_40168__$1);
var G__40170 = cljs.core.chunk_rest.call(null,seq__39980_40168__$1);
var G__40171 = c__37147__auto___40169;
var G__40172 = cljs.core.count.call(null,c__37147__auto___40169);
var G__40173 = (0);
seq__39980_40156 = G__40170;
chunk__39981_40157 = G__40171;
count__39982_40158 = G__40172;
i__39983_40159 = G__40173;
continue;
} else {
var vec__39987_40174 = cljs.core.first.call(null,seq__39980_40168__$1);
var col_40175 = cljs.core.nth.call(null,vec__39987_40174,(0),null);
var infos_40176 = cljs.core.nth.call(null,vec__39987_40174,(1),null);
encode_cols.call(null,infos_40176,source_idx_40106,line_40154,col_40175);

var G__40177 = cljs.core.next.call(null,seq__39980_40168__$1);
var G__40178 = null;
var G__40179 = (0);
var G__40180 = (0);
seq__39980_40156 = G__40177;
chunk__39981_40157 = G__40178;
count__39982_40158 = G__40179;
i__39983_40159 = G__40180;
continue;
}
} else {
}
}
break;
}

var G__40181 = cljs.core.next.call(null,seq__39960_40147__$1);
var G__40182 = null;
var G__40183 = (0);
var G__40184 = (0);
seq__39960_40110 = G__40181;
chunk__39961_40111 = G__40182;
count__39962_40112 = G__40183;
i__39963_40113 = G__40184;
continue;
}
} else {
}
}
break;
}

var G__40185 = cljs.core.next.call(null,seq__39914_40099__$1);
var G__40186 = null;
var G__40187 = (0);
var G__40188 = (0);
seq__39914_40010 = G__40185;
chunk__39915_40011 = G__40186;
count__39916_40012 = G__40187;
i__39917_40013 = G__40188;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__39990 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__39907_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39907_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__39908_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__39908_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__39909_SHARP_){
return clojure.string.join.call(null,",",p1__39909_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__39991 = G__39990;
goog.object.set(G__39991,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__39991;
} else {
return G__39990;
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
var vec__40189 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__40189,(0),null);
var col_map = cljs.core.nth.call(null,vec__40189,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__40192 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__40192,(0),null);
var infos = cljs.core.nth.call(null,vec__40192,(1),null);
var G__40198 = cljs.core.next.call(null,col_map_seq);
var G__40199 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__40192,col,infos,vec__40189,line,col_map){
return (function (v,p__40195){
var map__40196 = p__40195;
var map__40196__$1 = ((((!((map__40196 == null)))?((((map__40196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40196):map__40196);
var gline = cljs.core.get.call(null,map__40196__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__40196__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__40192,col,infos,vec__40189,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__40198;
new_cols = G__40199;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__40200 = cljs.core.next.call(null,line_map_seq);
var G__40201 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__40200;
new_lines = G__40201;
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
var seq__40202_40264 = cljs.core.seq.call(null,reverse_map);
var chunk__40203_40265 = null;
var count__40204_40266 = (0);
var i__40205_40267 = (0);
while(true){
if((i__40205_40267 < count__40204_40266)){
var vec__40206_40268 = cljs.core._nth.call(null,chunk__40203_40265,i__40205_40267);
var line_40269 = cljs.core.nth.call(null,vec__40206_40268,(0),null);
var columns_40270 = cljs.core.nth.call(null,vec__40206_40268,(1),null);
var seq__40209_40271 = cljs.core.seq.call(null,columns_40270);
var chunk__40210_40272 = null;
var count__40211_40273 = (0);
var i__40212_40274 = (0);
while(true){
if((i__40212_40274 < count__40211_40273)){
var vec__40213_40275 = cljs.core._nth.call(null,chunk__40210_40272,i__40212_40274);
var column_40276 = cljs.core.nth.call(null,vec__40213_40275,(0),null);
var column_info_40277 = cljs.core.nth.call(null,vec__40213_40275,(1),null);
var seq__40216_40278 = cljs.core.seq.call(null,column_info_40277);
var chunk__40217_40279 = null;
var count__40218_40280 = (0);
var i__40219_40281 = (0);
while(true){
if((i__40219_40281 < count__40218_40280)){
var map__40220_40282 = cljs.core._nth.call(null,chunk__40217_40279,i__40219_40281);
var map__40220_40283__$1 = ((((!((map__40220_40282 == null)))?((((map__40220_40282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40220_40282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40220_40282):map__40220_40282);
var gline_40284 = cljs.core.get.call(null,map__40220_40283__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40285 = cljs.core.get.call(null,map__40220_40283__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40286 = cljs.core.get.call(null,map__40220_40283__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40284], null),cljs.core.fnil.call(null,((function (seq__40216_40278,chunk__40217_40279,count__40218_40280,i__40219_40281,seq__40209_40271,chunk__40210_40272,count__40211_40273,i__40212_40274,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40220_40282,map__40220_40283__$1,gline_40284,gcol_40285,name_40286,vec__40213_40275,column_40276,column_info_40277,vec__40206_40268,line_40269,columns_40270,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40285], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40269,new cljs.core.Keyword(null,"col","col",-1959363084),column_40276,new cljs.core.Keyword(null,"name","name",1843675177),name_40286], null));
});})(seq__40216_40278,chunk__40217_40279,count__40218_40280,i__40219_40281,seq__40209_40271,chunk__40210_40272,count__40211_40273,i__40212_40274,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40220_40282,map__40220_40283__$1,gline_40284,gcol_40285,name_40286,vec__40213_40275,column_40276,column_info_40277,vec__40206_40268,line_40269,columns_40270,inverted))
,cljs.core.sorted_map.call(null)));

var G__40287 = seq__40216_40278;
var G__40288 = chunk__40217_40279;
var G__40289 = count__40218_40280;
var G__40290 = (i__40219_40281 + (1));
seq__40216_40278 = G__40287;
chunk__40217_40279 = G__40288;
count__40218_40280 = G__40289;
i__40219_40281 = G__40290;
continue;
} else {
var temp__4657__auto___40291 = cljs.core.seq.call(null,seq__40216_40278);
if(temp__4657__auto___40291){
var seq__40216_40292__$1 = temp__4657__auto___40291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40216_40292__$1)){
var c__37147__auto___40293 = cljs.core.chunk_first.call(null,seq__40216_40292__$1);
var G__40294 = cljs.core.chunk_rest.call(null,seq__40216_40292__$1);
var G__40295 = c__37147__auto___40293;
var G__40296 = cljs.core.count.call(null,c__37147__auto___40293);
var G__40297 = (0);
seq__40216_40278 = G__40294;
chunk__40217_40279 = G__40295;
count__40218_40280 = G__40296;
i__40219_40281 = G__40297;
continue;
} else {
var map__40222_40298 = cljs.core.first.call(null,seq__40216_40292__$1);
var map__40222_40299__$1 = ((((!((map__40222_40298 == null)))?((((map__40222_40298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40222_40298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40222_40298):map__40222_40298);
var gline_40300 = cljs.core.get.call(null,map__40222_40299__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40301 = cljs.core.get.call(null,map__40222_40299__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40302 = cljs.core.get.call(null,map__40222_40299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40300], null),cljs.core.fnil.call(null,((function (seq__40216_40278,chunk__40217_40279,count__40218_40280,i__40219_40281,seq__40209_40271,chunk__40210_40272,count__40211_40273,i__40212_40274,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40222_40298,map__40222_40299__$1,gline_40300,gcol_40301,name_40302,seq__40216_40292__$1,temp__4657__auto___40291,vec__40213_40275,column_40276,column_info_40277,vec__40206_40268,line_40269,columns_40270,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40301], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40269,new cljs.core.Keyword(null,"col","col",-1959363084),column_40276,new cljs.core.Keyword(null,"name","name",1843675177),name_40302], null));
});})(seq__40216_40278,chunk__40217_40279,count__40218_40280,i__40219_40281,seq__40209_40271,chunk__40210_40272,count__40211_40273,i__40212_40274,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40222_40298,map__40222_40299__$1,gline_40300,gcol_40301,name_40302,seq__40216_40292__$1,temp__4657__auto___40291,vec__40213_40275,column_40276,column_info_40277,vec__40206_40268,line_40269,columns_40270,inverted))
,cljs.core.sorted_map.call(null)));

var G__40303 = cljs.core.next.call(null,seq__40216_40292__$1);
var G__40304 = null;
var G__40305 = (0);
var G__40306 = (0);
seq__40216_40278 = G__40303;
chunk__40217_40279 = G__40304;
count__40218_40280 = G__40305;
i__40219_40281 = G__40306;
continue;
}
} else {
}
}
break;
}

var G__40307 = seq__40209_40271;
var G__40308 = chunk__40210_40272;
var G__40309 = count__40211_40273;
var G__40310 = (i__40212_40274 + (1));
seq__40209_40271 = G__40307;
chunk__40210_40272 = G__40308;
count__40211_40273 = G__40309;
i__40212_40274 = G__40310;
continue;
} else {
var temp__4657__auto___40311 = cljs.core.seq.call(null,seq__40209_40271);
if(temp__4657__auto___40311){
var seq__40209_40312__$1 = temp__4657__auto___40311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40209_40312__$1)){
var c__37147__auto___40313 = cljs.core.chunk_first.call(null,seq__40209_40312__$1);
var G__40314 = cljs.core.chunk_rest.call(null,seq__40209_40312__$1);
var G__40315 = c__37147__auto___40313;
var G__40316 = cljs.core.count.call(null,c__37147__auto___40313);
var G__40317 = (0);
seq__40209_40271 = G__40314;
chunk__40210_40272 = G__40315;
count__40211_40273 = G__40316;
i__40212_40274 = G__40317;
continue;
} else {
var vec__40224_40318 = cljs.core.first.call(null,seq__40209_40312__$1);
var column_40319 = cljs.core.nth.call(null,vec__40224_40318,(0),null);
var column_info_40320 = cljs.core.nth.call(null,vec__40224_40318,(1),null);
var seq__40227_40321 = cljs.core.seq.call(null,column_info_40320);
var chunk__40228_40322 = null;
var count__40229_40323 = (0);
var i__40230_40324 = (0);
while(true){
if((i__40230_40324 < count__40229_40323)){
var map__40231_40325 = cljs.core._nth.call(null,chunk__40228_40322,i__40230_40324);
var map__40231_40326__$1 = ((((!((map__40231_40325 == null)))?((((map__40231_40325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40231_40325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40231_40325):map__40231_40325);
var gline_40327 = cljs.core.get.call(null,map__40231_40326__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40328 = cljs.core.get.call(null,map__40231_40326__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40329 = cljs.core.get.call(null,map__40231_40326__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40327], null),cljs.core.fnil.call(null,((function (seq__40227_40321,chunk__40228_40322,count__40229_40323,i__40230_40324,seq__40209_40271,chunk__40210_40272,count__40211_40273,i__40212_40274,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40231_40325,map__40231_40326__$1,gline_40327,gcol_40328,name_40329,vec__40224_40318,column_40319,column_info_40320,seq__40209_40312__$1,temp__4657__auto___40311,vec__40206_40268,line_40269,columns_40270,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40328], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40269,new cljs.core.Keyword(null,"col","col",-1959363084),column_40319,new cljs.core.Keyword(null,"name","name",1843675177),name_40329], null));
});})(seq__40227_40321,chunk__40228_40322,count__40229_40323,i__40230_40324,seq__40209_40271,chunk__40210_40272,count__40211_40273,i__40212_40274,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40231_40325,map__40231_40326__$1,gline_40327,gcol_40328,name_40329,vec__40224_40318,column_40319,column_info_40320,seq__40209_40312__$1,temp__4657__auto___40311,vec__40206_40268,line_40269,columns_40270,inverted))
,cljs.core.sorted_map.call(null)));

var G__40330 = seq__40227_40321;
var G__40331 = chunk__40228_40322;
var G__40332 = count__40229_40323;
var G__40333 = (i__40230_40324 + (1));
seq__40227_40321 = G__40330;
chunk__40228_40322 = G__40331;
count__40229_40323 = G__40332;
i__40230_40324 = G__40333;
continue;
} else {
var temp__4657__auto___40334__$1 = cljs.core.seq.call(null,seq__40227_40321);
if(temp__4657__auto___40334__$1){
var seq__40227_40335__$1 = temp__4657__auto___40334__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40227_40335__$1)){
var c__37147__auto___40336 = cljs.core.chunk_first.call(null,seq__40227_40335__$1);
var G__40337 = cljs.core.chunk_rest.call(null,seq__40227_40335__$1);
var G__40338 = c__37147__auto___40336;
var G__40339 = cljs.core.count.call(null,c__37147__auto___40336);
var G__40340 = (0);
seq__40227_40321 = G__40337;
chunk__40228_40322 = G__40338;
count__40229_40323 = G__40339;
i__40230_40324 = G__40340;
continue;
} else {
var map__40233_40341 = cljs.core.first.call(null,seq__40227_40335__$1);
var map__40233_40342__$1 = ((((!((map__40233_40341 == null)))?((((map__40233_40341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40233_40341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40233_40341):map__40233_40341);
var gline_40343 = cljs.core.get.call(null,map__40233_40342__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40344 = cljs.core.get.call(null,map__40233_40342__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40345 = cljs.core.get.call(null,map__40233_40342__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40343], null),cljs.core.fnil.call(null,((function (seq__40227_40321,chunk__40228_40322,count__40229_40323,i__40230_40324,seq__40209_40271,chunk__40210_40272,count__40211_40273,i__40212_40274,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40233_40341,map__40233_40342__$1,gline_40343,gcol_40344,name_40345,seq__40227_40335__$1,temp__4657__auto___40334__$1,vec__40224_40318,column_40319,column_info_40320,seq__40209_40312__$1,temp__4657__auto___40311,vec__40206_40268,line_40269,columns_40270,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40344], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40269,new cljs.core.Keyword(null,"col","col",-1959363084),column_40319,new cljs.core.Keyword(null,"name","name",1843675177),name_40345], null));
});})(seq__40227_40321,chunk__40228_40322,count__40229_40323,i__40230_40324,seq__40209_40271,chunk__40210_40272,count__40211_40273,i__40212_40274,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40233_40341,map__40233_40342__$1,gline_40343,gcol_40344,name_40345,seq__40227_40335__$1,temp__4657__auto___40334__$1,vec__40224_40318,column_40319,column_info_40320,seq__40209_40312__$1,temp__4657__auto___40311,vec__40206_40268,line_40269,columns_40270,inverted))
,cljs.core.sorted_map.call(null)));

var G__40346 = cljs.core.next.call(null,seq__40227_40335__$1);
var G__40347 = null;
var G__40348 = (0);
var G__40349 = (0);
seq__40227_40321 = G__40346;
chunk__40228_40322 = G__40347;
count__40229_40323 = G__40348;
i__40230_40324 = G__40349;
continue;
}
} else {
}
}
break;
}

var G__40350 = cljs.core.next.call(null,seq__40209_40312__$1);
var G__40351 = null;
var G__40352 = (0);
var G__40353 = (0);
seq__40209_40271 = G__40350;
chunk__40210_40272 = G__40351;
count__40211_40273 = G__40352;
i__40212_40274 = G__40353;
continue;
}
} else {
}
}
break;
}

var G__40354 = seq__40202_40264;
var G__40355 = chunk__40203_40265;
var G__40356 = count__40204_40266;
var G__40357 = (i__40205_40267 + (1));
seq__40202_40264 = G__40354;
chunk__40203_40265 = G__40355;
count__40204_40266 = G__40356;
i__40205_40267 = G__40357;
continue;
} else {
var temp__4657__auto___40358 = cljs.core.seq.call(null,seq__40202_40264);
if(temp__4657__auto___40358){
var seq__40202_40359__$1 = temp__4657__auto___40358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40202_40359__$1)){
var c__37147__auto___40360 = cljs.core.chunk_first.call(null,seq__40202_40359__$1);
var G__40361 = cljs.core.chunk_rest.call(null,seq__40202_40359__$1);
var G__40362 = c__37147__auto___40360;
var G__40363 = cljs.core.count.call(null,c__37147__auto___40360);
var G__40364 = (0);
seq__40202_40264 = G__40361;
chunk__40203_40265 = G__40362;
count__40204_40266 = G__40363;
i__40205_40267 = G__40364;
continue;
} else {
var vec__40235_40365 = cljs.core.first.call(null,seq__40202_40359__$1);
var line_40366 = cljs.core.nth.call(null,vec__40235_40365,(0),null);
var columns_40367 = cljs.core.nth.call(null,vec__40235_40365,(1),null);
var seq__40238_40368 = cljs.core.seq.call(null,columns_40367);
var chunk__40239_40369 = null;
var count__40240_40370 = (0);
var i__40241_40371 = (0);
while(true){
if((i__40241_40371 < count__40240_40370)){
var vec__40242_40372 = cljs.core._nth.call(null,chunk__40239_40369,i__40241_40371);
var column_40373 = cljs.core.nth.call(null,vec__40242_40372,(0),null);
var column_info_40374 = cljs.core.nth.call(null,vec__40242_40372,(1),null);
var seq__40245_40375 = cljs.core.seq.call(null,column_info_40374);
var chunk__40246_40376 = null;
var count__40247_40377 = (0);
var i__40248_40378 = (0);
while(true){
if((i__40248_40378 < count__40247_40377)){
var map__40249_40379 = cljs.core._nth.call(null,chunk__40246_40376,i__40248_40378);
var map__40249_40380__$1 = ((((!((map__40249_40379 == null)))?((((map__40249_40379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40249_40379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40249_40379):map__40249_40379);
var gline_40381 = cljs.core.get.call(null,map__40249_40380__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40382 = cljs.core.get.call(null,map__40249_40380__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40383 = cljs.core.get.call(null,map__40249_40380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40381], null),cljs.core.fnil.call(null,((function (seq__40245_40375,chunk__40246_40376,count__40247_40377,i__40248_40378,seq__40238_40368,chunk__40239_40369,count__40240_40370,i__40241_40371,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40249_40379,map__40249_40380__$1,gline_40381,gcol_40382,name_40383,vec__40242_40372,column_40373,column_info_40374,vec__40235_40365,line_40366,columns_40367,seq__40202_40359__$1,temp__4657__auto___40358,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40382], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40366,new cljs.core.Keyword(null,"col","col",-1959363084),column_40373,new cljs.core.Keyword(null,"name","name",1843675177),name_40383], null));
});})(seq__40245_40375,chunk__40246_40376,count__40247_40377,i__40248_40378,seq__40238_40368,chunk__40239_40369,count__40240_40370,i__40241_40371,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40249_40379,map__40249_40380__$1,gline_40381,gcol_40382,name_40383,vec__40242_40372,column_40373,column_info_40374,vec__40235_40365,line_40366,columns_40367,seq__40202_40359__$1,temp__4657__auto___40358,inverted))
,cljs.core.sorted_map.call(null)));

var G__40384 = seq__40245_40375;
var G__40385 = chunk__40246_40376;
var G__40386 = count__40247_40377;
var G__40387 = (i__40248_40378 + (1));
seq__40245_40375 = G__40384;
chunk__40246_40376 = G__40385;
count__40247_40377 = G__40386;
i__40248_40378 = G__40387;
continue;
} else {
var temp__4657__auto___40388__$1 = cljs.core.seq.call(null,seq__40245_40375);
if(temp__4657__auto___40388__$1){
var seq__40245_40389__$1 = temp__4657__auto___40388__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40245_40389__$1)){
var c__37147__auto___40390 = cljs.core.chunk_first.call(null,seq__40245_40389__$1);
var G__40391 = cljs.core.chunk_rest.call(null,seq__40245_40389__$1);
var G__40392 = c__37147__auto___40390;
var G__40393 = cljs.core.count.call(null,c__37147__auto___40390);
var G__40394 = (0);
seq__40245_40375 = G__40391;
chunk__40246_40376 = G__40392;
count__40247_40377 = G__40393;
i__40248_40378 = G__40394;
continue;
} else {
var map__40251_40395 = cljs.core.first.call(null,seq__40245_40389__$1);
var map__40251_40396__$1 = ((((!((map__40251_40395 == null)))?((((map__40251_40395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40251_40395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40251_40395):map__40251_40395);
var gline_40397 = cljs.core.get.call(null,map__40251_40396__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40398 = cljs.core.get.call(null,map__40251_40396__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40399 = cljs.core.get.call(null,map__40251_40396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40397], null),cljs.core.fnil.call(null,((function (seq__40245_40375,chunk__40246_40376,count__40247_40377,i__40248_40378,seq__40238_40368,chunk__40239_40369,count__40240_40370,i__40241_40371,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40251_40395,map__40251_40396__$1,gline_40397,gcol_40398,name_40399,seq__40245_40389__$1,temp__4657__auto___40388__$1,vec__40242_40372,column_40373,column_info_40374,vec__40235_40365,line_40366,columns_40367,seq__40202_40359__$1,temp__4657__auto___40358,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40398], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40366,new cljs.core.Keyword(null,"col","col",-1959363084),column_40373,new cljs.core.Keyword(null,"name","name",1843675177),name_40399], null));
});})(seq__40245_40375,chunk__40246_40376,count__40247_40377,i__40248_40378,seq__40238_40368,chunk__40239_40369,count__40240_40370,i__40241_40371,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40251_40395,map__40251_40396__$1,gline_40397,gcol_40398,name_40399,seq__40245_40389__$1,temp__4657__auto___40388__$1,vec__40242_40372,column_40373,column_info_40374,vec__40235_40365,line_40366,columns_40367,seq__40202_40359__$1,temp__4657__auto___40358,inverted))
,cljs.core.sorted_map.call(null)));

var G__40400 = cljs.core.next.call(null,seq__40245_40389__$1);
var G__40401 = null;
var G__40402 = (0);
var G__40403 = (0);
seq__40245_40375 = G__40400;
chunk__40246_40376 = G__40401;
count__40247_40377 = G__40402;
i__40248_40378 = G__40403;
continue;
}
} else {
}
}
break;
}

var G__40404 = seq__40238_40368;
var G__40405 = chunk__40239_40369;
var G__40406 = count__40240_40370;
var G__40407 = (i__40241_40371 + (1));
seq__40238_40368 = G__40404;
chunk__40239_40369 = G__40405;
count__40240_40370 = G__40406;
i__40241_40371 = G__40407;
continue;
} else {
var temp__4657__auto___40408__$1 = cljs.core.seq.call(null,seq__40238_40368);
if(temp__4657__auto___40408__$1){
var seq__40238_40409__$1 = temp__4657__auto___40408__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40238_40409__$1)){
var c__37147__auto___40410 = cljs.core.chunk_first.call(null,seq__40238_40409__$1);
var G__40411 = cljs.core.chunk_rest.call(null,seq__40238_40409__$1);
var G__40412 = c__37147__auto___40410;
var G__40413 = cljs.core.count.call(null,c__37147__auto___40410);
var G__40414 = (0);
seq__40238_40368 = G__40411;
chunk__40239_40369 = G__40412;
count__40240_40370 = G__40413;
i__40241_40371 = G__40414;
continue;
} else {
var vec__40253_40415 = cljs.core.first.call(null,seq__40238_40409__$1);
var column_40416 = cljs.core.nth.call(null,vec__40253_40415,(0),null);
var column_info_40417 = cljs.core.nth.call(null,vec__40253_40415,(1),null);
var seq__40256_40418 = cljs.core.seq.call(null,column_info_40417);
var chunk__40257_40419 = null;
var count__40258_40420 = (0);
var i__40259_40421 = (0);
while(true){
if((i__40259_40421 < count__40258_40420)){
var map__40260_40422 = cljs.core._nth.call(null,chunk__40257_40419,i__40259_40421);
var map__40260_40423__$1 = ((((!((map__40260_40422 == null)))?((((map__40260_40422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40260_40422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40260_40422):map__40260_40422);
var gline_40424 = cljs.core.get.call(null,map__40260_40423__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40425 = cljs.core.get.call(null,map__40260_40423__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40426 = cljs.core.get.call(null,map__40260_40423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40424], null),cljs.core.fnil.call(null,((function (seq__40256_40418,chunk__40257_40419,count__40258_40420,i__40259_40421,seq__40238_40368,chunk__40239_40369,count__40240_40370,i__40241_40371,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40260_40422,map__40260_40423__$1,gline_40424,gcol_40425,name_40426,vec__40253_40415,column_40416,column_info_40417,seq__40238_40409__$1,temp__4657__auto___40408__$1,vec__40235_40365,line_40366,columns_40367,seq__40202_40359__$1,temp__4657__auto___40358,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40425], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40366,new cljs.core.Keyword(null,"col","col",-1959363084),column_40416,new cljs.core.Keyword(null,"name","name",1843675177),name_40426], null));
});})(seq__40256_40418,chunk__40257_40419,count__40258_40420,i__40259_40421,seq__40238_40368,chunk__40239_40369,count__40240_40370,i__40241_40371,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40260_40422,map__40260_40423__$1,gline_40424,gcol_40425,name_40426,vec__40253_40415,column_40416,column_info_40417,seq__40238_40409__$1,temp__4657__auto___40408__$1,vec__40235_40365,line_40366,columns_40367,seq__40202_40359__$1,temp__4657__auto___40358,inverted))
,cljs.core.sorted_map.call(null)));

var G__40427 = seq__40256_40418;
var G__40428 = chunk__40257_40419;
var G__40429 = count__40258_40420;
var G__40430 = (i__40259_40421 + (1));
seq__40256_40418 = G__40427;
chunk__40257_40419 = G__40428;
count__40258_40420 = G__40429;
i__40259_40421 = G__40430;
continue;
} else {
var temp__4657__auto___40431__$2 = cljs.core.seq.call(null,seq__40256_40418);
if(temp__4657__auto___40431__$2){
var seq__40256_40432__$1 = temp__4657__auto___40431__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40256_40432__$1)){
var c__37147__auto___40433 = cljs.core.chunk_first.call(null,seq__40256_40432__$1);
var G__40434 = cljs.core.chunk_rest.call(null,seq__40256_40432__$1);
var G__40435 = c__37147__auto___40433;
var G__40436 = cljs.core.count.call(null,c__37147__auto___40433);
var G__40437 = (0);
seq__40256_40418 = G__40434;
chunk__40257_40419 = G__40435;
count__40258_40420 = G__40436;
i__40259_40421 = G__40437;
continue;
} else {
var map__40262_40438 = cljs.core.first.call(null,seq__40256_40432__$1);
var map__40262_40439__$1 = ((((!((map__40262_40438 == null)))?((((map__40262_40438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40262_40438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40262_40438):map__40262_40438);
var gline_40440 = cljs.core.get.call(null,map__40262_40439__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40441 = cljs.core.get.call(null,map__40262_40439__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40442 = cljs.core.get.call(null,map__40262_40439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40440], null),cljs.core.fnil.call(null,((function (seq__40256_40418,chunk__40257_40419,count__40258_40420,i__40259_40421,seq__40238_40368,chunk__40239_40369,count__40240_40370,i__40241_40371,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40262_40438,map__40262_40439__$1,gline_40440,gcol_40441,name_40442,seq__40256_40432__$1,temp__4657__auto___40431__$2,vec__40253_40415,column_40416,column_info_40417,seq__40238_40409__$1,temp__4657__auto___40408__$1,vec__40235_40365,line_40366,columns_40367,seq__40202_40359__$1,temp__4657__auto___40358,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40441], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40366,new cljs.core.Keyword(null,"col","col",-1959363084),column_40416,new cljs.core.Keyword(null,"name","name",1843675177),name_40442], null));
});})(seq__40256_40418,chunk__40257_40419,count__40258_40420,i__40259_40421,seq__40238_40368,chunk__40239_40369,count__40240_40370,i__40241_40371,seq__40202_40264,chunk__40203_40265,count__40204_40266,i__40205_40267,map__40262_40438,map__40262_40439__$1,gline_40440,gcol_40441,name_40442,seq__40256_40432__$1,temp__4657__auto___40431__$2,vec__40253_40415,column_40416,column_info_40417,seq__40238_40409__$1,temp__4657__auto___40408__$1,vec__40235_40365,line_40366,columns_40367,seq__40202_40359__$1,temp__4657__auto___40358,inverted))
,cljs.core.sorted_map.call(null)));

var G__40443 = cljs.core.next.call(null,seq__40256_40432__$1);
var G__40444 = null;
var G__40445 = (0);
var G__40446 = (0);
seq__40256_40418 = G__40443;
chunk__40257_40419 = G__40444;
count__40258_40420 = G__40445;
i__40259_40421 = G__40446;
continue;
}
} else {
}
}
break;
}

var G__40447 = cljs.core.next.call(null,seq__40238_40409__$1);
var G__40448 = null;
var G__40449 = (0);
var G__40450 = (0);
seq__40238_40368 = G__40447;
chunk__40239_40369 = G__40448;
count__40240_40370 = G__40449;
i__40241_40371 = G__40450;
continue;
}
} else {
}
}
break;
}

var G__40451 = cljs.core.next.call(null,seq__40202_40359__$1);
var G__40452 = null;
var G__40453 = (0);
var G__40454 = (0);
seq__40202_40264 = G__40451;
chunk__40203_40265 = G__40452;
count__40204_40266 = G__40453;
i__40205_40267 = G__40454;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1518330160268
