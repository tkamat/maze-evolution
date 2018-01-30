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
var ret__37519__auto___50670 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50671 = arguments.length;
var i__37480__auto___50672 = (0);
while(true){
if((i__37480__auto___50672 < len__37479__auto___50671)){
args__37486__auto__.push((arguments[i__37480__auto___50672]));

var G__50673 = (i__37480__auto___50672 + (1));
i__37480__auto___50672 = G__50673;
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
var G__50674 = threaded;
var G__50675 = cljs.core.next.call(null,forms__$1);
x__$1 = G__50674;
forms__$1 = G__50675;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq50666){
var G__50667 = cljs.core.first.call(null,seq50666);
var seq50666__$1 = cljs.core.next.call(null,seq50666);
var G__50668 = cljs.core.first.call(null,seq50666__$1);
var seq50666__$2 = cljs.core.next.call(null,seq50666__$1);
var G__50669 = cljs.core.first.call(null,seq50666__$2);
var seq50666__$3 = cljs.core.next.call(null,seq50666__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50667,G__50668,G__50669,seq50666__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__37519__auto___50680 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50681 = arguments.length;
var i__37480__auto___50682 = (0);
while(true){
if((i__37480__auto___50682 < len__37479__auto___50681)){
args__37486__auto__.push((arguments[i__37480__auto___50682]));

var G__50683 = (i__37480__auto___50682 + (1));
i__37480__auto___50682 = G__50683;
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
var G__50684 = threaded;
var G__50685 = cljs.core.next.call(null,forms__$1);
x__$1 = G__50684;
forms__$1 = G__50685;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq50676){
var G__50677 = cljs.core.first.call(null,seq50676);
var seq50676__$1 = cljs.core.next.call(null,seq50676);
var G__50678 = cljs.core.first.call(null,seq50676__$1);
var seq50676__$2 = cljs.core.next.call(null,seq50676__$1);
var G__50679 = cljs.core.first.call(null,seq50676__$2);
var seq50676__$3 = cljs.core.next.call(null,seq50676__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50677,G__50678,G__50679,seq50676__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__37519__auto___50693 = (function (){
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
var G__50692 = arguments.length;
switch (G__50692) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___50695 = arguments.length;
var i__37480__auto___50696 = (0);
while(true){
if((i__37480__auto___50696 < len__37479__auto___50695)){
args_arr__37498__auto__.push((arguments[i__37480__auto___50696]));

var G__50697 = (i__37480__auto___50696 + (1));
i__37480__auto___50696 = G__50697;
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

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq50687){
var G__50688 = cljs.core.first.call(null,seq50687);
var seq50687__$1 = cljs.core.next.call(null,seq50687);
var G__50689 = cljs.core.first.call(null,seq50687__$1);
var seq50687__$2 = cljs.core.next.call(null,seq50687__$1);
var G__50690 = cljs.core.first.call(null,seq50687__$2);
var seq50687__$3 = cljs.core.next.call(null,seq50687__$2);
var G__50691 = cljs.core.first.call(null,seq50687__$3);
var seq50687__$4 = cljs.core.next.call(null,seq50687__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__50688,G__50689,G__50690,G__50691,seq50687__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__37519__auto___50701 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50702 = arguments.length;
var i__37480__auto___50703 = (0);
while(true){
if((i__37480__auto___50703 < len__37479__auto___50702)){
args__37486__auto__.push((arguments[i__37480__auto___50703]));

var G__50704 = (i__37480__auto___50703 + (1));
i__37480__auto___50703 = G__50704;
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

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq50698){
var G__50699 = cljs.core.first.call(null,seq50698);
var seq50698__$1 = cljs.core.next.call(null,seq50698);
var G__50700 = cljs.core.first.call(null,seq50698__$1);
var seq50698__$2 = cljs.core.next.call(null,seq50698__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__50699,G__50700,seq50698__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__37519__auto___50708 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50709 = arguments.length;
var i__37480__auto___50710 = (0);
while(true){
if((i__37480__auto___50710 < len__37479__auto___50709)){
args__37486__auto__.push((arguments[i__37480__auto___50710]));

var G__50711 = (i__37480__auto___50710 + (1));
i__37480__auto___50710 = G__50711;
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

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq50705){
var G__50706 = cljs.core.first.call(null,seq50705);
var seq50705__$1 = cljs.core.next.call(null,seq50705);
var G__50707 = cljs.core.first.call(null,seq50705__$1);
var seq50705__$2 = cljs.core.next.call(null,seq50705__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__50706,G__50707,seq50705__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__37519__auto___50716 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50717 = arguments.length;
var i__37480__auto___50718 = (0);
while(true){
if((i__37480__auto___50718 < len__37479__auto___50717)){
args__37486__auto__.push((arguments[i__37480__auto___50718]));

var G__50719 = (i__37480__auto___50718 + (1));
i__37480__auto___50718 = G__50719;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__50712_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.vary_meta.call(null,p1__50712_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq50713){
var G__50714 = cljs.core.first.call(null,seq50713);
var seq50713__$1 = cljs.core.next.call(null,seq50713);
var G__50715 = cljs.core.first.call(null,seq50713__$1);
var seq50713__$2 = cljs.core.next.call(null,seq50713__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__50714,G__50715,seq50713__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__37519__auto___50724 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50725 = arguments.length;
var i__37480__auto___50726 = (0);
while(true){
if((i__37480__auto___50726 < len__37479__auto___50725)){
args__37486__auto__.push((arguments[i__37480__auto___50726]));

var G__50727 = (i__37480__auto___50726 + (1));
i__37480__auto___50726 = G__50727;
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

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq50720){
var G__50721 = cljs.core.first.call(null,seq50720);
var seq50720__$1 = cljs.core.next.call(null,seq50720);
var G__50722 = cljs.core.first.call(null,seq50720__$1);
var seq50720__$2 = cljs.core.next.call(null,seq50720__$1);
var G__50723 = cljs.core.first.call(null,seq50720__$2);
var seq50720__$3 = cljs.core.next.call(null,seq50720__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__50721,G__50722,G__50723,seq50720__$3);
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
var G__50728 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__50729 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__50728;
s = G__50729;
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
return (function (p__50730){
var vec__50731 = p__50730;
var t = cljs.core.nth.call(null,vec__50731,(0),null);
var fs = cljs.core.nth.call(null,vec__50731,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__37170__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__37519__auto___50738 = (function (){
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
var len__37479__auto___50739 = arguments.length;
var i__37480__auto___50740 = (0);
while(true){
if((i__37480__auto___50740 < len__37479__auto___50739)){
args__37486__auto__.push((arguments[i__37480__auto___50740]));

var G__50741 = (i__37480__auto___50740 + (1));
i__37480__auto___50740 = G__50741;
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

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq50734){
var G__50735 = cljs.core.first.call(null,seq50734);
var seq50734__$1 = cljs.core.next.call(null,seq50734);
var G__50736 = cljs.core.first.call(null,seq50734__$1);
var seq50734__$2 = cljs.core.next.call(null,seq50734__$1);
var G__50737 = cljs.core.first.call(null,seq50734__$2);
var seq50734__$3 = cljs.core.next.call(null,seq50734__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__50735,G__50736,G__50737,seq50734__$3);
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
var G__50742 = cljs.core.next.call(null,params__$1);
var G__50743 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__50744 = lets;
params__$1 = G__50742;
new_params = G__50743;
lets = G__50744;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__50745 = cljs.core.next.call(null,params__$1);
var G__50746 = cljs.core.conj.call(null,new_params,gparam);
var G__50747 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__50745;
new_params = G__50746;
lets = G__50747;
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
var ret__37519__auto___50754 = (function (){
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
var len__37479__auto___50755 = arguments.length;
var i__37480__auto___50756 = (0);
while(true){
if((i__37480__auto___50756 < len__37479__auto___50755)){
args__37486__auto__.push((arguments[i__37480__auto___50756]));

var G__50757 = (i__37480__auto___50756 + (1));
i__37480__auto___50756 = G__50757;
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

var vec__50751 = sig;
var seq__50752 = cljs.core.seq.call(null,vec__50751);
var first__50753 = cljs.core.first.call(null,seq__50752);
var seq__50752__$1 = cljs.core.next.call(null,seq__50752);
var params = first__50753;
var body = seq__50752__$1;
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
})(),cljs.core.map.call(null,((function (vec__50751,seq__50752,first__50753,seq__50752__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__37170__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(vec__50751,seq__50752,first__50753,seq__50752__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__50751,seq__50752,first__50753,seq__50752__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__37170__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(vec__50751,seq__50752,first__50753,seq__50752__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq50748){
var G__50749 = cljs.core.first.call(null,seq50748);
var seq50748__$1 = cljs.core.next.call(null,seq50748);
var G__50750 = cljs.core.first.call(null,seq50748__$1);
var seq50748__$2 = cljs.core.next.call(null,seq50748__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__50749,G__50750,seq50748__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__37519__auto___50762 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50763 = arguments.length;
var i__37480__auto___50764 = (0);
while(true){
if((i__37480__auto___50764 < len__37479__auto___50763)){
args__37486__auto__.push((arguments[i__37480__auto___50764]));

var G__50765 = (i__37480__auto___50764 + (1));
i__37480__auto___50764 = G__50765;
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

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq50758){
var G__50759 = cljs.core.first.call(null,seq50758);
var seq50758__$1 = cljs.core.next.call(null,seq50758);
var G__50760 = cljs.core.first.call(null,seq50758__$1);
var seq50758__$2 = cljs.core.next.call(null,seq50758__$1);
var G__50761 = cljs.core.first.call(null,seq50758__$2);
var seq50758__$3 = cljs.core.next.call(null,seq50758__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__50759,G__50760,G__50761,seq50758__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__37519__auto___50775 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__50774 = arguments.length;
switch (G__50774) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___50777 = arguments.length;
var i__37480__auto___50778 = (0);
while(true){
if((i__37480__auto___50778 < len__37479__auto___50777)){
args_arr__37498__auto__.push((arguments[i__37480__auto___50778]));

var G__50779 = (i__37480__auto___50778 + (1));
i__37480__auto___50778 = G__50779;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50766__auto__","temp__50766__auto__",694361731,null)),(function (){var x__37170__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50766__auto__","temp__50766__auto__",694361731,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50766__auto__","temp__50766__auto__",694361731,null))))));
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

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq50768){
var G__50769 = cljs.core.first.call(null,seq50768);
var seq50768__$1 = cljs.core.next.call(null,seq50768);
var G__50770 = cljs.core.first.call(null,seq50768__$1);
var seq50768__$2 = cljs.core.next.call(null,seq50768__$1);
var G__50771 = cljs.core.first.call(null,seq50768__$2);
var seq50768__$3 = cljs.core.next.call(null,seq50768__$2);
var G__50772 = cljs.core.first.call(null,seq50768__$3);
var seq50768__$4 = cljs.core.next.call(null,seq50768__$3);
var G__50773 = cljs.core.first.call(null,seq50768__$4);
var seq50768__$5 = cljs.core.next.call(null,seq50768__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__50769,G__50770,G__50771,G__50772,G__50773,seq50768__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__37519__auto___50782 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__50781 = arguments.length;
switch (G__50781) {
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

var ret__37519__auto___50789 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50790 = arguments.length;
var i__37480__auto___50791 = (0);
while(true){
if((i__37480__auto___50791 < len__37479__auto___50790)){
args__37486__auto__.push((arguments[i__37480__auto___50791]));

var G__50792 = (i__37480__auto___50791 + (1));
i__37480__auto___50791 = G__50792;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__50784_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__50784_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq50785){
var G__50786 = cljs.core.first.call(null,seq50785);
var seq50785__$1 = cljs.core.next.call(null,seq50785);
var G__50787 = cljs.core.first.call(null,seq50785__$1);
var seq50785__$2 = cljs.core.next.call(null,seq50785__$1);
var G__50788 = cljs.core.first.call(null,seq50785__$2);
var seq50785__$3 = cljs.core.next.call(null,seq50785__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__50786,G__50787,G__50788,seq50785__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__37519__auto___50797 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50798 = arguments.length;
var i__37480__auto___50799 = (0);
while(true){
if((i__37480__auto___50799 < len__37479__auto___50798)){
args__37486__auto__.push((arguments[i__37480__auto___50799]));

var G__50800 = (i__37480__auto___50799 + (1));
i__37480__auto___50799 = G__50800;
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

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq50793){
var G__50794 = cljs.core.first.call(null,seq50793);
var seq50793__$1 = cljs.core.next.call(null,seq50793);
var G__50795 = cljs.core.first.call(null,seq50793__$1);
var seq50793__$2 = cljs.core.next.call(null,seq50793__$1);
var G__50796 = cljs.core.first.call(null,seq50793__$2);
var seq50793__$3 = cljs.core.next.call(null,seq50793__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__50794,G__50795,G__50796,seq50793__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__37519__auto___50805 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50806 = arguments.length;
var i__37480__auto___50807 = (0);
while(true){
if((i__37480__auto___50807 < len__37479__auto___50806)){
args__37486__auto__.push((arguments[i__37480__auto___50807]));

var G__50808 = (i__37480__auto___50807 + (1));
i__37480__auto___50807 = G__50808;
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

cljs.core$macros.when.cljs$lang$applyTo = (function (seq50801){
var G__50802 = cljs.core.first.call(null,seq50801);
var seq50801__$1 = cljs.core.next.call(null,seq50801);
var G__50803 = cljs.core.first.call(null,seq50801__$1);
var seq50801__$2 = cljs.core.next.call(null,seq50801__$1);
var G__50804 = cljs.core.first.call(null,seq50801__$2);
var seq50801__$3 = cljs.core.next.call(null,seq50801__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__50802,G__50803,G__50804,seq50801__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__37519__auto___50817 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50818 = arguments.length;
var i__37480__auto___50819 = (0);
while(true){
if((i__37480__auto___50819 < len__37479__auto___50818)){
args__37486__auto__.push((arguments[i__37480__auto___50819]));

var G__50820 = (i__37480__auto___50819 + (1));
i__37480__auto___50819 = G__50820;
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


var vec__50814 = bindings;
var x = cljs.core.nth.call(null,vec__50814,(0),null);
var xs = cljs.core.nth.call(null,vec__50814,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__50809__auto__","xs__50809__auto__",2031242199,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__50809__auto__","xs__50809__auto__",2031242199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq50810){
var G__50811 = cljs.core.first.call(null,seq50810);
var seq50810__$1 = cljs.core.next.call(null,seq50810);
var G__50812 = cljs.core.first.call(null,seq50810__$1);
var seq50810__$2 = cljs.core.next.call(null,seq50810__$1);
var G__50813 = cljs.core.first.call(null,seq50810__$2);
var seq50810__$3 = cljs.core.next.call(null,seq50810__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__50811,G__50812,G__50813,seq50810__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__37519__auto___50826 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50827 = arguments.length;
var i__37480__auto___50828 = (0);
while(true){
if((i__37480__auto___50828 < len__37479__auto___50827)){
args__37486__auto__.push((arguments[i__37480__auto___50828]));

var G__50829 = (i__37480__auto___50828 + (1));
i__37480__auto___50828 = G__50829;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50821__auto__","temp__50821__auto__",1913536004,null)),(function (){var x__37170__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50821__auto__","temp__50821__auto__",1913536004,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50821__auto__","temp__50821__auto__",1913536004,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq50822){
var G__50823 = cljs.core.first.call(null,seq50822);
var seq50822__$1 = cljs.core.next.call(null,seq50822);
var G__50824 = cljs.core.first.call(null,seq50822__$1);
var seq50822__$2 = cljs.core.next.call(null,seq50822__$1);
var G__50825 = cljs.core.first.call(null,seq50822__$2);
var seq50822__$3 = cljs.core.next.call(null,seq50822__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__50823,G__50824,G__50825,seq50822__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__37519__auto___50834 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50835 = arguments.length;
var i__37480__auto___50836 = (0);
while(true){
if((i__37480__auto___50836 < len__37479__auto___50835)){
args__37486__auto__.push((arguments[i__37480__auto___50836]));

var G__50837 = (i__37480__auto___50836 + (1));
i__37480__auto___50836 = G__50837;
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

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq50830){
var G__50831 = cljs.core.first.call(null,seq50830);
var seq50830__$1 = cljs.core.next.call(null,seq50830);
var G__50832 = cljs.core.first.call(null,seq50830__$1);
var seq50830__$2 = cljs.core.next.call(null,seq50830__$1);
var G__50833 = cljs.core.first.call(null,seq50830__$2);
var seq50830__$3 = cljs.core.next.call(null,seq50830__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__50831,G__50832,G__50833,seq50830__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__37519__auto___50842 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50843 = arguments.length;
var i__37480__auto___50844 = (0);
while(true){
if((i__37480__auto___50844 < len__37479__auto___50843)){
args__37486__auto__.push((arguments[i__37480__auto___50844]));

var G__50845 = (i__37480__auto___50844 + (1));
i__37480__auto___50844 = G__50845;
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

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq50838){
var G__50839 = cljs.core.first.call(null,seq50838);
var seq50838__$1 = cljs.core.next.call(null,seq50838);
var G__50840 = cljs.core.first.call(null,seq50838__$1);
var seq50838__$2 = cljs.core.next.call(null,seq50838__$1);
var G__50841 = cljs.core.first.call(null,seq50838__$2);
var seq50838__$3 = cljs.core.next.call(null,seq50838__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__50839,G__50840,G__50841,seq50838__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__37519__auto___50854 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50855 = arguments.length;
var i__37480__auto___50856 = (0);
while(true){
if((i__37480__auto___50856 < len__37479__auto___50855)){
args__37486__auto__.push((arguments[i__37480__auto___50856]));

var G__50857 = (i__37480__auto___50856 + (1));
i__37480__auto___50856 = G__50857;
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
return (function (p__50850){
var vec__50851 = p__50850;
var test = cljs.core.nth.call(null,vec__50851,(0),null);
var step = cljs.core.nth.call(null,vec__50851,(1),null);
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

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq50846){
var G__50847 = cljs.core.first.call(null,seq50846);
var seq50846__$1 = cljs.core.next.call(null,seq50846);
var G__50848 = cljs.core.first.call(null,seq50846__$1);
var seq50846__$2 = cljs.core.next.call(null,seq50846__$1);
var G__50849 = cljs.core.first.call(null,seq50846__$2);
var seq50846__$3 = cljs.core.next.call(null,seq50846__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50847,G__50848,G__50849,seq50846__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__37519__auto___50866 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50867 = arguments.length;
var i__37480__auto___50868 = (0);
while(true){
if((i__37480__auto___50868 < len__37479__auto___50867)){
args__37486__auto__.push((arguments[i__37480__auto___50868]));

var G__50869 = (i__37480__auto___50868 + (1));
i__37480__auto___50868 = G__50869;
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
return (function (p__50862){
var vec__50863 = p__50862;
var test = cljs.core.nth.call(null,vec__50863,(0),null);
var step = cljs.core.nth.call(null,vec__50863,(1),null);
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

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq50858){
var G__50859 = cljs.core.first.call(null,seq50858);
var seq50858__$1 = cljs.core.next.call(null,seq50858);
var G__50860 = cljs.core.first.call(null,seq50858__$1);
var seq50858__$2 = cljs.core.next.call(null,seq50858__$1);
var G__50861 = cljs.core.first.call(null,seq50858__$2);
var seq50858__$3 = cljs.core.next.call(null,seq50858__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50859,G__50860,G__50861,seq50858__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__37519__auto___50875 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50876 = arguments.length;
var i__37480__auto___50877 = (0);
while(true){
if((i__37480__auto___50877 < len__37479__auto___50876)){
args__37486__auto__.push((arguments[i__37480__auto___50877]));

var G__50878 = (i__37480__auto___50877 + (1));
i__37480__auto___50877 = G__50878;
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

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq50870){
var G__50871 = cljs.core.first.call(null,seq50870);
var seq50870__$1 = cljs.core.next.call(null,seq50870);
var G__50872 = cljs.core.first.call(null,seq50870__$1);
var seq50870__$2 = cljs.core.next.call(null,seq50870__$1);
var G__50873 = cljs.core.first.call(null,seq50870__$2);
var seq50870__$3 = cljs.core.next.call(null,seq50870__$2);
var G__50874 = cljs.core.first.call(null,seq50870__$3);
var seq50870__$4 = cljs.core.next.call(null,seq50870__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50871,G__50872,G__50873,G__50874,seq50870__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__37519__auto___50883 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50884 = arguments.length;
var i__37480__auto___50885 = (0);
while(true){
if((i__37480__auto___50885 < len__37479__auto___50884)){
args__37486__auto__.push((arguments[i__37480__auto___50885]));

var G__50886 = (i__37480__auto___50885 + (1));
i__37480__auto___50885 = G__50886;
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

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq50879){
var G__50880 = cljs.core.first.call(null,seq50879);
var seq50879__$1 = cljs.core.next.call(null,seq50879);
var G__50881 = cljs.core.first.call(null,seq50879__$1);
var seq50879__$2 = cljs.core.next.call(null,seq50879__$1);
var G__50882 = cljs.core.first.call(null,seq50879__$2);
var seq50879__$3 = cljs.core.next.call(null,seq50879__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50880,G__50881,G__50882,seq50879__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__37519__auto___50891 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50892 = arguments.length;
var i__37480__auto___50893 = (0);
while(true){
if((i__37480__auto___50893 < len__37479__auto___50892)){
args__37486__auto__.push((arguments[i__37480__auto___50893]));

var G__50894 = (i__37480__auto___50893 + (1));
i__37480__auto___50893 = G__50894;
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

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq50887){
var G__50888 = cljs.core.first.call(null,seq50887);
var seq50887__$1 = cljs.core.next.call(null,seq50887);
var G__50889 = cljs.core.first.call(null,seq50887__$1);
var seq50887__$2 = cljs.core.next.call(null,seq50887__$1);
var G__50890 = cljs.core.first.call(null,seq50887__$2);
var seq50887__$3 = cljs.core.next.call(null,seq50887__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50888,G__50889,G__50890,seq50887__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__37519__auto___50904 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__50903 = arguments.length;
switch (G__50903) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___50906 = arguments.length;
var i__37480__auto___50907 = (0);
while(true){
if((i__37480__auto___50907 < len__37479__auto___50906)){
args_arr__37498__auto__.push((arguments[i__37480__auto___50907]));

var G__50908 = (i__37480__auto___50907 + (1));
i__37480__auto___50907 = G__50908;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50895__auto__","temp__50895__auto__",-1120038850,null)),(function (){var x__37170__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50895__auto__","temp__50895__auto__",-1120038850,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50895__auto__","temp__50895__auto__",-1120038850,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq50897){
var G__50898 = cljs.core.first.call(null,seq50897);
var seq50897__$1 = cljs.core.next.call(null,seq50897);
var G__50899 = cljs.core.first.call(null,seq50897__$1);
var seq50897__$2 = cljs.core.next.call(null,seq50897__$1);
var G__50900 = cljs.core.first.call(null,seq50897__$2);
var seq50897__$3 = cljs.core.next.call(null,seq50897__$2);
var G__50901 = cljs.core.first.call(null,seq50897__$3);
var seq50897__$4 = cljs.core.next.call(null,seq50897__$3);
var G__50902 = cljs.core.first.call(null,seq50897__$4);
var seq50897__$5 = cljs.core.next.call(null,seq50897__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__50898,G__50899,G__50900,G__50901,G__50902,seq50897__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__37519__auto___50914 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50915 = arguments.length;
var i__37480__auto___50916 = (0);
while(true){
if((i__37480__auto___50916 < len__37479__auto___50915)){
args__37486__auto__.push((arguments[i__37480__auto___50916]));

var G__50917 = (i__37480__auto___50916 + (1));
i__37480__auto___50916 = G__50917;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50909__auto__","temp__50909__auto__",-130962455,null)),(function (){var x__37170__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50909__auto__","temp__50909__auto__",-130962455,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__50909__auto__","temp__50909__auto__",-130962455,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq50910){
var G__50911 = cljs.core.first.call(null,seq50910);
var seq50910__$1 = cljs.core.next.call(null,seq50910);
var G__50912 = cljs.core.first.call(null,seq50910__$1);
var seq50910__$2 = cljs.core.next.call(null,seq50910__$1);
var G__50913 = cljs.core.first.call(null,seq50910__$2);
var seq50910__$3 = cljs.core.next.call(null,seq50910__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__50911,G__50912,G__50913,seq50910__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__50918_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__50918_SHARP_)){
return cljs.core.first.call(null,p1__50918_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50918_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50918_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__50919_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__50919_SHARP_);
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
var G__50920 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__50921 = cljs.core.next.call(null,fdecls);
ret = G__50920;
fdecls = G__50921;
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
var ret__37519__auto___50922 = /**
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
var G__50929 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__50930 = n;
var G__50931 = cljs.core.nnext.call(null,bs);
var G__50932 = true;
ret = G__50929;
n = G__50930;
bs = G__50931;
seen_rest_QMARK_ = G__50932;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__50933 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__37170__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__37170__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__37170__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__37170__auto____$1);
})(),x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__50934 = (n + (1));
var G__50935 = cljs.core.next.call(null,bs);
var G__50936 = seen_rest_QMARK_;
ret = G__50933;
n = G__50934;
bs = G__50935;
seen_rest_QMARK_ = G__50936;
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
return (function (p1__50923_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__36308__auto__ = mkns;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.namespace.call(null,p1__50923_SHARP_);
}
})(),cljs.core.name.call(null,p1__50923_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__50924_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.symbol.call(null,(function (){var or__36308__auto__ = mkns;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.namespace.call(null,p1__50924_SHARP_);
}
})(),cljs.core.name.call(null,p1__50924_SHARP_));
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
return (function (p1__50925_SHARP_,p2__50926_SHARP_){
return cljs.core.assoc.call(null,p1__50925_SHARP_,p2__50926_SHARP_,cljs.core.val.call(null,entry).call(null,p2__50926_SHARP_));
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
var G__50937 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__50938 = cljs.core.next.call(null,bes);
ret = G__50937;
bes = G__50938;
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
return (function (p1__50927_SHARP_){
return (cljs.core.first.call(null,p1__50927_SHARP_) instanceof cljs.core.Keyword);
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
var ret__37519__auto___50939 = /**
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

var ret__37519__auto___50944 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50945 = arguments.length;
var i__37480__auto___50946 = (0);
while(true){
if((i__37480__auto___50946 < len__37479__auto___50945)){
args__37486__auto__.push((arguments[i__37480__auto___50946]));

var G__50947 = (i__37480__auto___50946 + (1));
i__37480__auto___50946 = G__50947;
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

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq50940){
var G__50941 = cljs.core.first.call(null,seq50940);
var seq50940__$1 = cljs.core.next.call(null,seq50940);
var G__50942 = cljs.core.first.call(null,seq50940__$1);
var seq50940__$2 = cljs.core.next.call(null,seq50940__$1);
var G__50943 = cljs.core.first.call(null,seq50940__$2);
var seq50940__$3 = cljs.core.next.call(null,seq50940__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__50941,G__50942,G__50943,seq50940__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__37519__auto___50956 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50957 = arguments.length;
var i__37480__auto___50958 = (0);
while(true){
if((i__37480__auto___50958 < len__37479__auto___50957)){
args__37486__auto__.push((arguments[i__37480__auto___50958]));

var G__50959 = (i__37480__auto___50958 + (1));
i__37480__auto___50958 = G__50959;
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
return (function (ret,p__50952){
var vec__50953 = p__50952;
var b = cljs.core.nth.call(null,vec__50953,(0),null);
var v = cljs.core.nth.call(null,vec__50953,(1),null);
var g = cljs.core.nth.call(null,vec__50953,(2),null);
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

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq50948){
var G__50949 = cljs.core.first.call(null,seq50948);
var seq50948__$1 = cljs.core.next.call(null,seq50948);
var G__50950 = cljs.core.first.call(null,seq50948__$1);
var seq50948__$2 = cljs.core.next.call(null,seq50948__$1);
var G__50951 = cljs.core.first.call(null,seq50948__$2);
var seq50948__$3 = cljs.core.next.call(null,seq50948__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__50949,G__50950,G__50951,seq50948__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__50960_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50960_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__50961){
var vec__50962 = p__50961;
var p = cljs.core.nth.call(null,vec__50962,(0),null);
var b = cljs.core.nth.call(null,vec__50962,(1),null);
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
var ret__37519__auto___50968 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50969 = arguments.length;
var i__37480__auto___50970 = (0);
while(true){
if((i__37480__auto___50970 < len__37479__auto___50969)){
args__37486__auto__.push((arguments[i__37480__auto___50970]));

var G__50971 = (i__37480__auto___50970 + (1));
i__37480__auto___50970 = G__50971;
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

cljs.core$macros.str.cljs$lang$applyTo = (function (seq50965){
var G__50966 = cljs.core.first.call(null,seq50965);
var seq50965__$1 = cljs.core.next.call(null,seq50965);
var G__50967 = cljs.core.first.call(null,seq50965__$1);
var seq50965__$2 = cljs.core.next.call(null,seq50965__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__50966,G__50967,seq50965__$2);
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
var ret__37519__auto___50982 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__50980 = arguments.length;
switch (G__50980) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___50984 = arguments.length;
var i__37480__auto___50985 = (0);
while(true){
if((i__37480__auto___50985 < len__37479__auto___50984)){
args_arr__37498__auto__.push((arguments[i__37480__auto___50985]));

var G__50986 = (i__37480__auto___50985 + (1));
i__37480__auto___50985 = G__50986;
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
return (function (p1__50972_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__50972_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__50973_SHARP_){
var _STAR_cljs_warnings_STAR_50981 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__50973_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_50981;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__37170__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__50974__auto__","and__50974__auto__",-1264765817,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__50974__auto__","and__50974__auto__",-1264765817,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__50974__auto__","and__50974__auto__",-1264765817,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq50976){
var G__50977 = cljs.core.first.call(null,seq50976);
var seq50976__$1 = cljs.core.next.call(null,seq50976);
var G__50978 = cljs.core.first.call(null,seq50976__$1);
var seq50976__$2 = cljs.core.next.call(null,seq50976__$1);
var G__50979 = cljs.core.first.call(null,seq50976__$2);
var seq50976__$3 = cljs.core.next.call(null,seq50976__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__50977,G__50978,G__50979,seq50976__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__37519__auto___50997 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__50995 = arguments.length;
switch (G__50995) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___50999 = arguments.length;
var i__37480__auto___51000 = (0);
while(true){
if((i__37480__auto___51000 < len__37479__auto___50999)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51000]));

var G__51001 = (i__37480__auto___51000 + (1));
i__37480__auto___51000 = G__51001;
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
return (function (p1__50987_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__50987_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__50988_SHARP_){
var _STAR_cljs_warnings_STAR_50996 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__50988_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_50996;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__37170__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__50989__auto__","or__50989__auto__",-136486310,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__50989__auto__","or__50989__auto__",-136486310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__50989__auto__","or__50989__auto__",-136486310,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq50991){
var G__50992 = cljs.core.first.call(null,seq50991);
var seq50991__$1 = cljs.core.next.call(null,seq50991);
var G__50993 = cljs.core.first.call(null,seq50991__$1);
var seq50991__$2 = cljs.core.next.call(null,seq50991__$1);
var G__50994 = cljs.core.first.call(null,seq50991__$2);
var seq50991__$3 = cljs.core.next.call(null,seq50991__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__50992,G__50993,G__50994,seq50991__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__37519__auto___51002 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51003 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51004 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__37519__auto___51005 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__37519__auto___51006 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__37519__auto___51007 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__37519__auto___51008 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
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

var ret__37519__auto___51009 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__37519__auto___51010 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__37519__auto___51011 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__37519__auto___51012 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__37170__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__37519__auto___51017 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__51014 = clojure.string.split.call(null,comment,/\n/);
var seq__51015 = cljs.core.seq.call(null,vec__51014);
var first__51016 = cljs.core.first.call(null,seq__51015);
var seq__51015__$1 = cljs.core.next.call(null,seq__51015);
var x = first__51016;
var ys = seq__51015__$1;
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__51014,seq__51015,first__51016,seq__51015__$1,x,ys){
return (function (p1__51013_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__51013_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__51014,seq__51015,first__51016,seq__51015__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__37519__auto___51018 = /**
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

var ret__37519__auto___51019 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__37519__auto___51020 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51021 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51022 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51023 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51024 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51025 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51028 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51026__auto__","c__51026__auto__",-72025550,null)),(function (){var x__37170__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51027__auto__","x__51027__auto__",1269855168,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51027__auto__","x__51027__auto__",1269855168,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51026__auto__","c__51026__auto__",-72025550,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51029 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51030 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51031 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51041 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__51038 = arguments.length;
switch (G__51038) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51043 = arguments.length;
var i__37480__auto___51044 = (0);
while(true){
if((i__37480__auto___51044 < len__37479__auto___51043)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51044]));

var G__51045 = (i__37480__auto___51044 + (1));
i__37480__auto___51044 = G__51045;
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
var G__51039 = cljs.analyzer.checked_arrays.call(null);
var G__51039__$1 = (((G__51039 instanceof cljs.core.Keyword))?G__51039.fqn:null);
switch (G__51039__$1) {
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
var G__51040 = cljs.analyzer.checked_arrays.call(null);
var G__51040__$1 = (((G__51040 instanceof cljs.core.Keyword))?G__51040.fqn:null);
switch (G__51040__$1) {
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

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq51033){
var G__51034 = cljs.core.first.call(null,seq51033);
var seq51033__$1 = cljs.core.next.call(null,seq51033);
var G__51035 = cljs.core.first.call(null,seq51033__$1);
var seq51033__$2 = cljs.core.next.call(null,seq51033__$1);
var G__51036 = cljs.core.first.call(null,seq51033__$2);
var seq51033__$3 = cljs.core.next.call(null,seq51033__$2);
var G__51037 = cljs.core.first.call(null,seq51033__$3);
var seq51033__$4 = cljs.core.next.call(null,seq51033__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__51034,G__51035,G__51036,G__51037,seq51033__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__37519__auto___51058 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__51055 = arguments.length;
switch (G__51055) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51060 = arguments.length;
var i__37480__auto___51061 = (0);
while(true){
if((i__37480__auto___51061 < len__37479__auto___51060)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51061]));

var G__51062 = (i__37480__auto___51061 + (1));
i__37480__auto___51061 = G__51062;
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
var G__51056 = cljs.analyzer.checked_arrays.call(null);
var G__51056__$1 = (((G__51056 instanceof cljs.core.Keyword))?G__51056.fqn:null);
switch (G__51056__$1) {
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
var G__51057 = cljs.analyzer.checked_arrays.call(null);
var G__51057__$1 = (((G__51057 instanceof cljs.core.Keyword))?G__51057.fqn:null);
switch (G__51057__$1) {
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

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq51049){
var G__51050 = cljs.core.first.call(null,seq51049);
var seq51049__$1 = cljs.core.next.call(null,seq51049);
var G__51051 = cljs.core.first.call(null,seq51049__$1);
var seq51049__$2 = cljs.core.next.call(null,seq51049__$1);
var G__51052 = cljs.core.first.call(null,seq51049__$2);
var seq51049__$3 = cljs.core.next.call(null,seq51049__$2);
var G__51053 = cljs.core.first.call(null,seq51049__$3);
var seq51049__$4 = cljs.core.next.call(null,seq51049__$3);
var G__51054 = cljs.core.first.call(null,seq51049__$4);
var seq51049__$5 = cljs.core.next.call(null,seq51049__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__51050,G__51051,G__51052,G__51053,G__51054,seq51049__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__37519__auto___51065 = /**
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

var ret__37519__auto___51066 = /**
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

var ret__37519__auto___51074 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__51073 = arguments.length;
switch (G__51073) {
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
var len__37479__auto___51076 = arguments.length;
var i__37480__auto___51077 = (0);
while(true){
if((i__37480__auto___51077 < len__37479__auto___51076)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51077]));

var G__51078 = (i__37480__auto___51077 + (1));
i__37480__auto___51077 = G__51078;
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

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq51068){
var G__51069 = cljs.core.first.call(null,seq51068);
var seq51068__$1 = cljs.core.next.call(null,seq51068);
var G__51070 = cljs.core.first.call(null,seq51068__$1);
var seq51068__$2 = cljs.core.next.call(null,seq51068__$1);
var G__51071 = cljs.core.first.call(null,seq51068__$2);
var seq51068__$3 = cljs.core.next.call(null,seq51068__$2);
var G__51072 = cljs.core.first.call(null,seq51068__$3);
var seq51068__$4 = cljs.core.next.call(null,seq51068__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__51069,G__51070,G__51071,G__51072,seq51068__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__37519__auto___51079 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__37519__auto___51080 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__37519__auto___51081 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__37519__auto___51082 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__37519__auto___51083 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__37519__auto___51084 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__37519__auto___51085 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__37519__auto___51086 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__37519__auto___51087 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__37519__auto___51091 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51092 = arguments.length;
var i__37480__auto___51093 = (0);
while(true){
if((i__37480__auto___51093 < len__37479__auto___51092)){
args__37486__auto__.push((arguments[i__37480__auto___51093]));

var G__51094 = (i__37480__auto___51093 + (1));
i__37480__auto___51093 = G__51094;
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

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq51088){
var G__51089 = cljs.core.first.call(null,seq51088);
var seq51088__$1 = cljs.core.next.call(null,seq51088);
var G__51090 = cljs.core.first.call(null,seq51088__$1);
var seq51088__$2 = cljs.core.next.call(null,seq51088__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__51089,G__51090,seq51088__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__37519__auto___51098 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51099 = arguments.length;
var i__37480__auto___51100 = (0);
while(true){
if((i__37480__auto___51100 < len__37479__auto___51099)){
args__37486__auto__.push((arguments[i__37480__auto___51100]));

var G__51101 = (i__37480__auto___51100 + (1));
i__37480__auto___51100 = G__51101;
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

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq51095){
var G__51096 = cljs.core.first.call(null,seq51095);
var seq51095__$1 = cljs.core.next.call(null,seq51095);
var G__51097 = cljs.core.first.call(null,seq51095__$1);
var seq51095__$2 = cljs.core.next.call(null,seq51095__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__51096,G__51097,seq51095__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__37519__auto___51102 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__37519__auto___51103 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__37519__auto___51107 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51108 = arguments.length;
var i__37480__auto___51109 = (0);
while(true){
if((i__37480__auto___51109 < len__37479__auto___51108)){
args__37486__auto__.push((arguments[i__37480__auto___51109]));

var G__51110 = (i__37480__auto___51109 + (1));
i__37480__auto___51109 = G__51110;
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

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq51104){
var G__51105 = cljs.core.first.call(null,seq51104);
var seq51104__$1 = cljs.core.next.call(null,seq51104);
var G__51106 = cljs.core.first.call(null,seq51104__$1);
var seq51104__$2 = cljs.core.next.call(null,seq51104__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__51105,G__51106,seq51104__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__37519__auto___51111 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__37519__auto___51112 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__37519__auto___51116 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51117 = arguments.length;
var i__37480__auto___51118 = (0);
while(true){
if((i__37480__auto___51118 < len__37479__auto___51117)){
args__37486__auto__.push((arguments[i__37480__auto___51118]));

var G__51119 = (i__37480__auto___51118 + (1));
i__37480__auto___51118 = G__51119;
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

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq51113){
var G__51114 = cljs.core.first.call(null,seq51113);
var seq51113__$1 = cljs.core.next.call(null,seq51113);
var G__51115 = cljs.core.first.call(null,seq51113__$1);
var seq51113__$2 = cljs.core.next.call(null,seq51113__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__51114,G__51115,seq51113__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__37519__auto___51123 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51124 = arguments.length;
var i__37480__auto___51125 = (0);
while(true){
if((i__37480__auto___51125 < len__37479__auto___51124)){
args__37486__auto__.push((arguments[i__37480__auto___51125]));

var G__51126 = (i__37480__auto___51125 + (1));
i__37480__auto___51125 = G__51126;
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

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq51120){
var G__51121 = cljs.core.first.call(null,seq51120);
var seq51120__$1 = cljs.core.next.call(null,seq51120);
var G__51122 = cljs.core.first.call(null,seq51120__$1);
var seq51120__$2 = cljs.core.next.call(null,seq51120__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__51121,G__51122,seq51120__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__37519__auto___51127 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__37519__auto___51128 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__37519__auto___51129 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__37519__auto___51133 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51134 = arguments.length;
var i__37480__auto___51135 = (0);
while(true){
if((i__37480__auto___51135 < len__37479__auto___51134)){
args__37486__auto__.push((arguments[i__37480__auto___51135]));

var G__51136 = (i__37480__auto___51135 + (1));
i__37480__auto___51135 = G__51136;
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

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq51130){
var G__51131 = cljs.core.first.call(null,seq51130);
var seq51130__$1 = cljs.core.next.call(null,seq51130);
var G__51132 = cljs.core.first.call(null,seq51130__$1);
var seq51130__$2 = cljs.core.next.call(null,seq51130__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__51131,G__51132,seq51130__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__37519__auto___51140 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51141 = arguments.length;
var i__37480__auto___51142 = (0);
while(true){
if((i__37480__auto___51142 < len__37479__auto___51141)){
args__37486__auto__.push((arguments[i__37480__auto___51142]));

var G__51143 = (i__37480__auto___51142 + (1));
i__37480__auto___51142 = G__51143;
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

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq51137){
var G__51138 = cljs.core.first.call(null,seq51137);
var seq51137__$1 = cljs.core.next.call(null,seq51137);
var G__51139 = cljs.core.first.call(null,seq51137__$1);
var seq51137__$2 = cljs.core.next.call(null,seq51137__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__51138,G__51139,seq51137__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__37519__auto___51151 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__51150 = arguments.length;
switch (G__51150) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51153 = arguments.length;
var i__37480__auto___51154 = (0);
while(true){
if((i__37480__auto___51154 < len__37479__auto___51153)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51154]));

var G__51155 = (i__37480__auto___51154 + (1));
i__37480__auto___51154 = G__51155;
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

cljs.core$macros._.cljs$lang$applyTo = (function (seq51145){
var G__51146 = cljs.core.first.call(null,seq51145);
var seq51145__$1 = cljs.core.next.call(null,seq51145);
var G__51147 = cljs.core.first.call(null,seq51145__$1);
var seq51145__$2 = cljs.core.next.call(null,seq51145__$1);
var G__51148 = cljs.core.first.call(null,seq51145__$2);
var seq51145__$3 = cljs.core.next.call(null,seq51145__$2);
var G__51149 = cljs.core.first.call(null,seq51145__$3);
var seq51145__$4 = cljs.core.next.call(null,seq51145__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__51146,G__51147,G__51148,G__51149,seq51145__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__37519__auto___51163 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__51162 = arguments.length;
switch (G__51162) {
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
var len__37479__auto___51165 = arguments.length;
var i__37480__auto___51166 = (0);
while(true){
if((i__37480__auto___51166 < len__37479__auto___51165)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51166]));

var G__51167 = (i__37480__auto___51166 + (1));
i__37480__auto___51166 = G__51167;
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

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq51157){
var G__51158 = cljs.core.first.call(null,seq51157);
var seq51157__$1 = cljs.core.next.call(null,seq51157);
var G__51159 = cljs.core.first.call(null,seq51157__$1);
var seq51157__$2 = cljs.core.next.call(null,seq51157__$1);
var G__51160 = cljs.core.first.call(null,seq51157__$2);
var seq51157__$3 = cljs.core.next.call(null,seq51157__$2);
var G__51161 = cljs.core.first.call(null,seq51157__$3);
var seq51157__$4 = cljs.core.next.call(null,seq51157__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51158,G__51159,G__51160,G__51161,seq51157__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__37519__auto___51175 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__51174 = arguments.length;
switch (G__51174) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51177 = arguments.length;
var i__37480__auto___51178 = (0);
while(true){
if((i__37480__auto___51178 < len__37479__auto___51177)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51178]));

var G__51179 = (i__37480__auto___51178 + (1));
i__37480__auto___51178 = G__51179;
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

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq51169){
var G__51170 = cljs.core.first.call(null,seq51169);
var seq51169__$1 = cljs.core.next.call(null,seq51169);
var G__51171 = cljs.core.first.call(null,seq51169__$1);
var seq51169__$2 = cljs.core.next.call(null,seq51169__$1);
var G__51172 = cljs.core.first.call(null,seq51169__$2);
var seq51169__$3 = cljs.core.next.call(null,seq51169__$2);
var G__51173 = cljs.core.first.call(null,seq51169__$3);
var seq51169__$4 = cljs.core.next.call(null,seq51169__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__51170,G__51171,G__51172,G__51173,seq51169__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__37519__auto___51187 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__51186 = arguments.length;
switch (G__51186) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51189 = arguments.length;
var i__37480__auto___51190 = (0);
while(true){
if((i__37480__auto___51190 < len__37479__auto___51189)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51190]));

var G__51191 = (i__37480__auto___51190 + (1));
i__37480__auto___51190 = G__51191;
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

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq51181){
var G__51182 = cljs.core.first.call(null,seq51181);
var seq51181__$1 = cljs.core.next.call(null,seq51181);
var G__51183 = cljs.core.first.call(null,seq51181__$1);
var seq51181__$2 = cljs.core.next.call(null,seq51181__$1);
var G__51184 = cljs.core.first.call(null,seq51181__$2);
var seq51181__$3 = cljs.core.next.call(null,seq51181__$2);
var G__51185 = cljs.core.first.call(null,seq51181__$3);
var seq51181__$4 = cljs.core.next.call(null,seq51181__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__51182,G__51183,G__51184,G__51185,seq51181__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__37519__auto___51199 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__51198 = arguments.length;
switch (G__51198) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51201 = arguments.length;
var i__37480__auto___51202 = (0);
while(true){
if((i__37480__auto___51202 < len__37479__auto___51201)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51202]));

var G__51203 = (i__37480__auto___51202 + (1));
i__37480__auto___51202 = G__51203;
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

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq51193){
var G__51194 = cljs.core.first.call(null,seq51193);
var seq51193__$1 = cljs.core.next.call(null,seq51193);
var G__51195 = cljs.core.first.call(null,seq51193__$1);
var seq51193__$2 = cljs.core.next.call(null,seq51193__$1);
var G__51196 = cljs.core.first.call(null,seq51193__$2);
var seq51193__$3 = cljs.core.next.call(null,seq51193__$2);
var G__51197 = cljs.core.first.call(null,seq51193__$3);
var seq51193__$4 = cljs.core.next.call(null,seq51193__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__51194,G__51195,G__51196,G__51197,seq51193__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__37519__auto___51211 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__51210 = arguments.length;
switch (G__51210) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51213 = arguments.length;
var i__37480__auto___51214 = (0);
while(true){
if((i__37480__auto___51214 < len__37479__auto___51213)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51214]));

var G__51215 = (i__37480__auto___51214 + (1));
i__37480__auto___51214 = G__51215;
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

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq51205){
var G__51206 = cljs.core.first.call(null,seq51205);
var seq51205__$1 = cljs.core.next.call(null,seq51205);
var G__51207 = cljs.core.first.call(null,seq51205__$1);
var seq51205__$2 = cljs.core.next.call(null,seq51205__$1);
var G__51208 = cljs.core.first.call(null,seq51205__$2);
var seq51205__$3 = cljs.core.next.call(null,seq51205__$2);
var G__51209 = cljs.core.first.call(null,seq51205__$3);
var seq51205__$4 = cljs.core.next.call(null,seq51205__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__51206,G__51207,G__51208,G__51209,seq51205__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__37519__auto___51223 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__51222 = arguments.length;
switch (G__51222) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51225 = arguments.length;
var i__37480__auto___51226 = (0);
while(true){
if((i__37480__auto___51226 < len__37479__auto___51225)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51226]));

var G__51227 = (i__37480__auto___51226 + (1));
i__37480__auto___51226 = G__51227;
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

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq51217){
var G__51218 = cljs.core.first.call(null,seq51217);
var seq51217__$1 = cljs.core.next.call(null,seq51217);
var G__51219 = cljs.core.first.call(null,seq51217__$1);
var seq51217__$2 = cljs.core.next.call(null,seq51217__$1);
var G__51220 = cljs.core.first.call(null,seq51217__$2);
var seq51217__$3 = cljs.core.next.call(null,seq51217__$2);
var G__51221 = cljs.core.first.call(null,seq51217__$3);
var seq51217__$4 = cljs.core.next.call(null,seq51217__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__51218,G__51219,G__51220,G__51221,seq51217__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__37519__auto___51235 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__51234 = arguments.length;
switch (G__51234) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51237 = arguments.length;
var i__37480__auto___51238 = (0);
while(true){
if((i__37480__auto___51238 < len__37479__auto___51237)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51238]));

var G__51239 = (i__37480__auto___51238 + (1));
i__37480__auto___51238 = G__51239;
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

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq51229){
var G__51230 = cljs.core.first.call(null,seq51229);
var seq51229__$1 = cljs.core.next.call(null,seq51229);
var G__51231 = cljs.core.first.call(null,seq51229__$1);
var seq51229__$2 = cljs.core.next.call(null,seq51229__$1);
var G__51232 = cljs.core.first.call(null,seq51229__$2);
var seq51229__$3 = cljs.core.next.call(null,seq51229__$2);
var G__51233 = cljs.core.first.call(null,seq51229__$3);
var seq51229__$4 = cljs.core.next.call(null,seq51229__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__51230,G__51231,G__51232,G__51233,seq51229__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__37519__auto___51247 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__51246 = arguments.length;
switch (G__51246) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51249 = arguments.length;
var i__37480__auto___51250 = (0);
while(true){
if((i__37480__auto___51250 < len__37479__auto___51249)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51250]));

var G__51251 = (i__37480__auto___51250 + (1));
i__37480__auto___51250 = G__51251;
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

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq51241){
var G__51242 = cljs.core.first.call(null,seq51241);
var seq51241__$1 = cljs.core.next.call(null,seq51241);
var G__51243 = cljs.core.first.call(null,seq51241__$1);
var seq51241__$2 = cljs.core.next.call(null,seq51241__$1);
var G__51244 = cljs.core.first.call(null,seq51241__$2);
var seq51241__$3 = cljs.core.next.call(null,seq51241__$2);
var G__51245 = cljs.core.first.call(null,seq51241__$3);
var seq51241__$4 = cljs.core.next.call(null,seq51241__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__51242,G__51243,G__51244,G__51245,seq51241__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__37519__auto___51252 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__37519__auto___51253 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__37519__auto___51254 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51255 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51256 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__37519__auto___51266 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__51265 = arguments.length;
switch (G__51265) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51268 = arguments.length;
var i__37480__auto___51269 = (0);
while(true){
if((i__37480__auto___51269 < len__37479__auto___51268)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51269]));

var G__51270 = (i__37480__auto___51269 + (1));
i__37480__auto___51269 = G__51270;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51257__auto__","x__51257__auto__",2070486444,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51258__auto__","y__51258__auto__",1552825581,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51257__auto__","x__51257__auto__",2070486444,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51258__auto__","y__51258__auto__",1552825581,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51257__auto__","x__51257__auto__",2070486444,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51258__auto__","y__51258__auto__",1552825581,null)))));
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

cljs.core$macros.max.cljs$lang$applyTo = (function (seq51260){
var G__51261 = cljs.core.first.call(null,seq51260);
var seq51260__$1 = cljs.core.next.call(null,seq51260);
var G__51262 = cljs.core.first.call(null,seq51260__$1);
var seq51260__$2 = cljs.core.next.call(null,seq51260__$1);
var G__51263 = cljs.core.first.call(null,seq51260__$2);
var seq51260__$3 = cljs.core.next.call(null,seq51260__$2);
var G__51264 = cljs.core.first.call(null,seq51260__$3);
var seq51260__$4 = cljs.core.next.call(null,seq51260__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__51261,G__51262,G__51263,G__51264,seq51260__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__37519__auto___51280 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__51279 = arguments.length;
switch (G__51279) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51282 = arguments.length;
var i__37480__auto___51283 = (0);
while(true){
if((i__37480__auto___51283 < len__37479__auto___51282)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51283]));

var G__51284 = (i__37480__auto___51283 + (1));
i__37480__auto___51283 = G__51284;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51271__auto__","x__51271__auto__",785398054,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51272__auto__","y__51272__auto__",-669434312,null)),(function (){var x__37170__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51271__auto__","x__51271__auto__",785398054,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51272__auto__","y__51272__auto__",-669434312,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51271__auto__","x__51271__auto__",785398054,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51272__auto__","y__51272__auto__",-669434312,null)))));
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

cljs.core$macros.min.cljs$lang$applyTo = (function (seq51274){
var G__51275 = cljs.core.first.call(null,seq51274);
var seq51274__$1 = cljs.core.next.call(null,seq51274);
var G__51276 = cljs.core.first.call(null,seq51274__$1);
var seq51274__$2 = cljs.core.next.call(null,seq51274__$1);
var G__51277 = cljs.core.first.call(null,seq51274__$2);
var seq51274__$3 = cljs.core.next.call(null,seq51274__$2);
var G__51278 = cljs.core.first.call(null,seq51274__$3);
var seq51274__$4 = cljs.core.next.call(null,seq51274__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__51275,G__51276,G__51277,G__51278,seq51274__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__37519__auto___51285 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__37519__auto___51286 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__37519__auto___51294 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__51293 = arguments.length;
switch (G__51293) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51296 = arguments.length;
var i__37480__auto___51297 = (0);
while(true){
if((i__37480__auto___51297 < len__37479__auto___51296)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51297]));

var G__51298 = (i__37480__auto___51297 + (1));
i__37480__auto___51297 = G__51298;
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

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq51288){
var G__51289 = cljs.core.first.call(null,seq51288);
var seq51288__$1 = cljs.core.next.call(null,seq51288);
var G__51290 = cljs.core.first.call(null,seq51288__$1);
var seq51288__$2 = cljs.core.next.call(null,seq51288__$1);
var G__51291 = cljs.core.first.call(null,seq51288__$2);
var seq51288__$3 = cljs.core.next.call(null,seq51288__$2);
var G__51292 = cljs.core.first.call(null,seq51288__$3);
var seq51288__$4 = cljs.core.next.call(null,seq51288__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__51289,G__51290,G__51291,G__51292,seq51288__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__37519__auto___51306 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__51305 = arguments.length;
switch (G__51305) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51308 = arguments.length;
var i__37480__auto___51309 = (0);
while(true){
if((i__37480__auto___51309 < len__37479__auto___51308)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51309]));

var G__51310 = (i__37480__auto___51309 + (1));
i__37480__auto___51309 = G__51310;
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

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq51300){
var G__51301 = cljs.core.first.call(null,seq51300);
var seq51300__$1 = cljs.core.next.call(null,seq51300);
var G__51302 = cljs.core.first.call(null,seq51300__$1);
var seq51300__$2 = cljs.core.next.call(null,seq51300__$1);
var G__51303 = cljs.core.first.call(null,seq51300__$2);
var seq51300__$3 = cljs.core.next.call(null,seq51300__$2);
var G__51304 = cljs.core.first.call(null,seq51300__$3);
var seq51300__$4 = cljs.core.next.call(null,seq51300__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__51301,G__51302,G__51303,G__51304,seq51300__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__37519__auto___51318 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__51317 = arguments.length;
switch (G__51317) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51320 = arguments.length;
var i__37480__auto___51321 = (0);
while(true){
if((i__37480__auto___51321 < len__37479__auto___51320)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51321]));

var G__51322 = (i__37480__auto___51321 + (1));
i__37480__auto___51321 = G__51322;
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

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq51312){
var G__51313 = cljs.core.first.call(null,seq51312);
var seq51312__$1 = cljs.core.next.call(null,seq51312);
var G__51314 = cljs.core.first.call(null,seq51312__$1);
var seq51312__$2 = cljs.core.next.call(null,seq51312__$1);
var G__51315 = cljs.core.first.call(null,seq51312__$2);
var seq51312__$3 = cljs.core.next.call(null,seq51312__$2);
var G__51316 = cljs.core.first.call(null,seq51312__$3);
var seq51312__$4 = cljs.core.next.call(null,seq51312__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__51313,G__51314,G__51315,G__51316,seq51312__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__37519__auto___51323 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__37519__auto___51331 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__51330 = arguments.length;
switch (G__51330) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51333 = arguments.length;
var i__37480__auto___51334 = (0);
while(true){
if((i__37480__auto___51334 < len__37479__auto___51333)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51334]));

var G__51335 = (i__37480__auto___51334 + (1));
i__37480__auto___51334 = G__51335;
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

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq51325){
var G__51326 = cljs.core.first.call(null,seq51325);
var seq51325__$1 = cljs.core.next.call(null,seq51325);
var G__51327 = cljs.core.first.call(null,seq51325__$1);
var seq51325__$2 = cljs.core.next.call(null,seq51325__$1);
var G__51328 = cljs.core.first.call(null,seq51325__$2);
var seq51325__$3 = cljs.core.next.call(null,seq51325__$2);
var G__51329 = cljs.core.first.call(null,seq51325__$3);
var seq51325__$4 = cljs.core.next.call(null,seq51325__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__51326,G__51327,G__51328,G__51329,seq51325__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__37519__auto___51343 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__51342 = arguments.length;
switch (G__51342) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51345 = arguments.length;
var i__37480__auto___51346 = (0);
while(true){
if((i__37480__auto___51346 < len__37479__auto___51345)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51346]));

var G__51347 = (i__37480__auto___51346 + (1));
i__37480__auto___51346 = G__51347;
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

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq51337){
var G__51338 = cljs.core.first.call(null,seq51337);
var seq51337__$1 = cljs.core.next.call(null,seq51337);
var G__51339 = cljs.core.first.call(null,seq51337__$1);
var seq51337__$2 = cljs.core.next.call(null,seq51337__$1);
var G__51340 = cljs.core.first.call(null,seq51337__$2);
var seq51337__$3 = cljs.core.next.call(null,seq51337__$2);
var G__51341 = cljs.core.first.call(null,seq51337__$3);
var seq51337__$4 = cljs.core.next.call(null,seq51337__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__51338,G__51339,G__51340,G__51341,seq51337__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__37519__auto___51348 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__37519__auto___51349 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__37519__auto___51350 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__37519__auto___51351 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__37519__auto___51352 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__37519__auto___51353 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__37519__auto___51354 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__37519__auto___51355 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__37519__auto___51356 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__37519__auto___51357 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__37170__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__37519__auto___51359 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51358__auto__","h__51358__auto__",-2125912931,null)),(function (){var x__37170__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51358__auto__","h__51358__auto__",-2125912931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51358__auto__","h__51358__auto__",-2125912931,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51358__auto__","h__51358__auto__",-2125912931,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51358__auto__","h__51358__auto__",-2125912931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51358__auto__","h__51358__auto__",-2125912931,null)))));
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51360__auto__","x__51360__auto__",1470650341,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51360__auto__","x__51360__auto__",1470650341,null)))));
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
var ret__37519__auto___51368 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51369 = arguments.length;
var i__37480__auto___51370 = (0);
while(true){
if((i__37480__auto___51370 < len__37479__auto___51369)){
args__37486__auto__.push((arguments[i__37480__auto___51370]));

var G__51371 = (i__37480__auto___51370 + (1));
i__37480__auto___51370 = G__51371;
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

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq51361){
var G__51362 = cljs.core.first.call(null,seq51361);
var seq51361__$1 = cljs.core.next.call(null,seq51361);
var G__51363 = cljs.core.first.call(null,seq51361__$1);
var seq51361__$2 = cljs.core.next.call(null,seq51361__$1);
var G__51364 = cljs.core.first.call(null,seq51361__$2);
var seq51361__$3 = cljs.core.next.call(null,seq51361__$2);
var G__51365 = cljs.core.first.call(null,seq51361__$3);
var seq51361__$4 = cljs.core.next.call(null,seq51361__$3);
var G__51366 = cljs.core.first.call(null,seq51361__$4);
var seq51361__$5 = cljs.core.next.call(null,seq51361__$4);
var G__51367 = cljs.core.first.call(null,seq51361__$5);
var seq51361__$6 = cljs.core.next.call(null,seq51361__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__51362,G__51363,G__51364,G__51365,G__51366,G__51367,seq51361__$6);
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
})(),(function (){var x__37170__auto__ = clojure.walk.postwalk.call(null,(function (p1__51372_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__51372_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__51372_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__51372_SHARP_));
} else {
return p1__51372_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
var ret__37519__auto___51377 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__51373,fkv){
var vec__51374 = p__51373;
var f1 = cljs.core.nth.call(null,vec__51374,(0),null);
var k = cljs.core.nth.call(null,vec__51374,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__37519__auto___51381 = (function (){
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
var len__37479__auto___51382 = arguments.length;
var i__37480__auto___51383 = (0);
while(true){
if((i__37480__auto___51383 < len__37479__auto___51382)){
args__37486__auto__.push((arguments[i__37480__auto___51383]));

var G__51384 = (i__37480__auto___51383 + (1));
i__37480__auto___51383 = G__51384;
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

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq51378){
var G__51379 = cljs.core.first.call(null,seq51378);
var seq51378__$1 = cljs.core.next.call(null,seq51378);
var G__51380 = cljs.core.first.call(null,seq51378__$1);
var seq51378__$2 = cljs.core.next.call(null,seq51378__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__51379,G__51380,seq51378__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__37519__auto___51389 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51390 = arguments.length;
var i__37480__auto___51391 = (0);
while(true){
if((i__37480__auto___51391 < len__37479__auto___51390)){
args__37486__auto__.push((arguments[i__37480__auto___51391]));

var G__51392 = (i__37480__auto___51391 + (1));
i__37480__auto___51391 = G__51392;
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

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq51385){
var G__51386 = cljs.core.first.call(null,seq51385);
var seq51385__$1 = cljs.core.next.call(null,seq51385);
var G__51387 = cljs.core.first.call(null,seq51385__$1);
var seq51385__$2 = cljs.core.next.call(null,seq51385__$1);
var G__51388 = cljs.core.first.call(null,seq51385__$2);
var seq51385__$3 = cljs.core.next.call(null,seq51385__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51386,G__51387,G__51388,seq51385__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__37519__auto___51397 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51398 = arguments.length;
var i__37480__auto___51399 = (0);
while(true){
if((i__37480__auto___51399 < len__37479__auto___51398)){
args__37486__auto__.push((arguments[i__37480__auto___51399]));

var G__51400 = (i__37480__auto___51399 + (1));
i__37480__auto___51399 = G__51400;
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

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq51393){
var G__51394 = cljs.core.first.call(null,seq51393);
var seq51393__$1 = cljs.core.next.call(null,seq51393);
var G__51395 = cljs.core.first.call(null,seq51393__$1);
var seq51393__$2 = cljs.core.next.call(null,seq51393__$1);
var G__51396 = cljs.core.first.call(null,seq51393__$2);
var seq51393__$3 = cljs.core.next.call(null,seq51393__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__51394,G__51395,G__51396,seq51393__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__37519__auto___51401 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__37519__auto___51406 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51407 = arguments.length;
var i__37480__auto___51408 = (0);
while(true){
if((i__37480__auto___51408 < len__37479__auto___51407)){
args__37486__auto__.push((arguments[i__37480__auto___51408]));

var G__51409 = (i__37480__auto___51408 + (1));
i__37480__auto___51408 = G__51409;
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

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq51402){
var G__51403 = cljs.core.first.call(null,seq51402);
var seq51402__$1 = cljs.core.next.call(null,seq51402);
var G__51404 = cljs.core.first.call(null,seq51402__$1);
var seq51402__$2 = cljs.core.next.call(null,seq51402__$1);
var G__51405 = cljs.core.first.call(null,seq51402__$2);
var seq51402__$3 = cljs.core.next.call(null,seq51402__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__51403,G__51404,G__51405,seq51402__$3);
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
var G__51410 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__51411 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__51410;
s = G__51411;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__51412){
var vec__51413 = p__51412;
var p = cljs.core.nth.call(null,vec__51413,(0),null);
var sigs = cljs.core.nth.call(null,vec__51413,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__51413,p,sigs){
return (function (p__51416){
var vec__51417 = p__51416;
var seq__51418 = cljs.core.seq.call(null,vec__51417);
var first__51419 = cljs.core.first.call(null,seq__51418);
var seq__51418__$1 = cljs.core.next.call(null,seq__51418);
var f = first__51419;
var meths = seq__51418__$1;
var form = vec__51417;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(psym,pfn_prefix,vec__51413,p,sigs))
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
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__51420){
var vec__51421 = p__51420;
var seq__51422 = cljs.core.seq.call(null,vec__51421);
var first__51423 = cljs.core.first.call(null,seq__51422);
var seq__51422__$1 = cljs.core.next.call(null,seq__51422);
var vec__51424 = first__51423;
var seq__51425 = cljs.core.seq.call(null,vec__51424);
var first__51426 = cljs.core.first.call(null,seq__51425);
var seq__51425__$1 = cljs.core.next.call(null,seq__51425);
var this$ = first__51426;
var args = seq__51425__$1;
var sig = vec__51424;
var body = seq__51422__$1;
var x__37170__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto____$1);
})(),x__37170__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__51427){
var vec__51428 = p__51427;
var seq__51429 = cljs.core.seq.call(null,vec__51428);
var first__51430 = cljs.core.first.call(null,seq__51429);
var seq__51429__$1 = cljs.core.next.call(null,seq__51429);
var vec__51431 = first__51430;
var seq__51432 = cljs.core.seq.call(null,vec__51431);
var first__51433 = cljs.core.first.call(null,seq__51432);
var seq__51432__$1 = cljs.core.next.call(null,seq__51432);
var this$ = first__51433;
var args = seq__51432__$1;
var sig = vec__51431;
var body = seq__51429__$1;
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
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__51434){
var vec__51435 = p__51434;
var seq__51436 = cljs.core.seq.call(null,vec__51435);
var first__51437 = cljs.core.first.call(null,seq__51436);
var seq__51436__$1 = cljs.core.next.call(null,seq__51436);
var vec__51438 = first__51437;
var seq__51439 = cljs.core.seq.call(null,vec__51438);
var first__51440 = cljs.core.first.call(null,seq__51439);
var seq__51439__$1 = cljs.core.next.call(null,seq__51439);
var this$ = first__51440;
var args = seq__51439__$1;
var sig = vec__51438;
var body = seq__51436__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__37170__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__51441){
var vec__51442 = p__51441;
var seq__51443 = cljs.core.seq.call(null,vec__51442);
var first__51444 = cljs.core.first.call(null,seq__51443);
var seq__51443__$1 = cljs.core.next.call(null,seq__51443);
var vec__51445 = first__51444;
var seq__51446 = cljs.core.seq.call(null,vec__51445);
var first__51447 = cljs.core.first.call(null,seq__51446);
var seq__51446__$1 = cljs.core.next.call(null,seq__51446);
var this$ = first__51447;
var args = seq__51446__$1;
var sig = vec__51445;
var body = seq__51443__$1;
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
return cljs.core.map.call(null,(function (p__51449){
var vec__51450 = p__51449;
var seq__51451 = cljs.core.seq.call(null,vec__51450);
var first__51452 = cljs.core.first.call(null,seq__51451);
var seq__51451__$1 = cljs.core.next.call(null,seq__51451);
var f = first__51452;
var meths = seq__51451__$1;
var form = vec__51450;
var vec__51453 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__51453,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__51453,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__51453,f__$1,meths__$1,vec__51450,seq__51451,first__51452,seq__51451__$1,f,meths,form){
return (function (p1__51448_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__51448_SHARP_);
});})(vec__51453,f__$1,meths__$1,vec__51450,seq__51451,first__51452,seq__51451__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__51457){
var vec__51458 = p__51457;
var seq__51459 = cljs.core.seq.call(null,vec__51458);
var first__51460 = cljs.core.first.call(null,seq__51459);
var seq__51459__$1 = cljs.core.next.call(null,seq__51459);
var f = first__51460;
var meths = seq__51459__$1;
var form = vec__51458;
return cljs.core.map.call(null,((function (vec__51458,seq__51459,first__51460,seq__51459__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(vec__51458,seq__51459,first__51460,seq__51459__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__51458,seq__51459,first__51460,seq__51459__$1,f,meths,form){
return (function (p1__51456_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__51456_SHARP_);
});})(vec__51458,seq__51459,first__51460,seq__51459__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__51462){
var vec__51463 = p__51462;
var seq__51464 = cljs.core.seq.call(null,vec__51463);
var first__51465 = cljs.core.first.call(null,seq__51464);
var seq__51464__$1 = cljs.core.next.call(null,seq__51464);
var f = first__51465;
var meths = seq__51464__$1;
var form = vec__51463;
var meths__$1 = cljs.core.map.call(null,((function (vec__51463,seq__51464,first__51465,seq__51464__$1,f,meths,form){
return (function (p1__51461_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__51461_SHARP_);
});})(vec__51463,seq__51464,first__51465,seq__51464__$1,f,meths,form))
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
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__51466){
var vec__51467 = p__51466;
var seq__51468 = cljs.core.seq.call(null,vec__51467);
var first__51469 = cljs.core.first.call(null,seq__51468);
var seq__51468__$1 = cljs.core.next.call(null,seq__51468);
var f = first__51469;
var meths = seq__51468__$1;
var form = vec__51467;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__51467,seq__51468,first__51469,seq__51468__$1,f,meths,form){
return (function (p__51470){
var vec__51471 = p__51470;
var seq__51472 = cljs.core.seq.call(null,vec__51471);
var first__51473 = cljs.core.first.call(null,seq__51472);
var seq__51472__$1 = cljs.core.next.call(null,seq__51472);
var sig = first__51473;
var body = seq__51472__$1;
var meth = vec__51471;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(pf,vec__51467,seq__51468,first__51469,seq__51468__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__51474){
var vec__51475 = p__51474;
var p = cljs.core.nth.call(null,vec__51475,(0),null);
var sigs = cljs.core.nth.call(null,vec__51475,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__51475,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__51475,p,sigs))
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
var vec__51478 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__51478,(0),null);
var sigs = cljs.core.nth.call(null,vec__51478,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_51481 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_51481))){
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

var G__51482 = cljs.core.next.call(null,sigs__$1);
var G__51483 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__51482;
seen = G__51483;
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

var seen_51487 = cljs.core.PersistentHashSet.EMPTY;
var methods_51488__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_51488__$1)){
var vec__51484_51489 = cljs.core.first.call(null,methods_51488__$1);
var fname_51490 = cljs.core.nth.call(null,vec__51484_51489,(0),null);
var method_51491 = vec__51484_51489;
if(cljs.core.contains_QMARK_.call(null,seen_51487,fname_51490)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_51490], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_51491);

var G__51492 = cljs.core.conj.call(null,seen_51487,fname_51490);
var G__51493 = cljs.core.next.call(null,methods_51488__$1);
seen_51487 = G__51492;
methods_51488__$1 = G__51493;
continue;
} else {
}
break;
}

var G__51494 = cljs.core.conj.call(null,protos,proto);
var G__51495 = impls__$2;
protos = G__51494;
impls__$1 = G__51495;
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
var ret__37519__auto___51504 = (function (){
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
var len__37479__auto___51505 = arguments.length;
var i__37480__auto___51506 = (0);
while(true){
if((i__37480__auto___51506 < len__37479__auto___51505)){
args__37486__auto__.push((arguments[i__37480__auto___51506]));

var G__51507 = (i__37480__auto___51506 + (1));
i__37480__auto___51506 = G__51507;
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
var vec__51501 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__51501,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__51501,(1),null);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__51501,type,assign_impls){
return (function (p1__51496_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__51496_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__51501,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq51497){
var G__51498 = cljs.core.first.call(null,seq51497);
var seq51497__$1 = cljs.core.next.call(null,seq51497);
var G__51499 = cljs.core.first.call(null,seq51497__$1);
var seq51497__$2 = cljs.core.next.call(null,seq51497__$1);
var G__51500 = cljs.core.first.call(null,seq51497__$2);
var seq51497__$3 = cljs.core.next.call(null,seq51497__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__51498,G__51499,G__51500,seq51497__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__51509){
var vec__51510 = p__51509;
var f = cljs.core.nth.call(null,vec__51510,(0),null);
var sigs = cljs.core.nth.call(null,vec__51510,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__51510,f,sigs){
return (function (p1__51508_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__51508_SHARP_),cljs.core.nnext.call(null,p1__51508_SHARP_));
});})(vec__51510,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__51514 = arguments.length;
switch (G__51514) {
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
var G__51516 = ret__$1;
var G__51517 = specs__$2;
ret = G__51516;
specs__$1 = G__51517;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__51518_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__51518_SHARP_));
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
var ret__37519__auto___51530 = (function (){
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
var len__37479__auto___51531 = arguments.length;
var i__37480__auto___51532 = (0);
while(true){
if((i__37480__auto___51532 < len__37479__auto___51531)){
args__37486__auto__.push((arguments[i__37480__auto___51532]));

var G__51533 = (i__37480__auto___51532 + (1));
i__37480__auto___51532 = G__51533;
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
var vec__51527 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__51527,(0),null);
var pmasks = cljs.core.nth.call(null,vec__51527,(1),null);
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51519__auto__","this__51519__auto__",-1405716422,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51520__auto__","writer__51520__auto__",742340105,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__51521__auto__","opt__51521__auto__",1147185220,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51520__auto__","writer__51520__auto__",742340105,null)),(function (){var x__37170__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
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

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq51522){
var G__51523 = cljs.core.first.call(null,seq51522);
var seq51522__$1 = cljs.core.next.call(null,seq51522);
var G__51524 = cljs.core.first.call(null,seq51522__$1);
var seq51522__$2 = cljs.core.next.call(null,seq51522__$1);
var G__51525 = cljs.core.first.call(null,seq51522__$2);
var seq51522__$3 = cljs.core.next.call(null,seq51522__$2);
var G__51526 = cljs.core.first.call(null,seq51522__$3);
var seq51522__$4 = cljs.core.next.call(null,seq51522__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__51523,G__51524,G__51525,G__51526,seq51522__$4);
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
return (function (p1__51534_SHARP_){
return cljs.core.with_meta.call(null,p1__51534_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51535__auto__","this__51535__auto__",741645368,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51536__auto__","this__51536__auto__",-1982635778,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51536__auto__","this__51536__auto__",-1982635778,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__51537__auto__","coll__51537__auto__",-374043069,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__37170__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__51537__auto__","coll__51537__auto__",-374043069,null)))));
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
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51538__auto__","this__51538__auto__",-1580874996,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51539__auto__","this__51539__auto__",-1395351317,null)),(function (){var x__37170__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51540__auto__","this__51540__auto__",164446464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51541__auto__","k__51541__auto__",1088933969,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51540__auto__","this__51540__auto__",164446464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51541__auto__","k__51541__auto__",1088933969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51542__auto__","this__51542__auto__",-1320169238,null)),(function (){var x__37170__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__51543__auto__","else__51543__auto__",1980281634,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__37170__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__37170__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__51543__auto__","else__51543__auto__",1980281634,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51544__auto__","this__51544__auto__",1050434703,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__37170__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51545__auto__","this__51545__auto__",-928298795,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51546__auto__","entry__51546__auto__",238126331,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51546__auto__","entry__51546__auto__",238126331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51545__auto__","this__51545__auto__",-928298795,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51546__auto__","entry__51546__auto__",238126331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51546__auto__","entry__51546__auto__",238126331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51545__auto__","this__51545__auto__",-928298795,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51546__auto__","entry__51546__auto__",238126331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51547__auto__","this__51547__auto__",-941300338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51548__auto__","k__51548__auto__",-283096709,null)),(function (){var x__37170__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51548__auto__","k__51548__auto__",-283096709,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51548__auto__","k__51548__auto__",-283096709,null)),(function (){var x__37170__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51549__auto__","this__51549__auto__",537083320,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51550__auto__","k__51550__auto__",499595515,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51550__auto__","k__51550__auto__",499595515,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51549__auto__","this__51549__auto__",537083320,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51550__auto__","k__51550__auto__",499595515,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51550__auto__","k__51550__auto__",499595515,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51552__auto__","this__51552__auto__",-1534528321,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__51551_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.keyword.call(null,p1__51551_SHARP_);
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = p1__51551_SHARP_;
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
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51554__auto__","this__51554__auto__",-707616219,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51555__auto__","writer__51555__auto__",-294115584,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__51556__auto__","opts__51556__auto__",398617117,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__51557__auto__","pr-pair__51557__auto__",-2048124255,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__51558__auto__","keyval__51558__auto__",1958289500,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51555__auto__","writer__51555__auto__",-294115584,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__51556__auto__","opts__51556__auto__",398617117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__51558__auto__","keyval__51558__auto__",1958289500,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51555__auto__","writer__51555__auto__",-294115584,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__51557__auto__","pr-pair__51557__auto__",-2048124255,null)),(function (){var x__37170__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__51556__auto__","opts__51556__auto__",398617117,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__51553_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = cljs.core.keyword.call(null,p1__51553_SHARP_);
return cljs.core._conj.call(null,(function (){var x__37170__auto____$1 = p1__51553_SHARP_;
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
var vec__51559 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__51559,(0),null);
var pmasks = cljs.core.nth.call(null,vec__51559,(1),null);
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
var ret__37519__auto___51569 = (function (){
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
var len__37479__auto___51570 = arguments.length;
var i__37480__auto___51571 = (0);
while(true){
if((i__37480__auto___51571 < len__37479__auto___51570)){
args__37486__auto__.push((arguments[i__37480__auto___51571]));

var G__51572 = (i__37480__auto___51571 + (1));
i__37480__auto___51571 = G__51572;
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51562__auto__","this__51562__auto__",342891342,null))))));
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51562__auto__","this__51562__auto__",342891342,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51563__auto__","writer__51563__auto__",-1632830904,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51563__auto__","writer__51563__auto__",-1632830904,null)),(function (){var x__37170__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
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

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq51564){
var G__51565 = cljs.core.first.call(null,seq51564);
var seq51564__$1 = cljs.core.next.call(null,seq51564);
var G__51566 = cljs.core.first.call(null,seq51564__$1);
var seq51564__$2 = cljs.core.next.call(null,seq51564__$1);
var G__51567 = cljs.core.first.call(null,seq51564__$2);
var seq51564__$3 = cljs.core.next.call(null,seq51564__$2);
var G__51568 = cljs.core.first.call(null,seq51564__$3);
var seq51564__$4 = cljs.core.next.call(null,seq51564__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__51565,G__51566,G__51567,G__51568,seq51564__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__37519__auto___51600 = (function (){
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
var len__37479__auto___51601 = arguments.length;
var i__37480__auto___51602 = (0);
while(true){
if((i__37480__auto___51602 < len__37479__auto___51601)){
args__37486__auto__.push((arguments[i__37480__auto___51602]));

var G__51603 = (i__37480__auto___51602 + (1));
i__37480__auto___51602 = G__51603;
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
var vec__51579 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__51579,(0),null);
var methods$ = cljs.core.nth.call(null,vec__51579,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__51579,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__51579,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__51582 = cljs.core.seq.call(null,methods$);
var chunk__51583 = null;
var count__51584 = (0);
var i__51585 = (0);
while(true){
if((i__51585 < count__51584)){
var vec__51586 = cljs.core._nth.call(null,chunk__51583,i__51585);
var seq__51587 = cljs.core.seq.call(null,vec__51586);
var first__51588 = cljs.core.first.call(null,seq__51587);
var seq__51587__$1 = cljs.core.next.call(null,seq__51587);
var mname = first__51588;
var arities = seq__51587__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__51604 = seq__51582;
var G__51605 = chunk__51583;
var G__51606 = count__51584;
var G__51607 = (i__51585 + (1));
seq__51582 = G__51604;
chunk__51583 = G__51605;
count__51584 = G__51606;
i__51585 = G__51607;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51582);
if(temp__4657__auto__){
var seq__51582__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51582__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__51582__$1);
var G__51608 = cljs.core.chunk_rest.call(null,seq__51582__$1);
var G__51609 = c__37147__auto__;
var G__51610 = cljs.core.count.call(null,c__37147__auto__);
var G__51611 = (0);
seq__51582 = G__51608;
chunk__51583 = G__51609;
count__51584 = G__51610;
i__51585 = G__51611;
continue;
} else {
var vec__51589 = cljs.core.first.call(null,seq__51582__$1);
var seq__51590 = cljs.core.seq.call(null,vec__51589);
var first__51591 = cljs.core.first.call(null,seq__51590);
var seq__51590__$1 = cljs.core.next.call(null,seq__51590);
var mname = first__51591;
var arities = seq__51590__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__51612 = cljs.core.next.call(null,seq__51582__$1);
var G__51613 = null;
var G__51614 = (0);
var G__51615 = (0);
seq__51582 = G__51612;
chunk__51583 = G__51613;
count__51584 = G__51614;
i__51585 = G__51615;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51573__auto__","x__51573__auto__",-2131502489,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__37170__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__37170__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51574__auto__","m__51574__auto__",854253770,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51573__auto__","x__51573__auto__",-2131502489,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51574__auto__","m__51574__auto__",854253770,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51574__auto__","m__51574__auto__",854253770,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51574__auto__","m__51574__auto__",854253770,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51574__auto__","m__51574__auto__",854253770,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51574__auto__","m__51574__auto__",854253770,null)),sig__$1)));
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
});})(p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__51592){
var vec__51593 = p__51592;
var seq__51594 = cljs.core.seq.call(null,vec__51593);
var first__51595 = cljs.core.first.call(null,seq__51594);
var seq__51594__$1 = cljs.core.next.call(null,seq__51594);
var fname = first__51595;
var sigs = seq__51594__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__51596){
var vec__51597 = p__51596;
var seq__51598 = cljs.core.seq.call(null,vec__51597);
var first__51599 = cljs.core.first.call(null,seq__51598);
var seq__51598__$1 = cljs.core.next.call(null,seq__51598);
var fname = first__51599;
var sigs = seq__51598__$1;
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
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__51597,seq__51598,first__51599,seq__51598__$1,fname,sigs,p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__51597,seq__51598,first__51599,seq__51598__$1,fname,sigs,p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__51579,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
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

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq51575){
var G__51576 = cljs.core.first.call(null,seq51575);
var seq51575__$1 = cljs.core.next.call(null,seq51575);
var G__51577 = cljs.core.first.call(null,seq51575__$1);
var seq51575__$2 = cljs.core.next.call(null,seq51575__$1);
var G__51578 = cljs.core.first.call(null,seq51575__$2);
var seq51575__$3 = cljs.core.next.call(null,seq51575__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__51576,G__51577,G__51578,seq51575__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__37519__auto___51619 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__51616 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__51616,(0),null);
var bit = cljs.core.nth.call(null,vec__51616,(1),null);
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

var ret__37519__auto___51623 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__51620 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__51620,(0),null);
var bit = cljs.core.nth.call(null,vec__51620,(1),null);
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

var ret__37519__auto___51627 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51628 = arguments.length;
var i__37480__auto___51629 = (0);
while(true){
if((i__37480__auto___51629 < len__37479__auto___51628)){
args__37486__auto__.push((arguments[i__37480__auto___51629]));

var G__51630 = (i__37480__auto___51629 + (1));
i__37480__auto___51629 = G__51630;
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

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq51624){
var G__51625 = cljs.core.first.call(null,seq51624);
var seq51624__$1 = cljs.core.next.call(null,seq51624);
var G__51626 = cljs.core.first.call(null,seq51624__$1);
var seq51624__$2 = cljs.core.next.call(null,seq51624__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__51625,G__51626,seq51624__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__37519__auto___51634 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51635 = arguments.length;
var i__37480__auto___51636 = (0);
while(true){
if((i__37480__auto___51636 < len__37479__auto___51635)){
args__37486__auto__.push((arguments[i__37480__auto___51636]));

var G__51637 = (i__37480__auto___51636 + (1));
i__37480__auto___51636 = G__51637;
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

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq51631){
var G__51632 = cljs.core.first.call(null,seq51631);
var seq51631__$1 = cljs.core.next.call(null,seq51631);
var G__51633 = cljs.core.first.call(null,seq51631__$1);
var seq51631__$2 = cljs.core.next.call(null,seq51631__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__51632,G__51633,seq51631__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__37519__auto___51646 = (function (){
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
var len__37479__auto___51647 = arguments.length;
var i__37480__auto___51648 = (0);
while(true){
if((i__37480__auto___51648 < len__37479__auto___51647)){
args__37486__auto__.push((arguments[i__37480__auto___51648]));

var G__51649 = (i__37480__auto___51648 + (1));
i__37480__auto___51648 = G__51649;
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
return (function (p__51642){
var vec__51643 = p__51642;
var k = cljs.core.nth.call(null,vec__51643,(0),null);
var v = cljs.core.nth.call(null,vec__51643,(1),null);
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

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq51638){
var G__51639 = cljs.core.first.call(null,seq51638);
var seq51638__$1 = cljs.core.next.call(null,seq51638);
var G__51640 = cljs.core.first.call(null,seq51638__$1);
var seq51638__$2 = cljs.core.next.call(null,seq51638__$1);
var G__51641 = cljs.core.first.call(null,seq51638__$2);
var seq51638__$3 = cljs.core.next.call(null,seq51638__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__51639,G__51640,G__51641,seq51638__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__37519__auto___51654 = (function (){
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
var len__37479__auto___51655 = arguments.length;
var i__37480__auto___51656 = (0);
while(true){
if((i__37480__auto___51656 < len__37479__auto___51655)){
args__37486__auto__.push((arguments[i__37480__auto___51656]));

var G__51657 = (i__37480__auto___51656 + (1));
i__37480__auto___51656 = G__51657;
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

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq51650){
var G__51651 = cljs.core.first.call(null,seq51650);
var seq51650__$1 = cljs.core.next.call(null,seq51650);
var G__51652 = cljs.core.first.call(null,seq51650__$1);
var seq51650__$2 = cljs.core.next.call(null,seq51650__$1);
var G__51653 = cljs.core.first.call(null,seq51650__$2);
var seq51650__$3 = cljs.core.next.call(null,seq51650__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__51651,G__51652,G__51653,seq51650__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__37519__auto___51670 = (function (){
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
var len__37479__auto___51671 = arguments.length;
var i__37480__auto___51672 = (0);
while(true){
if((i__37480__auto___51672 < len__37479__auto___51671)){
args__37486__auto__.push((arguments[i__37480__auto___51672]));

var G__51673 = (i__37480__auto___51672 + (1));
i__37480__auto___51672 = G__51673;
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
var vec__51664 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__51667 = cljs.core.nth.call(null,vec__51664,(0),null);
var a = cljs.core.nth.call(null,vec__51667,(0),null);
var b = cljs.core.nth.call(null,vec__51667,(1),null);
var c = cljs.core.nth.call(null,vec__51667,(2),null);
var clause = vec__51667;
var more = cljs.core.nth.call(null,vec__51664,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__51658__auto__","p__51658__auto__",367475962,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = pred__$1;
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__51658__auto__","p__51658__auto__",367475962,null)))));
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

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq51659){
var G__51660 = cljs.core.first.call(null,seq51659);
var seq51659__$1 = cljs.core.next.call(null,seq51659);
var G__51661 = cljs.core.first.call(null,seq51659__$1);
var seq51659__$2 = cljs.core.next.call(null,seq51659__$1);
var G__51662 = cljs.core.first.call(null,seq51659__$2);
var seq51659__$3 = cljs.core.next.call(null,seq51659__$2);
var G__51663 = cljs.core.first.call(null,seq51659__$3);
var seq51659__$4 = cljs.core.next.call(null,seq51659__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__51660,G__51661,G__51662,G__51663,seq51659__$4);
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
var ret__37519__auto___51694 = (function (){
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
var len__37479__auto___51695 = arguments.length;
var i__37480__auto___51696 = (0);
while(true){
if((i__37480__auto___51696 < len__37479__auto___51695)){
args__37486__auto__.push((arguments[i__37480__auto___51696]));

var G__51697 = (i__37480__auto___51696 + (1));
i__37480__auto___51696 = G__51697;
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
return (function (m,p__51682){
var vec__51683 = p__51682;
var test = cljs.core.nth.call(null,vec__51683,(0),null);
var expr = cljs.core.nth.call(null,vec__51683,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__51683,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__37170__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__51683,test,expr,esym,default$,env))
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
return (function (p1__51674_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__51674_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__51675_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__51675_SHARP_)){
return cljs.core.vec.call(null,p1__51675_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51675_SHARP_], null);
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
return (function (p1__51676_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51676_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__51677_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__51677_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__51677_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__51677_SHARP_)], null);
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
return (function (p__51690){
var vec__51691 = p__51690;
var m = cljs.core.nth.call(null,vec__51691,(0),null);
var c = cljs.core.nth.call(null,vec__51691,(1),null);
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

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq51678){
var G__51679 = cljs.core.first.call(null,seq51678);
var seq51678__$1 = cljs.core.next.call(null,seq51678);
var G__51680 = cljs.core.first.call(null,seq51678__$1);
var seq51678__$2 = cljs.core.next.call(null,seq51678__$1);
var G__51681 = cljs.core.first.call(null,seq51678__$2);
var seq51678__$3 = cljs.core.next.call(null,seq51678__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__51679,G__51680,G__51681,seq51678__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__37519__auto___51698 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__37519__auto___51701 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__51700 = arguments.length;
switch (G__51700) {
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

var ret__37519__auto___51739 = /**
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
return cljs.core.reduce.call(null,(function (groups,p__51708){
var vec__51709 = p__51708;
var k = cljs.core.nth.call(null,vec__51709,(0),null);
var v = cljs.core.nth.call(null,vec__51709,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__51740__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__51740 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__51741__i = 0, G__51741__a = new Array(arguments.length -  0);
while (G__51741__i < G__51741__a.length) {G__51741__a[G__51741__i] = arguments[G__51741__i + 0]; ++G__51741__i;}
  msg = new cljs.core.IndexedSeq(G__51741__a,0,null);
} 
return G__51740__delegate.call(this,msg);};
G__51740.cljs$lang$maxFixedArity = 0;
G__51740.cljs$lang$applyTo = (function (arglist__51742){
var msg = cljs.core.seq(arglist__51742);
return G__51740__delegate(msg);
});
G__51740.cljs$core$IFn$_invoke$arity$variadic = G__51740__delegate;
return G__51740;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__51712){
var vec__51713 = p__51712;
var seq__51714 = cljs.core.seq.call(null,vec__51713);
var first__51715 = cljs.core.first.call(null,seq__51714);
var seq__51714__$1 = cljs.core.next.call(null,seq__51714);
var vec__51716 = first__51715;
var seq__51717 = cljs.core.seq.call(null,vec__51716);
var first__51718 = cljs.core.first.call(null,seq__51717);
var seq__51717__$1 = cljs.core.next.call(null,seq__51717);
var bind = first__51718;
var first__51718__$1 = cljs.core.first.call(null,seq__51717__$1);
var seq__51717__$2 = cljs.core.next.call(null,seq__51717__$1);
var expr = first__51718__$1;
var mod_pairs = seq__51717__$2;
var vec__51719 = seq__51714__$1;
var vec__51722 = cljs.core.nth.call(null,vec__51719,(0),null);
var _ = cljs.core.nth.call(null,vec__51722,(0),null);
var next_expr = cljs.core.nth.call(null,vec__51722,(1),null);
var next_groups = vec__51719;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__51713,seq__51714,first__51715,seq__51714__$1,vec__51716,seq__51717,first__51718,seq__51717__$1,bind,first__51718__$1,seq__51717__$2,expr,mod_pairs,vec__51719,vec__51722,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__51725){
var vec__51726 = p__51725;
var seq__51727 = cljs.core.seq.call(null,vec__51726);
var first__51728 = cljs.core.first.call(null,seq__51727);
var seq__51727__$1 = cljs.core.next.call(null,seq__51727);
var vec__51729 = first__51728;
var k = cljs.core.nth.call(null,vec__51729,(0),null);
var v = cljs.core.nth.call(null,vec__51729,(1),null);
var pair = vec__51729;
var etc = seq__51727__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__51703__auto__","iterys__51703__auto__",-2139201735,null)),(function (){var x__37170__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__51704__auto__","fs__51704__auto__",307211672,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__51703__auto__","iterys__51703__auto__",-2139201735,null)),(function (){var x__37170__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__51704__auto__","fs__51704__auto__",307211672,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__51704__auto__","fs__51704__auto__",307211672,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = giter;
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
});})(giter,gxs,vec__51713,seq__51714,first__51715,seq__51714__$1,vec__51716,seq__51717,first__51718,seq__51717__$1,bind,first__51718__$1,seq__51717__$2,expr,mod_pairs,vec__51719,vec__51722,_,next_expr,next_groups,to_groups,err))
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
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__51713,seq__51714,first__51715,seq__51714__$1,vec__51716,seq__51717,first__51718,seq__51717__$1,bind,first__51718__$1,seq__51717__$2,expr,mod_pairs,vec__51719,vec__51722,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__51732){
var vec__51733 = p__51732;
var seq__51734 = cljs.core.seq.call(null,vec__51733);
var first__51735 = cljs.core.first.call(null,seq__51734);
var seq__51734__$1 = cljs.core.next.call(null,seq__51734);
var vec__51736 = first__51735;
var k = cljs.core.nth.call(null,vec__51736,(0),null);
var v = cljs.core.nth.call(null,vec__51736,(1),null);
var pair = vec__51736;
var etc = seq__51734__$1;
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
});})(gi,gb,giter,gxs,do_mod,vec__51713,seq__51714,first__51715,seq__51714__$1,vec__51716,seq__51717,first__51718,seq__51717__$1,bind,first__51718__$1,seq__51717__$2,expr,mod_pairs,vec__51719,vec__51722,_,next_expr,next_groups,to_groups,err))
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51705__auto__","c__51705__auto__",2010526346,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__37170__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__51706__auto__","size__51706__auto__",1648403794,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51705__auto__","c__51705__auto__",2010526346,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__51706__auto__","size__51706__auto__",1648403794,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__51706__auto__","size__51706__auto__",1648403794,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51705__auto__","c__51705__auto__",2010526346,null)),(function (){var x__37170__auto__ = gi;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__51707__auto__","iter__51707__auto__",1710543072,null)),(function (){var x__37170__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__51707__auto__","iter__51707__auto__",1710543072,null)),(function (){var x__37170__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__37519__auto___51748 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51749 = arguments.length;
var i__37480__auto___51750 = (0);
while(true){
if((i__37480__auto___51750 < len__37479__auto___51749)){
args__37486__auto__.push((arguments[i__37480__auto___51750]));

var G__51751 = (i__37480__auto___51750 + (1));
i__37480__auto___51750 = G__51751;
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
var G__51752__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__51752 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__51753__i = 0, G__51753__a = new Array(arguments.length -  0);
while (G__51753__i < G__51753__a.length) {G__51753__a[G__51753__i] = arguments[G__51753__i + 0]; ++G__51753__i;}
  msg = new cljs.core.IndexedSeq(G__51753__a,0,null);
} 
return G__51752__delegate.call(this,msg);};
G__51752.cljs$lang$maxFixedArity = 0;
G__51752.cljs$lang$applyTo = (function (arglist__51754){
var msg = cljs.core.seq(arglist__51754);
return G__51752__delegate(msg);
});
G__51752.cljs$core$IFn$_invoke$arity$variadic = G__51752__delegate;
return G__51752;
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51743__auto__","c__51743__auto__",-196399918,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__37170__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51743__auto__","c__51743__auto__",-196399918,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51743__auto__","c__51743__auto__",-196399918,null)))));
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq51744){
var G__51745 = cljs.core.first.call(null,seq51744);
var seq51744__$1 = cljs.core.next.call(null,seq51744);
var G__51746 = cljs.core.first.call(null,seq51744__$1);
var seq51744__$2 = cljs.core.next.call(null,seq51744__$1);
var G__51747 = cljs.core.first.call(null,seq51744__$2);
var seq51744__$3 = cljs.core.next.call(null,seq51744__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__51745,G__51746,G__51747,seq51744__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__37519__auto___51758 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51759 = arguments.length;
var i__37480__auto___51760 = (0);
while(true){
if((i__37480__auto___51760 < len__37479__auto___51759)){
args__37486__auto__.push((arguments[i__37480__auto___51760]));

var G__51761 = (i__37480__auto___51760 + (1));
i__37480__auto___51760 = G__51761;
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

cljs.core$macros.array.cljs$lang$applyTo = (function (seq51755){
var G__51756 = cljs.core.first.call(null,seq51755);
var seq51755__$1 = cljs.core.next.call(null,seq51755);
var G__51757 = cljs.core.first.call(null,seq51755__$1);
var seq51755__$2 = cljs.core.next.call(null,seq51755__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__51756,G__51757,seq51755__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__37519__auto___51772 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__51771 = arguments.length;
switch (G__51771) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51774 = arguments.length;
var i__37480__auto___51775 = (0);
while(true){
if((i__37480__auto___51775 < len__37479__auto___51774)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51775]));

var G__51776 = (i__37480__auto___51775 + (1));
i__37480__auto___51775 = G__51776;
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
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__51762__auto__","dims__51762__auto__",-355822308,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__51763__auto__","dimarray__51763__auto__",1280681119,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__37170__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__51764__auto__","i__51764__auto__",-806156301,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__51763__auto__","dimarray__51763__auto__",1280681119,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__51763__auto__","dimarray__51763__auto__",1280681119,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__51764__auto__","i__51764__auto__",-806156301,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__51762__auto__","dims__51762__auto__",-355822308,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__51763__auto__","dimarray__51763__auto__",1280681119,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq51766){
var G__51767 = cljs.core.first.call(null,seq51766);
var seq51766__$1 = cljs.core.next.call(null,seq51766);
var G__51768 = cljs.core.first.call(null,seq51766__$1);
var seq51766__$2 = cljs.core.next.call(null,seq51766__$1);
var G__51769 = cljs.core.first.call(null,seq51766__$2);
var seq51766__$3 = cljs.core.next.call(null,seq51766__$2);
var G__51770 = cljs.core.first.call(null,seq51766__$3);
var seq51766__$4 = cljs.core.next.call(null,seq51766__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__51767,G__51768,G__51769,G__51770,seq51766__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__37519__auto___51785 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__51783 = arguments.length;
switch (G__51783) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51787 = arguments.length;
var i__37480__auto___51788 = (0);
while(true){
if((i__37480__auto___51788 < len__37479__auto___51787)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51788]));

var G__51789 = (i__37480__auto___51788 + (1));
i__37480__auto___51788 = G__51789;
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_51784 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_51784;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51777__auto__","x__51777__auto__",-1993113281,null)),(function (){var x__37170__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51777__auto__","x__51777__auto__",-1993113281,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq51779){
var G__51780 = cljs.core.first.call(null,seq51779);
var seq51779__$1 = cljs.core.next.call(null,seq51779);
var G__51781 = cljs.core.first.call(null,seq51779__$1);
var seq51779__$2 = cljs.core.next.call(null,seq51779__$1);
var G__51782 = cljs.core.first.call(null,seq51779__$2);
var seq51779__$3 = cljs.core.next.call(null,seq51779__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__51780,G__51781,G__51782,seq51779__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__37519__auto___51795 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__51794 = arguments.length;
switch (G__51794) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51797 = arguments.length;
var i__37480__auto___51798 = (0);
while(true){
if((i__37480__auto___51798 < len__37479__auto___51797)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51798]));

var G__51799 = (i__37480__auto___51798 + (1));
i__37480__auto___51798 = G__51799;
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

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq51791){
var G__51792 = cljs.core.first.call(null,seq51791);
var seq51791__$1 = cljs.core.next.call(null,seq51791);
var G__51793 = cljs.core.first.call(null,seq51791__$1);
var seq51791__$2 = cljs.core.next.call(null,seq51791__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__51792,G__51793,seq51791__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__37519__auto___51809 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__51806 = arguments.length;
switch (G__51806) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51811 = arguments.length;
var i__37480__auto___51812 = (0);
while(true){
if((i__37480__auto___51812 < len__37479__auto___51811)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51812]));

var G__51813 = (i__37480__auto___51812 + (1));
i__37480__auto___51812 = G__51813;
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
return (function (p1__51800_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51800_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__51801_SHARP_){
var _STAR_cljs_warnings_STAR_51808 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__51801_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_51808;
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

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq51803){
var G__51804 = cljs.core.first.call(null,seq51803);
var seq51803__$1 = cljs.core.next.call(null,seq51803);
var G__51805 = cljs.core.first.call(null,seq51803__$1);
var seq51803__$2 = cljs.core.next.call(null,seq51803__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__51804,G__51805,seq51803__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__37519__auto___51819 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__51818 = arguments.length;
switch (G__51818) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51821 = arguments.length;
var i__37480__auto___51822 = (0);
while(true){
if((i__37480__auto___51822 < len__37479__auto___51821)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51822]));

var G__51823 = (i__37480__auto___51822 + (1));
i__37480__auto___51822 = G__51823;
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

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq51815){
var G__51816 = cljs.core.first.call(null,seq51815);
var seq51815__$1 = cljs.core.next.call(null,seq51815);
var G__51817 = cljs.core.first.call(null,seq51815__$1);
var seq51815__$2 = cljs.core.next.call(null,seq51815__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__51816,G__51817,seq51815__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__37519__auto___51833 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__51830 = arguments.length;
switch (G__51830) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__37498__auto__ = [];
var len__37479__auto___51835 = arguments.length;
var i__37480__auto___51836 = (0);
while(true){
if((i__37480__auto___51836 < len__37479__auto___51835)){
args_arr__37498__auto__.push((arguments[i__37480__auto___51836]));

var G__51837 = (i__37480__auto___51836 + (1));
i__37480__auto___51836 = G__51837;
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
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__51824_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51824_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__51825_SHARP_){
var _STAR_cljs_warnings_STAR_51832 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__51825_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_51832;
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

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq51827){
var G__51828 = cljs.core.first.call(null,seq51827);
var seq51827__$1 = cljs.core.next.call(null,seq51827);
var G__51829 = cljs.core.first.call(null,seq51827__$1);
var seq51827__$2 = cljs.core.next.call(null,seq51827__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__51828,G__51829,seq51827__$2);
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
var ret__37519__auto___51853 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51854 = arguments.length;
var i__37480__auto___51855 = (0);
while(true){
if((i__37480__auto___51855 < len__37479__auto___51854)){
args__37486__auto__.push((arguments[i__37480__auto___51855]));

var G__51856 = (i__37480__auto___51855 + (1));
i__37480__auto___51855 = G__51856;
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
return (function (p__51841){
var vec__51842 = p__51841;
var k = cljs.core.nth.call(null,vec__51842,(0),null);
var _ = cljs.core.nth.call(null,vec__51842,(1),null);
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
return (function (p__51845){
var vec__51846 = p__51845;
var k = cljs.core.nth.call(null,vec__51846,(0),null);
var v = cljs.core.nth.call(null,vec__51846,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__51849){
var vec__51850 = p__51849;
var k = cljs.core.nth.call(null,vec__51850,(0),null);
var v = cljs.core.nth.call(null,vec__51850,(1),null);
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

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq51838){
var G__51839 = cljs.core.first.call(null,seq51838);
var seq51838__$1 = cljs.core.next.call(null,seq51838);
var G__51840 = cljs.core.first.call(null,seq51838__$1);
var seq51838__$2 = cljs.core.next.call(null,seq51838__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__51839,G__51840,seq51838__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__37519__auto___51857 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__37519__auto___51860 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__51858__auto__","a__51858__auto__",1776120689,null)),(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__51859__auto__","l__51859__auto__",-1364246520,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__51858__auto__","a__51858__auto__",1776120689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__51858__auto__","a__51858__auto__",1776120689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__51859__auto__","l__51859__auto__",-1364246520,null)))));
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

var ret__37519__auto___51863 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__51861__auto__","a__51861__auto__",-1049901376,null)),(function (){var x__37170__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__51862__auto__","l__51862__auto__",769537455,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__51861__auto__","a__51861__auto__",-1049901376,null)))));
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__51862__auto__","l__51862__auto__",769537455,null)))));
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

var ret__37519__auto___51869 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51870 = arguments.length;
var i__37480__auto___51871 = (0);
while(true){
if((i__37480__auto___51871 < len__37479__auto___51870)){
args__37486__auto__.push((arguments[i__37480__auto___51871]));

var G__51872 = (i__37480__auto___51871 + (1));
i__37480__auto___51871 = G__51872;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__51864__auto__","n__51864__auto__",-1469114169,null)),(function (){var x__37170__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37170__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__51864__auto__","n__51864__auto__",-1469114169,null)))));
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

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq51865){
var G__51866 = cljs.core.first.call(null,seq51865);
var seq51865__$1 = cljs.core.next.call(null,seq51865);
var G__51867 = cljs.core.first.call(null,seq51865__$1);
var seq51865__$2 = cljs.core.next.call(null,seq51865__$1);
var G__51868 = cljs.core.first.call(null,seq51865__$2);
var seq51865__$3 = cljs.core.next.call(null,seq51865__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__51866,G__51867,G__51868,seq51865__$3);
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
var len__37479__auto___51876 = arguments.length;
var i__37480__auto___51877 = (0);
while(true){
if((i__37480__auto___51877 < len__37479__auto___51876)){
args__37486__auto__.push((arguments[i__37480__auto___51877]));

var G__51878 = (i__37480__auto___51877 + (1));
i__37480__auto___51877 = G__51878;
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
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__51873_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51873_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq51874){
var G__51875 = cljs.core.first.call(null,seq51874);
var seq51874__$1 = cljs.core.next.call(null,seq51874);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__51875,seq51874__$1);
});

var ret__37519__auto___51888 = (function (){
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
var len__37479__auto___51889 = arguments.length;
var i__37480__auto___51890 = (0);
while(true){
if((i__37480__auto___51890 < len__37479__auto___51889)){
args__37486__auto__.push((arguments[i__37480__auto___51890]));

var G__51891 = (i__37480__auto___51890 + (1));
i__37480__auto___51890 = G__51891;
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__51879__auto__","method-table__51879__auto__",2037027131,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__51880__auto__","prefer-table__51880__auto__",-819874942,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__51881__auto__","method-cache__51881__auto__",473945579,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__51882__auto__","cached-hierarchy__51882__auto__",1642112692,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37170__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__51883__auto__","hierarchy__51883__auto__",-72196075,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__37170__auto__ = options__$4;
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__51883__auto__","hierarchy__51883__auto__",-72196075,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__51879__auto__","method-table__51879__auto__",2037027131,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__51880__auto__","prefer-table__51880__auto__",-819874942,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__51881__auto__","method-cache__51881__auto__",473945579,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__51882__auto__","cached-hierarchy__51882__auto__",1642112692,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq51884){
var G__51885 = cljs.core.first.call(null,seq51884);
var seq51884__$1 = cljs.core.next.call(null,seq51884);
var G__51886 = cljs.core.first.call(null,seq51884__$1);
var seq51884__$2 = cljs.core.next.call(null,seq51884__$1);
var G__51887 = cljs.core.first.call(null,seq51884__$2);
var seq51884__$3 = cljs.core.next.call(null,seq51884__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__51885,G__51886,G__51887,seq51884__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__37519__auto___51897 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51898 = arguments.length;
var i__37480__auto___51899 = (0);
while(true){
if((i__37480__auto___51899 < len__37479__auto___51898)){
args__37486__auto__.push((arguments[i__37480__auto___51899]));

var G__51900 = (i__37480__auto___51899 + (1));
i__37480__auto___51899 = G__51900;
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

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq51892){
var G__51893 = cljs.core.first.call(null,seq51892);
var seq51892__$1 = cljs.core.next.call(null,seq51892);
var G__51894 = cljs.core.first.call(null,seq51892__$1);
var seq51892__$2 = cljs.core.next.call(null,seq51892__$1);
var G__51895 = cljs.core.first.call(null,seq51892__$2);
var seq51892__$3 = cljs.core.next.call(null,seq51892__$2);
var G__51896 = cljs.core.first.call(null,seq51892__$3);
var seq51892__$4 = cljs.core.next.call(null,seq51892__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__51893,G__51894,G__51895,G__51896,seq51892__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__37519__auto___51903 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__51901__auto__","start__51901__auto__",-1540014851,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__51902__auto__","ret__51902__auto__",-230592621,null)),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__51901__auto__","start__51901__auto__",-1540014851,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__51902__auto__","ret__51902__auto__",-230592621,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__37519__auto___51918 = (function (){
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
var len__37479__auto___51919 = arguments.length;
var i__37480__auto___51920 = (0);
while(true){
if((i__37480__auto___51920 < len__37479__auto___51919)){
args__37486__auto__.push((arguments[i__37480__auto___51920]));

var G__51921 = (i__37480__auto___51920 + (1));
i__37480__auto___51920 = G__51921;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((5) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__37487__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__51915){
var map__51916 = p__51915;
var map__51916__$1 = ((((!((map__51916 == null)))?((((map__51916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51916):map__51916);
var print_fn = cljs.core.get.call(null,map__51916__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__51904__auto__","start__51904__auto__",1631834484,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__51905__auto__","ret__51905__auto__",163068778,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___51906__auto__","___51906__auto__",2081935148,null)),(function (){var x__37170__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__51907__auto__","end__51907__auto__",25184581,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__51908__auto__","elapsed__51908__auto__",-1883262571,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__51907__auto__","end__51907__auto__",25184581,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__51904__auto__","start__51904__auto__",1631834484,null)))));
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__51908__auto__","elapsed__51908__auto__",-1883262571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq51909){
var G__51910 = cljs.core.first.call(null,seq51909);
var seq51909__$1 = cljs.core.next.call(null,seq51909);
var G__51911 = cljs.core.first.call(null,seq51909__$1);
var seq51909__$2 = cljs.core.next.call(null,seq51909__$1);
var G__51912 = cljs.core.first.call(null,seq51909__$2);
var seq51909__$3 = cljs.core.next.call(null,seq51909__$2);
var G__51913 = cljs.core.first.call(null,seq51909__$3);
var seq51909__$4 = cljs.core.next.call(null,seq51909__$3);
var G__51914 = cljs.core.first.call(null,seq51909__$4);
var seq51909__$5 = cljs.core.next.call(null,seq51909__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__51910,G__51911,G__51912,G__51913,G__51914,seq51909__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__51923 = arguments.length;
switch (G__51923) {
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

var ret__37519__auto___51925 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
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
return (function (p1__51926_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51926_SHARP_)].join(''));
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
})(),(function (){var x__37170__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__51927__auto__","arr__51927__auto__",912948754,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__51928__auto__","s__51928__auto__",693287949,null)),(function (){var x__37170__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__51928__auto__","s__51928__auto__",693287949,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__51927__auto__","arr__51927__auto__",912948754,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__51928__auto__","s__51928__auto__",693287949,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__51928__auto__","s__51928__auto__",693287949,null)))));
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__51927__auto__","arr__51927__auto__",912948754,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
var ret__37519__auto___51929 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__37519__auto___51935 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51936 = arguments.length;
var i__37480__auto___51937 = (0);
while(true){
if((i__37480__auto___51937 < len__37479__auto___51936)){
args__37486__auto__.push((arguments[i__37480__auto___51937]));

var G__51938 = (i__37480__auto___51937 + (1));
i__37480__auto___51937 = G__51938;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__51930__auto__","sb__51930__auto__",1389511445,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51931__auto__","x__51931__auto__",1805867962,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__51930__auto__","sb__51930__auto__",1389511445,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51931__auto__","x__51931__auto__",1805867962,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__51930__auto__","sb__51930__auto__",1389511445,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq51932){
var G__51933 = cljs.core.first.call(null,seq51932);
var seq51932__$1 = cljs.core.next.call(null,seq51932);
var G__51934 = cljs.core.first.call(null,seq51932__$1);
var seq51932__$2 = cljs.core.next.call(null,seq51932__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__51933,G__51934,seq51932__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__37519__auto___51943 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51944 = arguments.length;
var i__37480__auto___51945 = (0);
while(true){
if((i__37480__auto___51945 < len__37479__auto___51944)){
args__37486__auto__.push((arguments[i__37480__auto___51945]));

var G__51946 = (i__37480__auto___51945 + (1));
i__37480__auto___51945 = G__51946;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((2) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37487__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__51939_SHARP_){
return cljs.core._conj.call(null,(function (){var x__37170__auto__ = p1__51939_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq51940){
var G__51941 = cljs.core.first.call(null,seq51940);
var seq51940__$1 = cljs.core.next.call(null,seq51940);
var G__51942 = cljs.core.first.call(null,seq51940__$1);
var seq51940__$2 = cljs.core.next.call(null,seq51940__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__51941,G__51942,seq51940__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__37519__auto___51947 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37170__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__37519__auto___51949 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__37170__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51948__auto__","this__51948__auto__",1558365525,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51948__auto__","this__51948__auto__",1558365525,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__37519__auto___51966 = /**
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
return (function (p__51958){
var vec__51959 = p__51958;
var sym = cljs.core.nth.call(null,vec__51959,(0),null);
var _ = cljs.core.nth.call(null,vec__51959,(1),null);
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
return (function (p__51962){
var vec__51963 = p__51962;
var _ = cljs.core.nth.call(null,vec__51963,(0),null);
var info = cljs.core.nth.call(null,vec__51963,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__37519__auto___51975 = /**
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
return (function (p__51971){
var vec__51972 = p__51971;
var ctor = cljs.core.nth.call(null,vec__51972,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__51972,(1),null);
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

var ret__37519__auto___51984 = /**
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
return (function (p__51980){
var vec__51981 = p__51980;
var sym = cljs.core.nth.call(null,vec__51981,(0),null);
var _ = cljs.core.nth.call(null,vec__51981,(1),null);
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

var ret__37519__auto___51985 = /**
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

var ret__37519__auto___51991 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___51992 = arguments.length;
var i__37480__auto___51993 = (0);
while(true){
if((i__37480__auto___51993 < len__37479__auto___51992)){
args__37486__auto__.push((arguments[i__37480__auto___51993]));

var G__51994 = (i__37480__auto___51993 + (1));
i__37480__auto___51993 = G__51994;
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

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq51986){
var G__51987 = cljs.core.first.call(null,seq51986);
var seq51986__$1 = cljs.core.next.call(null,seq51986);
var G__51988 = cljs.core.first.call(null,seq51986__$1);
var seq51986__$2 = cljs.core.next.call(null,seq51986__$1);
var G__51989 = cljs.core.first.call(null,seq51986__$2);
var seq51986__$3 = cljs.core.next.call(null,seq51986__$2);
var G__51990 = cljs.core.first.call(null,seq51986__$3);
var seq51986__$4 = cljs.core.next.call(null,seq51986__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51987,G__51988,G__51989,G__51990,seq51986__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__37519__auto___51999 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__37486__auto__ = [];
var len__37479__auto___52000 = arguments.length;
var i__37480__auto___52001 = (0);
while(true){
if((i__37480__auto___52001 < len__37479__auto___52000)){
args__37486__auto__.push((arguments[i__37480__auto___52001]));

var G__52002 = (i__37480__auto___52001 + (1));
i__37480__auto___52001 = G__52002;
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

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq51995){
var G__51996 = cljs.core.first.call(null,seq51995);
var seq51995__$1 = cljs.core.next.call(null,seq51995);
var G__51997 = cljs.core.first.call(null,seq51995__$1);
var seq51995__$2 = cljs.core.next.call(null,seq51995__$1);
var G__51998 = cljs.core.first.call(null,seq51995__$2);
var seq51995__$3 = cljs.core.next.call(null,seq51995__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__51996,G__51997,G__51998,seq51995__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__37519__auto___52006 = (function (){
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
var len__37479__auto___52007 = arguments.length;
var i__37480__auto___52008 = (0);
while(true){
if((i__37480__auto___52008 < len__37479__auto___52007)){
args__37486__auto__.push((arguments[i__37480__auto___52008]));

var G__52009 = (i__37480__auto___52008 + (1));
i__37480__auto___52008 = G__52009;
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

cljs.core$macros.require.cljs$lang$applyTo = (function (seq52003){
var G__52004 = cljs.core.first.call(null,seq52003);
var seq52003__$1 = cljs.core.next.call(null,seq52003);
var G__52005 = cljs.core.first.call(null,seq52003__$1);
var seq52003__$2 = cljs.core.next.call(null,seq52003__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__52004,G__52005,seq52003__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__37519__auto___52013 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__37486__auto__ = [];
var len__37479__auto___52014 = arguments.length;
var i__37480__auto___52015 = (0);
while(true){
if((i__37480__auto___52015 < len__37479__auto___52014)){
args__37486__auto__.push((arguments[i__37480__auto___52015]));

var G__52016 = (i__37480__auto___52015 + (1));
i__37480__auto___52015 = G__52016;
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

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq52010){
var G__52011 = cljs.core.first.call(null,seq52010);
var seq52010__$1 = cljs.core.next.call(null,seq52010);
var G__52012 = cljs.core.first.call(null,seq52010__$1);
var seq52010__$2 = cljs.core.next.call(null,seq52010__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__52011,G__52012,seq52010__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__37519__auto___52020 = (function (){
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
var len__37479__auto___52021 = arguments.length;
var i__37480__auto___52022 = (0);
while(true){
if((i__37480__auto___52022 < len__37479__auto___52021)){
args__37486__auto__.push((arguments[i__37480__auto___52022]));

var G__52023 = (i__37480__auto___52022 + (1));
i__37480__auto___52022 = G__52023;
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

cljs.core$macros.use.cljs$lang$applyTo = (function (seq52017){
var G__52018 = cljs.core.first.call(null,seq52017);
var seq52017__$1 = cljs.core.next.call(null,seq52017);
var G__52019 = cljs.core.first.call(null,seq52017__$1);
var seq52017__$2 = cljs.core.next.call(null,seq52017__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__52018,G__52019,seq52017__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__37519__auto___52027 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__37486__auto__ = [];
var len__37479__auto___52028 = arguments.length;
var i__37480__auto___52029 = (0);
while(true){
if((i__37480__auto___52029 < len__37479__auto___52028)){
args__37486__auto__.push((arguments[i__37480__auto___52029]));

var G__52030 = (i__37480__auto___52029 + (1));
i__37480__auto___52029 = G__52030;
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

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq52024){
var G__52025 = cljs.core.first.call(null,seq52024);
var seq52024__$1 = cljs.core.next.call(null,seq52024);
var G__52026 = cljs.core.first.call(null,seq52024__$1);
var seq52024__$2 = cljs.core.next.call(null,seq52024__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__52025,G__52026,seq52024__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__37519__auto___52034 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__37486__auto__ = [];
var len__37479__auto___52035 = arguments.length;
var i__37480__auto___52036 = (0);
while(true){
if((i__37480__auto___52036 < len__37479__auto___52035)){
args__37486__auto__.push((arguments[i__37480__auto___52036]));

var G__52037 = (i__37480__auto___52036 + (1));
i__37480__auto___52036 = G__52037;
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

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq52031){
var G__52032 = cljs.core.first.call(null,seq52031);
var seq52031__$1 = cljs.core.next.call(null,seq52031);
var G__52033 = cljs.core.first.call(null,seq52031__$1);
var seq52031__$2 = cljs.core.next.call(null,seq52031__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__52032,G__52033,seq52031__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__37519__auto___52041 = (function (){
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
var len__37479__auto___52042 = arguments.length;
var i__37480__auto___52043 = (0);
while(true){
if((i__37480__auto___52043 < len__37479__auto___52042)){
args__37486__auto__.push((arguments[i__37480__auto___52043]));

var G__52044 = (i__37480__auto___52043 + (1));
i__37480__auto___52043 = G__52044;
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

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq52038){
var G__52039 = cljs.core.first.call(null,seq52038);
var seq52038__$1 = cljs.core.next.call(null,seq52038);
var G__52040 = cljs.core.first.call(null,seq52038__$1);
var seq52038__$2 = cljs.core.next.call(null,seq52038__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__52039,G__52040,seq52038__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__37519__auto___52045 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__37170__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__37519__auto___52046 = /**
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

var ret__37519__auto___52047 = /**
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
var G__52048 = form_SINGLEQUOTE_;
var G__52049 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__52048;
form_SINGLEQUOTE_ = G__52049;
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
var G__52051 = arguments.length;
switch (G__52051) {
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

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__52052,solo){
var vec__52053 = p__52052;
var seq__52054 = cljs.core.seq.call(null,vec__52053);
var first__52055 = cljs.core.first.call(null,seq__52054);
var seq__52054__$1 = cljs.core.next.call(null,seq__52054);
var arglist = first__52055;
var body = seq__52054__$1;
var method = vec__52053;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__52053,seq__52054,first__52055,seq__52054__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__52053,seq__52054,first__52055,seq__52054__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__52053,seq__52054,first__52055,seq__52054__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__52053,seq__52054,first__52055,seq__52054__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__52053,seq__52054,first__52055,seq__52054__$1,arglist,body,method){
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
});})(sig,restarg,vec__52053,seq__52054,first__52055,seq__52054__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__52053,seq__52054,first__52055,seq__52054__$1,arglist,body,method){
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
});})(sig,restarg,vec__52053,seq__52054,first__52055,seq__52054__$1,arglist,body,method))
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

var ret__37519__auto___52059 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__52057__auto__","len__52057__auto__",1862350221,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52058__auto__","i__52058__auto__",696506979,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52058__auto__","i__52058__auto__",696506979,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__52057__auto__","len__52057__auto__",1862350221,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__37170__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52058__auto__","i__52058__auto__",696506979,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52058__auto__","i__52058__auto__",696506979,null)))));
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

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__52062,emit_var_QMARK_){
var vec__52063 = p__52062;
var vec__52066 = cljs.core.nth.call(null,vec__52063,(0),null);
var seq__52067 = cljs.core.seq.call(null,vec__52066);
var first__52068 = cljs.core.first.call(null,seq__52067);
var seq__52067__$1 = cljs.core.next.call(null,seq__52067);
var arglist = first__52068;
var body = seq__52067__$1;
var method = vec__52066;
var fdecl = vec__52063;
var dest_args = ((function (vec__52063,vec__52066,seq__52067,first__52068,seq__52067__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__52063,vec__52066,seq__52067,first__52068,seq__52067__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
});})(vec__52063,vec__52066,seq__52067,first__52068,seq__52067__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__52063,vec__52066,seq__52067,first__52068,seq__52067__$1,arglist,body,method,fdecl))
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__52060__auto__","args__52060__auto__",1603427453,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__52060__auto__","args__52060__auto__",1603427453,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__52061__auto__","argseq__52061__auto__",2093302539,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__37170__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__52060__auto__","args__52060__auto__",1603427453,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__52060__auto__","args__52060__auto__",1603427453,null)),(function (){var x__37170__auto__ = c_1;
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
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__52061__auto__","argseq__52061__auto__",2093302539,null)))));
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
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__52077){
var vec__52078 = p__52077;
var seq__52079 = cljs.core.seq.call(null,vec__52078);
var first__52080 = cljs.core.first.call(null,seq__52079);
var seq__52079__$1 = cljs.core.next.call(null,seq__52079);
var sig = first__52080;
var body = seq__52079__$1;
var method = vec__52078;
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
return (function (p1__52069_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__52069_SHARP_);
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
return (function (p1__52070_SHARP_){
return fixed_arity.call(null,rname,p1__52070_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__37170__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__52071__auto__","args-arr__52071__auto__",108840543,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__52071__auto__","args-arr__52071__auto__",108840543,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__52072__auto__","argseq__52072__auto__",-1138579555,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__37170__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/tushaar/Projects/maze-evolution/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__52071__auto__","args-arr__52071__auto__",108840543,null)),(function (){var x__37170__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__52072__auto__","argseq__52072__auto__",-1138579555,null)))));
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
var G__52081__i = 0, G__52081__a = new Array(arguments.length -  3);
while (G__52081__i < G__52081__a.length) {G__52081__a[G__52081__i] = arguments[G__52081__i + 3]; ++G__52081__i;}
  fdecl = new cljs.core.IndexedSeq(G__52081__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__52082){
var _AMPERSAND_form = cljs.core.first(arglist__52082);
arglist__52082 = cljs.core.next(arglist__52082);
var _AMPERSAND_env = cljs.core.first(arglist__52082);
arglist__52082 = cljs.core.next(arglist__52082);
var name = cljs.core.first(arglist__52082);
var fdecl = cljs.core.rest(arglist__52082);
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
var len__37479__auto___52088 = arguments.length;
var i__37480__auto___52089 = (0);
while(true){
if((i__37480__auto___52089 < len__37479__auto___52088)){
args__37486__auto__.push((arguments[i__37480__auto___52089]));

var G__52090 = (i__37480__auto___52089 + (1));
i__37480__auto___52089 = G__52090;
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
var G__52091 = cljs.core.cons.call(null,f,p);
var G__52092 = cljs.core.next.call(null,args__$1);
p = G__52091;
args__$1 = G__52092;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__52093 = cljs.core.cons.call(null,f,p);
var G__52094 = cljs.core.next.call(null,args__$1);
p = G__52093;
args__$1 = G__52094;
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
var G__52095 = cljs.core.next.call(null,fd);
fd = G__52095;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__52096 = cljs.core.next.call(null,fd);
fd = G__52096;
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
var G__52097 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__52098 = cljs.core.next.call(null,ds);
acc = G__52097;
ds = G__52098;
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
var G__52099 = cljs.core.next.call(null,p);
var G__52100 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__52099;
d = G__52100;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__37170__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__52083__auto__","ret__52083__auto__",-542693606,null)),(function (){var x__37170__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__37170__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__37170__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37170__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__52083__auto__","ret__52083__auto__",-542693606,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq52084){
var G__52085 = cljs.core.first.call(null,seq52084);
var seq52084__$1 = cljs.core.next.call(null,seq52084);
var G__52086 = cljs.core.first.call(null,seq52084__$1);
var seq52084__$2 = cljs.core.next.call(null,seq52084__$1);
var G__52087 = cljs.core.first.call(null,seq52084__$2);
var seq52084__$3 = cljs.core.next.call(null,seq52084__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__52085,G__52086,G__52087,seq52084__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__37519__auto___52105 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__52101 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e52104){var e = e52104;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__52101,(0),null);
var meta = cljs.core.nth.call(null,vec__52101,(1),null);
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


//# sourceMappingURL=core$macros.js.map?rel=1517263091920
