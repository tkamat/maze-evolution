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
var make_chain = (function (p1__41892_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__41892_SHARP_));
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

var temp__4657__auto___41893 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___41893)){
var not_i_41894 = temp__4657__auto___41893;
if(cljs.core.fn_QMARK_.call(null,not_i_41894)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_41894);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_41894);
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
var _STAR_handling_STAR_41895 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_41896 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41840__auto___41909 = re_frame.interop.now.call(null);
var duration__41841__auto___41910 = (end__41840__auto___41909 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__41897_41911 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__41898_41912 = null;
var count__41899_41913 = (0);
var i__41900_41914 = (0);
while(true){
if((i__41900_41914 < count__41899_41913)){
var vec__41901_41915 = cljs.core._nth.call(null,chunk__41898_41912,i__41900_41914);
var k__41842__auto___41916 = cljs.core.nth.call(null,vec__41901_41915,(0),null);
var cb__41843__auto___41917 = cljs.core.nth.call(null,vec__41901_41915,(1),null);
try{cb__41843__auto___41917.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41841__auto___41910,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e41904){if((e41904 instanceof java.lang.Exception)){
var e__41844__auto___41918 = e41904;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41842__auto___41916,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__41844__auto___41918);
} else {
throw e41904;

}
}
var G__41919 = seq__41897_41911;
var G__41920 = chunk__41898_41912;
var G__41921 = count__41899_41913;
var G__41922 = (i__41900_41914 + (1));
seq__41897_41911 = G__41919;
chunk__41898_41912 = G__41920;
count__41899_41913 = G__41921;
i__41900_41914 = G__41922;
continue;
} else {
var temp__4657__auto___41923 = cljs.core.seq.call(null,seq__41897_41911);
if(temp__4657__auto___41923){
var seq__41897_41924__$1 = temp__4657__auto___41923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41897_41924__$1)){
var c__37147__auto___41925 = cljs.core.chunk_first.call(null,seq__41897_41924__$1);
var G__41926 = cljs.core.chunk_rest.call(null,seq__41897_41924__$1);
var G__41927 = c__37147__auto___41925;
var G__41928 = cljs.core.count.call(null,c__37147__auto___41925);
var G__41929 = (0);
seq__41897_41911 = G__41926;
chunk__41898_41912 = G__41927;
count__41899_41913 = G__41928;
i__41900_41914 = G__41929;
continue;
} else {
var vec__41905_41930 = cljs.core.first.call(null,seq__41897_41924__$1);
var k__41842__auto___41931 = cljs.core.nth.call(null,vec__41905_41930,(0),null);
var cb__41843__auto___41932 = cljs.core.nth.call(null,vec__41905_41930,(1),null);
try{cb__41843__auto___41932.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41841__auto___41910,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e41908){if((e41908 instanceof java.lang.Exception)){
var e__41844__auto___41933 = e41908;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41842__auto___41931,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__41844__auto___41933);
} else {
throw e41908;

}
}
var G__41934 = cljs.core.next.call(null,seq__41897_41924__$1);
var G__41935 = null;
var G__41936 = (0);
var G__41937 = (0);
seq__41897_41911 = G__41934;
chunk__41898_41912 = G__41935;
count__41899_41913 = G__41936;
i__41900_41914 = G__41937;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_41896;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_41895;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1518330161843
