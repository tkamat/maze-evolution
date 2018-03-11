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
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq27487){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27487));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27492 = arguments.length;
var i__9668__auto___27493 = (0);
while(true){
if((i__9668__auto___27493 < len__9667__auto___27492)){
args__9674__auto__.push((arguments[i__9668__auto___27493]));

var G__27494 = (i__9668__auto___27493 + (1));
i__9668__auto___27493 = G__27494;
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

cljs.pprint.println.cljs$lang$applyTo = (function (seq27491){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27491));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__27495 = cljs.core._EQ_;
var expr__27496 = c;
if(cljs.core.truth_((function (){var G__27498 = "\b";
var G__27499 = expr__27496;
return (pred__27495.cljs$core$IFn$_invoke$arity$2 ? pred__27495.cljs$core$IFn$_invoke$arity$2(G__27498,G__27499) : pred__27495.call(null,G__27498,G__27499));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__27500 = "\t";
var G__27501 = expr__27496;
return (pred__27495.cljs$core$IFn$_invoke$arity$2 ? pred__27495.cljs$core$IFn$_invoke$arity$2(G__27500,G__27501) : pred__27495.call(null,G__27500,G__27501));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__27502 = "\n";
var G__27503 = expr__27496;
return (pred__27495.cljs$core$IFn$_invoke$arity$2 ? pred__27495.cljs$core$IFn$_invoke$arity$2(G__27502,G__27503) : pred__27495.call(null,G__27502,G__27503));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__27504 = "\f";
var G__27505 = expr__27496;
return (pred__27495.cljs$core$IFn$_invoke$arity$2 ? pred__27495.cljs$core$IFn$_invoke$arity$2(G__27504,G__27505) : pred__27495.call(null,G__27504,G__27505));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__27506 = "\r";
var G__27507 = expr__27496;
return (pred__27495.cljs$core$IFn$_invoke$arity$2 ? pred__27495.cljs$core$IFn$_invoke$arity$2(G__27506,G__27507) : pred__27495.call(null,G__27506,G__27507));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__27508 = "\"";
var G__27509 = expr__27496;
return (pred__27495.cljs$core$IFn$_invoke$arity$2 ? pred__27495.cljs$core$IFn$_invoke$arity$2(G__27508,G__27509) : pred__27495.call(null,G__27508,G__27509));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__27510 = "\\";
var G__27511 = expr__27496;
return (pred__27495.cljs$core$IFn$_invoke$arity$2 ? pred__27495.cljs$core$IFn$_invoke$arity$2(G__27510,G__27511) : pred__27495.call(null,G__27510,G__27511));
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
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__9675__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq27512){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27512));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27517 = arguments.length;
var i__9668__auto___27518 = (0);
while(true){
if((i__9668__auto___27518 < len__9667__auto___27517)){
args__9674__auto__.push((arguments[i__9668__auto___27518]));

var G__27519 = (i__9668__auto___27518 + (1));
i__9668__auto___27518 = G__27519;
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

cljs.pprint.prn.cljs$lang$applyTo = (function (seq27516){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27516));
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
var vec__27520 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27520,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27520,(1),null);
var G__27523 = new_context;
var G__27524 = remainder;
var G__27525 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27523;
lis__$1 = G__27524;
acc = G__27525;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27526 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27526,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27526,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__27529 = new_context;
var G__27530 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27529;
acc = G__27530;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27531 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__27534 = new_context;
var G__27535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27534;
acc = G__27535;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$unzip_map_$_iter__27536(s__27537){
return (new cljs.core.LazySeq(null,(function (){
var s__27537__$1 = s__27537;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27537__$1);
if(temp__5457__auto__){
var s__27537__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27537__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27537__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27539 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27538 = (0);
while(true){
if((i__27538 < size__9269__auto__)){
var vec__27540 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27538);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27540,(0),null);
var vec__27543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27540,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27543,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27543,(1),null);
cljs.core.chunk_append(b__27539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__27568 = (i__27538 + (1));
i__27538 = G__27568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27539),cljs$pprint$unzip_map_$_iter__27536(cljs.core.chunk_rest(s__27537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27539),null);
}
} else {
var vec__27546 = cljs.core.first(s__27537__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27546,(0),null);
var vec__27549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27546,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27549,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27549,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__27536(cljs.core.rest(s__27537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$unzip_map_$_iter__27552(s__27553){
return (new cljs.core.LazySeq(null,(function (){
var s__27553__$1 = s__27553;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27553__$1);
if(temp__5457__auto__){
var s__27553__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27553__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27553__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27555 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27554 = (0);
while(true){
if((i__27554 < size__9269__auto__)){
var vec__27556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27554);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27556,(0),null);
var vec__27559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27556,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(1),null);
cljs.core.chunk_append(b__27555,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__27569 = (i__27554 + (1));
i__27554 = G__27569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27555),cljs$pprint$unzip_map_$_iter__27552(cljs.core.chunk_rest(s__27553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27555),null);
}
} else {
var vec__27562 = cljs.core.first(s__27553__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27562,(0),null);
var vec__27565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27562,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27565,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27565,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__27552(cljs.core.rest(s__27553__$2)));
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

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$tuple_map_$_iter__27570(s__27571){
return (new cljs.core.LazySeq(null,(function (){
var s__27571__$1 = s__27571;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27571__$1);
if(temp__5457__auto__){
var s__27571__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27571__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27571__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27573 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27572 = (0);
while(true){
if((i__27572 < size__9269__auto__)){
var vec__27574 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27572);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27574,(1),null);
cljs.core.chunk_append(b__27573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__27580 = (i__27572 + (1));
i__27572 = G__27580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27573),cljs$pprint$tuple_map_$_iter__27570(cljs.core.chunk_rest(s__27571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27573),null);
}
} else {
var vec__27577 = cljs.core.first(s__27571__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__27570(cljs.core.rest(s__27571__$2)));
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
var G__27581 = (n - (1));
n = G__27581;
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
var G__27582 = (n + (1));
n = G__27582;
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
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__27584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__27584) : test.call(null,G__27584));
})()))){
return pos;
} else {
var G__27585 = (pos + (1));
pos = G__27585;
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
var G__27586 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__27586) : sym.call(null,G__27586));
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
var G__27589 = arguments.length;
switch (G__27589) {
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
if(typeof cljs.pprint.t_cljs$pprint27590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27590 = (function (writer,max_columns,fields,meta27591){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta27591 = meta27591;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_27592,meta27591__$1){
var self__ = this;
var _27592__$1 = this;
return (new cljs.pprint.t_cljs$pprint27590(self__.writer,self__.max_columns,self__.fields,meta27591__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint27590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_27592){
var self__ = this;
var _27592__$1 = this;
return self__.meta27591;
});})(fields))
;

cljs.pprint.t_cljs$pprint27590.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint27590.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint27590.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27593 = cljs.core._EQ_;
var expr__27594 = cljs.core.type(x);
if(cljs.core.truth_((pred__27593.cljs$core$IFn$_invoke$arity$2 ? pred__27593.cljs$core$IFn$_invoke$arity$2(String,expr__27594) : pred__27593.call(null,String,expr__27594)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__27593,expr__27594,this$__$1,fields){
return (function (p1__27587_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27587_SHARP_,"\n");
});})(s,nl,pred__27593,expr__27594,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__27593.cljs$core$IFn$_invoke$arity$2 ? pred__27593.cljs$core$IFn$_invoke$arity$2(Number,expr__27594) : pred__27593.call(null,Number,expr__27594)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27594)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint27590.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta27591], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint27590.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27590.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27590";

cljs.pprint.t_cljs$pprint27590.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint27590");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint27590 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint27590(writer__$1,max_columns__$1,fields__$1,meta27591){
return (new cljs.pprint.t_cljs$pprint27590(writer__$1,max_columns__$1,fields__$1,meta27591));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint27590(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27598,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27602 = k27598;
var G__27602__$1 = (((G__27602 instanceof cljs.core.Keyword))?G__27602.fqn:null);
switch (G__27602__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27598,else__9079__auto__);

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

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27597){
var self__ = this;
var G__27597__$1 = this;
return (new cljs.core.RecordIter((0),G__27597__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27603 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27603(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27599,other27600){
var self__ = this;
var this27599__$1 = this;
return (!((other27600 == null))) && ((this27599__$1.constructor === other27600.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.parent,other27600.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.section,other27600.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.start_col,other27600.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.indent,other27600.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.done_nl,other27600.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.intra_block_nl,other27600.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.prefix,other27600.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.per_line_prefix,other27600.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.suffix,other27600.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.logical_block_callback,other27600.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27599__$1.__extmap,other27600.__extmap));
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

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27597){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27604 = cljs.core.keyword_identical_QMARK_;
var expr__27605 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27607 = cljs.core.cst$kw$parent;
var G__27608 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27607,G__27608) : pred__27604.call(null,G__27607,G__27608));
})())){
return (new cljs.pprint.logical_block(G__27597,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27609 = cljs.core.cst$kw$section;
var G__27610 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27609,G__27610) : pred__27604.call(null,G__27609,G__27610));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__27597,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27611 = cljs.core.cst$kw$start_DASH_col;
var G__27612 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27611,G__27612) : pred__27604.call(null,G__27611,G__27612));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__27597,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27613 = cljs.core.cst$kw$indent;
var G__27614 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27613,G__27614) : pred__27604.call(null,G__27613,G__27614));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__27597,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27615 = cljs.core.cst$kw$done_DASH_nl;
var G__27616 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27615,G__27616) : pred__27604.call(null,G__27615,G__27616));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__27597,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27617 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__27618 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27617,G__27618) : pred__27604.call(null,G__27617,G__27618));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__27597,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27619 = cljs.core.cst$kw$prefix;
var G__27620 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27619,G__27620) : pred__27604.call(null,G__27619,G__27620));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__27597,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27621 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__27622 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27621,G__27622) : pred__27604.call(null,G__27621,G__27622));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__27597,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27623 = cljs.core.cst$kw$suffix;
var G__27624 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27623,G__27624) : pred__27604.call(null,G__27623,G__27624));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__27597,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27625 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__27626 = expr__27605;
return (pred__27604.cljs$core$IFn$_invoke$arity$2 ? pred__27604.cljs$core$IFn$_invoke$arity$2(G__27625,G__27626) : pred__27604.call(null,G__27625,G__27626));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__27597,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27597),null));
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

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27597){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__27597,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__27601){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__27601),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__27601),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27601,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
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
var G__27628 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__27628;
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

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27630,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27634 = k27630;
var G__27634__$1 = (((G__27634 instanceof cljs.core.Keyword))?G__27634.fqn:null);
switch (G__27634__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27630,else__9079__auto__);

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

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27629){
var self__ = this;
var G__27629__$1 = this;
return (new cljs.core.RecordIter((0),G__27629__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27635 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27635(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27631,other27632){
var self__ = this;
var this27631__$1 = this;
return (!((other27632 == null))) && ((this27631__$1.constructor === other27632.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27631__$1.type_tag,other27632.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27631__$1.data,other27632.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27631__$1.trailing_white_space,other27632.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27631__$1.start_pos,other27632.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27631__$1.end_pos,other27632.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27631__$1.__extmap,other27632.__extmap));
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

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27629){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27636 = cljs.core.keyword_identical_QMARK_;
var expr__27637 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27639 = cljs.core.cst$kw$type_DASH_tag;
var G__27640 = expr__27637;
return (pred__27636.cljs$core$IFn$_invoke$arity$2 ? pred__27636.cljs$core$IFn$_invoke$arity$2(G__27639,G__27640) : pred__27636.call(null,G__27639,G__27640));
})())){
return (new cljs.pprint.buffer_blob(G__27629,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27641 = cljs.core.cst$kw$data;
var G__27642 = expr__27637;
return (pred__27636.cljs$core$IFn$_invoke$arity$2 ? pred__27636.cljs$core$IFn$_invoke$arity$2(G__27641,G__27642) : pred__27636.call(null,G__27641,G__27642));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__27629,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27643 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__27644 = expr__27637;
return (pred__27636.cljs$core$IFn$_invoke$arity$2 ? pred__27636.cljs$core$IFn$_invoke$arity$2(G__27643,G__27644) : pred__27636.call(null,G__27643,G__27644));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__27629,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27645 = cljs.core.cst$kw$start_DASH_pos;
var G__27646 = expr__27637;
return (pred__27636.cljs$core$IFn$_invoke$arity$2 ? pred__27636.cljs$core$IFn$_invoke$arity$2(G__27645,G__27646) : pred__27636.call(null,G__27645,G__27646));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__27629,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27647 = cljs.core.cst$kw$end_DASH_pos;
var G__27648 = expr__27637;
return (pred__27636.cljs$core$IFn$_invoke$arity$2 ? pred__27636.cljs$core$IFn$_invoke$arity$2(G__27647,G__27648) : pred__27636.call(null,G__27647,G__27648));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__27629,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27629),null));
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

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27629){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__27629,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__27633){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27633),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__27633),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__27633),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27633),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27633),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27633,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__27418__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27418__auto__),cljs.core.cst$kw$buffer_DASH_blob);
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

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27651,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27655 = k27651;
var G__27655__$1 = (((G__27655 instanceof cljs.core.Keyword))?G__27655.fqn:null);
switch (G__27655__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27651,else__9079__auto__);

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

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27650){
var self__ = this;
var G__27650__$1 = this;
return (new cljs.core.RecordIter((0),G__27650__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27656 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27656(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27652,other27653){
var self__ = this;
var this27652__$1 = this;
return (!((other27653 == null))) && ((this27652__$1.constructor === other27653.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27652__$1.type_tag,other27653.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27652__$1.type,other27653.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27652__$1.logical_block,other27653.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27652__$1.start_pos,other27653.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27652__$1.end_pos,other27653.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27652__$1.__extmap,other27653.__extmap));
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

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27650){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27657 = cljs.core.keyword_identical_QMARK_;
var expr__27658 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27660 = cljs.core.cst$kw$type_DASH_tag;
var G__27661 = expr__27658;
return (pred__27657.cljs$core$IFn$_invoke$arity$2 ? pred__27657.cljs$core$IFn$_invoke$arity$2(G__27660,G__27661) : pred__27657.call(null,G__27660,G__27661));
})())){
return (new cljs.pprint.nl_t(G__27650,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27662 = cljs.core.cst$kw$type;
var G__27663 = expr__27658;
return (pred__27657.cljs$core$IFn$_invoke$arity$2 ? pred__27657.cljs$core$IFn$_invoke$arity$2(G__27662,G__27663) : pred__27657.call(null,G__27662,G__27663));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__27650,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27664 = cljs.core.cst$kw$logical_DASH_block;
var G__27665 = expr__27658;
return (pred__27657.cljs$core$IFn$_invoke$arity$2 ? pred__27657.cljs$core$IFn$_invoke$arity$2(G__27664,G__27665) : pred__27657.call(null,G__27664,G__27665));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__27650,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27666 = cljs.core.cst$kw$start_DASH_pos;
var G__27667 = expr__27658;
return (pred__27657.cljs$core$IFn$_invoke$arity$2 ? pred__27657.cljs$core$IFn$_invoke$arity$2(G__27666,G__27667) : pred__27657.call(null,G__27666,G__27667));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__27650,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27668 = cljs.core.cst$kw$end_DASH_pos;
var G__27669 = expr__27658;
return (pred__27657.cljs$core$IFn$_invoke$arity$2 ? pred__27657.cljs$core$IFn$_invoke$arity$2(G__27668,G__27669) : pred__27657.call(null,G__27668,G__27669));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__27650,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27650),null));
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

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27650){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__27650,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__27654){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27654),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__27654),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27654),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27654),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27654),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27654,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__27418__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27418__auto__),cljs.core.cst$kw$nl_DASH_t);
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

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27672,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27676 = k27672;
var G__27676__$1 = (((G__27676 instanceof cljs.core.Keyword))?G__27676.fqn:null);
switch (G__27676__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27672,else__9079__auto__);

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

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27671){
var self__ = this;
var G__27671__$1 = this;
return (new cljs.core.RecordIter((0),G__27671__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27677 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27677(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27673,other27674){
var self__ = this;
var this27673__$1 = this;
return (!((other27674 == null))) && ((this27673__$1.constructor === other27674.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27673__$1.type_tag,other27674.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27673__$1.logical_block,other27674.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27673__$1.start_pos,other27674.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27673__$1.end_pos,other27674.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27673__$1.__extmap,other27674.__extmap));
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

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27671){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27678 = cljs.core.keyword_identical_QMARK_;
var expr__27679 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27681 = cljs.core.cst$kw$type_DASH_tag;
var G__27682 = expr__27679;
return (pred__27678.cljs$core$IFn$_invoke$arity$2 ? pred__27678.cljs$core$IFn$_invoke$arity$2(G__27681,G__27682) : pred__27678.call(null,G__27681,G__27682));
})())){
return (new cljs.pprint.start_block_t(G__27671,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27683 = cljs.core.cst$kw$logical_DASH_block;
var G__27684 = expr__27679;
return (pred__27678.cljs$core$IFn$_invoke$arity$2 ? pred__27678.cljs$core$IFn$_invoke$arity$2(G__27683,G__27684) : pred__27678.call(null,G__27683,G__27684));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__27671,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27685 = cljs.core.cst$kw$start_DASH_pos;
var G__27686 = expr__27679;
return (pred__27678.cljs$core$IFn$_invoke$arity$2 ? pred__27678.cljs$core$IFn$_invoke$arity$2(G__27685,G__27686) : pred__27678.call(null,G__27685,G__27686));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__27671,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27687 = cljs.core.cst$kw$end_DASH_pos;
var G__27688 = expr__27679;
return (pred__27678.cljs$core$IFn$_invoke$arity$2 ? pred__27678.cljs$core$IFn$_invoke$arity$2(G__27687,G__27688) : pred__27678.call(null,G__27687,G__27688));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27671,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27671),null));
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

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27671){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27671,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__27675){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27675),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27675),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27675),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27675),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27675,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__27418__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27418__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
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

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27691,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27695 = k27691;
var G__27695__$1 = (((G__27695 instanceof cljs.core.Keyword))?G__27695.fqn:null);
switch (G__27695__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27691,else__9079__auto__);

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

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27690){
var self__ = this;
var G__27690__$1 = this;
return (new cljs.core.RecordIter((0),G__27690__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27696 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27696(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27692,other27693){
var self__ = this;
var this27692__$1 = this;
return (!((other27693 == null))) && ((this27692__$1.constructor === other27693.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27692__$1.type_tag,other27693.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27692__$1.logical_block,other27693.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27692__$1.start_pos,other27693.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27692__$1.end_pos,other27693.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27692__$1.__extmap,other27693.__extmap));
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

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27690){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27697 = cljs.core.keyword_identical_QMARK_;
var expr__27698 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27700 = cljs.core.cst$kw$type_DASH_tag;
var G__27701 = expr__27698;
return (pred__27697.cljs$core$IFn$_invoke$arity$2 ? pred__27697.cljs$core$IFn$_invoke$arity$2(G__27700,G__27701) : pred__27697.call(null,G__27700,G__27701));
})())){
return (new cljs.pprint.end_block_t(G__27690,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27702 = cljs.core.cst$kw$logical_DASH_block;
var G__27703 = expr__27698;
return (pred__27697.cljs$core$IFn$_invoke$arity$2 ? pred__27697.cljs$core$IFn$_invoke$arity$2(G__27702,G__27703) : pred__27697.call(null,G__27702,G__27703));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__27690,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27704 = cljs.core.cst$kw$start_DASH_pos;
var G__27705 = expr__27698;
return (pred__27697.cljs$core$IFn$_invoke$arity$2 ? pred__27697.cljs$core$IFn$_invoke$arity$2(G__27704,G__27705) : pred__27697.call(null,G__27704,G__27705));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__27690,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27706 = cljs.core.cst$kw$end_DASH_pos;
var G__27707 = expr__27698;
return (pred__27697.cljs$core$IFn$_invoke$arity$2 ? pred__27697.cljs$core$IFn$_invoke$arity$2(G__27706,G__27707) : pred__27697.call(null,G__27706,G__27707));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27690,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27690),null));
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

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27690){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27690,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__27694){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27694),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27694),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27694),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27694),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27694,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__27418__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27418__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
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

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27710,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27714 = k27710;
var G__27714__$1 = (((G__27714 instanceof cljs.core.Keyword))?G__27714.fqn:null);
switch (G__27714__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27710,else__9079__auto__);

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

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27709){
var self__ = this;
var G__27709__$1 = this;
return (new cljs.core.RecordIter((0),G__27709__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27715 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27715(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27711,other27712){
var self__ = this;
var this27711__$1 = this;
return (!((other27712 == null))) && ((this27711__$1.constructor === other27712.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27711__$1.type_tag,other27712.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27711__$1.logical_block,other27712.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27711__$1.relative_to,other27712.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27711__$1.offset,other27712.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27711__$1.start_pos,other27712.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27711__$1.end_pos,other27712.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27711__$1.__extmap,other27712.__extmap));
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

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27709){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27716 = cljs.core.keyword_identical_QMARK_;
var expr__27717 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27719 = cljs.core.cst$kw$type_DASH_tag;
var G__27720 = expr__27717;
return (pred__27716.cljs$core$IFn$_invoke$arity$2 ? pred__27716.cljs$core$IFn$_invoke$arity$2(G__27719,G__27720) : pred__27716.call(null,G__27719,G__27720));
})())){
return (new cljs.pprint.indent_t(G__27709,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27721 = cljs.core.cst$kw$logical_DASH_block;
var G__27722 = expr__27717;
return (pred__27716.cljs$core$IFn$_invoke$arity$2 ? pred__27716.cljs$core$IFn$_invoke$arity$2(G__27721,G__27722) : pred__27716.call(null,G__27721,G__27722));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__27709,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27723 = cljs.core.cst$kw$relative_DASH_to;
var G__27724 = expr__27717;
return (pred__27716.cljs$core$IFn$_invoke$arity$2 ? pred__27716.cljs$core$IFn$_invoke$arity$2(G__27723,G__27724) : pred__27716.call(null,G__27723,G__27724));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__27709,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27725 = cljs.core.cst$kw$offset;
var G__27726 = expr__27717;
return (pred__27716.cljs$core$IFn$_invoke$arity$2 ? pred__27716.cljs$core$IFn$_invoke$arity$2(G__27725,G__27726) : pred__27716.call(null,G__27725,G__27726));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__27709,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27727 = cljs.core.cst$kw$start_DASH_pos;
var G__27728 = expr__27717;
return (pred__27716.cljs$core$IFn$_invoke$arity$2 ? pred__27716.cljs$core$IFn$_invoke$arity$2(G__27727,G__27728) : pred__27716.call(null,G__27727,G__27728));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__27709,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27729 = cljs.core.cst$kw$end_DASH_pos;
var G__27730 = expr__27717;
return (pred__27716.cljs$core$IFn$_invoke$arity$2 ? pred__27716.cljs$core$IFn$_invoke$arity$2(G__27729,G__27730) : pred__27716.call(null,G__27729,G__27730));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__27709,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27709),null));
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

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27709){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__27709,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__27713){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27713),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27713),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__27713),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__27713),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27713),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27713),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27713,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__27418__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27418__auto__),cljs.core.cst$kw$indent_DASH_t);
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
return (function (p1__27733_SHARP_,p2__27732_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__27732_SHARP_);
});})(method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__))
,cljs.core.cst$kw$default,hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___27735 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27735)){
var cb_27736 = temp__5457__auto___27735;
var G__27734_27737 = cljs.core.cst$kw$start;
(cb_27736.cljs$core$IFn$_invoke$arity$1 ? cb_27736.cljs$core$IFn$_invoke$arity$1(G__27734_27737) : cb_27736.call(null,G__27734_27737));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5457__auto___27738 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5457__auto___27738)){
var prefix_27739 = temp__5457__auto___27738;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_27739);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___27741 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27741)){
var cb_27742 = temp__5457__auto___27741;
var G__27740_27743 = cljs.core.cst$kw$end;
(cb_27742.cljs$core$IFn$_invoke$arity$1 ? cb_27742.cljs$core$IFn$_invoke$arity$1(G__27740_27743) : cb_27742.call(null,G__27740_27743));
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
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__27744 = cljs.core._EQ_;
var expr__27745 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__27747 = cljs.core.cst$kw$block;
var G__27748 = expr__27745;
return (pred__27744.cljs$core$IFn$_invoke$arity$2 ? pred__27744.cljs$core$IFn$_invoke$arity$2(G__27747,G__27748) : pred__27744.call(null,G__27747,G__27748));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27749 = cljs.core.cst$kw$current;
var G__27750 = expr__27745;
return (pred__27744.cljs$core$IFn$_invoke$arity$2 ? pred__27744.cljs$core$IFn$_invoke$arity$2(G__27749,G__27750) : pred__27744.call(null,G__27749,G__27750));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27745)].join('')));
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
var temp__5455__auto___27751 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27751)){
var tws_27752 = temp__5455__auto___27751;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27752);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__27753 = cljs.core.seq(tokens);
var chunk__27754 = null;
var count__27755 = (0);
var i__27756 = (0);
while(true){
if((i__27756 < count__27755)){
var token = chunk__27754.cljs$core$IIndexed$_nth$arity$2(null,i__27756);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5455__auto___27757 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27757)){
var tws_27758 = temp__5455__auto___27757;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27758);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_27759 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8376__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8376__auto__)){
return tws_27759;
} else {
return and__8376__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27759);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__27760 = seq__27753;
var G__27761 = chunk__27754;
var G__27762 = count__27755;
var G__27763 = (i__27756 + (1));
seq__27753 = G__27760;
chunk__27754 = G__27761;
count__27755 = G__27762;
i__27756 = G__27763;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27753);
if(temp__5457__auto__){
var seq__27753__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27753__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__27753__$1);
var G__27764 = cljs.core.chunk_rest(seq__27753__$1);
var G__27765 = c__9319__auto__;
var G__27766 = cljs.core.count(c__9319__auto__);
var G__27767 = (0);
seq__27753 = G__27764;
chunk__27754 = G__27765;
count__27755 = G__27766;
i__27756 = G__27767;
continue;
} else {
var token = cljs.core.first(seq__27753__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5455__auto___27768 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27768)){
var tws_27769 = temp__5455__auto___27768;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27769);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_27770 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8376__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8376__auto__)){
return tws_27770;
} else {
return and__8376__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27770);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__27771 = cljs.core.next(seq__27753__$1);
var G__27772 = null;
var G__27773 = (0);
var G__27774 = (0);
seq__27753 = G__27771;
chunk__27754 = G__27772;
count__27755 = G__27773;
i__27756 = G__27774;
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
return (function (p1__27775_SHARP_){
return cljs.core.not((function (){var and__8376__auto__ = cljs.pprint.nl_t_QMARK_(p1__27775_SHARP_);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__27775_SHARP_),lb);
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
return (function (p1__27776_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__27776_SHARP_);
return cljs.core.not((function (){var and__8376__auto__ = cljs.pprint.nl_t_QMARK_(p1__27776_SHARP_);
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

var G__27777 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__27777;
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

var istr_27778 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_27778);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27779_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__27779_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__27780 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27780,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27780,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__27783 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27783,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27783,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__27786 = newl;
var G__27787 = this$;
var G__27788 = section;
var G__27789 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__27786,G__27787,G__27788,G__27789) : cljs.pprint.emit_nl_QMARK_.call(null,G__27786,G__27787,G__27788,G__27789));
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
var G__27790 = new_buffer;
buffer = G__27790;
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
var oldpos_27795 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_27796 = (oldpos_27795 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_27796);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_27795,newpos_27796));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__27791_27797 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__27792_27798 = null;
var count__27793_27799 = (0);
var i__27794_27800 = (0);
while(true){
if((i__27794_27800 < count__27793_27799)){
var l_27801__$1 = chunk__27792_27798.cljs$core$IIndexed$_nth$arity$2(null,i__27794_27800);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_27801__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__27802 = seq__27791_27797;
var G__27803 = chunk__27792_27798;
var G__27804 = count__27793_27799;
var G__27805 = (i__27794_27800 + (1));
seq__27791_27797 = G__27802;
chunk__27792_27798 = G__27803;
count__27793_27799 = G__27804;
i__27794_27800 = G__27805;
continue;
} else {
var temp__5457__auto___27806 = cljs.core.seq(seq__27791_27797);
if(temp__5457__auto___27806){
var seq__27791_27807__$1 = temp__5457__auto___27806;
if(cljs.core.chunked_seq_QMARK_(seq__27791_27807__$1)){
var c__9319__auto___27808 = cljs.core.chunk_first(seq__27791_27807__$1);
var G__27809 = cljs.core.chunk_rest(seq__27791_27807__$1);
var G__27810 = c__9319__auto___27808;
var G__27811 = cljs.core.count(c__9319__auto___27808);
var G__27812 = (0);
seq__27791_27797 = G__27809;
chunk__27792_27798 = G__27810;
count__27793_27799 = G__27811;
i__27794_27800 = G__27812;
continue;
} else {
var l_27813__$1 = cljs.core.first(seq__27791_27807__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_27813__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__27814 = cljs.core.next(seq__27791_27807__$1);
var G__27815 = null;
var G__27816 = (0);
var G__27817 = (0);
seq__27791_27797 = G__27814;
chunk__27792_27798 = G__27815;
count__27793_27799 = G__27816;
i__27794_27800 = G__27817;
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
if(typeof cljs.pprint.t_cljs$pprint27818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27818 = (function (writer,max_columns,miser_width,lb,fields,meta27819){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta27819 = meta27819;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_27820,meta27819__$1){
var self__ = this;
var _27820__$1 = this;
return (new cljs.pprint.t_cljs$pprint27818(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta27819__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_27820){
var self__ = this;
var _27820__$1 = this;
return self__.meta27819;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27818.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27818.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27821 = cljs.core._EQ_;
var expr__27822 = cljs.core.type(x);
if(cljs.core.truth_((pred__27821.cljs$core$IFn$_invoke$arity$2 ? pred__27821.cljs$core$IFn$_invoke$arity$2(String,expr__27822) : pred__27821.call(null,String,expr__27822)))){
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
if(cljs.core.truth_((pred__27821.cljs$core$IFn$_invoke$arity$2 ? pred__27821.cljs$core$IFn$_invoke$arity$2(Number,expr__27822) : pred__27821.call(null,Number,expr__27822)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27822)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27818.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27818.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint27818.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
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

cljs.pprint.t_cljs$pprint27818.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta27819], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27818.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27818.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27818";

cljs.pprint.t_cljs$pprint27818.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint27818");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint27818 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint27818(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27819){
return (new cljs.pprint.t_cljs$pprint27818(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27819));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint27818(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5457__auto___27825 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27825)){
var cb_27826 = temp__5457__auto___27825;
var G__27824_27827 = cljs.core.cst$kw$start;
(cb_27826.cljs$core$IFn$_invoke$arity$1 ? cb_27826.cljs$core$IFn$_invoke$arity$1(G__27824_27827) : cb_27826.call(null,G__27824_27827));
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

var temp__5457__auto___27829 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27829)){
var cb_27830 = temp__5457__auto___27829;
var G__27828_27831 = cljs.core.cst$kw$end;
(cb_27830.cljs$core$IFn$_invoke$arity$1 ? cb_27830.cljs$core$IFn$_invoke$arity$1(G__27828_27831) : cb_27830.call(null,G__27828_27831));
} else {
}
} else {
var oldpos_27832 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_27833 = (oldpos_27832 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_27833);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_27832,newpos_27833));
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

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__27834 = cljs.core._EQ_;
var expr__27835 = relative_to;
if(cljs.core.truth_((function (){var G__27837 = cljs.core.cst$kw$block;
var G__27838 = expr__27835;
return (pred__27834.cljs$core$IFn$_invoke$arity$2 ? pred__27834.cljs$core$IFn$_invoke$arity$2(G__27837,G__27838) : pred__27834.call(null,G__27837,G__27838));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27839 = cljs.core.cst$kw$current;
var G__27840 = expr__27835;
return (pred__27834.cljs$core$IFn$_invoke$arity$2 ? pred__27834.cljs$core$IFn$_invoke$arity$2(G__27839,G__27840) : pred__27834.call(null,G__27839,G__27840));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27835)].join('')));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__27841_SHARP_){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__27841_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__27841_SHARP_)], null);
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
var len__9667__auto___27860 = arguments.length;
var i__9668__auto___27861 = (0);
while(true){
if((i__9668__auto___27861 < len__9667__auto___27860)){
args__9674__auto__.push((arguments[i__9668__auto___27861]));

var G__27862 = (i__9668__auto___27861 + (1));
i__9668__auto___27861 = G__27862;
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
var _STAR_print_base_STAR_27846 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_27847 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_27848 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_27849 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_27850 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_27851 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_27852 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_27853 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_27854 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_27855 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_27856 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_27857 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
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
var base_writer__27401__auto___27863 = base_writer;
var new_writer__27402__auto___27864 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27401__auto___27863));
var _STAR_out_STAR_27858_27865 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__27402__auto___27864)?cljs.pprint.make_pretty_writer(base_writer__27401__auto___27863,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27401__auto___27863);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27858_27865;
}} else {
var _STAR_out_STAR_27859_27866 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27859_27866;
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
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_27857;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_27856;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_27855;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_27854;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_27853;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_27852;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_27851;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_27850;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27849;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_27848;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_27847;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_27846;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq27844){
var G__27845 = cljs.core.first(seq27844);
var seq27844__$1 = cljs.core.next(seq27844);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__27845,seq27844__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__27868 = arguments.length;
switch (G__27868) {
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
var _STAR_out_STAR_27869 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27869;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__27401__auto__ = writer;
var new_writer__27402__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27401__auto__));
var _STAR_out_STAR_27870 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__27402__auto__)?cljs.pprint.make_pretty_writer(base_writer__27401__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27401__auto__);

try{var _STAR_print_pretty_STAR_27871_27873 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_27871_27873;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27870;
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
var len__9667__auto___27877 = arguments.length;
var i__9668__auto___27878 = (0);
while(true){
if((i__9668__auto___27878 < len__9667__auto___27877)){
args__9674__auto__.push((arguments[i__9668__auto___27878]));

var G__27879 = (i__9668__auto___27878 + (1));
i__9668__auto___27878 = G__27879;
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

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq27874){
var G__27875 = cljs.core.first(seq27874);
var seq27874__$1 = cljs.core.next(seq27874);
var G__27876 = cljs.core.first(seq27874__$1);
var seq27874__$2 = cljs.core.next(seq27874__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__27875,G__27876,seq27874__$2);
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

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27881,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27885 = k27881;
var G__27885__$1 = (((G__27885 instanceof cljs.core.Keyword))?G__27885.fqn:null);
switch (G__27885__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27881,else__9079__auto__);

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

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27880){
var self__ = this;
var G__27880__$1 = this;
return (new cljs.core.RecordIter((0),G__27880__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27886 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27886(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27882,other27883){
var self__ = this;
var this27882__$1 = this;
return (!((other27883 == null))) && ((this27882__$1.constructor === other27883.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27882__$1.seq,other27883.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27882__$1.rest,other27883.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27882__$1.pos,other27883.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27882__$1.__extmap,other27883.__extmap));
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

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27880){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27887 = cljs.core.keyword_identical_QMARK_;
var expr__27888 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27890 = cljs.core.cst$kw$seq;
var G__27891 = expr__27888;
return (pred__27887.cljs$core$IFn$_invoke$arity$2 ? pred__27887.cljs$core$IFn$_invoke$arity$2(G__27890,G__27891) : pred__27887.call(null,G__27890,G__27891));
})())){
return (new cljs.pprint.arg_navigator(G__27880,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27892 = cljs.core.cst$kw$rest;
var G__27893 = expr__27888;
return (pred__27887.cljs$core$IFn$_invoke$arity$2 ? pred__27887.cljs$core$IFn$_invoke$arity$2(G__27892,G__27893) : pred__27887.call(null,G__27892,G__27893));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__27880,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27894 = cljs.core.cst$kw$pos;
var G__27895 = expr__27888;
return (pred__27887.cljs$core$IFn$_invoke$arity$2 ? pred__27887.cljs$core$IFn$_invoke$arity$2(G__27894,G__27895) : pred__27887.call(null,G__27894,G__27895));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__27880,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27880),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27880){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__27880,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__27884){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__27884),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__27884),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__27884),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27884,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
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
var vec__27897 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__27900 = navigator;
var G__27901 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__27900,G__27901) : cljs.pprint.relative_reposition.call(null,G__27900,G__27901));
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

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27903,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27907 = k27903;
var G__27907__$1 = (((G__27907 instanceof cljs.core.Keyword))?G__27907.fqn:null);
switch (G__27907__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27903,else__9079__auto__);

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

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27902){
var self__ = this;
var G__27902__$1 = this;
return (new cljs.core.RecordIter((0),G__27902__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27908 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27908(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27904,other27905){
var self__ = this;
var this27904__$1 = this;
return (!((other27905 == null))) && ((this27904__$1.constructor === other27905.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27904__$1.func,other27905.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27904__$1.def,other27905.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27904__$1.params,other27905.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27904__$1.offset,other27905.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27904__$1.__extmap,other27905.__extmap));
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

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27902){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27909 = cljs.core.keyword_identical_QMARK_;
var expr__27910 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27912 = cljs.core.cst$kw$func;
var G__27913 = expr__27910;
return (pred__27909.cljs$core$IFn$_invoke$arity$2 ? pred__27909.cljs$core$IFn$_invoke$arity$2(G__27912,G__27913) : pred__27909.call(null,G__27912,G__27913));
})())){
return (new cljs.pprint.compiled_directive(G__27902,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27914 = cljs.core.cst$kw$def;
var G__27915 = expr__27910;
return (pred__27909.cljs$core$IFn$_invoke$arity$2 ? pred__27909.cljs$core$IFn$_invoke$arity$2(G__27914,G__27915) : pred__27909.call(null,G__27914,G__27915));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__27902,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27916 = cljs.core.cst$kw$params;
var G__27917 = expr__27910;
return (pred__27909.cljs$core$IFn$_invoke$arity$2 ? pred__27909.cljs$core$IFn$_invoke$arity$2(G__27916,G__27917) : pred__27909.call(null,G__27916,G__27917));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__27902,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27918 = cljs.core.cst$kw$offset;
var G__27919 = expr__27910;
return (pred__27909.cljs$core$IFn$_invoke$arity$2 ? pred__27909.cljs$core$IFn$_invoke$arity$2(G__27918,G__27919) : pred__27909.call(null,G__27918,G__27919));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__27902,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27902),null));
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

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27902){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__27902,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__27906){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__27906),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__27906),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__27906),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__27906),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27906,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__27921,navigator){
var vec__27922 = p__27921;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27922,(0),null);
var vec__27925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27922,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27925,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27925,(1),null);
var vec__27928 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__27931 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27931,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27931,(1),null);
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
var vec__27934 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27934,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27934,(1),null);
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
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__27937_SHARP_){
if((p1__27937_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__27937_SHARP_,base),cljs.core.quot(p1__27937_SHARP_,base)], null);
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
return (function (p1__27938_SHARP_){
if((p1__27938_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__27938_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__27938_SHARP_ - (10))));
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
var vec__27940 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_27943 = (arg < (0));
var pos_arg_27944 = ((neg_27943)?(- arg):arg);
var raw_str_27945 = cljs.pprint.opt_base_str(base,pos_arg_27944);
var group_str_27946 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_27943,pos_arg_27944,raw_str_27945,vec__27940,arg,arg_navigator__$1){
return (function (p1__27939_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__27939_SHARP_);
});})(neg_27943,pos_arg_27944,raw_str_27945,vec__27940,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_27945));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_27945);
var signed_str_27947 = ((neg_27943)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_27946)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_27946)].join(''):group_str_27946
));
var padded_str_27948 = (((signed_str_27947.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_27947.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_27947)].join(''):signed_str_27947);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_27948], 0));
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
var G__27949 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__27950 = (pos - (1));
var G__27951 = cljs.core.first(remainder);
var G__27952 = cljs.core.next(remainder);
acc = G__27949;
pos = G__27950;
this$ = G__27951;
remainder = G__27952;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__27953 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27953,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27953,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_27956 = (((arg < (0)))?(- arg):arg);
var parts_27957 = cljs.pprint.remainders((1000),abs_arg_27956);
if((cljs.core.count(parts_27957) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_27958 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_27957);
var full_str_27959 = cljs.pprint.add_english_scales(parts_strs_27958,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_27959)].join('')], 0));
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
var vec__27960 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27960,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27960,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_27963 = (((arg < (0)))?(- arg):arg);
var parts_27964 = cljs.pprint.remainders((1000),abs_arg_27963);
if((cljs.core.count(parts_27964) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_27965 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_27964));
var head_str_27966 = cljs.pprint.add_english_scales(parts_strs_27965,(1));
var tail_str_27967 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_27964));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_27966))) && (!(cljs.core.empty_QMARK_(tail_str_27967))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_27966),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_27967)].join(''):((!(cljs.core.empty_QMARK_(head_str_27966)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_27966),"th"].join(''):tail_str_27967
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_27968 = cljs.core.rem(arg,(100));
var not_teens_27969 = (((11) < low_two_digits_27968)) || (((19) > low_two_digits_27968));
var low_digit_27970 = cljs.core.rem(low_two_digits_27968,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_27970 === (1))) && (not_teens_27969))?"st":((((low_digit_27970 === (2))) && (not_teens_27969))?"nd":((((low_digit_27970 === (3))) && (not_teens_27969))?"rd":"th"
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
var vec__27971 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27971,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27971,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_27974 = cljs.pprint.remainders((10),arg);
var acc_27975 = cljs.core.PersistentVector.EMPTY;
var pos_27976 = (cljs.core.count(digits_27974) - (1));
var digits_27977__$1 = digits_27974;
while(true){
if(cljs.core.empty_QMARK_(digits_27977__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_27975)], 0));
} else {
var digit_27978 = cljs.core.first(digits_27977__$1);
var G__27979 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_27978))?acc_27975:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_27975,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_27976),(digit_27978 - (1)))));
var G__27980 = (pos_27976 - (1));
var G__27981 = cljs.core.next(digits_27977__$1);
acc_27975 = G__27979;
pos_27976 = G__27980;
digits_27977__$1 = G__27981;
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
var vec__27982 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27982,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27982,(1),null);
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
var vec__27985 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27985,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27985,(1),null);
var pred__27988_27995 = cljs.core._EQ_;
var expr__27989_27996 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__27991 = "o";
var G__27992 = expr__27989_27996;
return (pred__27988_27995.cljs$core$IFn$_invoke$arity$2 ? pred__27988_27995.cljs$core$IFn$_invoke$arity$2(G__27991,G__27992) : pred__27988_27995.call(null,G__27991,G__27992));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__27993 = "u";
var G__27994 = expr__27989_27996;
return (pred__27988_27995.cljs$core$IFn$_invoke$arity$2 ? pred__27988_27995.cljs$core$IFn$_invoke$arity$2(G__27993,G__27994) : pred__27988_27995.call(null,G__27993,G__27994));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__27988_27995.cljs$core$IFn$_invoke$arity$2 ? pred__27988_27995.cljs$core$IFn$_invoke$arity$2(null,expr__27989_27996) : pred__27988_27995.call(null,null,expr__27989_27996)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27989_27996)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__27997 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27997,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27997,(1),null);
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
var vec__28000 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28000,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28000,(1),null);
var vec__28003 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28003,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28003,(1),null);
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
var vec__28006 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(1),null);
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
var G__28009 = (i - (1));
i = G__28009;
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
var vec__28010 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28010,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28010,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28010,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28010,(3),null);
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
var vec__28013 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28013,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28013,(1),null);
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
var vec__28016 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28016,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28016,(1),null);
var vec__28019 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28019,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28019,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__28022 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8388__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__28025 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28025,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28025,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28025,(2),null);
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
var len_28028 = cljs.core.count(fixed_repr__$1);
var signed_len_28029 = (cljs.core.truth_(add_sign)?(len_28028 + (1)):len_28028);
var prepend_zero_28030__$1 = (prepend_zero) && (!((signed_len_28029 >= w)));
var append_zero_28031__$1 = (append_zero) && (!((signed_len_28029 >= w)));
var full_len_28032 = (((prepend_zero_28030__$1) || (append_zero_28031__$1))?(signed_len_28029 + (1)):signed_len_28029);
if(cljs.core.truth_((function (){var and__8376__auto__ = (full_len_28032 > w);
if(and__8376__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_28032),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28030__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28031__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28033 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28033,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28033,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__28039_28049 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28040_28050 = G__28039_28049;
var mantissa_28051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28040_28050,(0),null);
var exp_28052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28040_28050,(1),null);
var G__28039_28053__$1 = G__28039_28049;
while(true){
var vec__28043_28054 = G__28039_28053__$1;
var mantissa_28055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28043_28054,(0),null);
var exp_28056__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28043_28054,(1),null);
var w_28057 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_28058 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_28059 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_28060 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_28061 = (function (){var or__8388__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return "E";
}
})();
var add_sign_28062 = (function (){var or__8388__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_28063 = (k_28060 <= (0));
var scaled_exp_28064 = (exp_28056__$1 - (k_28060 - (1)));
var scaled_exp_str_28065 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_28064))].join('');
var scaled_exp_str_28066__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_28061),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_28064 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_28059)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_28059 - cljs.core.count(scaled_exp_str_28065)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28065)].join('');
var exp_width_28067 = cljs.core.count(scaled_exp_str_28066__$1);
var base_mantissa_width_28068 = cljs.core.count(mantissa_28055__$1);
var scaled_mantissa_28069 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_28060),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_28055__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_28058)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_28058 - (base_mantissa_width_28068 - (1))) - (((k_28060 < (0)))?(- k_28060):(0))),"0")):null))].join('');
var w_mantissa_28070 = (cljs.core.truth_(w_28057)?(w_28057 - exp_width_28067):null);
var vec__28046_28071 = cljs.pprint.round_str(scaled_mantissa_28069,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_28060,(0)))?(d_28058 - (1)):(((k_28060 > (0)))?d_28058:(((k_28060 < (0)))?(d_28058 - (1)):null))),(cljs.core.truth_(w_mantissa_28070)?(w_mantissa_28070 - (cljs.core.truth_(add_sign_28062)?(1):(0))):null));
var rounded_mantissa_28072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28046_28071,(0),null);
var __28073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28046_28071,(1),null);
var incr_exp_28074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28046_28071,(2),null);
var full_mantissa_28075 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_28072,k_28060);
var append_zero_28076 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_28060,cljs.core.count(rounded_mantissa_28072))) && ((d_28058 == null));
if(cljs.core.not(incr_exp_28074)){
if(cljs.core.truth_(w_28057)){
var len_28077 = (cljs.core.count(full_mantissa_28075) + exp_width_28067);
var signed_len_28078 = (cljs.core.truth_(add_sign_28062)?(len_28077 + (1)):len_28077);
var prepend_zero_28079__$1 = (prepend_zero_28063) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_28078,w_28057)));
var full_len_28080 = ((prepend_zero_28079__$1)?(signed_len_28078 + (1)):signed_len_28078);
var append_zero_28081__$1 = (append_zero_28076) && ((full_len_28080 < w_28057));
if(cljs.core.truth_((function (){var and__8376__auto__ = (function (){var or__8388__auto__ = (full_len_28080 > w_28057);
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = e_28059;
if(cljs.core.truth_(and__8376__auto__)){
return ((exp_width_28067 - (2)) > e_28059);
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
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_28057,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_28057 - full_len_28080) - ((append_zero_28081__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_28062)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28079__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_28075),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28081__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28066__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_28062)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28063)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_28075),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28076)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28066__$1)].join('')], 0));
}
} else {
var G__28082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_28072,(exp_28056__$1 + (1))], null);
G__28039_28053__$1 = G__28082;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28083 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28083,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28083,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__28086 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28086,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28086,(1),null);
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
var vec__28089 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(1),null);
var vec__28092 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28092,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28092,(1),null);
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
var vec__28095 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095,(2),null);
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
var vec__28098 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28098,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28098,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28101 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28101,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28101,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28104 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28104,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28104,(1),null);
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
var vec__28107 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28107,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28107,(1),null);
var vec__28110 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(1),null);
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
var G__28113 = (count + (1));
var G__28114 = iter_result;
var G__28115 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__28113;
args__$1 = G__28114;
last_pos = G__28115;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28116 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(1),null);
var vec__28119 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28119,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28119,(1),null);
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
var G__28122 = (count + (1));
var G__28123 = cljs.core.next(arg_list__$1);
count = G__28122;
arg_list__$1 = G__28123;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28124 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28124,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28124,(1),null);
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
var G__28127 = (count + (1));
var G__28128 = iter_result;
var G__28129 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__28127;
navigator__$2 = G__28128;
last_pos = G__28129;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28130 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(1),null);
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
var vec__28133 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__28136 = (count + (1));
var G__28137 = navigator__$3;
count = G__28136;
navigator__$2 = G__28137;
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
var vec__28138 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_28141 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28141;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28138,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28138,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__28142 = cljs.core.next(clauses__$1);
var G__28143 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__28144 = iter_result;
clauses__$1 = G__28142;
acc = G__28143;
navigator__$1 = G__28144;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__28145 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var else$ = temp__5457__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__28148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28145,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28148,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28145,(1),null);
var navigator__$1 = (function (){var or__8388__auto__ = new_navigator;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return navigator;
}
})();
var vec__28151 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(1),null);
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
var vec__28154 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154,(1),null);
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

