// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__47473 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47474 = null;
var count__47475 = (0);
var i__47476 = (0);
while(true){
if((i__47476 < count__47475)){
var vec__47477 = cljs.core._nth.call(null,chunk__47474,i__47476);
var effect_key = cljs.core.nth.call(null,vec__47477,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47477,(1),null);
var temp__4655__auto___47483 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47483)){
var effect_fn_47484 = temp__4655__auto___47483;
effect_fn_47484.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__47485 = seq__47473;
var G__47486 = chunk__47474;
var G__47487 = count__47475;
var G__47488 = (i__47476 + (1));
seq__47473 = G__47485;
chunk__47474 = G__47486;
count__47475 = G__47487;
i__47476 = G__47488;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47473);
if(temp__4657__auto__){
var seq__47473__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47473__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__47473__$1);
var G__47489 = cljs.core.chunk_rest.call(null,seq__47473__$1);
var G__47490 = c__37147__auto__;
var G__47491 = cljs.core.count.call(null,c__37147__auto__);
var G__47492 = (0);
seq__47473 = G__47489;
chunk__47474 = G__47490;
count__47475 = G__47491;
i__47476 = G__47492;
continue;
} else {
var vec__47480 = cljs.core.first.call(null,seq__47473__$1);
var effect_key = cljs.core.nth.call(null,vec__47480,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47480,(1),null);
var temp__4655__auto___47493 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47493)){
var effect_fn_47494 = temp__4655__auto___47493;
effect_fn_47494.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__47495 = cljs.core.next.call(null,seq__47473__$1);
var G__47496 = null;
var G__47497 = (0);
var G__47498 = (0);
seq__47473 = G__47495;
chunk__47474 = G__47496;
count__47475 = G__47497;
i__47476 = G__47498;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47499 = cljs.core.seq.call(null,value);
var chunk__47500 = null;
var count__47501 = (0);
var i__47502 = (0);
while(true){
if((i__47502 < count__47501)){
var map__47503 = cljs.core._nth.call(null,chunk__47500,i__47502);
var map__47503__$1 = ((((!((map__47503 == null)))?((((map__47503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47503):map__47503);
var effect = map__47503__$1;
var ms = cljs.core.get.call(null,map__47503__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47503__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47499,chunk__47500,count__47501,i__47502,map__47503,map__47503__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47499,chunk__47500,count__47501,i__47502,map__47503,map__47503__$1,effect,ms,dispatch))
,ms);
}

var G__47507 = seq__47499;
var G__47508 = chunk__47500;
var G__47509 = count__47501;
var G__47510 = (i__47502 + (1));
seq__47499 = G__47507;
chunk__47500 = G__47508;
count__47501 = G__47509;
i__47502 = G__47510;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47499);
if(temp__4657__auto__){
var seq__47499__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47499__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__47499__$1);
var G__47511 = cljs.core.chunk_rest.call(null,seq__47499__$1);
var G__47512 = c__37147__auto__;
var G__47513 = cljs.core.count.call(null,c__37147__auto__);
var G__47514 = (0);
seq__47499 = G__47511;
chunk__47500 = G__47512;
count__47501 = G__47513;
i__47502 = G__47514;
continue;
} else {
var map__47505 = cljs.core.first.call(null,seq__47499__$1);
var map__47505__$1 = ((((!((map__47505 == null)))?((((map__47505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47505):map__47505);
var effect = map__47505__$1;
var ms = cljs.core.get.call(null,map__47505__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47505__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47499,chunk__47500,count__47501,i__47502,map__47505,map__47505__$1,effect,ms,dispatch,seq__47499__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47499,chunk__47500,count__47501,i__47502,map__47505,map__47505__$1,effect,ms,dispatch,seq__47499__$1,temp__4657__auto__))
,ms);
}

var G__47515 = cljs.core.next.call(null,seq__47499__$1);
var G__47516 = null;
var G__47517 = (0);
var G__47518 = (0);
seq__47499 = G__47515;
chunk__47500 = G__47516;
count__47501 = G__47517;
i__47502 = G__47518;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__47519 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__47520 = null;
var count__47521 = (0);
var i__47522 = (0);
while(true){
if((i__47522 < count__47521)){
var event = cljs.core._nth.call(null,chunk__47520,i__47522);
re_frame.router.dispatch.call(null,event);

var G__47523 = seq__47519;
var G__47524 = chunk__47520;
var G__47525 = count__47521;
var G__47526 = (i__47522 + (1));
seq__47519 = G__47523;
chunk__47520 = G__47524;
count__47521 = G__47525;
i__47522 = G__47526;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47519);
if(temp__4657__auto__){
var seq__47519__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47519__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__47519__$1);
var G__47527 = cljs.core.chunk_rest.call(null,seq__47519__$1);
var G__47528 = c__37147__auto__;
var G__47529 = cljs.core.count.call(null,c__37147__auto__);
var G__47530 = (0);
seq__47519 = G__47527;
chunk__47520 = G__47528;
count__47521 = G__47529;
i__47522 = G__47530;
continue;
} else {
var event = cljs.core.first.call(null,seq__47519__$1);
re_frame.router.dispatch.call(null,event);

var G__47531 = cljs.core.next.call(null,seq__47519__$1);
var G__47532 = null;
var G__47533 = (0);
var G__47534 = (0);
seq__47519 = G__47531;
chunk__47520 = G__47532;
count__47521 = G__47533;
i__47522 = G__47534;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__47535 = cljs.core.seq.call(null,value);
var chunk__47536 = null;
var count__47537 = (0);
var i__47538 = (0);
while(true){
if((i__47538 < count__47537)){
var event = cljs.core._nth.call(null,chunk__47536,i__47538);
clear_event.call(null,event);

var G__47539 = seq__47535;
var G__47540 = chunk__47536;
var G__47541 = count__47537;
var G__47542 = (i__47538 + (1));
seq__47535 = G__47539;
chunk__47536 = G__47540;
count__47537 = G__47541;
i__47538 = G__47542;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47535);
if(temp__4657__auto__){
var seq__47535__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47535__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__47535__$1);
var G__47543 = cljs.core.chunk_rest.call(null,seq__47535__$1);
var G__47544 = c__37147__auto__;
var G__47545 = cljs.core.count.call(null,c__37147__auto__);
var G__47546 = (0);
seq__47535 = G__47543;
chunk__47536 = G__47544;
count__47537 = G__47545;
i__47538 = G__47546;
continue;
} else {
var event = cljs.core.first.call(null,seq__47535__$1);
clear_event.call(null,event);

var G__47547 = cljs.core.next.call(null,seq__47535__$1);
var G__47548 = null;
var G__47549 = (0);
var G__47550 = (0);
seq__47535 = G__47547;
chunk__47536 = G__47548;
count__47537 = G__47549;
i__47538 = G__47550;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1518330183511
