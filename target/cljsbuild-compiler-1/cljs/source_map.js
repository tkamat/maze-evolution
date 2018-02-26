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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16284){
var vec__16285 = p__16284;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16285,(1),null);
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
var vec__16288 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__5457__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
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
var vec__16291 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16291,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16291,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16291,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16291,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16291,(4),null);
var vec__16294 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8388__auto__ = source;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8388__auto__ = line;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8388__auto__ = col;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8388__auto__ = name;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
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
var map__16297 = segmap;
var map__16297__$1 = ((((!((map__16297 == null)))?((((map__16297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16297):map__16297);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16297,map__16297__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16297,map__16297__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16297,map__16297__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__16297,map__16297__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16297,map__16297__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__16297,map__16297__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__16300 = arguments.length;
switch (G__16300) {
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
var vec__16301 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16305 = cljs.core.next(segs__$1);
var G__16306 = nrelseg;
var G__16307 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16305;
relseg__$1 = G__16306;
result__$1 = G__16307;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16301,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16301,(1),null);
var G__16308 = (gline + (1));
var G__16309 = cljs.core.next(lines__$1);
var G__16310 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16311 = result__$1;
gline = G__16308;
lines__$1 = G__16309;
relseg = G__16310;
result = G__16311;
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
var map__16313 = segmap;
var map__16313__$1 = ((((!((map__16313 == null)))?((((map__16313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16313):map__16313);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16313__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16313__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16313__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16313__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16313__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16313,map__16313__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16313,map__16313__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__16312_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16312_SHARP_,d__$1);
});})(map__16313,map__16313__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16313,map__16313__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__16316 = arguments.length;
switch (G__16316) {
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
var vec__16317 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16321 = cljs.core.next(segs__$1);
var G__16322 = nrelseg;
var G__16323 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16321;
relseg__$1 = G__16322;
result__$1 = G__16323;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16317,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16317,(1),null);
var G__16324 = (gline + (1));
var G__16325 = cljs.core.next(lines__$1);
var G__16326 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16327 = result__$1;
gline = G__16324;
lines__$1 = G__16325;
relseg = G__16326;
result = G__16327;
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
return (function (p__16328){
var vec__16329 = p__16328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__16332){
var vec__16333 = p__16332;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16333,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16333,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16333,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16333,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16333,(4),null);
var seg = vec__16333;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__16333,gcol,sidx,line,col,name,seg,relseg){
return (function (p__16336){
var vec__16337 = p__16336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8388__auto__ = name;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__16333,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__8388__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
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
var seq__16343 = cljs.core.seq(infos);
var chunk__16344 = null;
var count__16345 = (0);
var i__16346 = (0);
while(true){
if((i__16346 < count__16345)){
var info = chunk__16344.cljs$core$IIndexed$_nth$arity$2(null,i__16346);
var segv_16428 = info__GT_segv(info,source_idx,line,col);
var gline_16429 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_16430 = cljs.core.count(cljs.core.deref(lines));
if((gline_16429 > (lc_16430 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16343,chunk__16344,count__16345,i__16346,segv_16428,gline_16429,lc_16430,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16429 - (lc_16430 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16428], null));
});})(seq__16343,chunk__16344,count__16345,i__16346,segv_16428,gline_16429,lc_16430,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16343,chunk__16344,count__16345,i__16346,segv_16428,gline_16429,lc_16430,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16429], null),cljs.core.conj,segv_16428);
});})(seq__16343,chunk__16344,count__16345,i__16346,segv_16428,gline_16429,lc_16430,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__16431 = seq__16343;
var G__16432 = chunk__16344;
var G__16433 = count__16345;
var G__16434 = (i__16346 + (1));
seq__16343 = G__16431;
chunk__16344 = G__16432;
count__16345 = G__16433;
i__16346 = G__16434;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__16343);
if(temp__5457__auto__){
var seq__16343__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16343__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__16343__$1);
var G__16435 = cljs.core.chunk_rest(seq__16343__$1);
var G__16436 = c__9319__auto__;
var G__16437 = cljs.core.count(c__9319__auto__);
var G__16438 = (0);
seq__16343 = G__16435;
chunk__16344 = G__16436;
count__16345 = G__16437;
i__16346 = G__16438;
continue;
} else {
var info = cljs.core.first(seq__16343__$1);
var segv_16439 = info__GT_segv(info,source_idx,line,col);
var gline_16440 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_16441 = cljs.core.count(cljs.core.deref(lines));
if((gline_16440 > (lc_16441 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16343,chunk__16344,count__16345,i__16346,segv_16439,gline_16440,lc_16441,info,seq__16343__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16440 - (lc_16441 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16439], null));
});})(seq__16343,chunk__16344,count__16345,i__16346,segv_16439,gline_16440,lc_16441,info,seq__16343__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16343,chunk__16344,count__16345,i__16346,segv_16439,gline_16440,lc_16441,info,seq__16343__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16440], null),cljs.core.conj,segv_16439);
});})(seq__16343,chunk__16344,count__16345,i__16346,segv_16439,gline_16440,lc_16441,info,seq__16343__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__16442 = cljs.core.next(seq__16343__$1);
var G__16443 = null;
var G__16444 = (0);
var G__16445 = (0);
seq__16343 = G__16442;
chunk__16344 = G__16443;
count__16345 = G__16444;
i__16346 = G__16445;
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
var seq__16347_16446 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__16348_16447 = null;
var count__16349_16448 = (0);
var i__16350_16449 = (0);
while(true){
if((i__16350_16449 < count__16349_16448)){
var vec__16351_16450 = chunk__16348_16447.cljs$core$IIndexed$_nth$arity$2(null,i__16350_16449);
var source_idx_16451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351_16450,(0),null);
var vec__16354_16452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351_16450,(1),null);
var __16453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16354_16452,(0),null);
var lines_16454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16354_16452,(1),null);
var seq__16357_16455 = cljs.core.seq(lines_16454__$1);
var chunk__16358_16456 = null;
var count__16359_16457 = (0);
var i__16360_16458 = (0);
while(true){
if((i__16360_16458 < count__16359_16457)){
var vec__16361_16459 = chunk__16358_16456.cljs$core$IIndexed$_nth$arity$2(null,i__16360_16458);
var line_16460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16361_16459,(0),null);
var cols_16461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16361_16459,(1),null);
var seq__16364_16462 = cljs.core.seq(cols_16461);
var chunk__16365_16463 = null;
var count__16366_16464 = (0);
var i__16367_16465 = (0);
while(true){
if((i__16367_16465 < count__16366_16464)){
var vec__16368_16466 = chunk__16365_16463.cljs$core$IIndexed$_nth$arity$2(null,i__16367_16465);
var col_16467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16368_16466,(0),null);
var infos_16468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16368_16466,(1),null);
encode_cols(infos_16468,source_idx_16451,line_16460,col_16467);