var slots_28157__$1 = slots;
var extra_pad_28158__$1 = extra_pad;
var strs_28159__$1 = strs;
var pad_only_28160 = (function (){var or__8388__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_28159__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_28159__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_28160))?cljs.core.first(strs_28159__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8388__auto__ = pad_only_28160;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = cljs.core.next(strs_28159__$1);
if(or__8388__auto____$1){
return or__8388__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_28158__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__28161 = (slots_28157__$1 - (1));
var G__28162 = (extra_pad_28158__$1 - (1));
var G__28163 = (cljs.core.truth_(pad_only_28160)?strs_28159__$1:cljs.core.next(strs_28159__$1));
var G__28164 = false;
slots_28157__$1 = G__28161;
extra_pad_28158__$1 = G__28162;
strs_28159__$1 = G__28163;
pad_only_28160 = G__28164;
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
if(typeof cljs.pprint.t_cljs$pprint28165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28165 = (function (writer,meta28166){
this.writer = writer;
this.meta28166 = meta28166;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28167,meta28166__$1){
var self__ = this;
var _28167__$1 = this;
return (new cljs.pprint.t_cljs$pprint28165(self__.writer,meta28166__$1));
});

cljs.pprint.t_cljs$pprint28165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28167){
var self__ = this;
var _28167__$1 = this;
return self__.meta28166;
});

cljs.pprint.t_cljs$pprint28165.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28165.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28168 = cljs.core._EQ_;
var expr__28169 = cljs.core.type(x);
if(cljs.core.truth_((pred__28168.cljs$core$IFn$_invoke$arity$2 ? pred__28168.cljs$core$IFn$_invoke$arity$2(String,expr__28169) : pred__28168.call(null,String,expr__28169)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__28168.cljs$core$IFn$_invoke$arity$2 ? pred__28168.cljs$core$IFn$_invoke$arity$2(Number,expr__28169) : pred__28168.call(null,Number,expr__28169)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28169)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta28166], null);
});

