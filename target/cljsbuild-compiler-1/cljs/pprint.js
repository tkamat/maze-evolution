// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27484 = arguments.length;
var i__9668__auto___27485 = (0);
while(true){
if((i__9668__auto___27485 < len__9667__auto___27484)){
args__9674__auto__.push((arguments[i__9668__auto___27485]));

var G__27486 = (i__9668__auto___27485 + (1));
i__9668__auto___27485 = G__27486;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq27483){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27483));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27488 = arguments.length;
var i__9668__auto___27489 = (0);
while(true){
if((i__9668__auto___27489 < len__9667__auto___27488)){
args__9674__auto__.push((arguments[i__9668__auto___27489]));

var G__27490 = (i__9668__auto___27489 + (1));
i__9668__auto___27489 = G__27490;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq27487){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27487));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__27491 = cljs.core._EQ_;
var expr__27492 = c;
if(cljs.core.truth_((function (){var G__27494 = "\b";
var G__27495 = expr__27492;
return (pred__27491.cljs$core$IFn$_invoke$arity$2 ? pred__27491.cljs$core$IFn$_invoke$arity$2(G__27494,G__27495) : pred__27491.call(null,G__27494,G__27495));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__27496 = "\t";
var G__27497 = expr__27492;
return (pred__27491.cljs$core$IFn$_invoke$arity$2 ? pred__27491.cljs$core$IFn$_invoke$arity$2(G__27496,G__27497) : pred__27491.call(null,G__27496,G__27497));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__27498 = "\n";
var G__27499 = expr__27492;
return (pred__27491.cljs$core$IFn$_invoke$arity$2 ? pred__27491.cljs$core$IFn$_invoke$arity$2(G__27498,G__27499) : pred__27491.call(null,G__27498,G__27499));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__27500 = "\f";
var G__27501 = expr__27492;
return (pred__27491.cljs$core$IFn$_invoke$arity$2 ? pred__27491.cljs$core$IFn$_invoke$arity$2(G__27500,G__27501) : pred__27491.call(null,G__27500,G__27501));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__27502 = "\r";
var G__27503 = expr__27492;
return (pred__27491.cljs$core$IFn$_invoke$arity$2 ? pred__27491.cljs$core$IFn$_invoke$arity$2(G__27502,G__27503) : pred__27491.call(null,G__27502,G__27503));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__27504 = "\"";
var G__27505 = expr__27492;
return (pred__27491.cljs$core$IFn$_invoke$arity$2 ? pred__27491.cljs$core$IFn$_invoke$arity$2(G__27504,G__27505) : pred__27491.call(null,G__27504,G__27505));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__27506 = "\\";
var G__27507 = expr__27492;
return (pred__27491.cljs$core$IFn$_invoke$arity$2 ? pred__27491.cljs$core$IFn$_invoke$arity$2(G__27506,G__27507) : pred__27491.call(null,G__27506,G__27507));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27509 = arguments.length;
var i__9668__auto___27510 = (0);
while(true){
if((i__9668__auto___27510 < len__9667__auto___27509)){
args__9674__auto__.push((arguments[i__9668__auto___27510]));

var G__27511 = (i__9668__auto___27510 + (1));
i__9668__auto___27510 = G__27511;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq27508){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27508));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27513 = arguments.length;
var i__9668__auto___27514 = (0);
while(true){
if((i__9668__auto___27514 < len__9667__auto___27513)){
args__9674__auto__.push((arguments[i__9668__auto___27514]));

var G__27515 = (i__9668__auto___27514 + (1));
i__9668__auto___27514 = G__27515;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((0) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq27512){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27512));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__27516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27516,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27516,(1),null);
var G__27519 = new_context;
var G__27520 = remainder;
var G__27521 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27519;
lis__$1 = G__27520;
acc = G__27521;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27522,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27522,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__27525 = new_context;
var G__27526 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27525;
acc = G__27526;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27527 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27527,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27527,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27527,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__27530 = new_context;
var G__27531 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27530;
acc = G__27531;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$unzip_map_$_iter__27532(s__27533){
return (new cljs.core.LazySeq(null,(function (){
var s__27533__$1 = s__27533;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27533__$1);
if(temp__5457__auto__){
var s__27533__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27533__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27533__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27535 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27534 = (0);
while(true){
if((i__27534 < size__9269__auto__)){
var vec__27536 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27534);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27536,(0),null);
var vec__27539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27536,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27539,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27539,(1),null);
cljs.core.chunk_append(b__27535,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__27564 = (i__27534 + (1));
i__27534 = G__27564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27535),cljs$pprint$unzip_map_$_iter__27532(cljs.core.chunk_rest(s__27533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27535),null);
}
} else {
var vec__27542 = cljs.core.first(s__27533__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,(0),null);
var vec__27545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27545,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27545,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__27532(cljs.core.rest(s__27533__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$unzip_map_$_iter__27548(s__27549){
return (new cljs.core.LazySeq(null,(function (){
var s__27549__$1 = s__27549;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27549__$1);
if(temp__5457__auto__){
var s__27549__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27549__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27549__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27551 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27550 = (0);
while(true){
if((i__27550 < size__9269__auto__)){
var vec__27552 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27550);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27552,(0),null);
var vec__27555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27552,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27555,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27555,(1),null);
cljs.core.chunk_append(b__27551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__27565 = (i__27550 + (1));
i__27550 = G__27565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27551),cljs$pprint$unzip_map_$_iter__27548(cljs.core.chunk_rest(s__27549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27551),null);
}
} else {
var vec__27558 = cljs.core.first(s__27549__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27558,(0),null);
var vec__27561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27558,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27561,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27561,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__27548(cljs.core.rest(s__27549__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$tuple_map_$_iter__27566(s__27567){
return (new cljs.core.LazySeq(null,(function (){
var s__27567__$1 = s__27567;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27567__$1);
if(temp__5457__auto__){
var s__27567__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27567__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27567__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27569 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27568 = (0);
while(true){
if((i__27568 < size__9269__auto__)){
var vec__27570 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27568);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27570,(1),null);
cljs.core.chunk_append(b__27569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__27576 = (i__27568 + (1));
i__27568 = G__27576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27569),cljs$pprint$tuple_map_$_iter__27566(cljs.core.chunk_rest(s__27567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27569),null);
}
} else {
var vec__27573 = cljs.core.first(s__27567__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27573,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__27566(cljs.core.rest(s__27567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__27577 = (n - (1));
n = G__27577;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__27578 = (n + (1));
n = G__27578;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__27580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__27580) : test.call(null,G__27580));
})()))){
return pos;
} else {
var G__27581 = (pos + (1));
pos = G__27581;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__9121__auto__ = (((pp == null))?null:pp);
var m__9122__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__9122__auto__.call(null,pp));
} else {
var m__9122__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__9122__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__27582 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__27582) : sym.call(null,G__27582));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__27585 = arguments.length;
switch (G__27585) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint27586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27586 = (function (writer,max_columns,fields,meta27587){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta27587 = meta27587;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_27588,meta27587__$1){
var self__ = this;
var _27588__$1 = this;
return (new cljs.pprint.t_cljs$pprint27586(self__.writer,self__.max_columns,self__.fields,meta27587__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint27586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_27588){
var self__ = this;
var _27588__$1 = this;
return self__.meta27587;
});})(fields))
;

cljs.pprint.t_cljs$pprint27586.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint27586.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint27586.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27589 = cljs.core._EQ_;
var expr__27590 = cljs.core.type(x);
if(cljs.core.truth_((pred__27589.cljs$core$IFn$_invoke$arity$2 ? pred__27589.cljs$core$IFn$_invoke$arity$2(String,expr__27590) : pred__27589.call(null,String,expr__27590)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__27589,expr__27590,this$__$1,fields){
return (function (p1__27583_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27583_SHARP_,"\n");
});})(s,nl,pred__27589,expr__27590,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__27589.cljs$core$IFn$_invoke$arity$2 ? pred__27589.cljs$core$IFn$_invoke$arity$2(Number,expr__27590) : pred__27589.call(null,Number,expr__27590)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27590)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint27586.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta27587], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint27586.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27586.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27586";

cljs.pprint.t_cljs$pprint27586.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint27586");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint27586 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint27586(writer__$1,max_columns__$1,fields__$1,meta27587){
return (new cljs.pprint.t_cljs$pprint27586(writer__$1,max_columns__$1,fields__$1,meta27587));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint27586(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27594,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27598 = k27594;
var G__27598__$1 = (((G__27598 instanceof cljs.core.Keyword))?G__27598.fqn:null);
switch (G__27598__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27594,else__9079__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.pprint.logical-block{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27593){
var self__ = this;
var G__27593__$1 = this;
return (new cljs.core.RecordIter((0),G__27593__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__27599 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27599(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27595,other27596){
var self__ = this;
var this27595__$1 = this;
return (!((other27596 == null))) && ((this27595__$1.constructor === other27596.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.parent,other27596.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.section,other27596.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.start_col,other27596.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.indent,other27596.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.done_nl,other27596.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.intra_block_nl,other27596.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.prefix,other27596.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.per_line_prefix,other27596.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.suffix,other27596.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.logical_block_callback,other27596.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27595__$1.__extmap,other27596.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27593){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27600 = cljs.core.keyword_identical_QMARK_;
var expr__27601 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27603 = cljs.core.cst$kw$parent;
var G__27604 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27603,G__27604) : pred__27600.call(null,G__27603,G__27604));
})())){
return (new cljs.pprint.logical_block(G__27593,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27605 = cljs.core.cst$kw$section;
var G__27606 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27605,G__27606) : pred__27600.call(null,G__27605,G__27606));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__27593,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27607 = cljs.core.cst$kw$start_DASH_col;
var G__27608 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27607,G__27608) : pred__27600.call(null,G__27607,G__27608));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__27593,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27609 = cljs.core.cst$kw$indent;
var G__27610 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27609,G__27610) : pred__27600.call(null,G__27609,G__27610));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__27593,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27611 = cljs.core.cst$kw$done_DASH_nl;
var G__27612 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27611,G__27612) : pred__27600.call(null,G__27611,G__27612));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__27593,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27613 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__27614 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27613,G__27614) : pred__27600.call(null,G__27613,G__27614));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__27593,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27615 = cljs.core.cst$kw$prefix;
var G__27616 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27615,G__27616) : pred__27600.call(null,G__27615,G__27616));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__27593,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27617 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__27618 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27617,G__27618) : pred__27600.call(null,G__27617,G__27618));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__27593,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27619 = cljs.core.cst$kw$suffix;
var G__27620 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27619,G__27620) : pred__27600.call(null,G__27619,G__27620));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__27593,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27621 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__27622 = expr__27601;
return (pred__27600.cljs$core$IFn$_invoke$arity$2 ? pred__27600.cljs$core$IFn$_invoke$arity$2(G__27621,G__27622) : pred__27600.call(null,G__27621,G__27622));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__27593,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27593),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27593){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__27593,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__27597){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__27597),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__27597),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27597,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__27624 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__27624;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27626,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27630 = k27626;
var G__27630__$1 = (((G__27630 instanceof cljs.core.Keyword))?G__27630.fqn:null);
switch (G__27630__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27626,else__9079__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27625){
var self__ = this;
var G__27625__$1 = this;
return (new cljs.core.RecordIter((0),G__27625__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__27631 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27631(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27627,other27628){
var self__ = this;
var this27627__$1 = this;
return (!((other27628 == null))) && ((this27627__$1.constructor === other27628.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27627__$1.type_tag,other27628.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27627__$1.data,other27628.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27627__$1.trailing_white_space,other27628.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27627__$1.start_pos,other27628.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27627__$1.end_pos,other27628.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27627__$1.__extmap,other27628.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27625){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27632 = cljs.core.keyword_identical_QMARK_;
var expr__27633 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27635 = cljs.core.cst$kw$type_DASH_tag;
var G__27636 = expr__27633;
return (pred__27632.cljs$core$IFn$_invoke$arity$2 ? pred__27632.cljs$core$IFn$_invoke$arity$2(G__27635,G__27636) : pred__27632.call(null,G__27635,G__27636));
})())){
return (new cljs.pprint.buffer_blob(G__27625,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27637 = cljs.core.cst$kw$data;
var G__27638 = expr__27633;
return (pred__27632.cljs$core$IFn$_invoke$arity$2 ? pred__27632.cljs$core$IFn$_invoke$arity$2(G__27637,G__27638) : pred__27632.call(null,G__27637,G__27638));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__27625,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27639 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__27640 = expr__27633;
return (pred__27632.cljs$core$IFn$_invoke$arity$2 ? pred__27632.cljs$core$IFn$_invoke$arity$2(G__27639,G__27640) : pred__27632.call(null,G__27639,G__27640));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__27625,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27641 = cljs.core.cst$kw$start_DASH_pos;
var G__27642 = expr__27633;
return (pred__27632.cljs$core$IFn$_invoke$arity$2 ? pred__27632.cljs$core$IFn$_invoke$arity$2(G__27641,G__27642) : pred__27632.call(null,G__27641,G__27642));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__27625,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27643 = cljs.core.cst$kw$end_DASH_pos;
var G__27644 = expr__27633;
return (pred__27632.cljs$core$IFn$_invoke$arity$2 ? pred__27632.cljs$core$IFn$_invoke$arity$2(G__27643,G__27644) : pred__27632.call(null,G__27643,G__27644));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__27625,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27625),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27625){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__27625,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__27629){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27629),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__27629),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__27629),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27629),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27629),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27629,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__27414__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27414__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27647,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27651 = k27647;
var G__27651__$1 = (((G__27651 instanceof cljs.core.Keyword))?G__27651.fqn:null);
switch (G__27651__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27647,else__9079__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.pprint.nl-t{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27646){
var self__ = this;
var G__27646__$1 = this;
return (new cljs.core.RecordIter((0),G__27646__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__27652 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27652(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27648,other27649){
var self__ = this;
var this27648__$1 = this;
return (!((other27649 == null))) && ((this27648__$1.constructor === other27649.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27648__$1.type_tag,other27649.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27648__$1.type,other27649.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27648__$1.logical_block,other27649.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27648__$1.start_pos,other27649.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27648__$1.end_pos,other27649.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27648__$1.__extmap,other27649.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27646){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27653 = cljs.core.keyword_identical_QMARK_;
var expr__27654 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27656 = cljs.core.cst$kw$type_DASH_tag;
var G__27657 = expr__27654;
return (pred__27653.cljs$core$IFn$_invoke$arity$2 ? pred__27653.cljs$core$IFn$_invoke$arity$2(G__27656,G__27657) : pred__27653.call(null,G__27656,G__27657));
})())){
return (new cljs.pprint.nl_t(G__27646,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27658 = cljs.core.cst$kw$type;
var G__27659 = expr__27654;
return (pred__27653.cljs$core$IFn$_invoke$arity$2 ? pred__27653.cljs$core$IFn$_invoke$arity$2(G__27658,G__27659) : pred__27653.call(null,G__27658,G__27659));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__27646,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27660 = cljs.core.cst$kw$logical_DASH_block;
var G__27661 = expr__27654;
return (pred__27653.cljs$core$IFn$_invoke$arity$2 ? pred__27653.cljs$core$IFn$_invoke$arity$2(G__27660,G__27661) : pred__27653.call(null,G__27660,G__27661));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__27646,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27662 = cljs.core.cst$kw$start_DASH_pos;
var G__27663 = expr__27654;
return (pred__27653.cljs$core$IFn$_invoke$arity$2 ? pred__27653.cljs$core$IFn$_invoke$arity$2(G__27662,G__27663) : pred__27653.call(null,G__27662,G__27663));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__27646,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27664 = cljs.core.cst$kw$end_DASH_pos;
var G__27665 = expr__27654;
return (pred__27653.cljs$core$IFn$_invoke$arity$2 ? pred__27653.cljs$core$IFn$_invoke$arity$2(G__27664,G__27665) : pred__27653.call(null,G__27664,G__27665));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__27646,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27646),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27646){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__27646,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__27650){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27650),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__27650),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27650),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27650),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27650),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27650,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__27414__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27414__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27668,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27672 = k27668;
var G__27672__$1 = (((G__27672 instanceof cljs.core.Keyword))?G__27672.fqn:null);
switch (G__27672__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27668,else__9079__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27667){
var self__ = this;
var G__27667__$1 = this;
return (new cljs.core.RecordIter((0),G__27667__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__27673 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27673(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27669,other27670){
var self__ = this;
var this27669__$1 = this;
return (!((other27670 == null))) && ((this27669__$1.constructor === other27670.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27669__$1.type_tag,other27670.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27669__$1.logical_block,other27670.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27669__$1.start_pos,other27670.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27669__$1.end_pos,other27670.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27669__$1.__extmap,other27670.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27667){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27674 = cljs.core.keyword_identical_QMARK_;
var expr__27675 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27677 = cljs.core.cst$kw$type_DASH_tag;
var G__27678 = expr__27675;
return (pred__27674.cljs$core$IFn$_invoke$arity$2 ? pred__27674.cljs$core$IFn$_invoke$arity$2(G__27677,G__27678) : pred__27674.call(null,G__27677,G__27678));
})())){
return (new cljs.pprint.start_block_t(G__27667,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27679 = cljs.core.cst$kw$logical_DASH_block;
var G__27680 = expr__27675;
return (pred__27674.cljs$core$IFn$_invoke$arity$2 ? pred__27674.cljs$core$IFn$_invoke$arity$2(G__27679,G__27680) : pred__27674.call(null,G__27679,G__27680));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__27667,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27681 = cljs.core.cst$kw$start_DASH_pos;
var G__27682 = expr__27675;
return (pred__27674.cljs$core$IFn$_invoke$arity$2 ? pred__27674.cljs$core$IFn$_invoke$arity$2(G__27681,G__27682) : pred__27674.call(null,G__27681,G__27682));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__27667,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27683 = cljs.core.cst$kw$end_DASH_pos;
var G__27684 = expr__27675;
return (pred__27674.cljs$core$IFn$_invoke$arity$2 ? pred__27674.cljs$core$IFn$_invoke$arity$2(G__27683,G__27684) : pred__27674.call(null,G__27683,G__27684));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27667,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27667),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27667){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27667,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__27671){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27671),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27671),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27671),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27671),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27671,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__27414__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27414__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27687,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27691 = k27687;
var G__27691__$1 = (((G__27691 instanceof cljs.core.Keyword))?G__27691.fqn:null);
switch (G__27691__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27687,else__9079__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27686){
var self__ = this;
var G__27686__$1 = this;
return (new cljs.core.RecordIter((0),G__27686__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__27692 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27692(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27688,other27689){
var self__ = this;
var this27688__$1 = this;
return (!((other27689 == null))) && ((this27688__$1.constructor === other27689.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.type_tag,other27689.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.logical_block,other27689.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.start_pos,other27689.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.end_pos,other27689.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.__extmap,other27689.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27686){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27693 = cljs.core.keyword_identical_QMARK_;
var expr__27694 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27696 = cljs.core.cst$kw$type_DASH_tag;
var G__27697 = expr__27694;
return (pred__27693.cljs$core$IFn$_invoke$arity$2 ? pred__27693.cljs$core$IFn$_invoke$arity$2(G__27696,G__27697) : pred__27693.call(null,G__27696,G__27697));
})())){
return (new cljs.pprint.end_block_t(G__27686,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27698 = cljs.core.cst$kw$logical_DASH_block;
var G__27699 = expr__27694;
return (pred__27693.cljs$core$IFn$_invoke$arity$2 ? pred__27693.cljs$core$IFn$_invoke$arity$2(G__27698,G__27699) : pred__27693.call(null,G__27698,G__27699));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__27686,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27700 = cljs.core.cst$kw$start_DASH_pos;
var G__27701 = expr__27694;
return (pred__27693.cljs$core$IFn$_invoke$arity$2 ? pred__27693.cljs$core$IFn$_invoke$arity$2(G__27700,G__27701) : pred__27693.call(null,G__27700,G__27701));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__27686,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27702 = cljs.core.cst$kw$end_DASH_pos;
var G__27703 = expr__27694;
return (pred__27693.cljs$core$IFn$_invoke$arity$2 ? pred__27693.cljs$core$IFn$_invoke$arity$2(G__27702,G__27703) : pred__27693.call(null,G__27702,G__27703));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27686,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27686),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27686){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27686,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__27690){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27690),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27690),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27690),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27690),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27690,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__27414__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27414__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27706,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27710 = k27706;
var G__27710__$1 = (((G__27710 instanceof cljs.core.Keyword))?G__27710.fqn:null);
switch (G__27710__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27706,else__9079__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.pprint.indent-t{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27705){
var self__ = this;
var G__27705__$1 = this;
return (new cljs.core.RecordIter((0),G__27705__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__27711 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27711(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27707,other27708){
var self__ = this;
var this27707__$1 = this;
return (!((other27708 == null))) && ((this27707__$1.constructor === other27708.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27707__$1.type_tag,other27708.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27707__$1.logical_block,other27708.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27707__$1.relative_to,other27708.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27707__$1.offset,other27708.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27707__$1.start_pos,other27708.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27707__$1.end_pos,other27708.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27707__$1.__extmap,other27708.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27705){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27712 = cljs.core.keyword_identical_QMARK_;
var expr__27713 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27715 = cljs.core.cst$kw$type_DASH_tag;
var G__27716 = expr__27713;
return (pred__27712.cljs$core$IFn$_invoke$arity$2 ? pred__27712.cljs$core$IFn$_invoke$arity$2(G__27715,G__27716) : pred__27712.call(null,G__27715,G__27716));
})())){
return (new cljs.pprint.indent_t(G__27705,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27717 = cljs.core.cst$kw$logical_DASH_block;
var G__27718 = expr__27713;
return (pred__27712.cljs$core$IFn$_invoke$arity$2 ? pred__27712.cljs$core$IFn$_invoke$arity$2(G__27717,G__27718) : pred__27712.call(null,G__27717,G__27718));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__27705,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27719 = cljs.core.cst$kw$relative_DASH_to;
var G__27720 = expr__27713;
return (pred__27712.cljs$core$IFn$_invoke$arity$2 ? pred__27712.cljs$core$IFn$_invoke$arity$2(G__27719,G__27720) : pred__27712.call(null,G__27719,G__27720));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__27705,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27721 = cljs.core.cst$kw$offset;
var G__27722 = expr__27713;
return (pred__27712.cljs$core$IFn$_invoke$arity$2 ? pred__27712.cljs$core$IFn$_invoke$arity$2(G__27721,G__27722) : pred__27712.call(null,G__27721,G__27722));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__27705,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27723 = cljs.core.cst$kw$start_DASH_pos;
var G__27724 = expr__27713;
return (pred__27712.cljs$core$IFn$_invoke$arity$2 ? pred__27712.cljs$core$IFn$_invoke$arity$2(G__27723,G__27724) : pred__27712.call(null,G__27723,G__27724));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__27705,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27725 = cljs.core.cst$kw$end_DASH_pos;
var G__27726 = expr__27713;
return (pred__27712.cljs$core$IFn$_invoke$arity$2 ? pred__27712.cljs$core$IFn$_invoke$arity$2(G__27725,G__27726) : pred__27712.call(null,G__27725,G__27726));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__27705,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27705),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27705){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__27705,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__27709){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27709),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27709),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__27709),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__27709),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27709),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27709),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27709,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__27414__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27414__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__9443__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__){
return (function (p1__27729_SHARP_,p2__27728_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__27728_SHARP_);
});})(method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__))
,cljs.core.cst$kw$default,hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___27731 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27731)){
var cb_27732 = temp__5457__auto___27731;
var G__27730_27733 = cljs.core.cst$kw$start;
(cb_27732.cljs$core$IFn$_invoke$arity$1 ? cb_27732.cljs$core$IFn$_invoke$arity$1(G__27730_27733) : cb_27732.call(null,G__27730_27733));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5457__auto___27734 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5457__auto___27734)){
var prefix_27735 = temp__5457__auto___27734;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_27735);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___27737 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27737)){
var cb_27738 = temp__5457__auto___27737;
var G__27736_27739 = cljs.core.cst$kw$end;
(cb_27738.cljs$core$IFn$_invoke$arity$1 ? cb_27738.cljs$core$IFn$_invoke$arity$1(G__27736_27739) : cb_27738.call(null,G__27736_27739));
} else {
}

