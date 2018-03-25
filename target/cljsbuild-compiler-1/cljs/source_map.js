// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__15440){
var vec__15441 = p__15440;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15441,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__15444 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__4657__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
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
var vec__15447 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15447,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15447,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15447,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15447,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15447,(4),null);
var vec__15450 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(4),null);
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
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__15453 = segmap;
var map__15453__$1 = ((((!((map__15453 == null)))?((((map__15453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15453):map__15453);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15453__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15453__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15453__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15453__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15453__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15453,map__15453__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15453,map__15453__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15453,map__15453__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__15453,map__15453__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15453,map__15453__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__15453,map__15453__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__15456 = arguments.length;
switch (G__15456) {
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
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__15457 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15461 = cljs.core.next(segs__$1);
var G__15462 = nrelseg;
var G__15463 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15461;
relseg__$1 = G__15462;
result__$1 = G__15463;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(1),null);
var G__15464 = (gline + (1));
var G__15465 = cljs.core.next(lines__$1);
var G__15466 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15467 = result__$1;
gline = G__15464;
lines__$1 = G__15465;
relseg = G__15466;
result = G__15467;
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
var map__15469 = segmap;
var map__15469__$1 = ((((!((map__15469 == null)))?((((map__15469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15469):map__15469);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15469,map__15469__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15469,map__15469__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__15468_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15468_SHARP_,d__$1);
});})(map__15469,map__15469__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15469,map__15469__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__15472 = arguments.length;
switch (G__15472) {
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
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__15473 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15477 = cljs.core.next(segs__$1);
var G__15478 = nrelseg;
var G__15479 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15477;
relseg__$1 = G__15478;
result__$1 = G__15479;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15473,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15473,(1),null);
var G__15480 = (gline + (1));
var G__15481 = cljs.core.next(lines__$1);
var G__15482 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15483 = result__$1;
gline = G__15480;
lines__$1 = G__15481;
relseg = G__15482;
result = G__15483;
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
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__15484){
var vec__15485 = p__15484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15485,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15485,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15485,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15485,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15485,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__15488){
var vec__15489 = p__15488;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(4),null);
var seg = vec__15489;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__15489,gcol,sidx,line,col,name,seg,relseg){
return (function (p__15492){
var vec__15493 = p__15492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15493,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15493,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15493,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15493,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15493,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__7668__auto__ = name;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__15489,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
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
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__7668__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__15499 = cljs.core.seq(infos);
var chunk__15500 = null;
var count__15501 = (0);
var i__15502 = (0);
while(true){
if((i__15502 < count__15501)){
var info = chunk__15500.cljs$core$IIndexed$_nth$arity$2(null,i__15502);
var segv_15584 = info__GT_segv(info,source_idx,line,col);
var gline_15585 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_15586 = cljs.core.count(cljs.core.deref(lines));
if((gline_15585 > (lc_15586 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__15499,chunk__15500,count__15501,i__15502,segv_15584,gline_15585,lc_15586,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_15585 - (lc_15586 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15584], null));
});})(seq__15499,chunk__15500,count__15501,i__15502,segv_15584,gline_15585,lc_15586,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__15499,chunk__15500,count__15501,i__15502,segv_15584,gline_15585,lc_15586,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15585], null),cljs.core.conj,segv_15584);
});})(seq__15499,chunk__15500,count__15501,i__15502,segv_15584,gline_15585,lc_15586,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__15587 = seq__15499;
var G__15588 = chunk__15500;
var G__15589 = count__15501;
var G__15590 = (i__15502 + (1));
seq__15499 = G__15587;
chunk__15500 = G__15588;
count__15501 = G__15589;
i__15502 = G__15590;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15499);
if(temp__4657__auto__){
var seq__15499__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15499__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__15499__$1);
var G__15591 = cljs.core.chunk_rest(seq__15499__$1);
var G__15592 = c__8507__auto__;
var G__15593 = cljs.core.count(c__8507__auto__);
var G__15594 = (0);
seq__15499 = G__15591;
chunk__15500 = G__15592;
count__15501 = G__15593;
i__15502 = G__15594;
continue;
} else {
var info = cljs.core.first(seq__15499__$1);
var segv_15595 = info__GT_segv(info,source_idx,line,col);
var gline_15596 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_15597 = cljs.core.count(cljs.core.deref(lines));
if((gline_15596 > (lc_15597 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__15499,chunk__15500,count__15501,i__15502,segv_15595,gline_15596,lc_15597,info,seq__15499__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_15596 - (lc_15597 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15595], null));
});})(seq__15499,chunk__15500,count__15501,i__15502,segv_15595,gline_15596,lc_15597,info,seq__15499__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__15499,chunk__15500,count__15501,i__15502,segv_15595,gline_15596,lc_15597,info,seq__15499__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15596], null),cljs.core.conj,segv_15595);
});})(seq__15499,chunk__15500,count__15501,i__15502,segv_15595,gline_15596,lc_15597,info,seq__15499__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__15598 = cljs.core.next(seq__15499__$1);
var G__15599 = null;
var G__15600 = (0);
var G__15601 = (0);
seq__15499 = G__15598;
chunk__15500 = G__15599;
count__15501 = G__15600;
i__15502 = G__15601;
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
var seq__15503_15602 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__15504_15603 = null;
var count__15505_15604 = (0);
var i__15506_15605 = (0);
while(true){
if((i__15506_15605 < count__15505_15604)){
var vec__15507_15606 = chunk__15504_15603.cljs$core$IIndexed$_nth$arity$2(null,i__15506_15605);
var source_idx_15607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15507_15606,(0),null);
var vec__15510_15608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15507_15606,(1),null);
var __15609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15510_15608,(0),null);
var lines_15610__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15510_15608,(1),null);
var seq__15513_15611 = cljs.core.seq(lines_15610__$1);
var chunk__15514_15612 = null;
var count__15515_15613 = (0);
var i__15516_15614 = (0);
while(true){
if((i__15516_15614 < count__15515_15613)){
var vec__15517_15615 = chunk__15514_15612.cljs$core$IIndexed$_nth$arity$2(null,i__15516_15614);
var line_15616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15517_15615,(0),null);
var cols_15617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15517_15615,(1),null);
var seq__15520_15618 = cljs.core.seq(cols_15617);
var chunk__15521_15619 = null;
var count__15522_15620 = (0);
var i__15523_15621 = (0);
while(true){
if((i__15523_15621 < count__15522_15620)){
var vec__15524_15622 = chunk__15521_15619.cljs$core$IIndexed$_nth$arity$2(null,i__15523_15621);
var col_15623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15524_15622,(0),null);
var infos_15624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15524_15622,(1),null);
encode_cols(infos_15624,source_idx_15607,line_15616,col_15623);