var G__16469 = seq__16364_16462;
var G__16470 = chunk__16365_16463;
var G__16471 = count__16366_16464;
var G__16472 = (i__16367_16465 + (1));
seq__16364_16462 = G__16469;
chunk__16365_16463 = G__16470;
count__16366_16464 = G__16471;
i__16367_16465 = G__16472;
continue;
} else {
var temp__5457__auto___16473 = cljs.core.seq(seq__16364_16462);
if(temp__5457__auto___16473){
var seq__16364_16474__$1 = temp__5457__auto___16473;
if(cljs.core.chunked_seq_QMARK_(seq__16364_16474__$1)){
var c__9319__auto___16475 = cljs.core.chunk_first(seq__16364_16474__$1);
var G__16476 = cljs.core.chunk_rest(seq__16364_16474__$1);
var G__16477 = c__9319__auto___16475;
var G__16478 = cljs.core.count(c__9319__auto___16475);
var G__16479 = (0);
seq__16364_16462 = G__16476;
chunk__16365_16463 = G__16477;
count__16366_16464 = G__16478;
i__16367_16465 = G__16479;
continue;
} else {
var vec__16371_16480 = cljs.core.first(seq__16364_16474__$1);
var col_16481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16371_16480,(0),null);
var infos_16482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16371_16480,(1),null);
encode_cols(infos_16482,source_idx_16451,line_16460,col_16481);

var G__16483 = cljs.core.next(seq__16364_16474__$1);
var G__16484 = null;
var G__16485 = (0);
var G__16486 = (0);
seq__16364_16462 = G__16483;
chunk__16365_16463 = G__16484;
count__16366_16464 = G__16485;
i__16367_16465 = G__16486;
continue;
}
} else {
}
}
break;
}

var G__16487 = seq__16357_16455;
var G__16488 = chunk__16358_16456;
var G__16489 = count__16359_16457;
var G__16490 = (i__16360_16458 + (1));
seq__16357_16455 = G__16487;
chunk__16358_16456 = G__16488;
count__16359_16457 = G__16489;
i__16360_16458 = G__16490;
continue;
} else {
var temp__5457__auto___16491 = cljs.core.seq(seq__16357_16455);
if(temp__5457__auto___16491){
var seq__16357_16492__$1 = temp__5457__auto___16491;
if(cljs.core.chunked_seq_QMARK_(seq__16357_16492__$1)){
var c__9319__auto___16493 = cljs.core.chunk_first(seq__16357_16492__$1);
var G__16494 = cljs.core.chunk_rest(seq__16357_16492__$1);
var G__16495 = c__9319__auto___16493;
var G__16496 = cljs.core.count(c__9319__auto___16493);
var G__16497 = (0);
seq__16357_16455 = G__16494;
chunk__16358_16456 = G__16495;
count__16359_16457 = G__16496;
i__16360_16458 = G__16497;
continue;
} else {
var vec__16374_16498 = cljs.core.first(seq__16357_16492__$1);
var line_16499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16374_16498,(0),null);
var cols_16500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16374_16498,(1),null);
var seq__16377_16501 = cljs.core.seq(cols_16500);
var chunk__16378_16502 = null;
var count__16379_16503 = (0);
var i__16380_16504 = (0);
while(true){
if((i__16380_16504 < count__16379_16503)){
var vec__16381_16505 = chunk__16378_16502.cljs$core$IIndexed$_nth$arity$2(null,i__16380_16504);
var col_16506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16381_16505,(0),null);
var infos_16507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16381_16505,(1),null);
encode_cols(infos_16507,source_idx_16451,line_16499,col_16506);

var G__16508 = seq__16377_16501;
var G__16509 = chunk__16378_16502;
var G__16510 = count__16379_16503;
var G__16511 = (i__16380_16504 + (1));
seq__16377_16501 = G__16508;
chunk__16378_16502 = G__16509;
count__16379_16503 = G__16510;
i__16380_16504 = G__16511;
continue;
} else {
var temp__5457__auto___16512__$1 = cljs.core.seq(seq__16377_16501);
if(temp__5457__auto___16512__$1){
var seq__16377_16513__$1 = temp__5457__auto___16512__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16377_16513__$1)){
var c__9319__auto___16514 = cljs.core.chunk_first(seq__16377_16513__$1);
var G__16515 = cljs.core.chunk_rest(seq__16377_16513__$1);
var G__16516 = c__9319__auto___16514;
var G__16517 = cljs.core.count(c__9319__auto___16514);
var G__16518 = (0);
seq__16377_16501 = G__16515;
chunk__16378_16502 = G__16516;
count__16379_16503 = G__16517;
i__16380_16504 = G__16518;
continue;
} else {
var vec__16384_16519 = cljs.core.first(seq__16377_16513__$1);
var col_16520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384_16519,(0),null);
var infos_16521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384_16519,(1),null);
encode_cols(infos_16521,source_idx_16451,line_16499,col_16520);