var temp__5457__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5457__auto__)){
var suffix = temp__5457__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__27740 = cljs.core._EQ_;
var expr__27741 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__27743 = cljs.core.cst$kw$block;
var G__27744 = expr__27741;
return (pred__27740.cljs$core$IFn$_invoke$arity$2 ? pred__27740.cljs$core$IFn$_invoke$arity$2(G__27743,G__27744) : pred__27740.call(null,G__27743,G__27744));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27745 = cljs.core.cst$kw$current;
var G__27746 = expr__27741;
return (pred__27740.cljs$core$IFn$_invoke$arity$2 ? pred__27740.cljs$core$IFn$_invoke$arity$2(G__27745,G__27746) : pred__27740.call(null,G__27745,G__27746));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27741)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__8388__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__8376__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__8376__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5455__auto___27747 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27747)){
var tws_27748 = temp__5455__auto___27747;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27748);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__27749 = cljs.core.seq(tokens);
var chunk__27750 = null;
var count__27751 = (0);
var i__27752 = (0);
while(true){
if((i__27752 < count__27751)){
var token = chunk__27750.cljs$core$IIndexed$_nth$arity$2(null,i__27752);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5455__auto___27753 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27753)){
var tws_27754 = temp__5455__auto___27753;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27754);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_27755 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8376__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8376__auto__)){
return tws_27755;
} else {
return and__8376__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27755);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__27756 = seq__27749;
var G__27757 = chunk__27750;
var G__27758 = count__27751;
var G__27759 = (i__27752 + (1));
seq__27749 = G__27756;
chunk__27750 = G__27757;
count__27751 = G__27758;
i__27752 = G__27759;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27749);
if(temp__5457__auto__){
var seq__27749__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27749__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__27749__$1);
var G__27760 = cljs.core.chunk_rest(seq__27749__$1);
var G__27761 = c__9319__auto__;
var G__27762 = cljs.core.count(c__9319__auto__);
var G__27763 = (0);
seq__27749 = G__27760;
chunk__27750 = G__27761;
count__27751 = G__27762;
i__27752 = G__27763;
continue;
} else {
var token = cljs.core.first(seq__27749__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5455__auto___27764 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27764)){
var tws_27765 = temp__5455__auto___27764;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27765);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_27766 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8376__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8376__auto__)){
return tws_27766;
} else {
return and__8376__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27766);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__27767 = cljs.core.next(seq__27749__$1);
var G__27768 = null;
var G__27769 = (0);
var G__27770 = (0);
seq__27749 = G__27767;
chunk__27750 = G__27768;
count__27751 = G__27769;
i__27752 = G__27770;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__8388__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__8376__auto__ = miser_width;
if(cljs.core.truth_(and__8376__auto__)){
var and__8376__auto____$1 = maxcol;
if(cljs.core.truth_(and__8376__auto____$1)){
var and__8376__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__8376__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
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
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__9443__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__))
,cljs.core.cst$kw$default,hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__8388__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__8388__auto____$1){
return or__8388__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__27771_SHARP_){
return cljs.core.not((function (){var and__8376__auto__ = cljs.pprint.nl_t_QMARK_(p1__27771_SHARP_);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__27771_SHARP_),lb);
} else {
return and__8376__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__27772_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__27772_SHARP_);
return cljs.core.not((function (){var and__8376__auto__ = cljs.pprint.nl_t_QMARK_(p1__27772_SHARP_);
if(cljs.core.truth_(and__8376__auto__)){
var or__8388__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__8388__auto__){
return or__8388__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__8376__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__27773 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__27773;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_27774 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_27774);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27775_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__27775_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__27776 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27776,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27776,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__27779 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__27782 = newl;
var G__27783 = this$;
var G__27784 = section;
var G__27785 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__27782,G__27783,G__27784,G__27785) : cljs.pprint.emit_nl_QMARK_.call(null,G__27782,G__27783,G__27784,G__27785));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__27786 = new_buffer;
buffer = G__27786;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5455__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto__)){
var buf = temp__5455__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5457__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto__)){
var tws = temp__5457__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_27791 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_27792 = (oldpos_27791 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_27792);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_27791,newpos_27792));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__27787_27793 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__27788_27794 = null;
var count__27789_27795 = (0);
var i__27790_27796 = (0);
while(true){
if((i__27790_27796 < count__27789_27795)){
var l_27797__$1 = chunk__27788_27794.cljs$core$IIndexed$_nth$arity$2(null,i__27790_27796);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_27797__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__27798 = seq__27787_27793;
var G__27799 = chunk__27788_27794;
var G__27800 = count__27789_27795;
var G__27801 = (i__27790_27796 + (1));
seq__27787_27793 = G__27798;
chunk__27788_27794 = G__27799;
count__27789_27795 = G__27800;
i__27790_27796 = G__27801;
continue;
} else {
var temp__5457__auto___27802 = cljs.core.seq(seq__27787_27793);
if(temp__5457__auto___27802){
var seq__27787_27803__$1 = temp__5457__auto___27802;
if(cljs.core.chunked_seq_QMARK_(seq__27787_27803__$1)){
var c__9319__auto___27804 = cljs.core.chunk_first(seq__27787_27803__$1);
var G__27805 = cljs.core.chunk_rest(seq__27787_27803__$1);
var G__27806 = c__9319__auto___27804;
var G__27807 = cljs.core.count(c__9319__auto___27804);
var G__27808 = (0);
seq__27787_27793 = G__27805;
chunk__27788_27794 = G__27806;
count__27789_27795 = G__27807;
i__27790_27796 = G__27808;
continue;
} else {
var l_27809__$1 = cljs.core.first(seq__27787_27803__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_27809__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__27810 = cljs.core.next(seq__27787_27803__$1);
var G__27811 = null;
var G__27812 = (0);
var G__27813 = (0);
seq__27787_27793 = G__27810;
chunk__27788_27794 = G__27811;
count__27789_27795 = G__27812;
i__27790_27796 = G__27813;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint27814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27814 = (function (writer,max_columns,miser_width,lb,fields,meta27815){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta27815 = meta27815;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_27816,meta27815__$1){
var self__ = this;
var _27816__$1 = this;
return (new cljs.pprint.t_cljs$pprint27814(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta27815__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_27816){
var self__ = this;
var _27816__$1 = this;
return self__.meta27815;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27814.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27814.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27817 = cljs.core._EQ_;
var expr__27818 = cljs.core.type(x);
if(cljs.core.truth_((pred__27817.cljs$core$IFn$_invoke$arity$2 ? pred__27817.cljs$core$IFn$_invoke$arity$2(String,expr__27818) : pred__27817.call(null,String,expr__27818)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__27817.cljs$core$IFn$_invoke$arity$2 ? pred__27817.cljs$core$IFn$_invoke$arity$2(Number,expr__27818) : pred__27817.call(null,Number,expr__27818)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27818)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27814.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27814.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint27814.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27814.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta27815], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27814.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27814.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27814";

cljs.pprint.t_cljs$pprint27814.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint27814");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint27814 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint27814(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27815){
return (new cljs.pprint.t_cljs$pprint27814(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27815));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint27814(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5457__auto___27821 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27821)){
var cb_27822 = temp__5457__auto___27821;
var G__27820_27823 = cljs.core.cst$kw$start;
(cb_27822.cljs$core$IFn$_invoke$arity$1 ? cb_27822.cljs$core$IFn$_invoke$arity$1(G__27820_27823) : cb_27822.call(null,G__27820_27823));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5457__auto___27825 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27825)){
var cb_27826 = temp__5457__auto___27825;
var G__27824_27827 = cljs.core.cst$kw$end;
(cb_27826.cljs$core$IFn$_invoke$arity$1 ? cb_27826.cljs$core$IFn$_invoke$arity$1(G__27824_27827) : cb_27826.call(null,G__27824_27827));
} else {
}
} else {
var oldpos_27828 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_27829 = (oldpos_27828 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_27829);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_27828,newpos_27829));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__27830 = cljs.core._EQ_;
var expr__27831 = relative_to;
if(cljs.core.truth_((function (){var G__27833 = cljs.core.cst$kw$block;
var G__27834 = expr__27831;
return (pred__27830.cljs$core$IFn$_invoke$arity$2 ? pred__27830.cljs$core$IFn$_invoke$arity$2(G__27833,G__27834) : pred__27830.call(null,G__27833,G__27834));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27835 = cljs.core.cst$kw$current;
var G__27836 = expr__27831;
return (pred__27830.cljs$core$IFn$_invoke$arity$2 ? pred__27830.cljs$core$IFn$_invoke$arity$2(G__27835,G__27836) : pred__27830.call(null,G__27835,G__27836));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27831)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__27837_SHARP_){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__27837_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__27837_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__8376__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__8376__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__8376__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__8376__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__8376__auto__)){
var and__8376__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__8376__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27856 = arguments.length;
var i__9668__auto___27857 = (0);
while(true){
if((i__9668__auto___27857 < len__9667__auto___27856)){
args__9674__auto__.push((arguments[i__9668__auto___27857]));

var G__27858 = (i__9668__auto___27857 + (1));
i__9668__auto___27857 = G__27858;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((1) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9675__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_27842 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_27843 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_27844 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_27845 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_27846 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_27847 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_27848 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_27849 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_27850 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_27851 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_27852 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_27853 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__27397__auto___27859 = base_writer;
var new_writer__27398__auto___27860 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27397__auto___27859));
var _STAR_out_STAR_27854_27861 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__27398__auto___27860)?cljs.pprint.make_pretty_writer(base_writer__27397__auto___27859,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27397__auto___27859);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27854_27861;
}} else {
var _STAR_out_STAR_27855_27862 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27855_27862;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_27853;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_27852;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_27851;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_27850;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_27849;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_27848;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_27847;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_27846;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27845;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_27844;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_27843;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_27842;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq27840){
var G__27841 = cljs.core.first(seq27840);
var seq27840__$1 = cljs.core.next(seq27840);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__27841,seq27840__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__27864 = arguments.length;
switch (G__27864) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_27865 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27865;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__27397__auto__ = writer;
var new_writer__27398__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27397__auto__));
var _STAR_out_STAR_27866 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__27398__auto__)?cljs.pprint.make_pretty_writer(base_writer__27397__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27397__auto__);

try{var _STAR_print_pretty_STAR_27867_27869 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_27867_27869;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27866;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__8376__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__8376__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__8376__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27873 = arguments.length;
var i__9668__auto___27874 = (0);
while(true){
if((i__9668__auto___27874 < len__9667__auto___27873)){
args__9674__auto__.push((arguments[i__9668__auto___27874]));

var G__27875 = (i__9668__auto___27874 + (1));
i__9668__auto___27874 = G__27875;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((2) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9675__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq27870){
var G__27871 = cljs.core.first(seq27870);
var seq27870__$1 = cljs.core.next(seq27870);
var G__27872 = cljs.core.first(seq27870__$1);
var seq27870__$2 = cljs.core.next(seq27870__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__27871,G__27872,seq27870__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27877,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27881 = k27877;
var G__27881__$1 = (((G__27881 instanceof cljs.core.Keyword))?G__27881.fqn:null);
switch (G__27881__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27877,else__9079__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27876){
var self__ = this;
var G__27876__$1 = this;
return (new cljs.core.RecordIter((0),G__27876__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__27882 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27882(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27878,other27879){
var self__ = this;
var this27878__$1 = this;
return (!((other27879 == null))) && ((this27878__$1.constructor === other27879.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27878__$1.seq,other27879.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27878__$1.rest,other27879.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27878__$1.pos,other27879.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27878__$1.__extmap,other27879.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27876){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27883 = cljs.core.keyword_identical_QMARK_;
var expr__27884 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27886 = cljs.core.cst$kw$seq;
var G__27887 = expr__27884;
return (pred__27883.cljs$core$IFn$_invoke$arity$2 ? pred__27883.cljs$core$IFn$_invoke$arity$2(G__27886,G__27887) : pred__27883.call(null,G__27886,G__27887));
})())){
return (new cljs.pprint.arg_navigator(G__27876,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27888 = cljs.core.cst$kw$rest;
var G__27889 = expr__27884;
return (pred__27883.cljs$core$IFn$_invoke$arity$2 ? pred__27883.cljs$core$IFn$_invoke$arity$2(G__27888,G__27889) : pred__27883.call(null,G__27888,G__27889));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__27876,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27890 = cljs.core.cst$kw$pos;
var G__27891 = expr__27884;
return (pred__27883.cljs$core$IFn$_invoke$arity$2 ? pred__27883.cljs$core$IFn$_invoke$arity$2(G__27890,G__27891) : pred__27883.call(null,G__27890,G__27891));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__27876,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27876),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27876){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__27876,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__27880){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__27880),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__27880),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__27880),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27880,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__27893 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__27896 = navigator;
var G__27897 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__27896,G__27897) : cljs.pprint.relative_reposition.call(null,G__27896,G__27897));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27899,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27903 = k27899;
var G__27903__$1 = (((G__27903 instanceof cljs.core.Keyword))?G__27903.fqn:null);
switch (G__27903__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27899,else__9079__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27898){
var self__ = this;
var G__27898__$1 = this;
return (new cljs.core.RecordIter((0),G__27898__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__27904 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27904(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27900,other27901){
var self__ = this;
var this27900__$1 = this;
return (!((other27901 == null))) && ((this27900__$1.constructor === other27901.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27900__$1.func,other27901.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27900__$1.def,other27901.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27900__$1.params,other27901.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27900__$1.offset,other27901.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27900__$1.__extmap,other27901.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27898){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27905 = cljs.core.keyword_identical_QMARK_;
var expr__27906 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27908 = cljs.core.cst$kw$func;
var G__27909 = expr__27906;
return (pred__27905.cljs$core$IFn$_invoke$arity$2 ? pred__27905.cljs$core$IFn$_invoke$arity$2(G__27908,G__27909) : pred__27905.call(null,G__27908,G__27909));
})())){
return (new cljs.pprint.compiled_directive(G__27898,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27910 = cljs.core.cst$kw$def;
var G__27911 = expr__27906;
return (pred__27905.cljs$core$IFn$_invoke$arity$2 ? pred__27905.cljs$core$IFn$_invoke$arity$2(G__27910,G__27911) : pred__27905.call(null,G__27910,G__27911));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__27898,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27912 = cljs.core.cst$kw$params;
var G__27913 = expr__27906;
return (pred__27905.cljs$core$IFn$_invoke$arity$2 ? pred__27905.cljs$core$IFn$_invoke$arity$2(G__27912,G__27913) : pred__27905.call(null,G__27912,G__27913));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__27898,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27914 = cljs.core.cst$kw$offset;
var G__27915 = expr__27906;
return (pred__27905.cljs$core$IFn$_invoke$arity$2 ? pred__27905.cljs$core$IFn$_invoke$arity$2(G__27914,G__27915) : pred__27905.call(null,G__27914,G__27915));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__27898,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27898),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27898){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__27898,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__27902){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__27902),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__27902),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__27902),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__27902),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27902,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__27917,navigator){
var vec__27918 = p__27917;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27918,(0),null);
var vec__27921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27918,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(1),null);
var vec__27924 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__27927 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__8388__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__27930 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(1),null);
var base_output = (function (){var or__8388__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__27933_SHARP_){
if((p1__27933_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__27933_SHARP_,base),cljs.core.quot(p1__27933_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__27934_SHARP_){
if((p1__27934_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__27934_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__27934_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__27936 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27936,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27936,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_27939 = (arg < (0));
var pos_arg_27940 = ((neg_27939)?(- arg):arg);
var raw_str_27941 = cljs.pprint.opt_base_str(base,pos_arg_27940);
var group_str_27942 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_27939,pos_arg_27940,raw_str_27941,vec__27936,arg,arg_navigator__$1){
return (function (p1__27935_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__27935_SHARP_);
});})(neg_27939,pos_arg_27940,raw_str_27941,vec__27936,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_27941));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_27941);
var signed_str_27943 = ((neg_27939)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_27942)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_27942)].join(''):group_str_27942
));
var padded_str_27944 = (((signed_str_27943.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_27943.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_27943)].join(''):signed_str_27943);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_27944], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__27945 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__27946 = (pos - (1));
var G__27947 = cljs.core.first(remainder);
var G__27948 = cljs.core.next(remainder);
acc = G__27945;
pos = G__27946;
this$ = G__27947;
remainder = G__27948;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__27949 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27949,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27949,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_27952 = (((arg < (0)))?(- arg):arg);
var parts_27953 = cljs.pprint.remainders((1000),abs_arg_27952);
if((cljs.core.count(parts_27953) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_27954 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_27953);
var full_str_27955 = cljs.pprint.add_english_scales(parts_strs_27954,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_27955)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__27956 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_27959 = (((arg < (0)))?(- arg):arg);
var parts_27960 = cljs.pprint.remainders((1000),abs_arg_27959);
if((cljs.core.count(parts_27960) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_27961 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_27960));
var head_str_27962 = cljs.pprint.add_english_scales(parts_strs_27961,(1));
var tail_str_27963 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_27960));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_27962))) && (!(cljs.core.empty_QMARK_(tail_str_27963))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_27962),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_27963)].join(''):((!(cljs.core.empty_QMARK_(head_str_27962)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_27962),"th"].join(''):tail_str_27963
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_27964 = cljs.core.rem(arg,(100));
var not_teens_27965 = (((11) < low_two_digits_27964)) || (((19) > low_two_digits_27964));
var low_digit_27966 = cljs.core.rem(low_two_digits_27964,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_27966 === (1))) && (not_teens_27965))?"st":((((low_digit_27966 === (2))) && (not_teens_27965))?"nd":((((low_digit_27966 === (3))) && (not_teens_27965))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__27967 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27967,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27967,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_27970 = cljs.pprint.remainders((10),arg);
var acc_27971 = cljs.core.PersistentVector.EMPTY;
var pos_27972 = (cljs.core.count(digits_27970) - (1));
var digits_27973__$1 = digits_27970;
while(true){
if(cljs.core.empty_QMARK_(digits_27973__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_27971)], 0));
} else {
var digit_27974 = cljs.core.first(digits_27973__$1);
var G__27975 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_27974))?acc_27971:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_27971,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_27972),(digit_27974 - (1)))));
var G__27976 = (pos_27972 - (1));
var G__27977 = cljs.core.next(digits_27973__$1);
acc_27971 = G__27975;
pos_27972 = G__27976;
digits_27973__$1 = G__27977;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__27978 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27978,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27978,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__27981 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27981,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27981,(1),null);
var pred__27984_27991 = cljs.core._EQ_;
var expr__27985_27992 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__27987 = "o";
var G__27988 = expr__27985_27992;
return (pred__27984_27991.cljs$core$IFn$_invoke$arity$2 ? pred__27984_27991.cljs$core$IFn$_invoke$arity$2(G__27987,G__27988) : pred__27984_27991.call(null,G__27987,G__27988));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__27989 = "u";
var G__27990 = expr__27985_27992;
return (pred__27984_27991.cljs$core$IFn$_invoke$arity$2 ? pred__27984_27991.cljs$core$IFn$_invoke$arity$2(G__27989,G__27990) : pred__27984_27991.call(null,G__27989,G__27990));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__27984_27991.cljs$core$IFn$_invoke$arity$2 ? pred__27984_27991.cljs$core$IFn$_invoke$arity$2(null,expr__27985_27992) : pred__27984_27991.call(null,null,expr__27985_27992)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27985_27992)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__27993 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__27996 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27996,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27996,(1),null);
var vec__27999 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27999,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27999,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__28002 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28002,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28002,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__28005 = (i - (1));
i = G__28005;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__8388__auto__ = d;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__8740__auto__ = (2);
var y__8741__auto__ = w;
return ((x__8740__auto__ > y__8741__auto__) ? x__8740__auto__ : y__8741__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__8740__auto__ = (e + (1));
var y__8741__auto__ = (w__$1 - (1));
return ((x__8740__auto__ > y__8741__auto__) ? x__8740__auto__ : y__8741__auto__);
})():(w__$1 + e)
));
var vec__28006 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__28009 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__28012 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28012,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28012,(1),null);
var vec__28015 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28015,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28015,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__28018 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8388__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__28021 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__8376__auto__ = w;
if(cljs.core.truth_(and__8376__auto__)){
var and__8376__auto____$1 = d;
if(cljs.core.truth_(and__8376__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_28024 = cljs.core.count(fixed_repr__$1);
var signed_len_28025 = (cljs.core.truth_(add_sign)?(len_28024 + (1)):len_28024);
var prepend_zero_28026__$1 = (prepend_zero) && (!((signed_len_28025 >= w)));
var append_zero_28027__$1 = (append_zero) && (!((signed_len_28025 >= w)));
var full_len_28028 = (((prepend_zero_28026__$1) || (append_zero_28027__$1))?(signed_len_28025 + (1)):signed_len_28025);
if(cljs.core.truth_((function (){var and__8376__auto__ = (full_len_28028 > w);
if(and__8376__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_28028),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28026__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28027__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28029 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28029,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28029,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__28035_28045 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28036_28046 = G__28035_28045;
var mantissa_28047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036_28046,(0),null);
var exp_28048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036_28046,(1),null);
var G__28035_28049__$1 = G__28035_28045;
while(true){
var vec__28039_28050 = G__28035_28049__$1;
var mantissa_28051__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28039_28050,(0),null);
var exp_28052__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28039_28050,(1),null);
var w_28053 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_28054 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_28055 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_28056 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_28057 = (function (){var or__8388__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return "E";
}
})();
var add_sign_28058 = (function (){var or__8388__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_28059 = (k_28056 <= (0));
var scaled_exp_28060 = (exp_28052__$1 - (k_28056 - (1)));
var scaled_exp_str_28061 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_28060))].join('');
var scaled_exp_str_28062__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_28057),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_28060 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_28055)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_28055 - cljs.core.count(scaled_exp_str_28061)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28061)].join('');
var exp_width_28063 = cljs.core.count(scaled_exp_str_28062__$1);
var base_mantissa_width_28064 = cljs.core.count(mantissa_28051__$1);
var scaled_mantissa_28065 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_28056),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_28051__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_28054)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_28054 - (base_mantissa_width_28064 - (1))) - (((k_28056 < (0)))?(- k_28056):(0))),"0")):null))].join('');
var w_mantissa_28066 = (cljs.core.truth_(w_28053)?(w_28053 - exp_width_28063):null);
var vec__28042_28067 = cljs.pprint.round_str(scaled_mantissa_28065,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_28056,(0)))?(d_28054 - (1)):(((k_28056 > (0)))?d_28054:(((k_28056 < (0)))?(d_28054 - (1)):null))),(cljs.core.truth_(w_mantissa_28066)?(w_mantissa_28066 - (cljs.core.truth_(add_sign_28058)?(1):(0))):null));
var rounded_mantissa_28068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042_28067,(0),null);
var __28069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042_28067,(1),null);
var incr_exp_28070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042_28067,(2),null);
var full_mantissa_28071 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_28068,k_28056);
var append_zero_28072 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_28056,cljs.core.count(rounded_mantissa_28068))) && ((d_28054 == null));
if(cljs.core.not(incr_exp_28070)){
if(cljs.core.truth_(w_28053)){
var len_28073 = (cljs.core.count(full_mantissa_28071) + exp_width_28063);
var signed_len_28074 = (cljs.core.truth_(add_sign_28058)?(len_28073 + (1)):len_28073);
var prepend_zero_28075__$1 = (prepend_zero_28059) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_28074,w_28053)));
var full_len_28076 = ((prepend_zero_28075__$1)?(signed_len_28074 + (1)):signed_len_28074);
var append_zero_28077__$1 = (append_zero_28072) && ((full_len_28076 < w_28053));
if(cljs.core.truth_((function (){var and__8376__auto__ = (function (){var or__8388__auto__ = (full_len_28076 > w_28053);
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = e_28055;
if(cljs.core.truth_(and__8376__auto__)){
return ((exp_width_28063 - (2)) > e_28055);
} else {
return and__8376__auto__;
}
}
})();
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_28053,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_28053 - full_len_28076) - ((append_zero_28077__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_28058)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28075__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_28071),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28077__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28062__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_28058)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28059)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_28071),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28072)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28062__$1)].join('')], 0));
}
} else {
var G__28078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_28068,(exp_28052__$1 + (1))], null);
G__28035_28049__$1 = G__28078;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28079 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28079,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28079,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__28082 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28082,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28082,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__8740__auto__ = cljs.core.count(mantissa);
var y__8741__auto__ = (function (){var x__8747__auto__ = n;
var y__8748__auto__ = (7);
return ((x__8747__auto__ < y__8748__auto__) ? x__8747__auto__ : y__8748__auto__);
})();
return ((x__8740__auto__ > y__8741__auto__) ? x__8740__auto__ : y__8741__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__28085 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085,(1),null);
var vec__28088 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__8388__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (arg < (0));
}
})();
var vec__28091 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28091,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28091,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28091,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8376__auto__)){
return add_sign;
} else {
return and__8376__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__8376__auto__){
return add_sign;
} else {
return and__8376__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__28094 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28094,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28094,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28097 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28097,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28097,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28100 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28100,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28100,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28103 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(1),null);
var vec__28106 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28106,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28106,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8388__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = max_count;
if(cljs.core.truth_(and__8376__auto__)){
return (count >= max_count);
} else {
return and__8376__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__28109 = (count + (1));
var G__28110 = iter_result;
var G__28111 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__28109;
args__$1 = G__28110;
last_pos = G__28111;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28112 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28112,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28112,(1),null);
var vec__28115 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28115,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28115,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__8388__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = max_count;
if(cljs.core.truth_(and__8376__auto__)){
return (count >= max_count);
} else {
return and__8376__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__28118 = (count + (1));
var G__28119 = cljs.core.next(arg_list__$1);
count = G__28118;
arg_list__$1 = G__28119;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28120 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8388__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = max_count;
if(cljs.core.truth_(and__8376__auto__)){
return (count >= max_count);
} else {
return and__8376__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__28123 = (count + (1));
var G__28124 = iter_result;
var G__28125 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__28123;
navigator__$2 = G__28124;
last_pos = G__28125;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28126 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28126,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28126,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__8388__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = max_count;
if(cljs.core.truth_(and__8376__auto__)){
return (count >= max_count);
} else {
return and__8376__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__28129 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28129,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28129,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__28132 = (count + (1));
var G__28133 = navigator__$3;
count = G__28132;
navigator__$2 = G__28133;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__28134 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_28137 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28137;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__28138 = cljs.core.next(clauses__$1);
var G__28139 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__28140 = iter_result;
clauses__$1 = G__28138;
acc = G__28139;
navigator__$1 = G__28140;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__28141 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var else$ = temp__5457__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__28144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28141,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28141,(1),null);
var navigator__$1 = (function (){var or__8388__auto__ = new_navigator;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return navigator;
}
})();
var vec__28147 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28147,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28147,(1),null);
var navigator__$2 = (function (){var or__8388__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__8388__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__8388__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__28150 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28150,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28150,(1),null);
var slots = (function (){var x__8740__auto__ = (1);
var y__8741__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__8740__auto__ > y__8741__auto__) ? x__8740__auto__ : y__8741__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__8740__auto__ = minpad;
var y__8741__auto__ = cljs.core.quot(total_pad,slots);
return ((x__8740__auto__ > y__8741__auto__) ? x__8740__auto__ : y__8741__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__8376__auto__ = eol_str;
if(cljs.core.truth_(and__8376__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__8376__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_28153__$1 = slots;
var extra_pad_28154__$1 = extra_pad;
var strs_28155__$1 = strs;
var pad_only_28156 = (function (){var or__8388__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_28155__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_28155__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_28156))?cljs.core.first(strs_28155__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8388__auto__ = pad_only_28156;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = cljs.core.next(strs_28155__$1);
if(or__8388__auto____$1){
return or__8388__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_28154__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__28157 = (slots_28153__$1 - (1));
var G__28158 = (extra_pad_28154__$1 - (1));
var G__28159 = (cljs.core.truth_(pad_only_28156)?strs_28155__$1:cljs.core.next(strs_28155__$1));
var G__28160 = false;
slots_28153__$1 = G__28157;
extra_pad_28154__$1 = G__28158;
strs_28155__$1 = G__28159;
pad_only_28156 = G__28160;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint28161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28161 = (function (writer,meta28162){
this.writer = writer;
this.meta28162 = meta28162;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28163,meta28162__$1){
var self__ = this;
var _28163__$1 = this;
return (new cljs.pprint.t_cljs$pprint28161(self__.writer,meta28162__$1));
});

cljs.pprint.t_cljs$pprint28161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28163){
var self__ = this;
var _28163__$1 = this;
return self__.meta28162;
});

cljs.pprint.t_cljs$pprint28161.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28161.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28164 = cljs.core._EQ_;
var expr__28165 = cljs.core.type(x);
if(cljs.core.truth_((pred__28164.cljs$core$IFn$_invoke$arity$2 ? pred__28164.cljs$core$IFn$_invoke$arity$2(String,expr__28165) : pred__28164.call(null,String,expr__28165)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__28164.cljs$core$IFn$_invoke$arity$2 ? pred__28164.cljs$core$IFn$_invoke$arity$2(Number,expr__28165) : pred__28164.call(null,Number,expr__28165)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28165)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta28162], null);
});

cljs.pprint.t_cljs$pprint28161.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28161.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28161";

cljs.pprint.t_cljs$pprint28161.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28161");
});

cljs.pprint.__GT_t_cljs$pprint28161 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint28161(writer__$1,meta28162){
return (new cljs.pprint.t_cljs$pprint28161(writer__$1,meta28162));
});

}

