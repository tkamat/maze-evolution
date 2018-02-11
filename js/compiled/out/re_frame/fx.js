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
var seq__19533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19534 = null;
var count__19535 = (0);
var i__19536 = (0);
while(true){
if((i__19536 < count__19535)){
var vec__19537 = cljs.core._nth.call(null,chunk__19534,i__19536);
var effect_key = cljs.core.nth.call(null,vec__19537,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19537,(1),null);
var temp__4655__auto___19543 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19543)){
var effect_fn_19544 = temp__4655__auto___19543;
effect_fn_19544.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__19545 = seq__19533;
var G__19546 = chunk__19534;
var G__19547 = count__19535;
var G__19548 = (i__19536 + (1));
seq__19533 = G__19545;
chunk__19534 = G__19546;
count__19535 = G__19547;
i__19536 = G__19548;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19533);
if(temp__4657__auto__){
var seq__19533__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19533__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__19533__$1);
var G__19549 = cljs.core.chunk_rest.call(null,seq__19533__$1);
var G__19550 = c__8507__auto__;
var G__19551 = cljs.core.count.call(null,c__8507__auto__);
var G__19552 = (0);
seq__19533 = G__19549;
chunk__19534 = G__19550;
count__19535 = G__19551;
i__19536 = G__19552;
continue;
} else {
var vec__19540 = cljs.core.first.call(null,seq__19533__$1);
var effect_key = cljs.core.nth.call(null,vec__19540,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19540,(1),null);
var temp__4655__auto___19553 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19553)){
var effect_fn_19554 = temp__4655__auto___19553;
effect_fn_19554.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__19555 = cljs.core.next.call(null,seq__19533__$1);
var G__19556 = null;
var G__19557 = (0);
var G__19558 = (0);
seq__19533 = G__19555;
chunk__19534 = G__19556;
count__19535 = G__19557;
i__19536 = G__19558;
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
var seq__19559 = cljs.core.seq.call(null,value);
var chunk__19560 = null;
var count__19561 = (0);
var i__19562 = (0);
while(true){
if((i__19562 < count__19561)){
var map__19563 = cljs.core._nth.call(null,chunk__19560,i__19562);
var map__19563__$1 = ((((!((map__19563 == null)))?((((map__19563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19563):map__19563);
var effect = map__19563__$1;
var ms = cljs.core.get.call(null,map__19563__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__19563__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__19559,chunk__19560,count__19561,i__19562,map__19563,map__19563__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__19559,chunk__19560,count__19561,i__19562,map__19563,map__19563__$1,effect,ms,dispatch))
,ms);
}

var G__19567 = seq__19559;
var G__19568 = chunk__19560;
var G__19569 = count__19561;
var G__19570 = (i__19562 + (1));
seq__19559 = G__19567;
chunk__19560 = G__19568;
count__19561 = G__19569;
i__19562 = G__19570;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19559);
if(temp__4657__auto__){
var seq__19559__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19559__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__19559__$1);
var G__19571 = cljs.core.chunk_rest.call(null,seq__19559__$1);
var G__19572 = c__8507__auto__;
var G__19573 = cljs.core.count.call(null,c__8507__auto__);
var G__19574 = (0);
seq__19559 = G__19571;
chunk__19560 = G__19572;
count__19561 = G__19573;
i__19562 = G__19574;
continue;
} else {
var map__19565 = cljs.core.first.call(null,seq__19559__$1);
var map__19565__$1 = ((((!((map__19565 == null)))?((((map__19565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19565):map__19565);
var effect = map__19565__$1;
var ms = cljs.core.get.call(null,map__19565__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__19565__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__19559,chunk__19560,count__19561,i__19562,map__19565,map__19565__$1,effect,ms,dispatch,seq__19559__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__19559,chunk__19560,count__19561,i__19562,map__19565,map__19565__$1,effect,ms,dispatch,seq__19559__$1,temp__4657__auto__))
,ms);
}

var G__19575 = cljs.core.next.call(null,seq__19559__$1);
var G__19576 = null;
var G__19577 = (0);
var G__19578 = (0);
seq__19559 = G__19575;
chunk__19560 = G__19576;
count__19561 = G__19577;
i__19562 = G__19578;
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
var seq__19579 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__19580 = null;
var count__19581 = (0);
var i__19582 = (0);
while(true){
if((i__19582 < count__19581)){
var event = cljs.core._nth.call(null,chunk__19580,i__19582);
re_frame.router.dispatch.call(null,event);

var G__19583 = seq__19579;
var G__19584 = chunk__19580;
var G__19585 = count__19581;
var G__19586 = (i__19582 + (1));
seq__19579 = G__19583;
chunk__19580 = G__19584;
count__19581 = G__19585;
i__19582 = G__19586;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19579);
if(temp__4657__auto__){
var seq__19579__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19579__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__19579__$1);
var G__19587 = cljs.core.chunk_rest.call(null,seq__19579__$1);
var G__19588 = c__8507__auto__;
var G__19589 = cljs.core.count.call(null,c__8507__auto__);
var G__19590 = (0);
seq__19579 = G__19587;
chunk__19580 = G__19588;
count__19581 = G__19589;
i__19582 = G__19590;
continue;
} else {
var event = cljs.core.first.call(null,seq__19579__$1);
re_frame.router.dispatch.call(null,event);

var G__19591 = cljs.core.next.call(null,seq__19579__$1);
var G__19592 = null;
var G__19593 = (0);
var G__19594 = (0);
seq__19579 = G__19591;
chunk__19580 = G__19592;
count__19581 = G__19593;
i__19582 = G__19594;
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
var seq__19595 = cljs.core.seq.call(null,value);
var chunk__19596 = null;
var count__19597 = (0);
var i__19598 = (0);
while(true){
if((i__19598 < count__19597)){
var event = cljs.core._nth.call(null,chunk__19596,i__19598);
clear_event.call(null,event);

var G__19599 = seq__19595;
var G__19600 = chunk__19596;
var G__19601 = count__19597;
var G__19602 = (i__19598 + (1));
seq__19595 = G__19599;
chunk__19596 = G__19600;
count__19597 = G__19601;
i__19598 = G__19602;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19595);
if(temp__4657__auto__){
var seq__19595__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19595__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__19595__$1);
var G__19603 = cljs.core.chunk_rest.call(null,seq__19595__$1);
var G__19604 = c__8507__auto__;
var G__19605 = cljs.core.count.call(null,c__8507__auto__);
var G__19606 = (0);
seq__19595 = G__19603;
chunk__19596 = G__19604;
count__19597 = G__19605;
i__19598 = G__19606;
continue;
} else {
var event = cljs.core.first.call(null,seq__19595__$1);
clear_event.call(null,event);

var G__19607 = cljs.core.next.call(null,seq__19595__$1);
var G__19608 = null;
var G__19609 = (0);
var G__19610 = (0);
seq__19595 = G__19607;
chunk__19596 = G__19608;
count__19597 = G__19609;
i__19598 = G__19610;
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

//# sourceMappingURL=fx.js.map?rel=1518330961644
