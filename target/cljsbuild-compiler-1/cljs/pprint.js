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
var len__9667__auto___27487 = arguments.length;
var i__9668__auto___27488 = (0);
while(true){
if((i__9668__auto___27488 < len__9667__auto___27487)){
args__9674__auto__.push((arguments[i__9668__auto___27488]));

var G__27489 = (i__9668__auto___27488 + (1));
i__9668__auto___27488 = G__27489;
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

cljs.pprint.print.cljs$lang$applyTo = (function (seq27486){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27486));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27491 = arguments.length;
var i__9668__auto___27492 = (0);
while(true){
if((i__9668__auto___27492 < len__9667__auto___27491)){
args__9674__auto__.push((arguments[i__9668__auto___27492]));

var G__27493 = (i__9668__auto___27492 + (1));
i__9668__auto___27492 = G__27493;
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

cljs.pprint.println.cljs$lang$applyTo = (function (seq27490){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27490));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__27494 = cljs.core._EQ_;
var expr__27495 = c;
if(cljs.core.truth_((function (){var G__27497 = "\b";
var G__27498 = expr__27495;
return (pred__27494.cljs$core$IFn$_invoke$arity$2 ? pred__27494.cljs$core$IFn$_invoke$arity$2(G__27497,G__27498) : pred__27494.call(null,G__27497,G__27498));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__27499 = "\t";
var G__27500 = expr__27495;
return (pred__27494.cljs$core$IFn$_invoke$arity$2 ? pred__27494.cljs$core$IFn$_invoke$arity$2(G__27499,G__27500) : pred__27494.call(null,G__27499,G__27500));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__27501 = "\n";
var G__27502 = expr__27495;
return (pred__27494.cljs$core$IFn$_invoke$arity$2 ? pred__27494.cljs$core$IFn$_invoke$arity$2(G__27501,G__27502) : pred__27494.call(null,G__27501,G__27502));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__27503 = "\f";
var G__27504 = expr__27495;
return (pred__27494.cljs$core$IFn$_invoke$arity$2 ? pred__27494.cljs$core$IFn$_invoke$arity$2(G__27503,G__27504) : pred__27494.call(null,G__27503,G__27504));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__27505 = "\r";
var G__27506 = expr__27495;
return (pred__27494.cljs$core$IFn$_invoke$arity$2 ? pred__27494.cljs$core$IFn$_invoke$arity$2(G__27505,G__27506) : pred__27494.call(null,G__27505,G__27506));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__27507 = "\"";
var G__27508 = expr__27495;
return (pred__27494.cljs$core$IFn$_invoke$arity$2 ? pred__27494.cljs$core$IFn$_invoke$arity$2(G__27507,G__27508) : pred__27494.call(null,G__27507,G__27508));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__27509 = "\\";
var G__27510 = expr__27495;
return (pred__27494.cljs$core$IFn$_invoke$arity$2 ? pred__27494.cljs$core$IFn$_invoke$arity$2(G__27509,G__27510) : pred__27494.call(null,G__27509,G__27510));
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
var len__9667__auto___27512 = arguments.length;
var i__9668__auto___27513 = (0);
while(true){
if((i__9668__auto___27513 < len__9667__auto___27512)){
args__9674__auto__.push((arguments[i__9668__auto___27513]));

var G__27514 = (i__9668__auto___27513 + (1));
i__9668__auto___27513 = G__27514;
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

cljs.pprint.pr.cljs$lang$applyTo = (function (seq27511){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27511));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9674__auto__ = [];
var len__9667__auto___27516 = arguments.length;
var i__9668__auto___27517 = (0);
while(true){
if((i__9668__auto___27517 < len__9667__auto___27516)){
args__9674__auto__.push((arguments[i__9668__auto___27517]));

var G__27518 = (i__9668__auto___27517 + (1));
i__9668__auto___27517 = G__27518;
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

cljs.pprint.prn.cljs$lang$applyTo = (function (seq27515){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27515));
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
var vec__27519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27519,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27519,(1),null);
var G__27522 = new_context;
var G__27523 = remainder;
var G__27524 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27522;
lis__$1 = G__27523;
acc = G__27524;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27525,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27525,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__27528 = new_context;
var G__27529 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27528;
acc = G__27529;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27530 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27530,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27530,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27530,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__27533 = new_context;
var G__27534 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27533;
acc = G__27534;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$unzip_map_$_iter__27535(s__27536){
return (new cljs.core.LazySeq(null,(function (){
var s__27536__$1 = s__27536;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27536__$1);
if(temp__5457__auto__){
var s__27536__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27536__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27536__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27538 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27537 = (0);
while(true){
if((i__27537 < size__9269__auto__)){
var vec__27539 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27537);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27539,(0),null);
var vec__27542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27539,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,(1),null);
cljs.core.chunk_append(b__27538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__27567 = (i__27537 + (1));
i__27537 = G__27567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27538),cljs$pprint$unzip_map_$_iter__27535(cljs.core.chunk_rest(s__27536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27538),null);
}
} else {
var vec__27545 = cljs.core.first(s__27536__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27545,(0),null);
var vec__27548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27545,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__27535(cljs.core.rest(s__27536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$unzip_map_$_iter__27551(s__27552){
return (new cljs.core.LazySeq(null,(function (){
var s__27552__$1 = s__27552;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27552__$1);
if(temp__5457__auto__){
var s__27552__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27552__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27552__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27554 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27553 = (0);
while(true){
if((i__27553 < size__9269__auto__)){
var vec__27555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27553);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27555,(0),null);
var vec__27558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27555,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27558,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27558,(1),null);
cljs.core.chunk_append(b__27554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__27568 = (i__27553 + (1));
i__27553 = G__27568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27554),cljs$pprint$unzip_map_$_iter__27551(cljs.core.chunk_rest(s__27552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27554),null);
}
} else {
var vec__27561 = cljs.core.first(s__27552__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27561,(0),null);
var vec__27564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27561,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27564,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27564,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__27551(cljs.core.rest(s__27552__$2)));
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

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9270__auto__ = (function cljs$pprint$tuple_map_$_iter__27569(s__27570){
return (new cljs.core.LazySeq(null,(function (){
var s__27570__$1 = s__27570;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27570__$1);
if(temp__5457__auto__){
var s__27570__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27570__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__27570__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__27572 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__27571 = (0);
while(true){
if((i__27571 < size__9269__auto__)){
var vec__27573 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__27571);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27573,(1),null);
cljs.core.chunk_append(b__27572,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__27579 = (i__27571 + (1));
i__27571 = G__27579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27572),cljs$pprint$tuple_map_$_iter__27569(cljs.core.chunk_rest(s__27570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27572),null);
}
} else {
var vec__27576 = cljs.core.first(s__27570__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27576,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__27569(cljs.core.rest(s__27570__$2)));
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
var G__27580 = (n - (1));
n = G__27580;
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
var G__27581 = (n + (1));
n = G__27581;
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
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__27583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__27583) : test.call(null,G__27583));
})()))){
return pos;
} else {
var G__27584 = (pos + (1));
pos = G__27584;
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
var G__27585 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__27585) : sym.call(null,G__27585));
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
var G__27588 = arguments.length;
switch (G__27588) {
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
if(typeof cljs.pprint.t_cljs$pprint27589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27589 = (function (writer,max_columns,fields,meta27590){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta27590 = meta27590;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_27591,meta27590__$1){
var self__ = this;
var _27591__$1 = this;
return (new cljs.pprint.t_cljs$pprint27589(self__.writer,self__.max_columns,self__.fields,meta27590__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint27589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_27591){
var self__ = this;
var _27591__$1 = this;
return self__.meta27590;
});})(fields))
;

cljs.pprint.t_cljs$pprint27589.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint27589.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint27589.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27592 = cljs.core._EQ_;
var expr__27593 = cljs.core.type(x);
if(cljs.core.truth_((pred__27592.cljs$core$IFn$_invoke$arity$2 ? pred__27592.cljs$core$IFn$_invoke$arity$2(String,expr__27593) : pred__27592.call(null,String,expr__27593)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__27592,expr__27593,this$__$1,fields){
return (function (p1__27586_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27586_SHARP_,"\n");
});})(s,nl,pred__27592,expr__27593,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__27592.cljs$core$IFn$_invoke$arity$2 ? pred__27592.cljs$core$IFn$_invoke$arity$2(Number,expr__27593) : pred__27592.call(null,Number,expr__27593)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27593)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint27589.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta27590], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint27589.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27589.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27589";

cljs.pprint.t_cljs$pprint27589.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint27589");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint27589 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint27589(writer__$1,max_columns__$1,fields__$1,meta27590){
return (new cljs.pprint.t_cljs$pprint27589(writer__$1,max_columns__$1,fields__$1,meta27590));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint27589(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27597,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27601 = k27597;
var G__27601__$1 = (((G__27601 instanceof cljs.core.Keyword))?G__27601.fqn:null);
switch (G__27601__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27597,else__9079__auto__);

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

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27596){
var self__ = this;
var G__27596__$1 = this;
return (new cljs.core.RecordIter((0),G__27596__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27602 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27602(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27598,other27599){
var self__ = this;
var this27598__$1 = this;
return (!((other27599 == null))) && ((this27598__$1.constructor === other27599.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.parent,other27599.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.section,other27599.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.start_col,other27599.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.indent,other27599.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.done_nl,other27599.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.intra_block_nl,other27599.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.prefix,other27599.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.per_line_prefix,other27599.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.suffix,other27599.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.logical_block_callback,other27599.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27598__$1.__extmap,other27599.__extmap));
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

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27596){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27603 = cljs.core.keyword_identical_QMARK_;
var expr__27604 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27606 = cljs.core.cst$kw$parent;
var G__27607 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27606,G__27607) : pred__27603.call(null,G__27606,G__27607));
})())){
return (new cljs.pprint.logical_block(G__27596,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27608 = cljs.core.cst$kw$section;
var G__27609 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27608,G__27609) : pred__27603.call(null,G__27608,G__27609));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__27596,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27610 = cljs.core.cst$kw$start_DASH_col;
var G__27611 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27610,G__27611) : pred__27603.call(null,G__27610,G__27611));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__27596,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27612 = cljs.core.cst$kw$indent;
var G__27613 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27612,G__27613) : pred__27603.call(null,G__27612,G__27613));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__27596,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27614 = cljs.core.cst$kw$done_DASH_nl;
var G__27615 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27614,G__27615) : pred__27603.call(null,G__27614,G__27615));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__27596,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27616 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__27617 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27616,G__27617) : pred__27603.call(null,G__27616,G__27617));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__27596,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27618 = cljs.core.cst$kw$prefix;
var G__27619 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27618,G__27619) : pred__27603.call(null,G__27618,G__27619));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__27596,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27620 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__27621 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27620,G__27621) : pred__27603.call(null,G__27620,G__27621));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__27596,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27622 = cljs.core.cst$kw$suffix;
var G__27623 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27622,G__27623) : pred__27603.call(null,G__27622,G__27623));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__27596,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27624 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__27625 = expr__27604;
return (pred__27603.cljs$core$IFn$_invoke$arity$2 ? pred__27603.cljs$core$IFn$_invoke$arity$2(G__27624,G__27625) : pred__27603.call(null,G__27624,G__27625));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__27596,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27596),null));
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

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27596){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__27596,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__27600){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__27600),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__27600),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27600,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
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
var G__27627 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__27627;
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

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27629,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27633 = k27629;
var G__27633__$1 = (((G__27633 instanceof cljs.core.Keyword))?G__27633.fqn:null);
switch (G__27633__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27629,else__9079__auto__);

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

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27628){
var self__ = this;
var G__27628__$1 = this;
return (new cljs.core.RecordIter((0),G__27628__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27634 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27634(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27630,other27631){
var self__ = this;
var this27630__$1 = this;
return (!((other27631 == null))) && ((this27630__$1.constructor === other27631.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27630__$1.type_tag,other27631.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27630__$1.data,other27631.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27630__$1.trailing_white_space,other27631.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27630__$1.start_pos,other27631.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27630__$1.end_pos,other27631.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27630__$1.__extmap,other27631.__extmap));
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

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27628){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27635 = cljs.core.keyword_identical_QMARK_;
var expr__27636 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27638 = cljs.core.cst$kw$type_DASH_tag;
var G__27639 = expr__27636;
return (pred__27635.cljs$core$IFn$_invoke$arity$2 ? pred__27635.cljs$core$IFn$_invoke$arity$2(G__27638,G__27639) : pred__27635.call(null,G__27638,G__27639));
})())){
return (new cljs.pprint.buffer_blob(G__27628,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27640 = cljs.core.cst$kw$data;
var G__27641 = expr__27636;
return (pred__27635.cljs$core$IFn$_invoke$arity$2 ? pred__27635.cljs$core$IFn$_invoke$arity$2(G__27640,G__27641) : pred__27635.call(null,G__27640,G__27641));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__27628,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27642 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__27643 = expr__27636;
return (pred__27635.cljs$core$IFn$_invoke$arity$2 ? pred__27635.cljs$core$IFn$_invoke$arity$2(G__27642,G__27643) : pred__27635.call(null,G__27642,G__27643));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__27628,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27644 = cljs.core.cst$kw$start_DASH_pos;
var G__27645 = expr__27636;
return (pred__27635.cljs$core$IFn$_invoke$arity$2 ? pred__27635.cljs$core$IFn$_invoke$arity$2(G__27644,G__27645) : pred__27635.call(null,G__27644,G__27645));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__27628,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27646 = cljs.core.cst$kw$end_DASH_pos;
var G__27647 = expr__27636;
return (pred__27635.cljs$core$IFn$_invoke$arity$2 ? pred__27635.cljs$core$IFn$_invoke$arity$2(G__27646,G__27647) : pred__27635.call(null,G__27646,G__27647));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__27628,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27628),null));
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

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27628){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__27628,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__27632){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27632),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__27632),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__27632),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27632),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27632),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27632,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__27417__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27417__auto__),cljs.core.cst$kw$buffer_DASH_blob);
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

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27650,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27654 = k27650;
var G__27654__$1 = (((G__27654 instanceof cljs.core.Keyword))?G__27654.fqn:null);
switch (G__27654__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27650,else__9079__auto__);

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

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27649){
var self__ = this;
var G__27649__$1 = this;
return (new cljs.core.RecordIter((0),G__27649__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27655 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27655(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27651,other27652){
var self__ = this;
var this27651__$1 = this;
return (!((other27652 == null))) && ((this27651__$1.constructor === other27652.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27651__$1.type_tag,other27652.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27651__$1.type,other27652.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27651__$1.logical_block,other27652.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27651__$1.start_pos,other27652.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27651__$1.end_pos,other27652.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27651__$1.__extmap,other27652.__extmap));
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

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27649){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27656 = cljs.core.keyword_identical_QMARK_;
var expr__27657 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27659 = cljs.core.cst$kw$type_DASH_tag;
var G__27660 = expr__27657;
return (pred__27656.cljs$core$IFn$_invoke$arity$2 ? pred__27656.cljs$core$IFn$_invoke$arity$2(G__27659,G__27660) : pred__27656.call(null,G__27659,G__27660));
})())){
return (new cljs.pprint.nl_t(G__27649,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27661 = cljs.core.cst$kw$type;
var G__27662 = expr__27657;
return (pred__27656.cljs$core$IFn$_invoke$arity$2 ? pred__27656.cljs$core$IFn$_invoke$arity$2(G__27661,G__27662) : pred__27656.call(null,G__27661,G__27662));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__27649,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27663 = cljs.core.cst$kw$logical_DASH_block;
var G__27664 = expr__27657;
return (pred__27656.cljs$core$IFn$_invoke$arity$2 ? pred__27656.cljs$core$IFn$_invoke$arity$2(G__27663,G__27664) : pred__27656.call(null,G__27663,G__27664));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__27649,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27665 = cljs.core.cst$kw$start_DASH_pos;
var G__27666 = expr__27657;
return (pred__27656.cljs$core$IFn$_invoke$arity$2 ? pred__27656.cljs$core$IFn$_invoke$arity$2(G__27665,G__27666) : pred__27656.call(null,G__27665,G__27666));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__27649,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27667 = cljs.core.cst$kw$end_DASH_pos;
var G__27668 = expr__27657;
return (pred__27656.cljs$core$IFn$_invoke$arity$2 ? pred__27656.cljs$core$IFn$_invoke$arity$2(G__27667,G__27668) : pred__27656.call(null,G__27667,G__27668));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__27649,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27649),null));
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

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27649){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__27649,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__27653){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27653),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__27653),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27653),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27653),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27653),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27653,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__27417__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27417__auto__),cljs.core.cst$kw$nl_DASH_t);
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

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27671,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27675 = k27671;
var G__27675__$1 = (((G__27675 instanceof cljs.core.Keyword))?G__27675.fqn:null);
switch (G__27675__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27671,else__9079__auto__);

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

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27670){
var self__ = this;
var G__27670__$1 = this;
return (new cljs.core.RecordIter((0),G__27670__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27676 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27676(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27672,other27673){
var self__ = this;
var this27672__$1 = this;
return (!((other27673 == null))) && ((this27672__$1.constructor === other27673.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27672__$1.type_tag,other27673.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27672__$1.logical_block,other27673.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27672__$1.start_pos,other27673.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27672__$1.end_pos,other27673.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27672__$1.__extmap,other27673.__extmap));
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

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27670){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27677 = cljs.core.keyword_identical_QMARK_;
var expr__27678 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27680 = cljs.core.cst$kw$type_DASH_tag;
var G__27681 = expr__27678;
return (pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(G__27680,G__27681) : pred__27677.call(null,G__27680,G__27681));
})())){
return (new cljs.pprint.start_block_t(G__27670,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27682 = cljs.core.cst$kw$logical_DASH_block;
var G__27683 = expr__27678;
return (pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(G__27682,G__27683) : pred__27677.call(null,G__27682,G__27683));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__27670,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27684 = cljs.core.cst$kw$start_DASH_pos;
var G__27685 = expr__27678;
return (pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(G__27684,G__27685) : pred__27677.call(null,G__27684,G__27685));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__27670,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27686 = cljs.core.cst$kw$end_DASH_pos;
var G__27687 = expr__27678;
return (pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(G__27686,G__27687) : pred__27677.call(null,G__27686,G__27687));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27670,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27670),null));
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

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27670){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27670,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__27674){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27674),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27674),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27674),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27674),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27674,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__27417__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27417__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
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

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27690,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27694 = k27690;
var G__27694__$1 = (((G__27694 instanceof cljs.core.Keyword))?G__27694.fqn:null);
switch (G__27694__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27690,else__9079__auto__);

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

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27689){
var self__ = this;
var G__27689__$1 = this;
return (new cljs.core.RecordIter((0),G__27689__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27695 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27695(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27691,other27692){
var self__ = this;
var this27691__$1 = this;
return (!((other27692 == null))) && ((this27691__$1.constructor === other27692.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27691__$1.type_tag,other27692.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27691__$1.logical_block,other27692.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27691__$1.start_pos,other27692.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27691__$1.end_pos,other27692.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27691__$1.__extmap,other27692.__extmap));
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

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27689){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27696 = cljs.core.keyword_identical_QMARK_;
var expr__27697 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27699 = cljs.core.cst$kw$type_DASH_tag;
var G__27700 = expr__27697;
return (pred__27696.cljs$core$IFn$_invoke$arity$2 ? pred__27696.cljs$core$IFn$_invoke$arity$2(G__27699,G__27700) : pred__27696.call(null,G__27699,G__27700));
})())){
return (new cljs.pprint.end_block_t(G__27689,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27701 = cljs.core.cst$kw$logical_DASH_block;
var G__27702 = expr__27697;
return (pred__27696.cljs$core$IFn$_invoke$arity$2 ? pred__27696.cljs$core$IFn$_invoke$arity$2(G__27701,G__27702) : pred__27696.call(null,G__27701,G__27702));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__27689,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27703 = cljs.core.cst$kw$start_DASH_pos;
var G__27704 = expr__27697;
return (pred__27696.cljs$core$IFn$_invoke$arity$2 ? pred__27696.cljs$core$IFn$_invoke$arity$2(G__27703,G__27704) : pred__27696.call(null,G__27703,G__27704));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__27689,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27705 = cljs.core.cst$kw$end_DASH_pos;
var G__27706 = expr__27697;
return (pred__27696.cljs$core$IFn$_invoke$arity$2 ? pred__27696.cljs$core$IFn$_invoke$arity$2(G__27705,G__27706) : pred__27696.call(null,G__27705,G__27706));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27689,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27689),null));
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

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27689){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27689,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__27693){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27693),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27693),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27693),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27693),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27693,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__27417__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27417__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
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

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27709,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27713 = k27709;
var G__27713__$1 = (((G__27713 instanceof cljs.core.Keyword))?G__27713.fqn:null);
switch (G__27713__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27709,else__9079__auto__);

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

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27708){
var self__ = this;
var G__27708__$1 = this;
return (new cljs.core.RecordIter((0),G__27708__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27714 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27714(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27710,other27711){
var self__ = this;
var this27710__$1 = this;
return (!((other27711 == null))) && ((this27710__$1.constructor === other27711.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27710__$1.type_tag,other27711.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27710__$1.logical_block,other27711.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27710__$1.relative_to,other27711.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27710__$1.offset,other27711.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27710__$1.start_pos,other27711.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27710__$1.end_pos,other27711.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27710__$1.__extmap,other27711.__extmap));
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

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27708){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27715 = cljs.core.keyword_identical_QMARK_;
var expr__27716 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27718 = cljs.core.cst$kw$type_DASH_tag;
var G__27719 = expr__27716;
return (pred__27715.cljs$core$IFn$_invoke$arity$2 ? pred__27715.cljs$core$IFn$_invoke$arity$2(G__27718,G__27719) : pred__27715.call(null,G__27718,G__27719));
})())){
return (new cljs.pprint.indent_t(G__27708,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27720 = cljs.core.cst$kw$logical_DASH_block;
var G__27721 = expr__27716;
return (pred__27715.cljs$core$IFn$_invoke$arity$2 ? pred__27715.cljs$core$IFn$_invoke$arity$2(G__27720,G__27721) : pred__27715.call(null,G__27720,G__27721));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__27708,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27722 = cljs.core.cst$kw$relative_DASH_to;
var G__27723 = expr__27716;
return (pred__27715.cljs$core$IFn$_invoke$arity$2 ? pred__27715.cljs$core$IFn$_invoke$arity$2(G__27722,G__27723) : pred__27715.call(null,G__27722,G__27723));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__27708,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27724 = cljs.core.cst$kw$offset;
var G__27725 = expr__27716;
return (pred__27715.cljs$core$IFn$_invoke$arity$2 ? pred__27715.cljs$core$IFn$_invoke$arity$2(G__27724,G__27725) : pred__27715.call(null,G__27724,G__27725));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__27708,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27726 = cljs.core.cst$kw$start_DASH_pos;
var G__27727 = expr__27716;
return (pred__27715.cljs$core$IFn$_invoke$arity$2 ? pred__27715.cljs$core$IFn$_invoke$arity$2(G__27726,G__27727) : pred__27715.call(null,G__27726,G__27727));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__27708,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27728 = cljs.core.cst$kw$end_DASH_pos;
var G__27729 = expr__27716;
return (pred__27715.cljs$core$IFn$_invoke$arity$2 ? pred__27715.cljs$core$IFn$_invoke$arity$2(G__27728,G__27729) : pred__27715.call(null,G__27728,G__27729));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__27708,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27708),null));
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

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27708){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__27708,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__27712){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__27712),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__27712),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__27712),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__27712),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27712),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__27712),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27712,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__27417__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__27417__auto__),cljs.core.cst$kw$indent_DASH_t);
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
return (function (p1__27732_SHARP_,p2__27731_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__27731_SHARP_);
});})(method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__,hierarchy__9447__auto__))
,cljs.core.cst$kw$default,hierarchy__9447__auto__,method_table__9443__auto__,prefer_table__9444__auto__,method_cache__9445__auto__,cached_hierarchy__9446__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___27734 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27734)){
var cb_27735 = temp__5457__auto___27734;
var G__27733_27736 = cljs.core.cst$kw$start;
(cb_27735.cljs$core$IFn$_invoke$arity$1 ? cb_27735.cljs$core$IFn$_invoke$arity$1(G__27733_27736) : cb_27735.call(null,G__27733_27736));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5457__auto___27737 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5457__auto___27737)){
var prefix_27738 = temp__5457__auto___27737;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_27738);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___27740 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27740)){
var cb_27741 = temp__5457__auto___27740;
var G__27739_27742 = cljs.core.cst$kw$end;
(cb_27741.cljs$core$IFn$_invoke$arity$1 ? cb_27741.cljs$core$IFn$_invoke$arity$1(G__27739_27742) : cb_27741.call(null,G__27739_27742));
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
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__27743 = cljs.core._EQ_;
var expr__27744 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__27746 = cljs.core.cst$kw$block;
var G__27747 = expr__27744;
return (pred__27743.cljs$core$IFn$_invoke$arity$2 ? pred__27743.cljs$core$IFn$_invoke$arity$2(G__27746,G__27747) : pred__27743.call(null,G__27746,G__27747));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27748 = cljs.core.cst$kw$current;
var G__27749 = expr__27744;
return (pred__27743.cljs$core$IFn$_invoke$arity$2 ? pred__27743.cljs$core$IFn$_invoke$arity$2(G__27748,G__27749) : pred__27743.call(null,G__27748,G__27749));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27744)].join('')));
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
var temp__5455__auto___27750 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27750)){
var tws_27751 = temp__5455__auto___27750;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27751);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__27752 = cljs.core.seq(tokens);
var chunk__27753 = null;
var count__27754 = (0);
var i__27755 = (0);
while(true){
if((i__27755 < count__27754)){
var token = chunk__27753.cljs$core$IIndexed$_nth$arity$2(null,i__27755);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5455__auto___27756 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27756)){
var tws_27757 = temp__5455__auto___27756;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27757);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_27758 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8376__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8376__auto__)){
return tws_27758;
} else {
return and__8376__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27758);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__27759 = seq__27752;
var G__27760 = chunk__27753;
var G__27761 = count__27754;
var G__27762 = (i__27755 + (1));
seq__27752 = G__27759;
chunk__27753 = G__27760;
count__27754 = G__27761;
i__27755 = G__27762;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27752);
if(temp__5457__auto__){
var seq__27752__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27752__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__27752__$1);
var G__27763 = cljs.core.chunk_rest(seq__27752__$1);
var G__27764 = c__9319__auto__;
var G__27765 = cljs.core.count(c__9319__auto__);
var G__27766 = (0);
seq__27752 = G__27763;
chunk__27753 = G__27764;
count__27754 = G__27765;
i__27755 = G__27766;
continue;
} else {
var token = cljs.core.first(seq__27752__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5455__auto___27767 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___27767)){
var tws_27768 = temp__5455__auto___27767;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27768);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_27769 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8376__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8376__auto__)){
return tws_27769;
} else {
return and__8376__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_27769);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__27770 = cljs.core.next(seq__27752__$1);
var G__27771 = null;
var G__27772 = (0);
var G__27773 = (0);
seq__27752 = G__27770;
chunk__27753 = G__27771;
count__27754 = G__27772;
i__27755 = G__27773;
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
return (function (p1__27774_SHARP_){
return cljs.core.not((function (){var and__8376__auto__ = cljs.pprint.nl_t_QMARK_(p1__27774_SHARP_);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__27774_SHARP_),lb);
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
return (function (p1__27775_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__27775_SHARP_);
return cljs.core.not((function (){var and__8376__auto__ = cljs.pprint.nl_t_QMARK_(p1__27775_SHARP_);
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

var G__27776 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__27776;
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

var istr_27777 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_27777);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27778_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__27778_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__27779 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__27782 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27782,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27782,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__27785 = newl;
var G__27786 = this$;
var G__27787 = section;
var G__27788 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__27785,G__27786,G__27787,G__27788) : cljs.pprint.emit_nl_QMARK_.call(null,G__27785,G__27786,G__27787,G__27788));
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
var G__27789 = new_buffer;
buffer = G__27789;
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
var oldpos_27794 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_27795 = (oldpos_27794 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_27795);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_27794,newpos_27795));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__27790_27796 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__27791_27797 = null;
var count__27792_27798 = (0);
var i__27793_27799 = (0);
while(true){
if((i__27793_27799 < count__27792_27798)){
var l_27800__$1 = chunk__27791_27797.cljs$core$IIndexed$_nth$arity$2(null,i__27793_27799);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_27800__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__27801 = seq__27790_27796;
var G__27802 = chunk__27791_27797;
var G__27803 = count__27792_27798;
var G__27804 = (i__27793_27799 + (1));
seq__27790_27796 = G__27801;
chunk__27791_27797 = G__27802;
count__27792_27798 = G__27803;
i__27793_27799 = G__27804;
continue;
} else {
var temp__5457__auto___27805 = cljs.core.seq(seq__27790_27796);
if(temp__5457__auto___27805){
var seq__27790_27806__$1 = temp__5457__auto___27805;
if(cljs.core.chunked_seq_QMARK_(seq__27790_27806__$1)){
var c__9319__auto___27807 = cljs.core.chunk_first(seq__27790_27806__$1);
var G__27808 = cljs.core.chunk_rest(seq__27790_27806__$1);
var G__27809 = c__9319__auto___27807;
var G__27810 = cljs.core.count(c__9319__auto___27807);
var G__27811 = (0);
seq__27790_27796 = G__27808;
chunk__27791_27797 = G__27809;
count__27792_27798 = G__27810;
i__27793_27799 = G__27811;
continue;
} else {
var l_27812__$1 = cljs.core.first(seq__27790_27806__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_27812__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__27813 = cljs.core.next(seq__27790_27806__$1);
var G__27814 = null;
var G__27815 = (0);
var G__27816 = (0);
seq__27790_27796 = G__27813;
chunk__27791_27797 = G__27814;
count__27792_27798 = G__27815;
i__27793_27799 = G__27816;
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
if(typeof cljs.pprint.t_cljs$pprint27817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27817 = (function (writer,max_columns,miser_width,lb,fields,meta27818){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta27818 = meta27818;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_27819,meta27818__$1){
var self__ = this;
var _27819__$1 = this;
return (new cljs.pprint.t_cljs$pprint27817(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta27818__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_27819){
var self__ = this;
var _27819__$1 = this;
return self__.meta27818;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27817.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27817.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27820 = cljs.core._EQ_;
var expr__27821 = cljs.core.type(x);
if(cljs.core.truth_((pred__27820.cljs$core$IFn$_invoke$arity$2 ? pred__27820.cljs$core$IFn$_invoke$arity$2(String,expr__27821) : pred__27820.call(null,String,expr__27821)))){
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
if(cljs.core.truth_((pred__27820.cljs$core$IFn$_invoke$arity$2 ? pred__27820.cljs$core$IFn$_invoke$arity$2(Number,expr__27821) : pred__27820.call(null,Number,expr__27821)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27821)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27817.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27817.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint27817.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
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

cljs.pprint.t_cljs$pprint27817.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta27818], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27817.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27817.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27817";

cljs.pprint.t_cljs$pprint27817.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint27817");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint27817 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint27817(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27818){
return (new cljs.pprint.t_cljs$pprint27817(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27818));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint27817(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5457__auto___27824 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27824)){
var cb_27825 = temp__5457__auto___27824;
var G__27823_27826 = cljs.core.cst$kw$start;
(cb_27825.cljs$core$IFn$_invoke$arity$1 ? cb_27825.cljs$core$IFn$_invoke$arity$1(G__27823_27826) : cb_27825.call(null,G__27823_27826));
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

var temp__5457__auto___27828 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___27828)){
var cb_27829 = temp__5457__auto___27828;
var G__27827_27830 = cljs.core.cst$kw$end;
(cb_27829.cljs$core$IFn$_invoke$arity$1 ? cb_27829.cljs$core$IFn$_invoke$arity$1(G__27827_27830) : cb_27829.call(null,G__27827_27830));
} else {
}
} else {
var oldpos_27831 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_27832 = (oldpos_27831 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_27832);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_27831,newpos_27832));
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

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__27833 = cljs.core._EQ_;
var expr__27834 = relative_to;
if(cljs.core.truth_((function (){var G__27836 = cljs.core.cst$kw$block;
var G__27837 = expr__27834;
return (pred__27833.cljs$core$IFn$_invoke$arity$2 ? pred__27833.cljs$core$IFn$_invoke$arity$2(G__27836,G__27837) : pred__27833.call(null,G__27836,G__27837));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27838 = cljs.core.cst$kw$current;
var G__27839 = expr__27834;
return (pred__27833.cljs$core$IFn$_invoke$arity$2 ? pred__27833.cljs$core$IFn$_invoke$arity$2(G__27838,G__27839) : pred__27833.call(null,G__27838,G__27839));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27834)].join('')));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__27840_SHARP_){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__27840_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__27840_SHARP_)], null);
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
var len__9667__auto___27859 = arguments.length;
var i__9668__auto___27860 = (0);
while(true){
if((i__9668__auto___27860 < len__9667__auto___27859)){
args__9674__auto__.push((arguments[i__9668__auto___27860]));

var G__27861 = (i__9668__auto___27860 + (1));
i__9668__auto___27860 = G__27861;
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
var _STAR_print_base_STAR_27845 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_27846 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_27847 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_27848 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_27849 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_27850 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_27851 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_27852 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_27853 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_27854 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_27855 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_27856 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
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
var base_writer__27400__auto___27862 = base_writer;
var new_writer__27401__auto___27863 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27400__auto___27862));
var _STAR_out_STAR_27857_27864 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__27401__auto___27863)?cljs.pprint.make_pretty_writer(base_writer__27400__auto___27862,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27400__auto___27862);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27857_27864;
}} else {
var _STAR_out_STAR_27858_27865 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27858_27865;
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
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_27856;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_27855;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_27854;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_27853;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_27852;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_27851;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_27850;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_27849;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27848;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_27847;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_27846;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_27845;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq27843){
var G__27844 = cljs.core.first(seq27843);
var seq27843__$1 = cljs.core.next(seq27843);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__27844,seq27843__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__27867 = arguments.length;
switch (G__27867) {
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
var _STAR_out_STAR_27868 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27868;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__27400__auto__ = writer;
var new_writer__27401__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27400__auto__));
var _STAR_out_STAR_27869 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__27401__auto__)?cljs.pprint.make_pretty_writer(base_writer__27400__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27400__auto__);

try{var _STAR_print_pretty_STAR_27870_27872 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_27870_27872;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27869;
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
var len__9667__auto___27876 = arguments.length;
var i__9668__auto___27877 = (0);
while(true){
if((i__9668__auto___27877 < len__9667__auto___27876)){
args__9674__auto__.push((arguments[i__9668__auto___27877]));

var G__27878 = (i__9668__auto___27877 + (1));
i__9668__auto___27877 = G__27878;
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

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq27873){
var G__27874 = cljs.core.first(seq27873);
var seq27873__$1 = cljs.core.next(seq27873);
var G__27875 = cljs.core.first(seq27873__$1);
var seq27873__$2 = cljs.core.next(seq27873__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__27874,G__27875,seq27873__$2);
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

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27880,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27884 = k27880;
var G__27884__$1 = (((G__27884 instanceof cljs.core.Keyword))?G__27884.fqn:null);
switch (G__27884__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27880,else__9079__auto__);

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

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27879){
var self__ = this;
var G__27879__$1 = this;
return (new cljs.core.RecordIter((0),G__27879__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27885 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27885(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27881,other27882){
var self__ = this;
var this27881__$1 = this;
return (!((other27882 == null))) && ((this27881__$1.constructor === other27882.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27881__$1.seq,other27882.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27881__$1.rest,other27882.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27881__$1.pos,other27882.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27881__$1.__extmap,other27882.__extmap));
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

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27879){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27886 = cljs.core.keyword_identical_QMARK_;
var expr__27887 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27889 = cljs.core.cst$kw$seq;
var G__27890 = expr__27887;
return (pred__27886.cljs$core$IFn$_invoke$arity$2 ? pred__27886.cljs$core$IFn$_invoke$arity$2(G__27889,G__27890) : pred__27886.call(null,G__27889,G__27890));
})())){
return (new cljs.pprint.arg_navigator(G__27879,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27891 = cljs.core.cst$kw$rest;
var G__27892 = expr__27887;
return (pred__27886.cljs$core$IFn$_invoke$arity$2 ? pred__27886.cljs$core$IFn$_invoke$arity$2(G__27891,G__27892) : pred__27886.call(null,G__27891,G__27892));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__27879,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27893 = cljs.core.cst$kw$pos;
var G__27894 = expr__27887;
return (pred__27886.cljs$core$IFn$_invoke$arity$2 ? pred__27886.cljs$core$IFn$_invoke$arity$2(G__27893,G__27894) : pred__27886.call(null,G__27893,G__27894));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__27879,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27879),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27879){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__27879,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__27883){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__27883),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__27883),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__27883),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27883,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
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
var vec__27896 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27896,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27896,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__27899 = navigator;
var G__27900 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__27899,G__27900) : cljs.pprint.relative_reposition.call(null,G__27899,G__27900));
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

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k27902,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__27906 = k27902;
var G__27906__$1 = (((G__27906 instanceof cljs.core.Keyword))?G__27906.fqn:null);
switch (G__27906__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27902,else__9079__auto__);

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

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27901){
var self__ = this;
var G__27901__$1 = this;
return (new cljs.core.RecordIter((0),G__27901__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8844__auto____$1 = (function (){var fexpr__27907 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__27907(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27903,other27904){
var self__ = this;
var this27903__$1 = this;
return (!((other27904 == null))) && ((this27903__$1.constructor === other27904.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27903__$1.func,other27904.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27903__$1.def,other27904.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27903__$1.params,other27904.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27903__$1.offset,other27904.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27903__$1.__extmap,other27904.__extmap));
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

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__27901){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__27908 = cljs.core.keyword_identical_QMARK_;
var expr__27909 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__27911 = cljs.core.cst$kw$func;
var G__27912 = expr__27909;
return (pred__27908.cljs$core$IFn$_invoke$arity$2 ? pred__27908.cljs$core$IFn$_invoke$arity$2(G__27911,G__27912) : pred__27908.call(null,G__27911,G__27912));
})())){
return (new cljs.pprint.compiled_directive(G__27901,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27913 = cljs.core.cst$kw$def;
var G__27914 = expr__27909;
return (pred__27908.cljs$core$IFn$_invoke$arity$2 ? pred__27908.cljs$core$IFn$_invoke$arity$2(G__27913,G__27914) : pred__27908.call(null,G__27913,G__27914));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__27901,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27915 = cljs.core.cst$kw$params;
var G__27916 = expr__27909;
return (pred__27908.cljs$core$IFn$_invoke$arity$2 ? pred__27908.cljs$core$IFn$_invoke$arity$2(G__27915,G__27916) : pred__27908.call(null,G__27915,G__27916));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__27901,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27917 = cljs.core.cst$kw$offset;
var G__27918 = expr__27909;
return (pred__27908.cljs$core$IFn$_invoke$arity$2 ? pred__27908.cljs$core$IFn$_invoke$arity$2(G__27917,G__27918) : pred__27908.call(null,G__27917,G__27918));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__27901,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__27901),null));
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

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__27901){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__27901,self__.__extmap,self__.__hash));
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

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__27905){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__27905),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__27905),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__27905),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__27905),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27905,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__27920,navigator){
var vec__27921 = p__27920;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(0),null);
var vec__27924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(1),null);
var vec__27927 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__27930 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(1),null);
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
var vec__27933 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(1),null);
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
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__27936_SHARP_){
if((p1__27936_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__27936_SHARP_,base),cljs.core.quot(p1__27936_SHARP_,base)], null);
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
return (function (p1__27937_SHARP_){
if((p1__27937_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__27937_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__27937_SHARP_ - (10))));
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
var vec__27939 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_27942 = (arg < (0));
var pos_arg_27943 = ((neg_27942)?(- arg):arg);
var raw_str_27944 = cljs.pprint.opt_base_str(base,pos_arg_27943);
var group_str_27945 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_27942,pos_arg_27943,raw_str_27944,vec__27939,arg,arg_navigator__$1){
return (function (p1__27938_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__27938_SHARP_);
});})(neg_27942,pos_arg_27943,raw_str_27944,vec__27939,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_27944));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_27944);
var signed_str_27946 = ((neg_27942)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_27945)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_27945)].join(''):group_str_27945
));
var padded_str_27947 = (((signed_str_27946.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_27946.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_27946)].join(''):signed_str_27946);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_27947], 0));
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
var G__27948 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__27949 = (pos - (1));
var G__27950 = cljs.core.first(remainder);
var G__27951 = cljs.core.next(remainder);
acc = G__27948;
pos = G__27949;
this$ = G__27950;
remainder = G__27951;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__27952 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27952,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27952,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_27955 = (((arg < (0)))?(- arg):arg);
var parts_27956 = cljs.pprint.remainders((1000),abs_arg_27955);
if((cljs.core.count(parts_27956) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_27957 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_27956);
var full_str_27958 = cljs.pprint.add_english_scales(parts_strs_27957,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_27958)].join('')], 0));
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
var vec__27959 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27959,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27959,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_27962 = (((arg < (0)))?(- arg):arg);
var parts_27963 = cljs.pprint.remainders((1000),abs_arg_27962);
if((cljs.core.count(parts_27963) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_27964 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_27963));
var head_str_27965 = cljs.pprint.add_english_scales(parts_strs_27964,(1));
var tail_str_27966 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_27963));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_27965))) && (!(cljs.core.empty_QMARK_(tail_str_27966))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_27965),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_27966)].join(''):((!(cljs.core.empty_QMARK_(head_str_27965)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_27965),"th"].join(''):tail_str_27966
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_27967 = cljs.core.rem(arg,(100));
var not_teens_27968 = (((11) < low_two_digits_27967)) || (((19) > low_two_digits_27967));
var low_digit_27969 = cljs.core.rem(low_two_digits_27967,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_27969 === (1))) && (not_teens_27968))?"st":((((low_digit_27969 === (2))) && (not_teens_27968))?"nd":((((low_digit_27969 === (3))) && (not_teens_27968))?"rd":"th"
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
var vec__27970 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27970,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27970,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_27973 = cljs.pprint.remainders((10),arg);
var acc_27974 = cljs.core.PersistentVector.EMPTY;
var pos_27975 = (cljs.core.count(digits_27973) - (1));
var digits_27976__$1 = digits_27973;
while(true){
if(cljs.core.empty_QMARK_(digits_27976__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_27974)], 0));
} else {
var digit_27977 = cljs.core.first(digits_27976__$1);
var G__27978 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_27977))?acc_27974:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_27974,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_27975),(digit_27977 - (1)))));
var G__27979 = (pos_27975 - (1));
var G__27980 = cljs.core.next(digits_27976__$1);
acc_27974 = G__27978;
pos_27975 = G__27979;
digits_27976__$1 = G__27980;
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
var vec__27981 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27981,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27981,(1),null);
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
var vec__27984 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27984,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27984,(1),null);
var pred__27987_27994 = cljs.core._EQ_;
var expr__27988_27995 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__27990 = "o";
var G__27991 = expr__27988_27995;
return (pred__27987_27994.cljs$core$IFn$_invoke$arity$2 ? pred__27987_27994.cljs$core$IFn$_invoke$arity$2(G__27990,G__27991) : pred__27987_27994.call(null,G__27990,G__27991));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__27992 = "u";
var G__27993 = expr__27988_27995;
return (pred__27987_27994.cljs$core$IFn$_invoke$arity$2 ? pred__27987_27994.cljs$core$IFn$_invoke$arity$2(G__27992,G__27993) : pred__27987_27994.call(null,G__27992,G__27993));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__27987_27994.cljs$core$IFn$_invoke$arity$2 ? pred__27987_27994.cljs$core$IFn$_invoke$arity$2(null,expr__27988_27995) : pred__27987_27994.call(null,null,expr__27988_27995)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27988_27995)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__27996 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27996,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27996,(1),null);
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
var vec__27999 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27999,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27999,(1),null);
var vec__28002 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28002,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28002,(1),null);
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
var vec__28005 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28005,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28005,(1),null);
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
var G__28008 = (i - (1));
i = G__28008;
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
var vec__28009 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(3),null);
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
var vec__28012 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28012,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28012,(1),null);
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
var vec__28015 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28015,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28015,(1),null);
var vec__28018 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__28021 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8388__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__28024 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28024,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28024,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28024,(2),null);
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
var len_28027 = cljs.core.count(fixed_repr__$1);
var signed_len_28028 = (cljs.core.truth_(add_sign)?(len_28027 + (1)):len_28027);
var prepend_zero_28029__$1 = (prepend_zero) && (!((signed_len_28028 >= w)));
var append_zero_28030__$1 = (append_zero) && (!((signed_len_28028 >= w)));
var full_len_28031 = (((prepend_zero_28029__$1) || (append_zero_28030__$1))?(signed_len_28028 + (1)):signed_len_28028);
if(cljs.core.truth_((function (){var and__8376__auto__ = (full_len_28031 > w);
if(and__8376__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_28031),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28029__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28030__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28032 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28032,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28032,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__28038_28048 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28039_28049 = G__28038_28048;
var mantissa_28050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28039_28049,(0),null);
var exp_28051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28039_28049,(1),null);
var G__28038_28052__$1 = G__28038_28048;
while(true){
var vec__28042_28053 = G__28038_28052__$1;
var mantissa_28054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042_28053,(0),null);
var exp_28055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042_28053,(1),null);
var w_28056 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_28057 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_28058 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_28059 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_28060 = (function (){var or__8388__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return "E";
}
})();
var add_sign_28061 = (function (){var or__8388__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_28062 = (k_28059 <= (0));
var scaled_exp_28063 = (exp_28055__$1 - (k_28059 - (1)));
var scaled_exp_str_28064 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_28063))].join('');
var scaled_exp_str_28065__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_28060),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_28063 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_28058)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_28058 - cljs.core.count(scaled_exp_str_28064)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28064)].join('');
var exp_width_28066 = cljs.core.count(scaled_exp_str_28065__$1);
var base_mantissa_width_28067 = cljs.core.count(mantissa_28054__$1);
var scaled_mantissa_28068 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_28059),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_28054__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_28057)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_28057 - (base_mantissa_width_28067 - (1))) - (((k_28059 < (0)))?(- k_28059):(0))),"0")):null))].join('');
var w_mantissa_28069 = (cljs.core.truth_(w_28056)?(w_28056 - exp_width_28066):null);
var vec__28045_28070 = cljs.pprint.round_str(scaled_mantissa_28068,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_28059,(0)))?(d_28057 - (1)):(((k_28059 > (0)))?d_28057:(((k_28059 < (0)))?(d_28057 - (1)):null))),(cljs.core.truth_(w_mantissa_28069)?(w_mantissa_28069 - (cljs.core.truth_(add_sign_28061)?(1):(0))):null));
var rounded_mantissa_28071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28045_28070,(0),null);
var __28072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28045_28070,(1),null);
var incr_exp_28073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28045_28070,(2),null);
var full_mantissa_28074 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_28071,k_28059);
var append_zero_28075 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_28059,cljs.core.count(rounded_mantissa_28071))) && ((d_28057 == null));
if(cljs.core.not(incr_exp_28073)){
if(cljs.core.truth_(w_28056)){
var len_28076 = (cljs.core.count(full_mantissa_28074) + exp_width_28066);
var signed_len_28077 = (cljs.core.truth_(add_sign_28061)?(len_28076 + (1)):len_28076);
var prepend_zero_28078__$1 = (prepend_zero_28062) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_28077,w_28056)));
var full_len_28079 = ((prepend_zero_28078__$1)?(signed_len_28077 + (1)):signed_len_28077);
var append_zero_28080__$1 = (append_zero_28075) && ((full_len_28079 < w_28056));
if(cljs.core.truth_((function (){var and__8376__auto__ = (function (){var or__8388__auto__ = (full_len_28079 > w_28056);
if(or__8388__auto__){
return or__8388__auto__;
} else {
var and__8376__auto__ = e_28058;
if(cljs.core.truth_(and__8376__auto__)){
return ((exp_width_28066 - (2)) > e_28058);
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
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_28056,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_28056 - full_len_28079) - ((append_zero_28080__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_28061)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28078__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_28074),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28080__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28065__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_28061)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28062)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_28074),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28075)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28065__$1)].join('')], 0));
}
} else {
var G__28081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_28071,(exp_28055__$1 + (1))], null);
G__28038_28052__$1 = G__28081;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28082 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28082,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28082,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__28085 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085,(1),null);
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
var vec__28088 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(1),null);
var vec__28091 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28091,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28091,(1),null);
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
var vec__28094 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28094,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28094,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28094,(2),null);
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
var vec__28097 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28097,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28097,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28100 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28100,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28100,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28103 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(1),null);
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
var vec__28106 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28106,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28106,(1),null);
var vec__28109 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28109,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28109,(1),null);
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
var G__28112 = (count + (1));
var G__28113 = iter_result;
var G__28114 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__28112;
args__$1 = G__28113;
last_pos = G__28114;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28115 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28115,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28115,(1),null);
var vec__28118 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28118,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28118,(1),null);
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
var G__28121 = (count + (1));
var G__28122 = cljs.core.next(arg_list__$1);
count = G__28121;
arg_list__$1 = G__28122;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28123 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28123,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28123,(1),null);
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
var G__28126 = (count + (1));
var G__28127 = iter_result;
var G__28128 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__28126;
navigator__$2 = G__28127;
last_pos = G__28128;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__28129 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28129,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28129,(1),null);
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
var vec__28132 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__28135 = (count + (1));
var G__28136 = navigator__$3;
count = G__28135;
navigator__$2 = G__28136;
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
var vec__28137 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_28140 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28140;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28137,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28137,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__28141 = cljs.core.next(clauses__$1);
var G__28142 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__28143 = iter_result;
clauses__$1 = G__28141;
acc = G__28142;
navigator__$1 = G__28143;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__28144 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var else$ = temp__5457__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__28147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28147,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(1),null);
var navigator__$1 = (function (){var or__8388__auto__ = new_navigator;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return navigator;
}
})();
var vec__28150 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28150,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28150,(1),null);
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
var vec__28153 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28153,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28153,(1),null);
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

