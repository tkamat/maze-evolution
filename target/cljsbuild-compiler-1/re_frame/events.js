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
var make_chain = (function (p1__18661_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__18661_SHARP_));
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

var temp__5457__auto___18662 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___18662)){
var not_i_18663 = temp__5457__auto___18662;
if(cljs.core.fn_QMARK_(not_i_18663)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_18663], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_18663], 0));
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
var temp__5455__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR_18664 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_18665 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__18609__auto___18680 = re_frame.interop.now();
var duration__18610__auto___18681 = (end__18609__auto___18680 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__18666_18682 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__18667_18683 = null;
var count__18668_18684 = (0);
var i__18669_18685 = (0);
while(true){
if((i__18669_18685 < count__18668_18684)){
var vec__18670_18686 = chunk__18667_18683.cljs$core$IIndexed$_nth$arity$2(null,i__18669_18685);
var k__18611__auto___18687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18670_18686,(0),null);
var cb__18612__auto___18688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18670_18686,(1),null);
try{var G__18674_18689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__18610__auto___18681,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__18612__auto___18688.cljs$core$IFn$_invoke$arity$1 ? cb__18612__auto___18688.cljs$core$IFn$_invoke$arity$1(G__18674_18689) : cb__18612__auto___18688.call(null,G__18674_18689));
}catch (e18673){if((e18673 instanceof java.lang.Exception)){
var e__18613__auto___18690 = e18673;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18611__auto___18687,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__18613__auto___18690], 0));
} else {
throw e18673;

}
}
var G__18691 = seq__18666_18682;
var G__18692 = chunk__18667_18683;
var G__18693 = count__18668_18684;
var G__18694 = (i__18669_18685 + (1));
seq__18666_18682 = G__18691;
chunk__18667_18683 = G__18692;
count__18668_18684 = G__18693;
i__18669_18685 = G__18694;
continue;
} else {
var temp__5457__auto___18695 = cljs.core.seq(seq__18666_18682);
if(temp__5457__auto___18695){
var seq__18666_18696__$1 = temp__5457__auto___18695;
if(cljs.core.chunked_seq_QMARK_(seq__18666_18696__$1)){
var c__9319__auto___18697 = cljs.core.chunk_first(seq__18666_18696__$1);
var G__18698 = cljs.core.chunk_rest(seq__18666_18696__$1);
var G__18699 = c__9319__auto___18697;
var G__18700 = cljs.core.count(c__9319__auto___18697);
var G__18701 = (0);
seq__18666_18682 = G__18698;
chunk__18667_18683 = G__18699;
count__18668_18684 = G__18700;
i__18669_18685 = G__18701;
continue;
} else {
var vec__18675_18702 = cljs.core.first(seq__18666_18696__$1);
var k__18611__auto___18703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18675_18702,(0),null);
var cb__18612__auto___18704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18675_18702,(1),null);
try{var G__18679_18705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__18610__auto___18681,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__18612__auto___18704.cljs$core$IFn$_invoke$arity$1 ? cb__18612__auto___18704.cljs$core$IFn$_invoke$arity$1(G__18679_18705) : cb__18612__auto___18704.call(null,G__18679_18705));
}catch (e18678){if((e18678 instanceof java.lang.Exception)){
var e__18613__auto___18706 = e18678;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18611__auto___18703,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__18613__auto___18706], 0));
} else {
throw e18678;

}
}
var G__18707 = cljs.core.next(seq__18666_18696__$1);
var G__18708 = null;
var G__18709 = (0);
var G__18710 = (0);
seq__18666_18682 = G__18707;
chunk__18667_18683 = G__18708;
count__18668_18684 = G__18709;
i__18669_18685 = G__18710;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_18665;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_18664;
}}
} else {
return null;
}
});