var G__16522 = cljs.core.next(seq__16377_16513__$1);
var G__16523 = null;
var G__16524 = (0);
var G__16525 = (0);
seq__16377_16501 = G__16522;
chunk__16378_16502 = G__16523;
count__16379_16503 = G__16524;
i__16380_16504 = G__16525;
continue;
}
} else {
}
}
break;
}

var G__16526 = cljs.core.next(seq__16357_16492__$1);
var G__16527 = null;
var G__16528 = (0);
var G__16529 = (0);
seq__16357_16455 = G__16526;
chunk__16358_16456 = G__16527;
count__16359_16457 = G__16528;
i__16360_16458 = G__16529;
continue;
}
} else {
}
}
break;
}

var G__16530 = seq__16347_16446;
var G__16531 = chunk__16348_16447;
var G__16532 = count__16349_16448;
var G__16533 = (i__16350_16449 + (1));
seq__16347_16446 = G__16530;
chunk__16348_16447 = G__16531;
count__16349_16448 = G__16532;
i__16350_16449 = G__16533;
continue;
} else {
var temp__5457__auto___16534 = cljs.core.seq(seq__16347_16446);
if(temp__5457__auto___16534){
var seq__16347_16535__$1 = temp__5457__auto___16534;
if(cljs.core.chunked_seq_QMARK_(seq__16347_16535__$1)){
var c__9319__auto___16536 = cljs.core.chunk_first(seq__16347_16535__$1);
var G__16537 = cljs.core.chunk_rest(seq__16347_16535__$1);
var G__16538 = c__9319__auto___16536;
var G__16539 = cljs.core.count(c__9319__auto___16536);
var G__16540 = (0);
seq__16347_16446 = G__16537;
chunk__16348_16447 = G__16538;
count__16349_16448 = G__16539;
i__16350_16449 = G__16540;
continue;
} else {
var vec__16387_16541 = cljs.core.first(seq__16347_16535__$1);
var source_idx_16542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387_16541,(0),null);
var vec__16390_16543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387_16541,(1),null);
var __16544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390_16543,(0),null);
var lines_16545__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390_16543,(1),null);
var seq__16393_16546 = cljs.core.seq(lines_16545__$1);
var chunk__16394_16547 = null;
var count__16395_16548 = (0);
var i__16396_16549 = (0);
while(true){
if((i__16396_16549 < count__16395_16548)){
var vec__16397_16550 = chunk__16394_16547.cljs$core$IIndexed$_nth$arity$2(null,i__16396_16549);
var line_16551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16397_16550,(0),null);
var cols_16552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16397_16550,(1),null);
var seq__16400_16553 = cljs.core.seq(cols_16552);
var chunk__16401_16554 = null;
var count__16402_16555 = (0);
var i__16403_16556 = (0);
while(true){
if((i__16403_16556 < count__16402_16555)){
var vec__16404_16557 = chunk__16401_16554.cljs$core$IIndexed$_nth$arity$2(null,i__16403_16556);
var col_16558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16404_16557,(0),null);
var infos_16559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16404_16557,(1),null);
encode_cols(infos_16559,source_idx_16542,line_16551,col_16558);

var G__16560 = seq__16400_16553;
var G__16561 = chunk__16401_16554;
var G__16562 = count__16402_16555;
var G__16563 = (i__16403_16556 + (1));
seq__16400_16553 = G__16560;
chunk__16401_16554 = G__16561;
count__16402_16555 = G__16562;
i__16403_16556 = G__16563;
continue;
} else {
var temp__5457__auto___16564__$1 = cljs.core.seq(seq__16400_16553);
if(temp__5457__auto___16564__$1){
var seq__16400_16565__$1 = temp__5457__auto___16564__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16400_16565__$1)){
var c__9319__auto___16566 = cljs.core.chunk_first(seq__16400_16565__$1);
var G__16567 = cljs.core.chunk_rest(seq__16400_16565__$1);
var G__16568 = c__9319__auto___16566;
var G__16569 = cljs.core.count(c__9319__auto___16566);
var G__16570 = (0);
seq__16400_16553 = G__16567;
chunk__16401_16554 = G__16568;
count__16402_16555 = G__16569;
i__16403_16556 = G__16570;
continue;
} else {
var vec__16407_16571 = cljs.core.first(seq__16400_16565__$1);
var col_16572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16407_16571,(0),null);
var infos_16573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16407_16571,(1),null);
encode_cols(infos_16573,source_idx_16542,line_16551,col_16572);

var G__16574 = cljs.core.next(seq__16400_16565__$1);
var G__16575 = null;
var G__16576 = (0);
var G__16577 = (0);
seq__16400_16553 = G__16574;
chunk__16401_16554 = G__16575;
count__16402_16555 = G__16576;
i__16403_16556 = G__16577;
continue;
}
} else {
}
}
break;
}

var G__16578 = seq__16393_16546;
var G__16579 = chunk__16394_16547;
var G__16580 = count__16395_16548;
var G__16581 = (i__16396_16549 + (1));
seq__16393_16546 = G__16578;
chunk__16394_16547 = G__16579;
count__16395_16548 = G__16580;
i__16396_16549 = G__16581;
continue;
} else {
var temp__5457__auto___16582__$1 = cljs.core.seq(seq__16393_16546);
if(temp__5457__auto___16582__$1){
var seq__16393_16583__$1 = temp__5457__auto___16582__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16393_16583__$1)){
var c__9319__auto___16584 = cljs.core.chunk_first(seq__16393_16583__$1);
var G__16585 = cljs.core.chunk_rest(seq__16393_16583__$1);
var G__16586 = c__9319__auto___16584;
var G__16587 = cljs.core.count(c__9319__auto___16584);
var G__16588 = (0);
seq__16393_16546 = G__16585;
chunk__16394_16547 = G__16586;
count__16395_16548 = G__16587;
i__16396_16549 = G__16588;
continue;
} else {
var vec__16410_16589 = cljs.core.first(seq__16393_16583__$1);
var line_16590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16410_16589,(0),null);
var cols_16591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16410_16589,(1),null);
var seq__16413_16592 = cljs.core.seq(cols_16591);
var chunk__16414_16593 = null;
var count__16415_16594 = (0);
var i__16416_16595 = (0);
while(true){
if((i__16416_16595 < count__16415_16594)){
var vec__16417_16596 = chunk__16414_16593.cljs$core$IIndexed$_nth$arity$2(null,i__16416_16595);
var col_16597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16417_16596,(0),null);
var infos_16598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16417_16596,(1),null);
encode_cols(infos_16598,source_idx_16542,line_16590,col_16597);