return (new cljs.pprint.t_cljs$pprint28161(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint28167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28167 = (function (writer,meta28168){
this.writer = writer;
this.meta28168 = meta28168;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28169,meta28168__$1){
var self__ = this;
var _28169__$1 = this;
return (new cljs.pprint.t_cljs$pprint28167(self__.writer,meta28168__$1));
});

cljs.pprint.t_cljs$pprint28167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28169){
var self__ = this;
var _28169__$1 = this;
return self__.meta28168;
});

cljs.pprint.t_cljs$pprint28167.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28167.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28170 = cljs.core._EQ_;
var expr__28171 = cljs.core.type(x);
if(cljs.core.truth_((pred__28170.cljs$core$IFn$_invoke$arity$2 ? pred__28170.cljs$core$IFn$_invoke$arity$2(String,expr__28171) : pred__28170.call(null,String,expr__28171)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__28170.cljs$core$IFn$_invoke$arity$2 ? pred__28170.cljs$core$IFn$_invoke$arity$2(Number,expr__28171) : pred__28170.call(null,Number,expr__28171)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28171)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta28168], null);
});

cljs.pprint.t_cljs$pprint28167.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28167.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28167";

cljs.pprint.t_cljs$pprint28167.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28167");
});

cljs.pprint.__GT_t_cljs$pprint28167 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint28167(writer__$1,meta28168){
return (new cljs.pprint.t_cljs$pprint28167(writer__$1,meta28168));
});

}