cljs.pprint.t_cljs$pprint28165.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28165.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28165";

cljs.pprint.t_cljs$pprint28165.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28165");
});

cljs.pprint.__GT_t_cljs$pprint28165 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint28165(writer__$1,meta28166){
return (new cljs.pprint.t_cljs$pprint28165(writer__$1,meta28166));
});

}

return (new cljs.pprint.t_cljs$pprint28165(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint28171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28171 = (function (writer,meta28172){
this.writer = writer;
this.meta28172 = meta28172;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28173,meta28172__$1){
var self__ = this;
var _28173__$1 = this;
return (new cljs.pprint.t_cljs$pprint28171(self__.writer,meta28172__$1));
});

cljs.pprint.t_cljs$pprint28171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28173){
var self__ = this;
var _28173__$1 = this;
return self__.meta28172;
});

cljs.pprint.t_cljs$pprint28171.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28171.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28174 = cljs.core._EQ_;
var expr__28175 = cljs.core.type(x);
if(cljs.core.truth_((pred__28174.cljs$core$IFn$_invoke$arity$2 ? pred__28174.cljs$core$IFn$_invoke$arity$2(String,expr__28175) : pred__28174.call(null,String,expr__28175)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__28174.cljs$core$IFn$_invoke$arity$2 ? pred__28174.cljs$core$IFn$_invoke$arity$2(Number,expr__28175) : pred__28174.call(null,Number,expr__28175)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28175)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta28172], null);
});