var slots_28156__$1 = slots;
var extra_pad_28157__$1 = extra_pad;
var strs_28158__$1 = strs;
var pad_only_28159 = (function (){var or__8388__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_28158__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_28158__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_28159))?cljs.core.first(strs_28158__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8388__auto__ = pad_only_28159;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
var or__8388__auto____$1 = cljs.core.next(strs_28158__$1);
if(or__8388__auto____$1){
return or__8388__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_28157__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__28160 = (slots_28156__$1 - (1));
var G__28161 = (extra_pad_28157__$1 - (1));
var G__28162 = (cljs.core.truth_(pad_only_28159)?strs_28158__$1:cljs.core.next(strs_28158__$1));
var G__28163 = false;
slots_28156__$1 = G__28160;
extra_pad_28157__$1 = G__28161;
strs_28158__$1 = G__28162;
pad_only_28159 = G__28163;
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
if(typeof cljs.pprint.t_cljs$pprint28164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28164 = (function (writer,meta28165){
this.writer = writer;
this.meta28165 = meta28165;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28166,meta28165__$1){
var self__ = this;
var _28166__$1 = this;
return (new cljs.pprint.t_cljs$pprint28164(self__.writer,meta28165__$1));
});

cljs.pprint.t_cljs$pprint28164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28166){
var self__ = this;
var _28166__$1 = this;
return self__.meta28165;
});

cljs.pprint.t_cljs$pprint28164.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28164.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28167 = cljs.core._EQ_;
var expr__28168 = cljs.core.type(x);
if(cljs.core.truth_((pred__28167.cljs$core$IFn$_invoke$arity$2 ? pred__28167.cljs$core$IFn$_invoke$arity$2(String,expr__28168) : pred__28167.call(null,String,expr__28168)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__28167.cljs$core$IFn$_invoke$arity$2 ? pred__28167.cljs$core$IFn$_invoke$arity$2(Number,expr__28168) : pred__28167.call(null,Number,expr__28168)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28168)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta28165], null);
});

