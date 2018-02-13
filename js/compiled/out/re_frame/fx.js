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
var seq__29225 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__29226 = null;
var count__29227 = (0);
var i__29228 = (0);
while(true){
if((i__29228 < count__29227)){
var vec__29229 = cljs.core._nth.call(null,chunk__29226,i__29228);
var effect_key = cljs.core.nth.call(null,vec__29229,(0),null);
var effect_value = cljs.core.nth.call(null,vec__29229,(1),null);
var temp__4655__auto___29235 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___29235)){
var effect_fn_29236 = temp__4655__auto___29235;
effect_fn_29236.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__29237 = seq__29225;
var G__29238 = chunk__29226;
var G__29239 = count__29227;
var G__29240 = (i__29228 + (1));
seq__29225 = G__29237;
chunk__29226 = G__29238;
count__29227 = G__29239;
i__29228 = G__29240;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29225);
if(temp__4657__auto__){
var seq__29225__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29225__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__29225__$1);
var G__29241 = cljs.core.chunk_rest.call(null,seq__29225__$1);
var G__29242 = c__8507__auto__;
var G__29243 = cljs.core.count.call(null,c__8507__auto__);
var G__29244 = (0);
seq__29225 = G__29241;
chunk__29226 = G__29242;
count__29227 = G__29243;
i__29228 = G__29244;
continue;
} else {
var vec__29232 = cljs.core.first.call(null,seq__29225__$1);
var effect_key = cljs.core.nth.call(null,vec__29232,(0),null);
var effect_value = cljs.core.nth.call(null,vec__29232,(1),null);
var temp__4655__auto___29245 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___29245)){
var effect_fn_29246 = temp__4655__auto___29245;
effect_fn_29246.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__29247 = cljs.core.next.call(null,seq__29225__$1);
var G__29248 = null;
var G__29249 = (0);
var G__29250 = (0);
seq__29225 = G__29247;
chunk__29226 = G__29248;
count__29227 = G__29249;
i__29228 = G__29250;
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
var seq__29251 = cljs.core.seq.call(null,value);
var chunk__29252 = null;
var count__29253 = (0);
var i__29254 = (0);
while(true){
if((i__29254 < count__29253)){
var map__29255 = cljs.core._nth.call(null,chunk__29252,i__29254);
var map__29255__$1 = ((((!((map__29255 == null)))?((((map__29255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29255):map__29255);
var effect = map__29255__$1;
var ms = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29251,chunk__29252,count__29253,i__29254,map__29255,map__29255__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__29251,chunk__29252,count__29253,i__29254,map__29255,map__29255__$1,effect,ms,dispatch))
,ms);
}

var G__29259 = seq__29251;
var G__29260 = chunk__29252;
var G__29261 = count__29253;
var G__29262 = (i__29254 + (1));
seq__29251 = G__29259;
chunk__29252 = G__29260;
count__29253 = G__29261;
i__29254 = G__29262;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29251);
if(temp__4657__auto__){
var seq__29251__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29251__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__29251__$1);
var G__29263 = cljs.core.chunk_rest.call(null,seq__29251__$1);
var G__29264 = c__8507__auto__;
var G__29265 = cljs.core.count.call(null,c__8507__auto__);
var G__29266 = (0);
seq__29251 = G__29263;
chunk__29252 = G__29264;
count__29253 = G__29265;
i__29254 = G__29266;
continue;
} else {
var map__29257 = cljs.core.first.call(null,seq__29251__$1);
var map__29257__$1 = ((((!((map__29257 == null)))?((((map__29257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29257):map__29257);
var effect = map__29257__$1;
var ms = cljs.core.get.call(null,map__29257__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29257__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29251,chunk__29252,count__29253,i__29254,map__29257,map__29257__$1,effect,ms,dispatch,seq__29251__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__29251,chunk__29252,count__29253,i__29254,map__29257,map__29257__$1,effect,ms,dispatch,seq__29251__$1,temp__4657__auto__))
,ms);
}

var G__29267 = cljs.core.next.call(null,seq__29251__$1);
var G__29268 = null;
var G__29269 = (0);
var G__29270 = (0);
seq__29251 = G__29267;
chunk__29252 = G__29268;
count__29253 = G__29269;
i__29254 = G__29270;
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
var seq__29271 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__29272 = null;
var count__29273 = (0);
var i__29274 = (0);
while(true){
if((i__29274 < count__29273)){
var event = cljs.core._nth.call(null,chunk__29272,i__29274);
re_frame.router.dispatch.call(null,event);

var G__29275 = seq__29271;
var G__29276 = chunk__29272;
var G__29277 = count__29273;
var G__29278 = (i__29274 + (1));
seq__29271 = G__29275;
chunk__29272 = G__29276;
count__29273 = G__29277;
i__29274 = G__29278;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29271);
if(temp__4657__auto__){
var seq__29271__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29271__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__29271__$1);
var G__29279 = cljs.core.chunk_rest.call(null,seq__29271__$1);
var G__29280 = c__8507__auto__;
var G__29281 = cljs.core.count.call(null,c__8507__auto__);
var G__29282 = (0);
seq__29271 = G__29279;
chunk__29272 = G__29280;
count__29273 = G__29281;
i__29274 = G__29282;
continue;
} else {
var event = cljs.core.first.call(null,seq__29271__$1);
re_frame.router.dispatch.call(null,event);

var G__29283 = cljs.core.next.call(null,seq__29271__$1);
var G__29284 = null;
var G__29285 = (0);
var G__29286 = (0);
seq__29271 = G__29283;
chunk__29272 = G__29284;
count__29273 = G__29285;
i__29274 = G__29286;
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
var seq__29287 = cljs.core.seq.call(null,value);
var chunk__29288 = null;
var count__29289 = (0);
var i__29290 = (0);
while(true){
if((i__29290 < count__29289)){
var event = cljs.core._nth.call(null,chunk__29288,i__29290);
clear_event.call(null,event);

var G__29291 = seq__29287;
var G__29292 = chunk__29288;
var G__29293 = count__29289;
var G__29294 = (i__29290 + (1));
seq__29287 = G__29291;
chunk__29288 = G__29292;
count__29289 = G__29293;
i__29290 = G__29294;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29287);
if(temp__4657__auto__){
var seq__29287__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29287__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__29287__$1);
var G__29295 = cljs.core.chunk_rest.call(null,seq__29287__$1);
var G__29296 = c__8507__auto__;
var G__29297 = cljs.core.count.call(null,c__8507__auto__);
var G__29298 = (0);
seq__29287 = G__29295;
chunk__29288 = G__29296;
count__29289 = G__29297;
i__29290 = G__29298;
continue;
} else {
var event = cljs.core.first.call(null,seq__29287__$1);
clear_event.call(null,event);

var G__29299 = cljs.core.next.call(null,seq__29287__$1);
var G__29300 = null;
var G__29301 = (0);
var G__29302 = (0);
seq__29287 = G__29299;
chunk__29288 = G__29300;
count__29289 = G__29301;
i__29290 = G__29302;
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

//# sourceMappingURL=fx.js.map?rel=1518565236270