cljs.pprint.t_cljs$pprint28171.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28171.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28171";

cljs.pprint.t_cljs$pprint28171.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28171");
});

cljs.pprint.__GT_t_cljs$pprint28171 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint28171(writer__$1,meta28172){
return (new cljs.pprint.t_cljs$pprint28171(writer__$1,meta28172));
});

}

return (new cljs.pprint.t_cljs$pprint28171(writer,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs.pprint.t_cljs$pprint28177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28177 = (function (writer,last_was_whitespace_QMARK_,meta28178){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta28178 = meta28178;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_28179,meta28178__$1){
var self__ = this;
var _28179__$1 = this;
return (new cljs.pprint.t_cljs$pprint28177(self__.writer,self__.last_was_whitespace_QMARK_,meta28178__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_28179){
var self__ = this;
var _28179__$1 = this;
return self__.meta28178;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28180 = cljs.core._EQ_;
var expr__28181 = cljs.core.type(x);
if(cljs.core.truth_((pred__28180.cljs$core$IFn$_invoke$arity$2 ? pred__28180.cljs$core$IFn$_invoke$arity$2(String,expr__28181) : pred__28180.call(null,String,expr__28181)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__28183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__28183);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__28180.cljs$core$IFn$_invoke$arity$2 ? pred__28180.cljs$core$IFn$_invoke$arity$2(Number,expr__28181) : pred__28180.call(null,Number,expr__28181)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28181)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28177.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta28178], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28177.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28177.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28177";

cljs.pprint.t_cljs$pprint28177.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28177");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint28177 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint28177(writer__$1,last_was_whitespace_QMARK___$1,meta28178){
return (new cljs.pprint.t_cljs$pprint28177(writer__$1,last_was_whitespace_QMARK___$1,meta28178));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint28177(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint28184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28184 = (function (writer,capped,meta28185){
this.writer = writer;
this.capped = capped;
this.meta28185 = meta28185;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_28186,meta28185__$1){
var self__ = this;
var _28186__$1 = this;
return (new cljs.pprint.t_cljs$pprint28184(self__.writer,self__.capped,meta28185__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint28184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_28186){
var self__ = this;
var _28186__$1 = this;
return self__.meta28185;
});})(capped))
;

cljs.pprint.t_cljs$pprint28184.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint28184.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28187 = cljs.core._EQ_;
var expr__28188 = cljs.core.type(x);
if(cljs.core.truth_((pred__28187.cljs$core$IFn$_invoke$arity$2 ? pred__28187.cljs$core$IFn$_invoke$arity$2(String,expr__28188) : pred__28187.call(null,String,expr__28188)))){
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
if(cljs.core.truth_((pred__28187.cljs$core$IFn$_invoke$arity$2 ? pred__28187.cljs$core$IFn$_invoke$arity$2(Number,expr__28188) : pred__28187.call(null,Number,expr__28188)))){
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28188)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint28184.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta28185], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint28184.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28184.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28184";

cljs.pprint.t_cljs$pprint28184.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28184");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint28184 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint28184(writer__$1,capped__$1,meta28185){
return (new cljs.pprint.t_cljs$pprint28184(writer__$1,capped__$1,meta28185));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint28184(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_28190 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28190;
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
var colnum_28192 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_28193 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_28194 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_28195 = (((current_28194 < colnum_28192))?(colnum_28192 - current_28194):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_28193,(0)))?(0):(colinc_28193 - cljs.core.rem((current_28194 - colnum_28192),colinc_28193))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_28195," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_28196 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_28197 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_28198 = (colrel_28196 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_28199 = (((colinc_28197 > (0)))?cljs.core.rem(start_col_28198,colinc_28197):(0));
var space_count_28200 = (colrel_28196 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_28199))?(0):(colinc_28197 - offset_28199)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_28200," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__28201 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28201,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28201,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28204_28206 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28205_28207 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28205_28207;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28204_28206;
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
return (function (p1__28208_SHARP_,p2__28209_SHARP_,p3__28210_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__28208_SHARP_,p2__28209_SHARP_,p3__28210_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28211_SHARP_,p2__28212_SHARP_,p3__28213_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__28211_SHARP_,p2__28212_SHARP_,p3__28213_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28214_SHARP_,p2__28215_SHARP_,p3__28216_SHARP_){
return cljs.pprint.format_integer((10),p1__28214_SHARP_,p2__28215_SHARP_,p3__28216_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28217_SHARP_,p2__28218_SHARP_,p3__28219_SHARP_){
return cljs.pprint.format_integer((2),p1__28217_SHARP_,p2__28218_SHARP_,p3__28219_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28220_SHARP_,p2__28221_SHARP_,p3__28222_SHARP_){
return cljs.pprint.format_integer((8),p1__28220_SHARP_,p2__28221_SHARP_,p3__28222_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28223_SHARP_,p2__28224_SHARP_,p3__28225_SHARP_){
return cljs.pprint.format_integer((16),p1__28223_SHARP_,p2__28224_SHARP_,p3__28225_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__28226_SHARP_,p2__28227_SHARP_,p3__28228_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__28226_SHARP_),p1__28226_SHARP_,p2__28227_SHARP_,p3__28228_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())){
return (function (p1__28229_SHARP_,p2__28230_SHARP_,p3__28231_SHARP_){
return cljs.pprint.format_old_roman(p1__28229_SHARP_,p2__28230_SHARP_,p3__28231_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28232_SHARP_,p2__28233_SHARP_,p3__28234_SHARP_){
return cljs.pprint.format_new_roman(p1__28232_SHARP_,p2__28233_SHARP_,p3__28234_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28235_SHARP_,p2__28236_SHARP_,p3__28237_SHARP_){
return cljs.pprint.format_ordinal_english(p1__28235_SHARP_,p2__28236_SHARP_,p3__28237_SHARP_);
});
} else {
return (function (p1__28238_SHARP_,p2__28239_SHARP_,p3__28240_SHARP_){
return cljs.pprint.format_cardinal_english(p1__28238_SHARP_,p2__28239_SHARP_,p3__28240_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__28250 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(1),null);
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
var n__9433__auto___28268 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
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
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_28271 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_28271 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9433__auto___28272 = (cnt_28271 - (1));
var i_28273 = (0);
while(true){
if((i_28273 < n__9433__auto___28272)){
cljs.pprint.prn();

var G__28274 = (i_28273 + (1));
i_28273 = G__28274;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9433__auto___28275 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28276 = (0);
while(true){
if((i_28276 < n__9433__auto___28275)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__28277 = (i_28276 + (1));
i_28276 = G__28277;
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
return (function (p1__28241_SHARP_,p2__28242_SHARP_,p3__28243_SHARP_){
return cljs.pprint.relative_tabulation(p1__28241_SHARP_,p2__28242_SHARP_,p3__28243_SHARP_);
});
} else {
return (function (p1__28244_SHARP_,p2__28245_SHARP_,p3__28246_SHARP_){
return cljs.pprint.absolute_tabulation(p1__28244_SHARP_,p2__28245_SHARP_,p3__28246_SHARP_);
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
var vec__28253 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__28256 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28256,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28256,(1),null);
var vec__28259 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(1),null);
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
return (function (p1__28247_SHARP_,p2__28248_SHARP_,p3__28249_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__28247_SHARP_,p2__28248_SHARP_,p3__28249_SHARP_);
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
var vec__28262 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__28265 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28265,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28265,(1),null);
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
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__28278){
var vec__28279 = p__28278;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28279,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28279,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28279,(2),null);
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
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__28282){
var vec__28283 = p__28282;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__28286){
var vec__28287 = p__28286;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28287,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28287,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28287,(2),null);
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

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28290_SHARP_,p2__28291_SHARP_){
var val = cljs.core.first(p1__28290_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__28291_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__28291_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__28290_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__9270__auto__ = (function cljs$pprint$map_params_$_iter__28295(s__28296){
return (new cljs.core.LazySeq(null,(function (){
var s__28296__$1 = s__28296;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28296__$1);
if(temp__5457__auto__){
var s__28296__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28296__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28296__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28298 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28297 = (0);
while(true){
if((i__28297 < size__9269__auto__)){
var vec__28299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28297);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28299,(0),null);
var vec__28302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28299,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28302,(0),null);
cljs.core.chunk_append(b__28298,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__28311 = (i__28297 + (1));
i__28297 = G__28311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28298),cljs$pprint$map_params_$_iter__28295(cljs.core.chunk_rest(s__28296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28298),null);
}
} else {
var vec__28305 = cljs.core.first(s__28296__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(0),null);
var vec__28308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__28295(cljs.core.rest(s__28296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28292_SHARP_,p2__28293_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__28292_SHARP_,p2__28293_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28294_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28294_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__28312 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28312,(0),null);
var vec__28315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28312,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28315,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28315,(1),null);
var vec__28318 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318,(0),null);
var vec__28321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(2),null);
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__28324 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__28324.cljs$core$IFn$_invoke$arity$2 ? fexpr__28324.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__28324.call(null,params,offset__$2));
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
var vec__28325 = (function (){var G__28328 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__28329 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__28330 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__28328,G__28329,G__28330) : cljs.pprint.collect_clauses.call(null,G__28328,G__28329,G__28330));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28325,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28325,(1),null);
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
return cljs.core.second(cljs.pprint.consume((function (p__28331){
var vec__28332 = p__28331;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28332,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28332,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28332,(2),null);
var vec__28335 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28335,(0),null);
var vec__28338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28335,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(3),null);
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
var _STAR_format_str_STAR_28341 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_28341){
return (function (p__28342){
var vec__28343 = p__28342;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28343,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28343,(1),null);
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
});})(_STAR_format_str_STAR_28341))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_28341;
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
var G__28346 = cljs.core.next(format__$1);
format__$1 = G__28346;
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
var G__28348 = arguments.length;
switch (G__28348) {
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
var _STAR_out_STAR_28349 = cljs.core._STAR_out_STAR_;
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
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28349;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28350 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(1),null);
var vec__28353 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28353,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28353,(1),null);
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
var macro_char = (function (){var G__28357 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__28357) : cljs.pprint.reader_macros.call(null,G__28357));
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
var _STAR_current_level_STAR_28358_28361 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28359_28362 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count28360_28363 = (0);
var alis_28364__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28360_28363 < cljs.core._STAR_print_length_STAR_))){
if(alis_28364__$1){
cljs.pprint.write_out(cljs.core.first(alis_28364__$1));

if(cljs.core.next(alis_28364__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28365 = (length_count28360_28363 + (1));
var G__28366 = cljs.core.next(alis_28364__$1);
length_count28360_28363 = G__28365;
alis_28364__$1 = G__28366;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28359_28362;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28358_28361;
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
var _STAR_current_level_STAR_28367_28370 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28368_28371 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28369_28372 = (0);
var aseq_28373 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28369_28372 < cljs.core._STAR_print_length_STAR_))){
if(aseq_28373){
cljs.pprint.write_out(cljs.core.first(aseq_28373));

if(cljs.core.next(aseq_28373)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28374 = (length_count28369_28372 + (1));
var G__28375 = cljs.core.next(aseq_28373);
length_count28369_28372 = G__28374;
aseq_28373 = G__28375;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28368_28371;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28367_28370;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__27466__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28376__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28376 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28377__i = 0, G__28377__a = new Array(arguments.length -  0);
while (G__28377__i < G__28377__a.length) {G__28377__a[G__28377__i] = arguments[G__28377__i + 0]; ++G__28377__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28377__a,0,null);
} 
return G__28376__delegate.call(this,args__27468__auto__);};
G__28376.cljs$lang$maxFixedArity = 0;
G__28376.cljs$lang$applyTo = (function (arglist__28378){
var args__27468__auto__ = cljs.core.seq(arglist__28378);
return G__28376__delegate(args__27468__auto__);
});
G__28376.cljs$core$IFn$_invoke$arity$variadic = G__28376__delegate;
return G__28376;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__28379 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__28382 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9841,9841,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__28382.cljs$core$IFn$_invoke$arity$1 ? fexpr__28382.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__28382.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28379,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28379,(1),null);
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
var _STAR_current_level_STAR_28383_28388 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28384_28389 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count28385_28390 = (0);
var aseq_28391 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28385_28390 < cljs.core._STAR_print_length_STAR_))){
if(aseq_28391){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28386_28392 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28387_28393 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_28391));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_28391)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28387_28393;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28386_28392;
}}


if(cljs.core.next(aseq_28391)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28394 = (length_count28385_28390 + (1));
var G__28395 = cljs.core.next(aseq_28391);
length_count28385_28390 = G__28394;
aseq_28391 = G__28395;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28384_28389;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28383_28388;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__27466__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28396__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28396 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28397__i = 0, G__28397__a = new Array(arguments.length -  0);
while (G__28397__i < G__28397__a.length) {G__28397__a[G__28397__i] = arguments[G__28397__i + 0]; ++G__28397__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28397__a,0,null);
} 
return G__28396__delegate.call(this,args__27468__auto__);};
G__28396.cljs$lang$maxFixedArity = 0;
G__28396.cljs$lang$applyTo = (function (arglist__28398){
var args__27468__auto__ = cljs.core.seq(arglist__28398);
return G__28396__delegate(args__27468__auto__);
});
G__28396.cljs$core$IFn$_invoke$arity$variadic = G__28396__delegate;
return G__28396;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
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
var _STAR_current_level_STAR_28399_28403 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28400_28404 = cljs.pprint._STAR_current_length_STAR_;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28400_28404;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28399_28403;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__27466__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28405__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28405 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28406__i = 0, G__28406__a = new Array(arguments.length -  0);
while (G__28406__i < G__28406__a.length) {G__28406__a[G__28406__i] = arguments[G__28406__i + 0]; ++G__28406__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28406__a,0,null);
} 
return G__28405__delegate.call(this,args__27468__auto__);};
G__28405.cljs$lang$maxFixedArity = 0;
G__28405.cljs$lang$applyTo = (function (arglist__28407){
var args__27468__auto__ = cljs.core.seq(arglist__28407);
return G__28405__delegate(args__27468__auto__);
});
G__28405.cljs$core$IFn$_invoke$arity$variadic = G__28405__delegate;
return G__28405;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
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
var vec__28409 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28409,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28409,(1),null);
var vec__28412 = reference;
var seq__28413 = cljs.core.seq(vec__28412);
var first__28414 = cljs.core.first(seq__28413);
var seq__28413__$1 = cljs.core.next(seq__28413);
var keyw = first__28414;
var args = seq__28413__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28415_28431 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28416_28432 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__28417_28433 = (function (){var format_in__27466__auto__ = "~w~:i";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args){
return (function() { 
var G__28434__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28434 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28435__i = 0, G__28435__a = new Array(arguments.length -  0);
while (G__28435__i < G__28435__a.length) {G__28435__a[G__28435__i] = arguments[G__28435__i + 0]; ++G__28435__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28435__a,0,null);
} 
return G__28434__delegate.call(this,args__27468__auto__);};
G__28434.cljs$lang$maxFixedArity = 0;
G__28434.cljs$lang$applyTo = (function (arglist__28436){
var args__27468__auto__ = cljs.core.seq(arglist__28436);
return G__28434__delegate(args__27468__auto__);
});
G__28434.cljs$core$IFn$_invoke$arity$variadic = G__28434__delegate;
return G__28434;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args))
})();
(fexpr__28417_28433.cljs$core$IFn$_invoke$arity$1 ? fexpr__28417_28433.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__28417_28433.call(null,keyw));