return (new cljs.pprint.t_cljs$pprint28167(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__8376__auto__ = first_QMARK_;
if(cljs.core.truth_(and__8376__auto__)){
var and__8376__auto____$1 = f;
if(cljs.core.truth_(and__8376__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__8376__auto__ = m;
if(cljs.core.truth_(and__8376__auto__)){
return (m.index + (1));
} else {
return and__8376__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint28173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28173 = (function (writer,last_was_whitespace_QMARK_,meta28174){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta28174 = meta28174;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_28175,meta28174__$1){
var self__ = this;
var _28175__$1 = this;
return (new cljs.pprint.t_cljs$pprint28173(self__.writer,self__.last_was_whitespace_QMARK_,meta28174__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_28175){
var self__ = this;
var _28175__$1 = this;
return self__.meta28174;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28173.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28173.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28176 = cljs.core._EQ_;
var expr__28177 = cljs.core.type(x);
if(cljs.core.truth_((pred__28176.cljs$core$IFn$_invoke$arity$2 ? pred__28176.cljs$core$IFn$_invoke$arity$2(String,expr__28177) : pred__28176.call(null,String,expr__28177)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__28179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__28179);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__28176.cljs$core$IFn$_invoke$arity$2 ? pred__28176.cljs$core$IFn$_invoke$arity$2(Number,expr__28177) : pred__28176.call(null,Number,expr__28177)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28177)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28173.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta28174], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28173.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28173.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28173";

cljs.pprint.t_cljs$pprint28173.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28173");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint28173 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint28173(writer__$1,last_was_whitespace_QMARK___$1,meta28174){
return (new cljs.pprint.t_cljs$pprint28173(writer__$1,last_was_whitespace_QMARK___$1,meta28174));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint28173(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint28180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28180 = (function (writer,capped,meta28181){
this.writer = writer;
this.capped = capped;
this.meta28181 = meta28181;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_28182,meta28181__$1){
var self__ = this;
var _28182__$1 = this;
return (new cljs.pprint.t_cljs$pprint28180(self__.writer,self__.capped,meta28181__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint28180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_28182){
var self__ = this;
var _28182__$1 = this;
return self__.meta28181;
});})(capped))
;

cljs.pprint.t_cljs$pprint28180.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint28180.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28183 = cljs.core._EQ_;
var expr__28184 = cljs.core.type(x);
if(cljs.core.truth_((pred__28183.cljs$core$IFn$_invoke$arity$2 ? pred__28183.cljs$core$IFn$_invoke$arity$2(String,expr__28184) : pred__28183.call(null,String,expr__28184)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__8376__auto__ = m;
if(cljs.core.truth_(and__8376__auto__)){
return m.index;
} else {
return and__8376__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__28183.cljs$core$IFn$_invoke$arity$2 ? pred__28183.cljs$core$IFn$_invoke$arity$2(Number,expr__28184) : pred__28183.call(null,Number,expr__28184)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__8376__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__8376__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28184)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint28180.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta28181], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint28180.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28180.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28180";

cljs.pprint.t_cljs$pprint28180.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28180");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint28180 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint28180(writer__$1,capped__$1,meta28181){
return (new cljs.pprint.t_cljs$pprint28180(writer__$1,capped__$1,meta28181));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint28180(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_28186 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28186;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_28188 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_28189 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_28190 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_28191 = (((current_28190 < colnum_28188))?(colnum_28188 - current_28190):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_28189,(0)))?(0):(colinc_28189 - cljs.core.rem((current_28190 - colnum_28188),colinc_28189))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_28191," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_28192 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_28193 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_28194 = (colrel_28192 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_28195 = (((colinc_28193 > (0)))?cljs.core.rem(start_col_28194,colinc_28193):(0));
var space_count_28196 = (colrel_28192 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_28195))?(0):(colinc_28193 - offset_28195)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_28196," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__28197 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28197,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28197,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28200_28202 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28201_28203 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28201_28203;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28200_28202;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28204_SHARP_,p2__28205_SHARP_,p3__28206_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__28204_SHARP_,p2__28205_SHARP_,p3__28206_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28207_SHARP_,p2__28208_SHARP_,p3__28209_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__28207_SHARP_,p2__28208_SHARP_,p3__28209_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28210_SHARP_,p2__28211_SHARP_,p3__28212_SHARP_){
return cljs.pprint.format_integer((10),p1__28210_SHARP_,p2__28211_SHARP_,p3__28212_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28213_SHARP_,p2__28214_SHARP_,p3__28215_SHARP_){
return cljs.pprint.format_integer((2),p1__28213_SHARP_,p2__28214_SHARP_,p3__28215_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28216_SHARP_,p2__28217_SHARP_,p3__28218_SHARP_){
return cljs.pprint.format_integer((8),p1__28216_SHARP_,p2__28217_SHARP_,p3__28218_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28219_SHARP_,p2__28220_SHARP_,p3__28221_SHARP_){
return cljs.pprint.format_integer((16),p1__28219_SHARP_,p2__28220_SHARP_,p3__28221_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__28222_SHARP_,p2__28223_SHARP_,p3__28224_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__28222_SHARP_),p1__28222_SHARP_,p2__28223_SHARP_,p3__28224_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())){
return (function (p1__28225_SHARP_,p2__28226_SHARP_,p3__28227_SHARP_){
return cljs.pprint.format_old_roman(p1__28225_SHARP_,p2__28226_SHARP_,p3__28227_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28228_SHARP_,p2__28229_SHARP_,p3__28230_SHARP_){
return cljs.pprint.format_new_roman(p1__28228_SHARP_,p2__28229_SHARP_,p3__28230_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28231_SHARP_,p2__28232_SHARP_,p3__28233_SHARP_){
return cljs.pprint.format_ordinal_english(p1__28231_SHARP_,p2__28232_SHARP_,p3__28233_SHARP_);
});
} else {
return (function (p1__28234_SHARP_,p2__28235_SHARP_,p3__28236_SHARP_){
return cljs.pprint.format_cardinal_english(p1__28234_SHARP_,p2__28235_SHARP_,p3__28236_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__28246 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9433__auto___28264 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28265 = (0);
while(true){
if((i_28265 < n__9433__auto___28264)){
cljs.pprint.prn();

var G__28266 = (i_28265 + (1));
i_28265 = G__28266;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_28267 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_28267 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9433__auto___28268 = (cnt_28267 - (1));
var i_28269 = (0);
while(true){
if((i_28269 < n__9433__auto___28268)){
cljs.pprint.prn();

var G__28270 = (i_28269 + (1));
i_28269 = G__28270;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9433__auto___28271 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28272 = (0);
while(true){
if((i_28272 < n__9433__auto___28271)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__28273 = (i_28272 + (1));
i_28272 = G__28273;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28237_SHARP_,p2__28238_SHARP_,p3__28239_SHARP_){
return cljs.pprint.relative_tabulation(p1__28237_SHARP_,p2__28238_SHARP_,p3__28239_SHARP_);
});
} else {
return (function (p1__28240_SHARP_,p2__28241_SHARP_,p3__28242_SHARP_){
return cljs.pprint.absolute_tabulation(p1__28240_SHARP_,p2__28241_SHARP_,p3__28242_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__28249 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28249,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28249,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__28252 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28252,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28252,(1),null);
var vec__28255 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28255,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28255,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__28243_SHARP_,p2__28244_SHARP_,p3__28245_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__28243_SHARP_,p2__28244_SHARP_,p3__28245_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__8376__auto__ = arg1;
if(cljs.core.truth_(and__8376__auto__)){
var and__8376__auto____$1 = arg2;
if(cljs.core.truth_(and__8376__auto____$1)){
return arg3;
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__8376__auto__ = arg1;
if(cljs.core.truth_(and__8376__auto__)){
return arg2;
} else {
return and__8376__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__8388__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__28258 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28258,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28258,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__28261 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28261,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28261,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__28274){
var vec__28275 = p__28274;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28275,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28275,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28275,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__28278){
var vec__28279 = p__28278;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28279,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28279,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__28282){
var vec__28283 = p__28282;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8376__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8376__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8376__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8376__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8376__auto__){
var and__8376__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__8376__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8376__auto____$1;
}
} else {
return and__8376__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__8747__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__8748__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__8747__auto__ < y__8748__auto__) ? x__8747__auto__ : y__8748__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28286_SHARP_,p2__28287_SHARP_){
var val = cljs.core.first(p1__28286_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__28287_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__28287_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__28286_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__9270__auto__ = (function cljs$pprint$map_params_$_iter__28291(s__28292){
return (new cljs.core.LazySeq(null,(function (){
var s__28292__$1 = s__28292;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28292__$1);
if(temp__5457__auto__){
var s__28292__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28292__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28292__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28294 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28293 = (0);
while(true){
if((i__28293 < size__9269__auto__)){
var vec__28295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28293);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28295,(0),null);
var vec__28298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28295,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28298,(0),null);
cljs.core.chunk_append(b__28294,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__28307 = (i__28293 + (1));
i__28293 = G__28307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28294),cljs$pprint$map_params_$_iter__28291(cljs.core.chunk_rest(s__28292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28294),null);
}
} else {
var vec__28301 = cljs.core.first(s__28292__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28301,(0),null);
var vec__28304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28301,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28304,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__28291(cljs.core.rest(s__28292__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28288_SHARP_,p2__28289_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__28288_SHARP_,p2__28289_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28290_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28290_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__28308 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(0),null);
var vec__28311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(1),null);
var vec__28314 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28314,(0),null);
var vec__28317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28314,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28317,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28317,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28317,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__28320 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__28320.cljs$core$IFn$_invoke$arity$2 ? fexpr__28320.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__28320.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__8376__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__8376__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__28321 = (function (){var G__28324 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__28325 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__28326 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__28324,G__28325,G__28326) : cljs.pprint.collect_clauses.call(null,G__28324,G__28325,G__28326));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__28327){
var vec__28328 = p__28327;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28328,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28328,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28328,(2),null);
var vec__28331 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(0),null);
var vec__28334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28334,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28334,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28334,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28334,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_28337 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_28337){
return (function (p__28338){
var vec__28339 = p__28338;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_28337))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_28337;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__8388__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__8388__auto____$1)){
return or__8388__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__28342 = cljs.core.next(format__$1);
format__$1 = G__28342;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__28344 = arguments.length;
switch (G__28344) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__8376__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__8376__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_28345 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28345;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28346 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28346,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28346,(1),null);
var vec__28349 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28349,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28349,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__28353 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__28353) : cljs.pprint.reader_macros.call(null,G__28353));
})();
if(cljs.core.truth_((function (){var and__8376__auto__ = macro_char;
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__8376__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28354_28357 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28355_28358 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count28356_28359 = (0);
var alis_28360__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28356_28359 < cljs.core._STAR_print_length_STAR_))){
if(alis_28360__$1){
cljs.pprint.write_out(cljs.core.first(alis_28360__$1));

if(cljs.core.next(alis_28360__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28361 = (length_count28356_28359 + (1));
var G__28362 = cljs.core.next(alis_28360__$1);
length_count28356_28359 = G__28361;
alis_28360__$1 = G__28362;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28355_28358;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28354_28357;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28363_28366 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28364_28367 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28365_28368 = (0);
var aseq_28369 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28365_28368 < cljs.core._STAR_print_length_STAR_))){
if(aseq_28369){
cljs.pprint.write_out(cljs.core.first(aseq_28369));

if(cljs.core.next(aseq_28369)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28370 = (length_count28365_28368 + (1));
var G__28371 = cljs.core.next(aseq_28369);
length_count28365_28368 = G__28370;
aseq_28369 = G__28371;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28364_28367;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28363_28366;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__27462__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28372__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28372 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28373__i = 0, G__28373__a = new Array(arguments.length -  0);
while (G__28373__i < G__28373__a.length) {G__28373__a[G__28373__i] = arguments[G__28373__i + 0]; ++G__28373__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28373__a,0,null);
} 
return G__28372__delegate.call(this,args__27464__auto__);};
G__28372.cljs$lang$maxFixedArity = 0;
G__28372.cljs$lang$applyTo = (function (arglist__28374){
var args__27464__auto__ = cljs.core.seq(arglist__28374);
return G__28372__delegate(args__27464__auto__);
});
G__28372.cljs$core$IFn$_invoke$arity$variadic = G__28372__delegate;
return G__28372;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__28375 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__28378 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9841,9841,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__28378.cljs$core$IFn$_invoke$arity$1 ? fexpr__28378.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__28378.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(1),null);
var amap__$1 = (function (){var or__8388__auto__ = lift_map;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28379_28384 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28380_28385 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count28381_28386 = (0);
var aseq_28387 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28381_28386 < cljs.core._STAR_print_length_STAR_))){
if(aseq_28387){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28382_28388 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28383_28389 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_28387));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_28387)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28383_28389;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28382_28388;
}}


if(cljs.core.next(aseq_28387)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28390 = (length_count28381_28386 + (1));
var G__28391 = cljs.core.next(aseq_28387);
length_count28381_28386 = G__28390;
aseq_28387 = G__28391;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28380_28385;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28379_28384;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__27462__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28392__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28392 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28393__i = 0, G__28393__a = new Array(arguments.length -  0);
while (G__28393__i < G__28393__a.length) {G__28393__a[G__28393__i] = arguments[G__28393__i + 0]; ++G__28393__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28393__a,0,null);
} 
return G__28392__delegate.call(this,args__27464__auto__);};
G__28392.cljs$lang$maxFixedArity = 0;
G__28392.cljs$lang$applyTo = (function (arglist__28394){
var args__27464__auto__ = cljs.core.seq(arglist__28394);
return G__28392__delegate(args__27464__auto__);
});
G__28392.cljs$core$IFn$_invoke$arity$variadic = G__28392__delegate;
return G__28392;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__8388__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28395_28399 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28396_28400 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__8376__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__8376__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__8376__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28396_28400;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28395_28399;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__27462__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28401__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28401 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28402__i = 0, G__28402__a = new Array(arguments.length -  0);
while (G__28402__i < G__28402__a.length) {G__28402__a[G__28402__i] = arguments[G__28402__i + 0]; ++G__28402__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28402__a,0,null);
} 
return G__28401__delegate.call(this,args__27464__auto__);};
G__28401.cljs$lang$maxFixedArity = 0;
G__28401.cljs$lang$applyTo = (function (arglist__28403){
var args__27464__auto__ = cljs.core.seq(arglist__28403);
return G__28401__delegate(args__27464__auto__);
});
G__28401.cljs$core$IFn$_invoke$arity$variadic = G__28401__delegate;
return G__28401;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__9443__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__28405 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28405,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28405,(1),null);
var vec__28408 = reference;
var seq__28409 = cljs.core.seq(vec__28408);
var first__28410 = cljs.core.first(seq__28409);
var seq__28409__$1 = cljs.core.next(seq__28409);
var keyw = first__28410;
var args = seq__28409__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28411_28427 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28412_28428 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__28413_28429 = (function (){var format_in__27462__auto__ = "~w~:i";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args){
return (function() { 
var G__28430__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28430 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28431__i = 0, G__28431__a = new Array(arguments.length -  0);
while (G__28431__i < G__28431__a.length) {G__28431__a[G__28431__i] = arguments[G__28431__i + 0]; ++G__28431__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28431__a,0,null);
} 
return G__28430__delegate.call(this,args__27464__auto__);};
G__28430.cljs$lang$maxFixedArity = 0;
G__28430.cljs$lang$applyTo = (function (arglist__28432){
var args__27464__auto__ = cljs.core.seq(arglist__28432);
return G__28430__delegate(args__27464__auto__);
});
G__28430.cljs$core$IFn$_invoke$arity$variadic = G__28430__delegate;
return G__28430;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args))
})();
(fexpr__28413_28429.cljs$core$IFn$_invoke$arity$1 ? fexpr__28413_28429.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__28413_28429.call(null,keyw));

var args_28433__$1 = args;
while(true){
if(cljs.core.seq(args_28433__$1)){
var fexpr__28414_28434 = (function (){var format_in__27462__auto__ = " ";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (args_28433__$1,format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args){
return (function() { 
var G__28435__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28435 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28436__i = 0, G__28436__a = new Array(arguments.length -  0);
while (G__28436__i < G__28436__a.length) {G__28436__a[G__28436__i] = arguments[G__28436__i + 0]; ++G__28436__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28436__a,0,null);
} 
return G__28435__delegate.call(this,args__27464__auto__);};
G__28435.cljs$lang$maxFixedArity = 0;
G__28435.cljs$lang$applyTo = (function (arglist__28437){
var args__27464__auto__ = cljs.core.seq(arglist__28437);
return G__28435__delegate(args__27464__auto__);
});
G__28435.cljs$core$IFn$_invoke$arity$variadic = G__28435__delegate;
return G__28435;
})()
;
;})(args_28433__$1,format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args))
})();
(fexpr__28414_28434.cljs$core$IFn$_invoke$arity$0 ? fexpr__28414_28434.cljs$core$IFn$_invoke$arity$0() : fexpr__28414_28434.call(null));

var arg_28438 = cljs.core.first(args_28433__$1);
if(cljs.core.sequential_QMARK_(arg_28438)){
var vec__28415_28439 = cljs.pprint.brackets(arg_28438);
var start_28440__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415_28439,(0),null);
var end_28441__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415_28439,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28418_28442 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28419_28443 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_28440__$1,null,end_28441__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_28438),(3))) && ((cljs.core.second(arg_28438) instanceof cljs.core.Keyword))){
var vec__28420_28444 = arg_28438;
var ns_28445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28420_28444,(0),null);
var kw_28446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28420_28444,(1),null);
var lis_28447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28420_28444,(2),null);
var fexpr__28423_28448 = (function (){var format_in__27462__auto__ = "~w ~w ";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (args_28433__$1,format_in__27462__auto__,cf__27463__auto__,vec__28420_28444,ns_28445,kw_28446,lis_28447,_STAR_current_level_STAR_28418_28442,_STAR_current_length_STAR_28419_28443,vec__28415_28439,start_28440__$1,end_28441__$1,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args){
return (function() { 
var G__28449__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28449 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28450__i = 0, G__28450__a = new Array(arguments.length -  0);
while (G__28450__i < G__28450__a.length) {G__28450__a[G__28450__i] = arguments[G__28450__i + 0]; ++G__28450__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28450__a,0,null);
} 
return G__28449__delegate.call(this,args__27464__auto__);};
G__28449.cljs$lang$maxFixedArity = 0;
G__28449.cljs$lang$applyTo = (function (arglist__28451){
var args__27464__auto__ = cljs.core.seq(arglist__28451);
return G__28449__delegate(args__27464__auto__);
});
G__28449.cljs$core$IFn$_invoke$arity$variadic = G__28449__delegate;
return G__28449;
})()
;
;})(args_28433__$1,format_in__27462__auto__,cf__27463__auto__,vec__28420_28444,ns_28445,kw_28446,lis_28447,_STAR_current_level_STAR_28418_28442,_STAR_current_length_STAR_28419_28443,vec__28415_28439,start_28440__$1,end_28441__$1,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args))
})();
(fexpr__28423_28448.cljs$core$IFn$_invoke$arity$2 ? fexpr__28423_28448.cljs$core$IFn$_invoke$arity$2(ns_28445,kw_28446) : fexpr__28423_28448.call(null,ns_28445,kw_28446));

if(cljs.core.sequential_QMARK_(lis_28447)){
var fexpr__28424_28452 = (function (){var format_in__27462__auto__ = ((cljs.core.vector_QMARK_(lis_28447))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (args_28433__$1,format_in__27462__auto__,cf__27463__auto__,vec__28420_28444,ns_28445,kw_28446,lis_28447,_STAR_current_level_STAR_28418_28442,_STAR_current_length_STAR_28419_28443,vec__28415_28439,start_28440__$1,end_28441__$1,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args){
return (function() { 
var G__28453__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28453 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28454__i = 0, G__28454__a = new Array(arguments.length -  0);
while (G__28454__i < G__28454__a.length) {G__28454__a[G__28454__i] = arguments[G__28454__i + 0]; ++G__28454__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28454__a,0,null);
} 
return G__28453__delegate.call(this,args__27464__auto__);};
G__28453.cljs$lang$maxFixedArity = 0;
G__28453.cljs$lang$applyTo = (function (arglist__28455){
var args__27464__auto__ = cljs.core.seq(arglist__28455);
return G__28453__delegate(args__27464__auto__);
});
G__28453.cljs$core$IFn$_invoke$arity$variadic = G__28453__delegate;
return G__28453;
})()
;
;})(args_28433__$1,format_in__27462__auto__,cf__27463__auto__,vec__28420_28444,ns_28445,kw_28446,lis_28447,_STAR_current_level_STAR_28418_28442,_STAR_current_length_STAR_28419_28443,vec__28415_28439,start_28440__$1,end_28441__$1,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args))
})();
(fexpr__28424_28452.cljs$core$IFn$_invoke$arity$1 ? fexpr__28424_28452.cljs$core$IFn$_invoke$arity$1(lis_28447) : fexpr__28424_28452.call(null,lis_28447));
} else {
cljs.pprint.write_out(lis_28447);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27462__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (args_28433__$1,format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28418_28442,_STAR_current_length_STAR_28419_28443,vec__28415_28439,start_28440__$1,end_28441__$1,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args){
return (function() { 
var G__28456__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28456 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28457__i = 0, G__28457__a = new Array(arguments.length -  0);
while (G__28457__i < G__28457__a.length) {G__28457__a[G__28457__i] = arguments[G__28457__i + 0]; ++G__28457__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28457__a,0,null);
} 
return G__28456__delegate.call(this,args__27464__auto__);};
G__28456.cljs$lang$maxFixedArity = 0;
G__28456.cljs$lang$applyTo = (function (arglist__28458){
var args__27464__auto__ = cljs.core.seq(arglist__28458);
return G__28456__delegate(args__27464__auto__);
});
G__28456.cljs$core$IFn$_invoke$arity$variadic = G__28456__delegate;
return G__28456;
})()
;
;})(args_28433__$1,format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28418_28442,_STAR_current_length_STAR_28419_28443,vec__28415_28439,start_28440__$1,end_28441__$1,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args))
})(),arg_28438);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28419_28443;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28418_28442;
}}


