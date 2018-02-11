// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__37519__auto___41945 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___41946 = arguments.length;
var i__37480__auto___41947 = (0);
while(true){
if((i__37480__auto___41947 < len__37479__auto___41946)){
args__37486__auto__.push((arguments[i__37480__auto___41947]));

var G__41948 = (i__37480__auto___41947 + (1));
i__37480__auto___41947 = G__41948;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})());
var G__41949 = threaded;
var G__41950 = cljs.core.next.call(null,forms__$1);
x__$1 = G__41949;
forms__$1 = G__41950;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq41941){
var G__41942 = cljs.core.first.call(null,seq41941);
var seq41941__$1 = cljs.core.next.call(null,seq41941);
var G__41943 = cljs.core.first.call(null,seq41941__$1);
var seq41941__$2 = cljs.core.next.call(null,seq41941__$1);
var G__41944 = cljs.core.first.call(null,seq41941__$2);
var seq41941__$3 = cljs.core.next.call(null,seq41941__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__41942,G__41943,G__41944,seq41941__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__37519__auto___41955 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___41956 = arguments.length;
var i__37480__auto___41957 = (0);
while(true){
if((i__37480__auto___41957 < len__37479__auto___41956)){
args__37486__auto__.push((arguments[i__37480__auto___41957]));

var G__41958 = (i__37480__auto___41957 + (1));
i__37480__auto___41957 = G__41958;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__37170__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})());
var G__41959 = threaded;
var G__41960 = cljs.core.next.call(null,forms__$1);
x__$1 = G__41959;
forms__$1 = G__41960;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq41951){
var G__41952 = cljs.core.first.call(null,seq41951);
var seq41951__$1 = cljs.core.next.call(null,seq41951);
var G__41953 = cljs.core.first.call(null,seq41951__$1);
var seq41951__$2 = cljs.core.next.call(null,seq41951__$1);
var G__41954 = cljs.core.first.call(null,seq41951__$2);
var seq41951__$3 = cljs.core.next.call(null,seq41951__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__41952,G__41953,G__41954,seq41951__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__37519__auto___41968 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__41967 = arguments.length;
switch (G__41967) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___41970 = arguments.length;
var i__37480__auto___41971 = (0);
while(true){
if((i__37480__auto___41971 < len__37479__auto___41970)){
args_arr__37498__auto__.push((arguments[i__37480__auto___41971]));

var G__41972 = (i__37480__auto___41971 + (1));
i__37480__auto___41971 = G__41972;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq41962){
var G__41963 = cljs.core.first.call(null,seq41962);
var seq41962__$1 = cljs.core.next.call(null,seq41962);
var G__41964 = cljs.core.first.call(null,seq41962__$1);
var seq41962__$2 = cljs.core.next.call(null,seq41962__$1);
var G__41965 = cljs.core.first.call(null,seq41962__$2);
var seq41962__$3 = cljs.core.next.call(null,seq41962__$2);
var G__41966 = cljs.core.first.call(null,seq41962__$3);
var seq41962__$4 = cljs.core.next.call(null,seq41962__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__41963,G__41964,G__41965,G__41966,seq41962__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__37519__auto___41976 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__37486__auto__ = [];
var len__37479__auto___41977 = arguments.length;
var i__37480__auto___41978 = (0);
while(true){
if((i__37480__auto___41978 < len__37479__auto___41977)){
args__37486__auto__.push((arguments[i__37480__auto___41978]));

var G__41979 = (i__37480__auto___41978 + (1));
i__37480__auto___41978 = G__41979;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq41973){
var G__41974 = cljs.core.first.call(null,seq41973);
var seq41973__$1 = cljs.core.next.call(null,seq41973);
var G__41975 = cljs.core.first.call(null,seq41973__$1);
var seq41973__$2 = cljs.core.next.call(null,seq41973__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__41974,G__41975,seq41973__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__37519__auto___41983 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__37486__auto__ = [];
var len__37479__auto___41984 = arguments.length;
var i__37480__auto___41985 = (0);
while(true){
if((i__37480__auto___41985 < len__37479__auto___41984)){
args__37486__auto__.push((arguments[i__37480__auto___41985]));

var G__41986 = (i__37480__auto___41985 + (1));
i__37480__auto___41985 = G__41986;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__37170__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$2);
})(),x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq41980){
var G__41981 = cljs.core.first.call(null,seq41980);
var seq41980__$1 = cljs.core.next.call(null,seq41980);
var G__41982 = cljs.core.first.call(null,seq41980__$1);
var seq41980__$2 = cljs.core.next.call(null,seq41980__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__41981,G__41982,seq41980__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__37519__auto___41991 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__37486__auto__ = [];
var len__37479__auto___41992 = arguments.length;
var i__37480__auto___41993 = (0);
while(true){
if((i__37480__auto___41993 < len__37479__auto___41992)){
args__37486__auto__.push((arguments[i__37480__auto___41993]));

var G__41994 = (i__37480__auto___41993 + (1));
i__37480__auto___41993 = G__41994;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__41987_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.vary_meta.call(null,p1__41987_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq41988){
var G__41989 = cljs.core.first.call(null,seq41988);
var seq41988__$1 = cljs.core.next.call(null,seq41988);
var G__41990 = cljs.core.first.call(null,seq41988__$1);
var seq41988__$2 = cljs.core.next.call(null,seq41988__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__41989,G__41990,seq41988__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__37519__auto___41999 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42000 = arguments.length;
var i__37480__auto___42001 = (0);
while(true){
if((i__37480__auto___42001 < len__37479__auto___42000)){
args__37486__auto__.push((arguments[i__37480__auto___42001]));

var G__42002 = (i__37480__auto___42001 + (1));
i__37480__auto___42001 = G__42002;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__37170__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq41995){
var G__41996 = cljs.core.first.call(null,seq41995);
var seq41995__$1 = cljs.core.next.call(null,seq41995);
var G__41997 = cljs.core.first.call(null,seq41995__$1);
var seq41995__$2 = cljs.core.next.call(null,seq41995__$1);
var G__41998 = cljs.core.first.call(null,seq41995__$2);
var seq41995__$3 = cljs.core.next.call(null,seq41995__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__41996,G__41997,G__41998,seq41995__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__42003 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__42004 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__42003;
s = G__42004;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__42005){
var vec__42006 = p__42005;
var t = cljs.core.nth.call(null,vec__42006,(0),null);
var fs = cljs.core.nth.call(null,vec__42006,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__37170__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__37519__auto___42013 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42014 = arguments.length;
var i__37480__auto___42015 = (0);
while(true){
if((i__37480__auto___42015 < len__37479__auto___42014)){
args__37486__auto__.push((arguments[i__37480__auto___42015]));

var G__42016 = (i__37480__auto___42015 + (1));
i__37480__auto___42015 = G__42016;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq42009){
var G__42010 = cljs.core.first.call(null,seq42009);
var seq42009__$1 = cljs.core.next.call(null,seq42009);
var G__42011 = cljs.core.first.call(null,seq42009__$1);
var seq42009__$2 = cljs.core.next.call(null,seq42009__$1);
var G__42012 = cljs.core.first.call(null,seq42009__$2);
var seq42009__$3 = cljs.core.next.call(null,seq42009__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__42010,G__42011,G__42012,seq42009__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__42017 = cljs.core.next.call(null,params__$1);
var G__42018 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__42019 = lets;
params__$1 = G__42017;
new_params = G__42018;
lets = G__42019;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__42020 = cljs.core.next.call(null,params__$1);
var G__42021 = cljs.core.conj.call(null,new_params,gparam);
var G__42022 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__42020;
new_params = G__42021;
lets = G__42022;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
break;
}
}
});
var ret__37519__auto___42029 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42030 = arguments.length;
var i__37480__auto___42031 = (0);
while(true){
if((i__37480__auto___42031 < len__37479__auto___42030)){
args__37486__auto__.push((arguments[i__37480__auto___42031]));

var G__42032 = (i__37480__auto___42031 + (1));
i__37480__auto___42031 = G__42032;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__37170__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__42026 = sig;
var seq__42027 = cljs.core.seq.call(null,vec__42026);
var first__42028 = cljs.core.first.call(null,seq__42027);
var seq__42027__$1 = cljs.core.next.call(null,seq__42027);
var params = first__42028;
var body = seq__42027__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__36308__auto__ = conds;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__37170__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.map.call(null,((function (vec__42026,seq__42027,first__42028,seq__42027__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__37170__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(vec__42026,seq__42027,first__42028,seq__42027__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__42026,seq__42027,first__42028,seq__42027__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__37170__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(vec__42026,seq__42027,first__42028,seq__42027__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq42023){
var G__42024 = cljs.core.first.call(null,seq42023);
var seq42023__$1 = cljs.core.next.call(null,seq42023);
var G__42025 = cljs.core.first.call(null,seq42023__$1);
var seq42023__$2 = cljs.core.next.call(null,seq42023__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__42024,G__42025,seq42023__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__37519__auto___42037 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42038 = arguments.length;
var i__37480__auto___42039 = (0);
while(true){
if((i__37480__auto___42039 < len__37479__auto___42038)){
args__37486__auto__.push((arguments[i__37480__auto___42039]));

var G__42040 = (i__37480__auto___42039 + (1));
i__37480__auto___42039 = G__42040;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq42033){
var G__42034 = cljs.core.first.call(null,seq42033);
var seq42033__$1 = cljs.core.next.call(null,seq42033);
var G__42035 = cljs.core.first.call(null,seq42033__$1);
var seq42033__$2 = cljs.core.next.call(null,seq42033__$1);
var G__42036 = cljs.core.first.call(null,seq42033__$2);
var seq42033__$3 = cljs.core.next.call(null,seq42033__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__42034,G__42035,G__42036,seq42033__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__37519__auto___42050 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__42049 = arguments.length;
switch (G__42049) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42052 = arguments.length;
var i__37480__auto___42053 = (0);
while(true){
if((i__37480__auto___42053 < len__37479__auto___42052)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42053]));

var G__42054 = (i__37480__auto___42053 + (1));
i__37480__auto___42053 = G__42054;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__37499__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__37170__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42041__auto__","temp__42041__auto__",1759304641,null)),(function (){var x__37170__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42041__auto__","temp__42041__auto__",1759304641,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42041__auto__","temp__42041__auto__",1759304641,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq42043){
var G__42044 = cljs.core.first.call(null,seq42043);
var seq42043__$1 = cljs.core.next.call(null,seq42043);
var G__42045 = cljs.core.first.call(null,seq42043__$1);
var seq42043__$2 = cljs.core.next.call(null,seq42043__$1);
var G__42046 = cljs.core.first.call(null,seq42043__$2);
var seq42043__$3 = cljs.core.next.call(null,seq42043__$2);
var G__42047 = cljs.core.first.call(null,seq42043__$3);
var seq42043__$4 = cljs.core.next.call(null,seq42043__$3);
var G__42048 = cljs.core.first.call(null,seq42043__$4);
var seq42043__$5 = cljs.core.next.call(null,seq42043__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__42044,G__42045,G__42046,G__42047,G__42048,seq42043__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__37519__auto___42057 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__42056 = arguments.length;
switch (G__42056) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__37170__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__37519__auto___42064 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42065 = arguments.length;
var i__37480__auto___42066 = (0);
while(true){
if((i__37480__auto___42066 < len__37479__auto___42065)){
args__37486__auto__.push((arguments[i__37480__auto___42066]));

var G__42067 = (i__37480__auto___42066 + (1));
i__37480__auto___42066 = G__42067;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__42059_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__42059_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq42060){
var G__42061 = cljs.core.first.call(null,seq42060);
var seq42060__$1 = cljs.core.next.call(null,seq42060);
var G__42062 = cljs.core.first.call(null,seq42060__$1);
var seq42060__$2 = cljs.core.next.call(null,seq42060__$1);
var G__42063 = cljs.core.first.call(null,seq42060__$2);
var seq42060__$3 = cljs.core.next.call(null,seq42060__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__42061,G__42062,G__42063,seq42060__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__37519__auto___42072 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42073 = arguments.length;
var i__37480__auto___42074 = (0);
while(true){
if((i__37480__auto___42074 < len__37479__auto___42073)){
args__37486__auto__.push((arguments[i__37480__auto___42074]));

var G__42075 = (i__37480__auto___42074 + (1));
i__37480__auto___42074 = G__42075;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq42068){
var G__42069 = cljs.core.first.call(null,seq42068);
var seq42068__$1 = cljs.core.next.call(null,seq42068);
var G__42070 = cljs.core.first.call(null,seq42068__$1);
var seq42068__$2 = cljs.core.next.call(null,seq42068__$1);
var G__42071 = cljs.core.first.call(null,seq42068__$2);
var seq42068__$3 = cljs.core.next.call(null,seq42068__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__42069,G__42070,G__42071,seq42068__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__37519__auto___42080 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42081 = arguments.length;
var i__37480__auto___42082 = (0);
while(true){
if((i__37480__auto___42082 < len__37479__auto___42081)){
args__37486__auto__.push((arguments[i__37480__auto___42082]));

var G__42083 = (i__37480__auto___42082 + (1));
i__37480__auto___42082 = G__42083;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq42076){
var G__42077 = cljs.core.first.call(null,seq42076);
var seq42076__$1 = cljs.core.next.call(null,seq42076);
var G__42078 = cljs.core.first.call(null,seq42076__$1);
var seq42076__$2 = cljs.core.next.call(null,seq42076__$1);
var G__42079 = cljs.core.first.call(null,seq42076__$2);
var seq42076__$3 = cljs.core.next.call(null,seq42076__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__42077,G__42078,G__42079,seq42076__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__37519__auto___42092 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42093 = arguments.length;
var i__37480__auto___42094 = (0);
while(true){
if((i__37480__auto___42094 < len__37479__auto___42093)){
args__37486__auto__.push((arguments[i__37480__auto___42094]));

var G__42095 = (i__37480__auto___42094 + (1));
i__37480__auto___42094 = G__42095;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__42089 = bindings;
var x = cljs.core.nth.call(null,vec__42089,(0),null);
var xs = cljs.core.nth.call(null,vec__42089,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__42084__auto__","xs__42084__auto__",2068947667,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__42084__auto__","xs__42084__auto__",2068947667,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq42085){
var G__42086 = cljs.core.first.call(null,seq42085);
var seq42085__$1 = cljs.core.next.call(null,seq42085);
var G__42087 = cljs.core.first.call(null,seq42085__$1);
var seq42085__$2 = cljs.core.next.call(null,seq42085__$1);
var G__42088 = cljs.core.first.call(null,seq42085__$2);
var seq42085__$3 = cljs.core.next.call(null,seq42085__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__42086,G__42087,G__42088,seq42085__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__37519__auto___42101 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42102 = arguments.length;
var i__37480__auto___42103 = (0);
while(true){
if((i__37480__auto___42103 < len__37479__auto___42102)){
args__37486__auto__.push((arguments[i__37480__auto___42103]));

var G__42104 = (i__37480__auto___42103 + (1));
i__37480__auto___42103 = G__42104;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42096__auto__","temp__42096__auto__",-1309544335,null)),(function (){var x__37170__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42096__auto__","temp__42096__auto__",-1309544335,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42096__auto__","temp__42096__auto__",-1309544335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq42097){
var G__42098 = cljs.core.first.call(null,seq42097);
var seq42097__$1 = cljs.core.next.call(null,seq42097);
var G__42099 = cljs.core.first.call(null,seq42097__$1);
var seq42097__$2 = cljs.core.next.call(null,seq42097__$1);
var G__42100 = cljs.core.first.call(null,seq42097__$2);
var seq42097__$3 = cljs.core.next.call(null,seq42097__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__42098,G__42099,G__42100,seq42097__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__37519__auto___42109 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42110 = arguments.length;
var i__37480__auto___42111 = (0);
while(true){
if((i__37480__auto___42111 < len__37479__auto___42110)){
args__37486__auto__.push((arguments[i__37480__auto___42111]));

var G__42112 = (i__37480__auto___42111 + (1));
i__37480__auto___42111 = G__42112;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),null),x__37170__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq42105){
var G__42106 = cljs.core.first.call(null,seq42105);
var seq42105__$1 = cljs.core.next.call(null,seq42105);
var G__42107 = cljs.core.first.call(null,seq42105__$1);
var seq42105__$2 = cljs.core.next.call(null,seq42105__$1);
var G__42108 = cljs.core.first.call(null,seq42105__$2);
var seq42105__$3 = cljs.core.next.call(null,seq42105__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__42106,G__42107,G__42108,seq42105__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__37519__auto___42117 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42118 = arguments.length;
var i__37480__auto___42119 = (0);
while(true){
if((i__37480__auto___42119 < len__37479__auto___42118)){
args__37486__auto__.push((arguments[i__37480__auto___42119]));

var G__42120 = (i__37480__auto___42119 + (1));
i__37480__auto___42119 = G__42120;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq42113){
var G__42114 = cljs.core.first.call(null,seq42113);
var seq42113__$1 = cljs.core.next.call(null,seq42113);
var G__42115 = cljs.core.first.call(null,seq42113__$1);
var seq42113__$2 = cljs.core.next.call(null,seq42113__$1);
var G__42116 = cljs.core.first.call(null,seq42113__$2);
var seq42113__$3 = cljs.core.next.call(null,seq42113__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__42114,G__42115,G__42116,seq42113__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__37519__auto___42129 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42130 = arguments.length;
var i__37480__auto___42131 = (0);
while(true){
if((i__37480__auto___42131 < len__37479__auto___42130)){
args__37486__auto__.push((arguments[i__37480__auto___42131]));

var G__42132 = (i__37480__auto___42131 + (1));
i__37480__auto___42131 = G__42132;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__42125){
var vec__42126 = p__42125;
var test = cljs.core.nth.call(null,vec__42126,(0),null);
var step = cljs.core.nth.call(null,vec__42126,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq42121){
var G__42122 = cljs.core.first.call(null,seq42121);
var seq42121__$1 = cljs.core.next.call(null,seq42121);
var G__42123 = cljs.core.first.call(null,seq42121__$1);
var seq42121__$2 = cljs.core.next.call(null,seq42121__$1);
var G__42124 = cljs.core.first.call(null,seq42121__$2);
var seq42121__$3 = cljs.core.next.call(null,seq42121__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42122,G__42123,G__42124,seq42121__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__37519__auto___42141 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42142 = arguments.length;
var i__37480__auto___42143 = (0);
while(true){
if((i__37480__auto___42143 < len__37479__auto___42142)){
args__37486__auto__.push((arguments[i__37480__auto___42143]));

var G__42144 = (i__37480__auto___42143 + (1));
i__37480__auto___42143 = G__42144;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__42137){
var vec__42138 = p__42137;
var test = cljs.core.nth.call(null,vec__42138,(0),null);
var step = cljs.core.nth.call(null,vec__42138,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq42133){
var G__42134 = cljs.core.first.call(null,seq42133);
var seq42133__$1 = cljs.core.next.call(null,seq42133);
var G__42135 = cljs.core.first.call(null,seq42133__$1);
var seq42133__$2 = cljs.core.next.call(null,seq42133__$1);
var G__42136 = cljs.core.first.call(null,seq42133__$2);
var seq42133__$3 = cljs.core.next.call(null,seq42133__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42134,G__42135,G__42136,seq42133__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__37519__auto___42150 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42151 = arguments.length;
var i__37480__auto___42152 = (0);
while(true){
if((i__37480__auto___42152 < len__37479__auto___42151)){
args__37486__auto__.push((arguments[i__37480__auto___42152]));

var G__42153 = (i__37480__auto___42152 + (1));
i__37480__auto___42152 = G__42153;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((4) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37487__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq42145){
var G__42146 = cljs.core.first.call(null,seq42145);
var seq42145__$1 = cljs.core.next.call(null,seq42145);
var G__42147 = cljs.core.first.call(null,seq42145__$1);
var seq42145__$2 = cljs.core.next.call(null,seq42145__$1);
var G__42148 = cljs.core.first.call(null,seq42145__$2);
var seq42145__$3 = cljs.core.next.call(null,seq42145__$2);
var G__42149 = cljs.core.first.call(null,seq42145__$3);
var seq42145__$4 = cljs.core.next.call(null,seq42145__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42146,G__42147,G__42148,G__42149,seq42145__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__37519__auto___42158 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42159 = arguments.length;
var i__37480__auto___42160 = (0);
while(true){
if((i__37480__auto___42160 < len__37479__auto___42159)){
args__37486__auto__.push((arguments[i__37480__auto___42160]));

var G__42161 = (i__37480__auto___42160 + (1));
i__37480__auto___42160 = G__42161;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq42154){
var G__42155 = cljs.core.first.call(null,seq42154);
var seq42154__$1 = cljs.core.next.call(null,seq42154);
var G__42156 = cljs.core.first.call(null,seq42154__$1);
var seq42154__$2 = cljs.core.next.call(null,seq42154__$1);
var G__42157 = cljs.core.first.call(null,seq42154__$2);
var seq42154__$3 = cljs.core.next.call(null,seq42154__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42155,G__42156,G__42157,seq42154__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__37519__auto___42166 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42167 = arguments.length;
var i__37480__auto___42168 = (0);
while(true){
if((i__37480__auto___42168 < len__37479__auto___42167)){
args__37486__auto__.push((arguments[i__37480__auto___42168]));

var G__42169 = (i__37480__auto___42168 + (1));
i__37480__auto___42168 = G__42169;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq42162){
var G__42163 = cljs.core.first.call(null,seq42162);
var seq42162__$1 = cljs.core.next.call(null,seq42162);
var G__42164 = cljs.core.first.call(null,seq42162__$1);
var seq42162__$2 = cljs.core.next.call(null,seq42162__$1);
var G__42165 = cljs.core.first.call(null,seq42162__$2);
var seq42162__$3 = cljs.core.next.call(null,seq42162__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42163,G__42164,G__42165,seq42162__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__37519__auto___42179 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__42178 = arguments.length;
switch (G__42178) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42181 = arguments.length;
var i__37480__auto___42182 = (0);
while(true){
if((i__37480__auto___42182 < len__37479__auto___42181)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42182]));

var G__42183 = (i__37480__auto___42182 + (1));
i__37480__auto___42182 = G__42183;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__37499__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__37170__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42170__auto__","temp__42170__auto__",-1552370696,null)),(function (){var x__37170__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42170__auto__","temp__42170__auto__",-1552370696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42170__auto__","temp__42170__auto__",-1552370696,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq42172){
var G__42173 = cljs.core.first.call(null,seq42172);
var seq42172__$1 = cljs.core.next.call(null,seq42172);
var G__42174 = cljs.core.first.call(null,seq42172__$1);
var seq42172__$2 = cljs.core.next.call(null,seq42172__$1);
var G__42175 = cljs.core.first.call(null,seq42172__$2);
var seq42172__$3 = cljs.core.next.call(null,seq42172__$2);
var G__42176 = cljs.core.first.call(null,seq42172__$3);
var seq42172__$4 = cljs.core.next.call(null,seq42172__$3);
var G__42177 = cljs.core.first.call(null,seq42172__$4);
var seq42172__$5 = cljs.core.next.call(null,seq42172__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__42173,G__42174,G__42175,G__42176,G__42177,seq42172__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__37519__auto___42189 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42190 = arguments.length;
var i__37480__auto___42191 = (0);
while(true){
if((i__37480__auto___42191 < len__37479__auto___42190)){
args__37486__auto__.push((arguments[i__37480__auto___42191]));

var G__42192 = (i__37480__auto___42191 + (1));
i__37480__auto___42191 = G__42192;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42184__auto__","temp__42184__auto__",1839442121,null)),(function (){var x__37170__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42184__auto__","temp__42184__auto__",1839442121,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42184__auto__","temp__42184__auto__",1839442121,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq42185){
var G__42186 = cljs.core.first.call(null,seq42185);
var seq42185__$1 = cljs.core.next.call(null,seq42185);
var G__42187 = cljs.core.first.call(null,seq42185__$1);
var seq42185__$2 = cljs.core.next.call(null,seq42185__$1);
var G__42188 = cljs.core.first.call(null,seq42185__$2);
var seq42185__$3 = cljs.core.next.call(null,seq42185__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__42186,G__42187,G__42188,seq42185__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__42193_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__42193_SHARP_)){
return cljs.core.first.call(null,p1__42193_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42193_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42193_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__42194_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__42194_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__42195 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__42196 = cljs.core.next.call(null,fdecls);
ret = G__42195;
fdecls = G__42196;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__37170__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
}
});
var ret__37519__auto___42197 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__37170__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__42204 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__42205 = n;
var G__42206 = cljs.core.nnext.call(null,bs);
var G__42207 = true;
ret = G__42204;
n = G__42205;
bs = G__42206;
seen_rest_QMARK_ = G__42207;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__42208 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__37170__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__37170__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__37170__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__42209 = (n + (1));
var G__42210 = cljs.core.next.call(null,bs);
var G__42211 = seen_rest_QMARK_;
ret = G__42208;
n = G__42209;
bs = G__42210;
seen_rest_QMARK_ = G__42211;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__37170__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__37170__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__42198_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__36308__auto__ = mkns;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.namespace.call(null,p1__42198_SHARP_);
}
})(),cljs.core.name.call(null,p1__42198_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__42199_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.symbol.call(null,(function (){var or__36308__auto__ = mkns;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.namespace.call(null,p1__42199_SHARP_);
}
})(),cljs.core.name.call(null,p1__42199_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__42200_SHARP_,p2__42201_SHARP_){
return cljs.core.assoc.call(null,p1__42200_SHARP_,p2__42201_SHARP_,cljs.core.val.call(null,entry).call(null,p2__42201_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__37170__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$2);
})(),x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__37170__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__42212 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__42213 = cljs.core.next.call(null,bes);
ret = G__42212;
bes = G__42213;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__42202_SHARP_){
return (cljs.core.first.call(null,p1__42202_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__37519__auto___42214 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__37170__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__37170__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__37519__auto___42219 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42220 = arguments.length;
var i__37480__auto___42221 = (0);
while(true){
if((i__37480__auto___42221 < len__37479__auto___42220)){
args__37486__auto__.push((arguments[i__37480__auto___42221]));

var G__42222 = (i__37480__auto___42221 + (1));
i__37480__auto___42221 = G__42222;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__37170__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq42215){
var G__42216 = cljs.core.first.call(null,seq42215);
var seq42215__$1 = cljs.core.next.call(null,seq42215);
var G__42217 = cljs.core.first.call(null,seq42215__$1);
var seq42215__$2 = cljs.core.next.call(null,seq42215__$1);
var G__42218 = cljs.core.first.call(null,seq42215__$2);
var seq42215__$3 = cljs.core.next.call(null,seq42215__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__42216,G__42217,G__42218,seq42215__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__37519__auto___42231 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42232 = arguments.length;
var i__37480__auto___42233 = (0);
while(true){
if((i__37480__auto___42233 < len__37479__auto___42232)){
args__37486__auto__.push((arguments[i__37480__auto___42233]));

var G__42234 = (i__37480__auto___42233 + (1));
i__37480__auto___42233 = G__42234;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__37170__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__42227){
var vec__42228 = p__42227;
var b = cljs.core.nth.call(null,vec__42228,(0),null);
var v = cljs.core.nth.call(null,vec__42228,(1),null);
var g = cljs.core.nth.call(null,vec__42228,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq42223){
var G__42224 = cljs.core.first.call(null,seq42223);
var seq42223__$1 = cljs.core.next.call(null,seq42223);
var G__42225 = cljs.core.first.call(null,seq42223__$1);
var seq42223__$2 = cljs.core.next.call(null,seq42223__$1);
var G__42226 = cljs.core.first.call(null,seq42223__$2);
var seq42223__$3 = cljs.core.next.call(null,seq42223__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__42224,G__42225,G__42226,seq42223__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__42235_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42235_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__42236){
var vec__42237 = p__42236;
var p = cljs.core.nth.call(null,vec__42237,(0),null);
var b = cljs.core.nth.call(null,vec__42237,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
var ret__37519__auto___42243 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42244 = arguments.length;
var i__37480__auto___42245 = (0);
while(true){
if((i__37480__auto___42245 < len__37479__auto___42244)){
args__37486__auto__.push((arguments[i__37480__auto___42245]));

var G__42246 = (i__37480__auto___42245 + (1));
i__37480__auto___42245 = G__42246;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,xs)));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq42240){
var G__42241 = cljs.core.first.call(null,seq42240);
var seq42240__$1 = cljs.core.next.call(null,seq42240);
var G__42242 = cljs.core.first.call(null,seq42240__$1);
var seq42240__$2 = cljs.core.next.call(null,seq42240__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__42241,G__42242,seq42240__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__36296__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__36296__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__36296__auto__;
}
});
var ret__37519__auto___42257 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__42255 = arguments.length;
switch (G__42255) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42259 = arguments.length;
var i__37480__auto___42260 = (0);
while(true){
if((i__37480__auto___42260 < len__37479__auto___42259)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42260]));

var G__42261 = (i__37480__auto___42260 + (1));
i__37480__auto___42260 = G__42261;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37499__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__42247_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__42247_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__42248_SHARP_){
var _STAR_cljs_warnings_STAR_42256 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__42248_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_42256;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__37170__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__42249__auto__","and__42249__auto__",-2071797332,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__42249__auto__","and__42249__auto__",-2071797332,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__42249__auto__","and__42249__auto__",-2071797332,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq42251){
var G__42252 = cljs.core.first.call(null,seq42251);
var seq42251__$1 = cljs.core.next.call(null,seq42251);
var G__42253 = cljs.core.first.call(null,seq42251__$1);
var seq42251__$2 = cljs.core.next.call(null,seq42251__$1);
var G__42254 = cljs.core.first.call(null,seq42251__$2);
var seq42251__$3 = cljs.core.next.call(null,seq42251__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__42252,G__42253,G__42254,seq42251__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__37519__auto___42272 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__42270 = arguments.length;
switch (G__42270) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42274 = arguments.length;
var i__37480__auto___42275 = (0);
while(true){
if((i__37480__auto___42275 < len__37479__auto___42274)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42275]));

var G__42276 = (i__37480__auto___42275 + (1));
i__37480__auto___42275 = G__42276;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37499__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__42262_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__42262_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__42263_SHARP_){
var _STAR_cljs_warnings_STAR_42271 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__42263_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_42271;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__37170__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__42264__auto__","or__42264__auto__",891085238,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__42264__auto__","or__42264__auto__",891085238,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__42264__auto__","or__42264__auto__",891085238,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq42266){
var G__42267 = cljs.core.first.call(null,seq42266);
var seq42266__$1 = cljs.core.next.call(null,seq42266);
var G__42268 = cljs.core.first.call(null,seq42266__$1);
var seq42266__$2 = cljs.core.next.call(null,seq42266__$1);
var G__42269 = cljs.core.first.call(null,seq42266__$2);
var seq42266__$3 = cljs.core.next.call(null,seq42266__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__42267,G__42268,G__42269,seq42266__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__37519__auto___42277 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42278 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42279 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__37519__auto___42280 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__37519__auto___42281 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__37519__auto___42282 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__37519__auto___42283 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__37519__auto___42284 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__37519__auto___42285 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__37519__auto___42286 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__37519__auto___42287 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__37170__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__37519__auto___42292 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__42289 = clojure.string.split.call(null,comment,/\n/);
var seq__42290 = cljs.core.seq.call(null,vec__42289);
var first__42291 = cljs.core.first.call(null,seq__42290);
var seq__42290__$1 = cljs.core.next.call(null,seq__42290);
var x = first__42291;
var ys = seq__42290__$1;
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__42289,seq__42290,first__42291,seq__42290__$1,x,ys){
return (function (p1__42288_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__42288_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__42289,seq__42290,first__42291,seq__42290__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__37519__auto___42293 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$2);
})(),x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__37519__auto___42294 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__37519__auto___42295 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42296 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42297 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42298 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42299 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42300 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42303 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__42301__auto__","c__42301__auto__",-2141407702,null)),(function (){var x__37170__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42302__auto__","x__42302__auto__",-90668592,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42302__auto__","x__42302__auto__",-90668592,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__42301__auto__","c__42301__auto__",-2141407702,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42304 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42305 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42306 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42316 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__42313 = arguments.length;
switch (G__42313) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42318 = arguments.length;
var i__37480__auto___42319 = (0);
while(true){
if((i__37480__auto___42319 < len__37479__auto___42318)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42319]));

var G__42320 = (i__37480__auto___42319 + (1));
i__37480__auto___42319 = G__42320;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__42314 = cljs.analyzer.checked_arrays.call(null);
var G__42314__$1 = (((G__42314 instanceof cljs.core.Keyword))?G__42314.fqn:null);
switch (G__42314__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__42315 = cljs.analyzer.checked_arrays.call(null);
var G__42315__$1 = (((G__42315 instanceof cljs.core.Keyword))?G__42315.fqn:null);
switch (G__42315__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__37170__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq42308){
var G__42309 = cljs.core.first.call(null,seq42308);
var seq42308__$1 = cljs.core.next.call(null,seq42308);
var G__42310 = cljs.core.first.call(null,seq42308__$1);
var seq42308__$2 = cljs.core.next.call(null,seq42308__$1);
var G__42311 = cljs.core.first.call(null,seq42308__$2);
var seq42308__$3 = cljs.core.next.call(null,seq42308__$2);
var G__42312 = cljs.core.first.call(null,seq42308__$3);
var seq42308__$4 = cljs.core.next.call(null,seq42308__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__42309,G__42310,G__42311,G__42312,seq42308__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__37519__auto___42333 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__42330 = arguments.length;
switch (G__42330) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42335 = arguments.length;
var i__37480__auto___42336 = (0);
while(true){
if((i__37480__auto___42336 < len__37479__auto___42335)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42336]));

var G__42337 = (i__37480__auto___42336 + (1));
i__37480__auto___42336 = G__42337;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__37499__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__42331 = cljs.analyzer.checked_arrays.call(null);
var G__42331__$1 = (((G__42331 instanceof cljs.core.Keyword))?G__42331.fqn:null);
switch (G__42331__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$2);
})(),x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__42332 = cljs.analyzer.checked_arrays.call(null);
var G__42332__$1 = (((G__42332 instanceof cljs.core.Keyword))?G__42332.fqn:null);
switch (G__42332__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__37170__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq42324){
var G__42325 = cljs.core.first.call(null,seq42324);
var seq42324__$1 = cljs.core.next.call(null,seq42324);
var G__42326 = cljs.core.first.call(null,seq42324__$1);
var seq42324__$2 = cljs.core.next.call(null,seq42324__$1);
var G__42327 = cljs.core.first.call(null,seq42324__$2);
var seq42324__$3 = cljs.core.next.call(null,seq42324__$2);
var G__42328 = cljs.core.first.call(null,seq42324__$3);
var seq42324__$4 = cljs.core.next.call(null,seq42324__$3);
var G__42329 = cljs.core.first.call(null,seq42324__$4);
var seq42324__$5 = cljs.core.next.call(null,seq42324__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__42325,G__42326,G__42327,G__42328,G__42329,seq42324__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__37519__auto___42340 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__37519__auto___42341 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$2);
})(),x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__37519__auto___42349 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__42348 = arguments.length;
switch (G__42348) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42351 = arguments.length;
var i__37480__auto___42352 = (0);
while(true){
if((i__37480__auto___42352 < len__37479__auto___42351)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42352]));

var G__42353 = (i__37480__auto___42352 + (1));
i__37480__auto___42352 = G__42353;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq42343){
var G__42344 = cljs.core.first.call(null,seq42343);
var seq42343__$1 = cljs.core.next.call(null,seq42343);
var G__42345 = cljs.core.first.call(null,seq42343__$1);
var seq42343__$2 = cljs.core.next.call(null,seq42343__$1);
var G__42346 = cljs.core.first.call(null,seq42343__$2);
var seq42343__$3 = cljs.core.next.call(null,seq42343__$2);
var G__42347 = cljs.core.first.call(null,seq42343__$3);
var seq42343__$4 = cljs.core.next.call(null,seq42343__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__42344,G__42345,G__42346,G__42347,seq42343__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__37519__auto___42354 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__37519__auto___42355 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__37519__auto___42356 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__37519__auto___42357 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__37519__auto___42358 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__37519__auto___42359 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__37519__auto___42360 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__37519__auto___42361 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__37519__auto___42362 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__37519__auto___42366 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42367 = arguments.length;
var i__37480__auto___42368 = (0);
while(true){
if((i__37480__auto___42368 < len__37479__auto___42367)){
args__37486__auto__.push((arguments[i__37480__auto___42368]));

var G__42369 = (i__37480__auto___42368 + (1));
i__37480__auto___42368 = G__42369;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq42363){
var G__42364 = cljs.core.first.call(null,seq42363);
var seq42363__$1 = cljs.core.next.call(null,seq42363);
var G__42365 = cljs.core.first.call(null,seq42363__$1);
var seq42363__$2 = cljs.core.next.call(null,seq42363__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__42364,G__42365,seq42363__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__37519__auto___42373 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42374 = arguments.length;
var i__37480__auto___42375 = (0);
while(true){
if((i__37480__auto___42375 < len__37479__auto___42374)){
args__37486__auto__.push((arguments[i__37480__auto___42375]));

var G__42376 = (i__37480__auto___42375 + (1));
i__37480__auto___42375 = G__42376;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq42370){
var G__42371 = cljs.core.first.call(null,seq42370);
var seq42370__$1 = cljs.core.next.call(null,seq42370);
var G__42372 = cljs.core.first.call(null,seq42370__$1);
var seq42370__$2 = cljs.core.next.call(null,seq42370__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__42371,G__42372,seq42370__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__37519__auto___42377 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__37519__auto___42378 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__37519__auto___42382 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42383 = arguments.length;
var i__37480__auto___42384 = (0);
while(true){
if((i__37480__auto___42384 < len__37479__auto___42383)){
args__37486__auto__.push((arguments[i__37480__auto___42384]));

var G__42385 = (i__37480__auto___42384 + (1));
i__37480__auto___42384 = G__42385;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq42379){
var G__42380 = cljs.core.first.call(null,seq42379);
var seq42379__$1 = cljs.core.next.call(null,seq42379);
var G__42381 = cljs.core.first.call(null,seq42379__$1);
var seq42379__$2 = cljs.core.next.call(null,seq42379__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__42380,G__42381,seq42379__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__37519__auto___42386 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__37519__auto___42387 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__37519__auto___42391 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42392 = arguments.length;
var i__37480__auto___42393 = (0);
while(true){
if((i__37480__auto___42393 < len__37479__auto___42392)){
args__37486__auto__.push((arguments[i__37480__auto___42393]));

var G__42394 = (i__37480__auto___42393 + (1));
i__37480__auto___42393 = G__42394;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq42388){
var G__42389 = cljs.core.first.call(null,seq42388);
var seq42388__$1 = cljs.core.next.call(null,seq42388);
var G__42390 = cljs.core.first.call(null,seq42388__$1);
var seq42388__$2 = cljs.core.next.call(null,seq42388__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__42389,G__42390,seq42388__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__37519__auto___42398 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42399 = arguments.length;
var i__37480__auto___42400 = (0);
while(true){
if((i__37480__auto___42400 < len__37479__auto___42399)){
args__37486__auto__.push((arguments[i__37480__auto___42400]));

var G__42401 = (i__37480__auto___42400 + (1));
i__37480__auto___42400 = G__42401;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq42395){
var G__42396 = cljs.core.first.call(null,seq42395);
var seq42395__$1 = cljs.core.next.call(null,seq42395);
var G__42397 = cljs.core.first.call(null,seq42395__$1);
var seq42395__$2 = cljs.core.next.call(null,seq42395__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__42396,G__42397,seq42395__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__37519__auto___42402 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__37519__auto___42403 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__37519__auto___42404 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__37519__auto___42408 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42409 = arguments.length;
var i__37480__auto___42410 = (0);
while(true){
if((i__37480__auto___42410 < len__37479__auto___42409)){
args__37486__auto__.push((arguments[i__37480__auto___42410]));

var G__42411 = (i__37480__auto___42410 + (1));
i__37480__auto___42410 = G__42411;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq42405){
var G__42406 = cljs.core.first.call(null,seq42405);
var seq42405__$1 = cljs.core.next.call(null,seq42405);
var G__42407 = cljs.core.first.call(null,seq42405__$1);
var seq42405__$2 = cljs.core.next.call(null,seq42405__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__42406,G__42407,seq42405__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__37519__auto___42415 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42416 = arguments.length;
var i__37480__auto___42417 = (0);
while(true){
if((i__37480__auto___42417 < len__37479__auto___42416)){
args__37486__auto__.push((arguments[i__37480__auto___42417]));

var G__42418 = (i__37480__auto___42417 + (1));
i__37480__auto___42417 = G__42418;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq42412){
var G__42413 = cljs.core.first.call(null,seq42412);
var seq42412__$1 = cljs.core.next.call(null,seq42412);
var G__42414 = cljs.core.first.call(null,seq42412__$1);
var seq42412__$2 = cljs.core.next.call(null,seq42412__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__42413,G__42414,seq42412__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__37519__auto___42426 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__42425 = arguments.length;
switch (G__42425) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42428 = arguments.length;
var i__37480__auto___42429 = (0);
while(true){
if((i__37480__auto___42429 < len__37479__auto___42428)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42429]));

var G__42430 = (i__37480__auto___42429 + (1));
i__37480__auto___42429 = G__42430;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq42420){
var G__42421 = cljs.core.first.call(null,seq42420);
var seq42420__$1 = cljs.core.next.call(null,seq42420);
var G__42422 = cljs.core.first.call(null,seq42420__$1);
var seq42420__$2 = cljs.core.next.call(null,seq42420__$1);
var G__42423 = cljs.core.first.call(null,seq42420__$2);
var seq42420__$3 = cljs.core.next.call(null,seq42420__$2);
var G__42424 = cljs.core.first.call(null,seq42420__$3);
var seq42420__$4 = cljs.core.next.call(null,seq42420__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__42421,G__42422,G__42423,G__42424,seq42420__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__37519__auto___42438 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__42437 = arguments.length;
switch (G__42437) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42440 = arguments.length;
var i__37480__auto___42441 = (0);
while(true){
if((i__37480__auto___42441 < len__37479__auto___42440)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42441]));

var G__42442 = (i__37480__auto___42441 + (1));
i__37480__auto___42441 = G__42442;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq42432){
var G__42433 = cljs.core.first.call(null,seq42432);
var seq42432__$1 = cljs.core.next.call(null,seq42432);
var G__42434 = cljs.core.first.call(null,seq42432__$1);
var seq42432__$2 = cljs.core.next.call(null,seq42432__$1);
var G__42435 = cljs.core.first.call(null,seq42432__$2);
var seq42432__$3 = cljs.core.next.call(null,seq42432__$2);
var G__42436 = cljs.core.first.call(null,seq42432__$3);
var seq42432__$4 = cljs.core.next.call(null,seq42432__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__42433,G__42434,G__42435,G__42436,seq42432__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__37519__auto___42450 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__42449 = arguments.length;
switch (G__42449) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42452 = arguments.length;
var i__37480__auto___42453 = (0);
while(true){
if((i__37480__auto___42453 < len__37479__auto___42452)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42453]));

var G__42454 = (i__37480__auto___42453 + (1));
i__37480__auto___42453 = G__42454;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq42444){
var G__42445 = cljs.core.first.call(null,seq42444);
var seq42444__$1 = cljs.core.next.call(null,seq42444);
var G__42446 = cljs.core.first.call(null,seq42444__$1);
var seq42444__$2 = cljs.core.next.call(null,seq42444__$1);
var G__42447 = cljs.core.first.call(null,seq42444__$2);
var seq42444__$3 = cljs.core.next.call(null,seq42444__$2);
var G__42448 = cljs.core.first.call(null,seq42444__$3);
var seq42444__$4 = cljs.core.next.call(null,seq42444__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__42445,G__42446,G__42447,G__42448,seq42444__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__37519__auto___42462 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__42461 = arguments.length;
switch (G__42461) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42464 = arguments.length;
var i__37480__auto___42465 = (0);
while(true){
if((i__37480__auto___42465 < len__37479__auto___42464)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42465]));

var G__42466 = (i__37480__auto___42465 + (1));
i__37480__auto___42465 = G__42466;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq42456){
var G__42457 = cljs.core.first.call(null,seq42456);
var seq42456__$1 = cljs.core.next.call(null,seq42456);
var G__42458 = cljs.core.first.call(null,seq42456__$1);
var seq42456__$2 = cljs.core.next.call(null,seq42456__$1);
var G__42459 = cljs.core.first.call(null,seq42456__$2);
var seq42456__$3 = cljs.core.next.call(null,seq42456__$2);
var G__42460 = cljs.core.first.call(null,seq42456__$3);
var seq42456__$4 = cljs.core.next.call(null,seq42456__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__42457,G__42458,G__42459,G__42460,seq42456__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__37519__auto___42474 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__42473 = arguments.length;
switch (G__42473) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42476 = arguments.length;
var i__37480__auto___42477 = (0);
while(true){
if((i__37480__auto___42477 < len__37479__auto___42476)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42477]));

var G__42478 = (i__37480__auto___42477 + (1));
i__37480__auto___42477 = G__42478;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq42468){
var G__42469 = cljs.core.first.call(null,seq42468);
var seq42468__$1 = cljs.core.next.call(null,seq42468);
var G__42470 = cljs.core.first.call(null,seq42468__$1);
var seq42468__$2 = cljs.core.next.call(null,seq42468__$1);
var G__42471 = cljs.core.first.call(null,seq42468__$2);
var seq42468__$3 = cljs.core.next.call(null,seq42468__$2);
var G__42472 = cljs.core.first.call(null,seq42468__$3);
var seq42468__$4 = cljs.core.next.call(null,seq42468__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__42469,G__42470,G__42471,G__42472,seq42468__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__37519__auto___42486 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__42485 = arguments.length;
switch (G__42485) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42488 = arguments.length;
var i__37480__auto___42489 = (0);
while(true){
if((i__37480__auto___42489 < len__37479__auto___42488)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42489]));

var G__42490 = (i__37480__auto___42489 + (1));
i__37480__auto___42489 = G__42490;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq42480){
var G__42481 = cljs.core.first.call(null,seq42480);
var seq42480__$1 = cljs.core.next.call(null,seq42480);
var G__42482 = cljs.core.first.call(null,seq42480__$1);
var seq42480__$2 = cljs.core.next.call(null,seq42480__$1);
var G__42483 = cljs.core.first.call(null,seq42480__$2);
var seq42480__$3 = cljs.core.next.call(null,seq42480__$2);
var G__42484 = cljs.core.first.call(null,seq42480__$3);
var seq42480__$4 = cljs.core.next.call(null,seq42480__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__42481,G__42482,G__42483,G__42484,seq42480__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__37519__auto___42498 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__42497 = arguments.length;
switch (G__42497) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42500 = arguments.length;
var i__37480__auto___42501 = (0);
while(true){
if((i__37480__auto___42501 < len__37479__auto___42500)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42501]));

var G__42502 = (i__37480__auto___42501 + (1));
i__37480__auto___42501 = G__42502;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq42492){
var G__42493 = cljs.core.first.call(null,seq42492);
var seq42492__$1 = cljs.core.next.call(null,seq42492);
var G__42494 = cljs.core.first.call(null,seq42492__$1);
var seq42492__$2 = cljs.core.next.call(null,seq42492__$1);
var G__42495 = cljs.core.first.call(null,seq42492__$2);
var seq42492__$3 = cljs.core.next.call(null,seq42492__$2);
var G__42496 = cljs.core.first.call(null,seq42492__$3);
var seq42492__$4 = cljs.core.next.call(null,seq42492__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__42493,G__42494,G__42495,G__42496,seq42492__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__37519__auto___42510 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__42509 = arguments.length;
switch (G__42509) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42512 = arguments.length;
var i__37480__auto___42513 = (0);
while(true){
if((i__37480__auto___42513 < len__37479__auto___42512)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42513]));

var G__42514 = (i__37480__auto___42513 + (1));
i__37480__auto___42513 = G__42514;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq42504){
var G__42505 = cljs.core.first.call(null,seq42504);
var seq42504__$1 = cljs.core.next.call(null,seq42504);
var G__42506 = cljs.core.first.call(null,seq42504__$1);
var seq42504__$2 = cljs.core.next.call(null,seq42504__$1);
var G__42507 = cljs.core.first.call(null,seq42504__$2);
var seq42504__$3 = cljs.core.next.call(null,seq42504__$2);
var G__42508 = cljs.core.first.call(null,seq42504__$3);
var seq42504__$4 = cljs.core.next.call(null,seq42504__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__42505,G__42506,G__42507,G__42508,seq42504__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__37519__auto___42522 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__42521 = arguments.length;
switch (G__42521) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42524 = arguments.length;
var i__37480__auto___42525 = (0);
while(true){
if((i__37480__auto___42525 < len__37479__auto___42524)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42525]));

var G__42526 = (i__37480__auto___42525 + (1));
i__37480__auto___42525 = G__42526;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq42516){
var G__42517 = cljs.core.first.call(null,seq42516);
var seq42516__$1 = cljs.core.next.call(null,seq42516);
var G__42518 = cljs.core.first.call(null,seq42516__$1);
var seq42516__$2 = cljs.core.next.call(null,seq42516__$1);
var G__42519 = cljs.core.first.call(null,seq42516__$2);
var seq42516__$3 = cljs.core.next.call(null,seq42516__$2);
var G__42520 = cljs.core.first.call(null,seq42516__$3);
var seq42516__$4 = cljs.core.next.call(null,seq42516__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__42517,G__42518,G__42519,G__42520,seq42516__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__37519__auto___42527 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__37519__auto___42528 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__37519__auto___42529 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42530 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42531 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42541 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__42540 = arguments.length;
switch (G__42540) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42543 = arguments.length;
var i__37480__auto___42544 = (0);
while(true){
if((i__37480__auto___42544 < len__37479__auto___42543)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42544]));

var G__42545 = (i__37480__auto___42544 + (1));
i__37480__auto___42544 = G__42545;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42532__auto__","x__42532__auto__",-101493495,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42533__auto__","y__42533__auto__",-1528656647,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42532__auto__","x__42532__auto__",-101493495,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42533__auto__","y__42533__auto__",-1528656647,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42532__auto__","x__42532__auto__",-101493495,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42533__auto__","y__42533__auto__",-1528656647,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq42535){
var G__42536 = cljs.core.first.call(null,seq42535);
var seq42535__$1 = cljs.core.next.call(null,seq42535);
var G__42537 = cljs.core.first.call(null,seq42535__$1);
var seq42535__$2 = cljs.core.next.call(null,seq42535__$1);
var G__42538 = cljs.core.first.call(null,seq42535__$2);
var seq42535__$3 = cljs.core.next.call(null,seq42535__$2);
var G__42539 = cljs.core.first.call(null,seq42535__$3);
var seq42535__$4 = cljs.core.next.call(null,seq42535__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__42536,G__42537,G__42538,G__42539,seq42535__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__37519__auto___42555 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__42554 = arguments.length;
switch (G__42554) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42557 = arguments.length;
var i__37480__auto___42558 = (0);
while(true){
if((i__37480__auto___42558 < len__37479__auto___42557)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42558]));

var G__42559 = (i__37480__auto___42558 + (1));
i__37480__auto___42558 = G__42559;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42546__auto__","x__42546__auto__",-1266586572,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42547__auto__","y__42547__auto__",347902952,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42546__auto__","x__42546__auto__",-1266586572,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42547__auto__","y__42547__auto__",347902952,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42546__auto__","x__42546__auto__",-1266586572,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42547__auto__","y__42547__auto__",347902952,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq42549){
var G__42550 = cljs.core.first.call(null,seq42549);
var seq42549__$1 = cljs.core.next.call(null,seq42549);
var G__42551 = cljs.core.first.call(null,seq42549__$1);
var seq42549__$2 = cljs.core.next.call(null,seq42549__$1);
var G__42552 = cljs.core.first.call(null,seq42549__$2);
var seq42549__$3 = cljs.core.next.call(null,seq42549__$2);
var G__42553 = cljs.core.first.call(null,seq42549__$3);
var seq42549__$4 = cljs.core.next.call(null,seq42549__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__42550,G__42551,G__42552,G__42553,seq42549__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__37519__auto___42560 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__37519__auto___42561 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__37519__auto___42569 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__42568 = arguments.length;
switch (G__42568) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42571 = arguments.length;
var i__37480__auto___42572 = (0);
while(true){
if((i__37480__auto___42572 < len__37479__auto___42571)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42572]));

var G__42573 = (i__37480__auto___42572 + (1));
i__37480__auto___42572 = G__42573;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq42563){
var G__42564 = cljs.core.first.call(null,seq42563);
var seq42563__$1 = cljs.core.next.call(null,seq42563);
var G__42565 = cljs.core.first.call(null,seq42563__$1);
var seq42563__$2 = cljs.core.next.call(null,seq42563__$1);
var G__42566 = cljs.core.first.call(null,seq42563__$2);
var seq42563__$3 = cljs.core.next.call(null,seq42563__$2);
var G__42567 = cljs.core.first.call(null,seq42563__$3);
var seq42563__$4 = cljs.core.next.call(null,seq42563__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__42564,G__42565,G__42566,G__42567,seq42563__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__37519__auto___42581 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__42580 = arguments.length;
switch (G__42580) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42583 = arguments.length;
var i__37480__auto___42584 = (0);
while(true){
if((i__37480__auto___42584 < len__37479__auto___42583)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42584]));

var G__42585 = (i__37480__auto___42584 + (1));
i__37480__auto___42584 = G__42585;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq42575){
var G__42576 = cljs.core.first.call(null,seq42575);
var seq42575__$1 = cljs.core.next.call(null,seq42575);
var G__42577 = cljs.core.first.call(null,seq42575__$1);
var seq42575__$2 = cljs.core.next.call(null,seq42575__$1);
var G__42578 = cljs.core.first.call(null,seq42575__$2);
var seq42575__$3 = cljs.core.next.call(null,seq42575__$2);
var G__42579 = cljs.core.first.call(null,seq42575__$3);
var seq42575__$4 = cljs.core.next.call(null,seq42575__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__42576,G__42577,G__42578,G__42579,seq42575__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__37519__auto___42593 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__42592 = arguments.length;
switch (G__42592) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42595 = arguments.length;
var i__37480__auto___42596 = (0);
while(true){
if((i__37480__auto___42596 < len__37479__auto___42595)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42596]));

var G__42597 = (i__37480__auto___42596 + (1));
i__37480__auto___42596 = G__42597;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq42587){
var G__42588 = cljs.core.first.call(null,seq42587);
var seq42587__$1 = cljs.core.next.call(null,seq42587);
var G__42589 = cljs.core.first.call(null,seq42587__$1);
var seq42587__$2 = cljs.core.next.call(null,seq42587__$1);
var G__42590 = cljs.core.first.call(null,seq42587__$2);
var seq42587__$3 = cljs.core.next.call(null,seq42587__$2);
var G__42591 = cljs.core.first.call(null,seq42587__$3);
var seq42587__$4 = cljs.core.next.call(null,seq42587__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__42588,G__42589,G__42590,G__42591,seq42587__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__37519__auto___42598 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__37519__auto___42606 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__42605 = arguments.length;
switch (G__42605) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42608 = arguments.length;
var i__37480__auto___42609 = (0);
while(true){
if((i__37480__auto___42609 < len__37479__auto___42608)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42609]));

var G__42610 = (i__37480__auto___42609 + (1));
i__37480__auto___42609 = G__42610;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq42600){
var G__42601 = cljs.core.first.call(null,seq42600);
var seq42600__$1 = cljs.core.next.call(null,seq42600);
var G__42602 = cljs.core.first.call(null,seq42600__$1);
var seq42600__$2 = cljs.core.next.call(null,seq42600__$1);
var G__42603 = cljs.core.first.call(null,seq42600__$2);
var seq42600__$3 = cljs.core.next.call(null,seq42600__$2);
var G__42604 = cljs.core.first.call(null,seq42600__$3);
var seq42600__$4 = cljs.core.next.call(null,seq42600__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__42601,G__42602,G__42603,G__42604,seq42600__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__37519__auto___42618 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__42617 = arguments.length;
switch (G__42617) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___42620 = arguments.length;
var i__37480__auto___42621 = (0);
while(true){
if((i__37480__auto___42621 < len__37479__auto___42620)){
args_arr__37498__auto__.push((arguments[i__37480__auto___42621]));

var G__42622 = (i__37480__auto___42621 + (1));
i__37480__auto___42621 = G__42622;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq42612){
var G__42613 = cljs.core.first.call(null,seq42612);
var seq42612__$1 = cljs.core.next.call(null,seq42612);
var G__42614 = cljs.core.first.call(null,seq42612__$1);
var seq42612__$2 = cljs.core.next.call(null,seq42612__$1);
var G__42615 = cljs.core.first.call(null,seq42612__$2);
var seq42612__$3 = cljs.core.next.call(null,seq42612__$2);
var G__42616 = cljs.core.first.call(null,seq42612__$3);
var seq42612__$4 = cljs.core.next.call(null,seq42612__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__42613,G__42614,G__42615,G__42616,seq42612__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__37519__auto___42623 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__37519__auto___42624 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__37519__auto___42625 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__37519__auto___42626 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__37519__auto___42627 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__37519__auto___42628 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__37519__auto___42629 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__37519__auto___42630 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__37519__auto___42631 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__37519__auto___42632 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__37170__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__37519__auto___42634 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42633__auto__","h__42633__auto__",1024882484,null)),(function (){var x__37170__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42633__auto__","h__42633__auto__",1024882484,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42633__auto__","h__42633__auto__",1024882484,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42633__auto__","h__42633__auto__",1024882484,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42633__auto__","h__42633__auto__",1024882484,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42633__auto__","h__42633__auto__",1024882484,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42635__auto__","x__42635__auto__",869654659,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42635__auto__","x__42635__auto__",869654659,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
var ret__37519__auto___42643 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42644 = arguments.length;
var i__37480__auto___42645 = (0);
while(true){
if((i__37480__auto___42645 < len__37479__auto___42644)){
args__37486__auto__.push((arguments[i__37480__auto___42645]));

var G__42646 = (i__37480__auto___42645 + (1));
i__37480__auto___42645 = G__42646;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((6) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__37487__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq42636){
var G__42637 = cljs.core.first.call(null,seq42636);
var seq42636__$1 = cljs.core.next.call(null,seq42636);
var G__42638 = cljs.core.first.call(null,seq42636__$1);
var seq42636__$2 = cljs.core.next.call(null,seq42636__$1);
var G__42639 = cljs.core.first.call(null,seq42636__$2);
var seq42636__$3 = cljs.core.next.call(null,seq42636__$2);
var G__42640 = cljs.core.first.call(null,seq42636__$3);
var seq42636__$4 = cljs.core.next.call(null,seq42636__$3);
var G__42641 = cljs.core.first.call(null,seq42636__$4);
var seq42636__$5 = cljs.core.next.call(null,seq42636__$4);
var G__42642 = cljs.core.first.call(null,seq42636__$5);
var seq42636__$6 = cljs.core.next.call(null,seq42636__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__42637,G__42638,G__42639,G__42640,G__42641,G__42642,seq42636__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = clojure.walk.postwalk.call(null,(function (p1__42647_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__42647_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__42647_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__42647_SHARP_));
} else {
return p1__42647_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
var ret__37519__auto___42652 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__42648,fkv){
var vec__42649 = p__42648;
var f1 = cljs.core.nth.call(null,vec__42649,(0),null);
var k = cljs.core.nth.call(null,vec__42649,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__37519__auto___42656 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42657 = arguments.length;
var i__37480__auto___42658 = (0);
while(true){
if((i__37480__auto___42658 < len__37479__auto___42657)){
args__37486__auto__.push((arguments[i__37480__auto___42658]));

var G__42659 = (i__37480__auto___42658 + (1));
i__37480__auto___42658 = G__42659;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__37170__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__37170__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),locals,(function (){var x__37170__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),locals,(function (){var x__37170__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq42653){
var G__42654 = cljs.core.first.call(null,seq42653);
var seq42653__$1 = cljs.core.next.call(null,seq42653);
var G__42655 = cljs.core.first.call(null,seq42653__$1);
var seq42653__$2 = cljs.core.next.call(null,seq42653__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__42654,G__42655,seq42653__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__37519__auto___42664 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42665 = arguments.length;
var i__37480__auto___42666 = (0);
while(true){
if((i__37480__auto___42666 < len__37479__auto___42665)){
args__37486__auto__.push((arguments[i__37480__auto___42666]));

var G__42667 = (i__37480__auto___42666 + (1));
i__37480__auto___42666 = G__42667;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq42660){
var G__42661 = cljs.core.first.call(null,seq42660);
var seq42660__$1 = cljs.core.next.call(null,seq42660);
var G__42662 = cljs.core.first.call(null,seq42660__$1);
var seq42660__$2 = cljs.core.next.call(null,seq42660__$1);
var G__42663 = cljs.core.first.call(null,seq42660__$2);
var seq42660__$3 = cljs.core.next.call(null,seq42660__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42661,G__42662,G__42663,seq42660__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__37519__auto___42672 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42673 = arguments.length;
var i__37480__auto___42674 = (0);
while(true){
if((i__37480__auto___42674 < len__37479__auto___42673)){
args__37486__auto__.push((arguments[i__37480__auto___42674]));

var G__42675 = (i__37480__auto___42674 + (1));
i__37480__auto___42674 = G__42675;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq42668){
var G__42669 = cljs.core.first.call(null,seq42668);
var seq42668__$1 = cljs.core.next.call(null,seq42668);
var G__42670 = cljs.core.first.call(null,seq42668__$1);
var seq42668__$2 = cljs.core.next.call(null,seq42668__$1);
var G__42671 = cljs.core.first.call(null,seq42668__$2);
var seq42668__$3 = cljs.core.next.call(null,seq42668__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__42669,G__42670,G__42671,seq42668__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__37519__auto___42676 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__37519__auto___42681 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42682 = arguments.length;
var i__37480__auto___42683 = (0);
while(true){
if((i__37480__auto___42683 < len__37479__auto___42682)){
args__37486__auto__.push((arguments[i__37480__auto___42683]));

var G__42684 = (i__37480__auto___42683 + (1));
i__37480__auto___42683 = G__42684;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq42677){
var G__42678 = cljs.core.first.call(null,seq42677);
var seq42677__$1 = cljs.core.next.call(null,seq42677);
var G__42679 = cljs.core.first.call(null,seq42677__$1);
var seq42677__$2 = cljs.core.next.call(null,seq42677__$1);
var G__42680 = cljs.core.first.call(null,seq42677__$2);
var seq42677__$3 = cljs.core.next.call(null,seq42677__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__42678,G__42679,G__42680,seq42677__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__36296__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__36296__auto__)){
var and__36296__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__36296__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__36296__auto____$1;
}
} else {
return and__36296__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__42685 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__42686 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__42685;
s = G__42686;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__42687){
var vec__42688 = p__42687;
var p = cljs.core.nth.call(null,vec__42688,(0),null);
var sigs = cljs.core.nth.call(null,vec__42688,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__42688,p,sigs){
return (function (p__42691){
var vec__42692 = p__42691;
var seq__42693 = cljs.core.seq.call(null,vec__42692);
var first__42694 = cljs.core.first.call(null,seq__42693);
var seq__42693__$1 = cljs.core.next.call(null,seq__42693);
var f = first__42694;
var meths = seq__42693__$1;
var form = vec__42692;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(psym,pfn_prefix,vec__42688,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__37265__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37266__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37267__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37268__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37269__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__37265__auto__,prefer_table__37266__auto__,method_cache__37267__auto__,cached_hierarchy__37268__auto__,hierarchy__37269__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__37265__auto__,prefer_table__37266__auto__,method_cache__37267__auto__,cached_hierarchy__37268__auto__,hierarchy__37269__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37269__auto__,method_table__37265__auto__,prefer_table__37266__auto__,method_cache__37267__auto__,cached_hierarchy__37268__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__37170__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__37170__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__37170__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__42695){
var vec__42696 = p__42695;
var seq__42697 = cljs.core.seq.call(null,vec__42696);
var first__42698 = cljs.core.first.call(null,seq__42697);
var seq__42697__$1 = cljs.core.next.call(null,seq__42697);
var vec__42699 = first__42698;
var seq__42700 = cljs.core.seq.call(null,vec__42699);
var first__42701 = cljs.core.first.call(null,seq__42700);
var seq__42700__$1 = cljs.core.next.call(null,seq__42700);
var this$ = first__42701;
var args = seq__42700__$1;
var sig = vec__42699;
var body = seq__42697__$1;
var x__37170__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__42702){
var vec__42703 = p__42702;
var seq__42704 = cljs.core.seq.call(null,vec__42703);
var first__42705 = cljs.core.first.call(null,seq__42704);
var seq__42704__$1 = cljs.core.next.call(null,seq__42704);
var vec__42706 = first__42705;
var seq__42707 = cljs.core.seq.call(null,vec__42706);
var first__42708 = cljs.core.first.call(null,seq__42707);
var seq__42707__$1 = cljs.core.next.call(null,seq__42707);
var this$ = first__42708;
var args = seq__42707__$1;
var sig = vec__42706;
var body = seq__42704__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__37170__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__42709){
var vec__42710 = p__42709;
var seq__42711 = cljs.core.seq.call(null,vec__42710);
var first__42712 = cljs.core.first.call(null,seq__42711);
var seq__42711__$1 = cljs.core.next.call(null,seq__42711);
var vec__42713 = first__42712;
var seq__42714 = cljs.core.seq.call(null,vec__42713);
var first__42715 = cljs.core.first.call(null,seq__42714);
var seq__42714__$1 = cljs.core.next.call(null,seq__42714);
var this$ = first__42715;
var args = seq__42714__$1;
var sig = vec__42713;
var body = seq__42711__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__37170__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__42716){
var vec__42717 = p__42716;
var seq__42718 = cljs.core.seq.call(null,vec__42717);
var first__42719 = cljs.core.first.call(null,seq__42718);
var seq__42718__$1 = cljs.core.next.call(null,seq__42718);
var vec__42720 = first__42719;
var seq__42721 = cljs.core.seq.call(null,vec__42720);
var first__42722 = cljs.core.first.call(null,seq__42721);
var seq__42721__$1 = cljs.core.next.call(null,seq__42721);
var this$ = first__42722;
var args = seq__42721__$1;
var sig = vec__42720;
var body = seq__42718__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__37170__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__42724){
var vec__42725 = p__42724;
var seq__42726 = cljs.core.seq.call(null,vec__42725);
var first__42727 = cljs.core.first.call(null,seq__42726);
var seq__42726__$1 = cljs.core.next.call(null,seq__42726);
var f = first__42727;
var meths = seq__42726__$1;
var form = vec__42725;
var vec__42728 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__42728,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__42728,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__42728,f__$1,meths__$1,vec__42725,seq__42726,first__42727,seq__42726__$1,f,meths,form){
return (function (p1__42723_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__42723_SHARP_);
});})(vec__42728,f__$1,meths__$1,vec__42725,seq__42726,first__42727,seq__42726__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__42732){
var vec__42733 = p__42732;
var seq__42734 = cljs.core.seq.call(null,vec__42733);
var first__42735 = cljs.core.first.call(null,seq__42734);
var seq__42734__$1 = cljs.core.next.call(null,seq__42734);
var f = first__42735;
var meths = seq__42734__$1;
var form = vec__42733;
return cljs.core.map.call(null,((function (vec__42733,seq__42734,first__42735,seq__42734__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(vec__42733,seq__42734,first__42735,seq__42734__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__42733,seq__42734,first__42735,seq__42734__$1,f,meths,form){
return (function (p1__42731_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__42731_SHARP_);
});})(vec__42733,seq__42734,first__42735,seq__42734__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__42737){
var vec__42738 = p__42737;
var seq__42739 = cljs.core.seq.call(null,vec__42738);
var first__42740 = cljs.core.first.call(null,seq__42739);
var seq__42739__$1 = cljs.core.next.call(null,seq__42739);
var f = first__42740;
var meths = seq__42739__$1;
var form = vec__42738;
var meths__$1 = cljs.core.map.call(null,((function (vec__42738,seq__42739,first__42740,seq__42739__$1,f,meths,form){
return (function (p1__42736_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__42736_SHARP_);
});})(vec__42738,seq__42739,first__42740,seq__42739__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__37170__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__37170__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__37170__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__37170__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__42741){
var vec__42742 = p__42741;
var seq__42743 = cljs.core.seq.call(null,vec__42742);
var first__42744 = cljs.core.first.call(null,seq__42743);
var seq__42743__$1 = cljs.core.next.call(null,seq__42743);
var f = first__42744;
var meths = seq__42743__$1;
var form = vec__42742;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__42742,seq__42743,first__42744,seq__42743__$1,f,meths,form){
return (function (p__42745){
var vec__42746 = p__42745;
var seq__42747 = cljs.core.seq.call(null,vec__42746);
var first__42748 = cljs.core.first.call(null,seq__42747);
var seq__42747__$1 = cljs.core.next.call(null,seq__42747);
var sig = first__42748;
var body = seq__42747__$1;
var meth = vec__42746;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(pf,vec__42742,seq__42743,first__42744,seq__42743__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__42749){
var vec__42750 = p__42749;
var p = cljs.core.nth.call(null,vec__42750,(0),null);
var sigs = cljs.core.nth.call(null,vec__42750,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__42750,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__42750,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__42753 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__42753,(0),null);
var sigs = cljs.core.nth.call(null,vec__42753,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_42756 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_42756))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__42757 = cljs.core.next.call(null,sigs__$1);
var G__42758 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__42757;
seen = G__42758;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_42762 = cljs.core.PersistentHashSet.EMPTY;
var methods_42763__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_42763__$1)){
var vec__42759_42764 = cljs.core.first.call(null,methods_42763__$1);
var fname_42765 = cljs.core.nth.call(null,vec__42759_42764,(0),null);
var method_42766 = vec__42759_42764;
if(cljs.core.contains_QMARK_.call(null,seen_42762,fname_42765)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_42765], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_42766);

var G__42767 = cljs.core.conj.call(null,seen_42762,fname_42765);
var G__42768 = cljs.core.next.call(null,methods_42763__$1);
seen_42762 = G__42767;
methods_42763__$1 = G__42768;
continue;
} else {
}
break;
}

var G__42769 = cljs.core.conj.call(null,protos,proto);
var G__42770 = impls__$2;
protos = G__42769;
impls__$1 = G__42770;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__37519__auto___42779 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42780 = arguments.length;
var i__37480__auto___42781 = (0);
while(true){
if((i__37480__auto___42781 < len__37479__auto___42780)){
args__37486__auto__.push((arguments[i__37480__auto___42781]));

var G__42782 = (i__37480__auto___42781 + (1));
i__37480__auto___42781 = G__42782;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__42776 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__42776,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__42776,(1),null);
if(cljs.core.truth_((function (){var and__36296__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__36296__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__42776,type,assign_impls){
return (function (p1__42771_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__42771_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__42776,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq42772){
var G__42773 = cljs.core.first.call(null,seq42772);
var seq42772__$1 = cljs.core.next.call(null,seq42772);
var G__42774 = cljs.core.first.call(null,seq42772__$1);
var seq42772__$2 = cljs.core.next.call(null,seq42772__$1);
var G__42775 = cljs.core.first.call(null,seq42772__$2);
var seq42772__$3 = cljs.core.next.call(null,seq42772__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__42773,G__42774,G__42775,seq42772__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__42784){
var vec__42785 = p__42784;
var f = cljs.core.nth.call(null,vec__42785,(0),null);
var sigs = cljs.core.nth.call(null,vec__42785,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__42785,f,sigs){
return (function (p1__42783_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__42783_SHARP_),cljs.core.nnext.call(null,p1__42783_SHARP_));
});})(vec__42785,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__42789 = arguments.length;
switch (G__42789) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__42791 = ret__$1;
var G__42792 = specs__$2;
ret = G__42791;
specs__$1 = G__42792;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__42793_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__42793_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__37170__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__37519__auto___42805 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42806 = arguments.length;
var i__37480__auto___42807 = (0);
while(true){
if((i__37480__auto___42807 < len__37479__auto___42806)){
args__37486__auto__.push((arguments[i__37480__auto___42807]));

var G__42808 = (i__37480__auto___42807 + (1));
i__37480__auto___42807 = G__42808;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((4) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37487__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__42802 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__42802,(0),null);
var pmasks = cljs.core.nth.call(null,vec__42802,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__37170__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__37170__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__37170__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__37170__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__37170__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__37170__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42794__auto__","this__42794__auto__",-757591601,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__42795__auto__","writer__42795__auto__",128734518,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__42796__auto__","opt__42796__auto__",-68265272,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__42795__auto__","writer__42795__auto__",128734518,null)),(function (){var x__37170__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq42797){
var G__42798 = cljs.core.first.call(null,seq42797);
var seq42797__$1 = cljs.core.next.call(null,seq42797);
var G__42799 = cljs.core.first.call(null,seq42797__$1);
var seq42797__$2 = cljs.core.next.call(null,seq42797__$1);
var G__42800 = cljs.core.first.call(null,seq42797__$2);
var seq42797__$3 = cljs.core.next.call(null,seq42797__$2);
var G__42801 = cljs.core.first.call(null,seq42797__$3);
var seq42797__$4 = cljs.core.next.call(null,seq42797__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__42798,G__42799,G__42800,G__42801,seq42797__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__42809_SHARP_){
return cljs.core.with_meta.call(null,p1__42809_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42810__auto__","this__42810__auto__",-1596009726,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42811__auto__","this__42811__auto__",1992859883,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42811__auto__","this__42811__auto__",1992859883,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__42812__auto__","coll__42812__auto__",-894954810,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__37170__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__42812__auto__","coll__42812__auto__",-894954810,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__37170__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__37170__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__37170__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__37170__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__37170__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__37170__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__37170__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42813__auto__","this__42813__auto__",-744444799,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42814__auto__","this__42814__auto__",395824626,null)),(function (){var x__37170__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42815__auto__","this__42815__auto__",1715506501,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42816__auto__","k__42816__auto__",517020663,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42815__auto__","this__42815__auto__",1715506501,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42816__auto__","k__42816__auto__",517020663,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42817__auto__","this__42817__auto__",-1649332066,null)),(function (){var x__37170__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__42818__auto__","else__42818__auto__",-957346547,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__37170__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__37170__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__42818__auto__","else__42818__auto__",-957346547,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42819__auto__","this__42819__auto__",1031559153,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__37170__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42820__auto__","this__42820__auto__",349525535,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__42821__auto__","entry__42821__auto__",776853947,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__42821__auto__","entry__42821__auto__",776853947,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42820__auto__","this__42820__auto__",349525535,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__42821__auto__","entry__42821__auto__",776853947,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__42821__auto__","entry__42821__auto__",776853947,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42820__auto__","this__42820__auto__",349525535,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__42821__auto__","entry__42821__auto__",776853947,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42822__auto__","this__42822__auto__",124659960,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42823__auto__","k__42823__auto__",-952302569,null)),(function (){var x__37170__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42823__auto__","k__42823__auto__",-952302569,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42823__auto__","k__42823__auto__",-952302569,null)),(function (){var x__37170__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42824__auto__","this__42824__auto__",631815665,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42825__auto__","k__42825__auto__",-764178804,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42825__auto__","k__42825__auto__",-764178804,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42824__auto__","this__42824__auto__",631815665,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42825__auto__","k__42825__auto__",-764178804,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__42825__auto__","k__42825__auto__",-764178804,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42827__auto__","this__42827__auto__",-633060645,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__42826_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.keyword.call(null,p1__42826_SHARP_);
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = p1__42826_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__37170__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42829__auto__","this__42829__auto__",1232565892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__42830__auto__","writer__42830__auto__",2121207662,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__42831__auto__","opts__42831__auto__",1371487107,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__42832__auto__","pr-pair__42832__auto__",-350864393,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__42833__auto__","keyval__42833__auto__",-1823293780,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__42830__auto__","writer__42830__auto__",2121207662,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__42831__auto__","opts__42831__auto__",1371487107,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__42833__auto__","keyval__42833__auto__",-1823293780,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__42830__auto__","writer__42830__auto__",2121207662,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__42832__auto__","pr-pair__42832__auto__",-350864393,null)),(function (){var x__37170__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__42831__auto__","opts__42831__auto__",1371487107,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__42828_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.keyword.call(null,p1__42828_SHARP_);
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = p1__42828_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))], null));
var vec__42834 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__42834,(0),null);
var pmasks = cljs.core.nth.call(null,vec__42834,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__37170__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__37170__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__37170__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__37170__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
var ret__37519__auto___42844 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42845 = arguments.length;
var i__37480__auto___42846 = (0);
while(true){
if((i__37480__auto___42846 < len__37479__auto___42845)){
args__37486__auto__.push((arguments[i__37480__auto___42846]));

var G__42847 = (i__37480__auto___42846 + (1));
i__37480__auto___42846 = G__42847;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((4) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37487__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__37170__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__37170__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__37170__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42837__auto__","this__42837__auto__",1070903965,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__37170__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__37170__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42837__auto__","this__42837__auto__",1070903965,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__42838__auto__","writer__42838__auto__",699070060,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__42838__auto__","writer__42838__auto__",699070060,null)),(function (){var x__37170__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq42839){
var G__42840 = cljs.core.first.call(null,seq42839);
var seq42839__$1 = cljs.core.next.call(null,seq42839);
var G__42841 = cljs.core.first.call(null,seq42839__$1);
var seq42839__$2 = cljs.core.next.call(null,seq42839__$1);
var G__42842 = cljs.core.first.call(null,seq42839__$2);
var seq42839__$3 = cljs.core.next.call(null,seq42839__$2);
var G__42843 = cljs.core.first.call(null,seq42839__$3);
var seq42839__$4 = cljs.core.next.call(null,seq42839__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__42840,G__42841,G__42842,G__42843,seq42839__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__37519__auto___42875 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42876 = arguments.length;
var i__37480__auto___42877 = (0);
while(true){
if((i__37480__auto___42877 < len__37479__auto___42876)){
args__37486__auto__.push((arguments[i__37480__auto___42877]));

var G__42878 = (i__37480__auto___42877 + (1));
i__37480__auto___42877 = G__42878;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__42854 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__42854,(0),null);
var methods$ = cljs.core.nth.call(null,vec__42854,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__42854,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__42854,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__42857 = cljs.core.seq.call(null,methods$);
var chunk__42858 = null;
var count__42859 = (0);
var i__42860 = (0);
while(true){
if((i__42860 < count__42859)){
var vec__42861 = cljs.core._nth.call(null,chunk__42858,i__42860);
var seq__42862 = cljs.core.seq.call(null,vec__42861);
var first__42863 = cljs.core.first.call(null,seq__42862);
var seq__42862__$1 = cljs.core.next.call(null,seq__42862);
var mname = first__42863;
var arities = seq__42862__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__42879 = seq__42857;
var G__42880 = chunk__42858;
var G__42881 = count__42859;
var G__42882 = (i__42860 + (1));
seq__42857 = G__42879;
chunk__42858 = G__42880;
count__42859 = G__42881;
i__42860 = G__42882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42857);
if(temp__4657__auto__){
var seq__42857__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42857__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__42857__$1);
var G__42883 = cljs.core.chunk_rest.call(null,seq__42857__$1);
var G__42884 = c__37147__auto__;
var G__42885 = cljs.core.count.call(null,c__37147__auto__);
var G__42886 = (0);
seq__42857 = G__42883;
chunk__42858 = G__42884;
count__42859 = G__42885;
i__42860 = G__42886;
continue;
} else {
var vec__42864 = cljs.core.first.call(null,seq__42857__$1);
var seq__42865 = cljs.core.seq.call(null,vec__42864);
var first__42866 = cljs.core.first.call(null,seq__42865);
var seq__42865__$1 = cljs.core.next.call(null,seq__42865);
var mname = first__42866;
var arities = seq__42865__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__42887 = cljs.core.next.call(null,seq__42857__$1);
var G__42888 = null;
var G__42889 = (0);
var G__42890 = (0);
seq__42857 = G__42887;
chunk__42858 = G__42888;
count__42859 = G__42889;
i__42860 = G__42890;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42848__auto__","x__42848__auto__",2078245753,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__42849__auto__","m__42849__auto__",-701018142,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42848__auto__","x__42848__auto__",2078245753,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__42849__auto__","m__42849__auto__",-701018142,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__42849__auto__","m__42849__auto__",-701018142,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__42849__auto__","m__42849__auto__",-701018142,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__42849__auto__","m__42849__auto__",-701018142,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__42849__auto__","m__42849__auto__",-701018142,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__37170__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__42867){
var vec__42868 = p__42867;
var seq__42869 = cljs.core.seq.call(null,vec__42868);
var first__42870 = cljs.core.first.call(null,seq__42869);
var seq__42869__$1 = cljs.core.next.call(null,seq__42869);
var fname = first__42870;
var sigs = seq__42869__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__42871){
var vec__42872 = p__42871;
var seq__42873 = cljs.core.seq.call(null,vec__42872);
var first__42874 = cljs.core.first.call(null,seq__42873);
var seq__42873__$1 = cljs.core.next.call(null,seq__42873);
var fname = first__42874;
var sigs = seq__42873__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__37170__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__42872,seq__42873,first__42874,seq__42873__$1,fname,sigs,p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__42872,seq__42873,first__42874,seq__42873__$1,fname,sigs,p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__42854,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__37170__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq42850){
var G__42851 = cljs.core.first.call(null,seq42850);
var seq42850__$1 = cljs.core.next.call(null,seq42850);
var G__42852 = cljs.core.first.call(null,seq42850__$1);
var seq42850__$2 = cljs.core.next.call(null,seq42850__$1);
var G__42853 = cljs.core.first.call(null,seq42850__$2);
var seq42850__$3 = cljs.core.next.call(null,seq42850__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__42851,G__42852,G__42853,seq42850__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__37519__auto___42894 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__42891 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__42891,(0),null);
var bit = cljs.core.nth.call(null,vec__42891,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__37170__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__37170__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42898 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__42895 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__42895,(0),null);
var bit = cljs.core.nth.call(null,vec__42895,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__37170__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__37170__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__37170__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__37170__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__37170__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__37170__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___42902 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42903 = arguments.length;
var i__37480__auto___42904 = (0);
while(true){
if((i__37480__auto___42904 < len__37479__auto___42903)){
args__37486__auto__.push((arguments[i__37480__auto___42904]));

var G__42905 = (i__37480__auto___42904 + (1));
i__37480__auto___42904 = G__42905;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq42899){
var G__42900 = cljs.core.first.call(null,seq42899);
var seq42899__$1 = cljs.core.next.call(null,seq42899);
var G__42901 = cljs.core.first.call(null,seq42899__$1);
var seq42899__$2 = cljs.core.next.call(null,seq42899__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__42900,G__42901,seq42899__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__37519__auto___42909 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42910 = arguments.length;
var i__37480__auto___42911 = (0);
while(true){
if((i__37480__auto___42911 < len__37479__auto___42910)){
args__37486__auto__.push((arguments[i__37480__auto___42911]));

var G__42912 = (i__37480__auto___42911 + (1));
i__37480__auto___42911 = G__42912;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq42906){
var G__42907 = cljs.core.first.call(null,seq42906);
var seq42906__$1 = cljs.core.next.call(null,seq42906);
var G__42908 = cljs.core.first.call(null,seq42906__$1);
var seq42906__$2 = cljs.core.next.call(null,seq42906__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__42907,G__42908,seq42906__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__37519__auto___42921 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42922 = arguments.length;
var i__37480__auto___42923 = (0);
while(true){
if((i__37480__auto___42923 < len__37479__auto___42922)){
args__37486__auto__.push((arguments[i__37480__auto___42923]));

var G__42924 = (i__37480__auto___42923 + (1));
i__37480__auto___42923 = G__42924;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__42917){
var vec__42918 = p__42917;
var k = cljs.core.nth.call(null,vec__42918,(0),null);
var v = cljs.core.nth.call(null,vec__42918,(1),null);
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq42913){
var G__42914 = cljs.core.first.call(null,seq42913);
var seq42913__$1 = cljs.core.next.call(null,seq42913);
var G__42915 = cljs.core.first.call(null,seq42913__$1);
var seq42913__$2 = cljs.core.next.call(null,seq42913__$1);
var G__42916 = cljs.core.first.call(null,seq42913__$2);
var seq42913__$3 = cljs.core.next.call(null,seq42913__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__42914,G__42915,G__42916,seq42913__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__37519__auto___42929 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42930 = arguments.length;
var i__37480__auto___42931 = (0);
while(true){
if((i__37480__auto___42931 < len__37479__auto___42930)){
args__37486__auto__.push((arguments[i__37480__auto___42931]));

var G__42932 = (i__37480__auto___42931 + (1));
i__37480__auto___42931 = G__42932;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__37170__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq42925){
var G__42926 = cljs.core.first.call(null,seq42925);
var seq42925__$1 = cljs.core.next.call(null,seq42925);
var G__42927 = cljs.core.first.call(null,seq42925__$1);
var seq42925__$2 = cljs.core.next.call(null,seq42925__$1);
var G__42928 = cljs.core.first.call(null,seq42925__$2);
var seq42925__$3 = cljs.core.next.call(null,seq42925__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__42926,G__42927,G__42928,seq42925__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__37519__auto___42945 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42946 = arguments.length;
var i__37480__auto___42947 = (0);
while(true){
if((i__37480__auto___42947 < len__37479__auto___42946)){
args__37486__auto__.push((arguments[i__37480__auto___42947]));

var G__42948 = (i__37480__auto___42947 + (1));
i__37480__auto___42947 = G__42948;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((4) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37487__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__42939 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__42942 = cljs.core.nth.call(null,vec__42939,(0),null);
var a = cljs.core.nth.call(null,vec__42942,(0),null);
var b = cljs.core.nth.call(null,vec__42942,(1),null);
var c = cljs.core.nth.call(null,vec__42942,(2),null);
var clause = vec__42942;
var more = cljs.core.nth.call(null,vec__42939,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__37170__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__42933__auto__","p__42933__auto__",-911919020,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__42933__auto__","p__42933__auto__",-911919020,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq42934){
var G__42935 = cljs.core.first.call(null,seq42934);
var seq42934__$1 = cljs.core.next.call(null,seq42934);
var G__42936 = cljs.core.first.call(null,seq42934__$1);
var seq42934__$2 = cljs.core.next.call(null,seq42934__$1);
var G__42937 = cljs.core.first.call(null,seq42934__$2);
var seq42934__$3 = cljs.core.next.call(null,seq42934__$2);
var G__42938 = cljs.core.first.call(null,seq42934__$3);
var seq42934__$4 = cljs.core.next.call(null,seq42934__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__42935,G__42936,G__42937,G__42938,seq42934__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__36296__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__36296__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__36296__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__37519__auto___42969 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__37486__auto__ = [];
var len__37479__auto___42970 = arguments.length;
var i__37480__auto___42971 = (0);
while(true){
if((i__37480__auto___42971 < len__37479__auto___42970)){
args__37486__auto__.push((arguments[i__37480__auto___42971]));

var G__42972 = (i__37480__auto___42971 + (1));
i__37480__auto___42971 = G__42972;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__42957){
var vec__42958 = p__42957;
var test = cljs.core.nth.call(null,vec__42958,(0),null);
var expr = cljs.core.nth.call(null,vec__42958,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__42958,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__37170__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__42958,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__37170__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__42949_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__42949_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__42950_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__42950_SHARP_)){
return cljs.core.vec.call(null,p1__42950_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42950_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__42951_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42951_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__42952_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__42952_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__42952_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__42952_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__42965){
var vec__42966 = p__42965;
var m = cljs.core.nth.call(null,vec__42966,(0),null);
var c = cljs.core.nth.call(null,vec__42966,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__37170__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__37170__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq42953){
var G__42954 = cljs.core.first.call(null,seq42953);
var seq42953__$1 = cljs.core.next.call(null,seq42953);
var G__42955 = cljs.core.first.call(null,seq42953__$1);
var seq42953__$2 = cljs.core.next.call(null,seq42953__$1);
var G__42956 = cljs.core.first.call(null,seq42953__$2);
var seq42953__$3 = cljs.core.next.call(null,seq42953__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__42954,G__42955,G__42956,seq42953__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__37519__auto___42973 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__37519__auto___42976 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__42975 = arguments.length;
switch (G__42975) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__37170__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__37170__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__37170__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__37519__auto___43014 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__42983){
var vec__42984 = p__42983;
var k = cljs.core.nth.call(null,vec__42984,(0),null);
var v = cljs.core.nth.call(null,vec__42984,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__43015__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__43015 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__43016__i = 0, G__43016__a = new Array(arguments.length -  0);
while (G__43016__i < G__43016__a.length) {G__43016__a[G__43016__i] = arguments[G__43016__i + 0]; ++G__43016__i;}
  msg = new cljs.core.IndexedSeq(G__43016__a,0,null);
} 
return G__43015__delegate.call(this,msg);};
G__43015.cljs$lang$maxFixedArity = 0;
G__43015.cljs$lang$applyTo = (function (arglist__43017){
var msg = cljs.core.seq(arglist__43017);
return G__43015__delegate(msg);
});
G__43015.cljs$core$IFn$_invoke$arity$variadic = G__43015__delegate;
return G__43015;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__42987){
var vec__42988 = p__42987;
var seq__42989 = cljs.core.seq.call(null,vec__42988);
var first__42990 = cljs.core.first.call(null,seq__42989);
var seq__42989__$1 = cljs.core.next.call(null,seq__42989);
var vec__42991 = first__42990;
var seq__42992 = cljs.core.seq.call(null,vec__42991);
var first__42993 = cljs.core.first.call(null,seq__42992);
var seq__42992__$1 = cljs.core.next.call(null,seq__42992);
var bind = first__42993;
var first__42993__$1 = cljs.core.first.call(null,seq__42992__$1);
var seq__42992__$2 = cljs.core.next.call(null,seq__42992__$1);
var expr = first__42993__$1;
var mod_pairs = seq__42992__$2;
var vec__42994 = seq__42989__$1;
var vec__42997 = cljs.core.nth.call(null,vec__42994,(0),null);
var _ = cljs.core.nth.call(null,vec__42997,(0),null);
var next_expr = cljs.core.nth.call(null,vec__42997,(1),null);
var next_groups = vec__42994;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__42988,seq__42989,first__42990,seq__42989__$1,vec__42991,seq__42992,first__42993,seq__42992__$1,bind,first__42993__$1,seq__42992__$2,expr,mod_pairs,vec__42994,vec__42997,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__43000){
var vec__43001 = p__43000;
var seq__43002 = cljs.core.seq.call(null,vec__43001);
var first__43003 = cljs.core.first.call(null,seq__43002);
var seq__43002__$1 = cljs.core.next.call(null,seq__43002);
var vec__43004 = first__43003;
var k = cljs.core.nth.call(null,vec__43004,(0),null);
var v = cljs.core.nth.call(null,vec__43004,(1),null);
var pair = vec__43004;
var etc = seq__43002__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__42978__auto__","iterys__42978__auto__",-1826070140,null)),(function (){var x__37170__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__42979__auto__","fs__42979__auto__",1690118494,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__42978__auto__","iterys__42978__auto__",-1826070140,null)),(function (){var x__37170__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__42979__auto__","fs__42979__auto__",1690118494,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__42979__auto__","fs__42979__auto__",1690118494,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__37170__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__42988,seq__42989,first__42990,seq__42989__$1,vec__42991,seq__42992,first__42993,seq__42992__$1,bind,first__42993__$1,seq__42992__$2,expr,mod_pairs,vec__42994,vec__42997,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__42988,seq__42989,first__42990,seq__42989__$1,vec__42991,seq__42992,first__42993,seq__42992__$1,bind,first__42993__$1,seq__42992__$2,expr,mod_pairs,vec__42994,vec__42997,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__43007){
var vec__43008 = p__43007;
var seq__43009 = cljs.core.seq.call(null,vec__43008);
var first__43010 = cljs.core.first.call(null,seq__43009);
var seq__43009__$1 = cljs.core.next.call(null,seq__43009);
var vec__43011 = first__43010;
var k = cljs.core.nth.call(null,vec__43011,(0),null);
var v = cljs.core.nth.call(null,vec__43011,(1),null);
var pair = vec__43011;
var etc = seq__43009__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__37170__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__37170__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__37170__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__42988,seq__42989,first__42990,seq__42989__$1,vec__42991,seq__42992,first__42993,seq__42992__$1,bind,first__42993__$1,seq__42992__$2,expr,mod_pairs,vec__42994,vec__42997,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__42980__auto__","c__42980__auto__",-883918161,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__42981__auto__","size__42981__auto__",806718817,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__42980__auto__","c__42980__auto__",-883918161,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__42981__auto__","size__42981__auto__",806718817,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__42981__auto__","size__42981__auto__",806718817,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__42980__auto__","c__42980__auto__",-883918161,null)),(function (){var x__37170__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__37170__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__37170__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__42982__auto__","iter__42982__auto__",315797145,null)),(function (){var x__37170__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__42982__auto__","iter__42982__auto__",315797145,null)),(function (){var x__37170__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__37519__auto___43023 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43024 = arguments.length;
var i__37480__auto___43025 = (0);
while(true){
if((i__37480__auto___43025 < len__37479__auto___43024)){
args__37486__auto__.push((arguments[i__37480__auto___43025]));

var G__43026 = (i__37480__auto___43025 + (1));
i__37480__auto___43025 = G__43026;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__43027__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__43027 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__43028__i = 0, G__43028__a = new Array(arguments.length -  0);
while (G__43028__i < G__43028__a.length) {G__43028__a[G__43028__i] = arguments[G__43028__i + 0]; ++G__43028__i;}
  msg = new cljs.core.IndexedSeq(G__43028__a,0,null);
} 
return G__43027__delegate.call(this,msg);};
G__43027.cljs$lang$maxFixedArity = 0;
G__43027.cljs$lang$applyTo = (function (arglist__43029){
var msg = cljs.core.seq(arglist__43029);
return G__43027__delegate(msg);
});
G__43027.cljs$core$IFn$_invoke$arity$variadic = G__43027__delegate;
return G__43027;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__37170__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__37170__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__37170__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43018__auto__","c__43018__auto__",1114780259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43018__auto__","c__43018__auto__",1114780259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43018__auto__","c__43018__auto__",1114780259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq43019){
var G__43020 = cljs.core.first.call(null,seq43019);
var seq43019__$1 = cljs.core.next.call(null,seq43019);
var G__43021 = cljs.core.first.call(null,seq43019__$1);
var seq43019__$2 = cljs.core.next.call(null,seq43019__$1);
var G__43022 = cljs.core.first.call(null,seq43019__$2);
var seq43019__$3 = cljs.core.next.call(null,seq43019__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__43020,G__43021,G__43022,seq43019__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__37519__auto___43033 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43034 = arguments.length;
var i__37480__auto___43035 = (0);
while(true){
if((i__37480__auto___43035 < len__37479__auto___43034)){
args__37486__auto__.push((arguments[i__37480__auto___43035]));

var G__43036 = (i__37480__auto___43035 + (1));
i__37480__auto___43035 = G__43036;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq43030){
var G__43031 = cljs.core.first.call(null,seq43030);
var seq43030__$1 = cljs.core.next.call(null,seq43030);
var G__43032 = cljs.core.first.call(null,seq43030__$1);
var seq43030__$2 = cljs.core.next.call(null,seq43030__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__43031,G__43032,seq43030__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__37519__auto___43047 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__43046 = arguments.length;
switch (G__43046) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___43049 = arguments.length;
var i__37480__auto___43050 = (0);
while(true){
if((i__37480__auto___43050 < len__37479__auto___43049)){
args_arr__37498__auto__.push((arguments[i__37480__auto___43050]));

var G__43051 = (i__37480__auto___43050 + (1));
i__37480__auto___43050 = G__43051;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37499__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__37170__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__37170__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__43037__auto__","dims__43037__auto__",-1858973865,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__43038__auto__","dimarray__43038__auto__",712510969,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__37170__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43039__auto__","i__43039__auto__",22057489,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__43038__auto__","dimarray__43038__auto__",712510969,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__43038__auto__","dimarray__43038__auto__",712510969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43039__auto__","i__43039__auto__",22057489,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__43037__auto__","dims__43037__auto__",-1858973865,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__43038__auto__","dimarray__43038__auto__",712510969,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq43041){
var G__43042 = cljs.core.first.call(null,seq43041);
var seq43041__$1 = cljs.core.next.call(null,seq43041);
var G__43043 = cljs.core.first.call(null,seq43041__$1);
var seq43041__$2 = cljs.core.next.call(null,seq43041__$1);
var G__43044 = cljs.core.first.call(null,seq43041__$2);
var seq43041__$3 = cljs.core.next.call(null,seq43041__$2);
var G__43045 = cljs.core.first.call(null,seq43041__$3);
var seq43041__$4 = cljs.core.next.call(null,seq43041__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__43042,G__43043,G__43044,G__43045,seq43041__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__37519__auto___43060 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__43058 = arguments.length;
switch (G__43058) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___43062 = arguments.length;
var i__37480__auto___43063 = (0);
while(true){
if((i__37480__auto___43063 < len__37479__auto___43062)){
args_arr__37498__auto__.push((arguments[i__37480__auto___43063]));

var G__43064 = (i__37480__auto___43063 + (1));
i__37480__auto___43063 = G__43064;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37499__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_43059 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_43059;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43052__auto__","x__43052__auto__",2144683382,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43052__auto__","x__43052__auto__",2144683382,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq43054){
var G__43055 = cljs.core.first.call(null,seq43054);
var seq43054__$1 = cljs.core.next.call(null,seq43054);
var G__43056 = cljs.core.first.call(null,seq43054__$1);
var seq43054__$2 = cljs.core.next.call(null,seq43054__$1);
var G__43057 = cljs.core.first.call(null,seq43054__$2);
var seq43054__$3 = cljs.core.next.call(null,seq43054__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__43055,G__43056,G__43057,seq43054__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__37519__auto___43070 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__43069 = arguments.length;
switch (G__43069) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___43072 = arguments.length;
var i__37480__auto___43073 = (0);
while(true){
if((i__37480__auto___43073 < len__37479__auto___43072)){
args_arr__37498__auto__.push((arguments[i__37480__auto___43073]));

var G__43074 = (i__37480__auto___43073 + (1));
i__37480__auto___43073 = G__43074;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37499__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq43066){
var G__43067 = cljs.core.first.call(null,seq43066);
var seq43066__$1 = cljs.core.next.call(null,seq43066);
var G__43068 = cljs.core.first.call(null,seq43066__$1);
var seq43066__$2 = cljs.core.next.call(null,seq43066__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__43067,G__43068,seq43066__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__37519__auto___43084 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__43081 = arguments.length;
switch (G__43081) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___43086 = arguments.length;
var i__37480__auto___43087 = (0);
while(true){
if((i__37480__auto___43087 < len__37479__auto___43086)){
args_arr__37498__auto__.push((arguments[i__37480__auto___43087]));

var G__43088 = (i__37480__auto___43087 + (1));
i__37480__auto___43087 = G__43088;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37499__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__43075_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__43075_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__43076_SHARP_){
var _STAR_cljs_warnings_STAR_43083 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__43076_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_43083;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq43078){
var G__43079 = cljs.core.first.call(null,seq43078);
var seq43078__$1 = cljs.core.next.call(null,seq43078);
var G__43080 = cljs.core.first.call(null,seq43078__$1);
var seq43078__$2 = cljs.core.next.call(null,seq43078__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__43079,G__43080,seq43078__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__37519__auto___43094 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__43093 = arguments.length;
switch (G__43093) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___43096 = arguments.length;
var i__37480__auto___43097 = (0);
while(true){
if((i__37480__auto___43097 < len__37479__auto___43096)){
args_arr__37498__auto__.push((arguments[i__37480__auto___43097]));

var G__43098 = (i__37480__auto___43097 + (1));
i__37480__auto___43097 = G__43098;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37499__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq43090){
var G__43091 = cljs.core.first.call(null,seq43090);
var seq43090__$1 = cljs.core.next.call(null,seq43090);
var G__43092 = cljs.core.first.call(null,seq43090__$1);
var seq43090__$2 = cljs.core.next.call(null,seq43090__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__43091,G__43092,seq43090__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__37519__auto___43108 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__43105 = arguments.length;
switch (G__43105) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___43110 = arguments.length;
var i__37480__auto___43111 = (0);
while(true){
if((i__37480__auto___43111 < len__37479__auto___43110)){
args_arr__37498__auto__.push((arguments[i__37480__auto___43111]));

var G__43112 = (i__37480__auto___43111 + (1));
i__37480__auto___43111 = G__43112;
continue;
} else {
}
break;
}

var argseq__37499__auto__ = (new cljs.core.IndexedSeq(args_arr__37498__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37499__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__43099_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__43099_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__43100_SHARP_){
var _STAR_cljs_warnings_STAR_43107 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__43100_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_43107;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq43102){
var G__43103 = cljs.core.first.call(null,seq43102);
var seq43102__$1 = cljs.core.next.call(null,seq43102);
var G__43104 = cljs.core.first.call(null,seq43102__$1);
var seq43102__$2 = cljs.core.next.call(null,seq43102__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__43103,G__43104,seq43102__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__37519__auto___43128 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43129 = arguments.length;
var i__37480__auto___43130 = (0);
while(true){
if((i__37480__auto___43130 < len__37479__auto___43129)){
args__37486__auto__.push((arguments[i__37480__auto___43130]));

var G__43131 = (i__37480__auto___43130 + (1));
i__37480__auto___43130 = G__43131;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__43116){
var vec__43117 = p__43116;
var k = cljs.core.nth.call(null,vec__43117,(0),null);
var _ = cljs.core.nth.call(null,vec__43117,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__43120){
var vec__43121 = p__43120;
var k = cljs.core.nth.call(null,vec__43121,(0),null);
var v = cljs.core.nth.call(null,vec__43121,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__43124){
var vec__43125 = p__43124;
var k = cljs.core.nth.call(null,vec__43125,(0),null);
var v = cljs.core.nth.call(null,vec__43125,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq43113){
var G__43114 = cljs.core.first.call(null,seq43113);
var seq43113__$1 = cljs.core.next.call(null,seq43113);
var G__43115 = cljs.core.first.call(null,seq43113__$1);
var seq43113__$2 = cljs.core.next.call(null,seq43113__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__43114,G__43115,seq43113__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__37519__auto___43132 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__37519__auto___43135 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43133__auto__","a__43133__auto__",-500578785,null)),(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__43134__auto__","l__43134__auto__",-186761447,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43133__auto__","a__43133__auto__",-500578785,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43133__auto__","a__43133__auto__",-500578785,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__43134__auto__","l__43134__auto__",-186761447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__37170__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__37519__auto___43138 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43136__auto__","a__43136__auto__",-1086043350,null)),(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__43137__auto__","l__43137__auto__",1588374539,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43136__auto__","a__43136__auto__",-1086043350,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__37170__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__43137__auto__","l__43137__auto__",1588374539,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__37519__auto___43144 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43145 = arguments.length;
var i__37480__auto___43146 = (0);
while(true){
if((i__37480__auto___43146 < len__37479__auto___43145)){
args__37486__auto__.push((arguments[i__37480__auto___43146]));

var G__43147 = (i__37480__auto___43146 + (1));
i__37480__auto___43146 = G__43147;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__43139__auto__","n__43139__auto__",-84789051,null)),(function (){var x__37170__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__43139__auto__","n__43139__auto__",-84789051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__37170__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq43140){
var G__43141 = cljs.core.first.call(null,seq43140);
var seq43140__$1 = cljs.core.next.call(null,seq43140);
var G__43142 = cljs.core.first.call(null,seq43140__$1);
var seq43140__$2 = cljs.core.next.call(null,seq43140__$1);
var G__43143 = cljs.core.first.call(null,seq43140__$2);
var seq43140__$3 = cljs.core.next.call(null,seq43140__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__43141,G__43142,G__43143,seq43140__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43151 = arguments.length;
var i__37480__auto___43152 = (0);
while(true){
if((i__37480__auto___43152 < len__37479__auto___43151)){
args__37486__auto__.push((arguments[i__37480__auto___43152]));

var G__43153 = (i__37480__auto___43152 + (1));
i__37480__auto___43152 = G__43153;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((1) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37487__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__43148_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43148_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq43149){
var G__43150 = cljs.core.first.call(null,seq43149);
var seq43149__$1 = cljs.core.next.call(null,seq43149);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__43150,seq43149__$1);
});

var ret__37519__auto___43163 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43164 = arguments.length;
var i__37480__auto___43165 = (0);
while(true){
if((i__37480__auto___43165 < len__37479__auto___43164)){
args__37486__auto__.push((arguments[i__37480__auto___43165]));

var G__43166 = (i__37480__auto___43165 + (1));
i__37480__auto___43165 = G__43166;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__43154__auto__","method-table__43154__auto__",952493996,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__43155__auto__","prefer-table__43155__auto__",861752934,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__43156__auto__","method-cache__43156__auto__",16885496,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__43157__auto__","cached-hierarchy__43157__auto__",-1975956548,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__43158__auto__","hierarchy__43158__auto__",-824737297,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__37170__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__37170__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__43158__auto__","hierarchy__43158__auto__",-824737297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__43154__auto__","method-table__43154__auto__",952493996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__43155__auto__","prefer-table__43155__auto__",861752934,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__43156__auto__","method-cache__43156__auto__",16885496,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__43157__auto__","cached-hierarchy__43157__auto__",-1975956548,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq43159){
var G__43160 = cljs.core.first.call(null,seq43159);
var seq43159__$1 = cljs.core.next.call(null,seq43159);
var G__43161 = cljs.core.first.call(null,seq43159__$1);
var seq43159__$2 = cljs.core.next.call(null,seq43159__$1);
var G__43162 = cljs.core.first.call(null,seq43159__$2);
var seq43159__$3 = cljs.core.next.call(null,seq43159__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__43160,G__43161,G__43162,seq43159__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__37519__auto___43172 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43173 = arguments.length;
var i__37480__auto___43174 = (0);
while(true){
if((i__37480__auto___43174 < len__37479__auto___43173)){
args__37486__auto__.push((arguments[i__37480__auto___43174]));

var G__43175 = (i__37480__auto___43174 + (1));
i__37480__auto___43174 = G__43175;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((4) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37487__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq43167){
var G__43168 = cljs.core.first.call(null,seq43167);
var seq43167__$1 = cljs.core.next.call(null,seq43167);
var G__43169 = cljs.core.first.call(null,seq43167__$1);
var seq43167__$2 = cljs.core.next.call(null,seq43167__$1);
var G__43170 = cljs.core.first.call(null,seq43167__$2);
var seq43167__$3 = cljs.core.next.call(null,seq43167__$2);
var G__43171 = cljs.core.first.call(null,seq43167__$3);
var seq43167__$4 = cljs.core.next.call(null,seq43167__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__43168,G__43169,G__43170,G__43171,seq43167__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__37519__auto___43178 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__43176__auto__","start__43176__auto__",-788708405,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43177__auto__","ret__43177__auto__",-2102815195,null)),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__43176__auto__","start__43176__auto__",-788708405,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43177__auto__","ret__43177__auto__",-2102815195,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__37519__auto___43193 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43194 = arguments.length;
var i__37480__auto___43195 = (0);
while(true){
if((i__37480__auto___43195 < len__37479__auto___43194)){
args__37486__auto__.push((arguments[i__37480__auto___43195]));

var G__43196 = (i__37480__auto___43195 + (1));
i__37480__auto___43195 = G__43196;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((5) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__37487__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__43190){
var map__43191 = p__43190;
var map__43191__$1 = ((((!((map__43191 == null)))?((((map__43191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43191):map__43191);
var print_fn = cljs.core.get.call(null,map__43191__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__43179__auto__","start__43179__auto__",-1306367615,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43180__auto__","ret__43180__auto__",-2110061540,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___43181__auto__","___43181__auto__",209327280,null)),(function (){var x__37170__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__43182__auto__","end__43182__auto__",656997354,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__43183__auto__","elapsed__43183__auto__",-1603234684,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__43182__auto__","end__43182__auto__",656997354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__43179__auto__","start__43179__auto__",-1306367615,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__37170__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__37170__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__37170__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__43183__auto__","elapsed__43183__auto__",-1603234684,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq43184){
var G__43185 = cljs.core.first.call(null,seq43184);
var seq43184__$1 = cljs.core.next.call(null,seq43184);
var G__43186 = cljs.core.first.call(null,seq43184__$1);
var seq43184__$2 = cljs.core.next.call(null,seq43184__$1);
var G__43187 = cljs.core.first.call(null,seq43184__$2);
var seq43184__$3 = cljs.core.next.call(null,seq43184__$2);
var G__43188 = cljs.core.first.call(null,seq43184__$3);
var seq43184__$4 = cljs.core.next.call(null,seq43184__$3);
var G__43189 = cljs.core.first.call(null,seq43184__$4);
var seq43184__$5 = cljs.core.next.call(null,seq43184__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__43185,G__43186,G__43187,G__43188,G__43189,seq43184__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__43198 = arguments.length;
switch (G__43198) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__37170__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__37519__auto___43200 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__43201_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43201_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__37170__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__37170__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__43202__auto__","arr__43202__auto__",-682378878,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__43203__auto__","s__43203__auto__",1600160525,null)),(function (){var x__37170__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__43203__auto__","s__43203__auto__",1600160525,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__43202__auto__","arr__43202__auto__",-682378878,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__43203__auto__","s__43203__auto__",1600160525,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__43203__auto__","s__43203__auto__",1600160525,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__43202__auto__","arr__43202__auto__",-682378878,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
var ret__37519__auto___43204 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__37519__auto___43210 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43211 = arguments.length;
var i__37480__auto___43212 = (0);
while(true){
if((i__37480__auto___43212 < len__37479__auto___43211)){
args__37486__auto__.push((arguments[i__37480__auto___43212]));

var G__43213 = (i__37480__auto___43212 + (1));
i__37480__auto___43212 = G__43213;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__43205__auto__","sb__43205__auto__",-694538678,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43206__auto__","x__43206__auto__",449335754,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__43205__auto__","sb__43205__auto__",-694538678,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43206__auto__","x__43206__auto__",449335754,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__43205__auto__","sb__43205__auto__",-694538678,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq43207){
var G__43208 = cljs.core.first.call(null,seq43207);
var seq43207__$1 = cljs.core.next.call(null,seq43207);
var G__43209 = cljs.core.first.call(null,seq43207__$1);
var seq43207__$2 = cljs.core.next.call(null,seq43207__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__43208,G__43209,seq43207__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__37519__auto___43218 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43219 = arguments.length;
var i__37480__auto___43220 = (0);
while(true){
if((i__37480__auto___43220 < len__37479__auto___43219)){
args__37486__auto__.push((arguments[i__37480__auto___43220]));

var G__43221 = (i__37480__auto___43220 + (1));
i__37480__auto___43220 = G__43221;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__43214_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = p1__43214_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq43215){
var G__43216 = cljs.core.first.call(null,seq43215);
var seq43215__$1 = cljs.core.next.call(null,seq43215);
var G__43217 = cljs.core.first.call(null,seq43215__$1);
var seq43215__$2 = cljs.core.next.call(null,seq43215__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__43216,G__43217,seq43215__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__37519__auto___43222 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__37519__auto___43224 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__37170__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43223__auto__","this__43223__auto__",1335260584,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43223__auto__","this__43223__auto__",1335260584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__37519__auto___43241 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__43233){
var vec__43234 = p__43233;
var sym = cljs.core.nth.call(null,vec__43234,(0),null);
var _ = cljs.core.nth.call(null,vec__43234,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__37170__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__43237){
var vec__43238 = p__43237;
var _ = cljs.core.nth.call(null,vec__43238,(0),null);
var info = cljs.core.nth.call(null,vec__43238,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__37519__auto___43250 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__43246){
var vec__43247 = p__43246;
var ctor = cljs.core.nth.call(null,vec__43247,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__43247,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__37170__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__37519__auto___43259 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__43255){
var vec__43256 = p__43255;
var sym = cljs.core.nth.call(null,vec__43256,(0),null);
var _ = cljs.core.nth.call(null,vec__43256,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__37170__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__37519__auto___43260 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__37170__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__37519__auto___43266 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43267 = arguments.length;
var i__37480__auto___43268 = (0);
while(true){
if((i__37480__auto___43268 < len__37479__auto___43267)){
args__37486__auto__.push((arguments[i__37480__auto___43268]));

var G__43269 = (i__37480__auto___43268 + (1));
i__37480__auto___43268 = G__43269;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((4) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__37487__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__37170__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__37170__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq43261){
var G__43262 = cljs.core.first.call(null,seq43261);
var seq43261__$1 = cljs.core.next.call(null,seq43261);
var G__43263 = cljs.core.first.call(null,seq43261__$1);
var seq43261__$2 = cljs.core.next.call(null,seq43261__$1);
var G__43264 = cljs.core.first.call(null,seq43261__$2);
var seq43261__$3 = cljs.core.next.call(null,seq43261__$2);
var G__43265 = cljs.core.first.call(null,seq43261__$3);
var seq43261__$4 = cljs.core.next.call(null,seq43261__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43262,G__43263,G__43264,G__43265,seq43261__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__37519__auto___43274 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43275 = arguments.length;
var i__37480__auto___43276 = (0);
while(true){
if((i__37480__auto___43276 < len__37479__auto___43275)){
args__37486__auto__.push((arguments[i__37480__auto___43276]));

var G__43277 = (i__37480__auto___43276 + (1));
i__37480__auto___43276 = G__43277;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq43270){
var G__43271 = cljs.core.first.call(null,seq43270);
var seq43270__$1 = cljs.core.next.call(null,seq43270);
var G__43272 = cljs.core.first.call(null,seq43270__$1);
var seq43270__$2 = cljs.core.next.call(null,seq43270__$1);
var G__43273 = cljs.core.first.call(null,seq43270__$2);
var seq43270__$3 = cljs.core.next.call(null,seq43270__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__43271,G__43272,G__43273,seq43270__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__37519__auto___43281 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43282 = arguments.length;
var i__37480__auto___43283 = (0);
while(true){
if((i__37480__auto___43283 < len__37479__auto___43282)){
args__37486__auto__.push((arguments[i__37480__auto___43283]));

var G__43284 = (i__37480__auto___43283 + (1));
i__37480__auto___43283 = G__43284;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__37170__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq43278){
var G__43279 = cljs.core.first.call(null,seq43278);
var seq43278__$1 = cljs.core.next.call(null,seq43278);
var G__43280 = cljs.core.first.call(null,seq43278__$1);
var seq43278__$2 = cljs.core.next.call(null,seq43278__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__43279,G__43280,seq43278__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__37519__auto___43288 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43289 = arguments.length;
var i__37480__auto___43290 = (0);
while(true){
if((i__37480__auto___43290 < len__37479__auto___43289)){
args__37486__auto__.push((arguments[i__37480__auto___43290]));

var G__43291 = (i__37480__auto___43290 + (1));
i__37480__auto___43290 = G__43291;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__37170__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq43285){
var G__43286 = cljs.core.first.call(null,seq43285);
var seq43285__$1 = cljs.core.next.call(null,seq43285);
var G__43287 = cljs.core.first.call(null,seq43285__$1);
var seq43285__$2 = cljs.core.next.call(null,seq43285__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__43286,G__43287,seq43285__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__37519__auto___43295 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43296 = arguments.length;
var i__37480__auto___43297 = (0);
while(true){
if((i__37480__auto___43297 < len__37479__auto___43296)){
args__37486__auto__.push((arguments[i__37480__auto___43297]));

var G__43298 = (i__37480__auto___43297 + (1));
i__37480__auto___43297 = G__43298;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__37170__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq43292){
var G__43293 = cljs.core.first.call(null,seq43292);
var seq43292__$1 = cljs.core.next.call(null,seq43292);
var G__43294 = cljs.core.first.call(null,seq43292__$1);
var seq43292__$2 = cljs.core.next.call(null,seq43292__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__43293,G__43294,seq43292__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__37519__auto___43302 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43303 = arguments.length;
var i__37480__auto___43304 = (0);
while(true){
if((i__37480__auto___43304 < len__37479__auto___43303)){
args__37486__auto__.push((arguments[i__37480__auto___43304]));

var G__43305 = (i__37480__auto___43304 + (1));
i__37480__auto___43304 = G__43305;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__37170__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq43299){
var G__43300 = cljs.core.first.call(null,seq43299);
var seq43299__$1 = cljs.core.next.call(null,seq43299);
var G__43301 = cljs.core.first.call(null,seq43299__$1);
var seq43299__$2 = cljs.core.next.call(null,seq43299__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__43300,G__43301,seq43299__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__37519__auto___43309 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43310 = arguments.length;
var i__37480__auto___43311 = (0);
while(true){
if((i__37480__auto___43311 < len__37479__auto___43310)){
args__37486__auto__.push((arguments[i__37480__auto___43311]));

var G__43312 = (i__37480__auto___43311 + (1));
i__37480__auto___43311 = G__43312;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__37170__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq43306){
var G__43307 = cljs.core.first.call(null,seq43306);
var seq43306__$1 = cljs.core.next.call(null,seq43306);
var G__43308 = cljs.core.first.call(null,seq43306__$1);
var seq43306__$2 = cljs.core.next.call(null,seq43306__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__43307,G__43308,seq43306__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__37519__auto___43316 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43317 = arguments.length;
var i__37480__auto___43318 = (0);
while(true){
if((i__37480__auto___43318 < len__37479__auto___43317)){
args__37486__auto__.push((arguments[i__37480__auto___43318]));

var G__43319 = (i__37480__auto___43318 + (1));
i__37480__auto___43318 = G__43319;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__37170__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq43313){
var G__43314 = cljs.core.first.call(null,seq43313);
var seq43313__$1 = cljs.core.next.call(null,seq43313);
var G__43315 = cljs.core.first.call(null,seq43313__$1);
var seq43313__$2 = cljs.core.next.call(null,seq43313__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__43314,G__43315,seq43313__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__37519__auto___43320 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__37519__auto___43321 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__37170__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__37519__auto___43322 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__43323 = form_SINGLEQUOTE_;
var G__43324 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__43323;
form_SINGLEQUOTE_ = G__43324;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__37170__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__36296__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__36296__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__36296__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__43326 = arguments.length;
switch (G__43326) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__43327,solo){
var vec__43328 = p__43327;
var seq__43329 = cljs.core.seq.call(null,vec__43328);
var first__43330 = cljs.core.first.call(null,seq__43329);
var seq__43329__$1 = cljs.core.next.call(null,seq__43329);
var arglist = first__43330;
var body = seq__43329__$1;
var method = vec__43328;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__43328,seq__43329,first__43330,seq__43329__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__43328,seq__43329,first__43330,seq__43329__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__43328,seq__43329,first__43330,seq__43329__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__43328,seq__43329,first__43330,seq__43329__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__43328,seq__43329,first__43330,seq__43329__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2999),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2999),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3000),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3000),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
});})(sig,restarg,vec__43328,seq__43329,first__43330,seq__43329__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__43328,seq__43329,first__43330,seq__43329__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),params,(function (){var x__37170__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});})(sig,restarg,vec__43328,seq__43329,first__43330,seq__43329__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))):null),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__37519__auto___43334 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__43332__auto__","len__43332__auto__",1863495287,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43333__auto__","i__43333__auto__",587158828,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43333__auto__","i__43333__auto__",587158828,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__43332__auto__","len__43332__auto__",1863495287,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__37170__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43333__auto__","i__43333__auto__",587158828,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43333__auto__","i__43333__auto__",587158828,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__43337,emit_var_QMARK_){
var vec__43338 = p__43337;
var vec__43341 = cljs.core.nth.call(null,vec__43338,(0),null);
var seq__43342 = cljs.core.seq.call(null,vec__43341);
var first__43343 = cljs.core.first.call(null,seq__43342);
var seq__43342__$1 = cljs.core.next.call(null,seq__43342);
var arglist = first__43343;
var body = seq__43342__$1;
var method = vec__43341;
var fdecl = vec__43338;
var dest_args = ((function (vec__43338,vec__43341,seq__43342,first__43343,seq__43342__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__43338,vec__43341,seq__43342,first__43343,seq__43342__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(vec__43338,vec__43341,seq__43342,first__43343,seq__43342__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__43338,vec__43341,seq__43342,first__43343,seq__43342__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__37170__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__43335__auto__","args__43335__auto__",-400325334,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__43335__auto__","args__43335__auto__",-400325334,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__43336__auto__","argseq__43336__auto__",-1697132319,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__43335__auto__","args__43335__auto__",-400325334,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__43335__auto__","args__43335__auto__",-400325334,null)),(function (){var x__37170__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__43336__auto__","argseq__43336__auto__",-1697132319,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__43352){
var vec__43353 = p__43352;
var seq__43354 = cljs.core.seq.call(null,vec__43353);
var first__43355 = cljs.core.first.call(null,seq__43354);
var seq__43354__$1 = cljs.core.next.call(null,seq__43354);
var sig = first__43355;
var body = seq__43354__$1;
var method = vec__43353;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__43344_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__43344_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__43345_SHARP_){
return fixed_arity.call(null,rname,p1__43345_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__37170__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__43346__auto__","args-arr__43346__auto__",1065486764,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__43346__auto__","args-arr__43346__auto__",1065486764,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__43347__auto__","argseq__43347__auto__",2100977096,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__43346__auto__","args-arr__43346__auto__",1065486764,null)),(function (){var x__37170__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__43347__auto__","argseq__43347__auto__",2100977096,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__37170__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__43356__i = 0, G__43356__a = new Array(arguments.length -  3);
while (G__43356__i < G__43356__a.length) {G__43356__a[G__43356__i] = arguments[G__43356__i + 3]; ++G__43356__i;}
  fdecl = new cljs.core.IndexedSeq(G__43356__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__43357){
var _AMPERSAND_form = cljs.core.first(arglist__43357);
arglist__43357 = cljs.core.next(arglist__43357);
var _AMPERSAND_env = cljs.core.first(arglist__43357);
arglist__43357 = cljs.core.next(arglist__43357);
var name = cljs.core.first(arglist__43357);
var fdecl = cljs.core.rest(arglist__43357);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__37486__auto__ = [];
var len__37479__auto___43363 = arguments.length;
var i__37480__auto___43364 = (0);
while(true){
if((i__37480__auto___43364 < len__37479__auto___43363)){
args__37486__auto__.push((arguments[i__37480__auto___43364]));

var G__43365 = (i__37480__auto___43364 + (1));
i__37480__auto___43364 = G__43365;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__37170__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__43366 = cljs.core.cons.call(null,f,p);
var G__43367 = cljs.core.next.call(null,args__$1);
p = G__43366;
args__$1 = G__43367;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__43368 = cljs.core.cons.call(null,f,p);
var G__43369 = cljs.core.next.call(null,args__$1);
p = G__43368;
args__$1 = G__43369;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__43370 = cljs.core.next.call(null,fd);
fd = G__43370;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__43371 = cljs.core.next.call(null,fd);
fd = G__43371;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__37170__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__43372 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__43373 = cljs.core.next.call(null,ds);
acc = G__43372;
ds = G__43373;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__43374 = cljs.core.next.call(null,p);
var G__43375 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__43374;
d = G__43375;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43358__auto__","ret__43358__auto__",929677797,null)),(function (){var x__37170__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43358__auto__","ret__43358__auto__",929677797,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq43359){
var G__43360 = cljs.core.first.call(null,seq43359);
var seq43359__$1 = cljs.core.next.call(null,seq43359);
var G__43361 = cljs.core.first.call(null,seq43359__$1);
var seq43359__$2 = cljs.core.next.call(null,seq43359__$1);
var G__43362 = cljs.core.first.call(null,seq43359__$2);
var seq43359__$3 = cljs.core.next.call(null,seq43359__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__43360,G__43361,G__43362,seq43359__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__37519__auto___43380 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__43376 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e43379){var e = e43379;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__43376,(0),null);
var meta = cljs.core.nth.call(null,vec__43376,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__37170__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__37170__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map?rel=1518330174922