var G__15625 = seq__15520_15618;
var G__15626 = chunk__15521_15619;
var G__15627 = count__15522_15620;
var G__15628 = (i__15523_15621 + (1));
seq__15520_15618 = G__15625;
chunk__15521_15619 = G__15626;
count__15522_15620 = G__15627;
i__15523_15621 = G__15628;
continue;
} else {
var temp__4657__auto___15629 = cljs.core.seq(seq__15520_15618);
if(temp__4657__auto___15629){
var seq__15520_15630__$1 = temp__4657__auto___15629;
if(cljs.core.chunked_seq_QMARK_(seq__15520_15630__$1)){
var c__8507__auto___15631 = cljs.core.chunk_first(seq__15520_15630__$1);
var G__15632 = cljs.core.chunk_rest(seq__15520_15630__$1);
var G__15633 = c__8507__auto___15631;
var G__15634 = cljs.core.count(c__8507__auto___15631);
var G__15635 = (0);
seq__15520_15618 = G__15632;
chunk__15521_15619 = G__15633;
count__15522_15620 = G__15634;
i__15523_15621 = G__15635;
continue;
} else {
var vec__15527_15636 = cljs.core.first(seq__15520_15630__$1);
var col_15637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15527_15636,(0),null);
var infos_15638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15527_15636,(1),null);
encode_cols(infos_15638,source_idx_15607,line_15616,col_15637);

var G__15639 = cljs.core.next(seq__15520_15630__$1);
var G__15640 = null;
var G__15641 = (0);
var G__15642 = (0);
seq__15520_15618 = G__15639;
chunk__15521_15619 = G__15640;
count__15522_15620 = G__15641;
i__15523_15621 = G__15642;
continue;
}
} else {
}
}
break;
}

var G__15643 = seq__15513_15611;
var G__15644 = chunk__15514_15612;
var G__15645 = count__15515_15613;
var G__15646 = (i__15516_15614 + (1));
seq__15513_15611 = G__15643;
chunk__15514_15612 = G__15644;
count__15515_15613 = G__15645;
i__15516_15614 = G__15646;
continue;
} else {
var temp__4657__auto___15647 = cljs.core.seq(seq__15513_15611);
if(temp__4657__auto___15647){
var seq__15513_15648__$1 = temp__4657__auto___15647;
if(cljs.core.chunked_seq_QMARK_(seq__15513_15648__$1)){
var c__8507__auto___15649 = cljs.core.chunk_first(seq__15513_15648__$1);
var G__15650 = cljs.core.chunk_rest(seq__15513_15648__$1);
var G__15651 = c__8507__auto___15649;
var G__15652 = cljs.core.count(c__8507__auto___15649);
var G__15653 = (0);
seq__15513_15611 = G__15650;
chunk__15514_15612 = G__15651;
count__15515_15613 = G__15652;
i__15516_15614 = G__15653;
continue;
} else {
var vec__15530_15654 = cljs.core.first(seq__15513_15648__$1);
var line_15655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15530_15654,(0),null);
var cols_15656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15530_15654,(1),null);
var seq__15533_15657 = cljs.core.seq(cols_15656);
var chunk__15534_15658 = null;
var count__15535_15659 = (0);
var i__15536_15660 = (0);
while(true){
if((i__15536_15660 < count__15535_15659)){
var vec__15537_15661 = chunk__15534_15658.cljs$core$IIndexed$_nth$arity$2(null,i__15536_15660);
var col_15662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15537_15661,(0),null);
var infos_15663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15537_15661,(1),null);
encode_cols(infos_15663,source_idx_15607,line_15655,col_15662);

var G__15664 = seq__15533_15657;
var G__15665 = chunk__15534_15658;
var G__15666 = count__15535_15659;
var G__15667 = (i__15536_15660 + (1));
seq__15533_15657 = G__15664;
chunk__15534_15658 = G__15665;
count__15535_15659 = G__15666;
i__15536_15660 = G__15667;
continue;
} else {
var temp__4657__auto___15668__$1 = cljs.core.seq(seq__15533_15657);
if(temp__4657__auto___15668__$1){
var seq__15533_15669__$1 = temp__4657__auto___15668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15533_15669__$1)){
var c__8507__auto___15670 = cljs.core.chunk_first(seq__15533_15669__$1);
var G__15671 = cljs.core.chunk_rest(seq__15533_15669__$1);
var G__15672 = c__8507__auto___15670;
var G__15673 = cljs.core.count(c__8507__auto___15670);
var G__15674 = (0);
seq__15533_15657 = G__15671;
chunk__15534_15658 = G__15672;
count__15535_15659 = G__15673;
i__15536_15660 = G__15674;
continue;
} else {
var vec__15540_15675 = cljs.core.first(seq__15533_15669__$1);
var col_15676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540_15675,(0),null);
var infos_15677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540_15675,(1),null);
encode_cols(infos_15677,source_idx_15607,line_15655,col_15676);