var args_28437__$1 = args;
while(true){
if(cljs.core.seq(args_28437__$1)){
var fexpr__28418_28438 = (function (){var format_in__27466__auto__ = " ";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (args_28437__$1,format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args){
return (function() { 
var G__28439__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28439 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28440__i = 0, G__28440__a = new Array(arguments.length -  0);
while (G__28440__i < G__28440__a.length) {G__28440__a[G__28440__i] = arguments[G__28440__i + 0]; ++G__28440__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28440__a,0,null);
} 
return G__28439__delegate.call(this,args__27468__auto__);};
G__28439.cljs$lang$maxFixedArity = 0;
G__28439.cljs$lang$applyTo = (function (arglist__28441){
var args__27468__auto__ = cljs.core.seq(arglist__28441);
return G__28439__delegate(args__27468__auto__);
});
G__28439.cljs$core$IFn$_invoke$arity$variadic = G__28439__delegate;
return G__28439;
})()
;
;})(args_28437__$1,format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args))
})();
(fexpr__28418_28438.cljs$core$IFn$_invoke$arity$0 ? fexpr__28418_28438.cljs$core$IFn$_invoke$arity$0() : fexpr__28418_28438.call(null));

var arg_28442 = cljs.core.first(args_28437__$1);
if(cljs.core.sequential_QMARK_(arg_28442)){
var vec__28419_28443 = cljs.pprint.brackets(arg_28442);
var start_28444__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28419_28443,(0),null);
var end_28445__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28419_28443,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28422_28446 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28423_28447 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_28444__$1,null,end_28445__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_28442),(3))) && ((cljs.core.second(arg_28442) instanceof cljs.core.Keyword))){
var vec__28424_28448 = arg_28442;
var ns_28449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28424_28448,(0),null);
var kw_28450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28424_28448,(1),null);
var lis_28451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28424_28448,(2),null);
var fexpr__28427_28452 = (function (){var format_in__27466__auto__ = "~w ~w ";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (args_28437__$1,format_in__27466__auto__,cf__27467__auto__,vec__28424_28448,ns_28449,kw_28450,lis_28451,_STAR_current_level_STAR_28422_28446,_STAR_current_length_STAR_28423_28447,vec__28419_28443,start_28444__$1,end_28445__$1,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args){
return (function() { 
var G__28453__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28453 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28454__i = 0, G__28454__a = new Array(arguments.length -  0);
while (G__28454__i < G__28454__a.length) {G__28454__a[G__28454__i] = arguments[G__28454__i + 0]; ++G__28454__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28454__a,0,null);
} 
return G__28453__delegate.call(this,args__27468__auto__);};
G__28453.cljs$lang$maxFixedArity = 0;
G__28453.cljs$lang$applyTo = (function (arglist__28455){
var args__27468__auto__ = cljs.core.seq(arglist__28455);
return G__28453__delegate(args__27468__auto__);
});
G__28453.cljs$core$IFn$_invoke$arity$variadic = G__28453__delegate;
return G__28453;
})()
;
;})(args_28437__$1,format_in__27466__auto__,cf__27467__auto__,vec__28424_28448,ns_28449,kw_28450,lis_28451,_STAR_current_level_STAR_28422_28446,_STAR_current_length_STAR_28423_28447,vec__28419_28443,start_28444__$1,end_28445__$1,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args))
})();
(fexpr__28427_28452.cljs$core$IFn$_invoke$arity$2 ? fexpr__28427_28452.cljs$core$IFn$_invoke$arity$2(ns_28449,kw_28450) : fexpr__28427_28452.call(null,ns_28449,kw_28450));

