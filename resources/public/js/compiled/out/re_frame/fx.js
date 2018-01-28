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
var seq__31188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31189 = null;
var count__31190 = (0);
var i__31191 = (0);
while(true){
if((i__31191 < count__31190)){
var vec__31192 = cljs.core._nth.call(null,chunk__31189,i__31191);
var effect_key = cljs.core.nth.call(null,vec__31192,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31192,(1),null);
var temp__4655__auto___31198 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31198)){
var effect_fn_31199 = temp__4655__auto___31198;
effect_fn_31199.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31200 = seq__31188;
var G__31201 = chunk__31189;
var G__31202 = count__31190;
var G__31203 = (i__31191 + (1));
seq__31188 = G__31200;
chunk__31189 = G__31201;
count__31190 = G__31202;
i__31191 = G__31203;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31188);
if(temp__4657__auto__){
var seq__31188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31188__$1)){
var c__29173__auto__ = cljs.core.chunk_first.call(null,seq__31188__$1);
var G__31204 = cljs.core.chunk_rest.call(null,seq__31188__$1);
var G__31205 = c__29173__auto__;
var G__31206 = cljs.core.count.call(null,c__29173__auto__);
var G__31207 = (0);
seq__31188 = G__31204;
chunk__31189 = G__31205;
count__31190 = G__31206;
i__31191 = G__31207;
continue;
} else {
var vec__31195 = cljs.core.first.call(null,seq__31188__$1);
var effect_key = cljs.core.nth.call(null,vec__31195,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31195,(1),null);
var temp__4655__auto___31208 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31208)){
var effect_fn_31209 = temp__4655__auto___31208;
effect_fn_31209.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31210 = cljs.core.next.call(null,seq__31188__$1);
var G__31211 = null;
var G__31212 = (0);
var G__31213 = (0);
seq__31188 = G__31210;
chunk__31189 = G__31211;
count__31190 = G__31212;
i__31191 = G__31213;
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
var seq__31214 = cljs.core.seq.call(null,value);
var chunk__31215 = null;
var count__31216 = (0);
var i__31217 = (0);
while(true){
if((i__31217 < count__31216)){
var map__31218 = cljs.core._nth.call(null,chunk__31215,i__31217);
var map__31218__$1 = ((((!((map__31218 == null)))?((((map__31218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31218):map__31218);
var effect = map__31218__$1;
var ms = cljs.core.get.call(null,map__31218__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31218__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31214,chunk__31215,count__31216,i__31217,map__31218,map__31218__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31214,chunk__31215,count__31216,i__31217,map__31218,map__31218__$1,effect,ms,dispatch))
,ms);
}

var G__31222 = seq__31214;
var G__31223 = chunk__31215;
var G__31224 = count__31216;
var G__31225 = (i__31217 + (1));
seq__31214 = G__31222;
chunk__31215 = G__31223;
count__31216 = G__31224;
i__31217 = G__31225;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31214);
if(temp__4657__auto__){
var seq__31214__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31214__$1)){
var c__29173__auto__ = cljs.core.chunk_first.call(null,seq__31214__$1);
var G__31226 = cljs.core.chunk_rest.call(null,seq__31214__$1);
var G__31227 = c__29173__auto__;
var G__31228 = cljs.core.count.call(null,c__29173__auto__);
var G__31229 = (0);
seq__31214 = G__31226;
chunk__31215 = G__31227;
count__31216 = G__31228;
i__31217 = G__31229;
continue;
} else {
var map__31220 = cljs.core.first.call(null,seq__31214__$1);
var map__31220__$1 = ((((!((map__31220 == null)))?((((map__31220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31220):map__31220);
var effect = map__31220__$1;
var ms = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31214,chunk__31215,count__31216,i__31217,map__31220,map__31220__$1,effect,ms,dispatch,seq__31214__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31214,chunk__31215,count__31216,i__31217,map__31220,map__31220__$1,effect,ms,dispatch,seq__31214__$1,temp__4657__auto__))
,ms);
}

var G__31230 = cljs.core.next.call(null,seq__31214__$1);
var G__31231 = null;
var G__31232 = (0);
var G__31233 = (0);
seq__31214 = G__31230;
chunk__31215 = G__31231;
count__31216 = G__31232;
i__31217 = G__31233;
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
var seq__31234 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31235 = null;
var count__31236 = (0);
var i__31237 = (0);
while(true){
if((i__31237 < count__31236)){
var event = cljs.core._nth.call(null,chunk__31235,i__31237);
re_frame.router.dispatch.call(null,event);

var G__31238 = seq__31234;
var G__31239 = chunk__31235;
var G__31240 = count__31236;
var G__31241 = (i__31237 + (1));
seq__31234 = G__31238;
chunk__31235 = G__31239;
count__31236 = G__31240;
i__31237 = G__31241;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31234);
if(temp__4657__auto__){
var seq__31234__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31234__$1)){
var c__29173__auto__ = cljs.core.chunk_first.call(null,seq__31234__$1);
var G__31242 = cljs.core.chunk_rest.call(null,seq__31234__$1);
var G__31243 = c__29173__auto__;
var G__31244 = cljs.core.count.call(null,c__29173__auto__);
var G__31245 = (0);
seq__31234 = G__31242;
chunk__31235 = G__31243;
count__31236 = G__31244;
i__31237 = G__31245;
continue;
} else {
var event = cljs.core.first.call(null,seq__31234__$1);
re_frame.router.dispatch.call(null,event);

var G__31246 = cljs.core.next.call(null,seq__31234__$1);
var G__31247 = null;
var G__31248 = (0);
var G__31249 = (0);
seq__31234 = G__31246;
chunk__31235 = G__31247;
count__31236 = G__31248;
i__31237 = G__31249;
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
var seq__31250 = cljs.core.seq.call(null,value);
var chunk__31251 = null;
var count__31252 = (0);
var i__31253 = (0);
while(true){
if((i__31253 < count__31252)){
var event = cljs.core._nth.call(null,chunk__31251,i__31253);
clear_event.call(null,event);

var G__31254 = seq__31250;
var G__31255 = chunk__31251;
var G__31256 = count__31252;
var G__31257 = (i__31253 + (1));
seq__31250 = G__31254;
chunk__31251 = G__31255;
count__31252 = G__31256;
i__31253 = G__31257;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31250);
if(temp__4657__auto__){
var seq__31250__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31250__$1)){
var c__29173__auto__ = cljs.core.chunk_first.call(null,seq__31250__$1);
var G__31258 = cljs.core.chunk_rest.call(null,seq__31250__$1);
var G__31259 = c__29173__auto__;
var G__31260 = cljs.core.count.call(null,c__29173__auto__);
var G__31261 = (0);
seq__31250 = G__31258;
chunk__31251 = G__31259;
count__31252 = G__31260;
i__31253 = G__31261;
continue;
} else {
var event = cljs.core.first.call(null,seq__31250__$1);
clear_event.call(null,event);

var G__31262 = cljs.core.next.call(null,seq__31250__$1);
var G__31263 = null;
var G__31264 = (0);
var G__31265 = (0);
seq__31250 = G__31262;
chunk__31251 = G__31263;
count__31252 = G__31264;
i__31253 = G__31265;
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

//# sourceMappingURL=fx.js.map?rel=1517031108213