var G__16599 = seq__16413_16592;
var G__16600 = chunk__16414_16593;
var G__16601 = count__16415_16594;
var G__16602 = (i__16416_16595 + (1));
seq__16413_16592 = G__16599;
chunk__16414_16593 = G__16600;
count__16415_16594 = G__16601;
i__16416_16595 = G__16602;
continue;
} else {
var temp__5457__auto___16603__$2 = cljs.core.seq(seq__16413_16592);
if(temp__5457__auto___16603__$2){
var seq__16413_16604__$1 = temp__5457__auto___16603__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16413_16604__$1)){
var c__9319__auto___16605 = cljs.core.chunk_first(seq__16413_16604__$1);
var G__16606 = cljs.core.chunk_rest(seq__16413_16604__$1);
var G__16607 = c__9319__auto___16605;
var G__16608 = cljs.core.count(c__9319__auto___16605);
var G__16609 = (0);
seq__16413_16592 = G__16606;
chunk__16414_16593 = G__16607;
count__16415_16594 = G__16608;
i__16416_16595 = G__16609;
continue;
} else {
var vec__16420_16610 = cljs.core.first(seq__16413_16604__$1);
var col_16611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16420_16610,(0),null);
var infos_16612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16420_16610,(1),null);
encode_cols(infos_16612,source_idx_16542,line_16590,col_16611);

var G__16613 = cljs.core.next(seq__16413_16604__$1);
var G__16614 = null;
var G__16615 = (0);
var G__16616 = (0);
seq__16413_16592 = G__16613;
chunk__16414_16593 = G__16614;
count__16415_16594 = G__16615;
i__16416_16595 = G__16616;
continue;
}
} else {
}
}
break;
}

var G__16617 = cljs.core.next(seq__16393_16583__$1);
var G__16618 = null;
var G__16619 = (0);
var G__16620 = (0);
seq__16393_16546 = G__16617;
chunk__16394_16547 = G__16618;
count__16395_16548 = G__16619;
i__16396_16549 = G__16620;
continue;
}
} else {
}
}
break;
}

var G__16621 = cljs.core.next(seq__16347_16535__$1);
var G__16622 = null;
var G__16623 = (0);
var G__16624 = (0);
seq__16347_16446 = G__16621;
chunk__16348_16447 = G__16622;
count__16349_16448 = G__16623;
i__16350_16449 = G__16624;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__16423 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16340_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16340_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16341_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__16341_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16342_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__16342_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__16424 = G__16423;
var G__16425_16625 = G__16424;
var G__16426_16626 = "sourcesContent";
var G__16427_16627 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__16425_16625,G__16426_16626,G__16427_16627);