if(cljs.core.next(args_28433__$1)){
var fexpr__28425_28459 = (function (){var format_in__27462__auto__ = "~_";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (args_28433__$1,format_in__27462__auto__,cf__27463__auto__,vec__28415_28439,start_28440__$1,end_28441__$1,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args){
return (function() { 
var G__28460__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28460 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28461__i = 0, G__28461__a = new Array(arguments.length -  0);
while (G__28461__i < G__28461__a.length) {G__28461__a[G__28461__i] = arguments[G__28461__i + 0]; ++G__28461__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28461__a,0,null);
} 
return G__28460__delegate.call(this,args__27464__auto__);};
G__28460.cljs$lang$maxFixedArity = 0;
G__28460.cljs$lang$applyTo = (function (arglist__28462){
var args__27464__auto__ = cljs.core.seq(arglist__28462);
return G__28460__delegate(args__27464__auto__);
});
G__28460.cljs$core$IFn$_invoke$arity$variadic = G__28460__delegate;
return G__28460;
})()
;
;})(args_28433__$1,format_in__27462__auto__,cf__27463__auto__,vec__28415_28439,start_28440__$1,end_28441__$1,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args))
})();
(fexpr__28425_28459.cljs$core$IFn$_invoke$arity$0 ? fexpr__28425_28459.cljs$core$IFn$_invoke$arity$0() : fexpr__28425_28459.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_28438);