if(cljs.core.sequential_QMARK_(lis_28451)){
var fexpr__28428_28456 = (function (){var format_in__27466__auto__ = ((cljs.core.vector_QMARK_(lis_28451))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (args_28437__$1,format_in__27466__auto__,cf__27467__auto__,vec__28424_28448,ns_28449,kw_28450,lis_28451,_STAR_current_level_STAR_28422_28446,_STAR_current_length_STAR_28423_28447,vec__28419_28443,start_28444__$1,end_28445__$1,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args){
return (function() { 
var G__28457__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28457 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28458__i = 0, G__28458__a = new Array(arguments.length -  0);
while (G__28458__i < G__28458__a.length) {G__28458__a[G__28458__i] = arguments[G__28458__i + 0]; ++G__28458__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28458__a,0,null);
} 
return G__28457__delegate.call(this,args__27468__auto__);};
G__28457.cljs$lang$maxFixedArity = 0;
G__28457.cljs$lang$applyTo = (function (arglist__28459){
var args__27468__auto__ = cljs.core.seq(arglist__28459);
return G__28457__delegate(args__27468__auto__);
});
G__28457.cljs$core$IFn$_invoke$arity$variadic = G__28457__delegate;
return G__28457;
})()
;
;})(args_28437__$1,format_in__27466__auto__,cf__27467__auto__,vec__28424_28448,ns_28449,kw_28450,lis_28451,_STAR_current_level_STAR_28422_28446,_STAR_current_length_STAR_28423_28447,vec__28419_28443,start_28444__$1,end_28445__$1,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args))
})();
(fexpr__28428_28456.cljs$core$IFn$_invoke$arity$1 ? fexpr__28428_28456.cljs$core$IFn$_invoke$arity$1(lis_28451) : fexpr__28428_28456.call(null,lis_28451));
} else {
cljs.pprint.write_out(lis_28451);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27466__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (args_28437__$1,format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28422_28446,_STAR_current_length_STAR_28423_28447,vec__28419_28443,start_28444__$1,end_28445__$1,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args){
return (function() { 
var G__28460__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28460 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28461__i = 0, G__28461__a = new Array(arguments.length -  0);
while (G__28461__i < G__28461__a.length) {G__28461__a[G__28461__i] = arguments[G__28461__i + 0]; ++G__28461__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28461__a,0,null);
} 
return G__28460__delegate.call(this,args__27468__auto__);};
G__28460.cljs$lang$maxFixedArity = 0;
G__28460.cljs$lang$applyTo = (function (arglist__28462){
var args__27468__auto__ = cljs.core.seq(arglist__28462);
return G__28460__delegate(args__27468__auto__);
});
G__28460.cljs$core$IFn$_invoke$arity$variadic = G__28460__delegate;
return G__28460;
})()
;
;})(args_28437__$1,format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28422_28446,_STAR_current_length_STAR_28423_28447,vec__28419_28443,start_28444__$1,end_28445__$1,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args))
})(),arg_28442);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28423_28447;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28422_28446;
}}


if(cljs.core.next(args_28437__$1)){
var fexpr__28429_28463 = (function (){var format_in__27466__auto__ = "~_";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (args_28437__$1,format_in__27466__auto__,cf__27467__auto__,vec__28419_28443,start_28444__$1,end_28445__$1,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args){
return (function() { 
var G__28464__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28464 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28465__i = 0, G__28465__a = new Array(arguments.length -  0);
while (G__28465__i < G__28465__a.length) {G__28465__a[G__28465__i] = arguments[G__28465__i + 0]; ++G__28465__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28465__a,0,null);
} 
return G__28464__delegate.call(this,args__27468__auto__);};
G__28464.cljs$lang$maxFixedArity = 0;
G__28464.cljs$lang$applyTo = (function (arglist__28466){
var args__27468__auto__ = cljs.core.seq(arglist__28466);
return G__28464__delegate(args__27468__auto__);
});
G__28464.cljs$core$IFn$_invoke$arity$variadic = G__28464__delegate;
return G__28464;
})()
;
;})(args_28437__$1,format_in__27466__auto__,cf__27467__auto__,vec__28419_28443,start_28444__$1,end_28445__$1,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args))
})();
(fexpr__28429_28463.cljs$core$IFn$_invoke$arity$0 ? fexpr__28429_28463.cljs$core$IFn$_invoke$arity$0() : fexpr__28429_28463.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_28442);

if(cljs.core.next(args_28437__$1)){
var fexpr__28430_28467 = (function (){var format_in__27466__auto__ = "~:_";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (args_28437__$1,format_in__27466__auto__,cf__27467__auto__,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args){
return (function() { 
var G__28468__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28468 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28469__i = 0, G__28469__a = new Array(arguments.length -  0);
while (G__28469__i < G__28469__a.length) {G__28469__a[G__28469__i] = arguments[G__28469__i + 0]; ++G__28469__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28469__a,0,null);
} 
return G__28468__delegate.call(this,args__27468__auto__);};
G__28468.cljs$lang$maxFixedArity = 0;
G__28468.cljs$lang$applyTo = (function (arglist__28470){
var args__27468__auto__ = cljs.core.seq(arglist__28470);
return G__28468__delegate(args__27468__auto__);
});
G__28468.cljs$core$IFn$_invoke$arity$variadic = G__28468__delegate;
return G__28468;
})()
;
;})(args_28437__$1,format_in__27466__auto__,cf__27467__auto__,arg_28442,_STAR_current_level_STAR_28415_28431,_STAR_current_length_STAR_28416_28432,vec__28409,start,end,vec__28412,seq__28413,first__28414,seq__28413__$1,keyw,args))
})();
(fexpr__28430_28467.cljs$core$IFn$_invoke$arity$0 ? fexpr__28430_28467.cljs$core$IFn$_invoke$arity$0() : fexpr__28430_28467.call(null));
} else {
}
}