var G__15678 = cljs.core.next(seq__15533_15669__$1);
var G__15679 = null;
var G__15680 = (0);
var G__15681 = (0);
seq__15533_15657 = G__15678;
chunk__15534_15658 = G__15679;
count__15535_15659 = G__15680;
i__15536_15660 = G__15681;
continue;
}
} else {
}
}
break;
}

var G__15682 = cljs.core.next(seq__15513_15648__$1);
var G__15683 = null;
var G__15684 = (0);
var G__15685 = (0);
seq__15513_15611 = G__15682;
chunk__15514_15612 = G__15683;
count__15515_15613 = G__15684;
i__15516_15614 = G__15685;
continue;
}
} else {
}
}
break;
}

var G__15686 = seq__15503_15602;
var G__15687 = chunk__15504_15603;
var G__15688 = count__15505_15604;
var G__15689 = (i__15506_15605 + (1));
seq__15503_15602 = G__15686;
chunk__15504_15603 = G__15687;
count__15505_15604 = G__15688;
i__15506_15605 = G__15689;
continue;
} else {
var temp__4657__auto___15690 = cljs.core.seq(seq__15503_15602);
if(temp__4657__auto___15690){
var seq__15503_15691__$1 = temp__4657__auto___15690;
if(cljs.core.chunked_seq_QMARK_(seq__15503_15691__$1)){
var c__8507__auto___15692 = cljs.core.chunk_first(seq__15503_15691__$1);
var G__15693 = cljs.core.chunk_rest(seq__15503_15691__$1);
var G__15694 = c__8507__auto___15692;
var G__15695 = cljs.core.count(c__8507__auto___15692);
var G__15696 = (0);
seq__15503_15602 = G__15693;
chunk__15504_15603 = G__15694;
count__15505_15604 = G__15695;
i__15506_15605 = G__15696;
continue;
} else {
var vec__15543_15697 = cljs.core.first(seq__15503_15691__$1);
var source_idx_15698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15543_15697,(0),null);
var vec__15546_15699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15543_15697,(1),null);
var __15700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546_15699,(0),null);
var lines_15701__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546_15699,(1),null);
var seq__15549_15702 = cljs.core.seq(lines_15701__$1);
var chunk__15550_15703 = null;
var count__15551_15704 = (0);
var i__15552_15705 = (0);
while(true){
if((i__15552_15705 < count__15551_15704)){
var vec__15553_15706 = chunk__15550_15703.cljs$core$IIndexed$_nth$arity$2(null,i__15552_15705);
var line_15707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553_15706,(0),null);
var cols_15708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553_15706,(1),null);
var seq__15556_15709 = cljs.core.seq(cols_15708);
var chunk__15557_15710 = null;
var count__15558_15711 = (0);
var i__15559_15712 = (0);
while(true){
if((i__15559_15712 < count__15558_15711)){
var vec__15560_15713 = chunk__15557_15710.cljs$core$IIndexed$_nth$arity$2(null,i__15559_15712);
var col_15714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15560_15713,(0),null);
var infos_15715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15560_15713,(1),null);
encode_cols(infos_15715,source_idx_15698,line_15707,col_15714);

var G__15716 = seq__15556_15709;
var G__15717 = chunk__15557_15710;
var G__15718 = count__15558_15711;
var G__15719 = (i__15559_15712 + (1));
seq__15556_15709 = G__15716;
chunk__15557_15710 = G__15717;
count__15558_15711 = G__15718;
i__15559_15712 = G__15719;
continue;
} else {
var temp__4657__auto___15720__$1 = cljs.core.seq(seq__15556_15709);
if(temp__4657__auto___15720__$1){
var seq__15556_15721__$1 = temp__4657__auto___15720__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15556_15721__$1)){
var c__8507__auto___15722 = cljs.core.chunk_first(seq__15556_15721__$1);
var G__15723 = cljs.core.chunk_rest(seq__15556_15721__$1);
var G__15724 = c__8507__auto___15722;
var G__15725 = cljs.core.count(c__8507__auto___15722);
var G__15726 = (0);
seq__15556_15709 = G__15723;
chunk__15557_15710 = G__15724;
count__15558_15711 = G__15725;
i__15559_15712 = G__15726;
continue;
} else {
var vec__15563_15727 = cljs.core.first(seq__15556_15721__$1);
var col_15728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15563_15727,(0),null);
var infos_15729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15563_15727,(1),null);
encode_cols(infos_15729,source_idx_15698,line_15707,col_15728);

var G__15730 = cljs.core.next(seq__15556_15721__$1);
var G__15731 = null;
var G__15732 = (0);
var G__15733 = (0);
seq__15556_15709 = G__15730;
chunk__15557_15710 = G__15731;
count__15558_15711 = G__15732;
i__15559_15712 = G__15733;
continue;
}
} else {
}
}
break;
}

var G__15734 = seq__15549_15702;
var G__15735 = chunk__15550_15703;
var G__15736 = count__15551_15704;
var G__15737 = (i__15552_15705 + (1));
seq__15549_15702 = G__15734;
chunk__15550_15703 = G__15735;
count__15551_15704 = G__15736;
i__15552_15705 = G__15737;
continue;
} else {
var temp__4657__auto___15738__$1 = cljs.core.seq(seq__15549_15702);
if(temp__4657__auto___15738__$1){
var seq__15549_15739__$1 = temp__4657__auto___15738__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15549_15739__$1)){
var c__8507__auto___15740 = cljs.core.chunk_first(seq__15549_15739__$1);
var G__15741 = cljs.core.chunk_rest(seq__15549_15739__$1);
var G__15742 = c__8507__auto___15740;
var G__15743 = cljs.core.count(c__8507__auto___15740);
var G__15744 = (0);
seq__15549_15702 = G__15741;
chunk__15550_15703 = G__15742;
count__15551_15704 = G__15743;
i__15552_15705 = G__15744;
continue;
} else {
var vec__15566_15745 = cljs.core.first(seq__15549_15739__$1);
var line_15746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566_15745,(0),null);
var cols_15747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566_15745,(1),null);
var seq__15569_15748 = cljs.core.seq(cols_15747);
var chunk__15570_15749 = null;
var count__15571_15750 = (0);
var i__15572_15751 = (0);
while(true){
if((i__15572_15751 < count__15571_15750)){
var vec__15573_15752 = chunk__15570_15749.cljs$core$IIndexed$_nth$arity$2(null,i__15572_15751);
var col_15753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15573_15752,(0),null);
var infos_15754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15573_15752,(1),null);
encode_cols(infos_15754,source_idx_15698,line_15746,col_15753);