cljs.pprint.t_cljs$pprint28164.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28164.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28164";

cljs.pprint.t_cljs$pprint28164.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28164");
});

cljs.pprint.__GT_t_cljs$pprint28164 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint28164(writer__$1,meta28165){
return (new cljs.pprint.t_cljs$pprint28164(writer__$1,meta28165));
});

}

return (new cljs.pprint.t_cljs$pprint28164(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint28170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28170 = (function (writer,meta28171){
this.writer = writer;
this.meta28171 = meta28171;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28172,meta28171__$1){
var self__ = this;
var _28172__$1 = this;
return (new cljs.pprint.t_cljs$pprint28170(self__.writer,meta28171__$1));
});

cljs.pprint.t_cljs$pprint28170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28172){
var self__ = this;
var _28172__$1 = this;
return self__.meta28171;
});

cljs.pprint.t_cljs$pprint28170.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28170.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28173 = cljs.core._EQ_;
var expr__28174 = cljs.core.type(x);
if(cljs.core.truth_((pred__28173.cljs$core$IFn$_invoke$arity$2 ? pred__28173.cljs$core$IFn$_invoke$arity$2(String,expr__28174) : pred__28173.call(null,String,expr__28174)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__28173.cljs$core$IFn$_invoke$arity$2 ? pred__28173.cljs$core$IFn$_invoke$arity$2(Number,expr__28174) : pred__28173.call(null,Number,expr__28174)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28174)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta28171], null);
});