return G__16424;
} else {
return G__16423;
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
var vec__16628 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16628,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16628,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__16631 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16631,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16631,(1),null);
var G__16637 = cljs.core.next(col_map_seq);
var G__16638 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__16631,col,infos,vec__16628,line,col_map){
return (function (v,p__16634){
var map__16635 = p__16634;
var map__16635__$1 = ((((!((map__16635 == null)))?((((map__16635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16635):map__16635);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16635__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16635__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__16631,col,infos,vec__16628,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__16637;
new_cols = G__16638;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16639 = cljs.core.next(line_map_seq);
var G__16640 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__16639;
new_lines = G__16640;
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
var seq__16641_16703 = cljs.core.seq(reverse_map);
var chunk__16642_16704 = null;
var count__16643_16705 = (0);
var i__16644_16706 = (0);
while(true){
if((i__16644_16706 < count__16643_16705)){
var vec__16645_16707 = chunk__16642_16704.cljs$core$IIndexed$_nth$arity$2(null,i__16644_16706);
var line_16708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16645_16707,(0),null);
var columns_16709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16645_16707,(1),null);
var seq__16648_16710 = cljs.core.seq(columns_16709);
var chunk__16649_16711 = null;
var count__16650_16712 = (0);
var i__16651_16713 = (0);
while(true){
if((i__16651_16713 < count__16650_16712)){
var vec__16652_16714 = chunk__16649_16711.cljs$core$IIndexed$_nth$arity$2(null,i__16651_16713);
var column_16715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16652_16714,(0),null);
var column_info_16716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16652_16714,(1),null);
var seq__16655_16717 = cljs.core.seq(column_info_16716);
var chunk__16656_16718 = null;
var count__16657_16719 = (0);
var i__16658_16720 = (0);
while(true){
if((i__16658_16720 < count__16657_16719)){
var map__16659_16721 = chunk__16656_16718.cljs$core$IIndexed$_nth$arity$2(null,i__16658_16720);
var map__16659_16722__$1 = ((((!((map__16659_16721 == null)))?((((map__16659_16721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16659_16721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16659_16721):map__16659_16721);
var gline_16723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16659_16722__$1,cljs.core.cst$kw$gline);
var gcol_16724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16659_16722__$1,cljs.core.cst$kw$gcol);
var name_16725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16659_16722__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16723], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16655_16717,chunk__16656_16718,count__16657_16719,i__16658_16720,seq__16648_16710,chunk__16649_16711,count__16650_16712,i__16651_16713,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16659_16721,map__16659_16722__$1,gline_16723,gcol_16724,name_16725,vec__16652_16714,column_16715,column_info_16716,vec__16645_16707,line_16708,columns_16709,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16724], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16708,cljs.core.cst$kw$col,column_16715,cljs.core.cst$kw$name,name_16725], null));
});})(seq__16655_16717,chunk__16656_16718,count__16657_16719,i__16658_16720,seq__16648_16710,chunk__16649_16711,count__16650_16712,i__16651_16713,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16659_16721,map__16659_16722__$1,gline_16723,gcol_16724,name_16725,vec__16652_16714,column_16715,column_info_16716,vec__16645_16707,line_16708,columns_16709,inverted))
,cljs.core.sorted_map()));

var G__16726 = seq__16655_16717;
var G__16727 = chunk__16656_16718;
var G__16728 = count__16657_16719;
var G__16729 = (i__16658_16720 + (1));
seq__16655_16717 = G__16726;
chunk__16656_16718 = G__16727;
count__16657_16719 = G__16728;
i__16658_16720 = G__16729;
continue;
} else {
var temp__5457__auto___16730 = cljs.core.seq(seq__16655_16717);
if(temp__5457__auto___16730){
var seq__16655_16731__$1 = temp__5457__auto___16730;
if(cljs.core.chunked_seq_QMARK_(seq__16655_16731__$1)){
var c__9319__auto___16732 = cljs.core.chunk_first(seq__16655_16731__$1);
var G__16733 = cljs.core.chunk_rest(seq__16655_16731__$1);
var G__16734 = c__9319__auto___16732;
var G__16735 = cljs.core.count(c__9319__auto___16732);
var G__16736 = (0);
seq__16655_16717 = G__16733;
chunk__16656_16718 = G__16734;
count__16657_16719 = G__16735;
i__16658_16720 = G__16736;
continue;
} else {
var map__16661_16737 = cljs.core.first(seq__16655_16731__$1);
var map__16661_16738__$1 = ((((!((map__16661_16737 == null)))?((((map__16661_16737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16661_16737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16661_16737):map__16661_16737);
var gline_16739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16661_16738__$1,cljs.core.cst$kw$gline);
var gcol_16740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16661_16738__$1,cljs.core.cst$kw$gcol);
var name_16741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16661_16738__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16739], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16655_16717,chunk__16656_16718,count__16657_16719,i__16658_16720,seq__16648_16710,chunk__16649_16711,count__16650_16712,i__16651_16713,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16661_16737,map__16661_16738__$1,gline_16739,gcol_16740,name_16741,seq__16655_16731__$1,temp__5457__auto___16730,vec__16652_16714,column_16715,column_info_16716,vec__16645_16707,line_16708,columns_16709,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16740], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16708,cljs.core.cst$kw$col,column_16715,cljs.core.cst$kw$name,name_16741], null));
});})(seq__16655_16717,chunk__16656_16718,count__16657_16719,i__16658_16720,seq__16648_16710,chunk__16649_16711,count__16650_16712,i__16651_16713,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16661_16737,map__16661_16738__$1,gline_16739,gcol_16740,name_16741,seq__16655_16731__$1,temp__5457__auto___16730,vec__16652_16714,column_16715,column_info_16716,vec__16645_16707,line_16708,columns_16709,inverted))
,cljs.core.sorted_map()));

var G__16742 = cljs.core.next(seq__16655_16731__$1);
var G__16743 = null;
var G__16744 = (0);
var G__16745 = (0);
seq__16655_16717 = G__16742;
chunk__16656_16718 = G__16743;
count__16657_16719 = G__16744;
i__16658_16720 = G__16745;
continue;
}
} else {
}
}
break;
}

var G__16746 = seq__16648_16710;
var G__16747 = chunk__16649_16711;
var G__16748 = count__16650_16712;
var G__16749 = (i__16651_16713 + (1));
seq__16648_16710 = G__16746;
chunk__16649_16711 = G__16747;
count__16650_16712 = G__16748;
i__16651_16713 = G__16749;
continue;
} else {
var temp__5457__auto___16750 = cljs.core.seq(seq__16648_16710);
if(temp__5457__auto___16750){
var seq__16648_16751__$1 = temp__5457__auto___16750;
if(cljs.core.chunked_seq_QMARK_(seq__16648_16751__$1)){
var c__9319__auto___16752 = cljs.core.chunk_first(seq__16648_16751__$1);
var G__16753 = cljs.core.chunk_rest(seq__16648_16751__$1);
var G__16754 = c__9319__auto___16752;
var G__16755 = cljs.core.count(c__9319__auto___16752);
var G__16756 = (0);
seq__16648_16710 = G__16753;
chunk__16649_16711 = G__16754;
count__16650_16712 = G__16755;
i__16651_16713 = G__16756;
continue;
} else {
var vec__16663_16757 = cljs.core.first(seq__16648_16751__$1);
var column_16758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16663_16757,(0),null);
var column_info_16759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16663_16757,(1),null);
var seq__16666_16760 = cljs.core.seq(column_info_16759);
var chunk__16667_16761 = null;
var count__16668_16762 = (0);
var i__16669_16763 = (0);
while(true){
if((i__16669_16763 < count__16668_16762)){
var map__16670_16764 = chunk__16667_16761.cljs$core$IIndexed$_nth$arity$2(null,i__16669_16763);
var map__16670_16765__$1 = ((((!((map__16670_16764 == null)))?((((map__16670_16764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16670_16764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16670_16764):map__16670_16764);
var gline_16766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16670_16765__$1,cljs.core.cst$kw$gline);
var gcol_16767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16670_16765__$1,cljs.core.cst$kw$gcol);
var name_16768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16670_16765__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16766], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16666_16760,chunk__16667_16761,count__16668_16762,i__16669_16763,seq__16648_16710,chunk__16649_16711,count__16650_16712,i__16651_16713,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16670_16764,map__16670_16765__$1,gline_16766,gcol_16767,name_16768,vec__16663_16757,column_16758,column_info_16759,seq__16648_16751__$1,temp__5457__auto___16750,vec__16645_16707,line_16708,columns_16709,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16767], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16708,cljs.core.cst$kw$col,column_16758,cljs.core.cst$kw$name,name_16768], null));
});})(seq__16666_16760,chunk__16667_16761,count__16668_16762,i__16669_16763,seq__16648_16710,chunk__16649_16711,count__16650_16712,i__16651_16713,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16670_16764,map__16670_16765__$1,gline_16766,gcol_16767,name_16768,vec__16663_16757,column_16758,column_info_16759,seq__16648_16751__$1,temp__5457__auto___16750,vec__16645_16707,line_16708,columns_16709,inverted))
,cljs.core.sorted_map()));