if(cljs.core.next(args_28433__$1)){
var fexpr__28426_28463 = (function (){var format_in__27462__auto__ = "~:_";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (args_28433__$1,format_in__27462__auto__,cf__27463__auto__,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args){
return (function() { 
var G__28464__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28464 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28465__i = 0, G__28465__a = new Array(arguments.length -  0);
while (G__28465__i < G__28465__a.length) {G__28465__a[G__28465__i] = arguments[G__28465__i + 0]; ++G__28465__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28465__a,0,null);
} 
return G__28464__delegate.call(this,args__27464__auto__);};
G__28464.cljs$lang$maxFixedArity = 0;
G__28464.cljs$lang$applyTo = (function (arglist__28466){
var args__27464__auto__ = cljs.core.seq(arglist__28466);
return G__28464__delegate(args__27464__auto__);
});
G__28464.cljs$core$IFn$_invoke$arity$variadic = G__28464__delegate;
return G__28464;
})()
;
;})(args_28433__$1,format_in__27462__auto__,cf__27463__auto__,arg_28438,_STAR_current_level_STAR_28411_28427,_STAR_current_length_STAR_28412_28428,vec__28405,start,end,vec__28408,seq__28409,first__28410,seq__28409__$1,keyw,args))
})();
(fexpr__28426_28463.cljs$core$IFn$_invoke$arity$0 ? fexpr__28426_28463.cljs$core$IFn$_invoke$arity$0() : fexpr__28426_28463.call(null));
} else {
}
}