var G__28471 = cljs.core.next(args_28437__$1);
args_28437__$1 = G__28471;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28416_28432;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28415_28431;
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
var vec__28472 = alis;
var seq__28473 = cljs.core.seq(vec__28472);
var first__28474 = cljs.core.first(seq__28473);
var seq__28473__$1 = cljs.core.next(seq__28473);
var ns_sym = first__28474;
var first__28474__$1 = cljs.core.first(seq__28473__$1);
var seq__28473__$2 = cljs.core.next(seq__28473__$1);
var ns_name = first__28474__$1;
var stuff = seq__28473__$2;
var vec__28475 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28475,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28475,(1),null);
var vec__28478 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28478,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28478,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28481_28488 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28482_28489 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__28483_28490 = (function (){var format_in__27466__auto__ = "~w ~1I~@_~w";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28481_28488,_STAR_current_length_STAR_28482_28489,vec__28472,seq__28473,first__28474,seq__28473__$1,ns_sym,first__28474__$1,seq__28473__$2,ns_name,stuff,vec__28475,doc_str,stuff__$1,vec__28478,attr_map,references){
return (function() { 
var G__28491__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28491 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28492__i = 0, G__28492__a = new Array(arguments.length -  0);
while (G__28492__i < G__28492__a.length) {G__28492__a[G__28492__i] = arguments[G__28492__i + 0]; ++G__28492__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28492__a,0,null);
} 
return G__28491__delegate.call(this,args__27468__auto__);};
G__28491.cljs$lang$maxFixedArity = 0;
G__28491.cljs$lang$applyTo = (function (arglist__28493){
var args__27468__auto__ = cljs.core.seq(arglist__28493);
return G__28491__delegate(args__27468__auto__);
});
G__28491.cljs$core$IFn$_invoke$arity$variadic = G__28491__delegate;
return G__28491;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28481_28488,_STAR_current_length_STAR_28482_28489,vec__28472,seq__28473,first__28474,seq__28473__$1,ns_sym,first__28474__$1,seq__28473__$2,ns_name,stuff,vec__28475,doc_str,stuff__$1,vec__28478,attr_map,references))
})();
(fexpr__28483_28490.cljs$core$IFn$_invoke$arity$2 ? fexpr__28483_28490.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__28483_28490.call(null,ns_sym,ns_name));

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
var fexpr__28484_28494 = (function (){var format_in__27466__auto__ = "~@:_";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28481_28488,_STAR_current_length_STAR_28482_28489,vec__28472,seq__28473,first__28474,seq__28473__$1,ns_sym,first__28474__$1,seq__28473__$2,ns_name,stuff,vec__28475,doc_str,stuff__$1,vec__28478,attr_map,references){
return (function() { 
var G__28495__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28495 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28496__i = 0, G__28496__a = new Array(arguments.length -  0);
while (G__28496__i < G__28496__a.length) {G__28496__a[G__28496__i] = arguments[G__28496__i + 0]; ++G__28496__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28496__a,0,null);
} 
return G__28495__delegate.call(this,args__27468__auto__);};
G__28495.cljs$lang$maxFixedArity = 0;
G__28495.cljs$lang$applyTo = (function (arglist__28497){
var args__27468__auto__ = cljs.core.seq(arglist__28497);
return G__28495__delegate(args__27468__auto__);
});
G__28495.cljs$core$IFn$_invoke$arity$variadic = G__28495__delegate;
return G__28495;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28481_28488,_STAR_current_length_STAR_28482_28489,vec__28472,seq__28473,first__28474,seq__28473__$1,ns_sym,first__28474__$1,seq__28473__$2,ns_name,stuff,vec__28475,doc_str,stuff__$1,vec__28478,attr_map,references))
})();
(fexpr__28484_28494.cljs$core$IFn$_invoke$arity$0 ? fexpr__28484_28494.cljs$core$IFn$_invoke$arity$0() : fexpr__28484_28494.call(null));
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
var G__28486_28498 = attr_map;
var G__28487_28499 = cljs.core.seq(references);
var fexpr__28485_28500 = (function (){var format_in__27466__auto__ = "~w~:[~;~:@_~]";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,G__28486_28498,G__28487_28499,_STAR_current_level_STAR_28481_28488,_STAR_current_length_STAR_28482_28489,vec__28472,seq__28473,first__28474,seq__28473__$1,ns_sym,first__28474__$1,seq__28473__$2,ns_name,stuff,vec__28475,doc_str,stuff__$1,vec__28478,attr_map,references){
return (function() { 
var G__28501__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28501 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28502__i = 0, G__28502__a = new Array(arguments.length -  0);
while (G__28502__i < G__28502__a.length) {G__28502__a[G__28502__i] = arguments[G__28502__i + 0]; ++G__28502__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28502__a,0,null);
} 
return G__28501__delegate.call(this,args__27468__auto__);};
G__28501.cljs$lang$maxFixedArity = 0;
G__28501.cljs$lang$applyTo = (function (arglist__28503){
var args__27468__auto__ = cljs.core.seq(arglist__28503);
return G__28501__delegate(args__27468__auto__);
});
G__28501.cljs$core$IFn$_invoke$arity$variadic = G__28501__delegate;
return G__28501;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,G__28486_28498,G__28487_28499,_STAR_current_level_STAR_28481_28488,_STAR_current_length_STAR_28482_28489,vec__28472,seq__28473,first__28474,seq__28473__$1,ns_sym,first__28474__$1,seq__28473__$2,ns_name,stuff,vec__28475,doc_str,stuff__$1,vec__28478,attr_map,references))
})();
(fexpr__28485_28500.cljs$core$IFn$_invoke$arity$2 ? fexpr__28485_28500.cljs$core$IFn$_invoke$arity$2(G__28486_28498,G__28487_28499) : fexpr__28485_28500.call(null,G__28486_28498,G__28487_28499));
} else {
}

var references_28504__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_28504__$1));

var temp__5457__auto___28505 = cljs.core.next(references_28504__$1);
if(temp__5457__auto___28505){
var references_28506__$2 = temp__5457__auto___28505;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28507 = references_28506__$2;
references_28504__$1 = G__28507;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28482_28489;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28481_28488;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__27466__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28508__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28508 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28509__i = 0, G__28509__a = new Array(arguments.length -  0);
while (G__28509__i < G__28509__a.length) {G__28509__a[G__28509__i] = arguments[G__28509__i + 0]; ++G__28509__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28509__a,0,null);
} 
return G__28508__delegate.call(this,args__27468__auto__);};
G__28508.cljs$lang$maxFixedArity = 0;
G__28508.cljs$lang$applyTo = (function (arglist__28510){
var args__27468__auto__ = cljs.core.seq(arglist__28510);
return G__28508__delegate(args__27468__auto__);
});
G__28508.cljs$core$IFn$_invoke$arity$variadic = G__28508__delegate;
return G__28508;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__28511_28514 = (function (){var format_in__27466__auto__ = " ~_";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28515__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28515 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28516__i = 0, G__28516__a = new Array(arguments.length -  0);
while (G__28516__i < G__28516__a.length) {G__28516__a[G__28516__i] = arguments[G__28516__i + 0]; ++G__28516__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28516__a,0,null);
} 
return G__28515__delegate.call(this,args__27468__auto__);};
G__28515.cljs$lang$maxFixedArity = 0;
G__28515.cljs$lang$applyTo = (function (arglist__28517){
var args__27468__auto__ = cljs.core.seq(arglist__28517);
return G__28515__delegate(args__27468__auto__);
});
G__28515.cljs$core$IFn$_invoke$arity$variadic = G__28515__delegate;
return G__28515;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
})();
(fexpr__28511_28514.cljs$core$IFn$_invoke$arity$0 ? fexpr__28511_28514.cljs$core$IFn$_invoke$arity$0() : fexpr__28511_28514.call(null));
} else {
var fexpr__28512_28518 = (function (){var format_in__27466__auto__ = " ~@_";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28519__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28519 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28520__i = 0, G__28520__a = new Array(arguments.length -  0);
while (G__28520__i < G__28520__a.length) {G__28520__a[G__28520__i] = arguments[G__28520__i + 0]; ++G__28520__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28520__a,0,null);
} 
return G__28519__delegate.call(this,args__27468__auto__);};
G__28519.cljs$lang$maxFixedArity = 0;
G__28519.cljs$lang$applyTo = (function (arglist__28521){
var args__27468__auto__ = cljs.core.seq(arglist__28521);
return G__28519__delegate(args__27468__auto__);
});
G__28519.cljs$core$IFn$_invoke$arity$variadic = G__28519__delegate;
return G__28519;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
})();
(fexpr__28512_28518.cljs$core$IFn$_invoke$arity$0 ? fexpr__28512_28518.cljs$core$IFn$_invoke$arity$0() : fexpr__28512_28518.call(null));
}

var fexpr__28513 = (function (){var format_in__27466__auto__ = "~{~w~^ ~_~}";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28522__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28522 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28523__i = 0, G__28523__a = new Array(arguments.length -  0);
while (G__28523__i < G__28523__a.length) {G__28523__a[G__28523__i] = arguments[G__28523__i + 0]; ++G__28523__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28523__a,0,null);
} 
return G__28522__delegate.call(this,args__27468__auto__);};
G__28522.cljs$lang$maxFixedArity = 0;
G__28522.cljs$lang$applyTo = (function (arglist__28524){
var args__27468__auto__ = cljs.core.seq(arglist__28524);
return G__28522__delegate(args__27468__auto__);
});
G__28522.cljs$core$IFn$_invoke$arity$variadic = G__28522__delegate;
return G__28522;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
})();
return (fexpr__28513.cljs$core$IFn$_invoke$arity$1 ? fexpr__28513.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__28513.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__28525 = (function (){var format_in__27466__auto__ = " ~_~{~w~^ ~_~}";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28526__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28526 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28527__i = 0, G__28527__a = new Array(arguments.length -  0);
while (G__28527__i < G__28527__a.length) {G__28527__a[G__28527__i] = arguments[G__28527__i + 0]; ++G__28527__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28527__a,0,null);
} 
return G__28526__delegate.call(this,args__27468__auto__);};
G__28526.cljs$lang$maxFixedArity = 0;
G__28526.cljs$lang$applyTo = (function (arglist__28528){
var args__27468__auto__ = cljs.core.seq(arglist__28528);
return G__28526__delegate(args__27468__auto__);
});
G__28526.cljs$core$IFn$_invoke$arity$variadic = G__28526__delegate;
return G__28526;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
})();
return (fexpr__28525.cljs$core$IFn$_invoke$arity$1 ? fexpr__28525.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__28525.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__28529 = alis;
var seq__28530 = cljs.core.seq(vec__28529);
var first__28531 = cljs.core.first(seq__28530);
var seq__28530__$1 = cljs.core.next(seq__28530);
var defn_sym = first__28531;
var first__28531__$1 = cljs.core.first(seq__28530__$1);
var seq__28530__$2 = cljs.core.next(seq__28530__$1);
var defn_name = first__28531__$1;
var stuff = seq__28530__$2;
var vec__28532 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28532,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28532,(1),null);
var vec__28535 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28538_28543 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28539_28544 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__28540_28545 = (function (){var format_in__27466__auto__ = "~w ~1I~@_~w";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28538_28543,_STAR_current_length_STAR_28539_28544,vec__28529,seq__28530,first__28531,seq__28530__$1,defn_sym,first__28531__$1,seq__28530__$2,defn_name,stuff,vec__28532,doc_str,stuff__$1,vec__28535,attr_map,stuff__$2){
return (function() { 
var G__28546__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28546 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28547__i = 0, G__28547__a = new Array(arguments.length -  0);
while (G__28547__i < G__28547__a.length) {G__28547__a[G__28547__i] = arguments[G__28547__i + 0]; ++G__28547__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28547__a,0,null);
} 
return G__28546__delegate.call(this,args__27468__auto__);};
G__28546.cljs$lang$maxFixedArity = 0;
G__28546.cljs$lang$applyTo = (function (arglist__28548){
var args__27468__auto__ = cljs.core.seq(arglist__28548);
return G__28546__delegate(args__27468__auto__);
});
G__28546.cljs$core$IFn$_invoke$arity$variadic = G__28546__delegate;
return G__28546;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28538_28543,_STAR_current_length_STAR_28539_28544,vec__28529,seq__28530,first__28531,seq__28530__$1,defn_sym,first__28531__$1,seq__28530__$2,defn_name,stuff,vec__28532,doc_str,stuff__$1,vec__28535,attr_map,stuff__$2))
})();
(fexpr__28540_28545.cljs$core$IFn$_invoke$arity$2 ? fexpr__28540_28545.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__28540_28545.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__28541_28549 = (function (){var format_in__27466__auto__ = " ~_~w";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28538_28543,_STAR_current_length_STAR_28539_28544,vec__28529,seq__28530,first__28531,seq__28530__$1,defn_sym,first__28531__$1,seq__28530__$2,defn_name,stuff,vec__28532,doc_str,stuff__$1,vec__28535,attr_map,stuff__$2){
return (function() { 
var G__28550__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28550 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28551__i = 0, G__28551__a = new Array(arguments.length -  0);
while (G__28551__i < G__28551__a.length) {G__28551__a[G__28551__i] = arguments[G__28551__i + 0]; ++G__28551__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28551__a,0,null);
} 
return G__28550__delegate.call(this,args__27468__auto__);};
G__28550.cljs$lang$maxFixedArity = 0;
G__28550.cljs$lang$applyTo = (function (arglist__28552){
var args__27468__auto__ = cljs.core.seq(arglist__28552);
return G__28550__delegate(args__27468__auto__);
});
G__28550.cljs$core$IFn$_invoke$arity$variadic = G__28550__delegate;
return G__28550;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28538_28543,_STAR_current_length_STAR_28539_28544,vec__28529,seq__28530,first__28531,seq__28530__$1,defn_sym,first__28531__$1,seq__28530__$2,defn_name,stuff,vec__28532,doc_str,stuff__$1,vec__28535,attr_map,stuff__$2))
})();
(fexpr__28541_28549.cljs$core$IFn$_invoke$arity$1 ? fexpr__28541_28549.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__28541_28549.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__28542_28553 = (function (){var format_in__27466__auto__ = " ~_~w";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28538_28543,_STAR_current_length_STAR_28539_28544,vec__28529,seq__28530,first__28531,seq__28530__$1,defn_sym,first__28531__$1,seq__28530__$2,defn_name,stuff,vec__28532,doc_str,stuff__$1,vec__28535,attr_map,stuff__$2){
return (function() { 
var G__28554__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28554 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28555__i = 0, G__28555__a = new Array(arguments.length -  0);
while (G__28555__i < G__28555__a.length) {G__28555__a[G__28555__i] = arguments[G__28555__i + 0]; ++G__28555__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28555__a,0,null);
} 
return G__28554__delegate.call(this,args__27468__auto__);};
G__28554.cljs$lang$maxFixedArity = 0;
G__28554.cljs$lang$applyTo = (function (arglist__28556){
var args__27468__auto__ = cljs.core.seq(arglist__28556);
return G__28554__delegate(args__27468__auto__);
});
G__28554.cljs$core$IFn$_invoke$arity$variadic = G__28554__delegate;
return G__28554;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28538_28543,_STAR_current_length_STAR_28539_28544,vec__28529,seq__28530,first__28531,seq__28530__$1,defn_sym,first__28531__$1,seq__28530__$2,defn_name,stuff,vec__28532,doc_str,stuff__$1,vec__28535,attr_map,stuff__$2))
})();
(fexpr__28542_28553.cljs$core$IFn$_invoke$arity$1 ? fexpr__28542_28553.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__28542_28553.call(null,attr_map));
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28539_28544;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28538_28543;
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
var _STAR_current_level_STAR_28557_28562 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28558_28563 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28559_28564 = (0);
var binding_28565 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28559_28564 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_28565)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28560_28566 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28561_28567 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_28565));

