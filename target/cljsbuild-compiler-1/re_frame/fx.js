// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
var seq__25735 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__25736 = null;
var count__25737 = (0);
var i__25738 = (0);
while(true){
if((i__25738 < count__25737)){
var vec__25739 = chunk__25736.cljs$core$IIndexed$_nth$arity$2(null,i__25738);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25739,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25739,(1),null);
var temp__5455__auto___25745 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25745)){
var effect_fn_25746 = temp__5455__auto___25745;
(effect_fn_25746.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25746.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25746.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__25747 = seq__25735;
var G__25748 = chunk__25736;
var G__25749 = count__25737;
var G__25750 = (i__25738 + (1));
seq__25735 = G__25747;
chunk__25736 = G__25748;
count__25737 = G__25749;
i__25738 = G__25750;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25735);
if(temp__5457__auto__){
var seq__25735__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25735__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__25735__$1);
var G__25751 = cljs.core.chunk_rest(seq__25735__$1);
var G__25752 = c__9319__auto__;
var G__25753 = cljs.core.count(c__9319__auto__);
var G__25754 = (0);
seq__25735 = G__25751;
chunk__25736 = G__25752;
count__25737 = G__25753;
i__25738 = G__25754;
continue;
} else {
var vec__25742 = cljs.core.first(seq__25735__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25742,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25742,(1),null);
var temp__5455__auto___25755 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25755)){
var effect_fn_25756 = temp__5455__auto___25755;
(effect_fn_25756.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25756.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25756.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__25757 = cljs.core.next(seq__25735__$1);
var G__25758 = null;
var G__25759 = (0);
var G__25760 = (0);
seq__25735 = G__25757;
chunk__25736 = G__25758;
count__25737 = G__25759;
i__25738 = G__25760;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__25761 = cljs.core.seq(value);
var chunk__25762 = null;
var count__25763 = (0);
var i__25764 = (0);
while(true){
if((i__25764 < count__25763)){
var map__25765 = chunk__25762.cljs$core$IIndexed$_nth$arity$2(null,i__25764);
var map__25765__$1 = ((((!((map__25765 == null)))?((((map__25765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25765):map__25765);
var effect = map__25765__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25765__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25765__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__25761,chunk__25762,count__25763,i__25764,map__25765,map__25765__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__25761,chunk__25762,count__25763,i__25764,map__25765,map__25765__$1,effect,ms,dispatch))
,ms);
}

var G__25769 = seq__25761;
var G__25770 = chunk__25762;
var G__25771 = count__25763;
var G__25772 = (i__25764 + (1));
seq__25761 = G__25769;
chunk__25762 = G__25770;
count__25763 = G__25771;
i__25764 = G__25772;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25761);
if(temp__5457__auto__){
var seq__25761__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25761__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__25761__$1);
var G__25773 = cljs.core.chunk_rest(seq__25761__$1);
var G__25774 = c__9319__auto__;
var G__25775 = cljs.core.count(c__9319__auto__);
var G__25776 = (0);
seq__25761 = G__25773;
chunk__25762 = G__25774;
count__25763 = G__25775;
i__25764 = G__25776;
continue;
} else {
var map__25767 = cljs.core.first(seq__25761__$1);
var map__25767__$1 = ((((!((map__25767 == null)))?((((map__25767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25767):map__25767);
var effect = map__25767__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25767__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25767__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__25761,chunk__25762,count__25763,i__25764,map__25767,map__25767__$1,effect,ms,dispatch,seq__25761__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__25761,chunk__25762,count__25763,i__25764,map__25767,map__25767__$1,effect,ms,dispatch,seq__25761__$1,temp__5457__auto__))
,ms);
}

var G__25777 = cljs.core.next(seq__25761__$1);
var G__25778 = null;
var G__25779 = (0);
var G__25780 = (0);
seq__25761 = G__25777;
chunk__25762 = G__25778;
count__25763 = G__25779;
i__25764 = G__25780;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__25781 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25782 = null;
var count__25783 = (0);
var i__25784 = (0);
while(true){
if((i__25784 < count__25783)){
var event = chunk__25782.cljs$core$IIndexed$_nth$arity$2(null,i__25784);
re_frame.router.dispatch(event);

var G__25785 = seq__25781;
var G__25786 = chunk__25782;
var G__25787 = count__25783;
var G__25788 = (i__25784 + (1));
seq__25781 = G__25785;
chunk__25782 = G__25786;
count__25783 = G__25787;
i__25784 = G__25788;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25781);
if(temp__5457__auto__){
var seq__25781__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25781__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__25781__$1);
var G__25789 = cljs.core.chunk_rest(seq__25781__$1);
var G__25790 = c__9319__auto__;
var G__25791 = cljs.core.count(c__9319__auto__);
var G__25792 = (0);
seq__25781 = G__25789;
chunk__25782 = G__25790;
count__25783 = G__25791;
i__25784 = G__25792;
continue;
} else {
var event = cljs.core.first(seq__25781__$1);
re_frame.router.dispatch(event);

var G__25793 = cljs.core.next(seq__25781__$1);
var G__25794 = null;
var G__25795 = (0);
var G__25796 = (0);
seq__25781 = G__25793;
chunk__25782 = G__25794;
count__25783 = G__25795;
i__25784 = G__25796;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__25797 = cljs.core.seq(value);
var chunk__25798 = null;
var count__25799 = (0);
var i__25800 = (0);
while(true){
if((i__25800 < count__25799)){
var event = chunk__25798.cljs$core$IIndexed$_nth$arity$2(null,i__25800);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__25801 = seq__25797;
var G__25802 = chunk__25798;
var G__25803 = count__25799;
var G__25804 = (i__25800 + (1));
seq__25797 = G__25801;
chunk__25798 = G__25802;
count__25799 = G__25803;
i__25800 = G__25804;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25797);
if(temp__5457__auto__){
var seq__25797__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25797__$1)){
var c__9319__auto__ = cljs.core.chunk_first(seq__25797__$1);
var G__25805 = cljs.core.chunk_rest(seq__25797__$1);
var G__25806 = c__9319__auto__;
var G__25807 = cljs.core.count(c__9319__auto__);
var G__25808 = (0);
seq__25797 = G__25805;
chunk__25798 = G__25806;
count__25799 = G__25807;
i__25800 = G__25808;
continue;
} else {
var event = cljs.core.first(seq__25797__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__25809 = cljs.core.next(seq__25797__$1);
var G__25810 = null;
var G__25811 = (0);
var G__25812 = (0);
seq__25797 = G__25809;
chunk__25798 = G__25810;
count__25799 = G__25811;
i__25800 = G__25812;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