var G__28467 = cljs.core.next(args_28433__$1);
args_28433__$1 = G__28467;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28412_28428;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28411_28427;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__28468 = alis;
var seq__28469 = cljs.core.seq(vec__28468);
var first__28470 = cljs.core.first(seq__28469);
var seq__28469__$1 = cljs.core.next(seq__28469);
var ns_sym = first__28470;
var first__28470__$1 = cljs.core.first(seq__28469__$1);
var seq__28469__$2 = cljs.core.next(seq__28469__$1);
var ns_name = first__28470__$1;
var stuff = seq__28469__$2;
var vec__28471 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28471,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28471,(1),null);
var vec__28474 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28474,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28474,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28477_28484 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28478_28485 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__28479_28486 = (function (){var format_in__27462__auto__ = "~w ~1I~@_~w";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28477_28484,_STAR_current_length_STAR_28478_28485,vec__28468,seq__28469,first__28470,seq__28469__$1,ns_sym,first__28470__$1,seq__28469__$2,ns_name,stuff,vec__28471,doc_str,stuff__$1,vec__28474,attr_map,references){
return (function() { 
var G__28487__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28487 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28488__i = 0, G__28488__a = new Array(arguments.length -  0);
while (G__28488__i < G__28488__a.length) {G__28488__a[G__28488__i] = arguments[G__28488__i + 0]; ++G__28488__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28488__a,0,null);
} 
return G__28487__delegate.call(this,args__27464__auto__);};
G__28487.cljs$lang$maxFixedArity = 0;
G__28487.cljs$lang$applyTo = (function (arglist__28489){
var args__27464__auto__ = cljs.core.seq(arglist__28489);
return G__28487__delegate(args__27464__auto__);
});
G__28487.cljs$core$IFn$_invoke$arity$variadic = G__28487__delegate;
return G__28487;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28477_28484,_STAR_current_length_STAR_28478_28485,vec__28468,seq__28469,first__28470,seq__28469__$1,ns_sym,first__28470__$1,seq__28469__$2,ns_name,stuff,vec__28471,doc_str,stuff__$1,vec__28474,attr_map,references))
})();
(fexpr__28479_28486.cljs$core$IFn$_invoke$arity$2 ? fexpr__28479_28486.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__28479_28486.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__8388__auto__ = doc_str;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = attr_map;
if(cljs.core.truth_(or__8388__auto____$1)){
return or__8388__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__28480_28490 = (function (){var format_in__27462__auto__ = "~@:_";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28477_28484,_STAR_current_length_STAR_28478_28485,vec__28468,seq__28469,first__28470,seq__28469__$1,ns_sym,first__28470__$1,seq__28469__$2,ns_name,stuff,vec__28471,doc_str,stuff__$1,vec__28474,attr_map,references){
return (function() { 
var G__28491__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28491 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28492__i = 0, G__28492__a = new Array(arguments.length -  0);
while (G__28492__i < G__28492__a.length) {G__28492__a[G__28492__i] = arguments[G__28492__i + 0]; ++G__28492__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28492__a,0,null);
} 
return G__28491__delegate.call(this,args__27464__auto__);};
G__28491.cljs$lang$maxFixedArity = 0;
G__28491.cljs$lang$applyTo = (function (arglist__28493){
var args__27464__auto__ = cljs.core.seq(arglist__28493);
return G__28491__delegate(args__27464__auto__);
});
G__28491.cljs$core$IFn$_invoke$arity$variadic = G__28491__delegate;
return G__28491;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28477_28484,_STAR_current_length_STAR_28478_28485,vec__28468,seq__28469,first__28470,seq__28469__$1,ns_sym,first__28470__$1,seq__28469__$2,ns_name,stuff,vec__28471,doc_str,stuff__$1,vec__28474,attr_map,references))
})();
(fexpr__28480_28490.cljs$core$IFn$_invoke$arity$0 ? fexpr__28480_28490.cljs$core$IFn$_invoke$arity$0() : fexpr__28480_28490.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__8388__auto__ = attr_map;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__28482_28494 = attr_map;
var G__28483_28495 = cljs.core.seq(references);
var fexpr__28481_28496 = (function (){var format_in__27462__auto__ = "~w~:[~;~:@_~]";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,G__28482_28494,G__28483_28495,_STAR_current_level_STAR_28477_28484,_STAR_current_length_STAR_28478_28485,vec__28468,seq__28469,first__28470,seq__28469__$1,ns_sym,first__28470__$1,seq__28469__$2,ns_name,stuff,vec__28471,doc_str,stuff__$1,vec__28474,attr_map,references){
return (function() { 
var G__28497__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28497 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28498__i = 0, G__28498__a = new Array(arguments.length -  0);
while (G__28498__i < G__28498__a.length) {G__28498__a[G__28498__i] = arguments[G__28498__i + 0]; ++G__28498__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28498__a,0,null);
} 
return G__28497__delegate.call(this,args__27464__auto__);};
G__28497.cljs$lang$maxFixedArity = 0;
G__28497.cljs$lang$applyTo = (function (arglist__28499){
var args__27464__auto__ = cljs.core.seq(arglist__28499);
return G__28497__delegate(args__27464__auto__);
});
G__28497.cljs$core$IFn$_invoke$arity$variadic = G__28497__delegate;
return G__28497;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,G__28482_28494,G__28483_28495,_STAR_current_level_STAR_28477_28484,_STAR_current_length_STAR_28478_28485,vec__28468,seq__28469,first__28470,seq__28469__$1,ns_sym,first__28470__$1,seq__28469__$2,ns_name,stuff,vec__28471,doc_str,stuff__$1,vec__28474,attr_map,references))
})();
(fexpr__28481_28496.cljs$core$IFn$_invoke$arity$2 ? fexpr__28481_28496.cljs$core$IFn$_invoke$arity$2(G__28482_28494,G__28483_28495) : fexpr__28481_28496.call(null,G__28482_28494,G__28483_28495));
} else {
}

var references_28500__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_28500__$1));

var temp__5457__auto___28501 = cljs.core.next(references_28500__$1);
if(temp__5457__auto___28501){
var references_28502__$2 = temp__5457__auto___28501;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28503 = references_28502__$2;
references_28500__$1 = G__28503;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28478_28485;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28477_28484;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__27462__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28504__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28504 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28505__i = 0, G__28505__a = new Array(arguments.length -  0);
while (G__28505__i < G__28505__a.length) {G__28505__a[G__28505__i] = arguments[G__28505__i + 0]; ++G__28505__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28505__a,0,null);
} 
return G__28504__delegate.call(this,args__27464__auto__);};
G__28504.cljs$lang$maxFixedArity = 0;
G__28504.cljs$lang$applyTo = (function (arglist__28506){
var args__27464__auto__ = cljs.core.seq(arglist__28506);
return G__28504__delegate(args__27464__auto__);
});
G__28504.cljs$core$IFn$_invoke$arity$variadic = G__28504__delegate;
return G__28504;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__28507_28510 = (function (){var format_in__27462__auto__ = " ~_";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28511__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28511 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28512__i = 0, G__28512__a = new Array(arguments.length -  0);
while (G__28512__i < G__28512__a.length) {G__28512__a[G__28512__i] = arguments[G__28512__i + 0]; ++G__28512__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28512__a,0,null);
} 
return G__28511__delegate.call(this,args__27464__auto__);};
G__28511.cljs$lang$maxFixedArity = 0;
G__28511.cljs$lang$applyTo = (function (arglist__28513){
var args__27464__auto__ = cljs.core.seq(arglist__28513);
return G__28511__delegate(args__27464__auto__);
});
G__28511.cljs$core$IFn$_invoke$arity$variadic = G__28511__delegate;
return G__28511;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
(fexpr__28507_28510.cljs$core$IFn$_invoke$arity$0 ? fexpr__28507_28510.cljs$core$IFn$_invoke$arity$0() : fexpr__28507_28510.call(null));
} else {
var fexpr__28508_28514 = (function (){var format_in__27462__auto__ = " ~@_";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28515__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28515 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28516__i = 0, G__28516__a = new Array(arguments.length -  0);
while (G__28516__i < G__28516__a.length) {G__28516__a[G__28516__i] = arguments[G__28516__i + 0]; ++G__28516__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28516__a,0,null);
} 
return G__28515__delegate.call(this,args__27464__auto__);};
G__28515.cljs$lang$maxFixedArity = 0;
G__28515.cljs$lang$applyTo = (function (arglist__28517){
var args__27464__auto__ = cljs.core.seq(arglist__28517);
return G__28515__delegate(args__27464__auto__);
});
G__28515.cljs$core$IFn$_invoke$arity$variadic = G__28515__delegate;
return G__28515;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
(fexpr__28508_28514.cljs$core$IFn$_invoke$arity$0 ? fexpr__28508_28514.cljs$core$IFn$_invoke$arity$0() : fexpr__28508_28514.call(null));
}

var fexpr__28509 = (function (){var format_in__27462__auto__ = "~{~w~^ ~_~}";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28518__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28518 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28519__i = 0, G__28519__a = new Array(arguments.length -  0);
while (G__28519__i < G__28519__a.length) {G__28519__a[G__28519__i] = arguments[G__28519__i + 0]; ++G__28519__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28519__a,0,null);
} 
return G__28518__delegate.call(this,args__27464__auto__);};
G__28518.cljs$lang$maxFixedArity = 0;
G__28518.cljs$lang$applyTo = (function (arglist__28520){
var args__27464__auto__ = cljs.core.seq(arglist__28520);
return G__28518__delegate(args__27464__auto__);
});
G__28518.cljs$core$IFn$_invoke$arity$variadic = G__28518__delegate;
return G__28518;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
return (fexpr__28509.cljs$core$IFn$_invoke$arity$1 ? fexpr__28509.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__28509.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__28521 = (function (){var format_in__27462__auto__ = " ~_~{~w~^ ~_~}";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28522__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28522 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28523__i = 0, G__28523__a = new Array(arguments.length -  0);
while (G__28523__i < G__28523__a.length) {G__28523__a[G__28523__i] = arguments[G__28523__i + 0]; ++G__28523__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28523__a,0,null);
} 
return G__28522__delegate.call(this,args__27464__auto__);};
G__28522.cljs$lang$maxFixedArity = 0;
G__28522.cljs$lang$applyTo = (function (arglist__28524){
var args__27464__auto__ = cljs.core.seq(arglist__28524);
return G__28522__delegate(args__27464__auto__);
});
G__28522.cljs$core$IFn$_invoke$arity$variadic = G__28522__delegate;
return G__28522;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
return (fexpr__28521.cljs$core$IFn$_invoke$arity$1 ? fexpr__28521.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__28521.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__28525 = alis;
var seq__28526 = cljs.core.seq(vec__28525);
var first__28527 = cljs.core.first(seq__28526);
var seq__28526__$1 = cljs.core.next(seq__28526);
var defn_sym = first__28527;
var first__28527__$1 = cljs.core.first(seq__28526__$1);
var seq__28526__$2 = cljs.core.next(seq__28526__$1);
var defn_name = first__28527__$1;
var stuff = seq__28526__$2;
var vec__28528 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28528,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28528,(1),null);
var vec__28531 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28534_28539 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28535_28540 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__28536_28541 = (function (){var format_in__27462__auto__ = "~w ~1I~@_~w";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28534_28539,_STAR_current_length_STAR_28535_28540,vec__28525,seq__28526,first__28527,seq__28526__$1,defn_sym,first__28527__$1,seq__28526__$2,defn_name,stuff,vec__28528,doc_str,stuff__$1,vec__28531,attr_map,stuff__$2){
return (function() { 
var G__28542__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28542 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28543__i = 0, G__28543__a = new Array(arguments.length -  0);
while (G__28543__i < G__28543__a.length) {G__28543__a[G__28543__i] = arguments[G__28543__i + 0]; ++G__28543__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28543__a,0,null);
} 
return G__28542__delegate.call(this,args__27464__auto__);};
G__28542.cljs$lang$maxFixedArity = 0;
G__28542.cljs$lang$applyTo = (function (arglist__28544){
var args__27464__auto__ = cljs.core.seq(arglist__28544);
return G__28542__delegate(args__27464__auto__);
});
G__28542.cljs$core$IFn$_invoke$arity$variadic = G__28542__delegate;
return G__28542;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28534_28539,_STAR_current_length_STAR_28535_28540,vec__28525,seq__28526,first__28527,seq__28526__$1,defn_sym,first__28527__$1,seq__28526__$2,defn_name,stuff,vec__28528,doc_str,stuff__$1,vec__28531,attr_map,stuff__$2))
})();
(fexpr__28536_28541.cljs$core$IFn$_invoke$arity$2 ? fexpr__28536_28541.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__28536_28541.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__28537_28545 = (function (){var format_in__27462__auto__ = " ~_~w";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28534_28539,_STAR_current_length_STAR_28535_28540,vec__28525,seq__28526,first__28527,seq__28526__$1,defn_sym,first__28527__$1,seq__28526__$2,defn_name,stuff,vec__28528,doc_str,stuff__$1,vec__28531,attr_map,stuff__$2){
return (function() { 
var G__28546__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28546 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28547__i = 0, G__28547__a = new Array(arguments.length -  0);
while (G__28547__i < G__28547__a.length) {G__28547__a[G__28547__i] = arguments[G__28547__i + 0]; ++G__28547__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28547__a,0,null);
} 
return G__28546__delegate.call(this,args__27464__auto__);};
G__28546.cljs$lang$maxFixedArity = 0;
G__28546.cljs$lang$applyTo = (function (arglist__28548){
var args__27464__auto__ = cljs.core.seq(arglist__28548);
return G__28546__delegate(args__27464__auto__);
});
G__28546.cljs$core$IFn$_invoke$arity$variadic = G__28546__delegate;
return G__28546;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28534_28539,_STAR_current_length_STAR_28535_28540,vec__28525,seq__28526,first__28527,seq__28526__$1,defn_sym,first__28527__$1,seq__28526__$2,defn_name,stuff,vec__28528,doc_str,stuff__$1,vec__28531,attr_map,stuff__$2))
})();
(fexpr__28537_28545.cljs$core$IFn$_invoke$arity$1 ? fexpr__28537_28545.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__28537_28545.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__28538_28549 = (function (){var format_in__27462__auto__ = " ~_~w";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28534_28539,_STAR_current_length_STAR_28535_28540,vec__28525,seq__28526,first__28527,seq__28526__$1,defn_sym,first__28527__$1,seq__28526__$2,defn_name,stuff,vec__28528,doc_str,stuff__$1,vec__28531,attr_map,stuff__$2){
return (function() { 
var G__28550__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28550 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28551__i = 0, G__28551__a = new Array(arguments.length -  0);
while (G__28551__i < G__28551__a.length) {G__28551__a[G__28551__i] = arguments[G__28551__i + 0]; ++G__28551__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28551__a,0,null);
} 
return G__28550__delegate.call(this,args__27464__auto__);};
G__28550.cljs$lang$maxFixedArity = 0;
G__28550.cljs$lang$applyTo = (function (arglist__28552){
var args__27464__auto__ = cljs.core.seq(arglist__28552);
return G__28550__delegate(args__27464__auto__);
});
G__28550.cljs$core$IFn$_invoke$arity$variadic = G__28550__delegate;
return G__28550;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28534_28539,_STAR_current_length_STAR_28535_28540,vec__28525,seq__28526,first__28527,seq__28526__$1,defn_sym,first__28527__$1,seq__28526__$2,defn_name,stuff,vec__28528,doc_str,stuff__$1,vec__28531,attr_map,stuff__$2))
})();
(fexpr__28538_28549.cljs$core$IFn$_invoke$arity$1 ? fexpr__28538_28549.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__28538_28549.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__8388__auto__ = doc_str;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__8388__auto__ = doc_str;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28535_28540;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28534_28539;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28553_28558 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28554_28559 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28555_28560 = (0);
var binding_28561 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28555_28560 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_28561)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28556_28562 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28557_28563 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_28561));