var G__15755 = seq__15569_15748;
var G__15756 = chunk__15570_15749;
var G__15757 = count__15571_15750;
var G__15758 = (i__15572_15751 + (1));
seq__15569_15748 = G__15755;
chunk__15570_15749 = G__15756;
count__15571_15750 = G__15757;
i__15572_15751 = G__15758;
continue;
} else {
var temp__4657__auto___15759__$2 = cljs.core.seq(seq__15569_15748);
if(temp__4657__auto___15759__$2){
var seq__15569_15760__$1 = temp__4657__auto___15759__$2;
if(cljs.core.chunked_seq_QMARK_(seq__15569_15760__$1)){
var c__8507__auto___15761 = cljs.core.chunk_first(seq__15569_15760__$1);
var G__15762 = cljs.core.chunk_rest(seq__15569_15760__$1);
var G__15763 = c__8507__auto___15761;
var G__15764 = cljs.core.count(c__8507__auto___15761);
var G__15765 = (0);
seq__15569_15748 = G__15762;
chunk__15570_15749 = G__15763;
count__15571_15750 = G__15764;
i__15572_15751 = G__15765;
continue;
} else {
var vec__15576_15766 = cljs.core.first(seq__15569_15760__$1);
var col_15767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576_15766,(0),null);
var infos_15768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576_15766,(1),null);
encode_cols(infos_15768,source_idx_15698,line_15746,col_15767);

var G__15769 = cljs.core.next(seq__15569_15760__$1);
var G__15770 = null;
var G__15771 = (0);
var G__15772 = (0);
seq__15569_15748 = G__15769;
chunk__15570_15749 = G__15770;
count__15571_15750 = G__15771;
i__15572_15751 = G__15772;
continue;
}
} else {
}
}
break;
}

var G__15773 = cljs.core.next(seq__15549_15739__$1);
var G__15774 = null;
var G__15775 = (0);
var G__15776 = (0);
seq__15549_15702 = G__15773;
chunk__15550_15703 = G__15774;
count__15551_15704 = G__15775;
i__15552_15705 = G__15776;
continue;
}
} else {
}
}
break;
}

var G__15777 = cljs.core.next(seq__15503_15691__$1);
var G__15778 = null;
var G__15779 = (0);
var G__15780 = (0);
seq__15503_15602 = G__15777;
chunk__15504_15603 = G__15778;
count__15505_15604 = G__15779;
i__15506_15605 = G__15780;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__15579 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15496_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15496_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15497_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__15497_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15498_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__15498_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__15580 = G__15579;
var G__15581_15781 = G__15580;
var G__15582_15782 = "sourcesContent";
var G__15583_15783 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__15581_15781,G__15582_15782,G__15583_15783);

