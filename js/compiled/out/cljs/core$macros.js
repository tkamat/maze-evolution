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
var ret__8879__auto___13664 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13665 = arguments.length;
var i__8840__auto___13666 = (0);
while(true){
if((i__8840__auto___13666 < len__8839__auto___13665)){
args__8846__auto__.push((arguments[i__8840__auto___13666]));

var G__13667 = (i__8840__auto___13666 + (1));
i__8840__auto___13666 = G__13667;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__8530__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})());
var G__13668 = threaded;
var G__13669 = cljs.core.next.call(null,forms__$1);
x__$1 = G__13668;
forms__$1 = G__13669;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq13660){
var G__13661 = cljs.core.first.call(null,seq13660);
var seq13660__$1 = cljs.core.next.call(null,seq13660);
var G__13662 = cljs.core.first.call(null,seq13660__$1);
var seq13660__$2 = cljs.core.next.call(null,seq13660__$1);
var G__13663 = cljs.core.first.call(null,seq13660__$2);
var seq13660__$3 = cljs.core.next.call(null,seq13660__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__13661,G__13662,G__13663,seq13660__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__8879__auto___13674 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13675 = arguments.length;
var i__8840__auto___13676 = (0);
while(true){
if((i__8840__auto___13676 < len__8839__auto___13675)){
args__8846__auto__.push((arguments[i__8840__auto___13676]));

var G__13677 = (i__8840__auto___13676 + (1));
i__8840__auto___13676 = G__13677;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__8530__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__8530__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})());
var G__13678 = threaded;
var G__13679 = cljs.core.next.call(null,forms__$1);
x__$1 = G__13678;
forms__$1 = G__13679;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq13670){
var G__13671 = cljs.core.first.call(null,seq13670);
var seq13670__$1 = cljs.core.next.call(null,seq13670);
var G__13672 = cljs.core.first.call(null,seq13670__$1);
var seq13670__$2 = cljs.core.next.call(null,seq13670__$1);
var G__13673 = cljs.core.first.call(null,seq13670__$2);
var seq13670__$3 = cljs.core.next.call(null,seq13670__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__13671,G__13672,G__13673,seq13670__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__8879__auto___13687 = (function (){
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
var G__13686 = arguments.length;
switch (G__13686) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___13689 = arguments.length;
var i__8840__auto___13690 = (0);
while(true){
if((i__8840__auto___13690 < len__8839__auto___13689)){
args_arr__8858__auto__.push((arguments[i__8840__auto___13690]));

var G__13691 = (i__8840__auto___13690 + (1));
i__8840__auto___13690 = G__13691;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq13681){
var G__13682 = cljs.core.first.call(null,seq13681);
var seq13681__$1 = cljs.core.next.call(null,seq13681);
var G__13683 = cljs.core.first.call(null,seq13681__$1);
var seq13681__$2 = cljs.core.next.call(null,seq13681__$1);
var G__13684 = cljs.core.first.call(null,seq13681__$2);
var seq13681__$3 = cljs.core.next.call(null,seq13681__$2);
var G__13685 = cljs.core.first.call(null,seq13681__$3);
var seq13681__$4 = cljs.core.next.call(null,seq13681__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__13682,G__13683,G__13684,G__13685,seq13681__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__8879__auto___13695 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13696 = arguments.length;
var i__8840__auto___13697 = (0);
while(true){
if((i__8840__auto___13697 < len__8839__auto___13696)){
args__8846__auto__.push((arguments[i__8840__auto___13697]));

var G__13698 = (i__8840__auto___13697 + (1));
i__8840__auto___13697 = G__13698;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq13692){
var G__13693 = cljs.core.first.call(null,seq13692);
var seq13692__$1 = cljs.core.next.call(null,seq13692);
var G__13694 = cljs.core.first.call(null,seq13692__$1);
var seq13692__$2 = cljs.core.next.call(null,seq13692__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__13693,G__13694,seq13692__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__8879__auto___13702 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13703 = arguments.length;
var i__8840__auto___13704 = (0);
while(true){
if((i__8840__auto___13704 < len__8839__auto___13703)){
args__8846__auto__.push((arguments[i__8840__auto___13704]));

var G__13705 = (i__8840__auto___13704 + (1));
i__8840__auto___13704 = G__13705;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__8530__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$2);
})(),x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq13699){
var G__13700 = cljs.core.first.call(null,seq13699);
var seq13699__$1 = cljs.core.next.call(null,seq13699);
var G__13701 = cljs.core.first.call(null,seq13699__$1);
var seq13699__$2 = cljs.core.next.call(null,seq13699__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__13700,G__13701,seq13699__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__8879__auto___13710 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13711 = arguments.length;
var i__8840__auto___13712 = (0);
while(true){
if((i__8840__auto___13712 < len__8839__auto___13711)){
args__8846__auto__.push((arguments[i__8840__auto___13712]));

var G__13713 = (i__8840__auto___13712 + (1));
i__8840__auto___13712 = G__13713;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__13706_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core.vary_meta.call(null,p1__13706_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq13707){
var G__13708 = cljs.core.first.call(null,seq13707);
var seq13707__$1 = cljs.core.next.call(null,seq13707);
var G__13709 = cljs.core.first.call(null,seq13707__$1);
var seq13707__$2 = cljs.core.next.call(null,seq13707__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__13708,G__13709,seq13707__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__8879__auto___13718 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13719 = arguments.length;
var i__8840__auto___13720 = (0);
while(true){
if((i__8840__auto___13720 < len__8839__auto___13719)){
args__8846__auto__.push((arguments[i__8840__auto___13720]));

var G__13721 = (i__8840__auto___13720 + (1));
i__8840__auto___13720 = G__13721;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__8530__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq13714){
var G__13715 = cljs.core.first.call(null,seq13714);
var seq13714__$1 = cljs.core.next.call(null,seq13714);
var G__13716 = cljs.core.first.call(null,seq13714__$1);
var seq13714__$2 = cljs.core.next.call(null,seq13714__$1);
var G__13717 = cljs.core.first.call(null,seq13714__$2);
var seq13714__$3 = cljs.core.next.call(null,seq13714__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__13715,G__13716,G__13717,seq13714__$3);
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
var G__13722 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__13723 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__13722;
s = G__13723;
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
return (function (p__13724){
var vec__13725 = p__13724;
var t = cljs.core.nth.call(null,vec__13725,(0),null);
var fs = cljs.core.nth.call(null,vec__13725,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8530__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__8879__auto___13732 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___13733 = arguments.length;
var i__8840__auto___13734 = (0);
while(true){
if((i__8840__auto___13734 < len__8839__auto___13733)){
args__8846__auto__.push((arguments[i__8840__auto___13734]));

var G__13735 = (i__8840__auto___13734 + (1));
i__8840__auto___13734 = G__13735;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq13728){
var G__13729 = cljs.core.first.call(null,seq13728);
var seq13728__$1 = cljs.core.next.call(null,seq13728);
var G__13730 = cljs.core.first.call(null,seq13728__$1);
var seq13728__$2 = cljs.core.next.call(null,seq13728__$1);
var G__13731 = cljs.core.first.call(null,seq13728__$2);
var seq13728__$3 = cljs.core.next.call(null,seq13728__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__13729,G__13730,G__13731,seq13728__$3);
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
var G__13736 = cljs.core.next.call(null,params__$1);
var G__13737 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__13738 = lets;
params__$1 = G__13736;
new_params = G__13737;
lets = G__13738;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__13739 = cljs.core.next.call(null,params__$1);
var G__13740 = cljs.core.conj.call(null,new_params,gparam);
var G__13741 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__13739;
new_params = G__13740;
lets = G__13741;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
break;
}
}
});
var ret__8879__auto___13748 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13749 = arguments.length;
var i__8840__auto___13750 = (0);
while(true){
if((i__8840__auto___13750 < len__8839__auto___13749)){
args__8846__auto__.push((arguments[i__8840__auto___13750]));

var G__13751 = (i__8840__auto___13750 + (1));
i__8840__auto___13750 = G__13751;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__8530__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__13745 = sig;
var seq__13746 = cljs.core.seq.call(null,vec__13745);
var first__13747 = cljs.core.first.call(null,seq__13746);
var seq__13746__$1 = cljs.core.next.call(null,seq__13746);
var params = first__13747;
var body = seq__13746__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__7668__auto__ = conds;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__8530__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.map.call(null,((function (vec__13745,seq__13746,first__13747,seq__13746__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__8530__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(vec__13745,seq__13746,first__13747,seq__13746__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__13745,seq__13746,first__13747,seq__13746__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__8530__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(vec__13745,seq__13746,first__13747,seq__13746__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq13742){
var G__13743 = cljs.core.first.call(null,seq13742);
var seq13742__$1 = cljs.core.next.call(null,seq13742);
var G__13744 = cljs.core.first.call(null,seq13742__$1);
var seq13742__$2 = cljs.core.next.call(null,seq13742__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__13743,G__13744,seq13742__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__8879__auto___13756 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13757 = arguments.length;
var i__8840__auto___13758 = (0);
while(true){
if((i__8840__auto___13758 < len__8839__auto___13757)){
args__8846__auto__.push((arguments[i__8840__auto___13758]));

var G__13759 = (i__8840__auto___13758 + (1));
i__8840__auto___13758 = G__13759;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq13752){
var G__13753 = cljs.core.first.call(null,seq13752);
var seq13752__$1 = cljs.core.next.call(null,seq13752);
var G__13754 = cljs.core.first.call(null,seq13752__$1);
var seq13752__$2 = cljs.core.next.call(null,seq13752__$1);
var G__13755 = cljs.core.first.call(null,seq13752__$2);
var seq13752__$3 = cljs.core.next.call(null,seq13752__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__13753,G__13754,G__13755,seq13752__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__8879__auto___13769 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__13768 = arguments.length;
switch (G__13768) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___13771 = arguments.length;
var i__8840__auto___13772 = (0);
while(true){
if((i__8840__auto___13772 < len__8839__auto___13771)){
args_arr__8858__auto__.push((arguments[i__8840__auto___13772]));

var G__13773 = (i__8840__auto___13772 + (1));
i__8840__auto___13772 = G__13773;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8859__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__8530__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13760__auto__","temp__13760__auto__",880143545,null)),(function (){var x__8530__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13760__auto__","temp__13760__auto__",880143545,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13760__auto__","temp__13760__auto__",880143545,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq13762){
var G__13763 = cljs.core.first.call(null,seq13762);
var seq13762__$1 = cljs.core.next.call(null,seq13762);
var G__13764 = cljs.core.first.call(null,seq13762__$1);
var seq13762__$2 = cljs.core.next.call(null,seq13762__$1);
var G__13765 = cljs.core.first.call(null,seq13762__$2);
var seq13762__$3 = cljs.core.next.call(null,seq13762__$2);
var G__13766 = cljs.core.first.call(null,seq13762__$3);
var seq13762__$4 = cljs.core.next.call(null,seq13762__$3);
var G__13767 = cljs.core.first.call(null,seq13762__$4);
var seq13762__$5 = cljs.core.next.call(null,seq13762__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__13763,G__13764,G__13765,G__13766,G__13767,seq13762__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__8879__auto___13776 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__13775 = arguments.length;
switch (G__13775) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8530__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8530__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__8879__auto___13783 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13784 = arguments.length;
var i__8840__auto___13785 = (0);
while(true){
if((i__8840__auto___13785 < len__8839__auto___13784)){
args__8846__auto__.push((arguments[i__8840__auto___13785]));

var G__13786 = (i__8840__auto___13785 + (1));
i__8840__auto___13785 = G__13786;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__13778_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__13778_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq13779){
var G__13780 = cljs.core.first.call(null,seq13779);
var seq13779__$1 = cljs.core.next.call(null,seq13779);
var G__13781 = cljs.core.first.call(null,seq13779__$1);
var seq13779__$2 = cljs.core.next.call(null,seq13779__$1);
var G__13782 = cljs.core.first.call(null,seq13779__$2);
var seq13779__$3 = cljs.core.next.call(null,seq13779__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__13780,G__13781,G__13782,seq13779__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__8879__auto___13791 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13792 = arguments.length;
var i__8840__auto___13793 = (0);
while(true){
if((i__8840__auto___13793 < len__8839__auto___13792)){
args__8846__auto__.push((arguments[i__8840__auto___13793]));

var G__13794 = (i__8840__auto___13793 + (1));
i__8840__auto___13793 = G__13794;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq13787){
var G__13788 = cljs.core.first.call(null,seq13787);
var seq13787__$1 = cljs.core.next.call(null,seq13787);
var G__13789 = cljs.core.first.call(null,seq13787__$1);
var seq13787__$2 = cljs.core.next.call(null,seq13787__$1);
var G__13790 = cljs.core.first.call(null,seq13787__$2);
var seq13787__$3 = cljs.core.next.call(null,seq13787__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__13788,G__13789,G__13790,seq13787__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__8879__auto___13799 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13800 = arguments.length;
var i__8840__auto___13801 = (0);
while(true){
if((i__8840__auto___13801 < len__8839__auto___13800)){
args__8846__auto__.push((arguments[i__8840__auto___13801]));

var G__13802 = (i__8840__auto___13801 + (1));
i__8840__auto___13801 = G__13802;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq13795){
var G__13796 = cljs.core.first.call(null,seq13795);
var seq13795__$1 = cljs.core.next.call(null,seq13795);
var G__13797 = cljs.core.first.call(null,seq13795__$1);
var seq13795__$2 = cljs.core.next.call(null,seq13795__$1);
var G__13798 = cljs.core.first.call(null,seq13795__$2);
var seq13795__$3 = cljs.core.next.call(null,seq13795__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__13796,G__13797,G__13798,seq13795__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__8879__auto___13811 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13812 = arguments.length;
var i__8840__auto___13813 = (0);
while(true){
if((i__8840__auto___13813 < len__8839__auto___13812)){
args__8846__auto__.push((arguments[i__8840__auto___13813]));

var G__13814 = (i__8840__auto___13813 + (1));
i__8840__auto___13813 = G__13814;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
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


var vec__13808 = bindings;
var x = cljs.core.nth.call(null,vec__13808,(0),null);
var xs = cljs.core.nth.call(null,vec__13808,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__13803__auto__","xs__13803__auto__",573633953,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8530__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__13803__auto__","xs__13803__auto__",573633953,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq13804){
var G__13805 = cljs.core.first.call(null,seq13804);
var seq13804__$1 = cljs.core.next.call(null,seq13804);
var G__13806 = cljs.core.first.call(null,seq13804__$1);
var seq13804__$2 = cljs.core.next.call(null,seq13804__$1);
var G__13807 = cljs.core.first.call(null,seq13804__$2);
var seq13804__$3 = cljs.core.next.call(null,seq13804__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__13805,G__13806,G__13807,seq13804__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__8879__auto___13820 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13821 = arguments.length;
var i__8840__auto___13822 = (0);
while(true){
if((i__8840__auto___13822 < len__8839__auto___13821)){
args__8846__auto__.push((arguments[i__8840__auto___13822]));

var G__13823 = (i__8840__auto___13822 + (1));
i__8840__auto___13822 = G__13823;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13815__auto__","temp__13815__auto__",2114542811,null)),(function (){var x__8530__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13815__auto__","temp__13815__auto__",2114542811,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13815__auto__","temp__13815__auto__",2114542811,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq13816){
var G__13817 = cljs.core.first.call(null,seq13816);
var seq13816__$1 = cljs.core.next.call(null,seq13816);
var G__13818 = cljs.core.first.call(null,seq13816__$1);
var seq13816__$2 = cljs.core.next.call(null,seq13816__$1);
var G__13819 = cljs.core.first.call(null,seq13816__$2);
var seq13816__$3 = cljs.core.next.call(null,seq13816__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__13817,G__13818,G__13819,seq13816__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__8879__auto___13828 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13829 = arguments.length;
var i__8840__auto___13830 = (0);
while(true){
if((i__8840__auto___13830 < len__8839__auto___13829)){
args__8846__auto__.push((arguments[i__8840__auto___13830]));

var G__13831 = (i__8840__auto___13830 + (1));
i__8840__auto___13830 = G__13831;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),null),x__8530__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq13824){
var G__13825 = cljs.core.first.call(null,seq13824);
var seq13824__$1 = cljs.core.next.call(null,seq13824);
var G__13826 = cljs.core.first.call(null,seq13824__$1);
var seq13824__$2 = cljs.core.next.call(null,seq13824__$1);
var G__13827 = cljs.core.first.call(null,seq13824__$2);
var seq13824__$3 = cljs.core.next.call(null,seq13824__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__13825,G__13826,G__13827,seq13824__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__8879__auto___13836 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13837 = arguments.length;
var i__8840__auto___13838 = (0);
while(true){
if((i__8840__auto___13838 < len__8839__auto___13837)){
args__8846__auto__.push((arguments[i__8840__auto___13838]));

var G__13839 = (i__8840__auto___13838 + (1));
i__8840__auto___13838 = G__13839;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8530__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq13832){
var G__13833 = cljs.core.first.call(null,seq13832);
var seq13832__$1 = cljs.core.next.call(null,seq13832);
var G__13834 = cljs.core.first.call(null,seq13832__$1);
var seq13832__$2 = cljs.core.next.call(null,seq13832__$1);
var G__13835 = cljs.core.first.call(null,seq13832__$2);
var seq13832__$3 = cljs.core.next.call(null,seq13832__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__13833,G__13834,G__13835,seq13832__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__8879__auto___13848 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13849 = arguments.length;
var i__8840__auto___13850 = (0);
while(true){
if((i__8840__auto___13850 < len__8839__auto___13849)){
args__8846__auto__.push((arguments[i__8840__auto___13850]));

var G__13851 = (i__8840__auto___13850 + (1));
i__8840__auto___13850 = G__13851;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__13844){
var vec__13845 = p__13844;
var test = cljs.core.nth.call(null,vec__13845,(0),null);
var step = cljs.core.nth.call(null,vec__13845,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq13840){
var G__13841 = cljs.core.first.call(null,seq13840);
var seq13840__$1 = cljs.core.next.call(null,seq13840);
var G__13842 = cljs.core.first.call(null,seq13840__$1);
var seq13840__$2 = cljs.core.next.call(null,seq13840__$1);
var G__13843 = cljs.core.first.call(null,seq13840__$2);
var seq13840__$3 = cljs.core.next.call(null,seq13840__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__13841,G__13842,G__13843,seq13840__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__8879__auto___13860 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13861 = arguments.length;
var i__8840__auto___13862 = (0);
while(true){
if((i__8840__auto___13862 < len__8839__auto___13861)){
args__8846__auto__.push((arguments[i__8840__auto___13862]));

var G__13863 = (i__8840__auto___13862 + (1));
i__8840__auto___13862 = G__13863;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__13856){
var vec__13857 = p__13856;
var test = cljs.core.nth.call(null,vec__13857,(0),null);
var step = cljs.core.nth.call(null,vec__13857,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq13852){
var G__13853 = cljs.core.first.call(null,seq13852);
var seq13852__$1 = cljs.core.next.call(null,seq13852);
var G__13854 = cljs.core.first.call(null,seq13852__$1);
var seq13852__$2 = cljs.core.next.call(null,seq13852__$1);
var G__13855 = cljs.core.first.call(null,seq13852__$2);
var seq13852__$3 = cljs.core.next.call(null,seq13852__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__13853,G__13854,G__13855,seq13852__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__8879__auto___13869 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13870 = arguments.length;
var i__8840__auto___13871 = (0);
while(true){
if((i__8840__auto___13871 < len__8839__auto___13870)){
args__8846__auto__.push((arguments[i__8840__auto___13871]));

var G__13872 = (i__8840__auto___13871 + (1));
i__8840__auto___13871 = G__13872;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((4) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8847__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq13864){
var G__13865 = cljs.core.first.call(null,seq13864);
var seq13864__$1 = cljs.core.next.call(null,seq13864);
var G__13866 = cljs.core.first.call(null,seq13864__$1);
var seq13864__$2 = cljs.core.next.call(null,seq13864__$1);
var G__13867 = cljs.core.first.call(null,seq13864__$2);
var seq13864__$3 = cljs.core.next.call(null,seq13864__$2);
var G__13868 = cljs.core.first.call(null,seq13864__$3);
var seq13864__$4 = cljs.core.next.call(null,seq13864__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__13865,G__13866,G__13867,G__13868,seq13864__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__8879__auto___13877 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13878 = arguments.length;
var i__8840__auto___13879 = (0);
while(true){
if((i__8840__auto___13879 < len__8839__auto___13878)){
args__8846__auto__.push((arguments[i__8840__auto___13879]));

var G__13880 = (i__8840__auto___13879 + (1));
i__8840__auto___13879 = G__13880;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq13873){
var G__13874 = cljs.core.first.call(null,seq13873);
var seq13873__$1 = cljs.core.next.call(null,seq13873);
var G__13875 = cljs.core.first.call(null,seq13873__$1);
var seq13873__$2 = cljs.core.next.call(null,seq13873__$1);
var G__13876 = cljs.core.first.call(null,seq13873__$2);
var seq13873__$3 = cljs.core.next.call(null,seq13873__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__13874,G__13875,G__13876,seq13873__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__8879__auto___13885 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13886 = arguments.length;
var i__8840__auto___13887 = (0);
while(true){
if((i__8840__auto___13887 < len__8839__auto___13886)){
args__8846__auto__.push((arguments[i__8840__auto___13887]));

var G__13888 = (i__8840__auto___13887 + (1));
i__8840__auto___13887 = G__13888;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq13881){
var G__13882 = cljs.core.first.call(null,seq13881);
var seq13881__$1 = cljs.core.next.call(null,seq13881);
var G__13883 = cljs.core.first.call(null,seq13881__$1);
var seq13881__$2 = cljs.core.next.call(null,seq13881__$1);
var G__13884 = cljs.core.first.call(null,seq13881__$2);
var seq13881__$3 = cljs.core.next.call(null,seq13881__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__13882,G__13883,G__13884,seq13881__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__8879__auto___13898 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__13897 = arguments.length;
switch (G__13897) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___13900 = arguments.length;
var i__8840__auto___13901 = (0);
while(true){
if((i__8840__auto___13901 < len__8839__auto___13900)){
args_arr__8858__auto__.push((arguments[i__8840__auto___13901]));

var G__13902 = (i__8840__auto___13901 + (1));
i__8840__auto___13901 = G__13902;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8859__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__8530__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13889__auto__","temp__13889__auto__",1670365796,null)),(function (){var x__8530__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13889__auto__","temp__13889__auto__",1670365796,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13889__auto__","temp__13889__auto__",1670365796,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq13891){
var G__13892 = cljs.core.first.call(null,seq13891);
var seq13891__$1 = cljs.core.next.call(null,seq13891);
var G__13893 = cljs.core.first.call(null,seq13891__$1);
var seq13891__$2 = cljs.core.next.call(null,seq13891__$1);
var G__13894 = cljs.core.first.call(null,seq13891__$2);
var seq13891__$3 = cljs.core.next.call(null,seq13891__$2);
var G__13895 = cljs.core.first.call(null,seq13891__$3);
var seq13891__$4 = cljs.core.next.call(null,seq13891__$3);
var G__13896 = cljs.core.first.call(null,seq13891__$4);
var seq13891__$5 = cljs.core.next.call(null,seq13891__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__13892,G__13893,G__13894,G__13895,G__13896,seq13891__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__8879__auto___13908 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13909 = arguments.length;
var i__8840__auto___13910 = (0);
while(true){
if((i__8840__auto___13910 < len__8839__auto___13909)){
args__8846__auto__.push((arguments[i__8840__auto___13910]));

var G__13911 = (i__8840__auto___13910 + (1));
i__8840__auto___13910 = G__13911;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13903__auto__","temp__13903__auto__",-1813196072,null)),(function (){var x__8530__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13903__auto__","temp__13903__auto__",-1813196072,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__13903__auto__","temp__13903__auto__",-1813196072,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq13904){
var G__13905 = cljs.core.first.call(null,seq13904);
var seq13904__$1 = cljs.core.next.call(null,seq13904);
var G__13906 = cljs.core.first.call(null,seq13904__$1);
var seq13904__$2 = cljs.core.next.call(null,seq13904__$1);
var G__13907 = cljs.core.first.call(null,seq13904__$2);
var seq13904__$3 = cljs.core.next.call(null,seq13904__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__13905,G__13906,G__13907,seq13904__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__13912_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__13912_SHARP_)){
return cljs.core.first.call(null,p1__13912_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13912_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13912_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__13913_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__13913_SHARP_);
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
var G__13914 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__13915 = cljs.core.next.call(null,fdecls);
ret = G__13914;
fdecls = G__13915;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__8530__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
}
});
var ret__8879__auto___13916 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__8530__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
var G__13923 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__13924 = n;
var G__13925 = cljs.core.nnext.call(null,bs);
var G__13926 = true;
ret = G__13923;
n = G__13924;
bs = G__13925;
seen_rest_QMARK_ = G__13926;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__13927 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8530__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8530__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__8530__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__13928 = (n + (1));
var G__13929 = cljs.core.next.call(null,bs);
var G__13930 = seen_rest_QMARK_;
ret = G__13927;
n = G__13928;
bs = G__13929;
seen_rest_QMARK_ = G__13930;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__8530__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__8530__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__13917_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__7668__auto__ = mkns;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.namespace.call(null,p1__13917_SHARP_);
}
})(),cljs.core.name.call(null,p1__13917_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__13918_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core.symbol.call(null,(function (){var or__7668__auto__ = mkns;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.namespace.call(null,p1__13918_SHARP_);
}
})(),cljs.core.name.call(null,p1__13918_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
return (function (p1__13919_SHARP_,p2__13920_SHARP_){
return cljs.core.assoc.call(null,p1__13919_SHARP_,p2__13920_SHARP_,cljs.core.val.call(null,entry).call(null,p2__13920_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__8530__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$2);
})(),x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__8530__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__13931 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__13932 = cljs.core.next.call(null,bes);
ret = G__13931;
bes = G__13932;
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
return (function (p1__13921_SHARP_){
return (cljs.core.first.call(null,p1__13921_SHARP_) instanceof cljs.core.Keyword);
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
var ret__8879__auto___13933 = /**
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8530__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__8530__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__8879__auto___13938 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13939 = arguments.length;
var i__8840__auto___13940 = (0);
while(true){
if((i__8840__auto___13940 < len__8839__auto___13939)){
args__8846__auto__.push((arguments[i__8840__auto___13940]));

var G__13941 = (i__8840__auto___13940 + (1));
i__8840__auto___13940 = G__13941;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__8530__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq13934){
var G__13935 = cljs.core.first.call(null,seq13934);
var seq13934__$1 = cljs.core.next.call(null,seq13934);
var G__13936 = cljs.core.first.call(null,seq13934__$1);
var seq13934__$2 = cljs.core.next.call(null,seq13934__$1);
var G__13937 = cljs.core.first.call(null,seq13934__$2);
var seq13934__$3 = cljs.core.next.call(null,seq13934__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__13935,G__13936,G__13937,seq13934__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__8879__auto___13950 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13951 = arguments.length;
var i__8840__auto___13952 = (0);
while(true){
if((i__8840__auto___13952 < len__8839__auto___13951)){
args__8846__auto__.push((arguments[i__8840__auto___13952]));

var G__13953 = (i__8840__auto___13952 + (1));
i__8840__auto___13952 = G__13953;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__8530__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
return (function (ret,p__13946){
var vec__13947 = p__13946;
var b = cljs.core.nth.call(null,vec__13947,(0),null);
var v = cljs.core.nth.call(null,vec__13947,(1),null);
var g = cljs.core.nth.call(null,vec__13947,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq13942){
var G__13943 = cljs.core.first.call(null,seq13942);
var seq13942__$1 = cljs.core.next.call(null,seq13942);
var G__13944 = cljs.core.first.call(null,seq13942__$1);
var seq13942__$2 = cljs.core.next.call(null,seq13942__$1);
var G__13945 = cljs.core.first.call(null,seq13942__$2);
var seq13942__$3 = cljs.core.next.call(null,seq13942__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__13943,G__13944,G__13945,seq13942__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__13954_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13954_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__13955){
var vec__13956 = p__13955;
var p = cljs.core.nth.call(null,vec__13956,(0),null);
var b = cljs.core.nth.call(null,vec__13956,(1),null);
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
var ret__8879__auto___13962 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__8846__auto__ = [];
var len__8839__auto___13963 = arguments.length;
var i__8840__auto___13964 = (0);
while(true){
if((i__8840__auto___13964 < len__8839__auto___13963)){
args__8846__auto__.push((arguments[i__8840__auto___13964]));

var G__13965 = (i__8840__auto___13964 + (1));
i__8840__auto___13964 = G__13965;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
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

cljs.core$macros.str.cljs$lang$applyTo = (function (seq13959){
var G__13960 = cljs.core.first.call(null,seq13959);
var seq13959__$1 = cljs.core.next.call(null,seq13959);
var G__13961 = cljs.core.first.call(null,seq13959__$1);
var seq13959__$2 = cljs.core.next.call(null,seq13959__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__13960,G__13961,seq13959__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__7656__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__7656__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__7656__auto__;
}
});
var ret__8879__auto___13976 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__13974 = arguments.length;
switch (G__13974) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___13978 = arguments.length;
var i__8840__auto___13979 = (0);
while(true){
if((i__8840__auto___13979 < len__8839__auto___13978)){
args_arr__8858__auto__.push((arguments[i__8840__auto___13979]));

var G__13980 = (i__8840__auto___13979 + (1));
i__8840__auto___13979 = G__13980;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8859__auto__);

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
return (function (p1__13966_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__13966_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__13967_SHARP_){
var _STAR_cljs_warnings_STAR_13975 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__13967_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_13975;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8530__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__13968__auto__","and__13968__auto__",489105738,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__13968__auto__","and__13968__auto__",489105738,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__13968__auto__","and__13968__auto__",489105738,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq13970){
var G__13971 = cljs.core.first.call(null,seq13970);
var seq13970__$1 = cljs.core.next.call(null,seq13970);
var G__13972 = cljs.core.first.call(null,seq13970__$1);
var seq13970__$2 = cljs.core.next.call(null,seq13970__$1);
var G__13973 = cljs.core.first.call(null,seq13970__$2);
var seq13970__$3 = cljs.core.next.call(null,seq13970__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__13971,G__13972,G__13973,seq13970__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__8879__auto___13991 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__13989 = arguments.length;
switch (G__13989) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___13993 = arguments.length;
var i__8840__auto___13994 = (0);
while(true){
if((i__8840__auto___13994 < len__8839__auto___13993)){
args_arr__8858__auto__.push((arguments[i__8840__auto___13994]));

var G__13995 = (i__8840__auto___13994 + (1));
i__8840__auto___13994 = G__13995;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8859__auto__);

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
return (function (p1__13981_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__13981_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__13982_SHARP_){
var _STAR_cljs_warnings_STAR_13990 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__13982_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_13990;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8530__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__13983__auto__","or__13983__auto__",-707605091,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__13983__auto__","or__13983__auto__",-707605091,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__13983__auto__","or__13983__auto__",-707605091,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq13985){
var G__13986 = cljs.core.first.call(null,seq13985);
var seq13985__$1 = cljs.core.next.call(null,seq13985);
var G__13987 = cljs.core.first.call(null,seq13985__$1);
var seq13985__$2 = cljs.core.next.call(null,seq13985__$1);
var G__13988 = cljs.core.first.call(null,seq13985__$2);
var seq13985__$3 = cljs.core.next.call(null,seq13985__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__13986,G__13987,G__13988,seq13985__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__8879__auto___13996 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___13997 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___13998 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__8879__auto___13999 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__8879__auto___14000 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__8879__auto___14001 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__8879__auto___14002 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__8879__auto___14003 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__8879__auto___14004 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__8879__auto___14005 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__8879__auto___14006 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__8530__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__8879__auto___14011 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__14008 = clojure.string.split.call(null,comment,/\n/);
var seq__14009 = cljs.core.seq.call(null,vec__14008);
var first__14010 = cljs.core.first.call(null,seq__14009);
var seq__14009__$1 = cljs.core.next.call(null,seq__14009);
var x = first__14010;
var ys = seq__14009__$1;
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__14008,seq__14009,first__14010,seq__14009__$1,x,ys){
return (function (p1__14007_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__14007_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__14008,seq__14009,first__14010,seq__14009__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__8879__auto___14012 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$2);
})(),x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__8879__auto___14013 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__8879__auto___14014 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14015 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14016 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14017 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14018 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14019 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14022 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__14020__auto__","c__14020__auto__",-546947571,null)),(function (){var x__8530__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14021__auto__","x__14021__auto__",-162893146,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14021__auto__","x__14021__auto__",-162893146,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__14020__auto__","c__14020__auto__",-546947571,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14023 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14024 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14025 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14035 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__14032 = arguments.length;
switch (G__14032) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14037 = arguments.length;
var i__8840__auto___14038 = (0);
while(true){
if((i__8840__auto___14038 < len__8839__auto___14037)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14038]));

var G__14039 = (i__8840__auto___14038 + (1));
i__8840__auto___14038 = G__14039;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__14033 = cljs.analyzer.checked_arrays.call(null);
var G__14033__$1 = (((G__14033 instanceof cljs.core.Keyword))?G__14033.fqn:null);
switch (G__14033__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__14034 = cljs.analyzer.checked_arrays.call(null);
var G__14034__$1 = (((G__14034 instanceof cljs.core.Keyword))?G__14034.fqn:null);
switch (G__14034__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8530__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq14027){
var G__14028 = cljs.core.first.call(null,seq14027);
var seq14027__$1 = cljs.core.next.call(null,seq14027);
var G__14029 = cljs.core.first.call(null,seq14027__$1);
var seq14027__$2 = cljs.core.next.call(null,seq14027__$1);
var G__14030 = cljs.core.first.call(null,seq14027__$2);
var seq14027__$3 = cljs.core.next.call(null,seq14027__$2);
var G__14031 = cljs.core.first.call(null,seq14027__$3);
var seq14027__$4 = cljs.core.next.call(null,seq14027__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__14028,G__14029,G__14030,G__14031,seq14027__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__8879__auto___14052 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__14049 = arguments.length;
switch (G__14049) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14054 = arguments.length;
var i__8840__auto___14055 = (0);
while(true){
if((i__8840__auto___14055 < len__8839__auto___14054)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14055]));

var G__14056 = (i__8840__auto___14055 + (1));
i__8840__auto___14055 = G__14056;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8859__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__14050 = cljs.analyzer.checked_arrays.call(null);
var G__14050__$1 = (((G__14050 instanceof cljs.core.Keyword))?G__14050.fqn:null);
switch (G__14050__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$2);
})(),x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__14051 = cljs.analyzer.checked_arrays.call(null);
var G__14051__$1 = (((G__14051 instanceof cljs.core.Keyword))?G__14051.fqn:null);
switch (G__14051__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8530__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq14043){
var G__14044 = cljs.core.first.call(null,seq14043);
var seq14043__$1 = cljs.core.next.call(null,seq14043);
var G__14045 = cljs.core.first.call(null,seq14043__$1);
var seq14043__$2 = cljs.core.next.call(null,seq14043__$1);
var G__14046 = cljs.core.first.call(null,seq14043__$2);
var seq14043__$3 = cljs.core.next.call(null,seq14043__$2);
var G__14047 = cljs.core.first.call(null,seq14043__$3);
var seq14043__$4 = cljs.core.next.call(null,seq14043__$3);
var G__14048 = cljs.core.first.call(null,seq14043__$4);
var seq14043__$5 = cljs.core.next.call(null,seq14043__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__14044,G__14045,G__14046,G__14047,G__14048,seq14043__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__8879__auto___14059 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__8879__auto___14060 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$2);
})(),x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__8879__auto___14068 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__14067 = arguments.length;
switch (G__14067) {
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
var args_arr__8858__auto__ = [];
var len__8839__auto___14070 = arguments.length;
var i__8840__auto___14071 = (0);
while(true){
if((i__8840__auto___14071 < len__8839__auto___14070)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14071]));

var G__14072 = (i__8840__auto___14071 + (1));
i__8840__auto___14071 = G__14072;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq14062){
var G__14063 = cljs.core.first.call(null,seq14062);
var seq14062__$1 = cljs.core.next.call(null,seq14062);
var G__14064 = cljs.core.first.call(null,seq14062__$1);
var seq14062__$2 = cljs.core.next.call(null,seq14062__$1);
var G__14065 = cljs.core.first.call(null,seq14062__$2);
var seq14062__$3 = cljs.core.next.call(null,seq14062__$2);
var G__14066 = cljs.core.first.call(null,seq14062__$3);
var seq14062__$4 = cljs.core.next.call(null,seq14062__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__14063,G__14064,G__14065,G__14066,seq14062__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__8879__auto___14073 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__8879__auto___14074 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__8879__auto___14075 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__8879__auto___14076 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__8879__auto___14077 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__8879__auto___14078 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__8879__auto___14079 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__8879__auto___14080 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__8879__auto___14081 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__8879__auto___14085 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14086 = arguments.length;
var i__8840__auto___14087 = (0);
while(true){
if((i__8840__auto___14087 < len__8839__auto___14086)){
args__8846__auto__.push((arguments[i__8840__auto___14087]));

var G__14088 = (i__8840__auto___14087 + (1));
i__8840__auto___14087 = G__14088;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq14082){
var G__14083 = cljs.core.first.call(null,seq14082);
var seq14082__$1 = cljs.core.next.call(null,seq14082);
var G__14084 = cljs.core.first.call(null,seq14082__$1);
var seq14082__$2 = cljs.core.next.call(null,seq14082__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__14083,G__14084,seq14082__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__8879__auto___14092 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14093 = arguments.length;
var i__8840__auto___14094 = (0);
while(true){
if((i__8840__auto___14094 < len__8839__auto___14093)){
args__8846__auto__.push((arguments[i__8840__auto___14094]));

var G__14095 = (i__8840__auto___14094 + (1));
i__8840__auto___14094 = G__14095;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq14089){
var G__14090 = cljs.core.first.call(null,seq14089);
var seq14089__$1 = cljs.core.next.call(null,seq14089);
var G__14091 = cljs.core.first.call(null,seq14089__$1);
var seq14089__$2 = cljs.core.next.call(null,seq14089__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__14090,G__14091,seq14089__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__8879__auto___14096 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__8879__auto___14097 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__8879__auto___14101 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14102 = arguments.length;
var i__8840__auto___14103 = (0);
while(true){
if((i__8840__auto___14103 < len__8839__auto___14102)){
args__8846__auto__.push((arguments[i__8840__auto___14103]));

var G__14104 = (i__8840__auto___14103 + (1));
i__8840__auto___14103 = G__14104;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq14098){
var G__14099 = cljs.core.first.call(null,seq14098);
var seq14098__$1 = cljs.core.next.call(null,seq14098);
var G__14100 = cljs.core.first.call(null,seq14098__$1);
var seq14098__$2 = cljs.core.next.call(null,seq14098__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__14099,G__14100,seq14098__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__8879__auto___14105 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__8879__auto___14106 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__8879__auto___14110 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14111 = arguments.length;
var i__8840__auto___14112 = (0);
while(true){
if((i__8840__auto___14112 < len__8839__auto___14111)){
args__8846__auto__.push((arguments[i__8840__auto___14112]));

var G__14113 = (i__8840__auto___14112 + (1));
i__8840__auto___14112 = G__14113;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq14107){
var G__14108 = cljs.core.first.call(null,seq14107);
var seq14107__$1 = cljs.core.next.call(null,seq14107);
var G__14109 = cljs.core.first.call(null,seq14107__$1);
var seq14107__$2 = cljs.core.next.call(null,seq14107__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__14108,G__14109,seq14107__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__8879__auto___14117 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14118 = arguments.length;
var i__8840__auto___14119 = (0);
while(true){
if((i__8840__auto___14119 < len__8839__auto___14118)){
args__8846__auto__.push((arguments[i__8840__auto___14119]));

var G__14120 = (i__8840__auto___14119 + (1));
i__8840__auto___14119 = G__14120;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq14114){
var G__14115 = cljs.core.first.call(null,seq14114);
var seq14114__$1 = cljs.core.next.call(null,seq14114);
var G__14116 = cljs.core.first.call(null,seq14114__$1);
var seq14114__$2 = cljs.core.next.call(null,seq14114__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__14115,G__14116,seq14114__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__8879__auto___14121 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__8879__auto___14122 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__8879__auto___14123 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__8879__auto___14127 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14128 = arguments.length;
var i__8840__auto___14129 = (0);
while(true){
if((i__8840__auto___14129 < len__8839__auto___14128)){
args__8846__auto__.push((arguments[i__8840__auto___14129]));

var G__14130 = (i__8840__auto___14129 + (1));
i__8840__auto___14129 = G__14130;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq14124){
var G__14125 = cljs.core.first.call(null,seq14124);
var seq14124__$1 = cljs.core.next.call(null,seq14124);
var G__14126 = cljs.core.first.call(null,seq14124__$1);
var seq14124__$2 = cljs.core.next.call(null,seq14124__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__14125,G__14126,seq14124__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__8879__auto___14134 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14135 = arguments.length;
var i__8840__auto___14136 = (0);
while(true){
if((i__8840__auto___14136 < len__8839__auto___14135)){
args__8846__auto__.push((arguments[i__8840__auto___14136]));

var G__14137 = (i__8840__auto___14136 + (1));
i__8840__auto___14136 = G__14137;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq14131){
var G__14132 = cljs.core.first.call(null,seq14131);
var seq14131__$1 = cljs.core.next.call(null,seq14131);
var G__14133 = cljs.core.first.call(null,seq14131__$1);
var seq14131__$2 = cljs.core.next.call(null,seq14131__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__14132,G__14133,seq14131__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__8879__auto___14145 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__14144 = arguments.length;
switch (G__14144) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14147 = arguments.length;
var i__8840__auto___14148 = (0);
while(true){
if((i__8840__auto___14148 < len__8839__auto___14147)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14148]));

var G__14149 = (i__8840__auto___14148 + (1));
i__8840__auto___14148 = G__14149;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq14139){
var G__14140 = cljs.core.first.call(null,seq14139);
var seq14139__$1 = cljs.core.next.call(null,seq14139);
var G__14141 = cljs.core.first.call(null,seq14139__$1);
var seq14139__$2 = cljs.core.next.call(null,seq14139__$1);
var G__14142 = cljs.core.first.call(null,seq14139__$2);
var seq14139__$3 = cljs.core.next.call(null,seq14139__$2);
var G__14143 = cljs.core.first.call(null,seq14139__$3);
var seq14139__$4 = cljs.core.next.call(null,seq14139__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__14140,G__14141,G__14142,G__14143,seq14139__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__8879__auto___14157 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__14156 = arguments.length;
switch (G__14156) {
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
var args_arr__8858__auto__ = [];
var len__8839__auto___14159 = arguments.length;
var i__8840__auto___14160 = (0);
while(true){
if((i__8840__auto___14160 < len__8839__auto___14159)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14160]));

var G__14161 = (i__8840__auto___14160 + (1));
i__8840__auto___14160 = G__14161;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq14151){
var G__14152 = cljs.core.first.call(null,seq14151);
var seq14151__$1 = cljs.core.next.call(null,seq14151);
var G__14153 = cljs.core.first.call(null,seq14151__$1);
var seq14151__$2 = cljs.core.next.call(null,seq14151__$1);
var G__14154 = cljs.core.first.call(null,seq14151__$2);
var seq14151__$3 = cljs.core.next.call(null,seq14151__$2);
var G__14155 = cljs.core.first.call(null,seq14151__$3);
var seq14151__$4 = cljs.core.next.call(null,seq14151__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__14152,G__14153,G__14154,G__14155,seq14151__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__8879__auto___14169 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__14168 = arguments.length;
switch (G__14168) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14171 = arguments.length;
var i__8840__auto___14172 = (0);
while(true){
if((i__8840__auto___14172 < len__8839__auto___14171)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14172]));

var G__14173 = (i__8840__auto___14172 + (1));
i__8840__auto___14172 = G__14173;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq14163){
var G__14164 = cljs.core.first.call(null,seq14163);
var seq14163__$1 = cljs.core.next.call(null,seq14163);
var G__14165 = cljs.core.first.call(null,seq14163__$1);
var seq14163__$2 = cljs.core.next.call(null,seq14163__$1);
var G__14166 = cljs.core.first.call(null,seq14163__$2);
var seq14163__$3 = cljs.core.next.call(null,seq14163__$2);
var G__14167 = cljs.core.first.call(null,seq14163__$3);
var seq14163__$4 = cljs.core.next.call(null,seq14163__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__14164,G__14165,G__14166,G__14167,seq14163__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__8879__auto___14181 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__14180 = arguments.length;
switch (G__14180) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14183 = arguments.length;
var i__8840__auto___14184 = (0);
while(true){
if((i__8840__auto___14184 < len__8839__auto___14183)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14184]));

var G__14185 = (i__8840__auto___14184 + (1));
i__8840__auto___14184 = G__14185;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq14175){
var G__14176 = cljs.core.first.call(null,seq14175);
var seq14175__$1 = cljs.core.next.call(null,seq14175);
var G__14177 = cljs.core.first.call(null,seq14175__$1);
var seq14175__$2 = cljs.core.next.call(null,seq14175__$1);
var G__14178 = cljs.core.first.call(null,seq14175__$2);
var seq14175__$3 = cljs.core.next.call(null,seq14175__$2);
var G__14179 = cljs.core.first.call(null,seq14175__$3);
var seq14175__$4 = cljs.core.next.call(null,seq14175__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__14176,G__14177,G__14178,G__14179,seq14175__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__8879__auto___14193 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__14192 = arguments.length;
switch (G__14192) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14195 = arguments.length;
var i__8840__auto___14196 = (0);
while(true){
if((i__8840__auto___14196 < len__8839__auto___14195)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14196]));

var G__14197 = (i__8840__auto___14196 + (1));
i__8840__auto___14196 = G__14197;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq14187){
var G__14188 = cljs.core.first.call(null,seq14187);
var seq14187__$1 = cljs.core.next.call(null,seq14187);
var G__14189 = cljs.core.first.call(null,seq14187__$1);
var seq14187__$2 = cljs.core.next.call(null,seq14187__$1);
var G__14190 = cljs.core.first.call(null,seq14187__$2);
var seq14187__$3 = cljs.core.next.call(null,seq14187__$2);
var G__14191 = cljs.core.first.call(null,seq14187__$3);
var seq14187__$4 = cljs.core.next.call(null,seq14187__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__14188,G__14189,G__14190,G__14191,seq14187__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__8879__auto___14205 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__14204 = arguments.length;
switch (G__14204) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14207 = arguments.length;
var i__8840__auto___14208 = (0);
while(true){
if((i__8840__auto___14208 < len__8839__auto___14207)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14208]));

var G__14209 = (i__8840__auto___14208 + (1));
i__8840__auto___14208 = G__14209;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq14199){
var G__14200 = cljs.core.first.call(null,seq14199);
var seq14199__$1 = cljs.core.next.call(null,seq14199);
var G__14201 = cljs.core.first.call(null,seq14199__$1);
var seq14199__$2 = cljs.core.next.call(null,seq14199__$1);
var G__14202 = cljs.core.first.call(null,seq14199__$2);
var seq14199__$3 = cljs.core.next.call(null,seq14199__$2);
var G__14203 = cljs.core.first.call(null,seq14199__$3);
var seq14199__$4 = cljs.core.next.call(null,seq14199__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__14200,G__14201,G__14202,G__14203,seq14199__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__8879__auto___14217 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__14216 = arguments.length;
switch (G__14216) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14219 = arguments.length;
var i__8840__auto___14220 = (0);
while(true){
if((i__8840__auto___14220 < len__8839__auto___14219)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14220]));

var G__14221 = (i__8840__auto___14220 + (1));
i__8840__auto___14220 = G__14221;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq14211){
var G__14212 = cljs.core.first.call(null,seq14211);
var seq14211__$1 = cljs.core.next.call(null,seq14211);
var G__14213 = cljs.core.first.call(null,seq14211__$1);
var seq14211__$2 = cljs.core.next.call(null,seq14211__$1);
var G__14214 = cljs.core.first.call(null,seq14211__$2);
var seq14211__$3 = cljs.core.next.call(null,seq14211__$2);
var G__14215 = cljs.core.first.call(null,seq14211__$3);
var seq14211__$4 = cljs.core.next.call(null,seq14211__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__14212,G__14213,G__14214,G__14215,seq14211__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__8879__auto___14229 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__14228 = arguments.length;
switch (G__14228) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14231 = arguments.length;
var i__8840__auto___14232 = (0);
while(true){
if((i__8840__auto___14232 < len__8839__auto___14231)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14232]));

var G__14233 = (i__8840__auto___14232 + (1));
i__8840__auto___14232 = G__14233;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq14223){
var G__14224 = cljs.core.first.call(null,seq14223);
var seq14223__$1 = cljs.core.next.call(null,seq14223);
var G__14225 = cljs.core.first.call(null,seq14223__$1);
var seq14223__$2 = cljs.core.next.call(null,seq14223__$1);
var G__14226 = cljs.core.first.call(null,seq14223__$2);
var seq14223__$3 = cljs.core.next.call(null,seq14223__$2);
var G__14227 = cljs.core.first.call(null,seq14223__$3);
var seq14223__$4 = cljs.core.next.call(null,seq14223__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__14224,G__14225,G__14226,G__14227,seq14223__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__8879__auto___14241 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__14240 = arguments.length;
switch (G__14240) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14243 = arguments.length;
var i__8840__auto___14244 = (0);
while(true){
if((i__8840__auto___14244 < len__8839__auto___14243)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14244]));

var G__14245 = (i__8840__auto___14244 + (1));
i__8840__auto___14244 = G__14245;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq14235){
var G__14236 = cljs.core.first.call(null,seq14235);
var seq14235__$1 = cljs.core.next.call(null,seq14235);
var G__14237 = cljs.core.first.call(null,seq14235__$1);
var seq14235__$2 = cljs.core.next.call(null,seq14235__$1);
var G__14238 = cljs.core.first.call(null,seq14235__$2);
var seq14235__$3 = cljs.core.next.call(null,seq14235__$2);
var G__14239 = cljs.core.first.call(null,seq14235__$3);
var seq14235__$4 = cljs.core.next.call(null,seq14235__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__14236,G__14237,G__14238,G__14239,seq14235__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__8879__auto___14246 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__8879__auto___14247 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__8879__auto___14248 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14249 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14250 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14260 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__14259 = arguments.length;
switch (G__14259) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14262 = arguments.length;
var i__8840__auto___14263 = (0);
while(true){
if((i__8840__auto___14263 < len__8839__auto___14262)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14263]));

var G__14264 = (i__8840__auto___14263 + (1));
i__8840__auto___14263 = G__14264;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14251__auto__","x__14251__auto__",345645066,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__14252__auto__","y__14252__auto__",-257617040,null)),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14251__auto__","x__14251__auto__",345645066,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__14252__auto__","y__14252__auto__",-257617040,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14251__auto__","x__14251__auto__",345645066,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__14252__auto__","y__14252__auto__",-257617040,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq14254){
var G__14255 = cljs.core.first.call(null,seq14254);
var seq14254__$1 = cljs.core.next.call(null,seq14254);
var G__14256 = cljs.core.first.call(null,seq14254__$1);
var seq14254__$2 = cljs.core.next.call(null,seq14254__$1);
var G__14257 = cljs.core.first.call(null,seq14254__$2);
var seq14254__$3 = cljs.core.next.call(null,seq14254__$2);
var G__14258 = cljs.core.first.call(null,seq14254__$3);
var seq14254__$4 = cljs.core.next.call(null,seq14254__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__14255,G__14256,G__14257,G__14258,seq14254__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__8879__auto___14274 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__14273 = arguments.length;
switch (G__14273) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14276 = arguments.length;
var i__8840__auto___14277 = (0);
while(true){
if((i__8840__auto___14277 < len__8839__auto___14276)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14277]));

var G__14278 = (i__8840__auto___14277 + (1));
i__8840__auto___14277 = G__14278;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14265__auto__","x__14265__auto__",-1137444598,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__14266__auto__","y__14266__auto__",817080269,null)),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14265__auto__","x__14265__auto__",-1137444598,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__14266__auto__","y__14266__auto__",817080269,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14265__auto__","x__14265__auto__",-1137444598,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__14266__auto__","y__14266__auto__",817080269,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq14268){
var G__14269 = cljs.core.first.call(null,seq14268);
var seq14268__$1 = cljs.core.next.call(null,seq14268);
var G__14270 = cljs.core.first.call(null,seq14268__$1);
var seq14268__$2 = cljs.core.next.call(null,seq14268__$1);
var G__14271 = cljs.core.first.call(null,seq14268__$2);
var seq14268__$3 = cljs.core.next.call(null,seq14268__$2);
var G__14272 = cljs.core.first.call(null,seq14268__$3);
var seq14268__$4 = cljs.core.next.call(null,seq14268__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__14269,G__14270,G__14271,G__14272,seq14268__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__8879__auto___14279 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__8879__auto___14280 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__8879__auto___14288 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__14287 = arguments.length;
switch (G__14287) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14290 = arguments.length;
var i__8840__auto___14291 = (0);
while(true){
if((i__8840__auto___14291 < len__8839__auto___14290)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14291]));

var G__14292 = (i__8840__auto___14291 + (1));
i__8840__auto___14291 = G__14292;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq14282){
var G__14283 = cljs.core.first.call(null,seq14282);
var seq14282__$1 = cljs.core.next.call(null,seq14282);
var G__14284 = cljs.core.first.call(null,seq14282__$1);
var seq14282__$2 = cljs.core.next.call(null,seq14282__$1);
var G__14285 = cljs.core.first.call(null,seq14282__$2);
var seq14282__$3 = cljs.core.next.call(null,seq14282__$2);
var G__14286 = cljs.core.first.call(null,seq14282__$3);
var seq14282__$4 = cljs.core.next.call(null,seq14282__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__14283,G__14284,G__14285,G__14286,seq14282__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__8879__auto___14300 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__14299 = arguments.length;
switch (G__14299) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14302 = arguments.length;
var i__8840__auto___14303 = (0);
while(true){
if((i__8840__auto___14303 < len__8839__auto___14302)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14303]));

var G__14304 = (i__8840__auto___14303 + (1));
i__8840__auto___14303 = G__14304;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq14294){
var G__14295 = cljs.core.first.call(null,seq14294);
var seq14294__$1 = cljs.core.next.call(null,seq14294);
var G__14296 = cljs.core.first.call(null,seq14294__$1);
var seq14294__$2 = cljs.core.next.call(null,seq14294__$1);
var G__14297 = cljs.core.first.call(null,seq14294__$2);
var seq14294__$3 = cljs.core.next.call(null,seq14294__$2);
var G__14298 = cljs.core.first.call(null,seq14294__$3);
var seq14294__$4 = cljs.core.next.call(null,seq14294__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__14295,G__14296,G__14297,G__14298,seq14294__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__8879__auto___14312 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__14311 = arguments.length;
switch (G__14311) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14314 = arguments.length;
var i__8840__auto___14315 = (0);
while(true){
if((i__8840__auto___14315 < len__8839__auto___14314)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14315]));

var G__14316 = (i__8840__auto___14315 + (1));
i__8840__auto___14315 = G__14316;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq14306){
var G__14307 = cljs.core.first.call(null,seq14306);
var seq14306__$1 = cljs.core.next.call(null,seq14306);
var G__14308 = cljs.core.first.call(null,seq14306__$1);
var seq14306__$2 = cljs.core.next.call(null,seq14306__$1);
var G__14309 = cljs.core.first.call(null,seq14306__$2);
var seq14306__$3 = cljs.core.next.call(null,seq14306__$2);
var G__14310 = cljs.core.first.call(null,seq14306__$3);
var seq14306__$4 = cljs.core.next.call(null,seq14306__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__14307,G__14308,G__14309,G__14310,seq14306__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__8879__auto___14317 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__8879__auto___14325 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__14324 = arguments.length;
switch (G__14324) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14327 = arguments.length;
var i__8840__auto___14328 = (0);
while(true){
if((i__8840__auto___14328 < len__8839__auto___14327)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14328]));

var G__14329 = (i__8840__auto___14328 + (1));
i__8840__auto___14328 = G__14329;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq14319){
var G__14320 = cljs.core.first.call(null,seq14319);
var seq14319__$1 = cljs.core.next.call(null,seq14319);
var G__14321 = cljs.core.first.call(null,seq14319__$1);
var seq14319__$2 = cljs.core.next.call(null,seq14319__$1);
var G__14322 = cljs.core.first.call(null,seq14319__$2);
var seq14319__$3 = cljs.core.next.call(null,seq14319__$2);
var G__14323 = cljs.core.first.call(null,seq14319__$3);
var seq14319__$4 = cljs.core.next.call(null,seq14319__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__14320,G__14321,G__14322,G__14323,seq14319__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__8879__auto___14337 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__14336 = arguments.length;
switch (G__14336) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14339 = arguments.length;
var i__8840__auto___14340 = (0);
while(true){
if((i__8840__auto___14340 < len__8839__auto___14339)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14340]));

var G__14341 = (i__8840__auto___14340 + (1));
i__8840__auto___14340 = G__14341;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq14331){
var G__14332 = cljs.core.first.call(null,seq14331);
var seq14331__$1 = cljs.core.next.call(null,seq14331);
var G__14333 = cljs.core.first.call(null,seq14331__$1);
var seq14331__$2 = cljs.core.next.call(null,seq14331__$1);
var G__14334 = cljs.core.first.call(null,seq14331__$2);
var seq14331__$3 = cljs.core.next.call(null,seq14331__$2);
var G__14335 = cljs.core.first.call(null,seq14331__$3);
var seq14331__$4 = cljs.core.next.call(null,seq14331__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__14332,G__14333,G__14334,G__14335,seq14331__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__8879__auto___14342 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__8879__auto___14343 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__8879__auto___14344 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__8879__auto___14345 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__8879__auto___14346 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__8879__auto___14347 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__8879__auto___14348 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__8879__auto___14349 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__8879__auto___14350 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__8879__auto___14351 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__8530__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__8879__auto___14353 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__14352__auto__","h__14352__auto__",-1848892991,null)),(function (){var x__8530__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__14352__auto__","h__14352__auto__",-1848892991,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__14352__auto__","h__14352__auto__",-1848892991,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__14352__auto__","h__14352__auto__",-1848892991,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__14352__auto__","h__14352__auto__",-1848892991,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__14352__auto__","h__14352__auto__",-1848892991,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14354__auto__","x__14354__auto__",-768627676,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14354__auto__","x__14354__auto__",-768627676,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
var ret__8879__auto___14362 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14363 = arguments.length;
var i__8840__auto___14364 = (0);
while(true){
if((i__8840__auto___14364 < len__8839__auto___14363)){
args__8846__auto__.push((arguments[i__8840__auto___14364]));

var G__14365 = (i__8840__auto___14364 + (1));
i__8840__auto___14364 = G__14365;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((6) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8847__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq14355){
var G__14356 = cljs.core.first.call(null,seq14355);
var seq14355__$1 = cljs.core.next.call(null,seq14355);
var G__14357 = cljs.core.first.call(null,seq14355__$1);
var seq14355__$2 = cljs.core.next.call(null,seq14355__$1);
var G__14358 = cljs.core.first.call(null,seq14355__$2);
var seq14355__$3 = cljs.core.next.call(null,seq14355__$2);
var G__14359 = cljs.core.first.call(null,seq14355__$3);
var seq14355__$4 = cljs.core.next.call(null,seq14355__$3);
var G__14360 = cljs.core.first.call(null,seq14355__$4);
var seq14355__$5 = cljs.core.next.call(null,seq14355__$4);
var G__14361 = cljs.core.first.call(null,seq14355__$5);
var seq14355__$6 = cljs.core.next.call(null,seq14355__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__14356,G__14357,G__14358,G__14359,G__14360,G__14361,seq14355__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = clojure.walk.postwalk.call(null,(function (p1__14366_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__14366_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__14366_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__14366_SHARP_));
} else {
return p1__14366_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
var ret__8879__auto___14371 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__14367,fkv){
var vec__14368 = p__14367;
var f1 = cljs.core.nth.call(null,vec__14368,(0),null);
var k = cljs.core.nth.call(null,vec__14368,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__8879__auto___14375 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14376 = arguments.length;
var i__8840__auto___14377 = (0);
while(true){
if((i__8840__auto___14377 < len__8839__auto___14376)){
args__8846__auto__.push((arguments[i__8840__auto___14377]));

var G__14378 = (i__8840__auto___14377 + (1));
i__8840__auto___14377 = G__14378;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__8530__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__8530__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),locals,(function (){var x__8530__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),locals,(function (){var x__8530__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq14372){
var G__14373 = cljs.core.first.call(null,seq14372);
var seq14372__$1 = cljs.core.next.call(null,seq14372);
var G__14374 = cljs.core.first.call(null,seq14372__$1);
var seq14372__$2 = cljs.core.next.call(null,seq14372__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__14373,G__14374,seq14372__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__8879__auto___14383 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14384 = arguments.length;
var i__8840__auto___14385 = (0);
while(true){
if((i__8840__auto___14385 < len__8839__auto___14384)){
args__8846__auto__.push((arguments[i__8840__auto___14385]));

var G__14386 = (i__8840__auto___14385 + (1));
i__8840__auto___14385 = G__14386;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq14379){
var G__14380 = cljs.core.first.call(null,seq14379);
var seq14379__$1 = cljs.core.next.call(null,seq14379);
var G__14381 = cljs.core.first.call(null,seq14379__$1);
var seq14379__$2 = cljs.core.next.call(null,seq14379__$1);
var G__14382 = cljs.core.first.call(null,seq14379__$2);
var seq14379__$3 = cljs.core.next.call(null,seq14379__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14380,G__14381,G__14382,seq14379__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__8879__auto___14391 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14392 = arguments.length;
var i__8840__auto___14393 = (0);
while(true){
if((i__8840__auto___14393 < len__8839__auto___14392)){
args__8846__auto__.push((arguments[i__8840__auto___14393]));

var G__14394 = (i__8840__auto___14393 + (1));
i__8840__auto___14393 = G__14394;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq14387){
var G__14388 = cljs.core.first.call(null,seq14387);
var seq14387__$1 = cljs.core.next.call(null,seq14387);
var G__14389 = cljs.core.first.call(null,seq14387__$1);
var seq14387__$2 = cljs.core.next.call(null,seq14387__$1);
var G__14390 = cljs.core.first.call(null,seq14387__$2);
var seq14387__$3 = cljs.core.next.call(null,seq14387__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__14388,G__14389,G__14390,seq14387__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__8879__auto___14395 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__8879__auto___14400 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14401 = arguments.length;
var i__8840__auto___14402 = (0);
while(true){
if((i__8840__auto___14402 < len__8839__auto___14401)){
args__8846__auto__.push((arguments[i__8840__auto___14402]));

var G__14403 = (i__8840__auto___14402 + (1));
i__8840__auto___14402 = G__14403;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq14396){
var G__14397 = cljs.core.first.call(null,seq14396);
var seq14396__$1 = cljs.core.next.call(null,seq14396);
var G__14398 = cljs.core.first.call(null,seq14396__$1);
var seq14396__$2 = cljs.core.next.call(null,seq14396__$1);
var G__14399 = cljs.core.first.call(null,seq14396__$2);
var seq14396__$3 = cljs.core.next.call(null,seq14396__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__14397,G__14398,G__14399,seq14396__$3);
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

if(cljs.core.truth_((function (){var and__7656__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__7656__auto__)){
var and__7656__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__7656__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
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
var G__14404 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__14405 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__14404;
s = G__14405;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__14406){
var vec__14407 = p__14406;
var p = cljs.core.nth.call(null,vec__14407,(0),null);
var sigs = cljs.core.nth.call(null,vec__14407,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8530__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__14407,p,sigs){
return (function (p__14410){
var vec__14411 = p__14410;
var seq__14412 = cljs.core.seq.call(null,vec__14411);
var first__14413 = cljs.core.first.call(null,seq__14412);
var seq__14412__$1 = cljs.core.next.call(null,seq__14412);
var f = first__14413;
var meths = seq__14412__$1;
var form = vec__14411;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(psym,pfn_prefix,vec__14407,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__8625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8626__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8627__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8628__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8629__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__,hierarchy__8629__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__,hierarchy__8629__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8629__auto__,method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8530__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8530__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__8530__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__14414){
var vec__14415 = p__14414;
var seq__14416 = cljs.core.seq.call(null,vec__14415);
var first__14417 = cljs.core.first.call(null,seq__14416);
var seq__14416__$1 = cljs.core.next.call(null,seq__14416);
var vec__14418 = first__14417;
var seq__14419 = cljs.core.seq.call(null,vec__14418);
var first__14420 = cljs.core.first.call(null,seq__14419);
var seq__14419__$1 = cljs.core.next.call(null,seq__14419);
var this$ = first__14420;
var args = seq__14419__$1;
var sig = vec__14418;
var body = seq__14416__$1;
var x__8530__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__14421){
var vec__14422 = p__14421;
var seq__14423 = cljs.core.seq.call(null,vec__14422);
var first__14424 = cljs.core.first.call(null,seq__14423);
var seq__14423__$1 = cljs.core.next.call(null,seq__14423);
var vec__14425 = first__14424;
var seq__14426 = cljs.core.seq.call(null,vec__14425);
var first__14427 = cljs.core.first.call(null,seq__14426);
var seq__14426__$1 = cljs.core.next.call(null,seq__14426);
var this$ = first__14427;
var args = seq__14426__$1;
var sig = vec__14425;
var body = seq__14423__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8530__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__14428){
var vec__14429 = p__14428;
var seq__14430 = cljs.core.seq.call(null,vec__14429);
var first__14431 = cljs.core.first.call(null,seq__14430);
var seq__14430__$1 = cljs.core.next.call(null,seq__14430);
var vec__14432 = first__14431;
var seq__14433 = cljs.core.seq.call(null,vec__14432);
var first__14434 = cljs.core.first.call(null,seq__14433);
var seq__14433__$1 = cljs.core.next.call(null,seq__14433);
var this$ = first__14434;
var args = seq__14433__$1;
var sig = vec__14432;
var body = seq__14430__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8530__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__14435){
var vec__14436 = p__14435;
var seq__14437 = cljs.core.seq.call(null,vec__14436);
var first__14438 = cljs.core.first.call(null,seq__14437);
var seq__14437__$1 = cljs.core.next.call(null,seq__14437);
var vec__14439 = first__14438;
var seq__14440 = cljs.core.seq.call(null,vec__14439);
var first__14441 = cljs.core.first.call(null,seq__14440);
var seq__14440__$1 = cljs.core.next.call(null,seq__14440);
var this$ = first__14441;
var args = seq__14440__$1;
var sig = vec__14439;
var body = seq__14437__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8530__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__14443){
var vec__14444 = p__14443;
var seq__14445 = cljs.core.seq.call(null,vec__14444);
var first__14446 = cljs.core.first.call(null,seq__14445);
var seq__14445__$1 = cljs.core.next.call(null,seq__14445);
var f = first__14446;
var meths = seq__14445__$1;
var form = vec__14444;
var vec__14447 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__14447,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__14447,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__14447,f__$1,meths__$1,vec__14444,seq__14445,first__14446,seq__14445__$1,f,meths,form){
return (function (p1__14442_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__14442_SHARP_);
});})(vec__14447,f__$1,meths__$1,vec__14444,seq__14445,first__14446,seq__14445__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__14451){
var vec__14452 = p__14451;
var seq__14453 = cljs.core.seq.call(null,vec__14452);
var first__14454 = cljs.core.first.call(null,seq__14453);
var seq__14453__$1 = cljs.core.next.call(null,seq__14453);
var f = first__14454;
var meths = seq__14453__$1;
var form = vec__14452;
return cljs.core.map.call(null,((function (vec__14452,seq__14453,first__14454,seq__14453__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(vec__14452,seq__14453,first__14454,seq__14453__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__14452,seq__14453,first__14454,seq__14453__$1,f,meths,form){
return (function (p1__14450_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__14450_SHARP_);
});})(vec__14452,seq__14453,first__14454,seq__14453__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__14456){
var vec__14457 = p__14456;
var seq__14458 = cljs.core.seq.call(null,vec__14457);
var first__14459 = cljs.core.first.call(null,seq__14458);
var seq__14458__$1 = cljs.core.next.call(null,seq__14458);
var f = first__14459;
var meths = seq__14458__$1;
var form = vec__14457;
var meths__$1 = cljs.core.map.call(null,((function (vec__14457,seq__14458,first__14459,seq__14458__$1,f,meths,form){
return (function (p1__14455_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__14455_SHARP_);
});})(vec__14457,seq__14458,first__14459,seq__14458__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8530__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__8530__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__8530__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__8530__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__14460){
var vec__14461 = p__14460;
var seq__14462 = cljs.core.seq.call(null,vec__14461);
var first__14463 = cljs.core.first.call(null,seq__14462);
var seq__14462__$1 = cljs.core.next.call(null,seq__14462);
var f = first__14463;
var meths = seq__14462__$1;
var form = vec__14461;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__14461,seq__14462,first__14463,seq__14462__$1,f,meths,form){
return (function (p__14464){
var vec__14465 = p__14464;
var seq__14466 = cljs.core.seq.call(null,vec__14465);
var first__14467 = cljs.core.first.call(null,seq__14466);
var seq__14466__$1 = cljs.core.next.call(null,seq__14466);
var sig = first__14467;
var body = seq__14466__$1;
var meth = vec__14465;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(pf,vec__14461,seq__14462,first__14463,seq__14462__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__14468){
var vec__14469 = p__14468;
var p = cljs.core.nth.call(null,vec__14469,(0),null);
var sigs = cljs.core.nth.call(null,vec__14469,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__14469,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__14469,p,sigs))
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
var vec__14472 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__14472,(0),null);
var sigs = cljs.core.nth.call(null,vec__14472,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_14475 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_14475))){
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

var G__14476 = cljs.core.next.call(null,sigs__$1);
var G__14477 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__14476;
seen = G__14477;
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

var seen_14481 = cljs.core.PersistentHashSet.EMPTY;
var methods_14482__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_14482__$1)){
var vec__14478_14483 = cljs.core.first.call(null,methods_14482__$1);
var fname_14484 = cljs.core.nth.call(null,vec__14478_14483,(0),null);
var method_14485 = vec__14478_14483;
if(cljs.core.contains_QMARK_.call(null,seen_14481,fname_14484)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_14484], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_14485);

var G__14486 = cljs.core.conj.call(null,seen_14481,fname_14484);
var G__14487 = cljs.core.next.call(null,methods_14482__$1);
seen_14481 = G__14486;
methods_14482__$1 = G__14487;
continue;
} else {
}
break;
}

var G__14488 = cljs.core.conj.call(null,protos,proto);
var G__14489 = impls__$2;
protos = G__14488;
impls__$1 = G__14489;
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
var ret__8879__auto___14498 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14499 = arguments.length;
var i__8840__auto___14500 = (0);
while(true){
if((i__8840__auto___14500 < len__8839__auto___14499)){
args__8846__auto__.push((arguments[i__8840__auto___14500]));

var G__14501 = (i__8840__auto___14500 + (1));
i__8840__auto___14500 = G__14501;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__14495 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__14495,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__14495,(1),null);
if(cljs.core.truth_((function (){var and__7656__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__7656__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__14495,type,assign_impls){
return (function (p1__14490_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__14490_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__14495,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq14491){
var G__14492 = cljs.core.first.call(null,seq14491);
var seq14491__$1 = cljs.core.next.call(null,seq14491);
var G__14493 = cljs.core.first.call(null,seq14491__$1);
var seq14491__$2 = cljs.core.next.call(null,seq14491__$1);
var G__14494 = cljs.core.first.call(null,seq14491__$2);
var seq14491__$3 = cljs.core.next.call(null,seq14491__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__14492,G__14493,G__14494,seq14491__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__14503){
var vec__14504 = p__14503;
var f = cljs.core.nth.call(null,vec__14504,(0),null);
var sigs = cljs.core.nth.call(null,vec__14504,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__14504,f,sigs){
return (function (p1__14502_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__14502_SHARP_),cljs.core.nnext.call(null,p1__14502_SHARP_));
});})(vec__14504,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__14508 = arguments.length;
switch (G__14508) {
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
var G__14510 = ret__$1;
var G__14511 = specs__$2;
ret = G__14510;
specs__$1 = G__14511;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__14512_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__14512_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8530__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__8879__auto___14524 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14525 = arguments.length;
var i__8840__auto___14526 = (0);
while(true){
if((i__8840__auto___14526 < len__8839__auto___14525)){
args__8846__auto__.push((arguments[i__8840__auto___14526]));

var G__14527 = (i__8840__auto___14526 + (1));
i__8840__auto___14526 = G__14527;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((4) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8847__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__14521 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__14521,(0),null);
var pmasks = cljs.core.nth.call(null,vec__14521,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__8530__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8530__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__8530__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__8530__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__8530__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__8530__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14513__auto__","this__14513__auto__",-247266703,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__14514__auto__","writer__14514__auto__",-1535071605,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__14515__auto__","opt__14515__auto__",-1952975225,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__14514__auto__","writer__14514__auto__",-1535071605,null)),(function (){var x__8530__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq14516){
var G__14517 = cljs.core.first.call(null,seq14516);
var seq14516__$1 = cljs.core.next.call(null,seq14516);
var G__14518 = cljs.core.first.call(null,seq14516__$1);
var seq14516__$2 = cljs.core.next.call(null,seq14516__$1);
var G__14519 = cljs.core.first.call(null,seq14516__$2);
var seq14516__$3 = cljs.core.next.call(null,seq14516__$2);
var G__14520 = cljs.core.first.call(null,seq14516__$3);
var seq14516__$4 = cljs.core.next.call(null,seq14516__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__14517,G__14518,G__14519,G__14520,seq14516__$4);
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
return (function (p1__14528_SHARP_){
return cljs.core.with_meta.call(null,p1__14528_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14529__auto__","this__14529__auto__",787064032,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14530__auto__","this__14530__auto__",714562846,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14530__auto__","this__14530__auto__",714562846,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__14531__auto__","coll__14531__auto__",1683939909,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8530__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__14531__auto__","coll__14531__auto__",1683939909,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__8530__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__8530__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__8530__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8530__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8530__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__8530__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__8530__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14532__auto__","this__14532__auto__",174546120,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14533__auto__","this__14533__auto__",-766024801,null)),(function (){var x__8530__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14534__auto__","this__14534__auto__",1245974978,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14535__auto__","k__14535__auto__",797390355,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14534__auto__","this__14534__auto__",1245974978,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14535__auto__","k__14535__auto__",797390355,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14536__auto__","this__14536__auto__",-1454061836,null)),(function (){var x__8530__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__14537__auto__","else__14537__auto__",-1186617064,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__8530__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__8530__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__14537__auto__","else__14537__auto__",-1186617064,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14538__auto__","this__14538__auto__",-913457415,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8530__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14539__auto__","this__14539__auto__",2129717038,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__14540__auto__","entry__14540__auto__",695040527,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__14540__auto__","entry__14540__auto__",695040527,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14539__auto__","this__14539__auto__",2129717038,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__14540__auto__","entry__14540__auto__",695040527,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__14540__auto__","entry__14540__auto__",695040527,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14539__auto__","this__14539__auto__",2129717038,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__14540__auto__","entry__14540__auto__",695040527,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14541__auto__","this__14541__auto__",1777419543,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14542__auto__","k__14542__auto__",-102106717,null)),(function (){var x__8530__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14542__auto__","k__14542__auto__",-102106717,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14542__auto__","k__14542__auto__",-102106717,null)),(function (){var x__8530__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14543__auto__","this__14543__auto__",956514174,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14544__auto__","k__14544__auto__",-191702543,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14544__auto__","k__14544__auto__",-191702543,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14543__auto__","this__14543__auto__",956514174,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14544__auto__","k__14544__auto__",-191702543,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__14544__auto__","k__14544__auto__",-191702543,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14546__auto__","this__14546__auto__",1522818357,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__14545_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core.keyword.call(null,p1__14545_SHARP_);
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = p1__14545_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__8530__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14548__auto__","this__14548__auto__",-502951032,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__14549__auto__","writer__14549__auto__",-320411578,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__14550__auto__","opts__14550__auto__",-267855795,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__14551__auto__","pr-pair__14551__auto__",-22024868,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__14552__auto__","keyval__14552__auto__",-1441201006,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__14549__auto__","writer__14549__auto__",-320411578,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__14550__auto__","opts__14550__auto__",-267855795,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__14552__auto__","keyval__14552__auto__",-1441201006,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__14549__auto__","writer__14549__auto__",-320411578,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__14551__auto__","pr-pair__14551__auto__",-22024868,null)),(function (){var x__8530__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__14550__auto__","opts__14550__auto__",-267855795,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__14547_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core.keyword.call(null,p1__14547_SHARP_);
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = p1__14547_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))], null));
var vec__14553 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__14553,(0),null);
var pmasks = cljs.core.nth.call(null,vec__14553,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__8530__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8530__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8530__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__8530__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
var ret__8879__auto___14563 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14564 = arguments.length;
var i__8840__auto___14565 = (0);
while(true){
if((i__8840__auto___14565 < len__8839__auto___14564)){
args__8846__auto__.push((arguments[i__8840__auto___14565]));

var G__14566 = (i__8840__auto___14565 + (1));
i__8840__auto___14565 = G__14566;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((4) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8847__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__8530__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__8530__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__8530__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14556__auto__","this__14556__auto__",-1673340730,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__8530__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__8530__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14556__auto__","this__14556__auto__",-1673340730,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__14557__auto__","writer__14557__auto__",127997399,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__14557__auto__","writer__14557__auto__",127997399,null)),(function (){var x__8530__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq14558){
var G__14559 = cljs.core.first.call(null,seq14558);
var seq14558__$1 = cljs.core.next.call(null,seq14558);
var G__14560 = cljs.core.first.call(null,seq14558__$1);
var seq14558__$2 = cljs.core.next.call(null,seq14558__$1);
var G__14561 = cljs.core.first.call(null,seq14558__$2);
var seq14558__$3 = cljs.core.next.call(null,seq14558__$2);
var G__14562 = cljs.core.first.call(null,seq14558__$3);
var seq14558__$4 = cljs.core.next.call(null,seq14558__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__14559,G__14560,G__14561,G__14562,seq14558__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__8879__auto___14594 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14595 = arguments.length;
var i__8840__auto___14596 = (0);
while(true){
if((i__8840__auto___14596 < len__8839__auto___14595)){
args__8846__auto__.push((arguments[i__8840__auto___14596]));

var G__14597 = (i__8840__auto___14596 + (1));
i__8840__auto___14596 = G__14597;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__14573 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__14573,(0),null);
var methods$ = cljs.core.nth.call(null,vec__14573,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__14573,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__14573,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__14576 = cljs.core.seq.call(null,methods$);
var chunk__14577 = null;
var count__14578 = (0);
var i__14579 = (0);
while(true){
if((i__14579 < count__14578)){
var vec__14580 = cljs.core._nth.call(null,chunk__14577,i__14579);
var seq__14581 = cljs.core.seq.call(null,vec__14580);
var first__14582 = cljs.core.first.call(null,seq__14581);
var seq__14581__$1 = cljs.core.next.call(null,seq__14581);
var mname = first__14582;
var arities = seq__14581__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__14598 = seq__14576;
var G__14599 = chunk__14577;
var G__14600 = count__14578;
var G__14601 = (i__14579 + (1));
seq__14576 = G__14598;
chunk__14577 = G__14599;
count__14578 = G__14600;
i__14579 = G__14601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14576);
if(temp__4657__auto__){
var seq__14576__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14576__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__14576__$1);
var G__14602 = cljs.core.chunk_rest.call(null,seq__14576__$1);
var G__14603 = c__8507__auto__;
var G__14604 = cljs.core.count.call(null,c__8507__auto__);
var G__14605 = (0);
seq__14576 = G__14602;
chunk__14577 = G__14603;
count__14578 = G__14604;
i__14579 = G__14605;
continue;
} else {
var vec__14583 = cljs.core.first.call(null,seq__14576__$1);
var seq__14584 = cljs.core.seq.call(null,vec__14583);
var first__14585 = cljs.core.first.call(null,seq__14584);
var seq__14584__$1 = cljs.core.next.call(null,seq__14584);
var mname = first__14585;
var arities = seq__14584__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__14606 = cljs.core.next.call(null,seq__14576__$1);
var G__14607 = null;
var G__14608 = (0);
var G__14609 = (0);
seq__14576 = G__14606;
chunk__14577 = G__14607;
count__14578 = G__14608;
i__14579 = G__14609;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14567__auto__","x__14567__auto__",-775156573,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__14568__auto__","m__14568__auto__",-1522005230,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8530__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14567__auto__","x__14567__auto__",-775156573,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__14568__auto__","m__14568__auto__",-1522005230,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__14568__auto__","m__14568__auto__",-1522005230,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__14568__auto__","m__14568__auto__",-1522005230,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8530__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__14568__auto__","m__14568__auto__",-1522005230,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__14568__auto__","m__14568__auto__",-1522005230,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__8530__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__14586){
var vec__14587 = p__14586;
var seq__14588 = cljs.core.seq.call(null,vec__14587);
var first__14589 = cljs.core.first.call(null,seq__14588);
var seq__14588__$1 = cljs.core.next.call(null,seq__14588);
var fname = first__14589;
var sigs = seq__14588__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__14590){
var vec__14591 = p__14590;
var seq__14592 = cljs.core.seq.call(null,vec__14591);
var first__14593 = cljs.core.first.call(null,seq__14592);
var seq__14592__$1 = cljs.core.next.call(null,seq__14592);
var fname = first__14593;
var sigs = seq__14592__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8530__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__14591,seq__14592,first__14593,seq__14592__$1,fname,sigs,p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__14591,seq__14592,first__14593,seq__14592__$1,fname,sigs,p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__14573,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8530__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq14569){
var G__14570 = cljs.core.first.call(null,seq14569);
var seq14569__$1 = cljs.core.next.call(null,seq14569);
var G__14571 = cljs.core.first.call(null,seq14569__$1);
var seq14569__$2 = cljs.core.next.call(null,seq14569__$1);
var G__14572 = cljs.core.first.call(null,seq14569__$2);
var seq14569__$3 = cljs.core.next.call(null,seq14569__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__14570,G__14571,G__14572,seq14569__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__8879__auto___14613 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__14610 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__14610,(0),null);
var bit = cljs.core.nth.call(null,vec__14610,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8530__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8530__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14617 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__14614 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__14614,(0),null);
var bit = cljs.core.nth.call(null,vec__14614,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8530__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8530__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8530__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8530__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8530__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8530__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__8879__auto___14621 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14622 = arguments.length;
var i__8840__auto___14623 = (0);
while(true){
if((i__8840__auto___14623 < len__8839__auto___14622)){
args__8846__auto__.push((arguments[i__8840__auto___14623]));

var G__14624 = (i__8840__auto___14623 + (1));
i__8840__auto___14623 = G__14624;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq14618){
var G__14619 = cljs.core.first.call(null,seq14618);
var seq14618__$1 = cljs.core.next.call(null,seq14618);
var G__14620 = cljs.core.first.call(null,seq14618__$1);
var seq14618__$2 = cljs.core.next.call(null,seq14618__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__14619,G__14620,seq14618__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__8879__auto___14628 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14629 = arguments.length;
var i__8840__auto___14630 = (0);
while(true){
if((i__8840__auto___14630 < len__8839__auto___14629)){
args__8846__auto__.push((arguments[i__8840__auto___14630]));

var G__14631 = (i__8840__auto___14630 + (1));
i__8840__auto___14630 = G__14631;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq14625){
var G__14626 = cljs.core.first.call(null,seq14625);
var seq14625__$1 = cljs.core.next.call(null,seq14625);
var G__14627 = cljs.core.first.call(null,seq14625__$1);
var seq14625__$2 = cljs.core.next.call(null,seq14625__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__14626,G__14627,seq14625__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__8879__auto___14640 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14641 = arguments.length;
var i__8840__auto___14642 = (0);
while(true){
if((i__8840__auto___14642 < len__8839__auto___14641)){
args__8846__auto__.push((arguments[i__8840__auto___14642]));

var G__14643 = (i__8840__auto___14642 + (1));
i__8840__auto___14642 = G__14643;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__14636){
var vec__14637 = p__14636;
var k = cljs.core.nth.call(null,vec__14637,(0),null);
var v = cljs.core.nth.call(null,vec__14637,(1),null);
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq14632){
var G__14633 = cljs.core.first.call(null,seq14632);
var seq14632__$1 = cljs.core.next.call(null,seq14632);
var G__14634 = cljs.core.first.call(null,seq14632__$1);
var seq14632__$2 = cljs.core.next.call(null,seq14632__$1);
var G__14635 = cljs.core.first.call(null,seq14632__$2);
var seq14632__$3 = cljs.core.next.call(null,seq14632__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__14633,G__14634,G__14635,seq14632__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__8879__auto___14648 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14649 = arguments.length;
var i__8840__auto___14650 = (0);
while(true){
if((i__8840__auto___14650 < len__8839__auto___14649)){
args__8846__auto__.push((arguments[i__8840__auto___14650]));

var G__14651 = (i__8840__auto___14650 + (1));
i__8840__auto___14650 = G__14651;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__8530__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq14644){
var G__14645 = cljs.core.first.call(null,seq14644);
var seq14644__$1 = cljs.core.next.call(null,seq14644);
var G__14646 = cljs.core.first.call(null,seq14644__$1);
var seq14644__$2 = cljs.core.next.call(null,seq14644__$1);
var G__14647 = cljs.core.first.call(null,seq14644__$2);
var seq14644__$3 = cljs.core.next.call(null,seq14644__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__14645,G__14646,G__14647,seq14644__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__8879__auto___14664 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14665 = arguments.length;
var i__8840__auto___14666 = (0);
while(true){
if((i__8840__auto___14666 < len__8839__auto___14665)){
args__8846__auto__.push((arguments[i__8840__auto___14666]));

var G__14667 = (i__8840__auto___14666 + (1));
i__8840__auto___14666 = G__14667;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((4) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8847__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__14658 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__14661 = cljs.core.nth.call(null,vec__14658,(0),null);
var a = cljs.core.nth.call(null,vec__14661,(0),null);
var b = cljs.core.nth.call(null,vec__14661,(1),null);
var c = cljs.core.nth.call(null,vec__14661,(2),null);
var clause = vec__14661;
var more = cljs.core.nth.call(null,vec__14658,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__8530__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__14652__auto__","p__14652__auto__",-1532587377,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__14652__auto__","p__14652__auto__",-1532587377,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq14653){
var G__14654 = cljs.core.first.call(null,seq14653);
var seq14653__$1 = cljs.core.next.call(null,seq14653);
var G__14655 = cljs.core.first.call(null,seq14653__$1);
var seq14653__$2 = cljs.core.next.call(null,seq14653__$1);
var G__14656 = cljs.core.first.call(null,seq14653__$2);
var seq14653__$3 = cljs.core.next.call(null,seq14653__$2);
var G__14657 = cljs.core.first.call(null,seq14653__$3);
var seq14653__$4 = cljs.core.next.call(null,seq14653__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__14654,G__14655,G__14656,G__14657,seq14653__$4);
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
var m = (function (){var and__7656__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__7656__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__7656__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__8879__auto___14688 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14689 = arguments.length;
var i__8840__auto___14690 = (0);
while(true){
if((i__8840__auto___14690 < len__8839__auto___14689)){
args__8846__auto__.push((arguments[i__8840__auto___14690]));

var G__14691 = (i__8840__auto___14690 + (1));
i__8840__auto___14690 = G__14691;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__14676){
var vec__14677 = p__14676;
var test = cljs.core.nth.call(null,vec__14677,(0),null);
var expr = cljs.core.nth.call(null,vec__14677,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__14677,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__8530__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__14677,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__8530__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__14668_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__14668_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__14669_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__14669_SHARP_)){
return cljs.core.vec.call(null,p1__14669_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14669_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__14670_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14670_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__14671_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__14671_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__14671_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__14671_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__14684){
var vec__14685 = p__14684;
var m = cljs.core.nth.call(null,vec__14685,(0),null);
var c = cljs.core.nth.call(null,vec__14685,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__8530__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__8530__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq14672){
var G__14673 = cljs.core.first.call(null,seq14672);
var seq14672__$1 = cljs.core.next.call(null,seq14672);
var G__14674 = cljs.core.first.call(null,seq14672__$1);
var seq14672__$2 = cljs.core.next.call(null,seq14672__$1);
var G__14675 = cljs.core.first.call(null,seq14672__$2);
var seq14672__$3 = cljs.core.next.call(null,seq14672__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__14673,G__14674,G__14675,seq14672__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__8879__auto___14692 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__8879__auto___14695 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__14694 = arguments.length;
switch (G__14694) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8530__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__8530__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__8530__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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

var ret__8879__auto___14733 = /**
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
return cljs.core.reduce.call(null,(function (groups,p__14702){
var vec__14703 = p__14702;
var k = cljs.core.nth.call(null,vec__14703,(0),null);
var v = cljs.core.nth.call(null,vec__14703,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__14734__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__14734 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__14735__i = 0, G__14735__a = new Array(arguments.length -  0);
while (G__14735__i < G__14735__a.length) {G__14735__a[G__14735__i] = arguments[G__14735__i + 0]; ++G__14735__i;}
  msg = new cljs.core.IndexedSeq(G__14735__a,0,null);
} 
return G__14734__delegate.call(this,msg);};
G__14734.cljs$lang$maxFixedArity = 0;
G__14734.cljs$lang$applyTo = (function (arglist__14736){
var msg = cljs.core.seq(arglist__14736);
return G__14734__delegate(msg);
});
G__14734.cljs$core$IFn$_invoke$arity$variadic = G__14734__delegate;
return G__14734;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__14706){
var vec__14707 = p__14706;
var seq__14708 = cljs.core.seq.call(null,vec__14707);
var first__14709 = cljs.core.first.call(null,seq__14708);
var seq__14708__$1 = cljs.core.next.call(null,seq__14708);
var vec__14710 = first__14709;
var seq__14711 = cljs.core.seq.call(null,vec__14710);
var first__14712 = cljs.core.first.call(null,seq__14711);
var seq__14711__$1 = cljs.core.next.call(null,seq__14711);
var bind = first__14712;
var first__14712__$1 = cljs.core.first.call(null,seq__14711__$1);
var seq__14711__$2 = cljs.core.next.call(null,seq__14711__$1);
var expr = first__14712__$1;
var mod_pairs = seq__14711__$2;
var vec__14713 = seq__14708__$1;
var vec__14716 = cljs.core.nth.call(null,vec__14713,(0),null);
var _ = cljs.core.nth.call(null,vec__14716,(0),null);
var next_expr = cljs.core.nth.call(null,vec__14716,(1),null);
var next_groups = vec__14713;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__14707,seq__14708,first__14709,seq__14708__$1,vec__14710,seq__14711,first__14712,seq__14711__$1,bind,first__14712__$1,seq__14711__$2,expr,mod_pairs,vec__14713,vec__14716,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__14719){
var vec__14720 = p__14719;
var seq__14721 = cljs.core.seq.call(null,vec__14720);
var first__14722 = cljs.core.first.call(null,seq__14721);
var seq__14721__$1 = cljs.core.next.call(null,seq__14721);
var vec__14723 = first__14722;
var k = cljs.core.nth.call(null,vec__14723,(0),null);
var v = cljs.core.nth.call(null,vec__14723,(1),null);
var pair = vec__14723;
var etc = seq__14721__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__14697__auto__","iterys__14697__auto__",-126031047,null)),(function (){var x__8530__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__14698__auto__","fs__14698__auto__",351048377,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__14697__auto__","iterys__14697__auto__",-126031047,null)),(function (){var x__8530__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__14698__auto__","fs__14698__auto__",351048377,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__14698__auto__","fs__14698__auto__",351048377,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__8530__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__14707,seq__14708,first__14709,seq__14708__$1,vec__14710,seq__14711,first__14712,seq__14711__$1,bind,first__14712__$1,seq__14711__$2,expr,mod_pairs,vec__14713,vec__14716,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__14707,seq__14708,first__14709,seq__14708__$1,vec__14710,seq__14711,first__14712,seq__14711__$1,bind,first__14712__$1,seq__14711__$2,expr,mod_pairs,vec__14713,vec__14716,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__14726){
var vec__14727 = p__14726;
var seq__14728 = cljs.core.seq.call(null,vec__14727);
var first__14729 = cljs.core.first.call(null,seq__14728);
var seq__14728__$1 = cljs.core.next.call(null,seq__14728);
var vec__14730 = first__14729;
var k = cljs.core.nth.call(null,vec__14730,(0),null);
var v = cljs.core.nth.call(null,vec__14730,(1),null);
var pair = vec__14730;
var etc = seq__14728__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8530__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__8530__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8530__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__14707,seq__14708,first__14709,seq__14708__$1,vec__14710,seq__14711,first__14712,seq__14711__$1,bind,first__14712__$1,seq__14711__$2,expr,mod_pairs,vec__14713,vec__14716,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__14699__auto__","c__14699__auto__",323393658,null)),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__14700__auto__","size__14700__auto__",1178856352,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__14699__auto__","c__14699__auto__",323393658,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__14700__auto__","size__14700__auto__",1178856352,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__14700__auto__","size__14700__auto__",1178856352,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__14699__auto__","c__14699__auto__",323393658,null)),(function (){var x__8530__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__8530__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__8530__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8530__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__14701__auto__","iter__14701__auto__",562092678,null)),(function (){var x__8530__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__14701__auto__","iter__14701__auto__",562092678,null)),(function (){var x__8530__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__8879__auto___14742 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14743 = arguments.length;
var i__8840__auto___14744 = (0);
while(true){
if((i__8840__auto___14744 < len__8839__auto___14743)){
args__8846__auto__.push((arguments[i__8840__auto___14744]));

var G__14745 = (i__8840__auto___14744 + (1));
i__8840__auto___14744 = G__14745;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
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
var G__14746__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__14746 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__14747__i = 0, G__14747__a = new Array(arguments.length -  0);
while (G__14747__i < G__14747__a.length) {G__14747__a[G__14747__i] = arguments[G__14747__i + 0]; ++G__14747__i;}
  msg = new cljs.core.IndexedSeq(G__14747__a,0,null);
} 
return G__14746__delegate.call(this,msg);};
G__14746.cljs$lang$maxFixedArity = 0;
G__14746.cljs$lang$applyTo = (function (arglist__14748){
var msg = cljs.core.seq(arglist__14748);
return G__14746__delegate(msg);
});
G__14746.cljs$core$IFn$_invoke$arity$variadic = G__14746__delegate;
return G__14746;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8530__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__8530__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__8530__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__14737__auto__","c__14737__auto__",-1029781243,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__14737__auto__","c__14737__auto__",-1029781243,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__14737__auto__","c__14737__auto__",-1029781243,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8530__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq14738){
var G__14739 = cljs.core.first.call(null,seq14738);
var seq14738__$1 = cljs.core.next.call(null,seq14738);
var G__14740 = cljs.core.first.call(null,seq14738__$1);
var seq14738__$2 = cljs.core.next.call(null,seq14738__$1);
var G__14741 = cljs.core.first.call(null,seq14738__$2);
var seq14738__$3 = cljs.core.next.call(null,seq14738__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__14739,G__14740,G__14741,seq14738__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__8879__auto___14752 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14753 = arguments.length;
var i__8840__auto___14754 = (0);
while(true){
if((i__8840__auto___14754 < len__8839__auto___14753)){
args__8846__auto__.push((arguments[i__8840__auto___14754]));

var G__14755 = (i__8840__auto___14754 + (1));
i__8840__auto___14754 = G__14755;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq14749){
var G__14750 = cljs.core.first.call(null,seq14749);
var seq14749__$1 = cljs.core.next.call(null,seq14749);
var G__14751 = cljs.core.first.call(null,seq14749__$1);
var seq14749__$2 = cljs.core.next.call(null,seq14749__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__14750,G__14751,seq14749__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__8879__auto___14766 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__14765 = arguments.length;
switch (G__14765) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14768 = arguments.length;
var i__8840__auto___14769 = (0);
while(true){
if((i__8840__auto___14769 < len__8839__auto___14768)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14769]));

var G__14770 = (i__8840__auto___14769 + (1));
i__8840__auto___14769 = G__14770;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8859__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__8530__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__8530__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__14756__auto__","dims__14756__auto__",299243980,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__14757__auto__","dimarray__14757__auto__",-1715024007,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__8530__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__14758__auto__","i__14758__auto__",752549378,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__14757__auto__","dimarray__14757__auto__",-1715024007,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__14757__auto__","dimarray__14757__auto__",-1715024007,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__14758__auto__","i__14758__auto__",752549378,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__14756__auto__","dims__14756__auto__",299243980,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__14757__auto__","dimarray__14757__auto__",-1715024007,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq14760){
var G__14761 = cljs.core.first.call(null,seq14760);
var seq14760__$1 = cljs.core.next.call(null,seq14760);
var G__14762 = cljs.core.first.call(null,seq14760__$1);
var seq14760__$2 = cljs.core.next.call(null,seq14760__$1);
var G__14763 = cljs.core.first.call(null,seq14760__$2);
var seq14760__$3 = cljs.core.next.call(null,seq14760__$2);
var G__14764 = cljs.core.first.call(null,seq14760__$3);
var seq14760__$4 = cljs.core.next.call(null,seq14760__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__14761,G__14762,G__14763,G__14764,seq14760__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__8879__auto___14779 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__14777 = arguments.length;
switch (G__14777) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14781 = arguments.length;
var i__8840__auto___14782 = (0);
while(true){
if((i__8840__auto___14782 < len__8839__auto___14781)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14782]));

var G__14783 = (i__8840__auto___14782 + (1));
i__8840__auto___14782 = G__14783;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8859__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_14778 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_14778;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14771__auto__","x__14771__auto__",1562547224,null)),(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14771__auto__","x__14771__auto__",1562547224,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq14773){
var G__14774 = cljs.core.first.call(null,seq14773);
var seq14773__$1 = cljs.core.next.call(null,seq14773);
var G__14775 = cljs.core.first.call(null,seq14773__$1);
var seq14773__$2 = cljs.core.next.call(null,seq14773__$1);
var G__14776 = cljs.core.first.call(null,seq14773__$2);
var seq14773__$3 = cljs.core.next.call(null,seq14773__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__14774,G__14775,G__14776,seq14773__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__8879__auto___14789 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__14788 = arguments.length;
switch (G__14788) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14791 = arguments.length;
var i__8840__auto___14792 = (0);
while(true){
if((i__8840__auto___14792 < len__8839__auto___14791)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14792]));

var G__14793 = (i__8840__auto___14792 + (1));
i__8840__auto___14792 = G__14793;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8859__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq14785){
var G__14786 = cljs.core.first.call(null,seq14785);
var seq14785__$1 = cljs.core.next.call(null,seq14785);
var G__14787 = cljs.core.first.call(null,seq14785__$1);
var seq14785__$2 = cljs.core.next.call(null,seq14785__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__14786,G__14787,seq14785__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__8879__auto___14803 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__14800 = arguments.length;
switch (G__14800) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14805 = arguments.length;
var i__8840__auto___14806 = (0);
while(true){
if((i__8840__auto___14806 < len__8839__auto___14805)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14806]));

var G__14807 = (i__8840__auto___14806 + (1));
i__8840__auto___14806 = G__14807;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8859__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__14794_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14794_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__14795_SHARP_){
var _STAR_cljs_warnings_STAR_14802 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__14795_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_14802;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq14797){
var G__14798 = cljs.core.first.call(null,seq14797);
var seq14797__$1 = cljs.core.next.call(null,seq14797);
var G__14799 = cljs.core.first.call(null,seq14797__$1);
var seq14797__$2 = cljs.core.next.call(null,seq14797__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__14798,G__14799,seq14797__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__8879__auto___14813 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__14812 = arguments.length;
switch (G__14812) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14815 = arguments.length;
var i__8840__auto___14816 = (0);
while(true){
if((i__8840__auto___14816 < len__8839__auto___14815)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14816]));

var G__14817 = (i__8840__auto___14816 + (1));
i__8840__auto___14816 = G__14817;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8859__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq14809){
var G__14810 = cljs.core.first.call(null,seq14809);
var seq14809__$1 = cljs.core.next.call(null,seq14809);
var G__14811 = cljs.core.first.call(null,seq14809__$1);
var seq14809__$2 = cljs.core.next.call(null,seq14809__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__14810,G__14811,seq14809__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__8879__auto___14827 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__14824 = arguments.length;
switch (G__14824) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___14829 = arguments.length;
var i__8840__auto___14830 = (0);
while(true){
if((i__8840__auto___14830 < len__8839__auto___14829)){
args_arr__8858__auto__.push((arguments[i__8840__auto___14830]));

var G__14831 = (i__8840__auto___14830 + (1));
i__8840__auto___14830 = G__14831;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8859__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__14818_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14818_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__14819_SHARP_){
var _STAR_cljs_warnings_STAR_14826 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__14819_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_14826;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8530__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq14821){
var G__14822 = cljs.core.first.call(null,seq14821);
var seq14821__$1 = cljs.core.next.call(null,seq14821);
var G__14823 = cljs.core.first.call(null,seq14821__$1);
var seq14821__$2 = cljs.core.next.call(null,seq14821__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__14822,G__14823,seq14821__$2);
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
var ret__8879__auto___14847 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14848 = arguments.length;
var i__8840__auto___14849 = (0);
while(true){
if((i__8840__auto___14849 < len__8839__auto___14848)){
args__8846__auto__.push((arguments[i__8840__auto___14849]));

var G__14850 = (i__8840__auto___14849 + (1));
i__8840__auto___14849 = G__14850;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__14835){
var vec__14836 = p__14835;
var k = cljs.core.nth.call(null,vec__14836,(0),null);
var _ = cljs.core.nth.call(null,vec__14836,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__8530__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__14839){
var vec__14840 = p__14839;
var k = cljs.core.nth.call(null,vec__14840,(0),null);
var v = cljs.core.nth.call(null,vec__14840,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8530__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__14843){
var vec__14844 = p__14843;
var k = cljs.core.nth.call(null,vec__14844,(0),null);
var v = cljs.core.nth.call(null,vec__14844,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8530__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__8530__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq14832){
var G__14833 = cljs.core.first.call(null,seq14832);
var seq14832__$1 = cljs.core.next.call(null,seq14832);
var G__14834 = cljs.core.first.call(null,seq14832__$1);
var seq14832__$2 = cljs.core.next.call(null,seq14832__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__14833,G__14834,seq14832__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__8879__auto___14851 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__8879__auto___14854 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__14852__auto__","a__14852__auto__",-316490848,null)),(function (){var x__8530__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__14853__auto__","l__14853__auto__",1043913481,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__14852__auto__","a__14852__auto__",-316490848,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__14852__auto__","a__14852__auto__",-316490848,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__14853__auto__","l__14853__auto__",1043913481,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8530__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__8879__auto___14857 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__14855__auto__","a__14855__auto__",14395017,null)),(function (){var x__8530__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__14856__auto__","l__14856__auto__",101519604,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__14855__auto__","a__14855__auto__",14395017,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__8530__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__14856__auto__","l__14856__auto__",101519604,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8530__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__8879__auto___14863 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14864 = arguments.length;
var i__8840__auto___14865 = (0);
while(true){
if((i__8840__auto___14865 < len__8839__auto___14864)){
args__8846__auto__.push((arguments[i__8840__auto___14865]));

var G__14866 = (i__8840__auto___14865 + (1));
i__8840__auto___14865 = G__14866;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__14858__auto__","n__14858__auto__",2127928903,null)),(function (){var x__8530__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__14858__auto__","n__14858__auto__",2127928903,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8530__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq14859){
var G__14860 = cljs.core.first.call(null,seq14859);
var seq14859__$1 = cljs.core.next.call(null,seq14859);
var G__14861 = cljs.core.first.call(null,seq14859__$1);
var seq14859__$2 = cljs.core.next.call(null,seq14859__$1);
var G__14862 = cljs.core.first.call(null,seq14859__$2);
var seq14859__$3 = cljs.core.next.call(null,seq14859__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__14860,G__14861,G__14862,seq14859__$3);
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
var args__8846__auto__ = [];
var len__8839__auto___14870 = arguments.length;
var i__8840__auto___14871 = (0);
while(true){
if((i__8840__auto___14871 < len__8839__auto___14870)){
args__8846__auto__.push((arguments[i__8840__auto___14871]));

var G__14872 = (i__8840__auto___14871 + (1));
i__8840__auto___14871 = G__14872;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__14867_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14867_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq14868){
var G__14869 = cljs.core.first.call(null,seq14868);
var seq14868__$1 = cljs.core.next.call(null,seq14868);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__14869,seq14868__$1);
});

var ret__8879__auto___14882 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___14883 = arguments.length;
var i__8840__auto___14884 = (0);
while(true){
if((i__8840__auto___14884 < len__8839__auto___14883)){
args__8846__auto__.push((arguments[i__8840__auto___14884]));

var G__14885 = (i__8840__auto___14884 + (1));
i__8840__auto___14884 = G__14885;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__14873__auto__","method-table__14873__auto__",-662454058,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__14874__auto__","prefer-table__14874__auto__",1065515535,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__14875__auto__","method-cache__14875__auto__",-1131207103,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__14876__auto__","cached-hierarchy__14876__auto__",1321277816,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__14877__auto__","hierarchy__14877__auto__",1288617460,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__8530__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8530__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__14877__auto__","hierarchy__14877__auto__",1288617460,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__14873__auto__","method-table__14873__auto__",-662454058,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__14874__auto__","prefer-table__14874__auto__",1065515535,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__14875__auto__","method-cache__14875__auto__",-1131207103,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__14876__auto__","cached-hierarchy__14876__auto__",1321277816,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq14878){
var G__14879 = cljs.core.first.call(null,seq14878);
var seq14878__$1 = cljs.core.next.call(null,seq14878);
var G__14880 = cljs.core.first.call(null,seq14878__$1);
var seq14878__$2 = cljs.core.next.call(null,seq14878__$1);
var G__14881 = cljs.core.first.call(null,seq14878__$2);
var seq14878__$3 = cljs.core.next.call(null,seq14878__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__14879,G__14880,G__14881,seq14878__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__8879__auto___14891 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14892 = arguments.length;
var i__8840__auto___14893 = (0);
while(true){
if((i__8840__auto___14893 < len__8839__auto___14892)){
args__8846__auto__.push((arguments[i__8840__auto___14893]));

var G__14894 = (i__8840__auto___14893 + (1));
i__8840__auto___14893 = G__14894;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((4) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8847__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq14886){
var G__14887 = cljs.core.first.call(null,seq14886);
var seq14886__$1 = cljs.core.next.call(null,seq14886);
var G__14888 = cljs.core.first.call(null,seq14886__$1);
var seq14886__$2 = cljs.core.next.call(null,seq14886__$1);
var G__14889 = cljs.core.first.call(null,seq14886__$2);
var seq14886__$3 = cljs.core.next.call(null,seq14886__$2);
var G__14890 = cljs.core.first.call(null,seq14886__$3);
var seq14886__$4 = cljs.core.next.call(null,seq14886__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__14887,G__14888,G__14889,G__14890,seq14886__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__8879__auto___14897 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__14895__auto__","start__14895__auto__",-689729412,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__14896__auto__","ret__14896__auto__",59876828,null)),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__14895__auto__","start__14895__auto__",-689729412,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__14896__auto__","ret__14896__auto__",59876828,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__8879__auto___14912 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14913 = arguments.length;
var i__8840__auto___14914 = (0);
while(true){
if((i__8840__auto___14914 < len__8839__auto___14913)){
args__8846__auto__.push((arguments[i__8840__auto___14914]));

var G__14915 = (i__8840__auto___14914 + (1));
i__8840__auto___14914 = G__14915;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((5) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8847__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__14909){
var map__14910 = p__14909;
var map__14910__$1 = ((((!((map__14910 == null)))?((((map__14910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14910):map__14910);
var print_fn = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__14898__auto__","start__14898__auto__",-1703736732,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__14899__auto__","ret__14899__auto__",-355006903,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___14900__auto__","___14900__auto__",-241271714,null)),(function (){var x__8530__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__14901__auto__","end__14901__auto__",-900078150,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__14902__auto__","elapsed__14902__auto__",-22794708,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__14901__auto__","end__14901__auto__",-900078150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__14898__auto__","start__14898__auto__",-1703736732,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__8530__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__8530__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__8530__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__14902__auto__","elapsed__14902__auto__",-22794708,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq14903){
var G__14904 = cljs.core.first.call(null,seq14903);
var seq14903__$1 = cljs.core.next.call(null,seq14903);
var G__14905 = cljs.core.first.call(null,seq14903__$1);
var seq14903__$2 = cljs.core.next.call(null,seq14903__$1);
var G__14906 = cljs.core.first.call(null,seq14903__$2);
var seq14903__$3 = cljs.core.next.call(null,seq14903__$2);
var G__14907 = cljs.core.first.call(null,seq14903__$3);
var seq14903__$4 = cljs.core.next.call(null,seq14903__$3);
var G__14908 = cljs.core.first.call(null,seq14903__$4);
var seq14903__$5 = cljs.core.next.call(null,seq14903__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__14904,G__14905,G__14906,G__14907,G__14908,seq14903__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__14917 = arguments.length;
switch (G__14917) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__8530__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__8879__auto___14919 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
return (function (p1__14920_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14920_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__8530__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8530__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8530__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__14921__auto__","arr__14921__auto__",-445841637,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__14922__auto__","s__14922__auto__",334527302,null)),(function (){var x__8530__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__14922__auto__","s__14922__auto__",334527302,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__14921__auto__","arr__14921__auto__",-445841637,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__14922__auto__","s__14922__auto__",334527302,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__14922__auto__","s__14922__auto__",334527302,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__14921__auto__","arr__14921__auto__",-445841637,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
var ret__8879__auto___14923 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__8879__auto___14929 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14930 = arguments.length;
var i__8840__auto___14931 = (0);
while(true){
if((i__8840__auto___14931 < len__8839__auto___14930)){
args__8846__auto__.push((arguments[i__8840__auto___14931]));

var G__14932 = (i__8840__auto___14931 + (1));
i__8840__auto___14931 = G__14932;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__14924__auto__","sb__14924__auto__",1981857114,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14925__auto__","x__14925__auto__",174360661,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__14924__auto__","sb__14924__auto__",1981857114,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__14925__auto__","x__14925__auto__",174360661,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__14924__auto__","sb__14924__auto__",1981857114,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq14926){
var G__14927 = cljs.core.first.call(null,seq14926);
var seq14926__$1 = cljs.core.next.call(null,seq14926);
var G__14928 = cljs.core.first.call(null,seq14926__$1);
var seq14926__$2 = cljs.core.next.call(null,seq14926__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__14927,G__14928,seq14926__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__8879__auto___14937 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14938 = arguments.length;
var i__8840__auto___14939 = (0);
while(true){
if((i__8840__auto___14939 < len__8839__auto___14938)){
args__8846__auto__.push((arguments[i__8840__auto___14939]));

var G__14940 = (i__8840__auto___14939 + (1));
i__8840__auto___14939 = G__14940;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__14933_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = p1__14933_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq14934){
var G__14935 = cljs.core.first.call(null,seq14934);
var seq14934__$1 = cljs.core.next.call(null,seq14934);
var G__14936 = cljs.core.first.call(null,seq14934__$1);
var seq14934__$2 = cljs.core.next.call(null,seq14934__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__14935,G__14936,seq14934__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__8879__auto___14941 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8530__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__8879__auto___14943 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__8530__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14942__auto__","this__14942__auto__",-1380364651,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14942__auto__","this__14942__auto__",-1380364651,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__8879__auto___14960 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__14952){
var vec__14953 = p__14952;
var sym = cljs.core.nth.call(null,vec__14953,(0),null);
var _ = cljs.core.nth.call(null,vec__14953,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8530__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__14956){
var vec__14957 = p__14956;
var _ = cljs.core.nth.call(null,vec__14957,(0),null);
var info = cljs.core.nth.call(null,vec__14957,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__8879__auto___14969 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__14965){
var vec__14966 = p__14965;
var ctor = cljs.core.nth.call(null,vec__14966,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__14966,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8530__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__8879__auto___14978 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8530__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__14974){
var vec__14975 = p__14974;
var sym = cljs.core.nth.call(null,vec__14975,(0),null);
var _ = cljs.core.nth.call(null,vec__14975,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8530__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__8879__auto___14979 = /**
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__8530__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__8879__auto___14985 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14986 = arguments.length;
var i__8840__auto___14987 = (0);
while(true){
if((i__8840__auto___14987 < len__8839__auto___14986)){
args__8846__auto__.push((arguments[i__8840__auto___14987]));

var G__14988 = (i__8840__auto___14987 + (1));
i__8840__auto___14987 = G__14988;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((4) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8847__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__8530__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__8530__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq14980){
var G__14981 = cljs.core.first.call(null,seq14980);
var seq14980__$1 = cljs.core.next.call(null,seq14980);
var G__14982 = cljs.core.first.call(null,seq14980__$1);
var seq14980__$2 = cljs.core.next.call(null,seq14980__$1);
var G__14983 = cljs.core.first.call(null,seq14980__$2);
var seq14980__$3 = cljs.core.next.call(null,seq14980__$2);
var G__14984 = cljs.core.first.call(null,seq14980__$3);
var seq14980__$4 = cljs.core.next.call(null,seq14980__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14981,G__14982,G__14983,G__14984,seq14980__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__8879__auto___14993 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__8846__auto__ = [];
var len__8839__auto___14994 = arguments.length;
var i__8840__auto___14995 = (0);
while(true){
if((i__8840__auto___14995 < len__8839__auto___14994)){
args__8846__auto__.push((arguments[i__8840__auto___14995]));

var G__14996 = (i__8840__auto___14995 + (1));
i__8840__auto___14995 = G__14996;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq14989){
var G__14990 = cljs.core.first.call(null,seq14989);
var seq14989__$1 = cljs.core.next.call(null,seq14989);
var G__14991 = cljs.core.first.call(null,seq14989__$1);
var seq14989__$2 = cljs.core.next.call(null,seq14989__$1);
var G__14992 = cljs.core.first.call(null,seq14989__$2);
var seq14989__$3 = cljs.core.next.call(null,seq14989__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__14990,G__14991,G__14992,seq14989__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__8879__auto___15000 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___15001 = arguments.length;
var i__8840__auto___15002 = (0);
while(true){
if((i__8840__auto___15002 < len__8839__auto___15001)){
args__8846__auto__.push((arguments[i__8840__auto___15002]));

var G__15003 = (i__8840__auto___15002 + (1));
i__8840__auto___15002 = G__15003;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8530__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq14997){
var G__14998 = cljs.core.first.call(null,seq14997);
var seq14997__$1 = cljs.core.next.call(null,seq14997);
var G__14999 = cljs.core.first.call(null,seq14997__$1);
var seq14997__$2 = cljs.core.next.call(null,seq14997__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__14998,G__14999,seq14997__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__8879__auto___15007 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__8846__auto__ = [];
var len__8839__auto___15008 = arguments.length;
var i__8840__auto___15009 = (0);
while(true){
if((i__8840__auto___15009 < len__8839__auto___15008)){
args__8846__auto__.push((arguments[i__8840__auto___15009]));

var G__15010 = (i__8840__auto___15009 + (1));
i__8840__auto___15009 = G__15010;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8530__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq15004){
var G__15005 = cljs.core.first.call(null,seq15004);
var seq15004__$1 = cljs.core.next.call(null,seq15004);
var G__15006 = cljs.core.first.call(null,seq15004__$1);
var seq15004__$2 = cljs.core.next.call(null,seq15004__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__15005,G__15006,seq15004__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__8879__auto___15014 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___15015 = arguments.length;
var i__8840__auto___15016 = (0);
while(true){
if((i__8840__auto___15016 < len__8839__auto___15015)){
args__8846__auto__.push((arguments[i__8840__auto___15016]));

var G__15017 = (i__8840__auto___15016 + (1));
i__8840__auto___15016 = G__15017;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8530__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq15011){
var G__15012 = cljs.core.first.call(null,seq15011);
var seq15011__$1 = cljs.core.next.call(null,seq15011);
var G__15013 = cljs.core.first.call(null,seq15011__$1);
var seq15011__$2 = cljs.core.next.call(null,seq15011__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__15012,G__15013,seq15011__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__8879__auto___15021 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__8846__auto__ = [];
var len__8839__auto___15022 = arguments.length;
var i__8840__auto___15023 = (0);
while(true){
if((i__8840__auto___15023 < len__8839__auto___15022)){
args__8846__auto__.push((arguments[i__8840__auto___15023]));

var G__15024 = (i__8840__auto___15023 + (1));
i__8840__auto___15023 = G__15024;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8530__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq15018){
var G__15019 = cljs.core.first.call(null,seq15018);
var seq15018__$1 = cljs.core.next.call(null,seq15018);
var G__15020 = cljs.core.first.call(null,seq15018__$1);
var seq15018__$2 = cljs.core.next.call(null,seq15018__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__15019,G__15020,seq15018__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__8879__auto___15028 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__8846__auto__ = [];
var len__8839__auto___15029 = arguments.length;
var i__8840__auto___15030 = (0);
while(true){
if((i__8840__auto___15030 < len__8839__auto___15029)){
args__8846__auto__.push((arguments[i__8840__auto___15030]));

var G__15031 = (i__8840__auto___15030 + (1));
i__8840__auto___15030 = G__15031;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8530__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq15025){
var G__15026 = cljs.core.first.call(null,seq15025);
var seq15025__$1 = cljs.core.next.call(null,seq15025);
var G__15027 = cljs.core.first.call(null,seq15025__$1);
var seq15025__$2 = cljs.core.next.call(null,seq15025__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__15026,G__15027,seq15025__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__8879__auto___15035 = (function (){
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
var args__8846__auto__ = [];
var len__8839__auto___15036 = arguments.length;
var i__8840__auto___15037 = (0);
while(true){
if((i__8840__auto___15037 < len__8839__auto___15036)){
args__8846__auto__.push((arguments[i__8840__auto___15037]));

var G__15038 = (i__8840__auto___15037 + (1));
i__8840__auto___15037 = G__15038;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8530__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq15032){
var G__15033 = cljs.core.first.call(null,seq15032);
var seq15032__$1 = cljs.core.next.call(null,seq15032);
var G__15034 = cljs.core.first.call(null,seq15032__$1);
var seq15032__$2 = cljs.core.next.call(null,seq15032__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__15033,G__15034,seq15032__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__8879__auto___15039 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__8530__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__8879__auto___15040 = /**
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8530__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__8879__auto___15041 = /**
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
var G__15042 = form_SINGLEQUOTE_;
var G__15043 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__15042;
form_SINGLEQUOTE_ = G__15043;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8530__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
var and__7656__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__7656__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__7656__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__15045 = arguments.length;
switch (G__15045) {
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

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__15046,solo){
var vec__15047 = p__15046;
var seq__15048 = cljs.core.seq.call(null,vec__15047);
var first__15049 = cljs.core.first.call(null,seq__15048);
var seq__15048__$1 = cljs.core.next.call(null,seq__15048);
var arglist = first__15049;
var body = seq__15048__$1;
var method = vec__15047;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__15047,seq__15048,first__15049,seq__15048__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__15047,seq__15048,first__15049,seq__15048__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__15047,seq__15048,first__15049,seq__15048__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__15047,seq__15048,first__15049,seq__15048__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__15047,seq__15048,first__15049,seq__15048__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2999),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2999),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3000),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3000),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
});})(sig,restarg,vec__15047,seq__15048,first__15049,seq__15048__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__15047,seq__15048,first__15049,seq__15048__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),params,(function (){var x__8530__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8530__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});})(sig,restarg,vec__15047,seq__15048,first__15049,seq__15048__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))):null),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__8879__auto___15053 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__15051__auto__","len__15051__auto__",-613846916,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__15052__auto__","i__15052__auto__",-1126655238,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__15052__auto__","i__15052__auto__",-1126655238,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__15051__auto__","len__15051__auto__",-613846916,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__8530__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__15052__auto__","i__15052__auto__",-1126655238,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__15052__auto__","i__15052__auto__",-1126655238,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__15056,emit_var_QMARK_){
var vec__15057 = p__15056;
var vec__15060 = cljs.core.nth.call(null,vec__15057,(0),null);
var seq__15061 = cljs.core.seq.call(null,vec__15060);
var first__15062 = cljs.core.first.call(null,seq__15061);
var seq__15061__$1 = cljs.core.next.call(null,seq__15061);
var arglist = first__15062;
var body = seq__15061__$1;
var method = vec__15060;
var fdecl = vec__15057;
var dest_args = ((function (vec__15057,vec__15060,seq__15061,first__15062,seq__15061__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__15057,vec__15060,seq__15061,first__15062,seq__15061__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});})(vec__15057,vec__15060,seq__15061,first__15062,seq__15061__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__15057,vec__15060,seq__15061,first__15062,seq__15061__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__8530__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__15054__auto__","args__15054__auto__",-632054448,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__15054__auto__","args__15054__auto__",-632054448,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__15055__auto__","argseq__15055__auto__",275377736,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8530__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__15054__auto__","args__15054__auto__",-632054448,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__15054__auto__","args__15054__auto__",-632054448,null)),(function (){var x__8530__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__15055__auto__","argseq__15055__auto__",275377736,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__15071){
var vec__15072 = p__15071;
var seq__15073 = cljs.core.seq.call(null,vec__15072);
var first__15074 = cljs.core.first.call(null,seq__15073);
var seq__15073__$1 = cljs.core.next.call(null,seq__15073);
var sig = first__15074;
var body = seq__15073__$1;
var method = vec__15072;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__15063_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__15063_SHARP_);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__15064_SHARP_){
return fixed_arity.call(null,rname,p1__15064_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__8530__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__15065__auto__","args-arr__15065__auto__",1075511544,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__15065__auto__","args-arr__15065__auto__",1075511544,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__15066__auto__","argseq__15066__auto__",-795942652,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__15065__auto__","args-arr__15065__auto__",1075511544,null)),(function (){var x__8530__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__15066__auto__","argseq__15066__auto__",-795942652,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__8530__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__8530__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__8530__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto____$1);
})(),x__8530__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__15075__i = 0, G__15075__a = new Array(arguments.length -  3);
while (G__15075__i < G__15075__a.length) {G__15075__a[G__15075__i] = arguments[G__15075__i + 3]; ++G__15075__i;}
  fdecl = new cljs.core.IndexedSeq(G__15075__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__15076){
var _AMPERSAND_form = cljs.core.first(arglist__15076);
arglist__15076 = cljs.core.next(arglist__15076);
var _AMPERSAND_env = cljs.core.first(arglist__15076);
arglist__15076 = cljs.core.next(arglist__15076);
var name = cljs.core.first(arglist__15076);
var fdecl = cljs.core.rest(arglist__15076);
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
var args__8846__auto__ = [];
var len__8839__auto___15082 = arguments.length;
var i__8840__auto___15083 = (0);
while(true){
if((i__8840__auto___15083 < len__8839__auto___15082)){
args__8846__auto__.push((arguments[i__8840__auto___15083]));

var G__15084 = (i__8840__auto___15083 + (1));
i__8840__auto___15083 = G__15084;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__8530__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__15085 = cljs.core.cons.call(null,f,p);
var G__15086 = cljs.core.next.call(null,args__$1);
p = G__15085;
args__$1 = G__15086;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__15087 = cljs.core.cons.call(null,f,p);
var G__15088 = cljs.core.next.call(null,args__$1);
p = G__15087;
args__$1 = G__15088;
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
var G__15089 = cljs.core.next.call(null,fd);
fd = G__15089;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__15090 = cljs.core.next.call(null,fd);
fd = G__15090;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__8530__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
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
var G__15091 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__15092 = cljs.core.next.call(null,ds);
acc = G__15091;
ds = G__15092;
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
var G__15093 = cljs.core.next.call(null,p);
var G__15094 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__15093;
d = G__15094;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__15077__auto__","ret__15077__auto__",-2062169643,null)),(function (){var x__8530__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8530__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__15077__auto__","ret__15077__auto__",-2062169643,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq15078){
var G__15079 = cljs.core.first.call(null,seq15078);
var seq15078__$1 = cljs.core.next.call(null,seq15078);
var G__15080 = cljs.core.first.call(null,seq15078__$1);
var seq15078__$2 = cljs.core.next.call(null,seq15078__$1);
var G__15081 = cljs.core.first.call(null,seq15078__$2);
var seq15078__$3 = cljs.core.next.call(null,seq15078__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__15079,G__15080,G__15081,seq15078__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__8879__auto___15099 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__15095 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e15098){var e = e15098;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__15095,(0),null);
var meta = cljs.core.nth.call(null,vec__15095,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8530__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8530__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8530__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map?rel=1518330953232