if(cljs.core.next(binding_28561)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_28561));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28557_28563;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28556_28562;
}}


if(cljs.core.next(cljs.core.rest(binding_28561))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28564 = (length_count28555_28560 + (1));
var G__28565 = cljs.core.next(cljs.core.rest(binding_28561));
length_count28555_28560 = G__28564;
binding_28561 = G__28565;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28554_28559;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28553_28558;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28566_28571 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28567_28572 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__28568_28573 = (function (){var format_in__27462__auto__ = "~w ~1I~@_";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28566_28571,_STAR_current_length_STAR_28567_28572,base_sym){
return (function() { 
var G__28574__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28574 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28575__i = 0, G__28575__a = new Array(arguments.length -  0);
while (G__28575__i < G__28575__a.length) {G__28575__a[G__28575__i] = arguments[G__28575__i + 0]; ++G__28575__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28575__a,0,null);
} 
return G__28574__delegate.call(this,args__27464__auto__);};
G__28574.cljs$lang$maxFixedArity = 0;
G__28574.cljs$lang$applyTo = (function (arglist__28576){
var args__27464__auto__ = cljs.core.seq(arglist__28576);
return G__28574__delegate(args__27464__auto__);
});
G__28574.cljs$core$IFn$_invoke$arity$variadic = G__28574__delegate;
return G__28574;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28566_28571,_STAR_current_length_STAR_28567_28572,base_sym))
})();
(fexpr__28568_28573.cljs$core$IFn$_invoke$arity$1 ? fexpr__28568_28573.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__28568_28573.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__28570_28577 = cljs.core.next(cljs.core.rest(alis));
var fexpr__28569_28578 = (function (){var format_in__27462__auto__ = " ~_~{~w~^ ~_~}";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,G__28570_28577,_STAR_current_level_STAR_28566_28571,_STAR_current_length_STAR_28567_28572,base_sym){
return (function() { 
var G__28579__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28579 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28580__i = 0, G__28580__a = new Array(arguments.length -  0);
while (G__28580__i < G__28580__a.length) {G__28580__a[G__28580__i] = arguments[G__28580__i + 0]; ++G__28580__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28580__a,0,null);
} 
return G__28579__delegate.call(this,args__27464__auto__);};
G__28579.cljs$lang$maxFixedArity = 0;
G__28579.cljs$lang$applyTo = (function (arglist__28581){
var args__27464__auto__ = cljs.core.seq(arglist__28581);
return G__28579__delegate(args__27464__auto__);
});
G__28579.cljs$core$IFn$_invoke$arity$variadic = G__28579__delegate;
return G__28579;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,G__28570_28577,_STAR_current_level_STAR_28566_28571,_STAR_current_length_STAR_28567_28572,base_sym))
})();
(fexpr__28569_28578.cljs$core$IFn$_invoke$arity$1 ? fexpr__28569_28578.cljs$core$IFn$_invoke$arity$1(G__28570_28577) : fexpr__28569_28578.call(null,G__28570_28577));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28567_28572;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28566_28571;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__27462__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__){
return (function() { 
var G__28582__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28582 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28583__i = 0, G__28583__a = new Array(arguments.length -  0);
while (G__28583__i < G__28583__a.length) {G__28583__a[G__28583__i] = arguments[G__28583__i + 0]; ++G__28583__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28583__a,0,null);
} 
return G__28582__delegate.call(this,args__27464__auto__);};
G__28582.cljs$lang$maxFixedArity = 0;
G__28582.cljs$lang$applyTo = (function (arglist__28584){
var args__27464__auto__ = cljs.core.seq(arglist__28584);
return G__28582__delegate(args__27464__auto__);
});
G__28582.cljs$core$IFn$_invoke$arity$variadic = G__28582__delegate;
return G__28582;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28585_28590 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28586_28591 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count28587_28592 = (0);
var alis_28593__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28587_28592 < cljs.core._STAR_print_length_STAR_))){
if(alis_28593__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28588_28594 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28589_28595 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_28593__$1));

if(cljs.core.next(alis_28593__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_28593__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28589_28595;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28588_28594;
}}


if(cljs.core.next(cljs.core.rest(alis_28593__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28596 = (length_count28587_28592 + (1));
var G__28597 = cljs.core.next(cljs.core.rest(alis_28593__$1));
length_count28587_28592 = G__28596;
alis_28593__$1 = G__28597;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28586_28591;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28585_28590;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28598_28603 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28599_28604 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27462__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28598_28603,_STAR_current_length_STAR_28599_28604){
return (function() { 
var G__28605__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28605 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28606__i = 0, G__28606__a = new Array(arguments.length -  0);
while (G__28606__i < G__28606__a.length) {G__28606__a[G__28606__i] = arguments[G__28606__i + 0]; ++G__28606__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28606__a,0,null);
} 
return G__28605__delegate.call(this,args__27464__auto__);};
G__28605.cljs$lang$maxFixedArity = 0;
G__28605.cljs$lang$applyTo = (function (arglist__28607){
var args__27464__auto__ = cljs.core.seq(arglist__28607);
return G__28605__delegate(args__27464__auto__);
});
G__28605.cljs$core$IFn$_invoke$arity$variadic = G__28605__delegate;
return G__28605;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_current_level_STAR_28598_28603,_STAR_current_length_STAR_28599_28604))
})(),alis);

var length_count28600_28608 = (0);
var alis_28609__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28600_28608 < cljs.core._STAR_print_length_STAR_))){
if(alis_28609__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28601_28610 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28602_28611 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_28609__$1));

if(cljs.core.next(alis_28609__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_28609__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28602_28611;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28601_28610;
}}


if(cljs.core.next(cljs.core.rest(alis_28609__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28612 = (length_count28600_28608 + (1));
var G__28613 = cljs.core.next(cljs.core.rest(alis_28609__$1));
length_count28600_28608 = G__28612;
alis_28609__$1 = G__28613;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28599_28604;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28598_28603;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_28616 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_28616,args,nlis){
return (function (p1__28614_SHARP_,p2__28615_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28614_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28615_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_28616,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__28617 = (function (){var format_in__27462__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__27463__auto__ = ((typeof format_in__27462__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27462__auto__) : cljs.pprint.cached_compile.call(null,format_in__27462__auto__)):format_in__27462__auto__);
return ((function (format_in__27462__auto__,cf__27463__auto__,_STAR_symbol_map_STAR_28616,args,nlis){
return (function() { 
var G__28618__delegate = function (args__27464__auto__){
var navigator__27465__auto__ = cljs.pprint.init_navigator(args__27464__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27463__auto__,navigator__27465__auto__);
};
var G__28618 = function (var_args){
var args__27464__auto__ = null;
if (arguments.length > 0) {
var G__28619__i = 0, G__28619__a = new Array(arguments.length -  0);
while (G__28619__i < G__28619__a.length) {G__28619__a[G__28619__i] = arguments[G__28619__i + 0]; ++G__28619__i;}
  args__27464__auto__ = new cljs.core.IndexedSeq(G__28619__a,0,null);
} 
return G__28618__delegate.call(this,args__27464__auto__);};
G__28618.cljs$lang$maxFixedArity = 0;
G__28618.cljs$lang$applyTo = (function (arglist__28620){
var args__27464__auto__ = cljs.core.seq(arglist__28620);
return G__28618__delegate(args__27464__auto__);
});
G__28618.cljs$core$IFn$_invoke$arity$variadic = G__28618__delegate;
return G__28618;
})()
;
;})(format_in__27462__auto__,cf__27463__auto__,_STAR_symbol_map_STAR_28616,args,nlis))
})();
return (fexpr__28617.cljs$core$IFn$_invoke$arity$1 ? fexpr__28617.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__28617.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_28616;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28621_28624 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28622_28625 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count28623_28626 = (0);
var alis_28627__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28623_28626 < cljs.core._STAR_print_length_STAR_))){
if(alis_28627__$1){
cljs.pprint.write_out(cljs.core.first(alis_28627__$1));

if(cljs.core.next(alis_28627__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28628 = (length_count28623_28626 + (1));
var G__28629 = cljs.core.next(alis_28627__$1);
length_count28623_28626 = G__28628;
alis_28627__$1 = G__28629;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28622_28625;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28621_28624;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9270__auto__ = (function cljs$pprint$two_forms_$_iter__28630(s__28631){
return (new cljs.core.LazySeq(null,(function (){
var s__28631__$1 = s__28631;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28631__$1);
if(temp__5457__auto__){
var s__28631__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28631__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28631__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28633 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28632 = (0);
while(true){
if((i__28632 < size__9269__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28632);
cljs.core.chunk_append(b__28633,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__28634 = (i__28632 + (1));
i__28632 = G__28634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28633),cljs$pprint$two_forms_$_iter__28630(cljs.core.chunk_rest(s__28631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28633),null);
}
} else {
var x = cljs.core.first(s__28631__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__28630(cljs.core.rest(s__28631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__28635_SHARP_){
var vec__28636 = p1__28635_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28636,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28636,(1),null);
if(cljs.core.not((function (){var or__8388__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__28635_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5455__auto__ = (function (){var G__28639 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__28639) : cljs.pprint._STAR_code_table_STAR_.call(null,G__28639));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var special_form = temp__5455__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5455__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5455__auto__)){
var arg_num = temp__5455__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__9443__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9444__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9445__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9446__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__8740__auto__ = (0);
var y__8741__auto__ = (width - cljs.core.count(s));
return ((x__8740__auto__ > y__8741__auto__) ? x__8740__auto__ : y__8741__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__28644 = arguments.length;
switch (G__28644) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_28645 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_28645){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_28645){
return (function (p1__28640_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__28640_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_28645))
,rows));
});})(_STAR_print_newline_STAR_28645))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_28645){
return (function (p1__28641_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__28641_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_28645))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_28645){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__9270__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_28645){
return (function cljs$pprint$iter__28646(s__28647){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_28645){
return (function (){
var s__28647__$1 = s__28647;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28647__$1);
if(temp__5457__auto__){
var s__28647__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28647__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28647__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28649 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28648 = (0);
while(true){
if((i__28648 < size__9269__auto__)){
var vec__28650 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28648);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28650,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28650,(1),null);
cljs.core.chunk_append(b__28649,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__28661 = (i__28648 + (1));
i__28648 = G__28661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28649),cljs$pprint$iter__28646(cljs.core.chunk_rest(s__28647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28649),null);
}
} else {
var vec__28653 = cljs.core.first(s__28647__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__28646(cljs.core.rest(s__28647__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_28645))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_28645))
;
return iter__9270__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__9270__auto__,widths,spacers,_STAR_print_newline_STAR_28645){
return (function (p1__28642_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__28642_SHARP_);
});})(iter__9270__auto__,widths,spacers,_STAR_print_newline_STAR_28645))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_28645))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__28656 = cljs.core.seq(rows);
var chunk__28657 = null;
var count__28658 = (0);
var i__28659 = (0);
while(true){
if((i__28659 < count__28658)){
var row = chunk__28657.cljs$core$IIndexed$_nth$arity$2(null,i__28659);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__28662 = seq__28656;
var G__28663 = chunk__28657;
var G__28664 = count__28658;
var G__28665 = (i__28659 + (1));
seq__28656 = G__28662;
chunk__28657 = G__28663;
count__28658 = G__28664;
i__28659 = G__28665;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28656);
if(temp__5457__auto__){
var seq__28656__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28656__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__28656__$1);
var G__28666 = cljs.core.chunk_rest(seq__28656__$1);
var G__28667 = c__9319__auto__;
var G__28668 = cljs.core.count(c__9319__auto__);
var G__28669 = (0);
seq__28656 = G__28666;
chunk__28657 = G__28667;
count__28658 = G__28668;
i__28659 = G__28669;
continue;
} else {
var row = cljs.core.first(seq__28656__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__28670 = cljs.core.next(seq__28656__$1);
var G__28671 = null;
var G__28672 = (0);
var G__28673 = (0);
seq__28656 = G__28670;
chunk__28657 = G__28671;
count__28658 = G__28672;
i__28659 = G__28673;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28645;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