cljs.pprint.t_cljs$pprint28170.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28170.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28170";

cljs.pprint.t_cljs$pprint28170.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28170");
});

cljs.pprint.__GT_t_cljs$pprint28170 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint28170(writer__$1,meta28171){
return (new cljs.pprint.t_cljs$pprint28170(writer__$1,meta28171));
});

}

return (new cljs.pprint.t_cljs$pprint28170(writer,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs.pprint.t_cljs$pprint28176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28176 = (function (writer,last_was_whitespace_QMARK_,meta28177){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta28177 = meta28177;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_28178,meta28177__$1){
var self__ = this;
var _28178__$1 = this;
return (new cljs.pprint.t_cljs$pprint28176(self__.writer,self__.last_was_whitespace_QMARK_,meta28177__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_28178){
var self__ = this;
var _28178__$1 = this;
return self__.meta28177;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28176.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28176.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28179 = cljs.core._EQ_;
var expr__28180 = cljs.core.type(x);
if(cljs.core.truth_((pred__28179.cljs$core$IFn$_invoke$arity$2 ? pred__28179.cljs$core$IFn$_invoke$arity$2(String,expr__28180) : pred__28179.call(null,String,expr__28180)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__28182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__28182);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__28179.cljs$core$IFn$_invoke$arity$2 ? pred__28179.cljs$core$IFn$_invoke$arity$2(Number,expr__28180) : pred__28179.call(null,Number,expr__28180)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28180)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28176.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta28177], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28176.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28176.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28176";

cljs.pprint.t_cljs$pprint28176.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28176");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint28176 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint28176(writer__$1,last_was_whitespace_QMARK___$1,meta28177){
return (new cljs.pprint.t_cljs$pprint28176(writer__$1,last_was_whitespace_QMARK___$1,meta28177));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint28176(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint28183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28183 = (function (writer,capped,meta28184){
this.writer = writer;
this.capped = capped;
this.meta28184 = meta28184;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_28185,meta28184__$1){
var self__ = this;
var _28185__$1 = this;
return (new cljs.pprint.t_cljs$pprint28183(self__.writer,self__.capped,meta28184__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint28183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_28185){
var self__ = this;
var _28185__$1 = this;
return self__.meta28184;
});})(capped))
;

cljs.pprint.t_cljs$pprint28183.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint28183.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28186 = cljs.core._EQ_;
var expr__28187 = cljs.core.type(x);
if(cljs.core.truth_((pred__28186.cljs$core$IFn$_invoke$arity$2 ? pred__28186.cljs$core$IFn$_invoke$arity$2(String,expr__28187) : pred__28186.call(null,String,expr__28187)))){
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
if(cljs.core.truth_((pred__28186.cljs$core$IFn$_invoke$arity$2 ? pred__28186.cljs$core$IFn$_invoke$arity$2(Number,expr__28187) : pred__28186.call(null,Number,expr__28187)))){
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28187)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint28183.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta28184], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint28183.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28183.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28183";

cljs.pprint.t_cljs$pprint28183.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.pprint/t_cljs$pprint28183");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint28183 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint28183(writer__$1,capped__$1,meta28184){
return (new cljs.pprint.t_cljs$pprint28183(writer__$1,capped__$1,meta28184));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint28183(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_28189 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28189;
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
var colnum_28191 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_28192 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_28193 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_28194 = (((current_28193 < colnum_28191))?(colnum_28191 - current_28193):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_28192,(0)))?(0):(colinc_28192 - cljs.core.rem((current_28193 - colnum_28191),colinc_28192))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_28194," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_28195 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_28196 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_28197 = (colrel_28195 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_28198 = (((colinc_28196 > (0)))?cljs.core.rem(start_col_28197,colinc_28196):(0));
var space_count_28199 = (colrel_28195 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_28198))?(0):(colinc_28196 - offset_28198)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_28199," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__28200 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28200,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28200,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28203_28205 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28204_28206 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28204_28206;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28203_28205;
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
return (function (p1__28207_SHARP_,p2__28208_SHARP_,p3__28209_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__28207_SHARP_,p2__28208_SHARP_,p3__28209_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28210_SHARP_,p2__28211_SHARP_,p3__28212_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__28210_SHARP_,p2__28211_SHARP_,p3__28212_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28213_SHARP_,p2__28214_SHARP_,p3__28215_SHARP_){
return cljs.pprint.format_integer((10),p1__28213_SHARP_,p2__28214_SHARP_,p3__28215_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28216_SHARP_,p2__28217_SHARP_,p3__28218_SHARP_){
return cljs.pprint.format_integer((2),p1__28216_SHARP_,p2__28217_SHARP_,p3__28218_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28219_SHARP_,p2__28220_SHARP_,p3__28221_SHARP_){
return cljs.pprint.format_integer((8),p1__28219_SHARP_,p2__28220_SHARP_,p3__28221_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__28222_SHARP_,p2__28223_SHARP_,p3__28224_SHARP_){
return cljs.pprint.format_integer((16),p1__28222_SHARP_,p2__28223_SHARP_,p3__28224_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__28225_SHARP_,p2__28226_SHARP_,p3__28227_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__28225_SHARP_),p1__28225_SHARP_,p2__28226_SHARP_,p3__28227_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8376__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8376__auto__;
}
})())){
return (function (p1__28228_SHARP_,p2__28229_SHARP_,p3__28230_SHARP_){
return cljs.pprint.format_old_roman(p1__28228_SHARP_,p2__28229_SHARP_,p3__28230_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28231_SHARP_,p2__28232_SHARP_,p3__28233_SHARP_){
return cljs.pprint.format_new_roman(p1__28231_SHARP_,p2__28232_SHARP_,p3__28233_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28234_SHARP_,p2__28235_SHARP_,p3__28236_SHARP_){
return cljs.pprint.format_ordinal_english(p1__28234_SHARP_,p2__28235_SHARP_,p3__28236_SHARP_);
});
} else {
return (function (p1__28237_SHARP_,p2__28238_SHARP_,p3__28239_SHARP_){
return cljs.pprint.format_cardinal_english(p1__28237_SHARP_,p2__28238_SHARP_,p3__28239_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__28249 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28249,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28249,(1),null);
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
var n__9433__auto___28267 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28268 = (0);
while(true){
if((i_28268 < n__9433__auto___28267)){
cljs.pprint.prn();

var G__28269 = (i_28268 + (1));
i_28268 = G__28269;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_28270 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_28270 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9433__auto___28271 = (cnt_28270 - (1));
var i_28272 = (0);
while(true){
if((i_28272 < n__9433__auto___28271)){
cljs.pprint.prn();

var G__28273 = (i_28272 + (1));
i_28272 = G__28273;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9433__auto___28274 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28275 = (0);
while(true){
if((i_28275 < n__9433__auto___28274)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__28276 = (i_28275 + (1));
i_28275 = G__28276;
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
return (function (p1__28240_SHARP_,p2__28241_SHARP_,p3__28242_SHARP_){
return cljs.pprint.relative_tabulation(p1__28240_SHARP_,p2__28241_SHARP_,p3__28242_SHARP_);
});
} else {
return (function (p1__28243_SHARP_,p2__28244_SHARP_,p3__28245_SHARP_){
return cljs.pprint.absolute_tabulation(p1__28243_SHARP_,p2__28244_SHARP_,p3__28245_SHARP_);
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
var vec__28252 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28252,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28252,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__28255 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28255,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28255,(1),null);
var vec__28258 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28258,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28258,(1),null);
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
return (function (p1__28246_SHARP_,p2__28247_SHARP_,p3__28248_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__28246_SHARP_,p2__28247_SHARP_,p3__28248_SHARP_);
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
var vec__28261 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28261,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28261,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__28264 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28264,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28264,(1),null);
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
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__28277){
var vec__28278 = p__28277;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(2),null);
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
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__28281){
var vec__28282 = p__28281;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28282,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28282,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__28285){
var vec__28286 = p__28285;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28286,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28286,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28286,(2),null);
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

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28289_SHARP_,p2__28290_SHARP_){
var val = cljs.core.first(p1__28289_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__28290_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__28290_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__28289_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__9270__auto__ = (function cljs$pprint$map_params_$_iter__28294(s__28295){
return (new cljs.core.LazySeq(null,(function (){
var s__28295__$1 = s__28295;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28295__$1);
if(temp__5457__auto__){
var s__28295__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28295__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28295__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28297 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28296 = (0);
while(true){
if((i__28296 < size__9269__auto__)){
var vec__28298 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28296);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28298,(0),null);
var vec__28301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28298,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28301,(0),null);
cljs.core.chunk_append(b__28297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__28310 = (i__28296 + (1));
i__28296 = G__28310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28297),cljs$pprint$map_params_$_iter__28294(cljs.core.chunk_rest(s__28295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28297),null);
}
} else {
var vec__28304 = cljs.core.first(s__28295__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28304,(0),null);
var vec__28307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28304,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28307,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__28294(cljs.core.rest(s__28295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28291_SHARP_,p2__28292_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__28291_SHARP_,p2__28292_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28293_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28293_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__28311 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(0),null);
var vec__28314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28314,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28314,(1),null);
var vec__28317 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28317,(0),null);
var vec__28320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28317,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28320,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28320,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28320,(2),null);
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__28323 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__28323.cljs$core$IFn$_invoke$arity$2 ? fexpr__28323.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__28323.call(null,params,offset__$2));
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
var vec__28324 = (function (){var G__28327 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__28328 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__28329 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__28327,G__28328,G__28329) : cljs.pprint.collect_clauses.call(null,G__28327,G__28328,G__28329));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28324,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28324,(1),null);
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
return cljs.core.second(cljs.pprint.consume((function (p__28330){
var vec__28331 = p__28330;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(2),null);
var vec__28334 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28334,(0),null);
var vec__28337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28334,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28337,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28337,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28337,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28337,(3),null);
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
var _STAR_format_str_STAR_28340 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_28340){
return (function (p__28341){
var vec__28342 = p__28341;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28342,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28342,(1),null);
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
});})(_STAR_format_str_STAR_28340))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_28340;
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
var G__28345 = cljs.core.next(format__$1);
format__$1 = G__28345;
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
var G__28347 = arguments.length;
switch (G__28347) {
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
var _STAR_out_STAR_28348 = cljs.core._STAR_out_STAR_;
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
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28348;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28349 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28349,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28349,(1),null);
var vec__28352 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28352,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28352,(1),null);
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
var macro_char = (function (){var G__28356 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__28356) : cljs.pprint.reader_macros.call(null,G__28356));
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
var _STAR_current_level_STAR_28357_28360 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28358_28361 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count28359_28362 = (0);
var alis_28363__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28359_28362 < cljs.core._STAR_print_length_STAR_))){
if(alis_28363__$1){
cljs.pprint.write_out(cljs.core.first(alis_28363__$1));

if(cljs.core.next(alis_28363__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28364 = (length_count28359_28362 + (1));
var G__28365 = cljs.core.next(alis_28363__$1);
length_count28359_28362 = G__28364;
alis_28363__$1 = G__28365;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28358_28361;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28357_28360;
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
var _STAR_current_level_STAR_28366_28369 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28367_28370 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28368_28371 = (0);
var aseq_28372 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28368_28371 < cljs.core._STAR_print_length_STAR_))){
if(aseq_28372){
cljs.pprint.write_out(cljs.core.first(aseq_28372));

if(cljs.core.next(aseq_28372)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28373 = (length_count28368_28371 + (1));
var G__28374 = cljs.core.next(aseq_28372);
length_count28368_28371 = G__28373;
aseq_28372 = G__28374;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28367_28370;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28366_28369;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__27465__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28375__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28375 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28376__i = 0, G__28376__a = new Array(arguments.length -  0);
while (G__28376__i < G__28376__a.length) {G__28376__a[G__28376__i] = arguments[G__28376__i + 0]; ++G__28376__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28376__a,0,null);
} 
return G__28375__delegate.call(this,args__27467__auto__);};
G__28375.cljs$lang$maxFixedArity = 0;
G__28375.cljs$lang$applyTo = (function (arglist__28377){
var args__27467__auto__ = cljs.core.seq(arglist__28377);
return G__28375__delegate(args__27467__auto__);
});
G__28375.cljs$core$IFn$_invoke$arity$variadic = G__28375__delegate;
return G__28375;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__28378 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__28381 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9841,9841,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__28381.cljs$core$IFn$_invoke$arity$1 ? fexpr__28381.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__28381.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28378,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28378,(1),null);
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
var _STAR_current_level_STAR_28382_28387 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28383_28388 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count28384_28389 = (0);
var aseq_28390 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28384_28389 < cljs.core._STAR_print_length_STAR_))){
if(aseq_28390){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28385_28391 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28386_28392 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_28390));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_28390)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28386_28392;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28385_28391;
}}


if(cljs.core.next(aseq_28390)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28393 = (length_count28384_28389 + (1));
var G__28394 = cljs.core.next(aseq_28390);
length_count28384_28389 = G__28393;
aseq_28390 = G__28394;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28383_28388;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28382_28387;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__27465__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28395__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28395 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28396__i = 0, G__28396__a = new Array(arguments.length -  0);
while (G__28396__i < G__28396__a.length) {G__28396__a[G__28396__i] = arguments[G__28396__i + 0]; ++G__28396__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28396__a,0,null);
} 
return G__28395__delegate.call(this,args__27467__auto__);};
G__28395.cljs$lang$maxFixedArity = 0;
G__28395.cljs$lang$applyTo = (function (arglist__28397){
var args__27467__auto__ = cljs.core.seq(arglist__28397);
return G__28395__delegate(args__27467__auto__);
});
G__28395.cljs$core$IFn$_invoke$arity$variadic = G__28395__delegate;
return G__28395;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
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
var _STAR_current_level_STAR_28398_28402 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28399_28403 = cljs.pprint._STAR_current_length_STAR_;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28399_28403;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28398_28402;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__27465__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28404__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28404 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28405__i = 0, G__28405__a = new Array(arguments.length -  0);
while (G__28405__i < G__28405__a.length) {G__28405__a[G__28405__i] = arguments[G__28405__i + 0]; ++G__28405__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28405__a,0,null);
} 
return G__28404__delegate.call(this,args__27467__auto__);};
G__28404.cljs$lang$maxFixedArity = 0;
G__28404.cljs$lang$applyTo = (function (arglist__28406){
var args__27467__auto__ = cljs.core.seq(arglist__28406);
return G__28404__delegate(args__27467__auto__);
});
G__28404.cljs$core$IFn$_invoke$arity$variadic = G__28404__delegate;
return G__28404;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
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
var vec__28408 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28408,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28408,(1),null);
var vec__28411 = reference;
var seq__28412 = cljs.core.seq(vec__28411);
var first__28413 = cljs.core.first(seq__28412);
var seq__28412__$1 = cljs.core.next(seq__28412);
var keyw = first__28413;
var args = seq__28412__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28414_28430 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28415_28431 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__28416_28432 = (function (){var format_in__27465__auto__ = "~w~:i";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args){
return (function() { 
var G__28433__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28433 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28434__i = 0, G__28434__a = new Array(arguments.length -  0);
while (G__28434__i < G__28434__a.length) {G__28434__a[G__28434__i] = arguments[G__28434__i + 0]; ++G__28434__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28434__a,0,null);
} 
return G__28433__delegate.call(this,args__27467__auto__);};
G__28433.cljs$lang$maxFixedArity = 0;
G__28433.cljs$lang$applyTo = (function (arglist__28435){
var args__27467__auto__ = cljs.core.seq(arglist__28435);
return G__28433__delegate(args__27467__auto__);
});
G__28433.cljs$core$IFn$_invoke$arity$variadic = G__28433__delegate;
return G__28433;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args))
})();
(fexpr__28416_28432.cljs$core$IFn$_invoke$arity$1 ? fexpr__28416_28432.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__28416_28432.call(null,keyw));

