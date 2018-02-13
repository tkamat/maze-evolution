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
var make_chain = (function (p1__29105_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__29105_SHARP_));
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

var temp__4657__auto___29106 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___29106)){
var not_i_29107 = temp__4657__auto___29106;
if(cljs.core.fn_QMARK_.call(null,not_i_29107)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_29107);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_29107);
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
var _STAR_handling_STAR_29108 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_29109 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13559__auto___29122 = re_frame.interop.now.call(null);
var duration__13560__auto___29123 = (end__13559__auto___29122 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__29110_29124 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__29111_29125 = null;
var count__29112_29126 = (0);
var i__29113_29127 = (0);
while(true){
if((i__29113_29127 < count__29112_29126)){
var vec__29114_29128 = cljs.core._nth.call(null,chunk__29111_29125,i__29113_29127);
var k__13561__auto___29129 = cljs.core.nth.call(null,vec__29114_29128,(0),null);
var cb__13562__auto___29130 = cljs.core.nth.call(null,vec__29114_29128,(1),null);
try{cb__13562__auto___29130.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13560__auto___29123,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e29117){if((e29117 instanceof java.lang.Exception)){
var e__13563__auto___29131 = e29117;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13561__auto___29129,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13563__auto___29131);
} else {
throw e29117;

}
}
var G__29132 = seq__29110_29124;
var G__29133 = chunk__29111_29125;
var G__29134 = count__29112_29126;
var G__29135 = (i__29113_29127 + (1));
seq__29110_29124 = G__29132;
chunk__29111_29125 = G__29133;
count__29112_29126 = G__29134;
i__29113_29127 = G__29135;
continue;
} else {
var temp__4657__auto___29136 = cljs.core.seq.call(null,seq__29110_29124);
if(temp__4657__auto___29136){
var seq__29110_29137__$1 = temp__4657__auto___29136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29110_29137__$1)){
var c__8507__auto___29138 = cljs.core.chunk_first.call(null,seq__29110_29137__$1);
var G__29139 = cljs.core.chunk_rest.call(null,seq__29110_29137__$1);
var G__29140 = c__8507__auto___29138;
var G__29141 = cljs.core.count.call(null,c__8507__auto___29138);
var G__29142 = (0);
seq__29110_29124 = G__29139;
chunk__29111_29125 = G__29140;
count__29112_29126 = G__29141;
i__29113_29127 = G__29142;
continue;
} else {
var vec__29118_29143 = cljs.core.first.call(null,seq__29110_29137__$1);
var k__13561__auto___29144 = cljs.core.nth.call(null,vec__29118_29143,(0),null);
var cb__13562__auto___29145 = cljs.core.nth.call(null,vec__29118_29143,(1),null);
try{cb__13562__auto___29145.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13560__auto___29123,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e29121){if((e29121 instanceof java.lang.Exception)){
var e__13563__auto___29146 = e29121;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13561__auto___29144,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13563__auto___29146);
} else {
throw e29121;

}
}
var G__29147 = cljs.core.next.call(null,seq__29110_29137__$1);
var G__29148 = null;
var G__29149 = (0);
var G__29150 = (0);
seq__29110_29124 = G__29147;
chunk__29111_29125 = G__29148;
count__29112_29126 = G__29149;
i__29113_29127 = G__29150;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_29109;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_29108;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1518565236131