return G__15580;
} else {
return G__15579;
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
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__15784 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15784,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15784,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__15787 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15787,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15787,(1),null);
var G__15793 = cljs.core.next(col_map_seq);
var G__15794 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__15787,col,infos,vec__15784,line,col_map){
return (function (v,p__15790){
var map__15791 = p__15790;
var map__15791__$1 = ((((!((map__15791 == null)))?((((map__15791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15791):map__15791);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15791__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15791__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__15787,col,infos,vec__15784,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__15793;
new_cols = G__15794;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__15795 = cljs.core.next(line_map_seq);
var G__15796 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__15795;
new_lines = G__15796;
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
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__15797_15859 = cljs.core.seq(reverse_map);
var chunk__15798_15860 = null;
var count__15799_15861 = (0);
var i__15800_15862 = (0);
while(true){
if((i__15800_15862 < count__15799_15861)){
var vec__15801_15863 = chunk__15798_15860.cljs$core$IIndexed$_nth$arity$2(null,i__15800_15862);
var line_15864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15801_15863,(0),null);
var columns_15865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15801_15863,(1),null);
var seq__15804_15866 = cljs.core.seq(columns_15865);
var chunk__15805_15867 = null;
var count__15806_15868 = (0);
var i__15807_15869 = (0);
while(true){
if((i__15807_15869 < count__15806_15868)){
var vec__15808_15870 = chunk__15805_15867.cljs$core$IIndexed$_nth$arity$2(null,i__15807_15869);
var column_15871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15808_15870,(0),null);
var column_info_15872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15808_15870,(1),null);
var seq__15811_15873 = cljs.core.seq(column_info_15872);
var chunk__15812_15874 = null;
var count__15813_15875 = (0);
var i__15814_15876 = (0);
while(true){
if((i__15814_15876 < count__15813_15875)){
var map__15815_15877 = chunk__15812_15874.cljs$core$IIndexed$_nth$arity$2(null,i__15814_15876);
var map__15815_15878__$1 = ((((!((map__15815_15877 == null)))?((((map__15815_15877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15815_15877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15815_15877):map__15815_15877);
var gline_15879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15815_15878__$1,cljs.core.cst$kw$gline);
var gcol_15880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15815_15878__$1,cljs.core.cst$kw$gcol);
var name_15881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15815_15878__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15879], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15811_15873,chunk__15812_15874,count__15813_15875,i__15814_15876,seq__15804_15866,chunk__15805_15867,count__15806_15868,i__15807_15869,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15815_15877,map__15815_15878__$1,gline_15879,gcol_15880,name_15881,vec__15808_15870,column_15871,column_info_15872,vec__15801_15863,line_15864,columns_15865,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15880], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_15864,cljs.core.cst$kw$col,column_15871,cljs.core.cst$kw$name,name_15881], null));
});})(seq__15811_15873,chunk__15812_15874,count__15813_15875,i__15814_15876,seq__15804_15866,chunk__15805_15867,count__15806_15868,i__15807_15869,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15815_15877,map__15815_15878__$1,gline_15879,gcol_15880,name_15881,vec__15808_15870,column_15871,column_info_15872,vec__15801_15863,line_15864,columns_15865,inverted))
,cljs.core.sorted_map()));

var G__15882 = seq__15811_15873;
var G__15883 = chunk__15812_15874;
var G__15884 = count__15813_15875;
var G__15885 = (i__15814_15876 + (1));
seq__15811_15873 = G__15882;
chunk__15812_15874 = G__15883;
count__15813_15875 = G__15884;
i__15814_15876 = G__15885;
continue;
} else {
var temp__4657__auto___15886 = cljs.core.seq(seq__15811_15873);
if(temp__4657__auto___15886){
var seq__15811_15887__$1 = temp__4657__auto___15886;
if(cljs.core.chunked_seq_QMARK_(seq__15811_15887__$1)){
var c__8507__auto___15888 = cljs.core.chunk_first(seq__15811_15887__$1);
var G__15889 = cljs.core.chunk_rest(seq__15811_15887__$1);
var G__15890 = c__8507__auto___15888;
var G__15891 = cljs.core.count(c__8507__auto___15888);
var G__15892 = (0);
seq__15811_15873 = G__15889;
chunk__15812_15874 = G__15890;
count__15813_15875 = G__15891;
i__15814_15876 = G__15892;
continue;
} else {
var map__15817_15893 = cljs.core.first(seq__15811_15887__$1);
var map__15817_15894__$1 = ((((!((map__15817_15893 == null)))?((((map__15817_15893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15817_15893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15817_15893):map__15817_15893);
var gline_15895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15817_15894__$1,cljs.core.cst$kw$gline);
var gcol_15896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15817_15894__$1,cljs.core.cst$kw$gcol);
var name_15897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15817_15894__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15895], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15811_15873,chunk__15812_15874,count__15813_15875,i__15814_15876,seq__15804_15866,chunk__15805_15867,count__15806_15868,i__15807_15869,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15817_15893,map__15817_15894__$1,gline_15895,gcol_15896,name_15897,seq__15811_15887__$1,temp__4657__auto___15886,vec__15808_15870,column_15871,column_info_15872,vec__15801_15863,line_15864,columns_15865,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15896], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_15864,cljs.core.cst$kw$col,column_15871,cljs.core.cst$kw$name,name_15897], null));
});})(seq__15811_15873,chunk__15812_15874,count__15813_15875,i__15814_15876,seq__15804_15866,chunk__15805_15867,count__15806_15868,i__15807_15869,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15817_15893,map__15817_15894__$1,gline_15895,gcol_15896,name_15897,seq__15811_15887__$1,temp__4657__auto___15886,vec__15808_15870,column_15871,column_info_15872,vec__15801_15863,line_15864,columns_15865,inverted))
,cljs.core.sorted_map()));

var G__15898 = cljs.core.next(seq__15811_15887__$1);
var G__15899 = null;
var G__15900 = (0);
var G__15901 = (0);
seq__15811_15873 = G__15898;
chunk__15812_15874 = G__15899;
count__15813_15875 = G__15900;
i__15814_15876 = G__15901;
continue;
}
} else {
}
}
break;
}

var G__15902 = seq__15804_15866;
var G__15903 = chunk__15805_15867;
var G__15904 = count__15806_15868;
var G__15905 = (i__15807_15869 + (1));
seq__15804_15866 = G__15902;
chunk__15805_15867 = G__15903;
count__15806_15868 = G__15904;
i__15807_15869 = G__15905;
continue;
} else {
var temp__4657__auto___15906 = cljs.core.seq(seq__15804_15866);
if(temp__4657__auto___15906){
var seq__15804_15907__$1 = temp__4657__auto___15906;
if(cljs.core.chunked_seq_QMARK_(seq__15804_15907__$1)){
var c__8507__auto___15908 = cljs.core.chunk_first(seq__15804_15907__$1);
var G__15909 = cljs.core.chunk_rest(seq__15804_15907__$1);
var G__15910 = c__8507__auto___15908;
var G__15911 = cljs.core.count(c__8507__auto___15908);
var G__15912 = (0);
seq__15804_15866 = G__15909;
chunk__15805_15867 = G__15910;
count__15806_15868 = G__15911;
i__15807_15869 = G__15912;
continue;
} else {
var vec__15819_15913 = cljs.core.first(seq__15804_15907__$1);
var column_15914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15819_15913,(0),null);
var column_info_15915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15819_15913,(1),null);
var seq__15822_15916 = cljs.core.seq(column_info_15915);
var chunk__15823_15917 = null;
var count__15824_15918 = (0);
var i__15825_15919 = (0);
while(true){
if((i__15825_15919 < count__15824_15918)){
var map__15826_15920 = chunk__15823_15917.cljs$core$IIndexed$_nth$arity$2(null,i__15825_15919);
var map__15826_15921__$1 = ((((!((map__15826_15920 == null)))?((((map__15826_15920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15826_15920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15826_15920):map__15826_15920);
var gline_15922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15826_15921__$1,cljs.core.cst$kw$gline);
var gcol_15923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15826_15921__$1,cljs.core.cst$kw$gcol);
var name_15924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15826_15921__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15922], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15822_15916,chunk__15823_15917,count__15824_15918,i__15825_15919,seq__15804_15866,chunk__15805_15867,count__15806_15868,i__15807_15869,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15826_15920,map__15826_15921__$1,gline_15922,gcol_15923,name_15924,vec__15819_15913,column_15914,column_info_15915,seq__15804_15907__$1,temp__4657__auto___15906,vec__15801_15863,line_15864,columns_15865,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15923], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_15864,cljs.core.cst$kw$col,column_15914,cljs.core.cst$kw$name,name_15924], null));
});})(seq__15822_15916,chunk__15823_15917,count__15824_15918,i__15825_15919,seq__15804_15866,chunk__15805_15867,count__15806_15868,i__15807_15869,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15826_15920,map__15826_15921__$1,gline_15922,gcol_15923,name_15924,vec__15819_15913,column_15914,column_info_15915,seq__15804_15907__$1,temp__4657__auto___15906,vec__15801_15863,line_15864,columns_15865,inverted))
,cljs.core.sorted_map()));

