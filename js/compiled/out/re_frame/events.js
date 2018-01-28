// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__30877_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__30877_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___30878 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___30878)){
var not_i_30879 = temp__4657__auto___30878;
if(cljs.core.fn_QMARK_.call(null,not_i_30879)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_30879);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_30879);
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
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_30880 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_30881 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30825__auto___30894 = re_frame.interop.now.call(null);
var duration__30826__auto___30895 = (end__30825__auto___30894 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__30882_30896 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30883_30897 = null;
var count__30884_30898 = (0);
var i__30885_30899 = (0);
while(true){
if((i__30885_30899 < count__30884_30898)){
var vec__30886_30900 = cljs.core._nth.call(null,chunk__30883_30897,i__30885_30899);
var k__30827__auto___30901 = cljs.core.nth.call(null,vec__30886_30900,(0),null);
var cb__30828__auto___30902 = cljs.core.nth.call(null,vec__30886_30900,(1),null);
try{cb__30828__auto___30902.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30826__auto___30895,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30889){if((e30889 instanceof java.lang.Exception)){
var e__30829__auto___30903 = e30889;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30827__auto___30901,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30829__auto___30903);
} else {
throw e30889;

}
}
var G__30904 = seq__30882_30896;
var G__30905 = chunk__30883_30897;
var G__30906 = count__30884_30898;
var G__30907 = (i__30885_30899 + (1));
seq__30882_30896 = G__30904;
chunk__30883_30897 = G__30905;
count__30884_30898 = G__30906;
i__30885_30899 = G__30907;
continue;
} else {
var temp__4657__auto___30908 = cljs.core.seq.call(null,seq__30882_30896);
if(temp__4657__auto___30908){
var seq__30882_30909__$1 = temp__4657__auto___30908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30882_30909__$1)){
var c__29173__auto___30910 = cljs.core.chunk_first.call(null,seq__30882_30909__$1);
var G__30911 = cljs.core.chunk_rest.call(null,seq__30882_30909__$1);
var G__30912 = c__29173__auto___30910;
var G__30913 = cljs.core.count.call(null,c__29173__auto___30910);
var G__30914 = (0);
seq__30882_30896 = G__30911;
chunk__30883_30897 = G__30912;
count__30884_30898 = G__30913;
i__30885_30899 = G__30914;
continue;
} else {
var vec__30890_30915 = cljs.core.first.call(null,seq__30882_30909__$1);
var k__30827__auto___30916 = cljs.core.nth.call(null,vec__30890_30915,(0),null);
var cb__30828__auto___30917 = cljs.core.nth.call(null,vec__30890_30915,(1),null);
try{cb__30828__auto___30917.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30826__auto___30895,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30893){if((e30893 instanceof java.lang.Exception)){
var e__30829__auto___30918 = e30893;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30827__auto___30916,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30829__auto___30918);
} else {
throw e30893;

}
}
var G__30919 = cljs.core.next.call(null,seq__30882_30909__$1);
var G__30920 = null;
var G__30921 = (0);
var G__30922 = (0);
seq__30882_30896 = G__30919;
chunk__30883_30897 = G__30920;
count__30884_30898 = G__30921;
i__30885_30899 = G__30922;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30881;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_30880;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1517031107250