var G__16769 = seq__16666_16760;
var G__16770 = chunk__16667_16761;
var G__16771 = count__16668_16762;
var G__16772 = (i__16669_16763 + (1));
seq__16666_16760 = G__16769;
chunk__16667_16761 = G__16770;
count__16668_16762 = G__16771;
i__16669_16763 = G__16772;
continue;
} else {
var temp__5457__auto___16773__$1 = cljs.core.seq(seq__16666_16760);
if(temp__5457__auto___16773__$1){
var seq__16666_16774__$1 = temp__5457__auto___16773__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16666_16774__$1)){
var c__9319__auto___16775 = cljs.core.chunk_first(seq__16666_16774__$1);
var G__16776 = cljs.core.chunk_rest(seq__16666_16774__$1);
var G__16777 = c__9319__auto___16775;
var G__16778 = cljs.core.count(c__9319__auto___16775);
var G__16779 = (0);
seq__16666_16760 = G__16776;
chunk__16667_16761 = G__16777;
count__16668_16762 = G__16778;
i__16669_16763 = G__16779;
continue;
} else {
var map__16672_16780 = cljs.core.first(seq__16666_16774__$1);
var map__16672_16781__$1 = ((((!((map__16672_16780 == null)))?((((map__16672_16780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16672_16780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16672_16780):map__16672_16780);
var gline_16782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16672_16781__$1,cljs.core.cst$kw$gline);
var gcol_16783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16672_16781__$1,cljs.core.cst$kw$gcol);
var name_16784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16672_16781__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16782], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16666_16760,chunk__16667_16761,count__16668_16762,i__16669_16763,seq__16648_16710,chunk__16649_16711,count__16650_16712,i__16651_16713,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16672_16780,map__16672_16781__$1,gline_16782,gcol_16783,name_16784,seq__16666_16774__$1,temp__5457__auto___16773__$1,vec__16663_16757,column_16758,column_info_16759,seq__16648_16751__$1,temp__5457__auto___16750,vec__16645_16707,line_16708,columns_16709,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16783], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16708,cljs.core.cst$kw$col,column_16758,cljs.core.cst$kw$name,name_16784], null));
});})(seq__16666_16760,chunk__16667_16761,count__16668_16762,i__16669_16763,seq__16648_16710,chunk__16649_16711,count__16650_16712,i__16651_16713,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16672_16780,map__16672_16781__$1,gline_16782,gcol_16783,name_16784,seq__16666_16774__$1,temp__5457__auto___16773__$1,vec__16663_16757,column_16758,column_info_16759,seq__16648_16751__$1,temp__5457__auto___16750,vec__16645_16707,line_16708,columns_16709,inverted))
,cljs.core.sorted_map()));

var G__16785 = cljs.core.next(seq__16666_16774__$1);
var G__16786 = null;
var G__16787 = (0);
var G__16788 = (0);
seq__16666_16760 = G__16785;
chunk__16667_16761 = G__16786;
count__16668_16762 = G__16787;
i__16669_16763 = G__16788;
continue;
}
} else {
}
}
break;
}

var G__16789 = cljs.core.next(seq__16648_16751__$1);
var G__16790 = null;
var G__16791 = (0);
var G__16792 = (0);
seq__16648_16710 = G__16789;
chunk__16649_16711 = G__16790;
count__16650_16712 = G__16791;
i__16651_16713 = G__16792;
continue;
}
} else {
}
}
break;
}

var G__16793 = seq__16641_16703;
var G__16794 = chunk__16642_16704;
var G__16795 = count__16643_16705;
var G__16796 = (i__16644_16706 + (1));
seq__16641_16703 = G__16793;
chunk__16642_16704 = G__16794;
count__16643_16705 = G__16795;
i__16644_16706 = G__16796;
continue;
} else {
var temp__5457__auto___16797 = cljs.core.seq(seq__16641_16703);
if(temp__5457__auto___16797){
var seq__16641_16798__$1 = temp__5457__auto___16797;
if(cljs.core.chunked_seq_QMARK_(seq__16641_16798__$1)){
var c__9319__auto___16799 = cljs.core.chunk_first(seq__16641_16798__$1);
var G__16800 = cljs.core.chunk_rest(seq__16641_16798__$1);
var G__16801 = c__9319__auto___16799;
var G__16802 = cljs.core.count(c__9319__auto___16799);
var G__16803 = (0);
seq__16641_16703 = G__16800;
chunk__16642_16704 = G__16801;
count__16643_16705 = G__16802;
i__16644_16706 = G__16803;
continue;
} else {
var vec__16674_16804 = cljs.core.first(seq__16641_16798__$1);
var line_16805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16674_16804,(0),null);
var columns_16806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16674_16804,(1),null);
var seq__16677_16807 = cljs.core.seq(columns_16806);
var chunk__16678_16808 = null;
var count__16679_16809 = (0);
var i__16680_16810 = (0);
while(true){
if((i__16680_16810 < count__16679_16809)){
var vec__16681_16811 = chunk__16678_16808.cljs$core$IIndexed$_nth$arity$2(null,i__16680_16810);
var column_16812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16681_16811,(0),null);
var column_info_16813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16681_16811,(1),null);
var seq__16684_16814 = cljs.core.seq(column_info_16813);
var chunk__16685_16815 = null;
var count__16686_16816 = (0);
var i__16687_16817 = (0);
while(true){
if((i__16687_16817 < count__16686_16816)){
var map__16688_16818 = chunk__16685_16815.cljs$core$IIndexed$_nth$arity$2(null,i__16687_16817);
var map__16688_16819__$1 = ((((!((map__16688_16818 == null)))?((((map__16688_16818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16688_16818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16688_16818):map__16688_16818);
var gline_16820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16688_16819__$1,cljs.core.cst$kw$gline);
var gcol_16821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16688_16819__$1,cljs.core.cst$kw$gcol);
var name_16822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16688_16819__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16820], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16684_16814,chunk__16685_16815,count__16686_16816,i__16687_16817,seq__16677_16807,chunk__16678_16808,count__16679_16809,i__16680_16810,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16688_16818,map__16688_16819__$1,gline_16820,gcol_16821,name_16822,vec__16681_16811,column_16812,column_info_16813,vec__16674_16804,line_16805,columns_16806,seq__16641_16798__$1,temp__5457__auto___16797,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16821], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16805,cljs.core.cst$kw$col,column_16812,cljs.core.cst$kw$name,name_16822], null));
});})(seq__16684_16814,chunk__16685_16815,count__16686_16816,i__16687_16817,seq__16677_16807,chunk__16678_16808,count__16679_16809,i__16680_16810,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16688_16818,map__16688_16819__$1,gline_16820,gcol_16821,name_16822,vec__16681_16811,column_16812,column_info_16813,vec__16674_16804,line_16805,columns_16806,seq__16641_16798__$1,temp__5457__auto___16797,inverted))
,cljs.core.sorted_map()));

