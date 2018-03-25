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
var seq__24499 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__24500 = null;
var count__24501 = (0);
var i__24502 = (0);
while(true){
if((i__24502 < count__24501)){
var vec__24503 = chunk__24500.cljs$core$IIndexed$_nth$arity$2(null,i__24502);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24503,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24503,(1),null);
var temp__4655__auto___24509 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24509)){
var effect_fn_24510 = temp__4655__auto___24509;
(effect_fn_24510.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24510.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24510.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__24511 = seq__24499;
var G__24512 = chunk__24500;
var G__24513 = count__24501;
var G__24514 = (i__24502 + (1));
seq__24499 = G__24511;
chunk__24500 = G__24512;
count__24501 = G__24513;
i__24502 = G__24514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__24499);
if(temp__4657__auto__){
var seq__24499__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24499__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__24499__$1);
var G__24515 = cljs.core.chunk_rest(seq__24499__$1);
var G__24516 = c__8507__auto__;
var G__24517 = cljs.core.count(c__8507__auto__);
var G__24518 = (0);
seq__24499 = G__24515;
chunk__24500 = G__24516;
count__24501 = G__24517;
i__24502 = G__24518;
continue;
} else {
var vec__24506 = cljs.core.first(seq__24499__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24506,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24506,(1),null);
var temp__4655__auto___24519 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24519)){
var effect_fn_24520 = temp__4655__auto___24519;
(effect_fn_24520.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24520.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24520.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__24521 = cljs.core.next(seq__24499__$1);
var G__24522 = null;
var G__24523 = (0);
var G__24524 = (0);
seq__24499 = G__24521;
chunk__24500 = G__24522;
count__24501 = G__24523;
i__24502 = G__24524;
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
var seq__24525 = cljs.core.seq(value);
var chunk__24526 = null;
var count__24527 = (0);
var i__24528 = (0);
while(true){
if((i__24528 < count__24527)){
var map__24529 = chunk__24526.cljs$core$IIndexed$_nth$arity$2(null,i__24528);
var map__24529__$1 = ((((!((map__24529 == null)))?((((map__24529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24529):map__24529);
var effect = map__24529__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24529__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24529__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__24525,chunk__24526,count__24527,i__24528,map__24529,map__24529__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__24525,chunk__24526,count__24527,i__24528,map__24529,map__24529__$1,effect,ms,dispatch))
,ms);
}

var G__24533 = seq__24525;
var G__24534 = chunk__24526;
var G__24535 = count__24527;
var G__24536 = (i__24528 + (1));
seq__24525 = G__24533;
chunk__24526 = G__24534;
count__24527 = G__24535;
i__24528 = G__24536;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__24525);
if(temp__4657__auto__){
var seq__24525__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24525__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__24525__$1);
var G__24537 = cljs.core.chunk_rest(seq__24525__$1);
var G__24538 = c__8507__auto__;
var G__24539 = cljs.core.count(c__8507__auto__);
var G__24540 = (0);
seq__24525 = G__24537;
chunk__24526 = G__24538;
count__24527 = G__24539;
i__24528 = G__24540;
continue;
} else {
var map__24531 = cljs.core.first(seq__24525__$1);
var map__24531__$1 = ((((!((map__24531 == null)))?((((map__24531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24531):map__24531);
var effect = map__24531__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24531__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24531__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__24525,chunk__24526,count__24527,i__24528,map__24531,map__24531__$1,effect,ms,dispatch,seq__24525__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__24525,chunk__24526,count__24527,i__24528,map__24531,map__24531__$1,effect,ms,dispatch,seq__24525__$1,temp__4657__auto__))
,ms);
}

var G__24541 = cljs.core.next(seq__24525__$1);
var G__24542 = null;
var G__24543 = (0);
var G__24544 = (0);
seq__24525 = G__24541;
chunk__24526 = G__24542;
count__24527 = G__24543;
i__24528 = G__24544;
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
var seq__24545 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24546 = null;
var count__24547 = (0);
var i__24548 = (0);
while(true){
if((i__24548 < count__24547)){
var event = chunk__24546.cljs$core$IIndexed$_nth$arity$2(null,i__24548);
re_frame.router.dispatch(event);

var G__24549 = seq__24545;
var G__24550 = chunk__24546;
var G__24551 = count__24547;
var G__24552 = (i__24548 + (1));
seq__24545 = G__24549;
chunk__24546 = G__24550;
count__24547 = G__24551;
i__24548 = G__24552;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__24545);
if(temp__4657__auto__){
var seq__24545__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24545__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__24545__$1);
var G__24553 = cljs.core.chunk_rest(seq__24545__$1);
var G__24554 = c__8507__auto__;
var G__24555 = cljs.core.count(c__8507__auto__);
var G__24556 = (0);
seq__24545 = G__24553;
chunk__24546 = G__24554;
count__24547 = G__24555;
i__24548 = G__24556;
continue;
} else {
var event = cljs.core.first(seq__24545__$1);
re_frame.router.dispatch(event);

var G__24557 = cljs.core.next(seq__24545__$1);
var G__24558 = null;
var G__24559 = (0);
var G__24560 = (0);
seq__24545 = G__24557;
chunk__24546 = G__24558;
count__24547 = G__24559;
i__24548 = G__24560;
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
var seq__24561 = cljs.core.seq(value);
var chunk__24562 = null;
var count__24563 = (0);
var i__24564 = (0);
while(true){
if((i__24564 < count__24563)){
var event = chunk__24562.cljs$core$IIndexed$_nth$arity$2(null,i__24564);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__24565 = seq__24561;
var G__24566 = chunk__24562;
var G__24567 = count__24563;
var G__24568 = (i__24564 + (1));
seq__24561 = G__24565;
chunk__24562 = G__24566;
count__24563 = G__24567;
i__24564 = G__24568;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__24561);
if(temp__4657__auto__){
var seq__24561__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24561__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__24561__$1);
var G__24569 = cljs.core.chunk_rest(seq__24561__$1);
var G__24570 = c__8507__auto__;
var G__24571 = cljs.core.count(c__8507__auto__);
var G__24572 = (0);
seq__24561 = G__24569;
chunk__24562 = G__24570;
count__24563 = G__24571;
i__24564 = G__24572;
continue;
} else {
var event = cljs.core.first(seq__24561__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__24573 = cljs.core.next(seq__24561__$1);
var G__24574 = null;
var G__24575 = (0);
var G__24576 = (0);
seq__24561 = G__24573;
chunk__24562 = G__24574;
count__24563 = G__24575;
i__24564 = G__24576;
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