var args_28436__$1 = args;
while(true){
if(cljs.core.seq(args_28436__$1)){
var fexpr__28417_28437 = (function (){var format_in__27465__auto__ = " ";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (args_28436__$1,format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args){
return (function() { 
var G__28438__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28438 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28439__i = 0, G__28439__a = new Array(arguments.length -  0);
while (G__28439__i < G__28439__a.length) {G__28439__a[G__28439__i] = arguments[G__28439__i + 0]; ++G__28439__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28439__a,0,null);
} 
return G__28438__delegate.call(this,args__27467__auto__);};
G__28438.cljs$lang$maxFixedArity = 0;
G__28438.cljs$lang$applyTo = (function (arglist__28440){
var args__27467__auto__ = cljs.core.seq(arglist__28440);
return G__28438__delegate(args__27467__auto__);
});
G__28438.cljs$core$IFn$_invoke$arity$variadic = G__28438__delegate;
return G__28438;
})()
;
;})(args_28436__$1,format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args))
})();
(fexpr__28417_28437.cljs$core$IFn$_invoke$arity$0 ? fexpr__28417_28437.cljs$core$IFn$_invoke$arity$0() : fexpr__28417_28437.call(null));

var arg_28441 = cljs.core.first(args_28436__$1);
if(cljs.core.sequential_QMARK_(arg_28441)){
var vec__28418_28442 = cljs.pprint.brackets(arg_28441);
var start_28443__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28418_28442,(0),null);
var end_28444__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28418_28442,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28421_28445 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28422_28446 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_28443__$1,null,end_28444__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_28441),(3))) && ((cljs.core.second(arg_28441) instanceof cljs.core.Keyword))){
var vec__28423_28447 = arg_28441;
var ns_28448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28423_28447,(0),null);
var kw_28449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28423_28447,(1),null);
var lis_28450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28423_28447,(2),null);
var fexpr__28426_28451 = (function (){var format_in__27465__auto__ = "~w ~w ";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (args_28436__$1,format_in__27465__auto__,cf__27466__auto__,vec__28423_28447,ns_28448,kw_28449,lis_28450,_STAR_current_level_STAR_28421_28445,_STAR_current_length_STAR_28422_28446,vec__28418_28442,start_28443__$1,end_28444__$1,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args){
return (function() { 
var G__28452__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28452 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28453__i = 0, G__28453__a = new Array(arguments.length -  0);
while (G__28453__i < G__28453__a.length) {G__28453__a[G__28453__i] = arguments[G__28453__i + 0]; ++G__28453__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28453__a,0,null);
} 
return G__28452__delegate.call(this,args__27467__auto__);};
G__28452.cljs$lang$maxFixedArity = 0;
G__28452.cljs$lang$applyTo = (function (arglist__28454){
var args__27467__auto__ = cljs.core.seq(arglist__28454);
return G__28452__delegate(args__27467__auto__);
});
G__28452.cljs$core$IFn$_invoke$arity$variadic = G__28452__delegate;
return G__28452;
})()
;
;})(args_28436__$1,format_in__27465__auto__,cf__27466__auto__,vec__28423_28447,ns_28448,kw_28449,lis_28450,_STAR_current_level_STAR_28421_28445,_STAR_current_length_STAR_28422_28446,vec__28418_28442,start_28443__$1,end_28444__$1,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args))
})();
(fexpr__28426_28451.cljs$core$IFn$_invoke$arity$2 ? fexpr__28426_28451.cljs$core$IFn$_invoke$arity$2(ns_28448,kw_28449) : fexpr__28426_28451.call(null,ns_28448,kw_28449));

