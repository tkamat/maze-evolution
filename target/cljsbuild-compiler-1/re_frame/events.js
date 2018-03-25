// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind) : re_frame.registrar.kinds.call(null,re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__17809_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__17809_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__4657__auto___17810 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___17810)){
var not_i_17811 = temp__4657__auto___17810;
if(cljs.core.fn_QMARK_(not_i_17811)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_17811], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_17811], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR_17812 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_17813 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17757__auto___17828 = re_frame.interop.now();
var duration__17758__auto___17829 = (end__17757__auto___17828 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__17814_17830 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17815_17831 = null;
var count__17816_17832 = (0);
var i__17817_17833 = (0);
while(true){
if((i__17817_17833 < count__17816_17832)){
var vec__17818_17834 = chunk__17815_17831.cljs$core$IIndexed$_nth$arity$2(null,i__17817_17833);
var k__17759__auto___17835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17818_17834,(0),null);
var cb__17760__auto___17836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17818_17834,(1),null);
try{var G__17822_17837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17758__auto___17829,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17760__auto___17836.cljs$core$IFn$_invoke$arity$1 ? cb__17760__auto___17836.cljs$core$IFn$_invoke$arity$1(G__17822_17837) : cb__17760__auto___17836.call(null,G__17822_17837));
}catch (e17821){if((e17821 instanceof java.lang.Exception)){
var e__17761__auto___17838 = e17821;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17759__auto___17835,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17761__auto___17838], 0));
} else {
throw e17821;

}
}
var G__17839 = seq__17814_17830;
var G__17840 = chunk__17815_17831;
var G__17841 = count__17816_17832;
var G__17842 = (i__17817_17833 + (1));
seq__17814_17830 = G__17839;
chunk__17815_17831 = G__17840;
count__17816_17832 = G__17841;
i__17817_17833 = G__17842;
continue;
} else {
var temp__4657__auto___17843 = cljs.core.seq(seq__17814_17830);
if(temp__4657__auto___17843){
var seq__17814_17844__$1 = temp__4657__auto___17843;
if(cljs.core.chunked_seq_QMARK_(seq__17814_17844__$1)){
var c__8507__auto___17845 = cljs.core.chunk_first(seq__17814_17844__$1);
var G__17846 = cljs.core.chunk_rest(seq__17814_17844__$1);
var G__17847 = c__8507__auto___17845;
var G__17848 = cljs.core.count(c__8507__auto___17845);
var G__17849 = (0);
seq__17814_17830 = G__17846;
chunk__17815_17831 = G__17847;
count__17816_17832 = G__17848;
i__17817_17833 = G__17849;
continue;
} else {
var vec__17823_17850 = cljs.core.first(seq__17814_17844__$1);
var k__17759__auto___17851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823_17850,(0),null);
var cb__17760__auto___17852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823_17850,(1),null);
try{var G__17827_17853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17758__auto___17829,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17760__auto___17852.cljs$core$IFn$_invoke$arity$1 ? cb__17760__auto___17852.cljs$core$IFn$_invoke$arity$1(G__17827_17853) : cb__17760__auto___17852.call(null,G__17827_17853));
}catch (e17826){if((e17826 instanceof java.lang.Exception)){
var e__17761__auto___17854 = e17826;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17759__auto___17851,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17761__auto___17854], 0));
} else {
throw e17826;

}
}
var G__17855 = cljs.core.next(seq__17814_17844__$1);
var G__17856 = null;
var G__17857 = (0);
var G__17858 = (0);
seq__17814_17830 = G__17855;
chunk__17815_17831 = G__17856;
count__17816_17832 = G__17857;
i__17817_17833 = G__17858;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17813;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_17812;
}}
} else {
return null;
}
});