var G__16823 = seq__16684_16814;
var G__16824 = chunk__16685_16815;
var G__16825 = count__16686_16816;
var G__16826 = (i__16687_16817 + (1));
seq__16684_16814 = G__16823;
chunk__16685_16815 = G__16824;
count__16686_16816 = G__16825;
i__16687_16817 = G__16826;
continue;
} else {
var temp__5457__auto___16827__$1 = cljs.core.seq(seq__16684_16814);
if(temp__5457__auto___16827__$1){
var seq__16684_16828__$1 = temp__5457__auto___16827__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16684_16828__$1)){
var c__9319__auto___16829 = cljs.core.chunk_first(seq__16684_16828__$1);
var G__16830 = cljs.core.chunk_rest(seq__16684_16828__$1);
var G__16831 = c__9319__auto___16829;
var G__16832 = cljs.core.count(c__9319__auto___16829);
var G__16833 = (0);
seq__16684_16814 = G__16830;
chunk__16685_16815 = G__16831;
count__16686_16816 = G__16832;
i__16687_16817 = G__16833;
continue;
} else {
var map__16690_16834 = cljs.core.first(seq__16684_16828__$1);
var map__16690_16835__$1 = ((((!((map__16690_16834 == null)))?((((map__16690_16834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16690_16834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16690_16834):map__16690_16834);
var gline_16836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16690_16835__$1,cljs.core.cst$kw$gline);
var gcol_16837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16690_16835__$1,cljs.core.cst$kw$gcol);
var name_16838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16690_16835__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16836], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16684_16814,chunk__16685_16815,count__16686_16816,i__16687_16817,seq__16677_16807,chunk__16678_16808,count__16679_16809,i__16680_16810,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16690_16834,map__16690_16835__$1,gline_16836,gcol_16837,name_16838,seq__16684_16828__$1,temp__5457__auto___16827__$1,vec__16681_16811,column_16812,column_info_16813,vec__16674_16804,line_16805,columns_16806,seq__16641_16798__$1,temp__5457__auto___16797,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16837], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16805,cljs.core.cst$kw$col,column_16812,cljs.core.cst$kw$name,name_16838], null));
});})(seq__16684_16814,chunk__16685_16815,count__16686_16816,i__16687_16817,seq__16677_16807,chunk__16678_16808,count__16679_16809,i__16680_16810,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16690_16834,map__16690_16835__$1,gline_16836,gcol_16837,name_16838,seq__16684_16828__$1,temp__5457__auto___16827__$1,vec__16681_16811,column_16812,column_info_16813,vec__16674_16804,line_16805,columns_16806,seq__16641_16798__$1,temp__5457__auto___16797,inverted))
,cljs.core.sorted_map()));

var G__16839 = cljs.core.next(seq__16684_16828__$1);
var G__16840 = null;
var G__16841 = (0);
var G__16842 = (0);
seq__16684_16814 = G__16839;
chunk__16685_16815 = G__16840;
count__16686_16816 = G__16841;
i__16687_16817 = G__16842;
continue;
}
} else {
}
}
break;
}