if(cljs.core.sequential_QMARK_(lis_28450)){
var fexpr__28427_28455 = (function (){var format_in__27465__auto__ = ((cljs.core.vector_QMARK_(lis_28450))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (args_28436__$1,format_in__27465__auto__,cf__27466__auto__,vec__28423_28447,ns_28448,kw_28449,lis_28450,_STAR_current_level_STAR_28421_28445,_STAR_current_length_STAR_28422_28446,vec__28418_28442,start_28443__$1,end_28444__$1,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args){
return (function() { 
var G__28456__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28456 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28457__i = 0, G__28457__a = new Array(arguments.length -  0);
while (G__28457__i < G__28457__a.length) {G__28457__a[G__28457__i] = arguments[G__28457__i + 0]; ++G__28457__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28457__a,0,null);
} 
return G__28456__delegate.call(this,args__27467__auto__);};
G__28456.cljs$lang$maxFixedArity = 0;
G__28456.cljs$lang$applyTo = (function (arglist__28458){
var args__27467__auto__ = cljs.core.seq(arglist__28458);
return G__28456__delegate(args__27467__auto__);
});
G__28456.cljs$core$IFn$_invoke$arity$variadic = G__28456__delegate;
return G__28456;
})()
;
;})(args_28436__$1,format_in__27465__auto__,cf__27466__auto__,vec__28423_28447,ns_28448,kw_28449,lis_28450,_STAR_current_level_STAR_28421_28445,_STAR_current_length_STAR_28422_28446,vec__28418_28442,start_28443__$1,end_28444__$1,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args))
})();
(fexpr__28427_28455.cljs$core$IFn$_invoke$arity$1 ? fexpr__28427_28455.cljs$core$IFn$_invoke$arity$1(lis_28450) : fexpr__28427_28455.call(null,lis_28450));
} else {
cljs.pprint.write_out(lis_28450);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27465__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (args_28436__$1,format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28421_28445,_STAR_current_length_STAR_28422_28446,vec__28418_28442,start_28443__$1,end_28444__$1,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args){
return (function() { 
var G__28459__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28459 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28460__i = 0, G__28460__a = new Array(arguments.length -  0);
while (G__28460__i < G__28460__a.length) {G__28460__a[G__28460__i] = arguments[G__28460__i + 0]; ++G__28460__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28460__a,0,null);
} 
return G__28459__delegate.call(this,args__27467__auto__);};
G__28459.cljs$lang$maxFixedArity = 0;
G__28459.cljs$lang$applyTo = (function (arglist__28461){
var args__27467__auto__ = cljs.core.seq(arglist__28461);
return G__28459__delegate(args__27467__auto__);
});
G__28459.cljs$core$IFn$_invoke$arity$variadic = G__28459__delegate;
return G__28459;
})()
;
;})(args_28436__$1,format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28421_28445,_STAR_current_length_STAR_28422_28446,vec__28418_28442,start_28443__$1,end_28444__$1,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args))
})(),arg_28441);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28422_28446;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28421_28445;
}}


if(cljs.core.next(args_28436__$1)){
var fexpr__28428_28462 = (function (){var format_in__27465__auto__ = "~_";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (args_28436__$1,format_in__27465__auto__,cf__27466__auto__,vec__28418_28442,start_28443__$1,end_28444__$1,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args){
return (function() { 
var G__28463__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28463 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28464__i = 0, G__28464__a = new Array(arguments.length -  0);
while (G__28464__i < G__28464__a.length) {G__28464__a[G__28464__i] = arguments[G__28464__i + 0]; ++G__28464__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28464__a,0,null);
} 
return G__28463__delegate.call(this,args__27467__auto__);};
G__28463.cljs$lang$maxFixedArity = 0;
G__28463.cljs$lang$applyTo = (function (arglist__28465){
var args__27467__auto__ = cljs.core.seq(arglist__28465);
return G__28463__delegate(args__27467__auto__);
});
G__28463.cljs$core$IFn$_invoke$arity$variadic = G__28463__delegate;
return G__28463;
})()
;
;})(args_28436__$1,format_in__27465__auto__,cf__27466__auto__,vec__28418_28442,start_28443__$1,end_28444__$1,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args))
})();
(fexpr__28428_28462.cljs$core$IFn$_invoke$arity$0 ? fexpr__28428_28462.cljs$core$IFn$_invoke$arity$0() : fexpr__28428_28462.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_28441);

if(cljs.core.next(args_28436__$1)){
var fexpr__28429_28466 = (function (){var format_in__27465__auto__ = "~:_";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (args_28436__$1,format_in__27465__auto__,cf__27466__auto__,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args){
return (function() { 
var G__28467__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28467 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28468__i = 0, G__28468__a = new Array(arguments.length -  0);
while (G__28468__i < G__28468__a.length) {G__28468__a[G__28468__i] = arguments[G__28468__i + 0]; ++G__28468__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28468__a,0,null);
} 
return G__28467__delegate.call(this,args__27467__auto__);};
G__28467.cljs$lang$maxFixedArity = 0;
G__28467.cljs$lang$applyTo = (function (arglist__28469){
var args__27467__auto__ = cljs.core.seq(arglist__28469);
return G__28467__delegate(args__27467__auto__);
});
G__28467.cljs$core$IFn$_invoke$arity$variadic = G__28467__delegate;
return G__28467;
})()
;
;})(args_28436__$1,format_in__27465__auto__,cf__27466__auto__,arg_28441,_STAR_current_level_STAR_28414_28430,_STAR_current_length_STAR_28415_28431,vec__28408,start,end,vec__28411,seq__28412,first__28413,seq__28412__$1,keyw,args))
})();
(fexpr__28429_28466.cljs$core$IFn$_invoke$arity$0 ? fexpr__28429_28466.cljs$core$IFn$_invoke$arity$0() : fexpr__28429_28466.call(null));
} else {
}
}

