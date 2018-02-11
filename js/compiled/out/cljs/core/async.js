// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45538 = arguments.length;
switch (G__45538) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async45539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45539 = (function (f,blockable,meta45540){
this.f = f;
this.blockable = blockable;
this.meta45540 = meta45540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45541,meta45540__$1){
var self__ = this;
var _45541__$1 = this;
return (new cljs.core.async.t_cljs$core$async45539(self__.f,self__.blockable,meta45540__$1));
});

cljs.core.async.t_cljs$core$async45539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45541){
var self__ = this;
var _45541__$1 = this;
return self__.meta45540;
});

cljs.core.async.t_cljs$core$async45539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45540","meta45540",183136615,null)], null);
});

cljs.core.async.t_cljs$core$async45539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45539";

cljs.core.async.t_cljs$core$async45539.cljs$lang$ctorPrWriter = (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async45539");
});

cljs.core.async.__GT_t_cljs$core$async45539 = (function cljs$core$async$__GT_t_cljs$core$async45539(f__$1,blockable__$1,meta45540){
return (new cljs.core.async.t_cljs$core$async45539(f__$1,blockable__$1,meta45540));
});

}

return (new cljs.core.async.t_cljs$core$async45539(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45545 = arguments.length;
switch (G__45545) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45548 = arguments.length;
switch (G__45548) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45551 = arguments.length;
switch (G__45551) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45553 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45553);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45553,ret){
return (function (){
return fn1.call(null,val_45553);
});})(val_45553,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45555 = arguments.length;
switch (G__45555) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__37255__auto___45557 = n;
var x_45558 = (0);
while(true){
if((x_45558 < n__37255__auto___45557)){
(a[x_45558] = (0));

var G__45559 = (x_45558 + (1));
x_45558 = G__45559;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45560 = (i + (1));
i = G__45560;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45561 = (function (flag,meta45562){
this.flag = flag;
this.meta45562 = meta45562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45563,meta45562__$1){
var self__ = this;
var _45563__$1 = this;
return (new cljs.core.async.t_cljs$core$async45561(self__.flag,meta45562__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45563){
var self__ = this;
var _45563__$1 = this;
return self__.meta45562;
});})(flag))
;

cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45561.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45562","meta45562",-284818398,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45561";

cljs.core.async.t_cljs$core$async45561.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async45561");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45561 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45561(flag__$1,meta45562){
return (new cljs.core.async.t_cljs$core$async45561(flag__$1,meta45562));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45561(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45564 = (function (flag,cb,meta45565){
this.flag = flag;
this.cb = cb;
this.meta45565 = meta45565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45566,meta45565__$1){
var self__ = this;
var _45566__$1 = this;
return (new cljs.core.async.t_cljs$core$async45564(self__.flag,self__.cb,meta45565__$1));
});

cljs.core.async.t_cljs$core$async45564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45566){
var self__ = this;
var _45566__$1 = this;
return self__.meta45565;
});

cljs.core.async.t_cljs$core$async45564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45565","meta45565",-1267962211,null)], null);
});

cljs.core.async.t_cljs$core$async45564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45564";

cljs.core.async.t_cljs$core$async45564.cljs$lang$ctorPrWriter = (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async45564");
});

cljs.core.async.__GT_t_cljs$core$async45564 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45564(flag__$1,cb__$1,meta45565){
return (new cljs.core.async.t_cljs$core$async45564(flag__$1,cb__$1,meta45565));
});

}