var G__15925 = seq__15822_15916;
var G__15926 = chunk__15823_15917;
var G__15927 = count__15824_15918;
var G__15928 = (i__15825_15919 + (1));
seq__15822_15916 = G__15925;
chunk__15823_15917 = G__15926;
count__15824_15918 = G__15927;
i__15825_15919 = G__15928;
continue;
} else {
var temp__4657__auto___15929__$1 = cljs.core.seq(seq__15822_15916);
if(temp__4657__auto___15929__$1){
var seq__15822_15930__$1 = temp__4657__auto___15929__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15822_15930__$1)){
var c__8507__auto___15931 = cljs.core.chunk_first(seq__15822_15930__$1);
var G__15932 = cljs.core.chunk_rest(seq__15822_15930__$1);
var G__15933 = c__8507__auto___15931;
var G__15934 = cljs.core.count(c__8507__auto___15931);
var G__15935 = (0);
seq__15822_15916 = G__15932;
chunk__15823_15917 = G__15933;
count__15824_15918 = G__15934;
i__15825_15919 = G__15935;
continue;
} else {
var map__15828_15936 = cljs.core.first(seq__15822_15930__$1);
var map__15828_15937__$1 = ((((!((map__15828_15936 == null)))?((((map__15828_15936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15828_15936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15828_15936):map__15828_15936);
var gline_15938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15828_15937__$1,cljs.core.cst$kw$gline);
var gcol_15939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15828_15937__$1,cljs.core.cst$kw$gcol);
var name_15940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15828_15937__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15938], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15822_15916,chunk__15823_15917,count__15824_15918,i__15825_15919,seq__15804_15866,chunk__15805_15867,count__15806_15868,i__15807_15869,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15828_15936,map__15828_15937__$1,gline_15938,gcol_15939,name_15940,seq__15822_15930__$1,temp__4657__auto___15929__$1,vec__15819_15913,column_15914,column_info_15915,seq__15804_15907__$1,temp__4657__auto___15906,vec__15801_15863,line_15864,columns_15865,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15939], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_15864,cljs.core.cst$kw$col,column_15914,cljs.core.cst$kw$name,name_15940], null));
});})(seq__15822_15916,chunk__15823_15917,count__15824_15918,i__15825_15919,seq__15804_15866,chunk__15805_15867,count__15806_15868,i__15807_15869,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15828_15936,map__15828_15937__$1,gline_15938,gcol_15939,name_15940,seq__15822_15930__$1,temp__4657__auto___15929__$1,vec__15819_15913,column_15914,column_info_15915,seq__15804_15907__$1,temp__4657__auto___15906,vec__15801_15863,line_15864,columns_15865,inverted))
,cljs.core.sorted_map()));

var G__15941 = cljs.core.next(seq__15822_15930__$1);
var G__15942 = null;
var G__15943 = (0);
var G__15944 = (0);
seq__15822_15916 = G__15941;
chunk__15823_15917 = G__15942;
count__15824_15918 = G__15943;
i__15825_15919 = G__15944;
continue;
}
} else {
}
}
break;
}

var G__15945 = cljs.core.next(seq__15804_15907__$1);
var G__15946 = null;
var G__15947 = (0);
var G__15948 = (0);
seq__15804_15866 = G__15945;
chunk__15805_15867 = G__15946;
count__15806_15868 = G__15947;
i__15807_15869 = G__15948;
continue;
}
} else {
}
}
break;
}

var G__15949 = seq__15797_15859;
var G__15950 = chunk__15798_15860;
var G__15951 = count__15799_15861;
var G__15952 = (i__15800_15862 + (1));
seq__15797_15859 = G__15949;
chunk__15798_15860 = G__15950;
count__15799_15861 = G__15951;
i__15800_15862 = G__15952;
continue;
} else {
var temp__4657__auto___15953 = cljs.core.seq(seq__15797_15859);
if(temp__4657__auto___15953){
var seq__15797_15954__$1 = temp__4657__auto___15953;
if(cljs.core.chunked_seq_QMARK_(seq__15797_15954__$1)){
var c__8507__auto___15955 = cljs.core.chunk_first(seq__15797_15954__$1);
var G__15956 = cljs.core.chunk_rest(seq__15797_15954__$1);
var G__15957 = c__8507__auto___15955;
var G__15958 = cljs.core.count(c__8507__auto___15955);
var G__15959 = (0);
seq__15797_15859 = G__15956;
chunk__15798_15860 = G__15957;
count__15799_15861 = G__15958;
i__15800_15862 = G__15959;
continue;
} else {
var vec__15830_15960 = cljs.core.first(seq__15797_15954__$1);
var line_15961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15830_15960,(0),null);
var columns_15962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15830_15960,(1),null);
var seq__15833_15963 = cljs.core.seq(columns_15962);
var chunk__15834_15964 = null;
var count__15835_15965 = (0);
var i__15836_15966 = (0);
while(true){
if((i__15836_15966 < count__15835_15965)){
var vec__15837_15967 = chunk__15834_15964.cljs$core$IIndexed$_nth$arity$2(null,i__15836_15966);
var column_15968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837_15967,(0),null);
var column_info_15969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837_15967,(1),null);
var seq__15840_15970 = cljs.core.seq(column_info_15969);
var chunk__15841_15971 = null;
var count__15842_15972 = (0);
var i__15843_15973 = (0);
while(true){
if((i__15843_15973 < count__15842_15972)){
var map__15844_15974 = chunk__15841_15971.cljs$core$IIndexed$_nth$arity$2(null,i__15843_15973);
var map__15844_15975__$1 = ((((!((map__15844_15974 == null)))?((((map__15844_15974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15844_15974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15844_15974):map__15844_15974);
var gline_15976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15844_15975__$1,cljs.core.cst$kw$gline);
var gcol_15977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15844_15975__$1,cljs.core.cst$kw$gcol);
var name_15978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15844_15975__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15976], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15840_15970,chunk__15841_15971,count__15842_15972,i__15843_15973,seq__15833_15963,chunk__15834_15964,count__15835_15965,i__15836_15966,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15844_15974,map__15844_15975__$1,gline_15976,gcol_15977,name_15978,vec__15837_15967,column_15968,column_info_15969,vec__15830_15960,line_15961,columns_15962,seq__15797_15954__$1,temp__4657__auto___15953,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15977], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_15961,cljs.core.cst$kw$col,column_15968,cljs.core.cst$kw$name,name_15978], null));
});})(seq__15840_15970,chunk__15841_15971,count__15842_15972,i__15843_15973,seq__15833_15963,chunk__15834_15964,count__15835_15965,i__15836_15966,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15844_15974,map__15844_15975__$1,gline_15976,gcol_15977,name_15978,vec__15837_15967,column_15968,column_info_15969,vec__15830_15960,line_15961,columns_15962,seq__15797_15954__$1,temp__4657__auto___15953,inverted))
,cljs.core.sorted_map()));