var G__28470 = cljs.core.next(args_28436__$1);
args_28436__$1 = G__28470;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28415_28431;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28414_28430;
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
var vec__28471 = alis;
var seq__28472 = cljs.core.seq(vec__28471);
var first__28473 = cljs.core.first(seq__28472);
var seq__28472__$1 = cljs.core.next(seq__28472);
var ns_sym = first__28473;
var first__28473__$1 = cljs.core.first(seq__28472__$1);
var seq__28472__$2 = cljs.core.next(seq__28472__$1);
var ns_name = first__28473__$1;
var stuff = seq__28472__$2;
var vec__28474 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28474,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28474,(1),null);
var vec__28477 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28480_28487 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28481_28488 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__28482_28489 = (function (){var format_in__27465__auto__ = "~w ~1I~@_~w";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28480_28487,_STAR_current_length_STAR_28481_28488,vec__28471,seq__28472,first__28473,seq__28472__$1,ns_sym,first__28473__$1,seq__28472__$2,ns_name,stuff,vec__28474,doc_str,stuff__$1,vec__28477,attr_map,references){
return (function() { 
var G__28490__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28490 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28491__i = 0, G__28491__a = new Array(arguments.length -  0);
while (G__28491__i < G__28491__a.length) {G__28491__a[G__28491__i] = arguments[G__28491__i + 0]; ++G__28491__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28491__a,0,null);
} 
return G__28490__delegate.call(this,args__27467__auto__);};
G__28490.cljs$lang$maxFixedArity = 0;
G__28490.cljs$lang$applyTo = (function (arglist__28492){
var args__27467__auto__ = cljs.core.seq(arglist__28492);
return G__28490__delegate(args__27467__auto__);
});
G__28490.cljs$core$IFn$_invoke$arity$variadic = G__28490__delegate;
return G__28490;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28480_28487,_STAR_current_length_STAR_28481_28488,vec__28471,seq__28472,first__28473,seq__28472__$1,ns_sym,first__28473__$1,seq__28472__$2,ns_name,stuff,vec__28474,doc_str,stuff__$1,vec__28477,attr_map,references))
})();
(fexpr__28482_28489.cljs$core$IFn$_invoke$arity$2 ? fexpr__28482_28489.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__28482_28489.call(null,ns_sym,ns_name));

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
var fexpr__28483_28493 = (function (){var format_in__27465__auto__ = "~@:_";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28480_28487,_STAR_current_length_STAR_28481_28488,vec__28471,seq__28472,first__28473,seq__28472__$1,ns_sym,first__28473__$1,seq__28472__$2,ns_name,stuff,vec__28474,doc_str,stuff__$1,vec__28477,attr_map,references){
return (function() { 
var G__28494__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28494 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28495__i = 0, G__28495__a = new Array(arguments.length -  0);
while (G__28495__i < G__28495__a.length) {G__28495__a[G__28495__i] = arguments[G__28495__i + 0]; ++G__28495__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28495__a,0,null);
} 
return G__28494__delegate.call(this,args__27467__auto__);};
G__28494.cljs$lang$maxFixedArity = 0;
G__28494.cljs$lang$applyTo = (function (arglist__28496){
var args__27467__auto__ = cljs.core.seq(arglist__28496);
return G__28494__delegate(args__27467__auto__);
});
G__28494.cljs$core$IFn$_invoke$arity$variadic = G__28494__delegate;
return G__28494;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28480_28487,_STAR_current_length_STAR_28481_28488,vec__28471,seq__28472,first__28473,seq__28472__$1,ns_sym,first__28473__$1,seq__28472__$2,ns_name,stuff,vec__28474,doc_str,stuff__$1,vec__28477,attr_map,references))
})();
(fexpr__28483_28493.cljs$core$IFn$_invoke$arity$0 ? fexpr__28483_28493.cljs$core$IFn$_invoke$arity$0() : fexpr__28483_28493.call(null));
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
var G__28485_28497 = attr_map;
var G__28486_28498 = cljs.core.seq(references);
var fexpr__28484_28499 = (function (){var format_in__27465__auto__ = "~w~:[~;~:@_~]";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,G__28485_28497,G__28486_28498,_STAR_current_level_STAR_28480_28487,_STAR_current_length_STAR_28481_28488,vec__28471,seq__28472,first__28473,seq__28472__$1,ns_sym,first__28473__$1,seq__28472__$2,ns_name,stuff,vec__28474,doc_str,stuff__$1,vec__28477,attr_map,references){
return (function() { 
var G__28500__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28500 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28501__i = 0, G__28501__a = new Array(arguments.length -  0);
while (G__28501__i < G__28501__a.length) {G__28501__a[G__28501__i] = arguments[G__28501__i + 0]; ++G__28501__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28501__a,0,null);
} 
return G__28500__delegate.call(this,args__27467__auto__);};
G__28500.cljs$lang$maxFixedArity = 0;
G__28500.cljs$lang$applyTo = (function (arglist__28502){
var args__27467__auto__ = cljs.core.seq(arglist__28502);
return G__28500__delegate(args__27467__auto__);
});
G__28500.cljs$core$IFn$_invoke$arity$variadic = G__28500__delegate;
return G__28500;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,G__28485_28497,G__28486_28498,_STAR_current_level_STAR_28480_28487,_STAR_current_length_STAR_28481_28488,vec__28471,seq__28472,first__28473,seq__28472__$1,ns_sym,first__28473__$1,seq__28472__$2,ns_name,stuff,vec__28474,doc_str,stuff__$1,vec__28477,attr_map,references))
})();
(fexpr__28484_28499.cljs$core$IFn$_invoke$arity$2 ? fexpr__28484_28499.cljs$core$IFn$_invoke$arity$2(G__28485_28497,G__28486_28498) : fexpr__28484_28499.call(null,G__28485_28497,G__28486_28498));
} else {
}

var references_28503__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_28503__$1));

var temp__5457__auto___28504 = cljs.core.next(references_28503__$1);
if(temp__5457__auto___28504){
var references_28505__$2 = temp__5457__auto___28504;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28506 = references_28505__$2;
references_28503__$1 = G__28506;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28481_28488;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28480_28487;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__27465__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28507__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28507 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28508__i = 0, G__28508__a = new Array(arguments.length -  0);
while (G__28508__i < G__28508__a.length) {G__28508__a[G__28508__i] = arguments[G__28508__i + 0]; ++G__28508__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28508__a,0,null);
} 
return G__28507__delegate.call(this,args__27467__auto__);};
G__28507.cljs$lang$maxFixedArity = 0;
G__28507.cljs$lang$applyTo = (function (arglist__28509){
var args__27467__auto__ = cljs.core.seq(arglist__28509);
return G__28507__delegate(args__27467__auto__);
});
G__28507.cljs$core$IFn$_invoke$arity$variadic = G__28507__delegate;
return G__28507;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__28510_28513 = (function (){var format_in__27465__auto__ = " ~_";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28514__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28514 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28515__i = 0, G__28515__a = new Array(arguments.length -  0);
while (G__28515__i < G__28515__a.length) {G__28515__a[G__28515__i] = arguments[G__28515__i + 0]; ++G__28515__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28515__a,0,null);
} 
return G__28514__delegate.call(this,args__27467__auto__);};
G__28514.cljs$lang$maxFixedArity = 0;
G__28514.cljs$lang$applyTo = (function (arglist__28516){
var args__27467__auto__ = cljs.core.seq(arglist__28516);
return G__28514__delegate(args__27467__auto__);
});
G__28514.cljs$core$IFn$_invoke$arity$variadic = G__28514__delegate;
return G__28514;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
})();
(fexpr__28510_28513.cljs$core$IFn$_invoke$arity$0 ? fexpr__28510_28513.cljs$core$IFn$_invoke$arity$0() : fexpr__28510_28513.call(null));
} else {
var fexpr__28511_28517 = (function (){var format_in__27465__auto__ = " ~@_";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28518__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28518 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28519__i = 0, G__28519__a = new Array(arguments.length -  0);
while (G__28519__i < G__28519__a.length) {G__28519__a[G__28519__i] = arguments[G__28519__i + 0]; ++G__28519__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28519__a,0,null);
} 
return G__28518__delegate.call(this,args__27467__auto__);};
G__28518.cljs$lang$maxFixedArity = 0;
G__28518.cljs$lang$applyTo = (function (arglist__28520){
var args__27467__auto__ = cljs.core.seq(arglist__28520);
return G__28518__delegate(args__27467__auto__);
});
G__28518.cljs$core$IFn$_invoke$arity$variadic = G__28518__delegate;
return G__28518;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
})();
(fexpr__28511_28517.cljs$core$IFn$_invoke$arity$0 ? fexpr__28511_28517.cljs$core$IFn$_invoke$arity$0() : fexpr__28511_28517.call(null));
}

var fexpr__28512 = (function (){var format_in__27465__auto__ = "~{~w~^ ~_~}";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28521__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28521 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28522__i = 0, G__28522__a = new Array(arguments.length -  0);
while (G__28522__i < G__28522__a.length) {G__28522__a[G__28522__i] = arguments[G__28522__i + 0]; ++G__28522__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28522__a,0,null);
} 
return G__28521__delegate.call(this,args__27467__auto__);};
G__28521.cljs$lang$maxFixedArity = 0;
G__28521.cljs$lang$applyTo = (function (arglist__28523){
var args__27467__auto__ = cljs.core.seq(arglist__28523);
return G__28521__delegate(args__27467__auto__);
});
G__28521.cljs$core$IFn$_invoke$arity$variadic = G__28521__delegate;
return G__28521;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
})();
return (fexpr__28512.cljs$core$IFn$_invoke$arity$1 ? fexpr__28512.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__28512.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__28524 = (function (){var format_in__27465__auto__ = " ~_~{~w~^ ~_~}";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28525__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28525 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28526__i = 0, G__28526__a = new Array(arguments.length -  0);
while (G__28526__i < G__28526__a.length) {G__28526__a[G__28526__i] = arguments[G__28526__i + 0]; ++G__28526__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28526__a,0,null);
} 
return G__28525__delegate.call(this,args__27467__auto__);};
G__28525.cljs$lang$maxFixedArity = 0;
G__28525.cljs$lang$applyTo = (function (arglist__28527){
var args__27467__auto__ = cljs.core.seq(arglist__28527);
return G__28525__delegate(args__27467__auto__);
});
G__28525.cljs$core$IFn$_invoke$arity$variadic = G__28525__delegate;
return G__28525;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
})();
return (fexpr__28524.cljs$core$IFn$_invoke$arity$1 ? fexpr__28524.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__28524.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__28528 = alis;
var seq__28529 = cljs.core.seq(vec__28528);
var first__28530 = cljs.core.first(seq__28529);
var seq__28529__$1 = cljs.core.next(seq__28529);
var defn_sym = first__28530;
var first__28530__$1 = cljs.core.first(seq__28529__$1);
var seq__28529__$2 = cljs.core.next(seq__28529__$1);
var defn_name = first__28530__$1;
var stuff = seq__28529__$2;
var vec__28531 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(1),null);
var vec__28534 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28534,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28534,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28537_28542 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28538_28543 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__28539_28544 = (function (){var format_in__27465__auto__ = "~w ~1I~@_~w";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28537_28542,_STAR_current_length_STAR_28538_28543,vec__28528,seq__28529,first__28530,seq__28529__$1,defn_sym,first__28530__$1,seq__28529__$2,defn_name,stuff,vec__28531,doc_str,stuff__$1,vec__28534,attr_map,stuff__$2){
return (function() { 
var G__28545__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28545 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28546__i = 0, G__28546__a = new Array(arguments.length -  0);
while (G__28546__i < G__28546__a.length) {G__28546__a[G__28546__i] = arguments[G__28546__i + 0]; ++G__28546__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28546__a,0,null);
} 
return G__28545__delegate.call(this,args__27467__auto__);};
G__28545.cljs$lang$maxFixedArity = 0;
G__28545.cljs$lang$applyTo = (function (arglist__28547){
var args__27467__auto__ = cljs.core.seq(arglist__28547);
return G__28545__delegate(args__27467__auto__);
});
G__28545.cljs$core$IFn$_invoke$arity$variadic = G__28545__delegate;
return G__28545;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28537_28542,_STAR_current_length_STAR_28538_28543,vec__28528,seq__28529,first__28530,seq__28529__$1,defn_sym,first__28530__$1,seq__28529__$2,defn_name,stuff,vec__28531,doc_str,stuff__$1,vec__28534,attr_map,stuff__$2))
})();
(fexpr__28539_28544.cljs$core$IFn$_invoke$arity$2 ? fexpr__28539_28544.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__28539_28544.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__28540_28548 = (function (){var format_in__27465__auto__ = " ~_~w";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28537_28542,_STAR_current_length_STAR_28538_28543,vec__28528,seq__28529,first__28530,seq__28529__$1,defn_sym,first__28530__$1,seq__28529__$2,defn_name,stuff,vec__28531,doc_str,stuff__$1,vec__28534,attr_map,stuff__$2){
return (function() { 
var G__28549__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28549 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28550__i = 0, G__28550__a = new Array(arguments.length -  0);
while (G__28550__i < G__28550__a.length) {G__28550__a[G__28550__i] = arguments[G__28550__i + 0]; ++G__28550__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28550__a,0,null);
} 
return G__28549__delegate.call(this,args__27467__auto__);};
G__28549.cljs$lang$maxFixedArity = 0;
G__28549.cljs$lang$applyTo = (function (arglist__28551){
var args__27467__auto__ = cljs.core.seq(arglist__28551);
return G__28549__delegate(args__27467__auto__);
});
G__28549.cljs$core$IFn$_invoke$arity$variadic = G__28549__delegate;
return G__28549;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28537_28542,_STAR_current_length_STAR_28538_28543,vec__28528,seq__28529,first__28530,seq__28529__$1,defn_sym,first__28530__$1,seq__28529__$2,defn_name,stuff,vec__28531,doc_str,stuff__$1,vec__28534,attr_map,stuff__$2))
})();
(fexpr__28540_28548.cljs$core$IFn$_invoke$arity$1 ? fexpr__28540_28548.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__28540_28548.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__28541_28552 = (function (){var format_in__27465__auto__ = " ~_~w";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28537_28542,_STAR_current_length_STAR_28538_28543,vec__28528,seq__28529,first__28530,seq__28529__$1,defn_sym,first__28530__$1,seq__28529__$2,defn_name,stuff,vec__28531,doc_str,stuff__$1,vec__28534,attr_map,stuff__$2){
return (function() { 
var G__28553__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28553 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28554__i = 0, G__28554__a = new Array(arguments.length -  0);
while (G__28554__i < G__28554__a.length) {G__28554__a[G__28554__i] = arguments[G__28554__i + 0]; ++G__28554__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28554__a,0,null);
} 
return G__28553__delegate.call(this,args__27467__auto__);};
G__28553.cljs$lang$maxFixedArity = 0;
G__28553.cljs$lang$applyTo = (function (arglist__28555){
var args__27467__auto__ = cljs.core.seq(arglist__28555);
return G__28553__delegate(args__27467__auto__);
});
G__28553.cljs$core$IFn$_invoke$arity$variadic = G__28553__delegate;
return G__28553;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28537_28542,_STAR_current_length_STAR_28538_28543,vec__28528,seq__28529,first__28530,seq__28529__$1,defn_sym,first__28530__$1,seq__28529__$2,defn_name,stuff,vec__28531,doc_str,stuff__$1,vec__28534,attr_map,stuff__$2))
})();
(fexpr__28541_28552.cljs$core$IFn$_invoke$arity$1 ? fexpr__28541_28552.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__28541_28552.call(null,attr_map));
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28538_28543;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28537_28542;
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
var _STAR_current_level_STAR_28556_28561 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28557_28562 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28558_28563 = (0);
var binding_28564 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28558_28563 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_28564)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28559_28565 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28560_28566 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_28564));