return (new cljs.core.async.t_cljs$core$async45564(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45567_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45567_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45568_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45568_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36308__auto__ = wport;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45569 = (i + (1));
i = G__45569;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36308__auto__ = ret;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36296__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36296__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___45575 = arguments.length;
var i__37480__auto___45576 = (0);
while(true){
if((i__37480__auto___45576 < len__37479__auto___45575)){
args__37486__auto__.push((arguments[i__37480__auto___45576]));

var G__45577 = (i__37480__auto___45576 + (1));
i__37480__auto___45576 = G__45577;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((1) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37487__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45572){
var map__45573 = p__45572;
var map__45573__$1 = ((((!((map__45573 == null)))?((((map__45573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45573):map__45573);
var opts = map__45573__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45570){
var G__45571 = cljs.core.first.call(null,seq45570);
var seq45570__$1 = cljs.core.next.call(null,seq45570);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45571,seq45570__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45579 = arguments.length;
switch (G__45579) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45492__auto___45625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___45625){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___45625){
return (function (state_45603){
var state_val_45604 = (state_45603[(1)]);
if((state_val_45604 === (7))){
var inst_45599 = (state_45603[(2)]);
var state_45603__$1 = state_45603;
var statearr_45605_45626 = state_45603__$1;
(statearr_45605_45626[(2)] = inst_45599);

(statearr_45605_45626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (1))){
var state_45603__$1 = state_45603;
var statearr_45606_45627 = state_45603__$1;
(statearr_45606_45627[(2)] = null);

(statearr_45606_45627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (4))){
var inst_45582 = (state_45603[(7)]);
var inst_45582__$1 = (state_45603[(2)]);
var inst_45583 = (inst_45582__$1 == null);
var state_45603__$1 = (function (){var statearr_45607 = state_45603;
(statearr_45607[(7)] = inst_45582__$1);

return statearr_45607;
})();
if(cljs.core.truth_(inst_45583)){
var statearr_45608_45628 = state_45603__$1;
(statearr_45608_45628[(1)] = (5));

} else {
var statearr_45609_45629 = state_45603__$1;
(statearr_45609_45629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (13))){
var state_45603__$1 = state_45603;
var statearr_45610_45630 = state_45603__$1;
(statearr_45610_45630[(2)] = null);

(statearr_45610_45630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (6))){
var inst_45582 = (state_45603[(7)]);
var state_45603__$1 = state_45603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45603__$1,(11),to,inst_45582);
} else {
if((state_val_45604 === (3))){
var inst_45601 = (state_45603[(2)]);
var state_45603__$1 = state_45603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45603__$1,inst_45601);
} else {
if((state_val_45604 === (12))){
var state_45603__$1 = state_45603;
var statearr_45611_45631 = state_45603__$1;
(statearr_45611_45631[(2)] = null);

(statearr_45611_45631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (2))){
var state_45603__$1 = state_45603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45603__$1,(4),from);
} else {
if((state_val_45604 === (11))){
var inst_45592 = (state_45603[(2)]);
var state_45603__$1 = state_45603;
if(cljs.core.truth_(inst_45592)){
var statearr_45612_45632 = state_45603__$1;
(statearr_45612_45632[(1)] = (12));

} else {
var statearr_45613_45633 = state_45603__$1;
(statearr_45613_45633[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (9))){
var state_45603__$1 = state_45603;
var statearr_45614_45634 = state_45603__$1;
(statearr_45614_45634[(2)] = null);

(statearr_45614_45634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (5))){
var state_45603__$1 = state_45603;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45615_45635 = state_45603__$1;
(statearr_45615_45635[(1)] = (8));

} else {
var statearr_45616_45636 = state_45603__$1;
(statearr_45616_45636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (14))){
var inst_45597 = (state_45603[(2)]);
var state_45603__$1 = state_45603;
var statearr_45617_45637 = state_45603__$1;
(statearr_45617_45637[(2)] = inst_45597);

(statearr_45617_45637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (10))){
var inst_45589 = (state_45603[(2)]);
var state_45603__$1 = state_45603;
var statearr_45618_45638 = state_45603__$1;
(statearr_45618_45638[(2)] = inst_45589);

(statearr_45618_45638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (8))){
var inst_45586 = cljs.core.async.close_BANG_.call(null,to);
var state_45603__$1 = state_45603;
var statearr_45619_45639 = state_45603__$1;
(statearr_45619_45639[(2)] = inst_45586);

(statearr_45619_45639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___45625))
;
return ((function (switch__45404__auto__,c__45492__auto___45625){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_45620 = [null,null,null,null,null,null,null,null];
(statearr_45620[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_45620[(1)] = (1));

return statearr_45620;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_45603){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_45603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e45621){if((e45621 instanceof Object)){
var ex__45408__auto__ = e45621;
var statearr_45622_45640 = state_45603;
(statearr_45622_45640[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45641 = state_45603;
state_45603 = G__45641;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_45603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_45603);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___45625))
})();
var state__45494__auto__ = (function (){var statearr_45623 = f__45493__auto__.call(null);
(statearr_45623[(6)] = c__45492__auto___45625);

return statearr_45623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___45625))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45642){
var vec__45643 = p__45642;
var v = cljs.core.nth.call(null,vec__45643,(0),null);
var p = cljs.core.nth.call(null,vec__45643,(1),null);
var job = vec__45643;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__45492__auto___45814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___45814,res,vec__45643,v,p,job,jobs,results){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___45814,res,vec__45643,v,p,job,jobs,results){
return (function (state_45650){
var state_val_45651 = (state_45650[(1)]);
if((state_val_45651 === (1))){
var state_45650__$1 = state_45650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45650__$1,(2),res,v);
} else {
if((state_val_45651 === (2))){
var inst_45647 = (state_45650[(2)]);
var inst_45648 = cljs.core.async.close_BANG_.call(null,res);
var state_45650__$1 = (function (){var statearr_45652 = state_45650;
(statearr_45652[(7)] = inst_45647);

return statearr_45652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45650__$1,inst_45648);
} else {
return null;
}
}
});})(c__45492__auto___45814,res,vec__45643,v,p,job,jobs,results))
;
return ((function (switch__45404__auto__,c__45492__auto___45814,res,vec__45643,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0 = (function (){
var statearr_45653 = [null,null,null,null,null,null,null,null];
(statearr_45653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__);

(statearr_45653[(1)] = (1));

return statearr_45653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1 = (function (state_45650){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_45650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e45654){if((e45654 instanceof Object)){
var ex__45408__auto__ = e45654;
var statearr_45655_45815 = state_45650;
(statearr_45655_45815[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45816 = state_45650;
state_45650 = G__45816;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = function(state_45650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1.call(this,state_45650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___45814,res,vec__45643,v,p,job,jobs,results))
})();
var state__45494__auto__ = (function (){var statearr_45656 = f__45493__auto__.call(null);
(statearr_45656[(6)] = c__45492__auto___45814);

return statearr_45656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___45814,res,vec__45643,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45657){
var vec__45658 = p__45657;
var v = cljs.core.nth.call(null,vec__45658,(0),null);
var p = cljs.core.nth.call(null,vec__45658,(1),null);
var job = vec__45658;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__37255__auto___45817 = n;
var __45818 = (0);
while(true){
if((__45818 < n__37255__auto___45817)){
var G__45661_45819 = type;
var G__45661_45820__$1 = (((G__45661_45819 instanceof cljs.core.Keyword))?G__45661_45819.fqn:null);
switch (G__45661_45820__$1) {
case "compute":
var c__45492__auto___45822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45818,c__45492__auto___45822,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (__45818,c__45492__auto___45822,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async){
return (function (state_45674){
var state_val_45675 = (state_45674[(1)]);
if((state_val_45675 === (1))){
var state_45674__$1 = state_45674;
var statearr_45676_45823 = state_45674__$1;
(statearr_45676_45823[(2)] = null);

(statearr_45676_45823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (2))){
var state_45674__$1 = state_45674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45674__$1,(4),jobs);
} else {
if((state_val_45675 === (3))){
var inst_45672 = (state_45674[(2)]);
var state_45674__$1 = state_45674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45674__$1,inst_45672);
} else {
if((state_val_45675 === (4))){
var inst_45664 = (state_45674[(2)]);
var inst_45665 = process.call(null,inst_45664);
var state_45674__$1 = state_45674;
if(cljs.core.truth_(inst_45665)){
var statearr_45677_45824 = state_45674__$1;
(statearr_45677_45824[(1)] = (5));

} else {
var statearr_45678_45825 = state_45674__$1;
(statearr_45678_45825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (5))){
var state_45674__$1 = state_45674;
var statearr_45679_45826 = state_45674__$1;
(statearr_45679_45826[(2)] = null);

(statearr_45679_45826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (6))){
var state_45674__$1 = state_45674;
var statearr_45680_45827 = state_45674__$1;
(statearr_45680_45827[(2)] = null);

(statearr_45680_45827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (7))){
var inst_45670 = (state_45674[(2)]);
var state_45674__$1 = state_45674;
var statearr_45681_45828 = state_45674__$1;
(statearr_45681_45828[(2)] = inst_45670);

(statearr_45681_45828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45818,c__45492__auto___45822,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async))
;
return ((function (__45818,switch__45404__auto__,c__45492__auto___45822,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0 = (function (){
var statearr_45682 = [null,null,null,null,null,null,null];
(statearr_45682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__);

(statearr_45682[(1)] = (1));

return statearr_45682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1 = (function (state_45674){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_45674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e45683){if((e45683 instanceof Object)){
var ex__45408__auto__ = e45683;
var statearr_45684_45829 = state_45674;
(statearr_45684_45829[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45830 = state_45674;
state_45674 = G__45830;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = function(state_45674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1.call(this,state_45674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__;
})()
;})(__45818,switch__45404__auto__,c__45492__auto___45822,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async))
})();
var state__45494__auto__ = (function (){var statearr_45685 = f__45493__auto__.call(null);
(statearr_45685[(6)] = c__45492__auto___45822);

return statearr_45685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(__45818,c__45492__auto___45822,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async))
);


break;
case "async":
var c__45492__auto___45831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45818,c__45492__auto___45831,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (__45818,c__45492__auto___45831,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async){
return (function (state_45698){
var state_val_45699 = (state_45698[(1)]);
if((state_val_45699 === (1))){
var state_45698__$1 = state_45698;
var statearr_45700_45832 = state_45698__$1;
(statearr_45700_45832[(2)] = null);

(statearr_45700_45832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45699 === (2))){
var state_45698__$1 = state_45698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45698__$1,(4),jobs);
} else {
if((state_val_45699 === (3))){
var inst_45696 = (state_45698[(2)]);
var state_45698__$1 = state_45698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45698__$1,inst_45696);
} else {
if((state_val_45699 === (4))){
var inst_45688 = (state_45698[(2)]);
var inst_45689 = async.call(null,inst_45688);
var state_45698__$1 = state_45698;
if(cljs.core.truth_(inst_45689)){
var statearr_45701_45833 = state_45698__$1;
(statearr_45701_45833[(1)] = (5));

} else {
var statearr_45702_45834 = state_45698__$1;
(statearr_45702_45834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45699 === (5))){
var state_45698__$1 = state_45698;
var statearr_45703_45835 = state_45698__$1;
(statearr_45703_45835[(2)] = null);

(statearr_45703_45835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45699 === (6))){
var state_45698__$1 = state_45698;
var statearr_45704_45836 = state_45698__$1;
(statearr_45704_45836[(2)] = null);

(statearr_45704_45836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45699 === (7))){
var inst_45694 = (state_45698[(2)]);
var state_45698__$1 = state_45698;
var statearr_45705_45837 = state_45698__$1;
(statearr_45705_45837[(2)] = inst_45694);

(statearr_45705_45837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45818,c__45492__auto___45831,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async))
;
return ((function (__45818,switch__45404__auto__,c__45492__auto___45831,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0 = (function (){
var statearr_45706 = [null,null,null,null,null,null,null];
(statearr_45706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__);

(statearr_45706[(1)] = (1));

return statearr_45706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1 = (function (state_45698){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_45698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e45707){if((e45707 instanceof Object)){
var ex__45408__auto__ = e45707;
var statearr_45708_45838 = state_45698;
(statearr_45708_45838[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45839 = state_45698;
state_45698 = G__45839;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = function(state_45698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1.call(this,state_45698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__;
})()
;})(__45818,switch__45404__auto__,c__45492__auto___45831,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async))
})();
var state__45494__auto__ = (function (){var statearr_45709 = f__45493__auto__.call(null);
(statearr_45709[(6)] = c__45492__auto___45831);

return statearr_45709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(__45818,c__45492__auto___45831,G__45661_45819,G__45661_45820__$1,n__37255__auto___45817,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45661_45820__$1)].join('')));

}

var G__45840 = (__45818 + (1));
__45818 = G__45840;
continue;
} else {
}
break;
}

var c__45492__auto___45841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___45841,jobs,results,process,async){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___45841,jobs,results,process,async){
return (function (state_45731){
var state_val_45732 = (state_45731[(1)]);
if((state_val_45732 === (1))){
var state_45731__$1 = state_45731;
var statearr_45733_45842 = state_45731__$1;
(statearr_45733_45842[(2)] = null);

(statearr_45733_45842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45732 === (2))){
var state_45731__$1 = state_45731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45731__$1,(4),from);
} else {
if((state_val_45732 === (3))){
var inst_45729 = (state_45731[(2)]);
var state_45731__$1 = state_45731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45731__$1,inst_45729);
} else {
if((state_val_45732 === (4))){
var inst_45712 = (state_45731[(7)]);
var inst_45712__$1 = (state_45731[(2)]);
var inst_45713 = (inst_45712__$1 == null);
var state_45731__$1 = (function (){var statearr_45734 = state_45731;
(statearr_45734[(7)] = inst_45712__$1);

return statearr_45734;
})();
if(cljs.core.truth_(inst_45713)){
var statearr_45735_45843 = state_45731__$1;
(statearr_45735_45843[(1)] = (5));

} else {
var statearr_45736_45844 = state_45731__$1;
(statearr_45736_45844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45732 === (5))){
var inst_45715 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45731__$1 = state_45731;
var statearr_45737_45845 = state_45731__$1;
(statearr_45737_45845[(2)] = inst_45715);

(statearr_45737_45845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45732 === (6))){
var inst_45712 = (state_45731[(7)]);
var inst_45717 = (state_45731[(8)]);
var inst_45717__$1 = cljs.core.async.chan.call(null,(1));
var inst_45718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45719 = [inst_45712,inst_45717__$1];
var inst_45720 = (new cljs.core.PersistentVector(null,2,(5),inst_45718,inst_45719,null));
var state_45731__$1 = (function (){var statearr_45738 = state_45731;
(statearr_45738[(8)] = inst_45717__$1);

return statearr_45738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45731__$1,(8),jobs,inst_45720);
} else {
if((state_val_45732 === (7))){
var inst_45727 = (state_45731[(2)]);
var state_45731__$1 = state_45731;
var statearr_45739_45846 = state_45731__$1;
(statearr_45739_45846[(2)] = inst_45727);

(statearr_45739_45846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45732 === (8))){
var inst_45717 = (state_45731[(8)]);
var inst_45722 = (state_45731[(2)]);
var state_45731__$1 = (function (){var statearr_45740 = state_45731;
(statearr_45740[(9)] = inst_45722);

return statearr_45740;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45731__$1,(9),results,inst_45717);
} else {
if((state_val_45732 === (9))){
var inst_45724 = (state_45731[(2)]);
var state_45731__$1 = (function (){var statearr_45741 = state_45731;
(statearr_45741[(10)] = inst_45724);

return statearr_45741;
})();
var statearr_45742_45847 = state_45731__$1;
(statearr_45742_45847[(2)] = null);

(statearr_45742_45847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___45841,jobs,results,process,async))
;
return ((function (switch__45404__auto__,c__45492__auto___45841,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0 = (function (){
var statearr_45743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__);

(statearr_45743[(1)] = (1));

return statearr_45743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1 = (function (state_45731){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_45731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e45744){if((e45744 instanceof Object)){
var ex__45408__auto__ = e45744;
var statearr_45745_45848 = state_45731;
(statearr_45745_45848[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45849 = state_45731;
state_45731 = G__45849;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = function(state_45731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1.call(this,state_45731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___45841,jobs,results,process,async))
})();
var state__45494__auto__ = (function (){var statearr_45746 = f__45493__auto__.call(null);
(statearr_45746[(6)] = c__45492__auto___45841);

return statearr_45746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___45841,jobs,results,process,async))
);


var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__,jobs,results,process,async){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__,jobs,results,process,async){
return (function (state_45784){
var state_val_45785 = (state_45784[(1)]);
if((state_val_45785 === (7))){
var inst_45780 = (state_45784[(2)]);
var state_45784__$1 = state_45784;
var statearr_45786_45850 = state_45784__$1;
(statearr_45786_45850[(2)] = inst_45780);

(statearr_45786_45850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (20))){
var state_45784__$1 = state_45784;
var statearr_45787_45851 = state_45784__$1;
(statearr_45787_45851[(2)] = null);

(statearr_45787_45851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (1))){
var state_45784__$1 = state_45784;
var statearr_45788_45852 = state_45784__$1;
(statearr_45788_45852[(2)] = null);

(statearr_45788_45852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (4))){
var inst_45749 = (state_45784[(7)]);
var inst_45749__$1 = (state_45784[(2)]);
var inst_45750 = (inst_45749__$1 == null);
var state_45784__$1 = (function (){var statearr_45789 = state_45784;
(statearr_45789[(7)] = inst_45749__$1);

return statearr_45789;
})();
if(cljs.core.truth_(inst_45750)){
var statearr_45790_45853 = state_45784__$1;
(statearr_45790_45853[(1)] = (5));

} else {
var statearr_45791_45854 = state_45784__$1;
(statearr_45791_45854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (15))){
var inst_45762 = (state_45784[(8)]);
var state_45784__$1 = state_45784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45784__$1,(18),to,inst_45762);
} else {
if((state_val_45785 === (21))){
var inst_45775 = (state_45784[(2)]);
var state_45784__$1 = state_45784;
var statearr_45792_45855 = state_45784__$1;
(statearr_45792_45855[(2)] = inst_45775);

(statearr_45792_45855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (13))){
var inst_45777 = (state_45784[(2)]);
var state_45784__$1 = (function (){var statearr_45793 = state_45784;
(statearr_45793[(9)] = inst_45777);

return statearr_45793;
})();
var statearr_45794_45856 = state_45784__$1;
(statearr_45794_45856[(2)] = null);

(statearr_45794_45856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (6))){
var inst_45749 = (state_45784[(7)]);
var state_45784__$1 = state_45784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45784__$1,(11),inst_45749);
} else {
if((state_val_45785 === (17))){
var inst_45770 = (state_45784[(2)]);
var state_45784__$1 = state_45784;
if(cljs.core.truth_(inst_45770)){
var statearr_45795_45857 = state_45784__$1;
(statearr_45795_45857[(1)] = (19));

} else {
var statearr_45796_45858 = state_45784__$1;
(statearr_45796_45858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (3))){
var inst_45782 = (state_45784[(2)]);
var state_45784__$1 = state_45784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45784__$1,inst_45782);
} else {
if((state_val_45785 === (12))){
var inst_45759 = (state_45784[(10)]);
var state_45784__$1 = state_45784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45784__$1,(14),inst_45759);
} else {
if((state_val_45785 === (2))){
var state_45784__$1 = state_45784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45784__$1,(4),results);
} else {
if((state_val_45785 === (19))){
var state_45784__$1 = state_45784;
var statearr_45797_45859 = state_45784__$1;
(statearr_45797_45859[(2)] = null);

(statearr_45797_45859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (11))){
var inst_45759 = (state_45784[(2)]);
var state_45784__$1 = (function (){var statearr_45798 = state_45784;
(statearr_45798[(10)] = inst_45759);

return statearr_45798;
})();
var statearr_45799_45860 = state_45784__$1;
(statearr_45799_45860[(2)] = null);

(statearr_45799_45860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (9))){
var state_45784__$1 = state_45784;
var statearr_45800_45861 = state_45784__$1;
(statearr_45800_45861[(2)] = null);

(statearr_45800_45861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (5))){
var state_45784__$1 = state_45784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45801_45862 = state_45784__$1;
(statearr_45801_45862[(1)] = (8));

} else {
var statearr_45802_45863 = state_45784__$1;
(statearr_45802_45863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (14))){
var inst_45762 = (state_45784[(8)]);
var inst_45764 = (state_45784[(11)]);
var inst_45762__$1 = (state_45784[(2)]);
var inst_45763 = (inst_45762__$1 == null);
var inst_45764__$1 = cljs.core.not.call(null,inst_45763);
var state_45784__$1 = (function (){var statearr_45803 = state_45784;
(statearr_45803[(8)] = inst_45762__$1);

(statearr_45803[(11)] = inst_45764__$1);

return statearr_45803;
})();
if(inst_45764__$1){
var statearr_45804_45864 = state_45784__$1;
(statearr_45804_45864[(1)] = (15));

} else {
var statearr_45805_45865 = state_45784__$1;
(statearr_45805_45865[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (16))){
var inst_45764 = (state_45784[(11)]);
var state_45784__$1 = state_45784;
var statearr_45806_45866 = state_45784__$1;
(statearr_45806_45866[(2)] = inst_45764);

(statearr_45806_45866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (10))){
var inst_45756 = (state_45784[(2)]);
var state_45784__$1 = state_45784;
var statearr_45807_45867 = state_45784__$1;
(statearr_45807_45867[(2)] = inst_45756);

(statearr_45807_45867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (18))){
var inst_45767 = (state_45784[(2)]);
var state_45784__$1 = state_45784;
var statearr_45808_45868 = state_45784__$1;
(statearr_45808_45868[(2)] = inst_45767);

(statearr_45808_45868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45785 === (8))){
var inst_45753 = cljs.core.async.close_BANG_.call(null,to);
var state_45784__$1 = state_45784;
var statearr_45809_45869 = state_45784__$1;
(statearr_45809_45869[(2)] = inst_45753);

(statearr_45809_45869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto__,jobs,results,process,async))
;
return ((function (switch__45404__auto__,c__45492__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0 = (function (){
var statearr_45810 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__);

(statearr_45810[(1)] = (1));

return statearr_45810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1 = (function (state_45784){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_45784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e45811){if((e45811 instanceof Object)){
var ex__45408__auto__ = e45811;
var statearr_45812_45870 = state_45784;
(statearr_45812_45870[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45871 = state_45784;
state_45784 = G__45871;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__ = function(state_45784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1.call(this,state_45784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__,jobs,results,process,async))
})();
var state__45494__auto__ = (function (){var statearr_45813 = f__45493__auto__.call(null);
(statearr_45813[(6)] = c__45492__auto__);

return statearr_45813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__,jobs,results,process,async))
);

return c__45492__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45873 = arguments.length;
switch (G__45873) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45876 = arguments.length;
switch (G__45876) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45879 = arguments.length;
switch (G__45879) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__45492__auto___45928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___45928,tc,fc){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___45928,tc,fc){
return (function (state_45905){
var state_val_45906 = (state_45905[(1)]);
if((state_val_45906 === (7))){
var inst_45901 = (state_45905[(2)]);
var state_45905__$1 = state_45905;
var statearr_45907_45929 = state_45905__$1;
(statearr_45907_45929[(2)] = inst_45901);

(statearr_45907_45929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (1))){
var state_45905__$1 = state_45905;
var statearr_45908_45930 = state_45905__$1;
(statearr_45908_45930[(2)] = null);

(statearr_45908_45930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (4))){
var inst_45882 = (state_45905[(7)]);
var inst_45882__$1 = (state_45905[(2)]);
var inst_45883 = (inst_45882__$1 == null);
var state_45905__$1 = (function (){var statearr_45909 = state_45905;
(statearr_45909[(7)] = inst_45882__$1);

return statearr_45909;
})();
if(cljs.core.truth_(inst_45883)){
var statearr_45910_45931 = state_45905__$1;
(statearr_45910_45931[(1)] = (5));

} else {
var statearr_45911_45932 = state_45905__$1;
(statearr_45911_45932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (13))){
var state_45905__$1 = state_45905;
var statearr_45912_45933 = state_45905__$1;
(statearr_45912_45933[(2)] = null);

(statearr_45912_45933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (6))){
var inst_45882 = (state_45905[(7)]);
var inst_45888 = p.call(null,inst_45882);
var state_45905__$1 = state_45905;
if(cljs.core.truth_(inst_45888)){
var statearr_45913_45934 = state_45905__$1;
(statearr_45913_45934[(1)] = (9));

} else {
var statearr_45914_45935 = state_45905__$1;
(statearr_45914_45935[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (3))){
var inst_45903 = (state_45905[(2)]);
var state_45905__$1 = state_45905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45905__$1,inst_45903);
} else {
if((state_val_45906 === (12))){
var state_45905__$1 = state_45905;
var statearr_45915_45936 = state_45905__$1;
(statearr_45915_45936[(2)] = null);

(statearr_45915_45936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (2))){
var state_45905__$1 = state_45905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45905__$1,(4),ch);
} else {
if((state_val_45906 === (11))){
var inst_45882 = (state_45905[(7)]);
var inst_45892 = (state_45905[(2)]);
var state_45905__$1 = state_45905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45905__$1,(8),inst_45892,inst_45882);
} else {
if((state_val_45906 === (9))){
var state_45905__$1 = state_45905;
var statearr_45916_45937 = state_45905__$1;
(statearr_45916_45937[(2)] = tc);

(statearr_45916_45937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (5))){
var inst_45885 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45886 = cljs.core.async.close_BANG_.call(null,fc);
var state_45905__$1 = (function (){var statearr_45917 = state_45905;
(statearr_45917[(8)] = inst_45885);

return statearr_45917;
})();
var statearr_45918_45938 = state_45905__$1;
(statearr_45918_45938[(2)] = inst_45886);

(statearr_45918_45938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (14))){
var inst_45899 = (state_45905[(2)]);
var state_45905__$1 = state_45905;
var statearr_45919_45939 = state_45905__$1;
(statearr_45919_45939[(2)] = inst_45899);

(statearr_45919_45939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (10))){
var state_45905__$1 = state_45905;
var statearr_45920_45940 = state_45905__$1;
(statearr_45920_45940[(2)] = fc);

(statearr_45920_45940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (8))){
var inst_45894 = (state_45905[(2)]);
var state_45905__$1 = state_45905;
if(cljs.core.truth_(inst_45894)){
var statearr_45921_45941 = state_45905__$1;
(statearr_45921_45941[(1)] = (12));

} else {
var statearr_45922_45942 = state_45905__$1;
(statearr_45922_45942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___45928,tc,fc))
;
return ((function (switch__45404__auto__,c__45492__auto___45928,tc,fc){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_45923 = [null,null,null,null,null,null,null,null,null];
(statearr_45923[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_45923[(1)] = (1));

return statearr_45923;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_45905){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_45905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e45924){if((e45924 instanceof Object)){
var ex__45408__auto__ = e45924;
var statearr_45925_45943 = state_45905;
(statearr_45925_45943[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45944 = state_45905;
state_45905 = G__45944;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_45905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_45905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___45928,tc,fc))
})();
var state__45494__auto__ = (function (){var statearr_45926 = f__45493__auto__.call(null);
(statearr_45926[(6)] = c__45492__auto___45928);

return statearr_45926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___45928,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__){
return (function (state_45965){
var state_val_45966 = (state_45965[(1)]);
if((state_val_45966 === (7))){
var inst_45961 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
var statearr_45967_45985 = state_45965__$1;
(statearr_45967_45985[(2)] = inst_45961);

(statearr_45967_45985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (1))){
var inst_45945 = init;
var state_45965__$1 = (function (){var statearr_45968 = state_45965;
(statearr_45968[(7)] = inst_45945);

return statearr_45968;
})();
var statearr_45969_45986 = state_45965__$1;
(statearr_45969_45986[(2)] = null);

(statearr_45969_45986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (4))){
var inst_45948 = (state_45965[(8)]);
var inst_45948__$1 = (state_45965[(2)]);
var inst_45949 = (inst_45948__$1 == null);
var state_45965__$1 = (function (){var statearr_45970 = state_45965;
(statearr_45970[(8)] = inst_45948__$1);

return statearr_45970;
})();
if(cljs.core.truth_(inst_45949)){
var statearr_45971_45987 = state_45965__$1;
(statearr_45971_45987[(1)] = (5));

} else {
var statearr_45972_45988 = state_45965__$1;
(statearr_45972_45988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (6))){
var inst_45952 = (state_45965[(9)]);
var inst_45948 = (state_45965[(8)]);
var inst_45945 = (state_45965[(7)]);
var inst_45952__$1 = f.call(null,inst_45945,inst_45948);
var inst_45953 = cljs.core.reduced_QMARK_.call(null,inst_45952__$1);
var state_45965__$1 = (function (){var statearr_45973 = state_45965;
(statearr_45973[(9)] = inst_45952__$1);

return statearr_45973;
})();
if(inst_45953){
var statearr_45974_45989 = state_45965__$1;
(statearr_45974_45989[(1)] = (8));

} else {
var statearr_45975_45990 = state_45965__$1;
(statearr_45975_45990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (3))){
var inst_45963 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45965__$1,inst_45963);
} else {
if((state_val_45966 === (2))){
var state_45965__$1 = state_45965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45965__$1,(4),ch);
} else {
if((state_val_45966 === (9))){
var inst_45952 = (state_45965[(9)]);
var inst_45945 = inst_45952;
var state_45965__$1 = (function (){var statearr_45976 = state_45965;
(statearr_45976[(7)] = inst_45945);

return statearr_45976;
})();
var statearr_45977_45991 = state_45965__$1;
(statearr_45977_45991[(2)] = null);

(statearr_45977_45991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (5))){
var inst_45945 = (state_45965[(7)]);
var state_45965__$1 = state_45965;
var statearr_45978_45992 = state_45965__$1;
(statearr_45978_45992[(2)] = inst_45945);

(statearr_45978_45992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (10))){
var inst_45959 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
var statearr_45979_45993 = state_45965__$1;
(statearr_45979_45993[(2)] = inst_45959);

(statearr_45979_45993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (8))){
var inst_45952 = (state_45965[(9)]);
var inst_45955 = cljs.core.deref.call(null,inst_45952);
var state_45965__$1 = state_45965;
var statearr_45980_45994 = state_45965__$1;
(statearr_45980_45994[(2)] = inst_45955);

(statearr_45980_45994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto__))
;
return ((function (switch__45404__auto__,c__45492__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45405__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45405__auto____0 = (function (){
var statearr_45981 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45981[(0)] = cljs$core$async$reduce_$_state_machine__45405__auto__);

(statearr_45981[(1)] = (1));

return statearr_45981;
});
var cljs$core$async$reduce_$_state_machine__45405__auto____1 = (function (state_45965){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_45965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e45982){if((e45982 instanceof Object)){
var ex__45408__auto__ = e45982;
var statearr_45983_45995 = state_45965;
(statearr_45983_45995[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45996 = state_45965;
state_45965 = G__45996;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45405__auto__ = function(state_45965){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45405__auto____1.call(this,state_45965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45405__auto____0;
cljs$core$async$reduce_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45405__auto____1;
return cljs$core$async$reduce_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__))
})();
var state__45494__auto__ = (function (){var statearr_45984 = f__45493__auto__.call(null);
(statearr_45984[(6)] = c__45492__auto__);

return statearr_45984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__))
);

return c__45492__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__,f__$1){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__,f__$1){
return (function (state_46002){
var state_val_46003 = (state_46002[(1)]);
if((state_val_46003 === (1))){
var inst_45997 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_46002__$1 = state_46002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46002__$1,(2),inst_45997);
} else {
if((state_val_46003 === (2))){
var inst_45999 = (state_46002[(2)]);
var inst_46000 = f__$1.call(null,inst_45999);
var state_46002__$1 = state_46002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46002__$1,inst_46000);
} else {
return null;
}
}
});})(c__45492__auto__,f__$1))
;
return ((function (switch__45404__auto__,c__45492__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45405__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45405__auto____0 = (function (){
var statearr_46004 = [null,null,null,null,null,null,null];
(statearr_46004[(0)] = cljs$core$async$transduce_$_state_machine__45405__auto__);

(statearr_46004[(1)] = (1));

return statearr_46004;
});
var cljs$core$async$transduce_$_state_machine__45405__auto____1 = (function (state_46002){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e46005){if((e46005 instanceof Object)){
var ex__45408__auto__ = e46005;
var statearr_46006_46008 = state_46002;
(statearr_46006_46008[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46009 = state_46002;
state_46002 = G__46009;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45405__auto__ = function(state_46002){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45405__auto____1.call(this,state_46002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45405__auto____0;
cljs$core$async$transduce_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45405__auto____1;
return cljs$core$async$transduce_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__,f__$1))
})();
var state__45494__auto__ = (function (){var statearr_46007 = f__45493__auto__.call(null);
(statearr_46007[(6)] = c__45492__auto__);

return statearr_46007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__,f__$1))
);

return c__45492__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46011 = arguments.length;
switch (G__46011) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__){
return (function (state_46036){
var state_val_46037 = (state_46036[(1)]);
if((state_val_46037 === (7))){
var inst_46018 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46038_46059 = state_46036__$1;
(statearr_46038_46059[(2)] = inst_46018);

(statearr_46038_46059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (1))){
var inst_46012 = cljs.core.seq.call(null,coll);
var inst_46013 = inst_46012;
var state_46036__$1 = (function (){var statearr_46039 = state_46036;
(statearr_46039[(7)] = inst_46013);

return statearr_46039;
})();
var statearr_46040_46060 = state_46036__$1;
(statearr_46040_46060[(2)] = null);

(statearr_46040_46060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (4))){
var inst_46013 = (state_46036[(7)]);
var inst_46016 = cljs.core.first.call(null,inst_46013);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46036__$1,(7),ch,inst_46016);
} else {
if((state_val_46037 === (13))){
var inst_46030 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46041_46061 = state_46036__$1;
(statearr_46041_46061[(2)] = inst_46030);

(statearr_46041_46061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (6))){
var inst_46021 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_46021)){
var statearr_46042_46062 = state_46036__$1;
(statearr_46042_46062[(1)] = (8));

} else {
var statearr_46043_46063 = state_46036__$1;
(statearr_46043_46063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (3))){
var inst_46034 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46036__$1,inst_46034);
} else {
if((state_val_46037 === (12))){
var state_46036__$1 = state_46036;
var statearr_46044_46064 = state_46036__$1;
(statearr_46044_46064[(2)] = null);

(statearr_46044_46064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (2))){
var inst_46013 = (state_46036[(7)]);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_46013)){
var statearr_46045_46065 = state_46036__$1;
(statearr_46045_46065[(1)] = (4));

} else {
var statearr_46046_46066 = state_46036__$1;
(statearr_46046_46066[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (11))){
var inst_46027 = cljs.core.async.close_BANG_.call(null,ch);
var state_46036__$1 = state_46036;
var statearr_46047_46067 = state_46036__$1;
(statearr_46047_46067[(2)] = inst_46027);

(statearr_46047_46067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (9))){
var state_46036__$1 = state_46036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46048_46068 = state_46036__$1;
(statearr_46048_46068[(1)] = (11));

} else {
var statearr_46049_46069 = state_46036__$1;
(statearr_46049_46069[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (5))){
var inst_46013 = (state_46036[(7)]);
var state_46036__$1 = state_46036;
var statearr_46050_46070 = state_46036__$1;
(statearr_46050_46070[(2)] = inst_46013);

(statearr_46050_46070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (10))){
var inst_46032 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46051_46071 = state_46036__$1;
(statearr_46051_46071[(2)] = inst_46032);

(statearr_46051_46071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (8))){
var inst_46013 = (state_46036[(7)]);
var inst_46023 = cljs.core.next.call(null,inst_46013);
var inst_46013__$1 = inst_46023;
var state_46036__$1 = (function (){var statearr_46052 = state_46036;
(statearr_46052[(7)] = inst_46013__$1);

return statearr_46052;
})();
var statearr_46053_46072 = state_46036__$1;
(statearr_46053_46072[(2)] = null);

(statearr_46053_46072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto__))
;
return ((function (switch__45404__auto__,c__45492__auto__){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_46054 = [null,null,null,null,null,null,null,null];
(statearr_46054[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_46054[(1)] = (1));

return statearr_46054;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_46036){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e46055){if((e46055 instanceof Object)){
var ex__45408__auto__ = e46055;
var statearr_46056_46073 = state_46036;
(statearr_46056_46073[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46074 = state_46036;
state_46036 = G__46074;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_46036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_46036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__))
})();
var state__45494__auto__ = (function (){var statearr_46057 = f__45493__auto__.call(null);
(statearr_46057[(6)] = c__45492__auto__);

return statearr_46057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__))
);

return c__45492__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__36991__auto__ = (((_ == null))?null:_);
var m__36992__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,_);
} else {
var m__36992__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__36991__auto__ = (((m == null))?null:m);
var m__36992__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36992__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__36991__auto__ = (((m == null))?null:m);
var m__36992__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,m,ch);
} else {
var m__36992__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__36991__auto__ = (((m == null))?null:m);
var m__36992__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,m);
} else {
var m__36992__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46075 = (function (ch,cs,meta46076){
this.ch = ch;
this.cs = cs;
this.meta46076 = meta46076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46077,meta46076__$1){
var self__ = this;
var _46077__$1 = this;
return (new cljs.core.async.t_cljs$core$async46075(self__.ch,self__.cs,meta46076__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46077){
var self__ = this;
var _46077__$1 = this;
return self__.meta46076;
});})(cs))
;

cljs.core.async.t_cljs$core$async46075.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46075.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46075.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46075.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46075.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46075.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46076","meta46076",-147407560,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46075";

cljs.core.async.t_cljs$core$async46075.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async46075");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async46075 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46075(ch__$1,cs__$1,meta46076){
return (new cljs.core.async.t_cljs$core$async46075(ch__$1,cs__$1,meta46076));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46075(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__45492__auto___46297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___46297,cs,m,dchan,dctr,done){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___46297,cs,m,dchan,dctr,done){
return (function (state_46212){
var state_val_46213 = (state_46212[(1)]);
if((state_val_46213 === (7))){
var inst_46208 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46214_46298 = state_46212__$1;
(statearr_46214_46298[(2)] = inst_46208);

(statearr_46214_46298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (20))){
var inst_46111 = (state_46212[(7)]);
var inst_46123 = cljs.core.first.call(null,inst_46111);
var inst_46124 = cljs.core.nth.call(null,inst_46123,(0),null);
var inst_46125 = cljs.core.nth.call(null,inst_46123,(1),null);
var state_46212__$1 = (function (){var statearr_46215 = state_46212;
(statearr_46215[(8)] = inst_46124);

return statearr_46215;
})();
if(cljs.core.truth_(inst_46125)){
var statearr_46216_46299 = state_46212__$1;
(statearr_46216_46299[(1)] = (22));

} else {
var statearr_46217_46300 = state_46212__$1;
(statearr_46217_46300[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (27))){
var inst_46080 = (state_46212[(9)]);
var inst_46153 = (state_46212[(10)]);
var inst_46160 = (state_46212[(11)]);
var inst_46155 = (state_46212[(12)]);
var inst_46160__$1 = cljs.core._nth.call(null,inst_46153,inst_46155);
var inst_46161 = cljs.core.async.put_BANG_.call(null,inst_46160__$1,inst_46080,done);
var state_46212__$1 = (function (){var statearr_46218 = state_46212;
(statearr_46218[(11)] = inst_46160__$1);

return statearr_46218;
})();
if(cljs.core.truth_(inst_46161)){
var statearr_46219_46301 = state_46212__$1;
(statearr_46219_46301[(1)] = (30));

} else {
var statearr_46220_46302 = state_46212__$1;
(statearr_46220_46302[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (1))){
var state_46212__$1 = state_46212;
var statearr_46221_46303 = state_46212__$1;
(statearr_46221_46303[(2)] = null);

(statearr_46221_46303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (24))){
var inst_46111 = (state_46212[(7)]);
var inst_46130 = (state_46212[(2)]);
var inst_46131 = cljs.core.next.call(null,inst_46111);
var inst_46089 = inst_46131;
var inst_46090 = null;
var inst_46091 = (0);
var inst_46092 = (0);
var state_46212__$1 = (function (){var statearr_46222 = state_46212;
(statearr_46222[(13)] = inst_46090);

(statearr_46222[(14)] = inst_46130);

(statearr_46222[(15)] = inst_46089);

(statearr_46222[(16)] = inst_46092);

(statearr_46222[(17)] = inst_46091);

return statearr_46222;
})();
var statearr_46223_46304 = state_46212__$1;
(statearr_46223_46304[(2)] = null);

(statearr_46223_46304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (39))){
var state_46212__$1 = state_46212;
var statearr_46227_46305 = state_46212__$1;
(statearr_46227_46305[(2)] = null);

(statearr_46227_46305[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (4))){
var inst_46080 = (state_46212[(9)]);
var inst_46080__$1 = (state_46212[(2)]);
var inst_46081 = (inst_46080__$1 == null);
var state_46212__$1 = (function (){var statearr_46228 = state_46212;
(statearr_46228[(9)] = inst_46080__$1);

return statearr_46228;
})();
if(cljs.core.truth_(inst_46081)){
var statearr_46229_46306 = state_46212__$1;
(statearr_46229_46306[(1)] = (5));

} else {
var statearr_46230_46307 = state_46212__$1;
(statearr_46230_46307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (15))){
var inst_46090 = (state_46212[(13)]);
var inst_46089 = (state_46212[(15)]);
var inst_46092 = (state_46212[(16)]);
var inst_46091 = (state_46212[(17)]);
var inst_46107 = (state_46212[(2)]);
var inst_46108 = (inst_46092 + (1));
var tmp46224 = inst_46090;
var tmp46225 = inst_46089;
var tmp46226 = inst_46091;
var inst_46089__$1 = tmp46225;
var inst_46090__$1 = tmp46224;
var inst_46091__$1 = tmp46226;
var inst_46092__$1 = inst_46108;
var state_46212__$1 = (function (){var statearr_46231 = state_46212;
(statearr_46231[(13)] = inst_46090__$1);

(statearr_46231[(18)] = inst_46107);

(statearr_46231[(15)] = inst_46089__$1);

(statearr_46231[(16)] = inst_46092__$1);

(statearr_46231[(17)] = inst_46091__$1);

return statearr_46231;
})();
var statearr_46232_46308 = state_46212__$1;
(statearr_46232_46308[(2)] = null);

(statearr_46232_46308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (21))){
var inst_46134 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46236_46309 = state_46212__$1;
(statearr_46236_46309[(2)] = inst_46134);

(statearr_46236_46309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (31))){
var inst_46160 = (state_46212[(11)]);
var inst_46164 = done.call(null,null);
var inst_46165 = cljs.core.async.untap_STAR_.call(null,m,inst_46160);
var state_46212__$1 = (function (){var statearr_46237 = state_46212;
(statearr_46237[(19)] = inst_46164);

return statearr_46237;
})();
var statearr_46238_46310 = state_46212__$1;
(statearr_46238_46310[(2)] = inst_46165);

(statearr_46238_46310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (32))){
var inst_46153 = (state_46212[(10)]);
var inst_46154 = (state_46212[(20)]);
var inst_46152 = (state_46212[(21)]);
var inst_46155 = (state_46212[(12)]);
var inst_46167 = (state_46212[(2)]);
var inst_46168 = (inst_46155 + (1));
var tmp46233 = inst_46153;
var tmp46234 = inst_46154;
var tmp46235 = inst_46152;
var inst_46152__$1 = tmp46235;
var inst_46153__$1 = tmp46233;
var inst_46154__$1 = tmp46234;
var inst_46155__$1 = inst_46168;
var state_46212__$1 = (function (){var statearr_46239 = state_46212;
(statearr_46239[(10)] = inst_46153__$1);

(statearr_46239[(20)] = inst_46154__$1);

(statearr_46239[(21)] = inst_46152__$1);

(statearr_46239[(22)] = inst_46167);

(statearr_46239[(12)] = inst_46155__$1);

return statearr_46239;
})();
var statearr_46240_46311 = state_46212__$1;
(statearr_46240_46311[(2)] = null);

(statearr_46240_46311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (40))){
var inst_46180 = (state_46212[(23)]);
var inst_46184 = done.call(null,null);
var inst_46185 = cljs.core.async.untap_STAR_.call(null,m,inst_46180);
var state_46212__$1 = (function (){var statearr_46241 = state_46212;
(statearr_46241[(24)] = inst_46184);

return statearr_46241;
})();
var statearr_46242_46312 = state_46212__$1;
(statearr_46242_46312[(2)] = inst_46185);

(statearr_46242_46312[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (33))){
var inst_46171 = (state_46212[(25)]);
var inst_46173 = cljs.core.chunked_seq_QMARK_.call(null,inst_46171);
var state_46212__$1 = state_46212;
if(inst_46173){
var statearr_46243_46313 = state_46212__$1;
(statearr_46243_46313[(1)] = (36));

} else {
var statearr_46244_46314 = state_46212__$1;
(statearr_46244_46314[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (13))){
var inst_46101 = (state_46212[(26)]);
var inst_46104 = cljs.core.async.close_BANG_.call(null,inst_46101);
var state_46212__$1 = state_46212;
var statearr_46245_46315 = state_46212__$1;
(statearr_46245_46315[(2)] = inst_46104);

(statearr_46245_46315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (22))){
var inst_46124 = (state_46212[(8)]);
var inst_46127 = cljs.core.async.close_BANG_.call(null,inst_46124);
var state_46212__$1 = state_46212;
var statearr_46246_46316 = state_46212__$1;
(statearr_46246_46316[(2)] = inst_46127);

(statearr_46246_46316[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (36))){
var inst_46171 = (state_46212[(25)]);
var inst_46175 = cljs.core.chunk_first.call(null,inst_46171);
var inst_46176 = cljs.core.chunk_rest.call(null,inst_46171);
var inst_46177 = cljs.core.count.call(null,inst_46175);
var inst_46152 = inst_46176;
var inst_46153 = inst_46175;
var inst_46154 = inst_46177;
var inst_46155 = (0);
var state_46212__$1 = (function (){var statearr_46247 = state_46212;
(statearr_46247[(10)] = inst_46153);

(statearr_46247[(20)] = inst_46154);

(statearr_46247[(21)] = inst_46152);

(statearr_46247[(12)] = inst_46155);

return statearr_46247;
})();
var statearr_46248_46317 = state_46212__$1;
(statearr_46248_46317[(2)] = null);

(statearr_46248_46317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (41))){
var inst_46171 = (state_46212[(25)]);
var inst_46187 = (state_46212[(2)]);
var inst_46188 = cljs.core.next.call(null,inst_46171);
var inst_46152 = inst_46188;
var inst_46153 = null;
var inst_46154 = (0);
var inst_46155 = (0);
var state_46212__$1 = (function (){var statearr_46249 = state_46212;
(statearr_46249[(10)] = inst_46153);

(statearr_46249[(27)] = inst_46187);

(statearr_46249[(20)] = inst_46154);

(statearr_46249[(21)] = inst_46152);

(statearr_46249[(12)] = inst_46155);

return statearr_46249;
})();
var statearr_46250_46318 = state_46212__$1;
(statearr_46250_46318[(2)] = null);

(statearr_46250_46318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (43))){
var state_46212__$1 = state_46212;
var statearr_46251_46319 = state_46212__$1;
(statearr_46251_46319[(2)] = null);

(statearr_46251_46319[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (29))){
var inst_46196 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46252_46320 = state_46212__$1;
(statearr_46252_46320[(2)] = inst_46196);

(statearr_46252_46320[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (44))){
var inst_46205 = (state_46212[(2)]);
var state_46212__$1 = (function (){var statearr_46253 = state_46212;
(statearr_46253[(28)] = inst_46205);

return statearr_46253;
})();
var statearr_46254_46321 = state_46212__$1;
(statearr_46254_46321[(2)] = null);

(statearr_46254_46321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (6))){
var inst_46144 = (state_46212[(29)]);
var inst_46143 = cljs.core.deref.call(null,cs);
var inst_46144__$1 = cljs.core.keys.call(null,inst_46143);
var inst_46145 = cljs.core.count.call(null,inst_46144__$1);
var inst_46146 = cljs.core.reset_BANG_.call(null,dctr,inst_46145);
var inst_46151 = cljs.core.seq.call(null,inst_46144__$1);
var inst_46152 = inst_46151;
var inst_46153 = null;
var inst_46154 = (0);
var inst_46155 = (0);
var state_46212__$1 = (function (){var statearr_46255 = state_46212;
(statearr_46255[(10)] = inst_46153);

(statearr_46255[(29)] = inst_46144__$1);

(statearr_46255[(30)] = inst_46146);

(statearr_46255[(20)] = inst_46154);

(statearr_46255[(21)] = inst_46152);

(statearr_46255[(12)] = inst_46155);

return statearr_46255;
})();
var statearr_46256_46322 = state_46212__$1;
(statearr_46256_46322[(2)] = null);

(statearr_46256_46322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (28))){
var inst_46171 = (state_46212[(25)]);
var inst_46152 = (state_46212[(21)]);
var inst_46171__$1 = cljs.core.seq.call(null,inst_46152);
var state_46212__$1 = (function (){var statearr_46257 = state_46212;
(statearr_46257[(25)] = inst_46171__$1);

return statearr_46257;
})();
if(inst_46171__$1){
var statearr_46258_46323 = state_46212__$1;
(statearr_46258_46323[(1)] = (33));

} else {
var statearr_46259_46324 = state_46212__$1;
(statearr_46259_46324[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (25))){
var inst_46154 = (state_46212[(20)]);
var inst_46155 = (state_46212[(12)]);
var inst_46157 = (inst_46155 < inst_46154);
var inst_46158 = inst_46157;
var state_46212__$1 = state_46212;
if(cljs.core.truth_(inst_46158)){
var statearr_46260_46325 = state_46212__$1;
(statearr_46260_46325[(1)] = (27));

} else {
var statearr_46261_46326 = state_46212__$1;
(statearr_46261_46326[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (34))){
var state_46212__$1 = state_46212;
var statearr_46262_46327 = state_46212__$1;
(statearr_46262_46327[(2)] = null);

(statearr_46262_46327[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (17))){
var state_46212__$1 = state_46212;
var statearr_46263_46328 = state_46212__$1;
(statearr_46263_46328[(2)] = null);

(statearr_46263_46328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (3))){
var inst_46210 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46212__$1,inst_46210);
} else {
if((state_val_46213 === (12))){
var inst_46139 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46264_46329 = state_46212__$1;
(statearr_46264_46329[(2)] = inst_46139);

(statearr_46264_46329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (2))){
var state_46212__$1 = state_46212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46212__$1,(4),ch);
} else {
if((state_val_46213 === (23))){
var state_46212__$1 = state_46212;
var statearr_46265_46330 = state_46212__$1;
(statearr_46265_46330[(2)] = null);

(statearr_46265_46330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (35))){
var inst_46194 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46266_46331 = state_46212__$1;
(statearr_46266_46331[(2)] = inst_46194);

(statearr_46266_46331[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (19))){
var inst_46111 = (state_46212[(7)]);
var inst_46115 = cljs.core.chunk_first.call(null,inst_46111);
var inst_46116 = cljs.core.chunk_rest.call(null,inst_46111);
var inst_46117 = cljs.core.count.call(null,inst_46115);
var inst_46089 = inst_46116;
var inst_46090 = inst_46115;
var inst_46091 = inst_46117;
var inst_46092 = (0);
var state_46212__$1 = (function (){var statearr_46267 = state_46212;
(statearr_46267[(13)] = inst_46090);

(statearr_46267[(15)] = inst_46089);

(statearr_46267[(16)] = inst_46092);

(statearr_46267[(17)] = inst_46091);

return statearr_46267;
})();
var statearr_46268_46332 = state_46212__$1;
(statearr_46268_46332[(2)] = null);

(statearr_46268_46332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (11))){
var inst_46089 = (state_46212[(15)]);
var inst_46111 = (state_46212[(7)]);
var inst_46111__$1 = cljs.core.seq.call(null,inst_46089);
var state_46212__$1 = (function (){var statearr_46269 = state_46212;
(statearr_46269[(7)] = inst_46111__$1);

return statearr_46269;
})();
if(inst_46111__$1){
var statearr_46270_46333 = state_46212__$1;
(statearr_46270_46333[(1)] = (16));

} else {
var statearr_46271_46334 = state_46212__$1;
(statearr_46271_46334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (9))){
var inst_46141 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46272_46335 = state_46212__$1;
(statearr_46272_46335[(2)] = inst_46141);

(statearr_46272_46335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (5))){
var inst_46087 = cljs.core.deref.call(null,cs);
var inst_46088 = cljs.core.seq.call(null,inst_46087);
var inst_46089 = inst_46088;
var inst_46090 = null;
var inst_46091 = (0);
var inst_46092 = (0);
var state_46212__$1 = (function (){var statearr_46273 = state_46212;
(statearr_46273[(13)] = inst_46090);

(statearr_46273[(15)] = inst_46089);

(statearr_46273[(16)] = inst_46092);

(statearr_46273[(17)] = inst_46091);

return statearr_46273;
})();
var statearr_46274_46336 = state_46212__$1;
(statearr_46274_46336[(2)] = null);

(statearr_46274_46336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (14))){
var state_46212__$1 = state_46212;
var statearr_46275_46337 = state_46212__$1;
(statearr_46275_46337[(2)] = null);

(statearr_46275_46337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (45))){
var inst_46202 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46276_46338 = state_46212__$1;
(statearr_46276_46338[(2)] = inst_46202);

(statearr_46276_46338[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (26))){
var inst_46144 = (state_46212[(29)]);
var inst_46198 = (state_46212[(2)]);
var inst_46199 = cljs.core.seq.call(null,inst_46144);
var state_46212__$1 = (function (){var statearr_46277 = state_46212;
(statearr_46277[(31)] = inst_46198);

return statearr_46277;
})();
if(inst_46199){
var statearr_46278_46339 = state_46212__$1;
(statearr_46278_46339[(1)] = (42));

} else {
var statearr_46279_46340 = state_46212__$1;
(statearr_46279_46340[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (16))){
var inst_46111 = (state_46212[(7)]);
var inst_46113 = cljs.core.chunked_seq_QMARK_.call(null,inst_46111);
var state_46212__$1 = state_46212;
if(inst_46113){
var statearr_46280_46341 = state_46212__$1;
(statearr_46280_46341[(1)] = (19));

} else {
var statearr_46281_46342 = state_46212__$1;
(statearr_46281_46342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (38))){
var inst_46191 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46282_46343 = state_46212__$1;
(statearr_46282_46343[(2)] = inst_46191);

(statearr_46282_46343[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (30))){
var state_46212__$1 = state_46212;
var statearr_46283_46344 = state_46212__$1;
(statearr_46283_46344[(2)] = null);

(statearr_46283_46344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (10))){
var inst_46090 = (state_46212[(13)]);
var inst_46092 = (state_46212[(16)]);
var inst_46100 = cljs.core._nth.call(null,inst_46090,inst_46092);
var inst_46101 = cljs.core.nth.call(null,inst_46100,(0),null);
var inst_46102 = cljs.core.nth.call(null,inst_46100,(1),null);
var state_46212__$1 = (function (){var statearr_46284 = state_46212;
(statearr_46284[(26)] = inst_46101);

return statearr_46284;
})();
if(cljs.core.truth_(inst_46102)){
var statearr_46285_46345 = state_46212__$1;
(statearr_46285_46345[(1)] = (13));

} else {
var statearr_46286_46346 = state_46212__$1;
(statearr_46286_46346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (18))){
var inst_46137 = (state_46212[(2)]);
var state_46212__$1 = state_46212;
var statearr_46287_46347 = state_46212__$1;
(statearr_46287_46347[(2)] = inst_46137);

(statearr_46287_46347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (42))){
var state_46212__$1 = state_46212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46212__$1,(45),dchan);
} else {
if((state_val_46213 === (37))){
var inst_46080 = (state_46212[(9)]);
var inst_46171 = (state_46212[(25)]);
var inst_46180 = (state_46212[(23)]);
var inst_46180__$1 = cljs.core.first.call(null,inst_46171);
var inst_46181 = cljs.core.async.put_BANG_.call(null,inst_46180__$1,inst_46080,done);
var state_46212__$1 = (function (){var statearr_46288 = state_46212;
(statearr_46288[(23)] = inst_46180__$1);

return statearr_46288;
})();
if(cljs.core.truth_(inst_46181)){
var statearr_46289_46348 = state_46212__$1;
(statearr_46289_46348[(1)] = (39));

} else {
var statearr_46290_46349 = state_46212__$1;
(statearr_46290_46349[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46213 === (8))){
var inst_46092 = (state_46212[(16)]);
var inst_46091 = (state_46212[(17)]);
var inst_46094 = (inst_46092 < inst_46091);
var inst_46095 = inst_46094;
var state_46212__$1 = state_46212;
if(cljs.core.truth_(inst_46095)){
var statearr_46291_46350 = state_46212__$1;
(statearr_46291_46350[(1)] = (10));

} else {
var statearr_46292_46351 = state_46212__$1;
(statearr_46292_46351[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___46297,cs,m,dchan,dctr,done))
;
return ((function (switch__45404__auto__,c__45492__auto___46297,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45405__auto__ = null;
var cljs$core$async$mult_$_state_machine__45405__auto____0 = (function (){
var statearr_46293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46293[(0)] = cljs$core$async$mult_$_state_machine__45405__auto__);

(statearr_46293[(1)] = (1));

return statearr_46293;
});
var cljs$core$async$mult_$_state_machine__45405__auto____1 = (function (state_46212){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e46294){if((e46294 instanceof Object)){
var ex__45408__auto__ = e46294;
var statearr_46295_46352 = state_46212;
(statearr_46295_46352[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46353 = state_46212;
state_46212 = G__46353;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45405__auto__ = function(state_46212){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45405__auto____1.call(this,state_46212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45405__auto____0;
cljs$core$async$mult_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45405__auto____1;
return cljs$core$async$mult_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___46297,cs,m,dchan,dctr,done))
})();
var state__45494__auto__ = (function (){var statearr_46296 = f__45493__auto__.call(null);
(statearr_46296[(6)] = c__45492__auto___46297);

return statearr_46296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___46297,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46355 = arguments.length;
switch (G__46355) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__36991__auto__ = (((m == null))?null:m);
var m__36992__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,m,ch);
} else {
var m__36992__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__36991__auto__ = (((m == null))?null:m);
var m__36992__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,m,ch);
} else {
var m__36992__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__36991__auto__ = (((m == null))?null:m);
var m__36992__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,m);
} else {
var m__36992__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__36991__auto__ = (((m == null))?null:m);
var m__36992__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,m,state_map);
} else {
var m__36992__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__36991__auto__ = (((m == null))?null:m);
var m__36992__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,m,mode);
} else {
var m__36992__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37486__auto__ = [];
var len__37479__auto___46367 = arguments.length;
var i__37480__auto___46368 = (0);
while(true){
if((i__37480__auto___46368 < len__37479__auto___46367)){
args__37486__auto__.push((arguments[i__37480__auto___46368]));

var G__46369 = (i__37480__auto___46368 + (1));
i__37480__auto___46368 = G__46369;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((3) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37487__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46361){
var map__46362 = p__46361;
var map__46362__$1 = ((((!((map__46362 == null)))?((((map__46362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46362):map__46362);
var opts = map__46362__$1;
var statearr_46364_46370 = state;
(statearr_46364_46370[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46362,map__46362__$1,opts){
return (function (val){
var statearr_46365_46371 = state;
(statearr_46365_46371[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46362,map__46362__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46366_46372 = state;
(statearr_46366_46372[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46357){
var G__46358 = cljs.core.first.call(null,seq46357);
var seq46357__$1 = cljs.core.next.call(null,seq46357);
var G__46359 = cljs.core.first.call(null,seq46357__$1);
var seq46357__$2 = cljs.core.next.call(null,seq46357__$1);
var G__46360 = cljs.core.first.call(null,seq46357__$2);
var seq46357__$3 = cljs.core.next.call(null,seq46357__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46358,G__46359,G__46360,seq46357__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46373 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46374){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46374 = meta46374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46375,meta46374__$1){
var self__ = this;
var _46375__$1 = this;
return (new cljs.core.async.t_cljs$core$async46373(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46374__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46375){
var self__ = this;
var _46375__$1 = this;
return self__.meta46374;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46374","meta46374",-1796398558,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46373";

cljs.core.async.t_cljs$core$async46373.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async46373");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46373 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46373(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46374){
return (new cljs.core.async.t_cljs$core$async46373(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46374));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46373(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45492__auto___46537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___46537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___46537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46477){
var state_val_46478 = (state_46477[(1)]);
if((state_val_46478 === (7))){
var inst_46392 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
var statearr_46479_46538 = state_46477__$1;
(statearr_46479_46538[(2)] = inst_46392);

(statearr_46479_46538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (20))){
var inst_46404 = (state_46477[(7)]);
var state_46477__$1 = state_46477;
var statearr_46480_46539 = state_46477__$1;
(statearr_46480_46539[(2)] = inst_46404);

(statearr_46480_46539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (27))){
var state_46477__$1 = state_46477;
var statearr_46481_46540 = state_46477__$1;
(statearr_46481_46540[(2)] = null);

(statearr_46481_46540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (1))){
var inst_46379 = (state_46477[(8)]);
var inst_46379__$1 = calc_state.call(null);
var inst_46381 = (inst_46379__$1 == null);
var inst_46382 = cljs.core.not.call(null,inst_46381);
var state_46477__$1 = (function (){var statearr_46482 = state_46477;
(statearr_46482[(8)] = inst_46379__$1);

return statearr_46482;
})();
if(inst_46382){
var statearr_46483_46541 = state_46477__$1;
(statearr_46483_46541[(1)] = (2));

} else {
var statearr_46484_46542 = state_46477__$1;
(statearr_46484_46542[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (24))){
var inst_46437 = (state_46477[(9)]);
var inst_46428 = (state_46477[(10)]);
var inst_46451 = (state_46477[(11)]);
var inst_46451__$1 = inst_46428.call(null,inst_46437);
var state_46477__$1 = (function (){var statearr_46485 = state_46477;
(statearr_46485[(11)] = inst_46451__$1);

return statearr_46485;
})();
if(cljs.core.truth_(inst_46451__$1)){
var statearr_46486_46543 = state_46477__$1;
(statearr_46486_46543[(1)] = (29));

} else {
var statearr_46487_46544 = state_46477__$1;
(statearr_46487_46544[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (4))){
var inst_46395 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
if(cljs.core.truth_(inst_46395)){
var statearr_46488_46545 = state_46477__$1;
(statearr_46488_46545[(1)] = (8));

} else {
var statearr_46489_46546 = state_46477__$1;
(statearr_46489_46546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (15))){
var inst_46422 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
if(cljs.core.truth_(inst_46422)){
var statearr_46490_46547 = state_46477__$1;
(statearr_46490_46547[(1)] = (19));

} else {
var statearr_46491_46548 = state_46477__$1;
(statearr_46491_46548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (21))){
var inst_46427 = (state_46477[(12)]);
var inst_46427__$1 = (state_46477[(2)]);
var inst_46428 = cljs.core.get.call(null,inst_46427__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46429 = cljs.core.get.call(null,inst_46427__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46430 = cljs.core.get.call(null,inst_46427__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46477__$1 = (function (){var statearr_46492 = state_46477;
(statearr_46492[(10)] = inst_46428);

(statearr_46492[(13)] = inst_46429);

(statearr_46492[(12)] = inst_46427__$1);

return statearr_46492;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46477__$1,(22),inst_46430);
} else {
if((state_val_46478 === (31))){
var inst_46459 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
if(cljs.core.truth_(inst_46459)){
var statearr_46493_46549 = state_46477__$1;
(statearr_46493_46549[(1)] = (32));

} else {
var statearr_46494_46550 = state_46477__$1;
(statearr_46494_46550[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (32))){
var inst_46436 = (state_46477[(14)]);
var state_46477__$1 = state_46477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46477__$1,(35),out,inst_46436);
} else {
if((state_val_46478 === (33))){
var inst_46427 = (state_46477[(12)]);
var inst_46404 = inst_46427;
var state_46477__$1 = (function (){var statearr_46495 = state_46477;
(statearr_46495[(7)] = inst_46404);

return statearr_46495;
})();
var statearr_46496_46551 = state_46477__$1;
(statearr_46496_46551[(2)] = null);

(statearr_46496_46551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (13))){
var inst_46404 = (state_46477[(7)]);
var inst_46411 = inst_46404.cljs$lang$protocol_mask$partition0$;
var inst_46412 = (inst_46411 & (64));
var inst_46413 = inst_46404.cljs$core$ISeq$;
var inst_46414 = (cljs.core.PROTOCOL_SENTINEL === inst_46413);
var inst_46415 = (inst_46412) || (inst_46414);
var state_46477__$1 = state_46477;
if(cljs.core.truth_(inst_46415)){
var statearr_46497_46552 = state_46477__$1;
(statearr_46497_46552[(1)] = (16));

} else {
var statearr_46498_46553 = state_46477__$1;
(statearr_46498_46553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (22))){
var inst_46437 = (state_46477[(9)]);
var inst_46436 = (state_46477[(14)]);
var inst_46435 = (state_46477[(2)]);
var inst_46436__$1 = cljs.core.nth.call(null,inst_46435,(0),null);
var inst_46437__$1 = cljs.core.nth.call(null,inst_46435,(1),null);
var inst_46438 = (inst_46436__$1 == null);
var inst_46439 = cljs.core._EQ_.call(null,inst_46437__$1,change);
var inst_46440 = (inst_46438) || (inst_46439);
var state_46477__$1 = (function (){var statearr_46499 = state_46477;
(statearr_46499[(9)] = inst_46437__$1);

(statearr_46499[(14)] = inst_46436__$1);

return statearr_46499;
})();
if(cljs.core.truth_(inst_46440)){
var statearr_46500_46554 = state_46477__$1;
(statearr_46500_46554[(1)] = (23));

} else {
var statearr_46501_46555 = state_46477__$1;
(statearr_46501_46555[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (36))){
var inst_46427 = (state_46477[(12)]);
var inst_46404 = inst_46427;
var state_46477__$1 = (function (){var statearr_46502 = state_46477;
(statearr_46502[(7)] = inst_46404);

return statearr_46502;
})();
var statearr_46503_46556 = state_46477__$1;
(statearr_46503_46556[(2)] = null);

(statearr_46503_46556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (29))){
var inst_46451 = (state_46477[(11)]);
var state_46477__$1 = state_46477;
var statearr_46504_46557 = state_46477__$1;
(statearr_46504_46557[(2)] = inst_46451);

(statearr_46504_46557[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (6))){
var state_46477__$1 = state_46477;
var statearr_46505_46558 = state_46477__$1;
(statearr_46505_46558[(2)] = false);

(statearr_46505_46558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (28))){
var inst_46447 = (state_46477[(2)]);
var inst_46448 = calc_state.call(null);
var inst_46404 = inst_46448;
var state_46477__$1 = (function (){var statearr_46506 = state_46477;
(statearr_46506[(15)] = inst_46447);

(statearr_46506[(7)] = inst_46404);

return statearr_46506;
})();
var statearr_46507_46559 = state_46477__$1;
(statearr_46507_46559[(2)] = null);

(statearr_46507_46559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (25))){
var inst_46473 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
var statearr_46508_46560 = state_46477__$1;
(statearr_46508_46560[(2)] = inst_46473);

(statearr_46508_46560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (34))){
var inst_46471 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
var statearr_46509_46561 = state_46477__$1;
(statearr_46509_46561[(2)] = inst_46471);

(statearr_46509_46561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (17))){
var state_46477__$1 = state_46477;
var statearr_46510_46562 = state_46477__$1;
(statearr_46510_46562[(2)] = false);

(statearr_46510_46562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (3))){
var state_46477__$1 = state_46477;
var statearr_46511_46563 = state_46477__$1;
(statearr_46511_46563[(2)] = false);

(statearr_46511_46563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (12))){
var inst_46475 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46477__$1,inst_46475);
} else {
if((state_val_46478 === (2))){
var inst_46379 = (state_46477[(8)]);
var inst_46384 = inst_46379.cljs$lang$protocol_mask$partition0$;
var inst_46385 = (inst_46384 & (64));
var inst_46386 = inst_46379.cljs$core$ISeq$;
var inst_46387 = (cljs.core.PROTOCOL_SENTINEL === inst_46386);
var inst_46388 = (inst_46385) || (inst_46387);
var state_46477__$1 = state_46477;
if(cljs.core.truth_(inst_46388)){
var statearr_46512_46564 = state_46477__$1;
(statearr_46512_46564[(1)] = (5));

} else {
var statearr_46513_46565 = state_46477__$1;
(statearr_46513_46565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (23))){
var inst_46436 = (state_46477[(14)]);
var inst_46442 = (inst_46436 == null);
var state_46477__$1 = state_46477;
if(cljs.core.truth_(inst_46442)){
var statearr_46514_46566 = state_46477__$1;
(statearr_46514_46566[(1)] = (26));

} else {
var statearr_46515_46567 = state_46477__$1;
(statearr_46515_46567[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (35))){
var inst_46462 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
if(cljs.core.truth_(inst_46462)){
var statearr_46516_46568 = state_46477__$1;
(statearr_46516_46568[(1)] = (36));

} else {
var statearr_46517_46569 = state_46477__$1;
(statearr_46517_46569[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (19))){
var inst_46404 = (state_46477[(7)]);
var inst_46424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46404);
var state_46477__$1 = state_46477;
var statearr_46518_46570 = state_46477__$1;
(statearr_46518_46570[(2)] = inst_46424);

(statearr_46518_46570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (11))){
var inst_46404 = (state_46477[(7)]);
var inst_46408 = (inst_46404 == null);
var inst_46409 = cljs.core.not.call(null,inst_46408);
var state_46477__$1 = state_46477;
if(inst_46409){
var statearr_46519_46571 = state_46477__$1;
(statearr_46519_46571[(1)] = (13));

} else {
var statearr_46520_46572 = state_46477__$1;
(statearr_46520_46572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (9))){
var inst_46379 = (state_46477[(8)]);
var state_46477__$1 = state_46477;
var statearr_46521_46573 = state_46477__$1;
(statearr_46521_46573[(2)] = inst_46379);

(statearr_46521_46573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (5))){
var state_46477__$1 = state_46477;
var statearr_46522_46574 = state_46477__$1;
(statearr_46522_46574[(2)] = true);

(statearr_46522_46574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (14))){
var state_46477__$1 = state_46477;
var statearr_46523_46575 = state_46477__$1;
(statearr_46523_46575[(2)] = false);

(statearr_46523_46575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (26))){
var inst_46437 = (state_46477[(9)]);
var inst_46444 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46437);
var state_46477__$1 = state_46477;
var statearr_46524_46576 = state_46477__$1;
(statearr_46524_46576[(2)] = inst_46444);

(statearr_46524_46576[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (16))){
var state_46477__$1 = state_46477;
var statearr_46525_46577 = state_46477__$1;
(statearr_46525_46577[(2)] = true);

(statearr_46525_46577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (38))){
var inst_46467 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
var statearr_46526_46578 = state_46477__$1;
(statearr_46526_46578[(2)] = inst_46467);

(statearr_46526_46578[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (30))){
var inst_46437 = (state_46477[(9)]);
var inst_46428 = (state_46477[(10)]);
var inst_46429 = (state_46477[(13)]);
var inst_46454 = cljs.core.empty_QMARK_.call(null,inst_46428);
var inst_46455 = inst_46429.call(null,inst_46437);
var inst_46456 = cljs.core.not.call(null,inst_46455);
var inst_46457 = (inst_46454) && (inst_46456);
var state_46477__$1 = state_46477;
var statearr_46527_46579 = state_46477__$1;
(statearr_46527_46579[(2)] = inst_46457);

(statearr_46527_46579[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (10))){
var inst_46379 = (state_46477[(8)]);
var inst_46400 = (state_46477[(2)]);
var inst_46401 = cljs.core.get.call(null,inst_46400,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46402 = cljs.core.get.call(null,inst_46400,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46403 = cljs.core.get.call(null,inst_46400,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46404 = inst_46379;
var state_46477__$1 = (function (){var statearr_46528 = state_46477;
(statearr_46528[(16)] = inst_46402);

(statearr_46528[(17)] = inst_46403);

(statearr_46528[(7)] = inst_46404);

(statearr_46528[(18)] = inst_46401);

return statearr_46528;
})();
var statearr_46529_46580 = state_46477__$1;
(statearr_46529_46580[(2)] = null);

(statearr_46529_46580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (18))){
var inst_46419 = (state_46477[(2)]);
var state_46477__$1 = state_46477;
var statearr_46530_46581 = state_46477__$1;
(statearr_46530_46581[(2)] = inst_46419);

(statearr_46530_46581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (37))){
var state_46477__$1 = state_46477;
var statearr_46531_46582 = state_46477__$1;
(statearr_46531_46582[(2)] = null);

(statearr_46531_46582[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46478 === (8))){
var inst_46379 = (state_46477[(8)]);
var inst_46397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46379);
var state_46477__$1 = state_46477;
var statearr_46532_46583 = state_46477__$1;
(statearr_46532_46583[(2)] = inst_46397);

(statearr_46532_46583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___46537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45404__auto__,c__45492__auto___46537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45405__auto__ = null;
var cljs$core$async$mix_$_state_machine__45405__auto____0 = (function (){
var statearr_46533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46533[(0)] = cljs$core$async$mix_$_state_machine__45405__auto__);

(statearr_46533[(1)] = (1));

return statearr_46533;
});
var cljs$core$async$mix_$_state_machine__45405__auto____1 = (function (state_46477){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e46534){if((e46534 instanceof Object)){
var ex__45408__auto__ = e46534;
var statearr_46535_46584 = state_46477;
(statearr_46535_46584[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46585 = state_46477;
state_46477 = G__46585;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45405__auto__ = function(state_46477){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45405__auto____1.call(this,state_46477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45405__auto____0;
cljs$core$async$mix_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45405__auto____1;
return cljs$core$async$mix_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___46537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__45494__auto__ = (function (){var statearr_46536 = f__45493__auto__.call(null);
(statearr_46536[(6)] = c__45492__auto___46537);

return statearr_46536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___46537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__36991__auto__ = (((p == null))?null:p);
var m__36992__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36992__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__36991__auto__ = (((p == null))?null:p);
var m__36992__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,p,v,ch);
} else {
var m__36992__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46587 = arguments.length;
switch (G__46587) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36991__auto__ = (((p == null))?null:p);
var m__36992__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,p);
} else {
var m__36992__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__36991__auto__ = (((p == null))?null:p);
var m__36992__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36991__auto__)]);
if(!((m__36992__auto__ == null))){
return m__36992__auto__.call(null,p,v);
} else {
var m__36992__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36992__auto____$1 == null))){
return m__36992__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46591 = arguments.length;
switch (G__46591) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36308__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36308__auto__,mults){
return (function (p1__46589_SHARP_){
if(cljs.core.truth_(p1__46589_SHARP_.call(null,topic))){
return p1__46589_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46589_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36308__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46592 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46593){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46593 = meta46593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46594,meta46593__$1){
var self__ = this;
var _46594__$1 = this;
return (new cljs.core.async.t_cljs$core$async46592(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46593__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46594){
var self__ = this;
var _46594__$1 = this;
return self__.meta46593;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46592.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46593","meta46593",-87799150,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46592.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46592";

cljs.core.async.t_cljs$core$async46592.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async46592");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46592 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46592(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46593){
return (new cljs.core.async.t_cljs$core$async46592(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46593));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46592(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45492__auto___46712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___46712,mults,ensure_mult,p){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___46712,mults,ensure_mult,p){
return (function (state_46666){
var state_val_46667 = (state_46666[(1)]);
if((state_val_46667 === (7))){
var inst_46662 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46668_46713 = state_46666__$1;
(statearr_46668_46713[(2)] = inst_46662);

(statearr_46668_46713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (20))){
var state_46666__$1 = state_46666;
var statearr_46669_46714 = state_46666__$1;
(statearr_46669_46714[(2)] = null);

(statearr_46669_46714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (1))){
var state_46666__$1 = state_46666;
var statearr_46670_46715 = state_46666__$1;
(statearr_46670_46715[(2)] = null);

(statearr_46670_46715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (24))){
var inst_46645 = (state_46666[(7)]);
var inst_46654 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46645);
var state_46666__$1 = state_46666;
var statearr_46671_46716 = state_46666__$1;
(statearr_46671_46716[(2)] = inst_46654);

(statearr_46671_46716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (4))){
var inst_46597 = (state_46666[(8)]);
var inst_46597__$1 = (state_46666[(2)]);
var inst_46598 = (inst_46597__$1 == null);
var state_46666__$1 = (function (){var statearr_46672 = state_46666;
(statearr_46672[(8)] = inst_46597__$1);

return statearr_46672;
})();
if(cljs.core.truth_(inst_46598)){
var statearr_46673_46717 = state_46666__$1;
(statearr_46673_46717[(1)] = (5));

} else {
var statearr_46674_46718 = state_46666__$1;
(statearr_46674_46718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (15))){
var inst_46639 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46675_46719 = state_46666__$1;
(statearr_46675_46719[(2)] = inst_46639);

(statearr_46675_46719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (21))){
var inst_46659 = (state_46666[(2)]);
var state_46666__$1 = (function (){var statearr_46676 = state_46666;
(statearr_46676[(9)] = inst_46659);

return statearr_46676;
})();
var statearr_46677_46720 = state_46666__$1;
(statearr_46677_46720[(2)] = null);

(statearr_46677_46720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (13))){
var inst_46621 = (state_46666[(10)]);
var inst_46623 = cljs.core.chunked_seq_QMARK_.call(null,inst_46621);
var state_46666__$1 = state_46666;
if(inst_46623){
var statearr_46678_46721 = state_46666__$1;
(statearr_46678_46721[(1)] = (16));

} else {
var statearr_46679_46722 = state_46666__$1;
(statearr_46679_46722[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (22))){
var inst_46651 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
if(cljs.core.truth_(inst_46651)){
var statearr_46680_46723 = state_46666__$1;
(statearr_46680_46723[(1)] = (23));

} else {
var statearr_46681_46724 = state_46666__$1;
(statearr_46681_46724[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (6))){
var inst_46597 = (state_46666[(8)]);
var inst_46647 = (state_46666[(11)]);
var inst_46645 = (state_46666[(7)]);
var inst_46645__$1 = topic_fn.call(null,inst_46597);
var inst_46646 = cljs.core.deref.call(null,mults);
var inst_46647__$1 = cljs.core.get.call(null,inst_46646,inst_46645__$1);
var state_46666__$1 = (function (){var statearr_46682 = state_46666;
(statearr_46682[(11)] = inst_46647__$1);

(statearr_46682[(7)] = inst_46645__$1);

return statearr_46682;
})();
if(cljs.core.truth_(inst_46647__$1)){
var statearr_46683_46725 = state_46666__$1;
(statearr_46683_46725[(1)] = (19));

} else {
var statearr_46684_46726 = state_46666__$1;
(statearr_46684_46726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (25))){
var inst_46656 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46685_46727 = state_46666__$1;
(statearr_46685_46727[(2)] = inst_46656);

(statearr_46685_46727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (17))){
var inst_46621 = (state_46666[(10)]);
var inst_46630 = cljs.core.first.call(null,inst_46621);
var inst_46631 = cljs.core.async.muxch_STAR_.call(null,inst_46630);
var inst_46632 = cljs.core.async.close_BANG_.call(null,inst_46631);
var inst_46633 = cljs.core.next.call(null,inst_46621);
var inst_46607 = inst_46633;
var inst_46608 = null;
var inst_46609 = (0);
var inst_46610 = (0);
var state_46666__$1 = (function (){var statearr_46686 = state_46666;
(statearr_46686[(12)] = inst_46609);

(statearr_46686[(13)] = inst_46610);

(statearr_46686[(14)] = inst_46632);

(statearr_46686[(15)] = inst_46607);

(statearr_46686[(16)] = inst_46608);

return statearr_46686;
})();
var statearr_46687_46728 = state_46666__$1;
(statearr_46687_46728[(2)] = null);

(statearr_46687_46728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (3))){
var inst_46664 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46666__$1,inst_46664);
} else {
if((state_val_46667 === (12))){
var inst_46641 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46688_46729 = state_46666__$1;
(statearr_46688_46729[(2)] = inst_46641);

(statearr_46688_46729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (2))){
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46666__$1,(4),ch);
} else {
if((state_val_46667 === (23))){
var state_46666__$1 = state_46666;
var statearr_46689_46730 = state_46666__$1;
(statearr_46689_46730[(2)] = null);

(statearr_46689_46730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (19))){
var inst_46597 = (state_46666[(8)]);
var inst_46647 = (state_46666[(11)]);
var inst_46649 = cljs.core.async.muxch_STAR_.call(null,inst_46647);
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46666__$1,(22),inst_46649,inst_46597);
} else {
if((state_val_46667 === (11))){
var inst_46621 = (state_46666[(10)]);
var inst_46607 = (state_46666[(15)]);
var inst_46621__$1 = cljs.core.seq.call(null,inst_46607);
var state_46666__$1 = (function (){var statearr_46690 = state_46666;
(statearr_46690[(10)] = inst_46621__$1);

return statearr_46690;
})();
if(inst_46621__$1){
var statearr_46691_46731 = state_46666__$1;
(statearr_46691_46731[(1)] = (13));

} else {
var statearr_46692_46732 = state_46666__$1;
(statearr_46692_46732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (9))){
var inst_46643 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46693_46733 = state_46666__$1;
(statearr_46693_46733[(2)] = inst_46643);

(statearr_46693_46733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (5))){
var inst_46604 = cljs.core.deref.call(null,mults);
var inst_46605 = cljs.core.vals.call(null,inst_46604);
var inst_46606 = cljs.core.seq.call(null,inst_46605);
var inst_46607 = inst_46606;
var inst_46608 = null;
var inst_46609 = (0);
var inst_46610 = (0);
var state_46666__$1 = (function (){var statearr_46694 = state_46666;
(statearr_46694[(12)] = inst_46609);

(statearr_46694[(13)] = inst_46610);

(statearr_46694[(15)] = inst_46607);

(statearr_46694[(16)] = inst_46608);

return statearr_46694;
})();
var statearr_46695_46734 = state_46666__$1;
(statearr_46695_46734[(2)] = null);

(statearr_46695_46734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (14))){
var state_46666__$1 = state_46666;
var statearr_46699_46735 = state_46666__$1;
(statearr_46699_46735[(2)] = null);

(statearr_46699_46735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (16))){
var inst_46621 = (state_46666[(10)]);
var inst_46625 = cljs.core.chunk_first.call(null,inst_46621);
var inst_46626 = cljs.core.chunk_rest.call(null,inst_46621);
var inst_46627 = cljs.core.count.call(null,inst_46625);
var inst_46607 = inst_46626;
var inst_46608 = inst_46625;
var inst_46609 = inst_46627;
var inst_46610 = (0);
var state_46666__$1 = (function (){var statearr_46700 = state_46666;
(statearr_46700[(12)] = inst_46609);

(statearr_46700[(13)] = inst_46610);

(statearr_46700[(15)] = inst_46607);

(statearr_46700[(16)] = inst_46608);

return statearr_46700;
})();
var statearr_46701_46736 = state_46666__$1;
(statearr_46701_46736[(2)] = null);

(statearr_46701_46736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (10))){
var inst_46609 = (state_46666[(12)]);
var inst_46610 = (state_46666[(13)]);
var inst_46607 = (state_46666[(15)]);
var inst_46608 = (state_46666[(16)]);
var inst_46615 = cljs.core._nth.call(null,inst_46608,inst_46610);
var inst_46616 = cljs.core.async.muxch_STAR_.call(null,inst_46615);
var inst_46617 = cljs.core.async.close_BANG_.call(null,inst_46616);
var inst_46618 = (inst_46610 + (1));
var tmp46696 = inst_46609;
var tmp46697 = inst_46607;
var tmp46698 = inst_46608;
var inst_46607__$1 = tmp46697;
var inst_46608__$1 = tmp46698;
var inst_46609__$1 = tmp46696;
var inst_46610__$1 = inst_46618;
var state_46666__$1 = (function (){var statearr_46702 = state_46666;
(statearr_46702[(12)] = inst_46609__$1);

(statearr_46702[(13)] = inst_46610__$1);

(statearr_46702[(17)] = inst_46617);

(statearr_46702[(15)] = inst_46607__$1);

(statearr_46702[(16)] = inst_46608__$1);

return statearr_46702;
})();
var statearr_46703_46737 = state_46666__$1;
(statearr_46703_46737[(2)] = null);

(statearr_46703_46737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (18))){
var inst_46636 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46704_46738 = state_46666__$1;
(statearr_46704_46738[(2)] = inst_46636);

(statearr_46704_46738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (8))){
var inst_46609 = (state_46666[(12)]);
var inst_46610 = (state_46666[(13)]);
var inst_46612 = (inst_46610 < inst_46609);
var inst_46613 = inst_46612;
var state_46666__$1 = state_46666;
if(cljs.core.truth_(inst_46613)){
var statearr_46705_46739 = state_46666__$1;
(statearr_46705_46739[(1)] = (10));

} else {
var statearr_46706_46740 = state_46666__$1;
(statearr_46706_46740[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___46712,mults,ensure_mult,p))
;
return ((function (switch__45404__auto__,c__45492__auto___46712,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_46707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46707[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_46707[(1)] = (1));

return statearr_46707;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_46666){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e46708){if((e46708 instanceof Object)){
var ex__45408__auto__ = e46708;
var statearr_46709_46741 = state_46666;
(statearr_46709_46741[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46742 = state_46666;
state_46666 = G__46742;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_46666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_46666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___46712,mults,ensure_mult,p))
})();
var state__45494__auto__ = (function (){var statearr_46710 = f__45493__auto__.call(null);
(statearr_46710[(6)] = c__45492__auto___46712);

return statearr_46710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___46712,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46744 = arguments.length;
switch (G__46744) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46747 = arguments.length;
switch (G__46747) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46750 = arguments.length;
switch (G__46750) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__45492__auto___46817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___46817,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___46817,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46789){
var state_val_46790 = (state_46789[(1)]);
if((state_val_46790 === (7))){
var state_46789__$1 = state_46789;
var statearr_46791_46818 = state_46789__$1;
(statearr_46791_46818[(2)] = null);

(statearr_46791_46818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (1))){
var state_46789__$1 = state_46789;
var statearr_46792_46819 = state_46789__$1;
(statearr_46792_46819[(2)] = null);

(statearr_46792_46819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (4))){
var inst_46753 = (state_46789[(7)]);
var inst_46755 = (inst_46753 < cnt);
var state_46789__$1 = state_46789;
if(cljs.core.truth_(inst_46755)){
var statearr_46793_46820 = state_46789__$1;
(statearr_46793_46820[(1)] = (6));

} else {
var statearr_46794_46821 = state_46789__$1;
(statearr_46794_46821[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (15))){
var inst_46785 = (state_46789[(2)]);
var state_46789__$1 = state_46789;
var statearr_46795_46822 = state_46789__$1;
(statearr_46795_46822[(2)] = inst_46785);

(statearr_46795_46822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (13))){
var inst_46778 = cljs.core.async.close_BANG_.call(null,out);
var state_46789__$1 = state_46789;
var statearr_46796_46823 = state_46789__$1;
(statearr_46796_46823[(2)] = inst_46778);

(statearr_46796_46823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (6))){
var state_46789__$1 = state_46789;
var statearr_46797_46824 = state_46789__$1;
(statearr_46797_46824[(2)] = null);

(statearr_46797_46824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (3))){
var inst_46787 = (state_46789[(2)]);
var state_46789__$1 = state_46789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46789__$1,inst_46787);
} else {
if((state_val_46790 === (12))){
var inst_46775 = (state_46789[(8)]);
var inst_46775__$1 = (state_46789[(2)]);
var inst_46776 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46775__$1);
var state_46789__$1 = (function (){var statearr_46798 = state_46789;
(statearr_46798[(8)] = inst_46775__$1);

return statearr_46798;
})();
if(cljs.core.truth_(inst_46776)){
var statearr_46799_46825 = state_46789__$1;
(statearr_46799_46825[(1)] = (13));

} else {
var statearr_46800_46826 = state_46789__$1;
(statearr_46800_46826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (2))){
var inst_46752 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46753 = (0);
var state_46789__$1 = (function (){var statearr_46801 = state_46789;
(statearr_46801[(7)] = inst_46753);

(statearr_46801[(9)] = inst_46752);

return statearr_46801;
})();
var statearr_46802_46827 = state_46789__$1;
(statearr_46802_46827[(2)] = null);

(statearr_46802_46827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (11))){
var inst_46753 = (state_46789[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46789,(10),Object,null,(9));
var inst_46762 = chs__$1.call(null,inst_46753);
var inst_46763 = done.call(null,inst_46753);
var inst_46764 = cljs.core.async.take_BANG_.call(null,inst_46762,inst_46763);
var state_46789__$1 = state_46789;
var statearr_46803_46828 = state_46789__$1;
(statearr_46803_46828[(2)] = inst_46764);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46789__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (9))){
var inst_46753 = (state_46789[(7)]);
var inst_46766 = (state_46789[(2)]);
var inst_46767 = (inst_46753 + (1));
var inst_46753__$1 = inst_46767;
var state_46789__$1 = (function (){var statearr_46804 = state_46789;
(statearr_46804[(10)] = inst_46766);

(statearr_46804[(7)] = inst_46753__$1);

return statearr_46804;
})();
var statearr_46805_46829 = state_46789__$1;
(statearr_46805_46829[(2)] = null);

(statearr_46805_46829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (5))){
var inst_46773 = (state_46789[(2)]);
var state_46789__$1 = (function (){var statearr_46806 = state_46789;
(statearr_46806[(11)] = inst_46773);

return statearr_46806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46789__$1,(12),dchan);
} else {
if((state_val_46790 === (14))){
var inst_46775 = (state_46789[(8)]);
var inst_46780 = cljs.core.apply.call(null,f,inst_46775);
var state_46789__$1 = state_46789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46789__$1,(16),out,inst_46780);
} else {
if((state_val_46790 === (16))){
var inst_46782 = (state_46789[(2)]);
var state_46789__$1 = (function (){var statearr_46807 = state_46789;
(statearr_46807[(12)] = inst_46782);

return statearr_46807;
})();
var statearr_46808_46830 = state_46789__$1;
(statearr_46808_46830[(2)] = null);

(statearr_46808_46830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (10))){
var inst_46757 = (state_46789[(2)]);
var inst_46758 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46789__$1 = (function (){var statearr_46809 = state_46789;
(statearr_46809[(13)] = inst_46757);

return statearr_46809;
})();
var statearr_46810_46831 = state_46789__$1;
(statearr_46810_46831[(2)] = inst_46758);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46789__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46790 === (8))){
var inst_46771 = (state_46789[(2)]);
var state_46789__$1 = state_46789;
var statearr_46811_46832 = state_46789__$1;
(statearr_46811_46832[(2)] = inst_46771);

(statearr_46811_46832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___46817,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45404__auto__,c__45492__auto___46817,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_46812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46812[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_46812[(1)] = (1));

return statearr_46812;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_46789){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e46813){if((e46813 instanceof Object)){
var ex__45408__auto__ = e46813;
var statearr_46814_46833 = state_46789;
(statearr_46814_46833[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46834 = state_46789;
state_46789 = G__46834;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_46789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_46789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___46817,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__45494__auto__ = (function (){var statearr_46815 = f__45493__auto__.call(null);
(statearr_46815[(6)] = c__45492__auto___46817);

return statearr_46815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___46817,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46837 = arguments.length;
switch (G__46837) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45492__auto___46891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___46891,out){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___46891,out){
return (function (state_46869){
var state_val_46870 = (state_46869[(1)]);
if((state_val_46870 === (7))){
var inst_46849 = (state_46869[(7)]);
var inst_46848 = (state_46869[(8)]);
var inst_46848__$1 = (state_46869[(2)]);
var inst_46849__$1 = cljs.core.nth.call(null,inst_46848__$1,(0),null);
var inst_46850 = cljs.core.nth.call(null,inst_46848__$1,(1),null);
var inst_46851 = (inst_46849__$1 == null);
var state_46869__$1 = (function (){var statearr_46871 = state_46869;
(statearr_46871[(7)] = inst_46849__$1);

(statearr_46871[(9)] = inst_46850);

(statearr_46871[(8)] = inst_46848__$1);

return statearr_46871;
})();
if(cljs.core.truth_(inst_46851)){
var statearr_46872_46892 = state_46869__$1;
(statearr_46872_46892[(1)] = (8));

} else {
var statearr_46873_46893 = state_46869__$1;
(statearr_46873_46893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (1))){
var inst_46838 = cljs.core.vec.call(null,chs);
var inst_46839 = inst_46838;
var state_46869__$1 = (function (){var statearr_46874 = state_46869;
(statearr_46874[(10)] = inst_46839);

return statearr_46874;
})();
var statearr_46875_46894 = state_46869__$1;
(statearr_46875_46894[(2)] = null);

(statearr_46875_46894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (4))){
var inst_46839 = (state_46869[(10)]);
var state_46869__$1 = state_46869;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46869__$1,(7),inst_46839);
} else {
if((state_val_46870 === (6))){
var inst_46865 = (state_46869[(2)]);
var state_46869__$1 = state_46869;
var statearr_46876_46895 = state_46869__$1;
(statearr_46876_46895[(2)] = inst_46865);

(statearr_46876_46895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (3))){
var inst_46867 = (state_46869[(2)]);
var state_46869__$1 = state_46869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46869__$1,inst_46867);
} else {
if((state_val_46870 === (2))){
var inst_46839 = (state_46869[(10)]);
var inst_46841 = cljs.core.count.call(null,inst_46839);
var inst_46842 = (inst_46841 > (0));
var state_46869__$1 = state_46869;
if(cljs.core.truth_(inst_46842)){
var statearr_46878_46896 = state_46869__$1;
(statearr_46878_46896[(1)] = (4));

} else {
var statearr_46879_46897 = state_46869__$1;
(statearr_46879_46897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (11))){
var inst_46839 = (state_46869[(10)]);
var inst_46858 = (state_46869[(2)]);
var tmp46877 = inst_46839;
var inst_46839__$1 = tmp46877;
var state_46869__$1 = (function (){var statearr_46880 = state_46869;
(statearr_46880[(10)] = inst_46839__$1);

(statearr_46880[(11)] = inst_46858);

return statearr_46880;
})();
var statearr_46881_46898 = state_46869__$1;
(statearr_46881_46898[(2)] = null);

(statearr_46881_46898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (9))){
var inst_46849 = (state_46869[(7)]);
var state_46869__$1 = state_46869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46869__$1,(11),out,inst_46849);
} else {
if((state_val_46870 === (5))){
var inst_46863 = cljs.core.async.close_BANG_.call(null,out);
var state_46869__$1 = state_46869;
var statearr_46882_46899 = state_46869__$1;
(statearr_46882_46899[(2)] = inst_46863);

(statearr_46882_46899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (10))){
var inst_46861 = (state_46869[(2)]);
var state_46869__$1 = state_46869;
var statearr_46883_46900 = state_46869__$1;
(statearr_46883_46900[(2)] = inst_46861);

(statearr_46883_46900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46870 === (8))){
var inst_46839 = (state_46869[(10)]);
var inst_46849 = (state_46869[(7)]);
var inst_46850 = (state_46869[(9)]);
var inst_46848 = (state_46869[(8)]);
var inst_46853 = (function (){var cs = inst_46839;
var vec__46844 = inst_46848;
var v = inst_46849;
var c = inst_46850;
return ((function (cs,vec__46844,v,c,inst_46839,inst_46849,inst_46850,inst_46848,state_val_46870,c__45492__auto___46891,out){
return (function (p1__46835_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46835_SHARP_);
});
;})(cs,vec__46844,v,c,inst_46839,inst_46849,inst_46850,inst_46848,state_val_46870,c__45492__auto___46891,out))
})();
var inst_46854 = cljs.core.filterv.call(null,inst_46853,inst_46839);
var inst_46839__$1 = inst_46854;
var state_46869__$1 = (function (){var statearr_46884 = state_46869;
(statearr_46884[(10)] = inst_46839__$1);

return statearr_46884;
})();
var statearr_46885_46901 = state_46869__$1;
(statearr_46885_46901[(2)] = null);

(statearr_46885_46901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___46891,out))
;
return ((function (switch__45404__auto__,c__45492__auto___46891,out){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_46886 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46886[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_46886[(1)] = (1));

return statearr_46886;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_46869){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e46887){if((e46887 instanceof Object)){
var ex__45408__auto__ = e46887;
var statearr_46888_46902 = state_46869;
(statearr_46888_46902[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46903 = state_46869;
state_46869 = G__46903;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_46869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_46869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___46891,out))
})();
var state__45494__auto__ = (function (){var statearr_46889 = f__45493__auto__.call(null);
(statearr_46889[(6)] = c__45492__auto___46891);

return statearr_46889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___46891,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46905 = arguments.length;
switch (G__46905) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45492__auto___46950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___46950,out){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___46950,out){
return (function (state_46929){
var state_val_46930 = (state_46929[(1)]);
if((state_val_46930 === (7))){
var inst_46911 = (state_46929[(7)]);
var inst_46911__$1 = (state_46929[(2)]);
var inst_46912 = (inst_46911__$1 == null);
var inst_46913 = cljs.core.not.call(null,inst_46912);
var state_46929__$1 = (function (){var statearr_46931 = state_46929;
(statearr_46931[(7)] = inst_46911__$1);

return statearr_46931;
})();
if(inst_46913){
var statearr_46932_46951 = state_46929__$1;
(statearr_46932_46951[(1)] = (8));

} else {
var statearr_46933_46952 = state_46929__$1;
(statearr_46933_46952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46930 === (1))){
var inst_46906 = (0);
var state_46929__$1 = (function (){var statearr_46934 = state_46929;
(statearr_46934[(8)] = inst_46906);

return statearr_46934;
})();
var statearr_46935_46953 = state_46929__$1;
(statearr_46935_46953[(2)] = null);

(statearr_46935_46953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46930 === (4))){
var state_46929__$1 = state_46929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46929__$1,(7),ch);
} else {
if((state_val_46930 === (6))){
var inst_46924 = (state_46929[(2)]);
var state_46929__$1 = state_46929;
var statearr_46936_46954 = state_46929__$1;
(statearr_46936_46954[(2)] = inst_46924);

(statearr_46936_46954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46930 === (3))){
var inst_46926 = (state_46929[(2)]);
var inst_46927 = cljs.core.async.close_BANG_.call(null,out);
var state_46929__$1 = (function (){var statearr_46937 = state_46929;
(statearr_46937[(9)] = inst_46926);

return statearr_46937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46929__$1,inst_46927);
} else {
if((state_val_46930 === (2))){
var inst_46906 = (state_46929[(8)]);
var inst_46908 = (inst_46906 < n);
var state_46929__$1 = state_46929;
if(cljs.core.truth_(inst_46908)){
var statearr_46938_46955 = state_46929__$1;
(statearr_46938_46955[(1)] = (4));

} else {
var statearr_46939_46956 = state_46929__$1;
(statearr_46939_46956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46930 === (11))){
var inst_46906 = (state_46929[(8)]);
var inst_46916 = (state_46929[(2)]);
var inst_46917 = (inst_46906 + (1));
var inst_46906__$1 = inst_46917;
var state_46929__$1 = (function (){var statearr_46940 = state_46929;
(statearr_46940[(8)] = inst_46906__$1);

(statearr_46940[(10)] = inst_46916);

return statearr_46940;
})();
var statearr_46941_46957 = state_46929__$1;
(statearr_46941_46957[(2)] = null);

(statearr_46941_46957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46930 === (9))){
var state_46929__$1 = state_46929;
var statearr_46942_46958 = state_46929__$1;
(statearr_46942_46958[(2)] = null);

(statearr_46942_46958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46930 === (5))){
var state_46929__$1 = state_46929;
var statearr_46943_46959 = state_46929__$1;
(statearr_46943_46959[(2)] = null);

(statearr_46943_46959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46930 === (10))){
var inst_46921 = (state_46929[(2)]);
var state_46929__$1 = state_46929;
var statearr_46944_46960 = state_46929__$1;
(statearr_46944_46960[(2)] = inst_46921);

(statearr_46944_46960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46930 === (8))){
var inst_46911 = (state_46929[(7)]);
var state_46929__$1 = state_46929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46929__$1,(11),out,inst_46911);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___46950,out))
;
return ((function (switch__45404__auto__,c__45492__auto___46950,out){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_46945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46945[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_46945[(1)] = (1));

return statearr_46945;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_46929){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e46946){if((e46946 instanceof Object)){
var ex__45408__auto__ = e46946;
var statearr_46947_46961 = state_46929;
(statearr_46947_46961[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46962 = state_46929;
state_46929 = G__46962;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_46929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_46929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___46950,out))
})();
var state__45494__auto__ = (function (){var statearr_46948 = f__45493__auto__.call(null);
(statearr_46948[(6)] = c__45492__auto___46950);

return statearr_46948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___46950,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46964 = (function (f,ch,meta46965){
this.f = f;
this.ch = ch;
this.meta46965 = meta46965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46966,meta46965__$1){
var self__ = this;
var _46966__$1 = this;
return (new cljs.core.async.t_cljs$core$async46964(self__.f,self__.ch,meta46965__$1));
});

cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46966){
var self__ = this;
var _46966__$1 = this;
return self__.meta46965;
});

cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46967 = (function (f,ch,meta46965,_,fn1,meta46968){
this.f = f;
this.ch = ch;
this.meta46965 = meta46965;
this._ = _;
this.fn1 = fn1;
this.meta46968 = meta46968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46969,meta46968__$1){
var self__ = this;
var _46969__$1 = this;
return (new cljs.core.async.t_cljs$core$async46967(self__.f,self__.ch,self__.meta46965,self__._,self__.fn1,meta46968__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46969){
var self__ = this;
var _46969__$1 = this;
return self__.meta46968;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46963_SHARP_){
return f1.call(null,(((p1__46963_SHARP_ == null))?null:self__.f.call(null,p1__46963_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46967.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46965","meta46965",570207345,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46964","cljs.core.async/t_cljs$core$async46964",1335889632,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46968","meta46968",-1035703398,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46967";

cljs.core.async.t_cljs$core$async46967.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async46967");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46967 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46967(f__$1,ch__$1,meta46965__$1,___$2,fn1__$1,meta46968){
return (new cljs.core.async.t_cljs$core$async46967(f__$1,ch__$1,meta46965__$1,___$2,fn1__$1,meta46968));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46967(self__.f,self__.ch,self__.meta46965,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36296__auto__ = ret;
if(cljs.core.truth_(and__36296__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36296__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46965","meta46965",570207345,null)], null);
});

cljs.core.async.t_cljs$core$async46964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46964";

cljs.core.async.t_cljs$core$async46964.cljs$lang$ctorPrWriter = (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async46964");
});

cljs.core.async.__GT_t_cljs$core$async46964 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46964(f__$1,ch__$1,meta46965){
return (new cljs.core.async.t_cljs$core$async46964(f__$1,ch__$1,meta46965));
});

}

return (new cljs.core.async.t_cljs$core$async46964(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46970 = (function (f,ch,meta46971){
this.f = f;
this.ch = ch;
this.meta46971 = meta46971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46972,meta46971__$1){
var self__ = this;
var _46972__$1 = this;
return (new cljs.core.async.t_cljs$core$async46970(self__.f,self__.ch,meta46971__$1));
});

cljs.core.async.t_cljs$core$async46970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46972){
var self__ = this;
var _46972__$1 = this;
return self__.meta46971;
});

cljs.core.async.t_cljs$core$async46970.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46970.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46970.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46971","meta46971",1103579472,null)], null);
});

cljs.core.async.t_cljs$core$async46970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46970";

cljs.core.async.t_cljs$core$async46970.cljs$lang$ctorPrWriter = (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async46970");
});

cljs.core.async.__GT_t_cljs$core$async46970 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46970(f__$1,ch__$1,meta46971){
return (new cljs.core.async.t_cljs$core$async46970(f__$1,ch__$1,meta46971));
});

}

return (new cljs.core.async.t_cljs$core$async46970(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46973 = (function (p,ch,meta46974){
this.p = p;
this.ch = ch;
this.meta46974 = meta46974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46975,meta46974__$1){
var self__ = this;
var _46975__$1 = this;
return (new cljs.core.async.t_cljs$core$async46973(self__.p,self__.ch,meta46974__$1));
});

cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46975){
var self__ = this;
var _46975__$1 = this;
return self__.meta46974;
});

cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46974","meta46974",-320026584,null)], null);
});

cljs.core.async.t_cljs$core$async46973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46973";

cljs.core.async.t_cljs$core$async46973.cljs$lang$ctorPrWriter = (function (this__36933__auto__,writer__36934__auto__,opt__36935__auto__){
return cljs.core._write.call(null,writer__36934__auto__,"cljs.core.async/t_cljs$core$async46973");
});

cljs.core.async.__GT_t_cljs$core$async46973 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46973(p__$1,ch__$1,meta46974){
return (new cljs.core.async.t_cljs$core$async46973(p__$1,ch__$1,meta46974));
});

}

return (new cljs.core.async.t_cljs$core$async46973(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46977 = arguments.length;
switch (G__46977) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45492__auto___47017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___47017,out){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___47017,out){
return (function (state_46998){
var state_val_46999 = (state_46998[(1)]);
if((state_val_46999 === (7))){
var inst_46994 = (state_46998[(2)]);
var state_46998__$1 = state_46998;
var statearr_47000_47018 = state_46998__$1;
(statearr_47000_47018[(2)] = inst_46994);

(statearr_47000_47018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46999 === (1))){
var state_46998__$1 = state_46998;
var statearr_47001_47019 = state_46998__$1;
(statearr_47001_47019[(2)] = null);

(statearr_47001_47019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46999 === (4))){
var inst_46980 = (state_46998[(7)]);
var inst_46980__$1 = (state_46998[(2)]);
var inst_46981 = (inst_46980__$1 == null);
var state_46998__$1 = (function (){var statearr_47002 = state_46998;
(statearr_47002[(7)] = inst_46980__$1);

return statearr_47002;
})();
if(cljs.core.truth_(inst_46981)){
var statearr_47003_47020 = state_46998__$1;
(statearr_47003_47020[(1)] = (5));

} else {
var statearr_47004_47021 = state_46998__$1;
(statearr_47004_47021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46999 === (6))){
var inst_46980 = (state_46998[(7)]);
var inst_46985 = p.call(null,inst_46980);
var state_46998__$1 = state_46998;
if(cljs.core.truth_(inst_46985)){
var statearr_47005_47022 = state_46998__$1;
(statearr_47005_47022[(1)] = (8));

} else {
var statearr_47006_47023 = state_46998__$1;
(statearr_47006_47023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46999 === (3))){
var inst_46996 = (state_46998[(2)]);
var state_46998__$1 = state_46998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46998__$1,inst_46996);
} else {
if((state_val_46999 === (2))){
var state_46998__$1 = state_46998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46998__$1,(4),ch);
} else {
if((state_val_46999 === (11))){
var inst_46988 = (state_46998[(2)]);
var state_46998__$1 = state_46998;
var statearr_47007_47024 = state_46998__$1;
(statearr_47007_47024[(2)] = inst_46988);

(statearr_47007_47024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46999 === (9))){
var state_46998__$1 = state_46998;
var statearr_47008_47025 = state_46998__$1;
(statearr_47008_47025[(2)] = null);

(statearr_47008_47025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46999 === (5))){
var inst_46983 = cljs.core.async.close_BANG_.call(null,out);
var state_46998__$1 = state_46998;
var statearr_47009_47026 = state_46998__$1;
(statearr_47009_47026[(2)] = inst_46983);

(statearr_47009_47026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46999 === (10))){
var inst_46991 = (state_46998[(2)]);
var state_46998__$1 = (function (){var statearr_47010 = state_46998;
(statearr_47010[(8)] = inst_46991);

return statearr_47010;
})();
var statearr_47011_47027 = state_46998__$1;
(statearr_47011_47027[(2)] = null);

(statearr_47011_47027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46999 === (8))){
var inst_46980 = (state_46998[(7)]);
var state_46998__$1 = state_46998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46998__$1,(11),out,inst_46980);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___47017,out))
;
return ((function (switch__45404__auto__,c__45492__auto___47017,out){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_47012 = [null,null,null,null,null,null,null,null,null];
(statearr_47012[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_47012[(1)] = (1));

return statearr_47012;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_46998){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_46998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e47013){if((e47013 instanceof Object)){
var ex__45408__auto__ = e47013;
var statearr_47014_47028 = state_46998;
(statearr_47014_47028[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47029 = state_46998;
state_46998 = G__47029;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_46998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_46998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___47017,out))
})();
var state__45494__auto__ = (function (){var statearr_47015 = f__45493__auto__.call(null);
(statearr_47015[(6)] = c__45492__auto___47017);

return statearr_47015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___47017,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47031 = arguments.length;
switch (G__47031) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__){
return (function (state_47094){
var state_val_47095 = (state_47094[(1)]);
if((state_val_47095 === (7))){
var inst_47090 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
var statearr_47096_47134 = state_47094__$1;
(statearr_47096_47134[(2)] = inst_47090);

(statearr_47096_47134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (20))){
var inst_47060 = (state_47094[(7)]);
var inst_47071 = (state_47094[(2)]);
var inst_47072 = cljs.core.next.call(null,inst_47060);
var inst_47046 = inst_47072;
var inst_47047 = null;
var inst_47048 = (0);
var inst_47049 = (0);
var state_47094__$1 = (function (){var statearr_47097 = state_47094;
(statearr_47097[(8)] = inst_47049);

(statearr_47097[(9)] = inst_47048);

(statearr_47097[(10)] = inst_47046);

(statearr_47097[(11)] = inst_47047);

(statearr_47097[(12)] = inst_47071);

return statearr_47097;
})();
var statearr_47098_47135 = state_47094__$1;
(statearr_47098_47135[(2)] = null);

(statearr_47098_47135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (1))){
var state_47094__$1 = state_47094;
var statearr_47099_47136 = state_47094__$1;
(statearr_47099_47136[(2)] = null);

(statearr_47099_47136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (4))){
var inst_47035 = (state_47094[(13)]);
var inst_47035__$1 = (state_47094[(2)]);
var inst_47036 = (inst_47035__$1 == null);
var state_47094__$1 = (function (){var statearr_47100 = state_47094;
(statearr_47100[(13)] = inst_47035__$1);

return statearr_47100;
})();
if(cljs.core.truth_(inst_47036)){
var statearr_47101_47137 = state_47094__$1;
(statearr_47101_47137[(1)] = (5));

} else {
var statearr_47102_47138 = state_47094__$1;
(statearr_47102_47138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (15))){
var state_47094__$1 = state_47094;
var statearr_47106_47139 = state_47094__$1;
(statearr_47106_47139[(2)] = null);

(statearr_47106_47139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (21))){
var state_47094__$1 = state_47094;
var statearr_47107_47140 = state_47094__$1;
(statearr_47107_47140[(2)] = null);

(statearr_47107_47140[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (13))){
var inst_47049 = (state_47094[(8)]);
var inst_47048 = (state_47094[(9)]);
var inst_47046 = (state_47094[(10)]);
var inst_47047 = (state_47094[(11)]);
var inst_47056 = (state_47094[(2)]);
var inst_47057 = (inst_47049 + (1));
var tmp47103 = inst_47048;
var tmp47104 = inst_47046;
var tmp47105 = inst_47047;
var inst_47046__$1 = tmp47104;
var inst_47047__$1 = tmp47105;
var inst_47048__$1 = tmp47103;
var inst_47049__$1 = inst_47057;
var state_47094__$1 = (function (){var statearr_47108 = state_47094;
(statearr_47108[(8)] = inst_47049__$1);

(statearr_47108[(14)] = inst_47056);

(statearr_47108[(9)] = inst_47048__$1);

(statearr_47108[(10)] = inst_47046__$1);

(statearr_47108[(11)] = inst_47047__$1);

return statearr_47108;
})();
var statearr_47109_47141 = state_47094__$1;
(statearr_47109_47141[(2)] = null);

(statearr_47109_47141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (22))){
var state_47094__$1 = state_47094;
var statearr_47110_47142 = state_47094__$1;
(statearr_47110_47142[(2)] = null);

(statearr_47110_47142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (6))){
var inst_47035 = (state_47094[(13)]);
var inst_47044 = f.call(null,inst_47035);
var inst_47045 = cljs.core.seq.call(null,inst_47044);
var inst_47046 = inst_47045;
var inst_47047 = null;
var inst_47048 = (0);
var inst_47049 = (0);
var state_47094__$1 = (function (){var statearr_47111 = state_47094;
(statearr_47111[(8)] = inst_47049);

(statearr_47111[(9)] = inst_47048);

(statearr_47111[(10)] = inst_47046);

(statearr_47111[(11)] = inst_47047);

return statearr_47111;
})();
var statearr_47112_47143 = state_47094__$1;
(statearr_47112_47143[(2)] = null);

(statearr_47112_47143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (17))){
var inst_47060 = (state_47094[(7)]);
var inst_47064 = cljs.core.chunk_first.call(null,inst_47060);
var inst_47065 = cljs.core.chunk_rest.call(null,inst_47060);
var inst_47066 = cljs.core.count.call(null,inst_47064);
var inst_47046 = inst_47065;
var inst_47047 = inst_47064;
var inst_47048 = inst_47066;
var inst_47049 = (0);
var state_47094__$1 = (function (){var statearr_47113 = state_47094;
(statearr_47113[(8)] = inst_47049);

(statearr_47113[(9)] = inst_47048);

(statearr_47113[(10)] = inst_47046);

(statearr_47113[(11)] = inst_47047);

return statearr_47113;
})();
var statearr_47114_47144 = state_47094__$1;
(statearr_47114_47144[(2)] = null);

(statearr_47114_47144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (3))){
var inst_47092 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47094__$1,inst_47092);
} else {
if((state_val_47095 === (12))){
var inst_47080 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
var statearr_47115_47145 = state_47094__$1;
(statearr_47115_47145[(2)] = inst_47080);

(statearr_47115_47145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (2))){
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47094__$1,(4),in$);
} else {
if((state_val_47095 === (23))){
var inst_47088 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
var statearr_47116_47146 = state_47094__$1;
(statearr_47116_47146[(2)] = inst_47088);

(statearr_47116_47146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (19))){
var inst_47075 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
var statearr_47117_47147 = state_47094__$1;
(statearr_47117_47147[(2)] = inst_47075);

(statearr_47117_47147[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (11))){
var inst_47060 = (state_47094[(7)]);
var inst_47046 = (state_47094[(10)]);
var inst_47060__$1 = cljs.core.seq.call(null,inst_47046);
var state_47094__$1 = (function (){var statearr_47118 = state_47094;
(statearr_47118[(7)] = inst_47060__$1);

return statearr_47118;
})();
if(inst_47060__$1){
var statearr_47119_47148 = state_47094__$1;
(statearr_47119_47148[(1)] = (14));

} else {
var statearr_47120_47149 = state_47094__$1;
(statearr_47120_47149[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (9))){
var inst_47082 = (state_47094[(2)]);
var inst_47083 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47094__$1 = (function (){var statearr_47121 = state_47094;
(statearr_47121[(15)] = inst_47082);

return statearr_47121;
})();
if(cljs.core.truth_(inst_47083)){
var statearr_47122_47150 = state_47094__$1;
(statearr_47122_47150[(1)] = (21));

} else {
var statearr_47123_47151 = state_47094__$1;
(statearr_47123_47151[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (5))){
var inst_47038 = cljs.core.async.close_BANG_.call(null,out);
var state_47094__$1 = state_47094;
var statearr_47124_47152 = state_47094__$1;
(statearr_47124_47152[(2)] = inst_47038);

(statearr_47124_47152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (14))){
var inst_47060 = (state_47094[(7)]);
var inst_47062 = cljs.core.chunked_seq_QMARK_.call(null,inst_47060);
var state_47094__$1 = state_47094;
if(inst_47062){
var statearr_47125_47153 = state_47094__$1;
(statearr_47125_47153[(1)] = (17));

} else {
var statearr_47126_47154 = state_47094__$1;
(statearr_47126_47154[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (16))){
var inst_47078 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
var statearr_47127_47155 = state_47094__$1;
(statearr_47127_47155[(2)] = inst_47078);

(statearr_47127_47155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (10))){
var inst_47049 = (state_47094[(8)]);
var inst_47047 = (state_47094[(11)]);
var inst_47054 = cljs.core._nth.call(null,inst_47047,inst_47049);
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47094__$1,(13),out,inst_47054);
} else {
if((state_val_47095 === (18))){
var inst_47060 = (state_47094[(7)]);
var inst_47069 = cljs.core.first.call(null,inst_47060);
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47094__$1,(20),out,inst_47069);
} else {
if((state_val_47095 === (8))){
var inst_47049 = (state_47094[(8)]);
var inst_47048 = (state_47094[(9)]);
var inst_47051 = (inst_47049 < inst_47048);
var inst_47052 = inst_47051;
var state_47094__$1 = state_47094;
if(cljs.core.truth_(inst_47052)){
var statearr_47128_47156 = state_47094__$1;
(statearr_47128_47156[(1)] = (10));

} else {
var statearr_47129_47157 = state_47094__$1;
(statearr_47129_47157[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto__))
;
return ((function (switch__45404__auto__,c__45492__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45405__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45405__auto____0 = (function (){
var statearr_47130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47130[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45405__auto__);

(statearr_47130[(1)] = (1));

return statearr_47130;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45405__auto____1 = (function (state_47094){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_47094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e47131){if((e47131 instanceof Object)){
var ex__45408__auto__ = e47131;
var statearr_47132_47158 = state_47094;
(statearr_47132_47158[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47159 = state_47094;
state_47094 = G__47159;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45405__auto__ = function(state_47094){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45405__auto____1.call(this,state_47094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45405__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45405__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__))
})();
var state__45494__auto__ = (function (){var statearr_47133 = f__45493__auto__.call(null);
(statearr_47133[(6)] = c__45492__auto__);

return statearr_47133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__))
);

return c__45492__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47161 = arguments.length;
switch (G__47161) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47164 = arguments.length;
switch (G__47164) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47167 = arguments.length;
switch (G__47167) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45492__auto___47214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___47214,out){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___47214,out){
return (function (state_47191){
var state_val_47192 = (state_47191[(1)]);
if((state_val_47192 === (7))){
var inst_47186 = (state_47191[(2)]);
var state_47191__$1 = state_47191;
var statearr_47193_47215 = state_47191__$1;
(statearr_47193_47215[(2)] = inst_47186);

(statearr_47193_47215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (1))){
var inst_47168 = null;
var state_47191__$1 = (function (){var statearr_47194 = state_47191;
(statearr_47194[(7)] = inst_47168);

return statearr_47194;
})();
var statearr_47195_47216 = state_47191__$1;
(statearr_47195_47216[(2)] = null);

(statearr_47195_47216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (4))){
var inst_47171 = (state_47191[(8)]);
var inst_47171__$1 = (state_47191[(2)]);
var inst_47172 = (inst_47171__$1 == null);
var inst_47173 = cljs.core.not.call(null,inst_47172);
var state_47191__$1 = (function (){var statearr_47196 = state_47191;
(statearr_47196[(8)] = inst_47171__$1);

return statearr_47196;
})();
if(inst_47173){
var statearr_47197_47217 = state_47191__$1;
(statearr_47197_47217[(1)] = (5));

} else {
var statearr_47198_47218 = state_47191__$1;
(statearr_47198_47218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (6))){
var state_47191__$1 = state_47191;
var statearr_47199_47219 = state_47191__$1;
(statearr_47199_47219[(2)] = null);

(statearr_47199_47219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (3))){
var inst_47188 = (state_47191[(2)]);
var inst_47189 = cljs.core.async.close_BANG_.call(null,out);
var state_47191__$1 = (function (){var statearr_47200 = state_47191;
(statearr_47200[(9)] = inst_47188);

return statearr_47200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47191__$1,inst_47189);
} else {
if((state_val_47192 === (2))){
var state_47191__$1 = state_47191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47191__$1,(4),ch);
} else {
if((state_val_47192 === (11))){
var inst_47171 = (state_47191[(8)]);
var inst_47180 = (state_47191[(2)]);
var inst_47168 = inst_47171;
var state_47191__$1 = (function (){var statearr_47201 = state_47191;
(statearr_47201[(10)] = inst_47180);

(statearr_47201[(7)] = inst_47168);

return statearr_47201;
})();
var statearr_47202_47220 = state_47191__$1;
(statearr_47202_47220[(2)] = null);

(statearr_47202_47220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (9))){
var inst_47171 = (state_47191[(8)]);
var state_47191__$1 = state_47191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47191__$1,(11),out,inst_47171);
} else {
if((state_val_47192 === (5))){
var inst_47168 = (state_47191[(7)]);
var inst_47171 = (state_47191[(8)]);
var inst_47175 = cljs.core._EQ_.call(null,inst_47171,inst_47168);
var state_47191__$1 = state_47191;
if(inst_47175){
var statearr_47204_47221 = state_47191__$1;
(statearr_47204_47221[(1)] = (8));

} else {
var statearr_47205_47222 = state_47191__$1;
(statearr_47205_47222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (10))){
var inst_47183 = (state_47191[(2)]);
var state_47191__$1 = state_47191;
var statearr_47206_47223 = state_47191__$1;
(statearr_47206_47223[(2)] = inst_47183);

(statearr_47206_47223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (8))){
var inst_47168 = (state_47191[(7)]);
var tmp47203 = inst_47168;
var inst_47168__$1 = tmp47203;
var state_47191__$1 = (function (){var statearr_47207 = state_47191;
(statearr_47207[(7)] = inst_47168__$1);

return statearr_47207;
})();
var statearr_47208_47224 = state_47191__$1;
(statearr_47208_47224[(2)] = null);

(statearr_47208_47224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___47214,out))
;
return ((function (switch__45404__auto__,c__45492__auto___47214,out){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_47209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47209[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_47209[(1)] = (1));

return statearr_47209;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_47191){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_47191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e47210){if((e47210 instanceof Object)){
var ex__45408__auto__ = e47210;
var statearr_47211_47225 = state_47191;
(statearr_47211_47225[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47226 = state_47191;
state_47191 = G__47226;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_47191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_47191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___47214,out))
})();
var state__45494__auto__ = (function (){var statearr_47212 = f__45493__auto__.call(null);
(statearr_47212[(6)] = c__45492__auto___47214);

return statearr_47212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___47214,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47228 = arguments.length;
switch (G__47228) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45492__auto___47294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___47294,out){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___47294,out){
return (function (state_47266){
var state_val_47267 = (state_47266[(1)]);
if((state_val_47267 === (7))){
var inst_47262 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
var statearr_47268_47295 = state_47266__$1;
(statearr_47268_47295[(2)] = inst_47262);

(statearr_47268_47295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (1))){
var inst_47229 = (new Array(n));
var inst_47230 = inst_47229;
var inst_47231 = (0);
var state_47266__$1 = (function (){var statearr_47269 = state_47266;
(statearr_47269[(7)] = inst_47230);

(statearr_47269[(8)] = inst_47231);

return statearr_47269;
})();
var statearr_47270_47296 = state_47266__$1;
(statearr_47270_47296[(2)] = null);

(statearr_47270_47296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (4))){
var inst_47234 = (state_47266[(9)]);
var inst_47234__$1 = (state_47266[(2)]);
var inst_47235 = (inst_47234__$1 == null);
var inst_47236 = cljs.core.not.call(null,inst_47235);
var state_47266__$1 = (function (){var statearr_47271 = state_47266;
(statearr_47271[(9)] = inst_47234__$1);

return statearr_47271;
})();
if(inst_47236){
var statearr_47272_47297 = state_47266__$1;
(statearr_47272_47297[(1)] = (5));

} else {
var statearr_47273_47298 = state_47266__$1;
(statearr_47273_47298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (15))){
var inst_47256 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
var statearr_47274_47299 = state_47266__$1;
(statearr_47274_47299[(2)] = inst_47256);

(statearr_47274_47299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (13))){
var state_47266__$1 = state_47266;
var statearr_47275_47300 = state_47266__$1;
(statearr_47275_47300[(2)] = null);

(statearr_47275_47300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (6))){
var inst_47231 = (state_47266[(8)]);
var inst_47252 = (inst_47231 > (0));
var state_47266__$1 = state_47266;
if(cljs.core.truth_(inst_47252)){
var statearr_47276_47301 = state_47266__$1;
(statearr_47276_47301[(1)] = (12));

} else {
var statearr_47277_47302 = state_47266__$1;
(statearr_47277_47302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (3))){
var inst_47264 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47266__$1,inst_47264);
} else {
if((state_val_47267 === (12))){
var inst_47230 = (state_47266[(7)]);
var inst_47254 = cljs.core.vec.call(null,inst_47230);
var state_47266__$1 = state_47266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47266__$1,(15),out,inst_47254);
} else {
if((state_val_47267 === (2))){
var state_47266__$1 = state_47266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47266__$1,(4),ch);
} else {
if((state_val_47267 === (11))){
var inst_47246 = (state_47266[(2)]);
var inst_47247 = (new Array(n));
var inst_47230 = inst_47247;
var inst_47231 = (0);
var state_47266__$1 = (function (){var statearr_47278 = state_47266;
(statearr_47278[(7)] = inst_47230);

(statearr_47278[(8)] = inst_47231);

(statearr_47278[(10)] = inst_47246);

return statearr_47278;
})();
var statearr_47279_47303 = state_47266__$1;
(statearr_47279_47303[(2)] = null);

(statearr_47279_47303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (9))){
var inst_47230 = (state_47266[(7)]);
var inst_47244 = cljs.core.vec.call(null,inst_47230);
var state_47266__$1 = state_47266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47266__$1,(11),out,inst_47244);
} else {
if((state_val_47267 === (5))){
var inst_47234 = (state_47266[(9)]);
var inst_47239 = (state_47266[(11)]);
var inst_47230 = (state_47266[(7)]);
var inst_47231 = (state_47266[(8)]);
var inst_47238 = (inst_47230[inst_47231] = inst_47234);
var inst_47239__$1 = (inst_47231 + (1));
var inst_47240 = (inst_47239__$1 < n);
var state_47266__$1 = (function (){var statearr_47280 = state_47266;
(statearr_47280[(11)] = inst_47239__$1);

(statearr_47280[(12)] = inst_47238);

return statearr_47280;
})();
if(cljs.core.truth_(inst_47240)){
var statearr_47281_47304 = state_47266__$1;
(statearr_47281_47304[(1)] = (8));

} else {
var statearr_47282_47305 = state_47266__$1;
(statearr_47282_47305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (14))){
var inst_47259 = (state_47266[(2)]);
var inst_47260 = cljs.core.async.close_BANG_.call(null,out);
var state_47266__$1 = (function (){var statearr_47284 = state_47266;
(statearr_47284[(13)] = inst_47259);

return statearr_47284;
})();
var statearr_47285_47306 = state_47266__$1;
(statearr_47285_47306[(2)] = inst_47260);

(statearr_47285_47306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (10))){
var inst_47250 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
var statearr_47286_47307 = state_47266__$1;
(statearr_47286_47307[(2)] = inst_47250);

(statearr_47286_47307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (8))){
var inst_47239 = (state_47266[(11)]);
var inst_47230 = (state_47266[(7)]);
var tmp47283 = inst_47230;
var inst_47230__$1 = tmp47283;
var inst_47231 = inst_47239;
var state_47266__$1 = (function (){var statearr_47287 = state_47266;
(statearr_47287[(7)] = inst_47230__$1);

(statearr_47287[(8)] = inst_47231);

return statearr_47287;
})();
var statearr_47288_47308 = state_47266__$1;
(statearr_47288_47308[(2)] = null);

(statearr_47288_47308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___47294,out))
;
return ((function (switch__45404__auto__,c__45492__auto___47294,out){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_47289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47289[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_47289[(1)] = (1));

return statearr_47289;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_47266){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_47266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e47290){if((e47290 instanceof Object)){
var ex__45408__auto__ = e47290;
var statearr_47291_47309 = state_47266;
(statearr_47291_47309[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47310 = state_47266;
state_47266 = G__47310;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_47266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_47266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___47294,out))
})();
var state__45494__auto__ = (function (){var statearr_47292 = f__45493__auto__.call(null);
(statearr_47292[(6)] = c__45492__auto___47294);

return statearr_47292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___47294,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47312 = arguments.length;
switch (G__47312) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45492__auto___47382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___47382,out){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___47382,out){
return (function (state_47354){
var state_val_47355 = (state_47354[(1)]);
if((state_val_47355 === (7))){
var inst_47350 = (state_47354[(2)]);
var state_47354__$1 = state_47354;
var statearr_47356_47383 = state_47354__$1;
(statearr_47356_47383[(2)] = inst_47350);

(statearr_47356_47383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (1))){
var inst_47313 = [];
var inst_47314 = inst_47313;
var inst_47315 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47354__$1 = (function (){var statearr_47357 = state_47354;
(statearr_47357[(7)] = inst_47315);

(statearr_47357[(8)] = inst_47314);

return statearr_47357;
})();
var statearr_47358_47384 = state_47354__$1;
(statearr_47358_47384[(2)] = null);

(statearr_47358_47384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (4))){
var inst_47318 = (state_47354[(9)]);
var inst_47318__$1 = (state_47354[(2)]);
var inst_47319 = (inst_47318__$1 == null);
var inst_47320 = cljs.core.not.call(null,inst_47319);
var state_47354__$1 = (function (){var statearr_47359 = state_47354;
(statearr_47359[(9)] = inst_47318__$1);

return statearr_47359;
})();
if(inst_47320){
var statearr_47360_47385 = state_47354__$1;
(statearr_47360_47385[(1)] = (5));

} else {
var statearr_47361_47386 = state_47354__$1;
(statearr_47361_47386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (15))){
var inst_47344 = (state_47354[(2)]);
var state_47354__$1 = state_47354;
var statearr_47362_47387 = state_47354__$1;
(statearr_47362_47387[(2)] = inst_47344);

(statearr_47362_47387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (13))){
var state_47354__$1 = state_47354;
var statearr_47363_47388 = state_47354__$1;
(statearr_47363_47388[(2)] = null);

(statearr_47363_47388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (6))){
var inst_47314 = (state_47354[(8)]);
var inst_47339 = inst_47314.length;
var inst_47340 = (inst_47339 > (0));
var state_47354__$1 = state_47354;
if(cljs.core.truth_(inst_47340)){
var statearr_47364_47389 = state_47354__$1;
(statearr_47364_47389[(1)] = (12));

} else {
var statearr_47365_47390 = state_47354__$1;
(statearr_47365_47390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (3))){
var inst_47352 = (state_47354[(2)]);
var state_47354__$1 = state_47354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47354__$1,inst_47352);
} else {
if((state_val_47355 === (12))){
var inst_47314 = (state_47354[(8)]);
var inst_47342 = cljs.core.vec.call(null,inst_47314);
var state_47354__$1 = state_47354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47354__$1,(15),out,inst_47342);
} else {
if((state_val_47355 === (2))){
var state_47354__$1 = state_47354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47354__$1,(4),ch);
} else {
if((state_val_47355 === (11))){
var inst_47318 = (state_47354[(9)]);
var inst_47322 = (state_47354[(10)]);
var inst_47332 = (state_47354[(2)]);
var inst_47333 = [];
var inst_47334 = inst_47333.push(inst_47318);
var inst_47314 = inst_47333;
var inst_47315 = inst_47322;
var state_47354__$1 = (function (){var statearr_47366 = state_47354;
(statearr_47366[(11)] = inst_47332);

(statearr_47366[(7)] = inst_47315);

(statearr_47366[(12)] = inst_47334);

(statearr_47366[(8)] = inst_47314);

return statearr_47366;
})();
var statearr_47367_47391 = state_47354__$1;
(statearr_47367_47391[(2)] = null);

(statearr_47367_47391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (9))){
var inst_47314 = (state_47354[(8)]);
var inst_47330 = cljs.core.vec.call(null,inst_47314);
var state_47354__$1 = state_47354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47354__$1,(11),out,inst_47330);
} else {
if((state_val_47355 === (5))){
var inst_47318 = (state_47354[(9)]);
var inst_47315 = (state_47354[(7)]);
var inst_47322 = (state_47354[(10)]);
var inst_47322__$1 = f.call(null,inst_47318);
var inst_47323 = cljs.core._EQ_.call(null,inst_47322__$1,inst_47315);
var inst_47324 = cljs.core.keyword_identical_QMARK_.call(null,inst_47315,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47325 = (inst_47323) || (inst_47324);
var state_47354__$1 = (function (){var statearr_47368 = state_47354;
(statearr_47368[(10)] = inst_47322__$1);

return statearr_47368;
})();
if(cljs.core.truth_(inst_47325)){
var statearr_47369_47392 = state_47354__$1;
(statearr_47369_47392[(1)] = (8));

} else {
var statearr_47370_47393 = state_47354__$1;
(statearr_47370_47393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (14))){
var inst_47347 = (state_47354[(2)]);
var inst_47348 = cljs.core.async.close_BANG_.call(null,out);
var state_47354__$1 = (function (){var statearr_47372 = state_47354;
(statearr_47372[(13)] = inst_47347);

return statearr_47372;
})();
var statearr_47373_47394 = state_47354__$1;
(statearr_47373_47394[(2)] = inst_47348);

(statearr_47373_47394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (10))){
var inst_47337 = (state_47354[(2)]);
var state_47354__$1 = state_47354;
var statearr_47374_47395 = state_47354__$1;
(statearr_47374_47395[(2)] = inst_47337);

(statearr_47374_47395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47355 === (8))){
var inst_47318 = (state_47354[(9)]);
var inst_47314 = (state_47354[(8)]);
var inst_47322 = (state_47354[(10)]);
var inst_47327 = inst_47314.push(inst_47318);
var tmp47371 = inst_47314;
var inst_47314__$1 = tmp47371;
var inst_47315 = inst_47322;
var state_47354__$1 = (function (){var statearr_47375 = state_47354;
(statearr_47375[(14)] = inst_47327);

(statearr_47375[(7)] = inst_47315);

(statearr_47375[(8)] = inst_47314__$1);

return statearr_47375;
})();
var statearr_47376_47396 = state_47354__$1;
(statearr_47376_47396[(2)] = null);

(statearr_47376_47396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45492__auto___47382,out))
;
return ((function (switch__45404__auto__,c__45492__auto___47382,out){
return (function() {
var cljs$core$async$state_machine__45405__auto__ = null;
var cljs$core$async$state_machine__45405__auto____0 = (function (){
var statearr_47377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47377[(0)] = cljs$core$async$state_machine__45405__auto__);

(statearr_47377[(1)] = (1));

return statearr_47377;
});
var cljs$core$async$state_machine__45405__auto____1 = (function (state_47354){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_47354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e47378){if((e47378 instanceof Object)){
var ex__45408__auto__ = e47378;
var statearr_47379_47397 = state_47354;
(statearr_47379_47397[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47398 = state_47354;
state_47354 = G__47398;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
cljs$core$async$state_machine__45405__auto__ = function(state_47354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45405__auto____1.call(this,state_47354);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45405__auto____0;
cljs$core$async$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45405__auto____1;
return cljs$core$async$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___47382,out))
})();
var state__45494__auto__ = (function (){var statearr_47380 = f__45493__auto__.call(null);
(statearr_47380[(6)] = c__45492__auto___47382);

return statearr_47380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___47382,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518330183236