var G__15979 = seq__15840_15970;
var G__15980 = chunk__15841_15971;
var G__15981 = count__15842_15972;
var G__15982 = (i__15843_15973 + (1));
seq__15840_15970 = G__15979;
chunk__15841_15971 = G__15980;
count__15842_15972 = G__15981;
i__15843_15973 = G__15982;
continue;
} else {
var temp__4657__auto___15983__$1 = cljs.core.seq(seq__15840_15970);
if(temp__4657__auto___15983__$1){
var seq__15840_15984__$1 = temp__4657__auto___15983__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15840_15984__$1)){
var c__8507__auto___15985 = cljs.core.chunk_first(seq__15840_15984__$1);
var G__15986 = cljs.core.chunk_rest(seq__15840_15984__$1);
var G__15987 = c__8507__auto___15985;
var G__15988 = cljs.core.count(c__8507__auto___15985);
var G__15989 = (0);
seq__15840_15970 = G__15986;
chunk__15841_15971 = G__15987;
count__15842_15972 = G__15988;
i__15843_15973 = G__15989;
continue;
} else {
var map__15846_15990 = cljs.core.first(seq__15840_15984__$1);
var map__15846_15991__$1 = ((((!((map__15846_15990 == null)))?((((map__15846_15990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15846_15990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15846_15990):map__15846_15990);
var gline_15992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15846_15991__$1,cljs.core.cst$kw$gline);
var gcol_15993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15846_15991__$1,cljs.core.cst$kw$gcol);
var name_15994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15846_15991__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15992], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15840_15970,chunk__15841_15971,count__15842_15972,i__15843_15973,seq__15833_15963,chunk__15834_15964,count__15835_15965,i__15836_15966,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15846_15990,map__15846_15991__$1,gline_15992,gcol_15993,name_15994,seq__15840_15984__$1,temp__4657__auto___15983__$1,vec__15837_15967,column_15968,column_info_15969,vec__15830_15960,line_15961,columns_15962,seq__15797_15954__$1,temp__4657__auto___15953,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15993], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_15961,cljs.core.cst$kw$col,column_15968,cljs.core.cst$kw$name,name_15994], null));
});})(seq__15840_15970,chunk__15841_15971,count__15842_15972,i__15843_15973,seq__15833_15963,chunk__15834_15964,count__15835_15965,i__15836_15966,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15846_15990,map__15846_15991__$1,gline_15992,gcol_15993,name_15994,seq__15840_15984__$1,temp__4657__auto___15983__$1,vec__15837_15967,column_15968,column_info_15969,vec__15830_15960,line_15961,columns_15962,seq__15797_15954__$1,temp__4657__auto___15953,inverted))
,cljs.core.sorted_map()));

var G__15995 = cljs.core.next(seq__15840_15984__$1);
var G__15996 = null;
var G__15997 = (0);
var G__15998 = (0);
seq__15840_15970 = G__15995;
chunk__15841_15971 = G__15996;
count__15842_15972 = G__15997;
i__15843_15973 = G__15998;
continue;
}
} else {
}
}
break;
}