var G__16843 = seq__16677_16807;
var G__16844 = chunk__16678_16808;
var G__16845 = count__16679_16809;
var G__16846 = (i__16680_16810 + (1));
seq__16677_16807 = G__16843;
chunk__16678_16808 = G__16844;
count__16679_16809 = G__16845;
i__16680_16810 = G__16846;
continue;
} else {
var temp__5457__auto___16847__$1 = cljs.core.seq(seq__16677_16807);
if(temp__5457__auto___16847__$1){
var seq__16677_16848__$1 = temp__5457__auto___16847__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16677_16848__$1)){
var c__9319__auto___16849 = cljs.core.chunk_first(seq__16677_16848__$1);
var G__16850 = cljs.core.chunk_rest(seq__16677_16848__$1);
var G__16851 = c__9319__auto___16849;
var G__16852 = cljs.core.count(c__9319__auto___16849);
var G__16853 = (0);
seq__16677_16807 = G__16850;
chunk__16678_16808 = G__16851;
count__16679_16809 = G__16852;
i__16680_16810 = G__16853;
continue;
} else {
var vec__16692_16854 = cljs.core.first(seq__16677_16848__$1);
var column_16855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16692_16854,(0),null);
var column_info_16856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16692_16854,(1),null);
var seq__16695_16857 = cljs.core.seq(column_info_16856);
var chunk__16696_16858 = null;
var count__16697_16859 = (0);
var i__16698_16860 = (0);
while(true){
if((i__16698_16860 < count__16697_16859)){
var map__16699_16861 = chunk__16696_16858.cljs$core$IIndexed$_nth$arity$2(null,i__16698_16860);
var map__16699_16862__$1 = ((((!((map__16699_16861 == null)))?((((map__16699_16861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16699_16861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16699_16861):map__16699_16861);
var gline_16863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16699_16862__$1,cljs.core.cst$kw$gline);
var gcol_16864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16699_16862__$1,cljs.core.cst$kw$gcol);
var name_16865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16699_16862__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16863], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16695_16857,chunk__16696_16858,count__16697_16859,i__16698_16860,seq__16677_16807,chunk__16678_16808,count__16679_16809,i__16680_16810,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16699_16861,map__16699_16862__$1,gline_16863,gcol_16864,name_16865,vec__16692_16854,column_16855,column_info_16856,seq__16677_16848__$1,temp__5457__auto___16847__$1,vec__16674_16804,line_16805,columns_16806,seq__16641_16798__$1,temp__5457__auto___16797,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16864], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16805,cljs.core.cst$kw$col,column_16855,cljs.core.cst$kw$name,name_16865], null));
});})(seq__16695_16857,chunk__16696_16858,count__16697_16859,i__16698_16860,seq__16677_16807,chunk__16678_16808,count__16679_16809,i__16680_16810,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16699_16861,map__16699_16862__$1,gline_16863,gcol_16864,name_16865,vec__16692_16854,column_16855,column_info_16856,seq__16677_16848__$1,temp__5457__auto___16847__$1,vec__16674_16804,line_16805,columns_16806,seq__16641_16798__$1,temp__5457__auto___16797,inverted))
,cljs.core.sorted_map()));

var G__16866 = seq__16695_16857;
var G__16867 = chunk__16696_16858;
var G__16868 = count__16697_16859;
var G__16869 = (i__16698_16860 + (1));
seq__16695_16857 = G__16866;
chunk__16696_16858 = G__16867;
count__16697_16859 = G__16868;
i__16698_16860 = G__16869;
continue;
} else {
var temp__5457__auto___16870__$2 = cljs.core.seq(seq__16695_16857);
if(temp__5457__auto___16870__$2){
var seq__16695_16871__$1 = temp__5457__auto___16870__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16695_16871__$1)){
var c__9319__auto___16872 = cljs.core.chunk_first(seq__16695_16871__$1);
var G__16873 = cljs.core.chunk_rest(seq__16695_16871__$1);
var G__16874 = c__9319__auto___16872;
var G__16875 = cljs.core.count(c__9319__auto___16872);
var G__16876 = (0);
seq__16695_16857 = G__16873;
chunk__16696_16858 = G__16874;
count__16697_16859 = G__16875;
i__16698_16860 = G__16876;
continue;
} else {
var map__16701_16877 = cljs.core.first(seq__16695_16871__$1);
var map__16701_16878__$1 = ((((!((map__16701_16877 == null)))?((((map__16701_16877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16701_16877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16701_16877):map__16701_16877);
var gline_16879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16701_16878__$1,cljs.core.cst$kw$gline);
var gcol_16880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16701_16878__$1,cljs.core.cst$kw$gcol);
var name_16881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16701_16878__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16879], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16695_16857,chunk__16696_16858,count__16697_16859,i__16698_16860,seq__16677_16807,chunk__16678_16808,count__16679_16809,i__16680_16810,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16701_16877,map__16701_16878__$1,gline_16879,gcol_16880,name_16881,seq__16695_16871__$1,temp__5457__auto___16870__$2,vec__16692_16854,column_16855,column_info_16856,seq__16677_16848__$1,temp__5457__auto___16847__$1,vec__16674_16804,line_16805,columns_16806,seq__16641_16798__$1,temp__5457__auto___16797,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16880], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16805,cljs.core.cst$kw$col,column_16855,cljs.core.cst$kw$name,name_16881], null));
});})(seq__16695_16857,chunk__16696_16858,count__16697_16859,i__16698_16860,seq__16677_16807,chunk__16678_16808,count__16679_16809,i__16680_16810,seq__16641_16703,chunk__16642_16704,count__16643_16705,i__16644_16706,map__16701_16877,map__16701_16878__$1,gline_16879,gcol_16880,name_16881,seq__16695_16871__$1,temp__5457__auto___16870__$2,vec__16692_16854,column_16855,column_info_16856,seq__16677_16848__$1,temp__5457__auto___16847__$1,vec__16674_16804,line_16805,columns_16806,seq__16641_16798__$1,temp__5457__auto___16797,inverted))
,cljs.core.sorted_map()));

var G__16882 = cljs.core.next(seq__16695_16871__$1);
var G__16883 = null;
var G__16884 = (0);
var G__16885 = (0);
seq__16695_16857 = G__16882;
chunk__16696_16858 = G__16883;
count__16697_16859 = G__16884;
i__16698_16860 = G__16885;
continue;
}
} else {
}
}
break;
}

var G__16886 = cljs.core.next(seq__16677_16848__$1);
var G__16887 = null;
var G__16888 = (0);
var G__16889 = (0);
seq__16677_16807 = G__16886;
chunk__16678_16808 = G__16887;
count__16679_16809 = G__16888;
i__16680_16810 = G__16889;
continue;
}
} else {
}
}
break;
}

var G__16890 = cljs.core.next(seq__16641_16798__$1);
var G__16891 = null;
var G__16892 = (0);
var G__16893 = (0);
seq__16641_16703 = G__16890;
chunk__16642_16704 = G__16891;
count__16643_16705 = G__16892;
i__16644_16706 = G__16893;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