if(cljs.core.next(binding_28564)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_28564));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28560_28566;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28559_28565;
}}


if(cljs.core.next(cljs.core.rest(binding_28564))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28567 = (length_count28558_28563 + (1));
var G__28568 = cljs.core.next(cljs.core.rest(binding_28564));
length_count28558_28563 = G__28567;
binding_28564 = G__28568;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28557_28562;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28556_28561;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28569_28574 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28570_28575 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__28571_28576 = (function (){var format_in__27465__auto__ = "~w ~1I~@_";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28569_28574,_STAR_current_length_STAR_28570_28575,base_sym){
return (function() { 
var G__28577__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28577 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28578__i = 0, G__28578__a = new Array(arguments.length -  0);
while (G__28578__i < G__28578__a.length) {G__28578__a[G__28578__i] = arguments[G__28578__i + 0]; ++G__28578__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28578__a,0,null);
} 
return G__28577__delegate.call(this,args__27467__auto__);};
G__28577.cljs$lang$maxFixedArity = 0;
G__28577.cljs$lang$applyTo = (function (arglist__28579){
var args__27467__auto__ = cljs.core.seq(arglist__28579);
return G__28577__delegate(args__27467__auto__);
});
G__28577.cljs$core$IFn$_invoke$arity$variadic = G__28577__delegate;
return G__28577;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28569_28574,_STAR_current_length_STAR_28570_28575,base_sym))
})();
(fexpr__28571_28576.cljs$core$IFn$_invoke$arity$1 ? fexpr__28571_28576.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__28571_28576.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__28573_28580 = cljs.core.next(cljs.core.rest(alis));
var fexpr__28572_28581 = (function (){var format_in__27465__auto__ = " ~_~{~w~^ ~_~}";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,G__28573_28580,_STAR_current_level_STAR_28569_28574,_STAR_current_length_STAR_28570_28575,base_sym){
return (function() { 
var G__28582__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28582 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28583__i = 0, G__28583__a = new Array(arguments.length -  0);
while (G__28583__i < G__28583__a.length) {G__28583__a[G__28583__i] = arguments[G__28583__i + 0]; ++G__28583__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28583__a,0,null);
} 
return G__28582__delegate.call(this,args__27467__auto__);};
G__28582.cljs$lang$maxFixedArity = 0;
G__28582.cljs$lang$applyTo = (function (arglist__28584){
var args__27467__auto__ = cljs.core.seq(arglist__28584);
return G__28582__delegate(args__27467__auto__);
});
G__28582.cljs$core$IFn$_invoke$arity$variadic = G__28582__delegate;
return G__28582;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,G__28573_28580,_STAR_current_level_STAR_28569_28574,_STAR_current_length_STAR_28570_28575,base_sym))
})();
(fexpr__28572_28581.cljs$core$IFn$_invoke$arity$1 ? fexpr__28572_28581.cljs$core$IFn$_invoke$arity$1(G__28573_28580) : fexpr__28572_28581.call(null,G__28573_28580));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28570_28575;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28569_28574;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__27465__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__){
return (function() { 
var G__28585__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28585 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28586__i = 0, G__28586__a = new Array(arguments.length -  0);
while (G__28586__i < G__28586__a.length) {G__28586__a[G__28586__i] = arguments[G__28586__i + 0]; ++G__28586__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28586__a,0,null);
} 
return G__28585__delegate.call(this,args__27467__auto__);};
G__28585.cljs$lang$maxFixedArity = 0;
G__28585.cljs$lang$applyTo = (function (arglist__28587){
var args__27467__auto__ = cljs.core.seq(arglist__28587);
return G__28585__delegate(args__27467__auto__);
});
G__28585.cljs$core$IFn$_invoke$arity$variadic = G__28585__delegate;
return G__28585;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28588_28593 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28589_28594 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count28590_28595 = (0);
var alis_28596__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28590_28595 < cljs.core._STAR_print_length_STAR_))){
if(alis_28596__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28591_28597 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28592_28598 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_28596__$1));

if(cljs.core.next(alis_28596__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_28596__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28592_28598;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28591_28597;
}}


if(cljs.core.next(cljs.core.rest(alis_28596__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28599 = (length_count28590_28595 + (1));
var G__28600 = cljs.core.next(cljs.core.rest(alis_28596__$1));
length_count28590_28595 = G__28599;
alis_28596__$1 = G__28600;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28589_28594;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28588_28593;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28601_28606 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28602_28607 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27465__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28601_28606,_STAR_current_length_STAR_28602_28607){
return (function() { 
var G__28608__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28608 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28609__i = 0, G__28609__a = new Array(arguments.length -  0);
while (G__28609__i < G__28609__a.length) {G__28609__a[G__28609__i] = arguments[G__28609__i + 0]; ++G__28609__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28609__a,0,null);
} 
return G__28608__delegate.call(this,args__27467__auto__);};
G__28608.cljs$lang$maxFixedArity = 0;
G__28608.cljs$lang$applyTo = (function (arglist__28610){
var args__27467__auto__ = cljs.core.seq(arglist__28610);
return G__28608__delegate(args__27467__auto__);
});
G__28608.cljs$core$IFn$_invoke$arity$variadic = G__28608__delegate;
return G__28608;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_current_level_STAR_28601_28606,_STAR_current_length_STAR_28602_28607))
})(),alis);

var length_count28603_28611 = (0);
var alis_28612__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28603_28611 < cljs.core._STAR_print_length_STAR_))){
if(alis_28612__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28604_28613 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28605_28614 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_28612__$1));

if(cljs.core.next(alis_28612__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_28612__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28605_28614;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28604_28613;
}}


if(cljs.core.next(cljs.core.rest(alis_28612__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28615 = (length_count28603_28611 + (1));
var G__28616 = cljs.core.next(cljs.core.rest(alis_28612__$1));
length_count28603_28611 = G__28615;
alis_28612__$1 = G__28616;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28602_28607;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28601_28606;
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
var _STAR_symbol_map_STAR_28619 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_28619,args,nlis){
return (function (p1__28617_SHARP_,p2__28618_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28617_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28618_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_28619,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__28620 = (function (){var format_in__27465__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__27466__auto__ = ((typeof format_in__27465__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27465__auto__) : cljs.pprint.cached_compile.call(null,format_in__27465__auto__)):format_in__27465__auto__);
return ((function (format_in__27465__auto__,cf__27466__auto__,_STAR_symbol_map_STAR_28619,args,nlis){
return (function() { 
var G__28621__delegate = function (args__27467__auto__){
var navigator__27468__auto__ = cljs.pprint.init_navigator(args__27467__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27466__auto__,navigator__27468__auto__);
};
var G__28621 = function (var_args){
var args__27467__auto__ = null;
if (arguments.length > 0) {
var G__28622__i = 0, G__28622__a = new Array(arguments.length -  0);
while (G__28622__i < G__28622__a.length) {G__28622__a[G__28622__i] = arguments[G__28622__i + 0]; ++G__28622__i;}
  args__27467__auto__ = new cljs.core.IndexedSeq(G__28622__a,0,null);
} 
return G__28621__delegate.call(this,args__27467__auto__);};
G__28621.cljs$lang$maxFixedArity = 0;
G__28621.cljs$lang$applyTo = (function (arglist__28623){
var args__27467__auto__ = cljs.core.seq(arglist__28623);
return G__28621__delegate(args__27467__auto__);
});
G__28621.cljs$core$IFn$_invoke$arity$variadic = G__28621__delegate;
return G__28621;
})()
;
;})(format_in__27465__auto__,cf__27466__auto__,_STAR_symbol_map_STAR_28619,args,nlis))
})();
return (fexpr__28620.cljs$core$IFn$_invoke$arity$1 ? fexpr__28620.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__28620.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_28619;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28624_28627 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28625_28628 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count28626_28629 = (0);
var alis_28630__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28626_28629 < cljs.core._STAR_print_length_STAR_))){
if(alis_28630__$1){
cljs.pprint.write_out(cljs.core.first(alis_28630__$1));

if(cljs.core.next(alis_28630__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__28631 = (length_count28626_28629 + (1));
var G__28632 = cljs.core.next(alis_28630__$1);
length_count28626_28629 = G__28631;
alis_28630__$1 = G__28632;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28625_28628;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28624_28627;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9270__auto__ = (function cljs$pprint$two_forms_$_iter__28633(s__28634){
return (new cljs.core.LazySeq(null,(function (){
var s__28634__$1 = s__28634;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28634__$1);
if(temp__5457__auto__){
var s__28634__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28634__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28634__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28636 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28635 = (0);
while(true){
if((i__28635 < size__9269__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28635);
cljs.core.chunk_append(b__28636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__28637 = (i__28635 + (1));
i__28635 = G__28637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28636),cljs$pprint$two_forms_$_iter__28633(cljs.core.chunk_rest(s__28634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28636),null);
}
} else {
var x = cljs.core.first(s__28634__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__28633(cljs.core.rest(s__28634__$2)));
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
return (function (p1__28638_SHARP_){
var vec__28639 = p1__28638_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(1),null);
if(cljs.core.not((function (){var or__8388__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__28638_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5455__auto__ = (function (){var G__28642 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__28642) : cljs.pprint._STAR_code_table_STAR_.call(null,G__28642));
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
var G__28647 = arguments.length;
switch (G__28647) {
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
var _STAR_print_newline_STAR_28648 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_28648){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_28648){
return (function (p1__28643_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__28643_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_28648))
,rows));
});})(_STAR_print_newline_STAR_28648))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_28648){
return (function (p1__28644_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__28644_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_28648))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_28648){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__9270__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_28648){
return (function cljs$pprint$iter__28649(s__28650){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_28648){
return (function (){
var s__28650__$1 = s__28650;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28650__$1);
if(temp__5457__auto__){
var s__28650__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28650__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__28650__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__28652 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__28651 = (0);
while(true){
if((i__28651 < size__9269__auto__)){
var vec__28653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__28651);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(1),null);
cljs.core.chunk_append(b__28652,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__28664 = (i__28651 + (1));
i__28651 = G__28664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28652),cljs$pprint$iter__28649(cljs.core.chunk_rest(s__28650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28652),null);
}
} else {
var vec__28656 = cljs.core.first(s__28650__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28656,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28656,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__28649(cljs.core.rest(s__28650__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_28648))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_28648))
;
return iter__9270__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__9270__auto__,widths,spacers,_STAR_print_newline_STAR_28648){
return (function (p1__28645_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__28645_SHARP_);
});})(iter__9270__auto__,widths,spacers,_STAR_print_newline_STAR_28648))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_28648))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__28659 = cljs.core.seq(rows);
var chunk__28660 = null;
var count__28661 = (0);
var i__28662 = (0);
while(true){
if((i__28662 < count__28661)){
var row = chunk__28660.cljs$core$IIndexed$_nth$arity$2(null,i__28662);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__28665 = seq__28659;
var G__28666 = chunk__28660;
var G__28667 = count__28661;
var G__28668 = (i__28662 + (1));
seq__28659 = G__28665;
chunk__28660 = G__28666;
count__28661 = G__28667;
i__28662 = G__28668;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28659);
if(temp__5457__auto__){
var seq__28659__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28659__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__28659__$1);
var G__28669 = cljs.core.chunk_rest(seq__28659__$1);
var G__28670 = c__9319__auto__;
var G__28671 = cljs.core.count(c__9319__auto__);
var G__28672 = (0);
seq__28659 = G__28669;
chunk__28660 = G__28670;
count__28661 = G__28671;
i__28662 = G__28672;
continue;
} else {
var row = cljs.core.first(seq__28659__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__28673 = cljs.core.next(seq__28659__$1);
var G__28674 = null;
var G__28675 = (0);
var G__28676 = (0);
seq__28659 = G__28673;
chunk__28660 = G__28674;
count__28661 = G__28675;
i__28662 = G__28676;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28648;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