var G__15999 = seq__15833_15963;
var G__16000 = chunk__15834_15964;
var G__16001 = count__15835_15965;
var G__16002 = (i__15836_15966 + (1));
seq__15833_15963 = G__15999;
chunk__15834_15964 = G__16000;
count__15835_15965 = G__16001;
i__15836_15966 = G__16002;
continue;
} else {
var temp__4657__auto___16003__$1 = cljs.core.seq(seq__15833_15963);
if(temp__4657__auto___16003__$1){
var seq__15833_16004__$1 = temp__4657__auto___16003__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15833_16004__$1)){
var c__8507__auto___16005 = cljs.core.chunk_first(seq__15833_16004__$1);
var G__16006 = cljs.core.chunk_rest(seq__15833_16004__$1);
var G__16007 = c__8507__auto___16005;
var G__16008 = cljs.core.count(c__8507__auto___16005);
var G__16009 = (0);
seq__15833_15963 = G__16006;
chunk__15834_15964 = G__16007;
count__15835_15965 = G__16008;
i__15836_15966 = G__16009;
continue;
} else {
var vec__15848_16010 = cljs.core.first(seq__15833_16004__$1);
var column_16011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848_16010,(0),null);
var column_info_16012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848_16010,(1),null);
var seq__15851_16013 = cljs.core.seq(column_info_16012);
var chunk__15852_16014 = null;
var count__15853_16015 = (0);
var i__15854_16016 = (0);
while(true){
if((i__15854_16016 < count__15853_16015)){
var map__15855_16017 = chunk__15852_16014.cljs$core$IIndexed$_nth$arity$2(null,i__15854_16016);
var map__15855_16018__$1 = ((((!((map__15855_16017 == null)))?((((map__15855_16017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15855_16017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15855_16017):map__15855_16017);
var gline_16019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855_16018__$1,cljs.core.cst$kw$gline);
var gcol_16020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855_16018__$1,cljs.core.cst$kw$gcol);
var name_16021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855_16018__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16019], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15851_16013,chunk__15852_16014,count__15853_16015,i__15854_16016,seq__15833_15963,chunk__15834_15964,count__15835_15965,i__15836_15966,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15855_16017,map__15855_16018__$1,gline_16019,gcol_16020,name_16021,vec__15848_16010,column_16011,column_info_16012,seq__15833_16004__$1,temp__4657__auto___16003__$1,vec__15830_15960,line_15961,columns_15962,seq__15797_15954__$1,temp__4657__auto___15953,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16020], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_15961,cljs.core.cst$kw$col,column_16011,cljs.core.cst$kw$name,name_16021], null));
});})(seq__15851_16013,chunk__15852_16014,count__15853_16015,i__15854_16016,seq__15833_15963,chunk__15834_15964,count__15835_15965,i__15836_15966,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15855_16017,map__15855_16018__$1,gline_16019,gcol_16020,name_16021,vec__15848_16010,column_16011,column_info_16012,seq__15833_16004__$1,temp__4657__auto___16003__$1,vec__15830_15960,line_15961,columns_15962,seq__15797_15954__$1,temp__4657__auto___15953,inverted))
,cljs.core.sorted_map()));

var G__16022 = seq__15851_16013;
var G__16023 = chunk__15852_16014;
var G__16024 = count__15853_16015;
var G__16025 = (i__15854_16016 + (1));
seq__15851_16013 = G__16022;
chunk__15852_16014 = G__16023;
count__15853_16015 = G__16024;
i__15854_16016 = G__16025;
continue;
} else {
var temp__4657__auto___16026__$2 = cljs.core.seq(seq__15851_16013);
if(temp__4657__auto___16026__$2){
var seq__15851_16027__$1 = temp__4657__auto___16026__$2;
if(cljs.core.chunked_seq_QMARK_(seq__15851_16027__$1)){
var c__8507__auto___16028 = cljs.core.chunk_first(seq__15851_16027__$1);
var G__16029 = cljs.core.chunk_rest(seq__15851_16027__$1);
var G__16030 = c__8507__auto___16028;
var G__16031 = cljs.core.count(c__8507__auto___16028);
var G__16032 = (0);
seq__15851_16013 = G__16029;
chunk__15852_16014 = G__16030;
count__15853_16015 = G__16031;
i__15854_16016 = G__16032;
continue;
} else {
var map__15857_16033 = cljs.core.first(seq__15851_16027__$1);
var map__15857_16034__$1 = ((((!((map__15857_16033 == null)))?((((map__15857_16033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15857_16033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15857_16033):map__15857_16033);
var gline_16035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857_16034__$1,cljs.core.cst$kw$gline);
var gcol_16036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857_16034__$1,cljs.core.cst$kw$gcol);
var name_16037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857_16034__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16035], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15851_16013,chunk__15852_16014,count__15853_16015,i__15854_16016,seq__15833_15963,chunk__15834_15964,count__15835_15965,i__15836_15966,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15857_16033,map__15857_16034__$1,gline_16035,gcol_16036,name_16037,seq__15851_16027__$1,temp__4657__auto___16026__$2,vec__15848_16010,column_16011,column_info_16012,seq__15833_16004__$1,temp__4657__auto___16003__$1,vec__15830_15960,line_15961,columns_15962,seq__15797_15954__$1,temp__4657__auto___15953,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16036], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_15961,cljs.core.cst$kw$col,column_16011,cljs.core.cst$kw$name,name_16037], null));
});})(seq__15851_16013,chunk__15852_16014,count__15853_16015,i__15854_16016,seq__15833_15963,chunk__15834_15964,count__15835_15965,i__15836_15966,seq__15797_15859,chunk__15798_15860,count__15799_15861,i__15800_15862,map__15857_16033,map__15857_16034__$1,gline_16035,gcol_16036,name_16037,seq__15851_16027__$1,temp__4657__auto___16026__$2,vec__15848_16010,column_16011,column_info_16012,seq__15833_16004__$1,temp__4657__auto___16003__$1,vec__15830_15960,line_15961,columns_15962,seq__15797_15954__$1,temp__4657__auto___15953,inverted))
,cljs.core.sorted_map()));

var G__16038 = cljs.core.next(seq__15851_16027__$1);
var G__16039 = null;
var G__16040 = (0);
var G__16041 = (0);
seq__15851_16013 = G__16038;
chunk__15852_16014 = G__16039;
count__15853_16015 = G__16040;
i__15854_16016 = G__16041;
continue;
}
} else {
}
}
break;
}

var G__16042 = cljs.core.next(seq__15833_16004__$1);
var G__16043 = null;
var G__16044 = (0);
var G__16045 = (0);
seq__15833_15963 = G__16042;
chunk__15834_15964 = G__16043;
count__15835_15965 = G__16044;
i__15836_15966 = G__16045;
continue;
}
} else {
}
}
break;
}

var G__16046 = cljs.core.next(seq__15797_15954__$1);
var G__16047 = null;
var G__16048 = (0);
var G__16049 = (0);
seq__15797_15859 = G__16046;
chunk__15798_15860 = G__16047;
count__15799_15861 = G__16048;
i__15800_15862 = G__16049;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