if(cljs.core.next(binding_28565)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_28565));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28561_28567;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28560_28566;
}}


if(cljs.core.next(cljs.core.rest(binding_28565))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28568 = (length_count28559_28564 + (1));
var G__28569 = cljs.core.next(cljs.core.rest(binding_28565));
length_count28559_28564 = G__28568;
binding_28565 = G__28569;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28558_28563;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28557_28562;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28570_28575 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28571_28576 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__28572_28577 = (function (){var format_in__27466__auto__ = "~w ~1I~@_";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28570_28575,_STAR_current_length_STAR_28571_28576,base_sym){
return (function() { 
var G__28578__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28578 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28579__i = 0, G__28579__a = new Array(arguments.length -  0);
while (G__28579__i < G__28579__a.length) {G__28579__a[G__28579__i] = arguments[G__28579__i + 0]; ++G__28579__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28579__a,0,null);
} 
return G__28578__delegate.call(this,args__27468__auto__);};
G__28578.cljs$lang$maxFixedArity = 0;
G__28578.cljs$lang$applyTo = (function (arglist__28580){
var args__27468__auto__ = cljs.core.seq(arglist__28580);
return G__28578__delegate(args__27468__auto__);
});
G__28578.cljs$core$IFn$_invoke$arity$variadic = G__28578__delegate;
return G__28578;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28570_28575,_STAR_current_length_STAR_28571_28576,base_sym))
})();
(fexpr__28572_28577.cljs$core$IFn$_invoke$arity$1 ? fexpr__28572_28577.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__28572_28577.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__28574_28581 = cljs.core.next(cljs.core.rest(alis));
var fexpr__28573_28582 = (function (){var format_in__27466__auto__ = " ~_~{~w~^ ~_~}";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,G__28574_28581,_STAR_current_level_STAR_28570_28575,_STAR_current_length_STAR_28571_28576,base_sym){
return (function() { 
var G__28583__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28583 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28584__i = 0, G__28584__a = new Array(arguments.length -  0);
while (G__28584__i < G__28584__a.length) {G__28584__a[G__28584__i] = arguments[G__28584__i + 0]; ++G__28584__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28584__a,0,null);
} 
return G__28583__delegate.call(this,args__27468__auto__);};
G__28583.cljs$lang$maxFixedArity = 0;
G__28583.cljs$lang$applyTo = (function (arglist__28585){
var args__27468__auto__ = cljs.core.seq(arglist__28585);
return G__28583__delegate(args__27468__auto__);
});
G__28583.cljs$core$IFn$_invoke$arity$variadic = G__28583__delegate;
return G__28583;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,G__28574_28581,_STAR_current_level_STAR_28570_28575,_STAR_current_length_STAR_28571_28576,base_sym))
})();
(fexpr__28573_28582.cljs$core$IFn$_invoke$arity$1 ? fexpr__28573_28582.cljs$core$IFn$_invoke$arity$1(G__28574_28581) : fexpr__28573_28582.call(null,G__28574_28581));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28571_28576;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28570_28575;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__27466__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__){
return (function() { 
var G__28586__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28586 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28587__i = 0, G__28587__a = new Array(arguments.length -  0);
while (G__28587__i < G__28587__a.length) {G__28587__a[G__28587__i] = arguments[G__28587__i + 0]; ++G__28587__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28587__a,0,null);
} 
return G__28586__delegate.call(this,args__27468__auto__);};
G__28586.cljs$lang$maxFixedArity = 0;
G__28586.cljs$lang$applyTo = (function (arglist__28588){
var args__27468__auto__ = cljs.core.seq(arglist__28588);
return G__28586__delegate(args__27468__auto__);
});
G__28586.cljs$core$IFn$_invoke$arity$variadic = G__28586__delegate;
return G__28586;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28589_28594 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28590_28595 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count28591_28596 = (0);
var alis_28597__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28591_28596 < cljs.core._STAR_print_length_STAR_))){
if(alis_28597__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28592_28598 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28593_28599 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_28597__$1));

if(cljs.core.next(alis_28597__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_28597__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28593_28599;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28592_28598;
}}


if(cljs.core.next(cljs.core.rest(alis_28597__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28600 = (length_count28591_28596 + (1));
var G__28601 = cljs.core.next(cljs.core.rest(alis_28597__$1));
length_count28591_28596 = G__28600;
alis_28597__$1 = G__28601;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28590_28595;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28589_28594;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28602_28607 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28603_28608 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27466__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28602_28607,_STAR_current_length_STAR_28603_28608){
return (function() { 
var G__28609__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28609 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28610__i = 0, G__28610__a = new Array(arguments.length -  0);
while (G__28610__i < G__28610__a.length) {G__28610__a[G__28610__i] = arguments[G__28610__i + 0]; ++G__28610__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28610__a,0,null);
} 
return G__28609__delegate.call(this,args__27468__auto__);};
G__28609.cljs$lang$maxFixedArity = 0;
G__28609.cljs$lang$applyTo = (function (arglist__28611){
var args__27468__auto__ = cljs.core.seq(arglist__28611);
return G__28609__delegate(args__27468__auto__);
});
G__28609.cljs$core$IFn$_invoke$arity$variadic = G__28609__delegate;
return G__28609;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_current_level_STAR_28602_28607,_STAR_current_length_STAR_28603_28608))
})(),alis);

var length_count28604_28612 = (0);
var alis_28613__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28604_28612 < cljs.core._STAR_print_length_STAR_))){
if(alis_28613__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28605_28614 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28606_28615 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_28613__$1));

if(cljs.core.next(alis_28613__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_28613__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28606_28615;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28605_28614;
}}


if(cljs.core.next(cljs.core.rest(alis_28613__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28616 = (length_count28604_28612 + (1));
var G__28617 = cljs.core.next(cljs.core.rest(alis_28613__$1));
length_count28604_28612 = G__28616;
alis_28613__$1 = G__28617;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28603_28608;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28602_28607;
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
var _STAR_symbol_map_STAR_28620 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_28620,args,nlis){
return (function (p1__28618_SHARP_,p2__28619_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28618_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28619_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_28620,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__28621 = (function (){var format_in__27466__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__27467__auto__ = ((typeof format_in__27466__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27466__auto__) : cljs.pprint.cached_compile.call(null,format_in__27466__auto__)):format_in__27466__auto__);
return ((function (format_in__27466__auto__,cf__27467__auto__,_STAR_symbol_map_STAR_28620,args,nlis){
return (function() { 
var G__28622__delegate = function (args__27468__auto__){
var navigator__27469__auto__ = cljs.pprint.init_navigator(args__27468__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27467__auto__,navigator__27469__auto__);
};
var G__28622 = function (var_args){
var args__27468__auto__ = null;
if (arguments.length > 0) {
var G__28623__i = 0, G__28623__a = new Array(arguments.length -  0);
while (G__28623__i < G__28623__a.length) {G__28623__a[G__28623__i] = arguments[G__28623__i + 0]; ++G__28623__i;}
  args__27468__auto__ = new cljs.core.IndexedSeq(G__28623__a,0,null);
} 
return G__28622__delegate.call(this,args__27468__auto__);};
G__28622.cljs$lang$maxFixedArity = 0;
G__28622.cljs$lang$applyTo = (function (arglist__28624){
var args__27468__auto__ = cljs.core.seq(arglist__28624);
return G__28622__delegate(args__27468__auto__);
});
G__28622.cljs$core$IFn$_invoke$arity$variadic = G__28622__delegate;
return G__28622;
})()
;
;})(format_in__27466__auto__,cf__27467__auto__,_STAR_symbol_map_STAR_28620,args,nlis))
})();
return (fexpr__28621.cljs$core$IFn$_invoke$arity$1 ? fexpr__28621.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__28621.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_28620;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28625_28628 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28626_28629 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count28627_28630 = (0);
var alis_28631__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28627_28630 < cljs.core._STAR_print_length_STAR_))){
if(alis_28631__$1){
cljs.pprint.write_out(cljs.core.first(alis_28631__$1));

if(cljs.core.next(alis_28631__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28632 = (length_count28627_28630 + (1));
var G__28633 = cljs.core.next(alis_28631__$1);
length_count28627_28630 = G__28632;
alis_28631__$1 = G__28633;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28626_28629;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28625_28628;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9270__auto__ = (function cljs$pprint$two_forms_$_iter__28634(s__28635){
return (new cljs.core.LazySeq(null,(function (){
var s__28635__$1 = s__28635;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28635__$1);
if(temp__5457__auto__){
var s__28635__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28635__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28635__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28637 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28636 = (0);
while(true){
if((i__28636 < size__9269__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28636);
cljs.core.chunk_append(b__28637,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__28638 = (i__28636 + (1));
i__28636 = G__28638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28637),cljs$pprint$two_forms_$_iter__28634(cljs.core.chunk_rest(s__28635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28637),null);
}
} else {
var x = cljs.core.first(s__28635__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__28634(cljs.core.rest(s__28635__$2)));
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
return (function (p1__28639_SHARP_){
var vec__28640 = p1__28639_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28640,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28640,(1),null);
if(cljs.core.not((function (){var or__8388__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__28639_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5455__auto__ = (function (){var G__28643 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__28643) : cljs.pprint._STAR_code_table_STAR_.call(null,G__28643));
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
var G__28648 = arguments.length;
switch (G__28648) {
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
var _STAR_print_newline_STAR_28649 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_28649){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_28649){
return (function (p1__28644_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__28644_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_28649))
,rows));
});})(_STAR_print_newline_STAR_28649))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_28649){
return (function (p1__28645_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__28645_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_28649))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_28649){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__9270__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_28649){
return (function cljs$pprint$iter__28650(s__28651){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_28649){
return (function (){
var s__28651__$1 = s__28651;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28651__$1);
if(temp__5457__auto__){
var s__28651__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28651__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28651__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28653 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28652 = (0);
while(true){
if((i__28652 < size__9269__auto__)){
var vec__28654 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28652);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(1),null);
cljs.core.chunk_append(b__28653,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__28665 = (i__28652 + (1));
i__28652 = G__28665;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28653),cljs$pprint$iter__28650(cljs.core.chunk_rest(s__28651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28653),null);
}
} else {
var vec__28657 = cljs.core.first(s__28651__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__28650(cljs.core.rest(s__28651__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_28649))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_28649))
;
return iter__9270__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__9270__auto__,widths,spacers,_STAR_print_newline_STAR_28649){
return (function (p1__28646_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__28646_SHARP_);
});})(iter__9270__auto__,widths,spacers,_STAR_print_newline_STAR_28649))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_28649))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__28660 = cljs.core.seq(rows);
var chunk__28661 = null;
var count__28662 = (0);
var i__28663 = (0);
while(true){
if((i__28663 < count__28662)){
var row = chunk__28661.cljs$core$IIndexed$_nth$arity$2(null,i__28663);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__28666 = seq__28660;
var G__28667 = chunk__28661;
var G__28668 = count__28662;
var G__28669 = (i__28663 + (1));
seq__28660 = G__28666;
chunk__28661 = G__28667;
count__28662 = G__28668;
i__28663 = G__28669;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28660);
if(temp__5457__auto__){
var seq__28660__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28660__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__28660__$1);
var G__28670 = cljs.core.chunk_rest(seq__28660__$1);
var G__28671 = c__9319__auto__;
var G__28672 = cljs.core.count(c__9319__auto__);
var G__28673 = (0);
seq__28660 = G__28670;
chunk__28661 = G__28671;
count__28662 = G__28672;
i__28663 = G__28673;
continue;
} else {
var row = cljs.core.first(seq__28660__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__28674 = cljs.core.next(seq__28660__$1);
var G__28675 = null;
var G__28676 = (0);
var G__28677 = (0);
seq__28660 = G__28674;
chunk__28661 = G__28675;
count__28662 = G__28676;
i__28663 = G__28677;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28649;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

