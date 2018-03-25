// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22485 = arguments.length;
switch (G__22485) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22486 = (function (f,blockable,meta22487){
this.f = f;
this.blockable = blockable;
this.meta22487 = meta22487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22488,meta22487__$1){
var self__ = this;
var _22488__$1 = this;
return (new cljs.core.async.t_cljs$core$async22486(self__.f,self__.blockable,meta22487__$1));
});

cljs.core.async.t_cljs$core$async22486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22488){
var self__ = this;
var _22488__$1 = this;
return self__.meta22487;
});

cljs.core.async.t_cljs$core$async22486.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta22487], null);
});

cljs.core.async.t_cljs$core$async22486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22486";

cljs.core.async.t_cljs$core$async22486.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async22486");
});

cljs.core.async.__GT_t_cljs$core$async22486 = (function cljs$core$async$__GT_t_cljs$core$async22486(f__$1,blockable__$1,meta22487){
return (new cljs.core.async.t_cljs$core$async22486(f__$1,blockable__$1,meta22487));
});

}

return (new cljs.core.async.t_cljs$core$async22486(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__22492 = arguments.length;
switch (G__22492) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__22495 = arguments.length;
switch (G__22495) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__22498 = arguments.length;
switch (G__22498) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_22500 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22500) : fn1.call(null,val_22500));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22500,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22500) : fn1.call(null,val_22500));
});})(val_22500,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__22502 = arguments.length;
switch (G__22502) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8615__auto___22504 = n;
var x_22505 = (0);
while(true){
if((x_22505 < n__8615__auto___22504)){
(a[x_22505] = (0));

var G__22506 = (x_22505 + (1));
x_22505 = G__22506;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__22507 = (i + (1));
i = G__22507;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async22508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22508 = (function (flag,meta22509){
this.flag = flag;
this.meta22509 = meta22509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22510,meta22509__$1){
var self__ = this;
var _22510__$1 = this;
return (new cljs.core.async.t_cljs$core$async22508(self__.flag,meta22509__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22510){
var self__ = this;
var _22510__$1 = this;
return self__.meta22509;
});})(flag))
;

cljs.core.async.t_cljs$core$async22508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22508.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta22509], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22508";

cljs.core.async.t_cljs$core$async22508.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async22508");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22508 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22508(flag__$1,meta22509){
return (new cljs.core.async.t_cljs$core$async22508(flag__$1,meta22509));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22508(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22511 = (function (flag,cb,meta22512){
this.flag = flag;
this.cb = cb;
this.meta22512 = meta22512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22513,meta22512__$1){
var self__ = this;
var _22513__$1 = this;
return (new cljs.core.async.t_cljs$core$async22511(self__.flag,self__.cb,meta22512__$1));
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22513){
var self__ = this;
var _22513__$1 = this;
return self__.meta22512;
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta22512], null);
});

cljs.core.async.t_cljs$core$async22511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22511";

cljs.core.async.t_cljs$core$async22511.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async22511");
});

cljs.core.async.__GT_t_cljs$core$async22511 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22511(flag__$1,cb__$1,meta22512){
return (new cljs.core.async.t_cljs$core$async22511(flag__$1,cb__$1,meta22512));
});

}

return (new cljs.core.async.t_cljs$core$async22511(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22514_SHARP_){
var G__22516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22514_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22516) : fret.call(null,G__22516));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22515_SHARP_){
var G__22517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22515_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22517) : fret.call(null,G__22517));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7668__auto__ = wport;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22518 = (i + (1));
i = G__22518;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7668__auto__ = ret;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__7656__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7656__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__8846__auto__ = [];
var len__8839__auto___22524 = arguments.length;
var i__8840__auto___22525 = (0);
while(true){
if((i__8840__auto___22525 < len__8839__auto___22524)){
args__8846__auto__.push((arguments[i__8840__auto___22525]));

var G__22526 = (i__8840__auto___22525 + (1));
i__8840__auto___22525 = G__22526;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22521){
var map__22522 = p__22521;
var map__22522__$1 = ((((!((map__22522 == null)))?((((map__22522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22522):map__22522);
var opts = map__22522__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22519){
var G__22520 = cljs.core.first(seq22519);
var seq22519__$1 = cljs.core.next(seq22519);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22520,seq22519__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__22528 = arguments.length;
switch (G__22528) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22439__auto___22574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___22574){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___22574){
return (function (state_22552){
var state_val_22553 = (state_22552[(1)]);
if((state_val_22553 === (7))){
var inst_22548 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
var statearr_22554_22575 = state_22552__$1;
(statearr_22554_22575[(2)] = inst_22548);

(statearr_22554_22575[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (1))){
var state_22552__$1 = state_22552;
var statearr_22555_22576 = state_22552__$1;
(statearr_22555_22576[(2)] = null);

(statearr_22555_22576[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (4))){
var inst_22531 = (state_22552[(7)]);
var inst_22531__$1 = (state_22552[(2)]);
var inst_22532 = (inst_22531__$1 == null);
var state_22552__$1 = (function (){var statearr_22556 = state_22552;
(statearr_22556[(7)] = inst_22531__$1);

return statearr_22556;
})();
if(cljs.core.truth_(inst_22532)){
var statearr_22557_22577 = state_22552__$1;
(statearr_22557_22577[(1)] = (5));

} else {
var statearr_22558_22578 = state_22552__$1;
(statearr_22558_22578[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (13))){
var state_22552__$1 = state_22552;
var statearr_22559_22579 = state_22552__$1;
(statearr_22559_22579[(2)] = null);

(statearr_22559_22579[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (6))){
var inst_22531 = (state_22552[(7)]);
var state_22552__$1 = state_22552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22552__$1,(11),to,inst_22531);
} else {
if((state_val_22553 === (3))){
var inst_22550 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22552__$1,inst_22550);
} else {
if((state_val_22553 === (12))){
var state_22552__$1 = state_22552;
var statearr_22560_22580 = state_22552__$1;
(statearr_22560_22580[(2)] = null);

(statearr_22560_22580[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (2))){
var state_22552__$1 = state_22552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22552__$1,(4),from);
} else {
if((state_val_22553 === (11))){
var inst_22541 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
if(cljs.core.truth_(inst_22541)){
var statearr_22561_22581 = state_22552__$1;
(statearr_22561_22581[(1)] = (12));

} else {
var statearr_22562_22582 = state_22552__$1;
(statearr_22562_22582[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (9))){
var state_22552__$1 = state_22552;
var statearr_22563_22583 = state_22552__$1;
(statearr_22563_22583[(2)] = null);

(statearr_22563_22583[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (5))){
var state_22552__$1 = state_22552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22564_22584 = state_22552__$1;
(statearr_22564_22584[(1)] = (8));

} else {
var statearr_22565_22585 = state_22552__$1;
(statearr_22565_22585[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (14))){
var inst_22546 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
var statearr_22566_22586 = state_22552__$1;
(statearr_22566_22586[(2)] = inst_22546);

(statearr_22566_22586[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (10))){
var inst_22538 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
var statearr_22567_22587 = state_22552__$1;
(statearr_22567_22587[(2)] = inst_22538);

(statearr_22567_22587[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22553 === (8))){
var inst_22535 = cljs.core.async.close_BANG_(to);
var state_22552__$1 = state_22552;
var statearr_22568_22588 = state_22552__$1;
(statearr_22568_22588[(2)] = inst_22535);

(statearr_22568_22588[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___22574))
;
return ((function (switch__22339__auto__,c__22439__auto___22574){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_22569 = [null,null,null,null,null,null,null,null];
(statearr_22569[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_22569[(1)] = (1));

return statearr_22569;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_22552){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22552);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22570){if((e22570 instanceof Object)){
var ex__22343__auto__ = e22570;
var statearr_22571_22589 = state_22552;
(statearr_22571_22589[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22552);

return cljs.core.cst$kw$recur;
} else {
throw e22570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22590 = state_22552;
state_22552 = G__22590;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_22552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_22552);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___22574))
})();
var state__22441__auto__ = (function (){var statearr_22572 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22572[(6)] = c__22439__auto___22574);

return statearr_22572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___22574))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__22591){
var vec__22592 = p__22591;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22592,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22592,(1),null);
var job = vec__22592;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__22439__auto___22763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___22763,res,vec__22592,v,p,job,jobs,results){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___22763,res,vec__22592,v,p,job,jobs,results){
return (function (state_22599){
var state_val_22600 = (state_22599[(1)]);
if((state_val_22600 === (1))){
var state_22599__$1 = state_22599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22599__$1,(2),res,v);
} else {
if((state_val_22600 === (2))){
var inst_22596 = (state_22599[(2)]);
var inst_22597 = cljs.core.async.close_BANG_(res);
var state_22599__$1 = (function (){var statearr_22601 = state_22599;
(statearr_22601[(7)] = inst_22596);

return statearr_22601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22599__$1,inst_22597);
} else {
return null;
}
}
});})(c__22439__auto___22763,res,vec__22592,v,p,job,jobs,results))
;
return ((function (switch__22339__auto__,c__22439__auto___22763,res,vec__22592,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0 = (function (){
var statearr_22602 = [null,null,null,null,null,null,null,null];
(statearr_22602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__);

(statearr_22602[(1)] = (1));

return statearr_22602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1 = (function (state_22599){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22599);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22603){if((e22603 instanceof Object)){
var ex__22343__auto__ = e22603;
var statearr_22604_22764 = state_22599;
(statearr_22604_22764[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22599);

return cljs.core.cst$kw$recur;
} else {
throw e22603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22765 = state_22599;
state_22599 = G__22765;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = function(state_22599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1.call(this,state_22599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___22763,res,vec__22592,v,p,job,jobs,results))
})();
var state__22441__auto__ = (function (){var statearr_22605 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22605[(6)] = c__22439__auto___22763);

return statearr_22605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___22763,res,vec__22592,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22606){
var vec__22607 = p__22606;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22607,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22607,(1),null);
var job = vec__22607;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8615__auto___22766 = n;
var __22767 = (0);
while(true){
if((__22767 < n__8615__auto___22766)){
var G__22610_22768 = type;
var G__22610_22769__$1 = (((G__22610_22768 instanceof cljs.core.Keyword))?G__22610_22768.fqn:null);
switch (G__22610_22769__$1) {
case "compute":
var c__22439__auto___22771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22767,c__22439__auto___22771,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (__22767,c__22439__auto___22771,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async){
return (function (state_22623){
var state_val_22624 = (state_22623[(1)]);
if((state_val_22624 === (1))){
var state_22623__$1 = state_22623;
var statearr_22625_22772 = state_22623__$1;
(statearr_22625_22772[(2)] = null);

(statearr_22625_22772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22624 === (2))){
var state_22623__$1 = state_22623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22623__$1,(4),jobs);
} else {
if((state_val_22624 === (3))){
var inst_22621 = (state_22623[(2)]);
var state_22623__$1 = state_22623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22623__$1,inst_22621);
} else {
if((state_val_22624 === (4))){
var inst_22613 = (state_22623[(2)]);
var inst_22614 = process(inst_22613);
var state_22623__$1 = state_22623;
if(cljs.core.truth_(inst_22614)){
var statearr_22626_22773 = state_22623__$1;
(statearr_22626_22773[(1)] = (5));

} else {
var statearr_22627_22774 = state_22623__$1;
(statearr_22627_22774[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22624 === (5))){
var state_22623__$1 = state_22623;
var statearr_22628_22775 = state_22623__$1;
(statearr_22628_22775[(2)] = null);

(statearr_22628_22775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22624 === (6))){
var state_22623__$1 = state_22623;
var statearr_22629_22776 = state_22623__$1;
(statearr_22629_22776[(2)] = null);

(statearr_22629_22776[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22624 === (7))){
var inst_22619 = (state_22623[(2)]);
var state_22623__$1 = state_22623;
var statearr_22630_22777 = state_22623__$1;
(statearr_22630_22777[(2)] = inst_22619);

(statearr_22630_22777[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22767,c__22439__auto___22771,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async))
;
return ((function (__22767,switch__22339__auto__,c__22439__auto___22771,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0 = (function (){
var statearr_22631 = [null,null,null,null,null,null,null];
(statearr_22631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__);

(statearr_22631[(1)] = (1));

return statearr_22631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1 = (function (state_22623){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22623);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22632){if((e22632 instanceof Object)){
var ex__22343__auto__ = e22632;
var statearr_22633_22778 = state_22623;
(statearr_22633_22778[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22623);

return cljs.core.cst$kw$recur;
} else {
throw e22632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22779 = state_22623;
state_22623 = G__22779;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = function(state_22623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1.call(this,state_22623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__;
})()
;})(__22767,switch__22339__auto__,c__22439__auto___22771,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async))
})();
var state__22441__auto__ = (function (){var statearr_22634 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22634[(6)] = c__22439__auto___22771);

return statearr_22634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(__22767,c__22439__auto___22771,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async))
);


break;
case "async":
var c__22439__auto___22780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22767,c__22439__auto___22780,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (__22767,c__22439__auto___22780,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async){
return (function (state_22647){
var state_val_22648 = (state_22647[(1)]);
if((state_val_22648 === (1))){
var state_22647__$1 = state_22647;
var statearr_22649_22781 = state_22647__$1;
(statearr_22649_22781[(2)] = null);

(statearr_22649_22781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22648 === (2))){
var state_22647__$1 = state_22647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22647__$1,(4),jobs);
} else {
if((state_val_22648 === (3))){
var inst_22645 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22647__$1,inst_22645);
} else {
if((state_val_22648 === (4))){
var inst_22637 = (state_22647[(2)]);
var inst_22638 = async(inst_22637);
var state_22647__$1 = state_22647;
if(cljs.core.truth_(inst_22638)){
var statearr_22650_22782 = state_22647__$1;
(statearr_22650_22782[(1)] = (5));

} else {
var statearr_22651_22783 = state_22647__$1;
(statearr_22651_22783[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22648 === (5))){
var state_22647__$1 = state_22647;
var statearr_22652_22784 = state_22647__$1;
(statearr_22652_22784[(2)] = null);

(statearr_22652_22784[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22648 === (6))){
var state_22647__$1 = state_22647;
var statearr_22653_22785 = state_22647__$1;
(statearr_22653_22785[(2)] = null);

(statearr_22653_22785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22648 === (7))){
var inst_22643 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
var statearr_22654_22786 = state_22647__$1;
(statearr_22654_22786[(2)] = inst_22643);

(statearr_22654_22786[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22767,c__22439__auto___22780,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async))
;
return ((function (__22767,switch__22339__auto__,c__22439__auto___22780,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0 = (function (){
var statearr_22655 = [null,null,null,null,null,null,null];
(statearr_22655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__);

(statearr_22655[(1)] = (1));

return statearr_22655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1 = (function (state_22647){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22647);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22656){if((e22656 instanceof Object)){
var ex__22343__auto__ = e22656;
var statearr_22657_22787 = state_22647;
(statearr_22657_22787[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22647);

return cljs.core.cst$kw$recur;
} else {
throw e22656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22788 = state_22647;
state_22647 = G__22788;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = function(state_22647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1.call(this,state_22647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__;
})()
;})(__22767,switch__22339__auto__,c__22439__auto___22780,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async))
})();
var state__22441__auto__ = (function (){var statearr_22658 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22658[(6)] = c__22439__auto___22780);

return statearr_22658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(__22767,c__22439__auto___22780,G__22610_22768,G__22610_22769__$1,n__8615__auto___22766,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22610_22769__$1)].join('')));

}

var G__22789 = (__22767 + (1));
__22767 = G__22789;
continue;
} else {
}
break;
}

var c__22439__auto___22790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___22790,jobs,results,process,async){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___22790,jobs,results,process,async){
return (function (state_22680){
var state_val_22681 = (state_22680[(1)]);
if((state_val_22681 === (1))){
var state_22680__$1 = state_22680;
var statearr_22682_22791 = state_22680__$1;
(statearr_22682_22791[(2)] = null);

(statearr_22682_22791[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22681 === (2))){
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22680__$1,(4),from);
} else {
if((state_val_22681 === (3))){
var inst_22678 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22680__$1,inst_22678);
} else {
if((state_val_22681 === (4))){
var inst_22661 = (state_22680[(7)]);
var inst_22661__$1 = (state_22680[(2)]);
var inst_22662 = (inst_22661__$1 == null);
var state_22680__$1 = (function (){var statearr_22683 = state_22680;
(statearr_22683[(7)] = inst_22661__$1);

return statearr_22683;
})();
if(cljs.core.truth_(inst_22662)){
var statearr_22684_22792 = state_22680__$1;
(statearr_22684_22792[(1)] = (5));

} else {
var statearr_22685_22793 = state_22680__$1;
(statearr_22685_22793[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22681 === (5))){
var inst_22664 = cljs.core.async.close_BANG_(jobs);
var state_22680__$1 = state_22680;
var statearr_22686_22794 = state_22680__$1;
(statearr_22686_22794[(2)] = inst_22664);

(statearr_22686_22794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22681 === (6))){
var inst_22661 = (state_22680[(7)]);
var inst_22666 = (state_22680[(8)]);
var inst_22666__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22667 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22668 = [inst_22661,inst_22666__$1];
var inst_22669 = (new cljs.core.PersistentVector(null,2,(5),inst_22667,inst_22668,null));
var state_22680__$1 = (function (){var statearr_22687 = state_22680;
(statearr_22687[(8)] = inst_22666__$1);

return statearr_22687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22680__$1,(8),jobs,inst_22669);
} else {
if((state_val_22681 === (7))){
var inst_22676 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22688_22795 = state_22680__$1;
(statearr_22688_22795[(2)] = inst_22676);

(statearr_22688_22795[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22681 === (8))){
var inst_22666 = (state_22680[(8)]);
var inst_22671 = (state_22680[(2)]);
var state_22680__$1 = (function (){var statearr_22689 = state_22680;
(statearr_22689[(9)] = inst_22671);

return statearr_22689;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22680__$1,(9),results,inst_22666);
} else {
if((state_val_22681 === (9))){
var inst_22673 = (state_22680[(2)]);
var state_22680__$1 = (function (){var statearr_22690 = state_22680;
(statearr_22690[(10)] = inst_22673);

return statearr_22690;
})();
var statearr_22691_22796 = state_22680__$1;
(statearr_22691_22796[(2)] = null);

(statearr_22691_22796[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___22790,jobs,results,process,async))
;
return ((function (switch__22339__auto__,c__22439__auto___22790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0 = (function (){
var statearr_22692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__);

(statearr_22692[(1)] = (1));

return statearr_22692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1 = (function (state_22680){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22680);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22693){if((e22693 instanceof Object)){
var ex__22343__auto__ = e22693;
var statearr_22694_22797 = state_22680;
(statearr_22694_22797[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22680);

return cljs.core.cst$kw$recur;
} else {
throw e22693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22798 = state_22680;
state_22680 = G__22798;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = function(state_22680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1.call(this,state_22680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___22790,jobs,results,process,async))
})();
var state__22441__auto__ = (function (){var statearr_22695 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22695[(6)] = c__22439__auto___22790);

return statearr_22695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___22790,jobs,results,process,async))
);


var c__22439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto__,jobs,results,process,async){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto__,jobs,results,process,async){
return (function (state_22733){
var state_val_22734 = (state_22733[(1)]);
if((state_val_22734 === (7))){
var inst_22729 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22735_22799 = state_22733__$1;
(statearr_22735_22799[(2)] = inst_22729);

(statearr_22735_22799[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (20))){
var state_22733__$1 = state_22733;
var statearr_22736_22800 = state_22733__$1;
(statearr_22736_22800[(2)] = null);

(statearr_22736_22800[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (1))){
var state_22733__$1 = state_22733;
var statearr_22737_22801 = state_22733__$1;
(statearr_22737_22801[(2)] = null);

(statearr_22737_22801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (4))){
var inst_22698 = (state_22733[(7)]);
var inst_22698__$1 = (state_22733[(2)]);
var inst_22699 = (inst_22698__$1 == null);
var state_22733__$1 = (function (){var statearr_22738 = state_22733;
(statearr_22738[(7)] = inst_22698__$1);

return statearr_22738;
})();
if(cljs.core.truth_(inst_22699)){
var statearr_22739_22802 = state_22733__$1;
(statearr_22739_22802[(1)] = (5));

} else {
var statearr_22740_22803 = state_22733__$1;
(statearr_22740_22803[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (15))){
var inst_22711 = (state_22733[(8)]);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22733__$1,(18),to,inst_22711);
} else {
if((state_val_22734 === (21))){
var inst_22724 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22741_22804 = state_22733__$1;
(statearr_22741_22804[(2)] = inst_22724);

(statearr_22741_22804[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (13))){
var inst_22726 = (state_22733[(2)]);
var state_22733__$1 = (function (){var statearr_22742 = state_22733;
(statearr_22742[(9)] = inst_22726);

return statearr_22742;
})();
var statearr_22743_22805 = state_22733__$1;
(statearr_22743_22805[(2)] = null);

(statearr_22743_22805[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (6))){
var inst_22698 = (state_22733[(7)]);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22733__$1,(11),inst_22698);
} else {
if((state_val_22734 === (17))){
var inst_22719 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
if(cljs.core.truth_(inst_22719)){
var statearr_22744_22806 = state_22733__$1;
(statearr_22744_22806[(1)] = (19));

} else {
var statearr_22745_22807 = state_22733__$1;
(statearr_22745_22807[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (3))){
var inst_22731 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22733__$1,inst_22731);
} else {
if((state_val_22734 === (12))){
var inst_22708 = (state_22733[(10)]);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22733__$1,(14),inst_22708);
} else {
if((state_val_22734 === (2))){
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22733__$1,(4),results);
} else {
if((state_val_22734 === (19))){
var state_22733__$1 = state_22733;
var statearr_22746_22808 = state_22733__$1;
(statearr_22746_22808[(2)] = null);

(statearr_22746_22808[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (11))){
var inst_22708 = (state_22733[(2)]);
var state_22733__$1 = (function (){var statearr_22747 = state_22733;
(statearr_22747[(10)] = inst_22708);

return statearr_22747;
})();
var statearr_22748_22809 = state_22733__$1;
(statearr_22748_22809[(2)] = null);

(statearr_22748_22809[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (9))){
var state_22733__$1 = state_22733;
var statearr_22749_22810 = state_22733__$1;
(statearr_22749_22810[(2)] = null);

(statearr_22749_22810[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (5))){
var state_22733__$1 = state_22733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22750_22811 = state_22733__$1;
(statearr_22750_22811[(1)] = (8));

} else {
var statearr_22751_22812 = state_22733__$1;
(statearr_22751_22812[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (14))){
var inst_22711 = (state_22733[(8)]);
var inst_22713 = (state_22733[(11)]);
var inst_22711__$1 = (state_22733[(2)]);
var inst_22712 = (inst_22711__$1 == null);
var inst_22713__$1 = cljs.core.not(inst_22712);
var state_22733__$1 = (function (){var statearr_22752 = state_22733;
(statearr_22752[(8)] = inst_22711__$1);

(statearr_22752[(11)] = inst_22713__$1);

return statearr_22752;
})();
if(inst_22713__$1){
var statearr_22753_22813 = state_22733__$1;
(statearr_22753_22813[(1)] = (15));

} else {
var statearr_22754_22814 = state_22733__$1;
(statearr_22754_22814[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (16))){
var inst_22713 = (state_22733[(11)]);
var state_22733__$1 = state_22733;
var statearr_22755_22815 = state_22733__$1;
(statearr_22755_22815[(2)] = inst_22713);

(statearr_22755_22815[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (10))){
var inst_22705 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22756_22816 = state_22733__$1;
(statearr_22756_22816[(2)] = inst_22705);

(statearr_22756_22816[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (18))){
var inst_22716 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22757_22817 = state_22733__$1;
(statearr_22757_22817[(2)] = inst_22716);

(statearr_22757_22817[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22734 === (8))){
var inst_22702 = cljs.core.async.close_BANG_(to);
var state_22733__$1 = state_22733;
var statearr_22758_22818 = state_22733__$1;
(statearr_22758_22818[(2)] = inst_22702);

(statearr_22758_22818[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto__,jobs,results,process,async))
;
return ((function (switch__22339__auto__,c__22439__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0 = (function (){
var statearr_22759 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__);

(statearr_22759[(1)] = (1));

return statearr_22759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1 = (function (state_22733){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22733);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22760){if((e22760 instanceof Object)){
var ex__22343__auto__ = e22760;
var statearr_22761_22819 = state_22733;
(statearr_22761_22819[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22733);

return cljs.core.cst$kw$recur;
} else {
throw e22760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22820 = state_22733;
state_22733 = G__22820;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__ = function(state_22733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1.call(this,state_22733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto__,jobs,results,process,async))
})();
var state__22441__auto__ = (function (){var statearr_22762 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22762[(6)] = c__22439__auto__);

return statearr_22762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto__,jobs,results,process,async))
);

return c__22439__auto__;
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
var G__22822 = arguments.length;
switch (G__22822) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__22825 = arguments.length;
switch (G__22825) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__22828 = arguments.length;
switch (G__22828) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__22439__auto___22877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___22877,tc,fc){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___22877,tc,fc){
return (function (state_22854){
var state_val_22855 = (state_22854[(1)]);
if((state_val_22855 === (7))){
var inst_22850 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
var statearr_22856_22878 = state_22854__$1;
(statearr_22856_22878[(2)] = inst_22850);

(statearr_22856_22878[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (1))){
var state_22854__$1 = state_22854;
var statearr_22857_22879 = state_22854__$1;
(statearr_22857_22879[(2)] = null);

(statearr_22857_22879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (4))){
var inst_22831 = (state_22854[(7)]);
var inst_22831__$1 = (state_22854[(2)]);
var inst_22832 = (inst_22831__$1 == null);
var state_22854__$1 = (function (){var statearr_22858 = state_22854;
(statearr_22858[(7)] = inst_22831__$1);

return statearr_22858;
})();
if(cljs.core.truth_(inst_22832)){
var statearr_22859_22880 = state_22854__$1;
(statearr_22859_22880[(1)] = (5));

} else {
var statearr_22860_22881 = state_22854__$1;
(statearr_22860_22881[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (13))){
var state_22854__$1 = state_22854;
var statearr_22861_22882 = state_22854__$1;
(statearr_22861_22882[(2)] = null);

(statearr_22861_22882[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (6))){
var inst_22831 = (state_22854[(7)]);
var inst_22837 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22831) : p.call(null,inst_22831));
var state_22854__$1 = state_22854;
if(cljs.core.truth_(inst_22837)){
var statearr_22862_22883 = state_22854__$1;
(statearr_22862_22883[(1)] = (9));

} else {
var statearr_22863_22884 = state_22854__$1;
(statearr_22863_22884[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (3))){
var inst_22852 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22854__$1,inst_22852);
} else {
if((state_val_22855 === (12))){
var state_22854__$1 = state_22854;
var statearr_22864_22885 = state_22854__$1;
(statearr_22864_22885[(2)] = null);

(statearr_22864_22885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (2))){
var state_22854__$1 = state_22854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22854__$1,(4),ch);
} else {
if((state_val_22855 === (11))){
var inst_22831 = (state_22854[(7)]);
var inst_22841 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22854__$1,(8),inst_22841,inst_22831);
} else {
if((state_val_22855 === (9))){
var state_22854__$1 = state_22854;
var statearr_22865_22886 = state_22854__$1;
(statearr_22865_22886[(2)] = tc);

(statearr_22865_22886[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (5))){
var inst_22834 = cljs.core.async.close_BANG_(tc);
var inst_22835 = cljs.core.async.close_BANG_(fc);
var state_22854__$1 = (function (){var statearr_22866 = state_22854;
(statearr_22866[(8)] = inst_22834);

return statearr_22866;
})();
var statearr_22867_22887 = state_22854__$1;
(statearr_22867_22887[(2)] = inst_22835);

(statearr_22867_22887[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (14))){
var inst_22848 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
var statearr_22868_22888 = state_22854__$1;
(statearr_22868_22888[(2)] = inst_22848);

(statearr_22868_22888[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (10))){
var state_22854__$1 = state_22854;
var statearr_22869_22889 = state_22854__$1;
(statearr_22869_22889[(2)] = fc);

(statearr_22869_22889[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22855 === (8))){
var inst_22843 = (state_22854[(2)]);
var state_22854__$1 = state_22854;
if(cljs.core.truth_(inst_22843)){
var statearr_22870_22890 = state_22854__$1;
(statearr_22870_22890[(1)] = (12));

} else {
var statearr_22871_22891 = state_22854__$1;
(statearr_22871_22891[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___22877,tc,fc))
;
return ((function (switch__22339__auto__,c__22439__auto___22877,tc,fc){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_22872 = [null,null,null,null,null,null,null,null,null];
(statearr_22872[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_22872[(1)] = (1));

return statearr_22872;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_22854){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22854);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22873){if((e22873 instanceof Object)){
var ex__22343__auto__ = e22873;
var statearr_22874_22892 = state_22854;
(statearr_22874_22892[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22854);

return cljs.core.cst$kw$recur;
} else {
throw e22873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22893 = state_22854;
state_22854 = G__22893;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_22854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_22854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___22877,tc,fc))
})();
var state__22441__auto__ = (function (){var statearr_22875 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22875[(6)] = c__22439__auto___22877);

return statearr_22875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___22877,tc,fc))
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
var c__22439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto__){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto__){
return (function (state_22914){
var state_val_22915 = (state_22914[(1)]);
if((state_val_22915 === (7))){
var inst_22910 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22916_22934 = state_22914__$1;
(statearr_22916_22934[(2)] = inst_22910);

(statearr_22916_22934[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22915 === (1))){
var inst_22894 = init;
var state_22914__$1 = (function (){var statearr_22917 = state_22914;
(statearr_22917[(7)] = inst_22894);

return statearr_22917;
})();
var statearr_22918_22935 = state_22914__$1;
(statearr_22918_22935[(2)] = null);

(statearr_22918_22935[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22915 === (4))){
var inst_22897 = (state_22914[(8)]);
var inst_22897__$1 = (state_22914[(2)]);
var inst_22898 = (inst_22897__$1 == null);
var state_22914__$1 = (function (){var statearr_22919 = state_22914;
(statearr_22919[(8)] = inst_22897__$1);

return statearr_22919;
})();
if(cljs.core.truth_(inst_22898)){
var statearr_22920_22936 = state_22914__$1;
(statearr_22920_22936[(1)] = (5));

} else {
var statearr_22921_22937 = state_22914__$1;
(statearr_22921_22937[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22915 === (6))){
var inst_22901 = (state_22914[(9)]);
var inst_22897 = (state_22914[(8)]);
var inst_22894 = (state_22914[(7)]);
var inst_22901__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22894,inst_22897) : f.call(null,inst_22894,inst_22897));
var inst_22902 = cljs.core.reduced_QMARK_(inst_22901__$1);
var state_22914__$1 = (function (){var statearr_22922 = state_22914;
(statearr_22922[(9)] = inst_22901__$1);

return statearr_22922;
})();
if(inst_22902){
var statearr_22923_22938 = state_22914__$1;
(statearr_22923_22938[(1)] = (8));

} else {
var statearr_22924_22939 = state_22914__$1;
(statearr_22924_22939[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22915 === (3))){
var inst_22912 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22914__$1,inst_22912);
} else {
if((state_val_22915 === (2))){
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22914__$1,(4),ch);
} else {
if((state_val_22915 === (9))){
var inst_22901 = (state_22914[(9)]);
var inst_22894 = inst_22901;
var state_22914__$1 = (function (){var statearr_22925 = state_22914;
(statearr_22925[(7)] = inst_22894);

return statearr_22925;
})();
var statearr_22926_22940 = state_22914__$1;
(statearr_22926_22940[(2)] = null);

(statearr_22926_22940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22915 === (5))){
var inst_22894 = (state_22914[(7)]);
var state_22914__$1 = state_22914;
var statearr_22927_22941 = state_22914__$1;
(statearr_22927_22941[(2)] = inst_22894);

(statearr_22927_22941[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22915 === (10))){
var inst_22908 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22928_22942 = state_22914__$1;
(statearr_22928_22942[(2)] = inst_22908);

(statearr_22928_22942[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22915 === (8))){
var inst_22901 = (state_22914[(9)]);
var inst_22904 = cljs.core.deref(inst_22901);
var state_22914__$1 = state_22914;
var statearr_22929_22943 = state_22914__$1;
(statearr_22929_22943[(2)] = inst_22904);

(statearr_22929_22943[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto__))
;
return ((function (switch__22339__auto__,c__22439__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22340__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22340__auto____0 = (function (){
var statearr_22930 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22930[(0)] = cljs$core$async$reduce_$_state_machine__22340__auto__);

(statearr_22930[(1)] = (1));

return statearr_22930;
});
var cljs$core$async$reduce_$_state_machine__22340__auto____1 = (function (state_22914){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22914);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22931){if((e22931 instanceof Object)){
var ex__22343__auto__ = e22931;
var statearr_22932_22944 = state_22914;
(statearr_22932_22944[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22914);

return cljs.core.cst$kw$recur;
} else {
throw e22931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22945 = state_22914;
state_22914 = G__22945;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22340__auto__ = function(state_22914){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22340__auto____1.call(this,state_22914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22340__auto____0;
cljs$core$async$reduce_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22340__auto____1;
return cljs$core$async$reduce_$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto__))
})();
var state__22441__auto__ = (function (){var statearr_22933 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22933[(6)] = c__22439__auto__);

return statearr_22933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto__))
);

return c__22439__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__22439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto__,f__$1){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto__,f__$1){
return (function (state_22951){
var state_val_22952 = (state_22951[(1)]);
if((state_val_22952 === (1))){
var inst_22946 = cljs.core.async.reduce(f__$1,init,ch);
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22951__$1,(2),inst_22946);
} else {
if((state_val_22952 === (2))){
var inst_22948 = (state_22951[(2)]);
var inst_22949 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_22948) : f__$1.call(null,inst_22948));
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22951__$1,inst_22949);
} else {
return null;
}
}
});})(c__22439__auto__,f__$1))
;
return ((function (switch__22339__auto__,c__22439__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22340__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22340__auto____0 = (function (){
var statearr_22953 = [null,null,null,null,null,null,null];
(statearr_22953[(0)] = cljs$core$async$transduce_$_state_machine__22340__auto__);

(statearr_22953[(1)] = (1));

return statearr_22953;
});
var cljs$core$async$transduce_$_state_machine__22340__auto____1 = (function (state_22951){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22951);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e22954){if((e22954 instanceof Object)){
var ex__22343__auto__ = e22954;
var statearr_22955_22957 = state_22951;
(statearr_22955_22957[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22951);

return cljs.core.cst$kw$recur;
} else {
throw e22954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__22958 = state_22951;
state_22951 = G__22958;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22340__auto__ = function(state_22951){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22340__auto____1.call(this,state_22951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22340__auto____0;
cljs$core$async$transduce_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22340__auto____1;
return cljs$core$async$transduce_$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto__,f__$1))
})();
var state__22441__auto__ = (function (){var statearr_22956 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_22956[(6)] = c__22439__auto__);

return statearr_22956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto__,f__$1))
);

return c__22439__auto__;
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
var G__22960 = arguments.length;
switch (G__22960) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto__){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto__){
return (function (state_22985){
var state_val_22986 = (state_22985[(1)]);
if((state_val_22986 === (7))){
var inst_22967 = (state_22985[(2)]);
var state_22985__$1 = state_22985;
var statearr_22987_23008 = state_22985__$1;
(statearr_22987_23008[(2)] = inst_22967);

(statearr_22987_23008[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (1))){
var inst_22961 = cljs.core.seq(coll);
var inst_22962 = inst_22961;
var state_22985__$1 = (function (){var statearr_22988 = state_22985;
(statearr_22988[(7)] = inst_22962);

return statearr_22988;
})();
var statearr_22989_23009 = state_22985__$1;
(statearr_22989_23009[(2)] = null);

(statearr_22989_23009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (4))){
var inst_22962 = (state_22985[(7)]);
var inst_22965 = cljs.core.first(inst_22962);
var state_22985__$1 = state_22985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22985__$1,(7),ch,inst_22965);
} else {
if((state_val_22986 === (13))){
var inst_22979 = (state_22985[(2)]);
var state_22985__$1 = state_22985;
var statearr_22990_23010 = state_22985__$1;
(statearr_22990_23010[(2)] = inst_22979);

(statearr_22990_23010[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (6))){
var inst_22970 = (state_22985[(2)]);
var state_22985__$1 = state_22985;
if(cljs.core.truth_(inst_22970)){
var statearr_22991_23011 = state_22985__$1;
(statearr_22991_23011[(1)] = (8));

} else {
var statearr_22992_23012 = state_22985__$1;
(statearr_22992_23012[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (3))){
var inst_22983 = (state_22985[(2)]);
var state_22985__$1 = state_22985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22985__$1,inst_22983);
} else {
if((state_val_22986 === (12))){
var state_22985__$1 = state_22985;
var statearr_22993_23013 = state_22985__$1;
(statearr_22993_23013[(2)] = null);

(statearr_22993_23013[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (2))){
var inst_22962 = (state_22985[(7)]);
var state_22985__$1 = state_22985;
if(cljs.core.truth_(inst_22962)){
var statearr_22994_23014 = state_22985__$1;
(statearr_22994_23014[(1)] = (4));

} else {
var statearr_22995_23015 = state_22985__$1;
(statearr_22995_23015[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (11))){
var inst_22976 = cljs.core.async.close_BANG_(ch);
var state_22985__$1 = state_22985;
var statearr_22996_23016 = state_22985__$1;
(statearr_22996_23016[(2)] = inst_22976);

(statearr_22996_23016[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (9))){
var state_22985__$1 = state_22985;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22997_23017 = state_22985__$1;
(statearr_22997_23017[(1)] = (11));

} else {
var statearr_22998_23018 = state_22985__$1;
(statearr_22998_23018[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (5))){
var inst_22962 = (state_22985[(7)]);
var state_22985__$1 = state_22985;
var statearr_22999_23019 = state_22985__$1;
(statearr_22999_23019[(2)] = inst_22962);

(statearr_22999_23019[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (10))){
var inst_22981 = (state_22985[(2)]);
var state_22985__$1 = state_22985;
var statearr_23000_23020 = state_22985__$1;
(statearr_23000_23020[(2)] = inst_22981);

(statearr_23000_23020[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22986 === (8))){
var inst_22962 = (state_22985[(7)]);
var inst_22972 = cljs.core.next(inst_22962);
var inst_22962__$1 = inst_22972;
var state_22985__$1 = (function (){var statearr_23001 = state_22985;
(statearr_23001[(7)] = inst_22962__$1);

return statearr_23001;
})();
var statearr_23002_23021 = state_22985__$1;
(statearr_23002_23021[(2)] = null);

(statearr_23002_23021[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto__))
;
return ((function (switch__22339__auto__,c__22439__auto__){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_23003 = [null,null,null,null,null,null,null,null];
(statearr_23003[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_23003[(1)] = (1));

return statearr_23003;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_22985){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_22985);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e23004){if((e23004 instanceof Object)){
var ex__22343__auto__ = e23004;
var statearr_23005_23022 = state_22985;
(statearr_23005_23022[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22985);

return cljs.core.cst$kw$recur;
} else {
throw e23004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__23023 = state_22985;
state_22985 = G__23023;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_22985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_22985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto__))
})();
var state__22441__auto__ = (function (){var statearr_23006 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_23006[(6)] = c__22439__auto__);

return statearr_23006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto__))
);

return c__22439__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__8351__auto__ = (((_ == null))?null:_);
var m__8352__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8352__auto__.call(null,_));
} else {
var m__8352__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8352__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8352__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8352__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8352__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto__.call(null,m));
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23024 = (function (ch,cs,meta23025){
this.ch = ch;
this.cs = cs;
this.meta23025 = meta23025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23026,meta23025__$1){
var self__ = this;
var _23026__$1 = this;
return (new cljs.core.async.t_cljs$core$async23024(self__.ch,self__.cs,meta23025__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23026){
var self__ = this;
var _23026__$1 = this;
return self__.meta23025;
});})(cs))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23024.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta23025], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23024";

cljs.core.async.t_cljs$core$async23024.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async23024");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23024 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23024(ch__$1,cs__$1,meta23025){
return (new cljs.core.async.t_cljs$core$async23024(ch__$1,cs__$1,meta23025));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23024(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22439__auto___23246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___23246,cs,m,dchan,dctr,done){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___23246,cs,m,dchan,dctr,done){
return (function (state_23161){
var state_val_23162 = (state_23161[(1)]);
if((state_val_23162 === (7))){
var inst_23157 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23163_23247 = state_23161__$1;
(statearr_23163_23247[(2)] = inst_23157);

(statearr_23163_23247[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (20))){
var inst_23060 = (state_23161[(7)]);
var inst_23072 = cljs.core.first(inst_23060);
var inst_23073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23072,(0),null);
var inst_23074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23072,(1),null);
var state_23161__$1 = (function (){var statearr_23164 = state_23161;
(statearr_23164[(8)] = inst_23073);

return statearr_23164;
})();
if(cljs.core.truth_(inst_23074)){
var statearr_23165_23248 = state_23161__$1;
(statearr_23165_23248[(1)] = (22));

} else {
var statearr_23166_23249 = state_23161__$1;
(statearr_23166_23249[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (27))){
var inst_23029 = (state_23161[(9)]);
var inst_23104 = (state_23161[(10)]);
var inst_23102 = (state_23161[(11)]);
var inst_23109 = (state_23161[(12)]);
var inst_23109__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23102,inst_23104);
var inst_23110 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23109__$1,inst_23029,done);
var state_23161__$1 = (function (){var statearr_23167 = state_23161;
(statearr_23167[(12)] = inst_23109__$1);

return statearr_23167;
})();
if(cljs.core.truth_(inst_23110)){
var statearr_23168_23250 = state_23161__$1;
(statearr_23168_23250[(1)] = (30));

} else {
var statearr_23169_23251 = state_23161__$1;
(statearr_23169_23251[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (1))){
var state_23161__$1 = state_23161;
var statearr_23170_23252 = state_23161__$1;
(statearr_23170_23252[(2)] = null);

(statearr_23170_23252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (24))){
var inst_23060 = (state_23161[(7)]);
var inst_23079 = (state_23161[(2)]);
var inst_23080 = cljs.core.next(inst_23060);
var inst_23038 = inst_23080;
var inst_23039 = null;
var inst_23040 = (0);
var inst_23041 = (0);
var state_23161__$1 = (function (){var statearr_23171 = state_23161;
(statearr_23171[(13)] = inst_23040);

(statearr_23171[(14)] = inst_23041);

(statearr_23171[(15)] = inst_23038);

(statearr_23171[(16)] = inst_23079);

(statearr_23171[(17)] = inst_23039);

return statearr_23171;
})();
var statearr_23172_23253 = state_23161__$1;
(statearr_23172_23253[(2)] = null);

(statearr_23172_23253[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (39))){
var state_23161__$1 = state_23161;
var statearr_23176_23254 = state_23161__$1;
(statearr_23176_23254[(2)] = null);

(statearr_23176_23254[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (4))){
var inst_23029 = (state_23161[(9)]);
var inst_23029__$1 = (state_23161[(2)]);
var inst_23030 = (inst_23029__$1 == null);
var state_23161__$1 = (function (){var statearr_23177 = state_23161;
(statearr_23177[(9)] = inst_23029__$1);

return statearr_23177;
})();
if(cljs.core.truth_(inst_23030)){
var statearr_23178_23255 = state_23161__$1;
(statearr_23178_23255[(1)] = (5));

} else {
var statearr_23179_23256 = state_23161__$1;
(statearr_23179_23256[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (15))){
var inst_23040 = (state_23161[(13)]);
var inst_23041 = (state_23161[(14)]);
var inst_23038 = (state_23161[(15)]);
var inst_23039 = (state_23161[(17)]);
var inst_23056 = (state_23161[(2)]);
var inst_23057 = (inst_23041 + (1));
var tmp23173 = inst_23040;
var tmp23174 = inst_23038;
var tmp23175 = inst_23039;
var inst_23038__$1 = tmp23174;
var inst_23039__$1 = tmp23175;
var inst_23040__$1 = tmp23173;
var inst_23041__$1 = inst_23057;
var state_23161__$1 = (function (){var statearr_23180 = state_23161;
(statearr_23180[(13)] = inst_23040__$1);

(statearr_23180[(14)] = inst_23041__$1);

(statearr_23180[(18)] = inst_23056);

(statearr_23180[(15)] = inst_23038__$1);

(statearr_23180[(17)] = inst_23039__$1);

return statearr_23180;
})();
var statearr_23181_23257 = state_23161__$1;
(statearr_23181_23257[(2)] = null);

(statearr_23181_23257[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (21))){
var inst_23083 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23185_23258 = state_23161__$1;
(statearr_23185_23258[(2)] = inst_23083);

(statearr_23185_23258[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (31))){
var inst_23109 = (state_23161[(12)]);
var inst_23113 = done(null);
var inst_23114 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23109);
var state_23161__$1 = (function (){var statearr_23186 = state_23161;
(statearr_23186[(19)] = inst_23113);

return statearr_23186;
})();
var statearr_23187_23259 = state_23161__$1;
(statearr_23187_23259[(2)] = inst_23114);

(statearr_23187_23259[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (32))){
var inst_23104 = (state_23161[(10)]);
var inst_23102 = (state_23161[(11)]);
var inst_23101 = (state_23161[(20)]);
var inst_23103 = (state_23161[(21)]);
var inst_23116 = (state_23161[(2)]);
var inst_23117 = (inst_23104 + (1));
var tmp23182 = inst_23102;
var tmp23183 = inst_23101;
var tmp23184 = inst_23103;
var inst_23101__$1 = tmp23183;
var inst_23102__$1 = tmp23182;
var inst_23103__$1 = tmp23184;
var inst_23104__$1 = inst_23117;
var state_23161__$1 = (function (){var statearr_23188 = state_23161;
(statearr_23188[(10)] = inst_23104__$1);

(statearr_23188[(11)] = inst_23102__$1);

(statearr_23188[(22)] = inst_23116);

(statearr_23188[(20)] = inst_23101__$1);

(statearr_23188[(21)] = inst_23103__$1);

return statearr_23188;
})();
var statearr_23189_23260 = state_23161__$1;
(statearr_23189_23260[(2)] = null);

(statearr_23189_23260[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (40))){
var inst_23129 = (state_23161[(23)]);
var inst_23133 = done(null);
var inst_23134 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23129);
var state_23161__$1 = (function (){var statearr_23190 = state_23161;
(statearr_23190[(24)] = inst_23133);

return statearr_23190;
})();
var statearr_23191_23261 = state_23161__$1;
(statearr_23191_23261[(2)] = inst_23134);

(statearr_23191_23261[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (33))){
var inst_23120 = (state_23161[(25)]);
var inst_23122 = cljs.core.chunked_seq_QMARK_(inst_23120);
var state_23161__$1 = state_23161;
if(inst_23122){
var statearr_23192_23262 = state_23161__$1;
(statearr_23192_23262[(1)] = (36));

} else {
var statearr_23193_23263 = state_23161__$1;
(statearr_23193_23263[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (13))){
var inst_23050 = (state_23161[(26)]);
var inst_23053 = cljs.core.async.close_BANG_(inst_23050);
var state_23161__$1 = state_23161;
var statearr_23194_23264 = state_23161__$1;
(statearr_23194_23264[(2)] = inst_23053);

(statearr_23194_23264[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (22))){
var inst_23073 = (state_23161[(8)]);
var inst_23076 = cljs.core.async.close_BANG_(inst_23073);
var state_23161__$1 = state_23161;
var statearr_23195_23265 = state_23161__$1;
(statearr_23195_23265[(2)] = inst_23076);

(statearr_23195_23265[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (36))){
var inst_23120 = (state_23161[(25)]);
var inst_23124 = cljs.core.chunk_first(inst_23120);
var inst_23125 = cljs.core.chunk_rest(inst_23120);
var inst_23126 = cljs.core.count(inst_23124);
var inst_23101 = inst_23125;
var inst_23102 = inst_23124;
var inst_23103 = inst_23126;
var inst_23104 = (0);
var state_23161__$1 = (function (){var statearr_23196 = state_23161;
(statearr_23196[(10)] = inst_23104);

(statearr_23196[(11)] = inst_23102);

(statearr_23196[(20)] = inst_23101);

(statearr_23196[(21)] = inst_23103);

return statearr_23196;
})();
var statearr_23197_23266 = state_23161__$1;
(statearr_23197_23266[(2)] = null);

(statearr_23197_23266[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (41))){
var inst_23120 = (state_23161[(25)]);
var inst_23136 = (state_23161[(2)]);
var inst_23137 = cljs.core.next(inst_23120);
var inst_23101 = inst_23137;
var inst_23102 = null;
var inst_23103 = (0);
var inst_23104 = (0);
var state_23161__$1 = (function (){var statearr_23198 = state_23161;
(statearr_23198[(10)] = inst_23104);

(statearr_23198[(11)] = inst_23102);

(statearr_23198[(27)] = inst_23136);

(statearr_23198[(20)] = inst_23101);

(statearr_23198[(21)] = inst_23103);

return statearr_23198;
})();
var statearr_23199_23267 = state_23161__$1;
(statearr_23199_23267[(2)] = null);

(statearr_23199_23267[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (43))){
var state_23161__$1 = state_23161;
var statearr_23200_23268 = state_23161__$1;
(statearr_23200_23268[(2)] = null);

(statearr_23200_23268[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (29))){
var inst_23145 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23201_23269 = state_23161__$1;
(statearr_23201_23269[(2)] = inst_23145);

(statearr_23201_23269[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (44))){
var inst_23154 = (state_23161[(2)]);
var state_23161__$1 = (function (){var statearr_23202 = state_23161;
(statearr_23202[(28)] = inst_23154);

return statearr_23202;
})();
var statearr_23203_23270 = state_23161__$1;
(statearr_23203_23270[(2)] = null);

(statearr_23203_23270[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (6))){
var inst_23093 = (state_23161[(29)]);
var inst_23092 = cljs.core.deref(cs);
var inst_23093__$1 = cljs.core.keys(inst_23092);
var inst_23094 = cljs.core.count(inst_23093__$1);
var inst_23095 = cljs.core.reset_BANG_(dctr,inst_23094);
var inst_23100 = cljs.core.seq(inst_23093__$1);
var inst_23101 = inst_23100;
var inst_23102 = null;
var inst_23103 = (0);
var inst_23104 = (0);
var state_23161__$1 = (function (){var statearr_23204 = state_23161;
(statearr_23204[(10)] = inst_23104);

(statearr_23204[(11)] = inst_23102);

(statearr_23204[(29)] = inst_23093__$1);

(statearr_23204[(30)] = inst_23095);

(statearr_23204[(20)] = inst_23101);

(statearr_23204[(21)] = inst_23103);

return statearr_23204;
})();
var statearr_23205_23271 = state_23161__$1;
(statearr_23205_23271[(2)] = null);

(statearr_23205_23271[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (28))){
var inst_23120 = (state_23161[(25)]);
var inst_23101 = (state_23161[(20)]);
var inst_23120__$1 = cljs.core.seq(inst_23101);
var state_23161__$1 = (function (){var statearr_23206 = state_23161;
(statearr_23206[(25)] = inst_23120__$1);

return statearr_23206;
})();
if(inst_23120__$1){
var statearr_23207_23272 = state_23161__$1;
(statearr_23207_23272[(1)] = (33));

} else {
var statearr_23208_23273 = state_23161__$1;
(statearr_23208_23273[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (25))){
var inst_23104 = (state_23161[(10)]);
var inst_23103 = (state_23161[(21)]);
var inst_23106 = (inst_23104 < inst_23103);
var inst_23107 = inst_23106;
var state_23161__$1 = state_23161;
if(cljs.core.truth_(inst_23107)){
var statearr_23209_23274 = state_23161__$1;
(statearr_23209_23274[(1)] = (27));

} else {
var statearr_23210_23275 = state_23161__$1;
(statearr_23210_23275[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (34))){
var state_23161__$1 = state_23161;
var statearr_23211_23276 = state_23161__$1;
(statearr_23211_23276[(2)] = null);

(statearr_23211_23276[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (17))){
var state_23161__$1 = state_23161;
var statearr_23212_23277 = state_23161__$1;
(statearr_23212_23277[(2)] = null);

(statearr_23212_23277[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (3))){
var inst_23159 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23161__$1,inst_23159);
} else {
if((state_val_23162 === (12))){
var inst_23088 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23213_23278 = state_23161__$1;
(statearr_23213_23278[(2)] = inst_23088);

(statearr_23213_23278[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (2))){
var state_23161__$1 = state_23161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23161__$1,(4),ch);
} else {
if((state_val_23162 === (23))){
var state_23161__$1 = state_23161;
var statearr_23214_23279 = state_23161__$1;
(statearr_23214_23279[(2)] = null);

(statearr_23214_23279[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (35))){
var inst_23143 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23215_23280 = state_23161__$1;
(statearr_23215_23280[(2)] = inst_23143);

(statearr_23215_23280[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (19))){
var inst_23060 = (state_23161[(7)]);
var inst_23064 = cljs.core.chunk_first(inst_23060);
var inst_23065 = cljs.core.chunk_rest(inst_23060);
var inst_23066 = cljs.core.count(inst_23064);
var inst_23038 = inst_23065;
var inst_23039 = inst_23064;
var inst_23040 = inst_23066;
var inst_23041 = (0);
var state_23161__$1 = (function (){var statearr_23216 = state_23161;
(statearr_23216[(13)] = inst_23040);

(statearr_23216[(14)] = inst_23041);

(statearr_23216[(15)] = inst_23038);

(statearr_23216[(17)] = inst_23039);

return statearr_23216;
})();
var statearr_23217_23281 = state_23161__$1;
(statearr_23217_23281[(2)] = null);

(statearr_23217_23281[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (11))){
var inst_23060 = (state_23161[(7)]);
var inst_23038 = (state_23161[(15)]);
var inst_23060__$1 = cljs.core.seq(inst_23038);
var state_23161__$1 = (function (){var statearr_23218 = state_23161;
(statearr_23218[(7)] = inst_23060__$1);

return statearr_23218;
})();
if(inst_23060__$1){
var statearr_23219_23282 = state_23161__$1;
(statearr_23219_23282[(1)] = (16));

} else {
var statearr_23220_23283 = state_23161__$1;
(statearr_23220_23283[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (9))){
var inst_23090 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23221_23284 = state_23161__$1;
(statearr_23221_23284[(2)] = inst_23090);

(statearr_23221_23284[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (5))){
var inst_23036 = cljs.core.deref(cs);
var inst_23037 = cljs.core.seq(inst_23036);
var inst_23038 = inst_23037;
var inst_23039 = null;
var inst_23040 = (0);
var inst_23041 = (0);
var state_23161__$1 = (function (){var statearr_23222 = state_23161;
(statearr_23222[(13)] = inst_23040);

(statearr_23222[(14)] = inst_23041);

(statearr_23222[(15)] = inst_23038);

(statearr_23222[(17)] = inst_23039);

return statearr_23222;
})();
var statearr_23223_23285 = state_23161__$1;
(statearr_23223_23285[(2)] = null);

(statearr_23223_23285[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (14))){
var state_23161__$1 = state_23161;
var statearr_23224_23286 = state_23161__$1;
(statearr_23224_23286[(2)] = null);

(statearr_23224_23286[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (45))){
var inst_23151 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23225_23287 = state_23161__$1;
(statearr_23225_23287[(2)] = inst_23151);

(statearr_23225_23287[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (26))){
var inst_23093 = (state_23161[(29)]);
var inst_23147 = (state_23161[(2)]);
var inst_23148 = cljs.core.seq(inst_23093);
var state_23161__$1 = (function (){var statearr_23226 = state_23161;
(statearr_23226[(31)] = inst_23147);

return statearr_23226;
})();
if(inst_23148){
var statearr_23227_23288 = state_23161__$1;
(statearr_23227_23288[(1)] = (42));

} else {
var statearr_23228_23289 = state_23161__$1;
(statearr_23228_23289[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (16))){
var inst_23060 = (state_23161[(7)]);
var inst_23062 = cljs.core.chunked_seq_QMARK_(inst_23060);
var state_23161__$1 = state_23161;
if(inst_23062){
var statearr_23229_23290 = state_23161__$1;
(statearr_23229_23290[(1)] = (19));

} else {
var statearr_23230_23291 = state_23161__$1;
(statearr_23230_23291[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (38))){
var inst_23140 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23231_23292 = state_23161__$1;
(statearr_23231_23292[(2)] = inst_23140);

(statearr_23231_23292[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (30))){
var state_23161__$1 = state_23161;
var statearr_23232_23293 = state_23161__$1;
(statearr_23232_23293[(2)] = null);

(statearr_23232_23293[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (10))){
var inst_23041 = (state_23161[(14)]);
var inst_23039 = (state_23161[(17)]);
var inst_23049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23039,inst_23041);
var inst_23050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23049,(0),null);
var inst_23051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23049,(1),null);
var state_23161__$1 = (function (){var statearr_23233 = state_23161;
(statearr_23233[(26)] = inst_23050);

return statearr_23233;
})();
if(cljs.core.truth_(inst_23051)){
var statearr_23234_23294 = state_23161__$1;
(statearr_23234_23294[(1)] = (13));

} else {
var statearr_23235_23295 = state_23161__$1;
(statearr_23235_23295[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (18))){
var inst_23086 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23236_23296 = state_23161__$1;
(statearr_23236_23296[(2)] = inst_23086);

(statearr_23236_23296[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (42))){
var state_23161__$1 = state_23161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23161__$1,(45),dchan);
} else {
if((state_val_23162 === (37))){
var inst_23029 = (state_23161[(9)]);
var inst_23120 = (state_23161[(25)]);
var inst_23129 = (state_23161[(23)]);
var inst_23129__$1 = cljs.core.first(inst_23120);
var inst_23130 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23129__$1,inst_23029,done);
var state_23161__$1 = (function (){var statearr_23237 = state_23161;
(statearr_23237[(23)] = inst_23129__$1);

return statearr_23237;
})();
if(cljs.core.truth_(inst_23130)){
var statearr_23238_23297 = state_23161__$1;
(statearr_23238_23297[(1)] = (39));

} else {
var statearr_23239_23298 = state_23161__$1;
(statearr_23239_23298[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23162 === (8))){
var inst_23040 = (state_23161[(13)]);
var inst_23041 = (state_23161[(14)]);
var inst_23043 = (inst_23041 < inst_23040);
var inst_23044 = inst_23043;
var state_23161__$1 = state_23161;
if(cljs.core.truth_(inst_23044)){
var statearr_23240_23299 = state_23161__$1;
(statearr_23240_23299[(1)] = (10));

} else {
var statearr_23241_23300 = state_23161__$1;
(statearr_23241_23300[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___23246,cs,m,dchan,dctr,done))
;
return ((function (switch__22339__auto__,c__22439__auto___23246,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22340__auto__ = null;
var cljs$core$async$mult_$_state_machine__22340__auto____0 = (function (){
var statearr_23242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23242[(0)] = cljs$core$async$mult_$_state_machine__22340__auto__);

(statearr_23242[(1)] = (1));

return statearr_23242;
});
var cljs$core$async$mult_$_state_machine__22340__auto____1 = (function (state_23161){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_23161);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e23243){if((e23243 instanceof Object)){
var ex__22343__auto__ = e23243;
var statearr_23244_23301 = state_23161;
(statearr_23244_23301[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23161);

return cljs.core.cst$kw$recur;
} else {
throw e23243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__23302 = state_23161;
state_23161 = G__23302;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22340__auto__ = function(state_23161){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22340__auto____1.call(this,state_23161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22340__auto____0;
cljs$core$async$mult_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22340__auto____1;
return cljs$core$async$mult_$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___23246,cs,m,dchan,dctr,done))
})();
var state__22441__auto__ = (function (){var statearr_23245 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_23245[(6)] = c__22439__auto___23246);

return statearr_23245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___23246,cs,m,dchan,dctr,done))
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
var G__23304 = arguments.length;
switch (G__23304) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto__.call(null,m));
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8352__auto__.call(null,m,state_map));
} else {
var m__8352__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8352__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8352__auto__.call(null,m,mode));
} else {
var m__8352__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8352__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___23316 = arguments.length;
var i__8840__auto___23317 = (0);
while(true){
if((i__8840__auto___23317 < len__8839__auto___23316)){
args__8846__auto__.push((arguments[i__8840__auto___23317]));

var G__23318 = (i__8840__auto___23317 + (1));
i__8840__auto___23317 = G__23318;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23310){
var map__23311 = p__23310;
var map__23311__$1 = ((((!((map__23311 == null)))?((((map__23311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23311):map__23311);
var opts = map__23311__$1;
var statearr_23313_23319 = state;
(statearr_23313_23319[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__23311,map__23311__$1,opts){
return (function (val){
var statearr_23314_23320 = state;
(statearr_23314_23320[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23311,map__23311__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23315_23321 = state;
(statearr_23315_23321[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23306){
var G__23307 = cljs.core.first(seq23306);
var seq23306__$1 = cljs.core.next(seq23306);
var G__23308 = cljs.core.first(seq23306__$1);
var seq23306__$2 = cljs.core.next(seq23306__$1);
var G__23309 = cljs.core.first(seq23306__$2);
var seq23306__$3 = cljs.core.next(seq23306__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23307,G__23308,G__23309,seq23306__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23322 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23323){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23323 = meta23323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23324,meta23323__$1){
var self__ = this;
var _23324__$1 = this;
return (new cljs.core.async.t_cljs$core$async23322(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23323__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23324){
var self__ = this;
var _23324__$1 = this;
return self__.meta23323;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta23323], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23322";

cljs.core.async.t_cljs$core$async23322.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async23322");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23322 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23322(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23323){
return (new cljs.core.async.t_cljs$core$async23322(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23323));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23322(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22439__auto___23486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___23486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___23486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23426){
var state_val_23427 = (state_23426[(1)]);
if((state_val_23427 === (7))){
var inst_23341 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
var statearr_23428_23487 = state_23426__$1;
(statearr_23428_23487[(2)] = inst_23341);

(statearr_23428_23487[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (20))){
var inst_23353 = (state_23426[(7)]);
var state_23426__$1 = state_23426;
var statearr_23429_23488 = state_23426__$1;
(statearr_23429_23488[(2)] = inst_23353);

(statearr_23429_23488[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (27))){
var state_23426__$1 = state_23426;
var statearr_23430_23489 = state_23426__$1;
(statearr_23430_23489[(2)] = null);

(statearr_23430_23489[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (1))){
var inst_23328 = (state_23426[(8)]);
var inst_23328__$1 = calc_state();
var inst_23330 = (inst_23328__$1 == null);
var inst_23331 = cljs.core.not(inst_23330);
var state_23426__$1 = (function (){var statearr_23431 = state_23426;
(statearr_23431[(8)] = inst_23328__$1);

return statearr_23431;
})();
if(inst_23331){
var statearr_23432_23490 = state_23426__$1;
(statearr_23432_23490[(1)] = (2));

} else {
var statearr_23433_23491 = state_23426__$1;
(statearr_23433_23491[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (24))){
var inst_23386 = (state_23426[(9)]);
var inst_23400 = (state_23426[(10)]);
var inst_23377 = (state_23426[(11)]);
var inst_23400__$1 = (inst_23377.cljs$core$IFn$_invoke$arity$1 ? inst_23377.cljs$core$IFn$_invoke$arity$1(inst_23386) : inst_23377.call(null,inst_23386));
var state_23426__$1 = (function (){var statearr_23434 = state_23426;
(statearr_23434[(10)] = inst_23400__$1);

return statearr_23434;
})();
if(cljs.core.truth_(inst_23400__$1)){
var statearr_23435_23492 = state_23426__$1;
(statearr_23435_23492[(1)] = (29));

} else {
var statearr_23436_23493 = state_23426__$1;
(statearr_23436_23493[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (4))){
var inst_23344 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
if(cljs.core.truth_(inst_23344)){
var statearr_23437_23494 = state_23426__$1;
(statearr_23437_23494[(1)] = (8));

} else {
var statearr_23438_23495 = state_23426__$1;
(statearr_23438_23495[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (15))){
var inst_23371 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
if(cljs.core.truth_(inst_23371)){
var statearr_23439_23496 = state_23426__$1;
(statearr_23439_23496[(1)] = (19));

} else {
var statearr_23440_23497 = state_23426__$1;
(statearr_23440_23497[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (21))){
var inst_23376 = (state_23426[(12)]);
var inst_23376__$1 = (state_23426[(2)]);
var inst_23377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23376__$1,cljs.core.cst$kw$solos);
var inst_23378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23376__$1,cljs.core.cst$kw$mutes);
var inst_23379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23376__$1,cljs.core.cst$kw$reads);
var state_23426__$1 = (function (){var statearr_23441 = state_23426;
(statearr_23441[(12)] = inst_23376__$1);

(statearr_23441[(11)] = inst_23377);

(statearr_23441[(13)] = inst_23378);

return statearr_23441;
})();
return cljs.core.async.ioc_alts_BANG_(state_23426__$1,(22),inst_23379);
} else {
if((state_val_23427 === (31))){
var inst_23408 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
if(cljs.core.truth_(inst_23408)){
var statearr_23442_23498 = state_23426__$1;
(statearr_23442_23498[(1)] = (32));

} else {
var statearr_23443_23499 = state_23426__$1;
(statearr_23443_23499[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (32))){
var inst_23385 = (state_23426[(14)]);
var state_23426__$1 = state_23426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23426__$1,(35),out,inst_23385);
} else {
if((state_val_23427 === (33))){
var inst_23376 = (state_23426[(12)]);
var inst_23353 = inst_23376;
var state_23426__$1 = (function (){var statearr_23444 = state_23426;
(statearr_23444[(7)] = inst_23353);

return statearr_23444;
})();
var statearr_23445_23500 = state_23426__$1;
(statearr_23445_23500[(2)] = null);

(statearr_23445_23500[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (13))){
var inst_23353 = (state_23426[(7)]);
var inst_23360 = inst_23353.cljs$lang$protocol_mask$partition0$;
var inst_23361 = (inst_23360 & (64));
var inst_23362 = inst_23353.cljs$core$ISeq$;
var inst_23363 = (cljs.core.PROTOCOL_SENTINEL === inst_23362);
var inst_23364 = (inst_23361) || (inst_23363);
var state_23426__$1 = state_23426;
if(cljs.core.truth_(inst_23364)){
var statearr_23446_23501 = state_23426__$1;
(statearr_23446_23501[(1)] = (16));

} else {
var statearr_23447_23502 = state_23426__$1;
(statearr_23447_23502[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (22))){
var inst_23386 = (state_23426[(9)]);
var inst_23385 = (state_23426[(14)]);
var inst_23384 = (state_23426[(2)]);
var inst_23385__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23384,(0),null);
var inst_23386__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23384,(1),null);
var inst_23387 = (inst_23385__$1 == null);
var inst_23388 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23386__$1,change);
var inst_23389 = (inst_23387) || (inst_23388);
var state_23426__$1 = (function (){var statearr_23448 = state_23426;
(statearr_23448[(9)] = inst_23386__$1);

(statearr_23448[(14)] = inst_23385__$1);

return statearr_23448;
})();
if(cljs.core.truth_(inst_23389)){
var statearr_23449_23503 = state_23426__$1;
(statearr_23449_23503[(1)] = (23));

} else {
var statearr_23450_23504 = state_23426__$1;
(statearr_23450_23504[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (36))){
var inst_23376 = (state_23426[(12)]);
var inst_23353 = inst_23376;
var state_23426__$1 = (function (){var statearr_23451 = state_23426;
(statearr_23451[(7)] = inst_23353);

return statearr_23451;
})();
var statearr_23452_23505 = state_23426__$1;
(statearr_23452_23505[(2)] = null);

(statearr_23452_23505[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (29))){
var inst_23400 = (state_23426[(10)]);
var state_23426__$1 = state_23426;
var statearr_23453_23506 = state_23426__$1;
(statearr_23453_23506[(2)] = inst_23400);

(statearr_23453_23506[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (6))){
var state_23426__$1 = state_23426;
var statearr_23454_23507 = state_23426__$1;
(statearr_23454_23507[(2)] = false);

(statearr_23454_23507[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (28))){
var inst_23396 = (state_23426[(2)]);
var inst_23397 = calc_state();
var inst_23353 = inst_23397;
var state_23426__$1 = (function (){var statearr_23455 = state_23426;
(statearr_23455[(7)] = inst_23353);

(statearr_23455[(15)] = inst_23396);

return statearr_23455;
})();
var statearr_23456_23508 = state_23426__$1;
(statearr_23456_23508[(2)] = null);

(statearr_23456_23508[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (25))){
var inst_23422 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
var statearr_23457_23509 = state_23426__$1;
(statearr_23457_23509[(2)] = inst_23422);

(statearr_23457_23509[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (34))){
var inst_23420 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
var statearr_23458_23510 = state_23426__$1;
(statearr_23458_23510[(2)] = inst_23420);

(statearr_23458_23510[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (17))){
var state_23426__$1 = state_23426;
var statearr_23459_23511 = state_23426__$1;
(statearr_23459_23511[(2)] = false);

(statearr_23459_23511[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (3))){
var state_23426__$1 = state_23426;
var statearr_23460_23512 = state_23426__$1;
(statearr_23460_23512[(2)] = false);

(statearr_23460_23512[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (12))){
var inst_23424 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23426__$1,inst_23424);
} else {
if((state_val_23427 === (2))){
var inst_23328 = (state_23426[(8)]);
var inst_23333 = inst_23328.cljs$lang$protocol_mask$partition0$;
var inst_23334 = (inst_23333 & (64));
var inst_23335 = inst_23328.cljs$core$ISeq$;
var inst_23336 = (cljs.core.PROTOCOL_SENTINEL === inst_23335);
var inst_23337 = (inst_23334) || (inst_23336);
var state_23426__$1 = state_23426;
if(cljs.core.truth_(inst_23337)){
var statearr_23461_23513 = state_23426__$1;
(statearr_23461_23513[(1)] = (5));

} else {
var statearr_23462_23514 = state_23426__$1;
(statearr_23462_23514[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (23))){
var inst_23385 = (state_23426[(14)]);
var inst_23391 = (inst_23385 == null);
var state_23426__$1 = state_23426;
if(cljs.core.truth_(inst_23391)){
var statearr_23463_23515 = state_23426__$1;
(statearr_23463_23515[(1)] = (26));

} else {
var statearr_23464_23516 = state_23426__$1;
(statearr_23464_23516[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (35))){
var inst_23411 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
if(cljs.core.truth_(inst_23411)){
var statearr_23465_23517 = state_23426__$1;
(statearr_23465_23517[(1)] = (36));

} else {
var statearr_23466_23518 = state_23426__$1;
(statearr_23466_23518[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (19))){
var inst_23353 = (state_23426[(7)]);
var inst_23373 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23353);
var state_23426__$1 = state_23426;
var statearr_23467_23519 = state_23426__$1;
(statearr_23467_23519[(2)] = inst_23373);

(statearr_23467_23519[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (11))){
var inst_23353 = (state_23426[(7)]);
var inst_23357 = (inst_23353 == null);
var inst_23358 = cljs.core.not(inst_23357);
var state_23426__$1 = state_23426;
if(inst_23358){
var statearr_23468_23520 = state_23426__$1;
(statearr_23468_23520[(1)] = (13));

} else {
var statearr_23469_23521 = state_23426__$1;
(statearr_23469_23521[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (9))){
var inst_23328 = (state_23426[(8)]);
var state_23426__$1 = state_23426;
var statearr_23470_23522 = state_23426__$1;
(statearr_23470_23522[(2)] = inst_23328);

(statearr_23470_23522[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (5))){
var state_23426__$1 = state_23426;
var statearr_23471_23523 = state_23426__$1;
(statearr_23471_23523[(2)] = true);

(statearr_23471_23523[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (14))){
var state_23426__$1 = state_23426;
var statearr_23472_23524 = state_23426__$1;
(statearr_23472_23524[(2)] = false);

(statearr_23472_23524[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (26))){
var inst_23386 = (state_23426[(9)]);
var inst_23393 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23386);
var state_23426__$1 = state_23426;
var statearr_23473_23525 = state_23426__$1;
(statearr_23473_23525[(2)] = inst_23393);

(statearr_23473_23525[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (16))){
var state_23426__$1 = state_23426;
var statearr_23474_23526 = state_23426__$1;
(statearr_23474_23526[(2)] = true);

(statearr_23474_23526[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (38))){
var inst_23416 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
var statearr_23475_23527 = state_23426__$1;
(statearr_23475_23527[(2)] = inst_23416);

(statearr_23475_23527[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (30))){
var inst_23386 = (state_23426[(9)]);
var inst_23377 = (state_23426[(11)]);
var inst_23378 = (state_23426[(13)]);
var inst_23403 = cljs.core.empty_QMARK_(inst_23377);
var inst_23404 = (inst_23378.cljs$core$IFn$_invoke$arity$1 ? inst_23378.cljs$core$IFn$_invoke$arity$1(inst_23386) : inst_23378.call(null,inst_23386));
var inst_23405 = cljs.core.not(inst_23404);
var inst_23406 = (inst_23403) && (inst_23405);
var state_23426__$1 = state_23426;
var statearr_23476_23528 = state_23426__$1;
(statearr_23476_23528[(2)] = inst_23406);

(statearr_23476_23528[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (10))){
var inst_23328 = (state_23426[(8)]);
var inst_23349 = (state_23426[(2)]);
var inst_23350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23349,cljs.core.cst$kw$solos);
var inst_23351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23349,cljs.core.cst$kw$mutes);
var inst_23352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23349,cljs.core.cst$kw$reads);
var inst_23353 = inst_23328;
var state_23426__$1 = (function (){var statearr_23477 = state_23426;
(statearr_23477[(16)] = inst_23351);

(statearr_23477[(7)] = inst_23353);

(statearr_23477[(17)] = inst_23350);

(statearr_23477[(18)] = inst_23352);

return statearr_23477;
})();
var statearr_23478_23529 = state_23426__$1;
(statearr_23478_23529[(2)] = null);

(statearr_23478_23529[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (18))){
var inst_23368 = (state_23426[(2)]);
var state_23426__$1 = state_23426;
var statearr_23479_23530 = state_23426__$1;
(statearr_23479_23530[(2)] = inst_23368);

(statearr_23479_23530[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (37))){
var state_23426__$1 = state_23426;
var statearr_23480_23531 = state_23426__$1;
(statearr_23480_23531[(2)] = null);

(statearr_23480_23531[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23427 === (8))){
var inst_23328 = (state_23426[(8)]);
var inst_23346 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23328);
var state_23426__$1 = state_23426;
var statearr_23481_23532 = state_23426__$1;
(statearr_23481_23532[(2)] = inst_23346);

(statearr_23481_23532[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___23486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22339__auto__,c__22439__auto___23486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22340__auto__ = null;
var cljs$core$async$mix_$_state_machine__22340__auto____0 = (function (){
var statearr_23482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23482[(0)] = cljs$core$async$mix_$_state_machine__22340__auto__);

(statearr_23482[(1)] = (1));

return statearr_23482;
});
var cljs$core$async$mix_$_state_machine__22340__auto____1 = (function (state_23426){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_23426);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e23483){if((e23483 instanceof Object)){
var ex__22343__auto__ = e23483;
var statearr_23484_23533 = state_23426;
(statearr_23484_23533[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23426);

return cljs.core.cst$kw$recur;
} else {
throw e23483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__23534 = state_23426;
state_23426 = G__23534;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22340__auto__ = function(state_23426){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22340__auto____1.call(this,state_23426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22340__auto____0;
cljs$core$async$mix_$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22340__auto____1;
return cljs$core$async$mix_$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___23486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22441__auto__ = (function (){var statearr_23485 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_23485[(6)] = c__22439__auto___23486);

return statearr_23485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___23486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8352__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8352__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8352__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8352__auto__.call(null,p,v,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8352__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23536 = arguments.length;
switch (G__23536) {
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
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8352__auto__.call(null,p));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8352__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8352__auto__.call(null,p,v));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8352__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__23540 = arguments.length;
switch (G__23540) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7668__auto__,mults){
return (function (p1__23538_SHARP_){
if(cljs.core.truth_((p1__23538_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23538_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23538_SHARP_.call(null,topic)))){
return p1__23538_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23538_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23541 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23542){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23542 = meta23542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23543,meta23542__$1){
var self__ = this;
var _23543__$1 = this;
return (new cljs.core.async.t_cljs$core$async23541(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23542__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23543){
var self__ = this;
var _23543__$1 = this;
return self__.meta23542;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23541.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta23542], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23541";

cljs.core.async.t_cljs$core$async23541.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async23541");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23541 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23541(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23542){
return (new cljs.core.async.t_cljs$core$async23541(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23542));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23541(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22439__auto___23661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___23661,mults,ensure_mult,p){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___23661,mults,ensure_mult,p){
return (function (state_23615){
var state_val_23616 = (state_23615[(1)]);
if((state_val_23616 === (7))){
var inst_23611 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
var statearr_23617_23662 = state_23615__$1;
(statearr_23617_23662[(2)] = inst_23611);

(statearr_23617_23662[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (20))){
var state_23615__$1 = state_23615;
var statearr_23618_23663 = state_23615__$1;
(statearr_23618_23663[(2)] = null);

(statearr_23618_23663[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (1))){
var state_23615__$1 = state_23615;
var statearr_23619_23664 = state_23615__$1;
(statearr_23619_23664[(2)] = null);

(statearr_23619_23664[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (24))){
var inst_23594 = (state_23615[(7)]);
var inst_23603 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23594);
var state_23615__$1 = state_23615;
var statearr_23620_23665 = state_23615__$1;
(statearr_23620_23665[(2)] = inst_23603);

(statearr_23620_23665[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (4))){
var inst_23546 = (state_23615[(8)]);
var inst_23546__$1 = (state_23615[(2)]);
var inst_23547 = (inst_23546__$1 == null);
var state_23615__$1 = (function (){var statearr_23621 = state_23615;
(statearr_23621[(8)] = inst_23546__$1);

return statearr_23621;
})();
if(cljs.core.truth_(inst_23547)){
var statearr_23622_23666 = state_23615__$1;
(statearr_23622_23666[(1)] = (5));

} else {
var statearr_23623_23667 = state_23615__$1;
(statearr_23623_23667[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (15))){
var inst_23588 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
var statearr_23624_23668 = state_23615__$1;
(statearr_23624_23668[(2)] = inst_23588);

(statearr_23624_23668[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (21))){
var inst_23608 = (state_23615[(2)]);
var state_23615__$1 = (function (){var statearr_23625 = state_23615;
(statearr_23625[(9)] = inst_23608);

return statearr_23625;
})();
var statearr_23626_23669 = state_23615__$1;
(statearr_23626_23669[(2)] = null);

(statearr_23626_23669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (13))){
var inst_23570 = (state_23615[(10)]);
var inst_23572 = cljs.core.chunked_seq_QMARK_(inst_23570);
var state_23615__$1 = state_23615;
if(inst_23572){
var statearr_23627_23670 = state_23615__$1;
(statearr_23627_23670[(1)] = (16));

} else {
var statearr_23628_23671 = state_23615__$1;
(statearr_23628_23671[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (22))){
var inst_23600 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
if(cljs.core.truth_(inst_23600)){
var statearr_23629_23672 = state_23615__$1;
(statearr_23629_23672[(1)] = (23));

} else {
var statearr_23630_23673 = state_23615__$1;
(statearr_23630_23673[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (6))){
var inst_23596 = (state_23615[(11)]);
var inst_23594 = (state_23615[(7)]);
var inst_23546 = (state_23615[(8)]);
var inst_23594__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23546) : topic_fn.call(null,inst_23546));
var inst_23595 = cljs.core.deref(mults);
var inst_23596__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23595,inst_23594__$1);
var state_23615__$1 = (function (){var statearr_23631 = state_23615;
(statearr_23631[(11)] = inst_23596__$1);

(statearr_23631[(7)] = inst_23594__$1);

return statearr_23631;
})();
if(cljs.core.truth_(inst_23596__$1)){
var statearr_23632_23674 = state_23615__$1;
(statearr_23632_23674[(1)] = (19));

} else {
var statearr_23633_23675 = state_23615__$1;
(statearr_23633_23675[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (25))){
var inst_23605 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
var statearr_23634_23676 = state_23615__$1;
(statearr_23634_23676[(2)] = inst_23605);

(statearr_23634_23676[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (17))){
var inst_23570 = (state_23615[(10)]);
var inst_23579 = cljs.core.first(inst_23570);
var inst_23580 = cljs.core.async.muxch_STAR_(inst_23579);
var inst_23581 = cljs.core.async.close_BANG_(inst_23580);
var inst_23582 = cljs.core.next(inst_23570);
var inst_23556 = inst_23582;
var inst_23557 = null;
var inst_23558 = (0);
var inst_23559 = (0);
var state_23615__$1 = (function (){var statearr_23635 = state_23615;
(statearr_23635[(12)] = inst_23581);

(statearr_23635[(13)] = inst_23556);

(statearr_23635[(14)] = inst_23558);

(statearr_23635[(15)] = inst_23559);

(statearr_23635[(16)] = inst_23557);

return statearr_23635;
})();
var statearr_23636_23677 = state_23615__$1;
(statearr_23636_23677[(2)] = null);

(statearr_23636_23677[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (3))){
var inst_23613 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23615__$1,inst_23613);
} else {
if((state_val_23616 === (12))){
var inst_23590 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
var statearr_23637_23678 = state_23615__$1;
(statearr_23637_23678[(2)] = inst_23590);

(statearr_23637_23678[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (2))){
var state_23615__$1 = state_23615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23615__$1,(4),ch);
} else {
if((state_val_23616 === (23))){
var state_23615__$1 = state_23615;
var statearr_23638_23679 = state_23615__$1;
(statearr_23638_23679[(2)] = null);

(statearr_23638_23679[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (19))){
var inst_23596 = (state_23615[(11)]);
var inst_23546 = (state_23615[(8)]);
var inst_23598 = cljs.core.async.muxch_STAR_(inst_23596);
var state_23615__$1 = state_23615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23615__$1,(22),inst_23598,inst_23546);
} else {
if((state_val_23616 === (11))){
var inst_23556 = (state_23615[(13)]);
var inst_23570 = (state_23615[(10)]);
var inst_23570__$1 = cljs.core.seq(inst_23556);
var state_23615__$1 = (function (){var statearr_23639 = state_23615;
(statearr_23639[(10)] = inst_23570__$1);

return statearr_23639;
})();
if(inst_23570__$1){
var statearr_23640_23680 = state_23615__$1;
(statearr_23640_23680[(1)] = (13));

} else {
var statearr_23641_23681 = state_23615__$1;
(statearr_23641_23681[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (9))){
var inst_23592 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
var statearr_23642_23682 = state_23615__$1;
(statearr_23642_23682[(2)] = inst_23592);

(statearr_23642_23682[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (5))){
var inst_23553 = cljs.core.deref(mults);
var inst_23554 = cljs.core.vals(inst_23553);
var inst_23555 = cljs.core.seq(inst_23554);
var inst_23556 = inst_23555;
var inst_23557 = null;
var inst_23558 = (0);
var inst_23559 = (0);
var state_23615__$1 = (function (){var statearr_23643 = state_23615;
(statearr_23643[(13)] = inst_23556);

(statearr_23643[(14)] = inst_23558);

(statearr_23643[(15)] = inst_23559);

(statearr_23643[(16)] = inst_23557);

return statearr_23643;
})();
var statearr_23644_23683 = state_23615__$1;
(statearr_23644_23683[(2)] = null);

(statearr_23644_23683[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (14))){
var state_23615__$1 = state_23615;
var statearr_23648_23684 = state_23615__$1;
(statearr_23648_23684[(2)] = null);

(statearr_23648_23684[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (16))){
var inst_23570 = (state_23615[(10)]);
var inst_23574 = cljs.core.chunk_first(inst_23570);
var inst_23575 = cljs.core.chunk_rest(inst_23570);
var inst_23576 = cljs.core.count(inst_23574);
var inst_23556 = inst_23575;
var inst_23557 = inst_23574;
var inst_23558 = inst_23576;
var inst_23559 = (0);
var state_23615__$1 = (function (){var statearr_23649 = state_23615;
(statearr_23649[(13)] = inst_23556);

(statearr_23649[(14)] = inst_23558);

(statearr_23649[(15)] = inst_23559);

(statearr_23649[(16)] = inst_23557);

return statearr_23649;
})();
var statearr_23650_23685 = state_23615__$1;
(statearr_23650_23685[(2)] = null);

(statearr_23650_23685[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (10))){
var inst_23556 = (state_23615[(13)]);
var inst_23558 = (state_23615[(14)]);
var inst_23559 = (state_23615[(15)]);
var inst_23557 = (state_23615[(16)]);
var inst_23564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23557,inst_23559);
var inst_23565 = cljs.core.async.muxch_STAR_(inst_23564);
var inst_23566 = cljs.core.async.close_BANG_(inst_23565);
var inst_23567 = (inst_23559 + (1));
var tmp23645 = inst_23556;
var tmp23646 = inst_23558;
var tmp23647 = inst_23557;
var inst_23556__$1 = tmp23645;
var inst_23557__$1 = tmp23647;
var inst_23558__$1 = tmp23646;
var inst_23559__$1 = inst_23567;
var state_23615__$1 = (function (){var statearr_23651 = state_23615;
(statearr_23651[(17)] = inst_23566);

(statearr_23651[(13)] = inst_23556__$1);

(statearr_23651[(14)] = inst_23558__$1);

(statearr_23651[(15)] = inst_23559__$1);

(statearr_23651[(16)] = inst_23557__$1);

return statearr_23651;
})();
var statearr_23652_23686 = state_23615__$1;
(statearr_23652_23686[(2)] = null);

(statearr_23652_23686[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (18))){
var inst_23585 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
var statearr_23653_23687 = state_23615__$1;
(statearr_23653_23687[(2)] = inst_23585);

(statearr_23653_23687[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23616 === (8))){
var inst_23558 = (state_23615[(14)]);
var inst_23559 = (state_23615[(15)]);
var inst_23561 = (inst_23559 < inst_23558);
var inst_23562 = inst_23561;
var state_23615__$1 = state_23615;
if(cljs.core.truth_(inst_23562)){
var statearr_23654_23688 = state_23615__$1;
(statearr_23654_23688[(1)] = (10));

} else {
var statearr_23655_23689 = state_23615__$1;
(statearr_23655_23689[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___23661,mults,ensure_mult,p))
;
return ((function (switch__22339__auto__,c__22439__auto___23661,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_23656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23656[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_23656[(1)] = (1));

return statearr_23656;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_23615){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_23615);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e23657){if((e23657 instanceof Object)){
var ex__22343__auto__ = e23657;
var statearr_23658_23690 = state_23615;
(statearr_23658_23690[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23615);

return cljs.core.cst$kw$recur;
} else {
throw e23657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__23691 = state_23615;
state_23615 = G__23691;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_23615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_23615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___23661,mults,ensure_mult,p))
})();
var state__22441__auto__ = (function (){var statearr_23659 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_23659[(6)] = c__22439__auto___23661);

return statearr_23659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___23661,mults,ensure_mult,p))
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
var G__23693 = arguments.length;
switch (G__23693) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__23696 = arguments.length;
switch (G__23696) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__23699 = arguments.length;
switch (G__23699) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__22439__auto___23766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___23766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___23766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23738){
var state_val_23739 = (state_23738[(1)]);
if((state_val_23739 === (7))){
var state_23738__$1 = state_23738;
var statearr_23740_23767 = state_23738__$1;
(statearr_23740_23767[(2)] = null);

(statearr_23740_23767[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (1))){
var state_23738__$1 = state_23738;
var statearr_23741_23768 = state_23738__$1;
(statearr_23741_23768[(2)] = null);

(statearr_23741_23768[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (4))){
var inst_23702 = (state_23738[(7)]);
var inst_23704 = (inst_23702 < cnt);
var state_23738__$1 = state_23738;
if(cljs.core.truth_(inst_23704)){
var statearr_23742_23769 = state_23738__$1;
(statearr_23742_23769[(1)] = (6));

} else {
var statearr_23743_23770 = state_23738__$1;
(statearr_23743_23770[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (15))){
var inst_23734 = (state_23738[(2)]);
var state_23738__$1 = state_23738;
var statearr_23744_23771 = state_23738__$1;
(statearr_23744_23771[(2)] = inst_23734);

(statearr_23744_23771[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (13))){
var inst_23727 = cljs.core.async.close_BANG_(out);
var state_23738__$1 = state_23738;
var statearr_23745_23772 = state_23738__$1;
(statearr_23745_23772[(2)] = inst_23727);

(statearr_23745_23772[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (6))){
var state_23738__$1 = state_23738;
var statearr_23746_23773 = state_23738__$1;
(statearr_23746_23773[(2)] = null);

(statearr_23746_23773[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (3))){
var inst_23736 = (state_23738[(2)]);
var state_23738__$1 = state_23738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23738__$1,inst_23736);
} else {
if((state_val_23739 === (12))){
var inst_23724 = (state_23738[(8)]);
var inst_23724__$1 = (state_23738[(2)]);
var inst_23725 = cljs.core.some(cljs.core.nil_QMARK_,inst_23724__$1);
var state_23738__$1 = (function (){var statearr_23747 = state_23738;
(statearr_23747[(8)] = inst_23724__$1);

return statearr_23747;
})();
if(cljs.core.truth_(inst_23725)){
var statearr_23748_23774 = state_23738__$1;
(statearr_23748_23774[(1)] = (13));

} else {
var statearr_23749_23775 = state_23738__$1;
(statearr_23749_23775[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (2))){
var inst_23701 = cljs.core.reset_BANG_(dctr,cnt);
var inst_23702 = (0);
var state_23738__$1 = (function (){var statearr_23750 = state_23738;
(statearr_23750[(9)] = inst_23701);

(statearr_23750[(7)] = inst_23702);

return statearr_23750;
})();
var statearr_23751_23776 = state_23738__$1;
(statearr_23751_23776[(2)] = null);

(statearr_23751_23776[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (11))){
var inst_23702 = (state_23738[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23738,(10),Object,null,(9));
var inst_23711 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23702) : chs__$1.call(null,inst_23702));
var inst_23712 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23702) : done.call(null,inst_23702));
var inst_23713 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23711,inst_23712);
var state_23738__$1 = state_23738;
var statearr_23752_23777 = state_23738__$1;
(statearr_23752_23777[(2)] = inst_23713);


cljs.core.async.impl.ioc_helpers.process_exception(state_23738__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (9))){
var inst_23702 = (state_23738[(7)]);
var inst_23715 = (state_23738[(2)]);
var inst_23716 = (inst_23702 + (1));
var inst_23702__$1 = inst_23716;
var state_23738__$1 = (function (){var statearr_23753 = state_23738;
(statearr_23753[(10)] = inst_23715);

(statearr_23753[(7)] = inst_23702__$1);

return statearr_23753;
})();
var statearr_23754_23778 = state_23738__$1;
(statearr_23754_23778[(2)] = null);

(statearr_23754_23778[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (5))){
var inst_23722 = (state_23738[(2)]);
var state_23738__$1 = (function (){var statearr_23755 = state_23738;
(statearr_23755[(11)] = inst_23722);

return statearr_23755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23738__$1,(12),dchan);
} else {
if((state_val_23739 === (14))){
var inst_23724 = (state_23738[(8)]);
var inst_23729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23724);
var state_23738__$1 = state_23738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23738__$1,(16),out,inst_23729);
} else {
if((state_val_23739 === (16))){
var inst_23731 = (state_23738[(2)]);
var state_23738__$1 = (function (){var statearr_23756 = state_23738;
(statearr_23756[(12)] = inst_23731);

return statearr_23756;
})();
var statearr_23757_23779 = state_23738__$1;
(statearr_23757_23779[(2)] = null);

(statearr_23757_23779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (10))){
var inst_23706 = (state_23738[(2)]);
var inst_23707 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_23738__$1 = (function (){var statearr_23758 = state_23738;
(statearr_23758[(13)] = inst_23706);

return statearr_23758;
})();
var statearr_23759_23780 = state_23738__$1;
(statearr_23759_23780[(2)] = inst_23707);


cljs.core.async.impl.ioc_helpers.process_exception(state_23738__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_23739 === (8))){
var inst_23720 = (state_23738[(2)]);
var state_23738__$1 = state_23738;
var statearr_23760_23781 = state_23738__$1;
(statearr_23760_23781[(2)] = inst_23720);

(statearr_23760_23781[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___23766,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22339__auto__,c__22439__auto___23766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_23761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23761[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_23761[(1)] = (1));

return statearr_23761;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_23738){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_23738);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e23762){if((e23762 instanceof Object)){
var ex__22343__auto__ = e23762;
var statearr_23763_23782 = state_23738;
(statearr_23763_23782[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23738);

return cljs.core.cst$kw$recur;
} else {
throw e23762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__23783 = state_23738;
state_23738 = G__23783;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_23738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_23738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___23766,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22441__auto__ = (function (){var statearr_23764 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_23764[(6)] = c__22439__auto___23766);

return statearr_23764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___23766,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__23786 = arguments.length;
switch (G__23786) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22439__auto___23840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___23840,out){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___23840,out){
return (function (state_23818){
var state_val_23819 = (state_23818[(1)]);
if((state_val_23819 === (7))){
var inst_23798 = (state_23818[(7)]);
var inst_23797 = (state_23818[(8)]);
var inst_23797__$1 = (state_23818[(2)]);
var inst_23798__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23797__$1,(0),null);
var inst_23799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23797__$1,(1),null);
var inst_23800 = (inst_23798__$1 == null);
var state_23818__$1 = (function (){var statearr_23820 = state_23818;
(statearr_23820[(9)] = inst_23799);

(statearr_23820[(7)] = inst_23798__$1);

(statearr_23820[(8)] = inst_23797__$1);

return statearr_23820;
})();
if(cljs.core.truth_(inst_23800)){
var statearr_23821_23841 = state_23818__$1;
(statearr_23821_23841[(1)] = (8));

} else {
var statearr_23822_23842 = state_23818__$1;
(statearr_23822_23842[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23819 === (1))){
var inst_23787 = cljs.core.vec(chs);
var inst_23788 = inst_23787;
var state_23818__$1 = (function (){var statearr_23823 = state_23818;
(statearr_23823[(10)] = inst_23788);

return statearr_23823;
})();
var statearr_23824_23843 = state_23818__$1;
(statearr_23824_23843[(2)] = null);

(statearr_23824_23843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23819 === (4))){
var inst_23788 = (state_23818[(10)]);
var state_23818__$1 = state_23818;
return cljs.core.async.ioc_alts_BANG_(state_23818__$1,(7),inst_23788);
} else {
if((state_val_23819 === (6))){
var inst_23814 = (state_23818[(2)]);
var state_23818__$1 = state_23818;
var statearr_23825_23844 = state_23818__$1;
(statearr_23825_23844[(2)] = inst_23814);

(statearr_23825_23844[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23819 === (3))){
var inst_23816 = (state_23818[(2)]);
var state_23818__$1 = state_23818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23818__$1,inst_23816);
} else {
if((state_val_23819 === (2))){
var inst_23788 = (state_23818[(10)]);
var inst_23790 = cljs.core.count(inst_23788);
var inst_23791 = (inst_23790 > (0));
var state_23818__$1 = state_23818;
if(cljs.core.truth_(inst_23791)){
var statearr_23827_23845 = state_23818__$1;
(statearr_23827_23845[(1)] = (4));

} else {
var statearr_23828_23846 = state_23818__$1;
(statearr_23828_23846[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23819 === (11))){
var inst_23788 = (state_23818[(10)]);
var inst_23807 = (state_23818[(2)]);
var tmp23826 = inst_23788;
var inst_23788__$1 = tmp23826;
var state_23818__$1 = (function (){var statearr_23829 = state_23818;
(statearr_23829[(10)] = inst_23788__$1);

(statearr_23829[(11)] = inst_23807);

return statearr_23829;
})();
var statearr_23830_23847 = state_23818__$1;
(statearr_23830_23847[(2)] = null);

(statearr_23830_23847[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23819 === (9))){
var inst_23798 = (state_23818[(7)]);
var state_23818__$1 = state_23818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23818__$1,(11),out,inst_23798);
} else {
if((state_val_23819 === (5))){
var inst_23812 = cljs.core.async.close_BANG_(out);
var state_23818__$1 = state_23818;
var statearr_23831_23848 = state_23818__$1;
(statearr_23831_23848[(2)] = inst_23812);

(statearr_23831_23848[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23819 === (10))){
var inst_23810 = (state_23818[(2)]);
var state_23818__$1 = state_23818;
var statearr_23832_23849 = state_23818__$1;
(statearr_23832_23849[(2)] = inst_23810);

(statearr_23832_23849[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23819 === (8))){
var inst_23799 = (state_23818[(9)]);
var inst_23788 = (state_23818[(10)]);
var inst_23798 = (state_23818[(7)]);
var inst_23797 = (state_23818[(8)]);
var inst_23802 = (function (){var cs = inst_23788;
var vec__23793 = inst_23797;
var v = inst_23798;
var c = inst_23799;
return ((function (cs,vec__23793,v,c,inst_23799,inst_23788,inst_23798,inst_23797,state_val_23819,c__22439__auto___23840,out){
return (function (p1__23784_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23784_SHARP_);
});
;})(cs,vec__23793,v,c,inst_23799,inst_23788,inst_23798,inst_23797,state_val_23819,c__22439__auto___23840,out))
})();
var inst_23803 = cljs.core.filterv(inst_23802,inst_23788);
var inst_23788__$1 = inst_23803;
var state_23818__$1 = (function (){var statearr_23833 = state_23818;
(statearr_23833[(10)] = inst_23788__$1);

return statearr_23833;
})();
var statearr_23834_23850 = state_23818__$1;
(statearr_23834_23850[(2)] = null);

(statearr_23834_23850[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___23840,out))
;
return ((function (switch__22339__auto__,c__22439__auto___23840,out){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_23835 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23835[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_23835[(1)] = (1));

return statearr_23835;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_23818){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_23818);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e23836){if((e23836 instanceof Object)){
var ex__22343__auto__ = e23836;
var statearr_23837_23851 = state_23818;
(statearr_23837_23851[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23818);

return cljs.core.cst$kw$recur;
} else {
throw e23836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__23852 = state_23818;
state_23818 = G__23852;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_23818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_23818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___23840,out))
})();
var state__22441__auto__ = (function (){var statearr_23838 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_23838[(6)] = c__22439__auto___23840);

return statearr_23838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___23840,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23854 = arguments.length;
switch (G__23854) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22439__auto___23899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___23899,out){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___23899,out){
return (function (state_23878){
var state_val_23879 = (state_23878[(1)]);
if((state_val_23879 === (7))){
var inst_23860 = (state_23878[(7)]);
var inst_23860__$1 = (state_23878[(2)]);
var inst_23861 = (inst_23860__$1 == null);
var inst_23862 = cljs.core.not(inst_23861);
var state_23878__$1 = (function (){var statearr_23880 = state_23878;
(statearr_23880[(7)] = inst_23860__$1);

return statearr_23880;
})();
if(inst_23862){
var statearr_23881_23900 = state_23878__$1;
(statearr_23881_23900[(1)] = (8));

} else {
var statearr_23882_23901 = state_23878__$1;
(statearr_23882_23901[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23879 === (1))){
var inst_23855 = (0);
var state_23878__$1 = (function (){var statearr_23883 = state_23878;
(statearr_23883[(8)] = inst_23855);

return statearr_23883;
})();
var statearr_23884_23902 = state_23878__$1;
(statearr_23884_23902[(2)] = null);

(statearr_23884_23902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23879 === (4))){
var state_23878__$1 = state_23878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23878__$1,(7),ch);
} else {
if((state_val_23879 === (6))){
var inst_23873 = (state_23878[(2)]);
var state_23878__$1 = state_23878;
var statearr_23885_23903 = state_23878__$1;
(statearr_23885_23903[(2)] = inst_23873);

(statearr_23885_23903[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23879 === (3))){
var inst_23875 = (state_23878[(2)]);
var inst_23876 = cljs.core.async.close_BANG_(out);
var state_23878__$1 = (function (){var statearr_23886 = state_23878;
(statearr_23886[(9)] = inst_23875);

return statearr_23886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23878__$1,inst_23876);
} else {
if((state_val_23879 === (2))){
var inst_23855 = (state_23878[(8)]);
var inst_23857 = (inst_23855 < n);
var state_23878__$1 = state_23878;
if(cljs.core.truth_(inst_23857)){
var statearr_23887_23904 = state_23878__$1;
(statearr_23887_23904[(1)] = (4));

} else {
var statearr_23888_23905 = state_23878__$1;
(statearr_23888_23905[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23879 === (11))){
var inst_23855 = (state_23878[(8)]);
var inst_23865 = (state_23878[(2)]);
var inst_23866 = (inst_23855 + (1));
var inst_23855__$1 = inst_23866;
var state_23878__$1 = (function (){var statearr_23889 = state_23878;
(statearr_23889[(10)] = inst_23865);

(statearr_23889[(8)] = inst_23855__$1);

return statearr_23889;
})();
var statearr_23890_23906 = state_23878__$1;
(statearr_23890_23906[(2)] = null);

(statearr_23890_23906[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23879 === (9))){
var state_23878__$1 = state_23878;
var statearr_23891_23907 = state_23878__$1;
(statearr_23891_23907[(2)] = null);

(statearr_23891_23907[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23879 === (5))){
var state_23878__$1 = state_23878;
var statearr_23892_23908 = state_23878__$1;
(statearr_23892_23908[(2)] = null);

(statearr_23892_23908[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23879 === (10))){
var inst_23870 = (state_23878[(2)]);
var state_23878__$1 = state_23878;
var statearr_23893_23909 = state_23878__$1;
(statearr_23893_23909[(2)] = inst_23870);

(statearr_23893_23909[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23879 === (8))){
var inst_23860 = (state_23878[(7)]);
var state_23878__$1 = state_23878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23878__$1,(11),out,inst_23860);
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
});})(c__22439__auto___23899,out))
;
return ((function (switch__22339__auto__,c__22439__auto___23899,out){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_23894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23894[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_23894[(1)] = (1));

return statearr_23894;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_23878){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_23878);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e23895){if((e23895 instanceof Object)){
var ex__22343__auto__ = e23895;
var statearr_23896_23910 = state_23878;
(statearr_23896_23910[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23878);

return cljs.core.cst$kw$recur;
} else {
throw e23895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__23911 = state_23878;
state_23878 = G__23911;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_23878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_23878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___23899,out))
})();
var state__22441__auto__ = (function (){var statearr_23897 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_23897[(6)] = c__22439__auto___23899);

return statearr_23897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___23899,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23913 = (function (f,ch,meta23914){
this.f = f;
this.ch = ch;
this.meta23914 = meta23914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23915,meta23914__$1){
var self__ = this;
var _23915__$1 = this;
return (new cljs.core.async.t_cljs$core$async23913(self__.f,self__.ch,meta23914__$1));
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23915){
var self__ = this;
var _23915__$1 = this;
return self__.meta23914;
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23916 = (function (f,ch,meta23914,_,fn1,meta23917){
this.f = f;
this.ch = ch;
this.meta23914 = meta23914;
this._ = _;
this.fn1 = fn1;
this.meta23917 = meta23917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23918,meta23917__$1){
var self__ = this;
var _23918__$1 = this;
return (new cljs.core.async.t_cljs$core$async23916(self__.f,self__.ch,self__.meta23914,self__._,self__.fn1,meta23917__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23918){
var self__ = this;
var _23918__$1 = this;
return self__.meta23917;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23912_SHARP_){
var G__23919 = (((p1__23912_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23912_SHARP_) : self__.f.call(null,p1__23912_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23919) : f1.call(null,G__23919));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23916.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23914,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async23913], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta23917], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23916";

cljs.core.async.t_cljs$core$async23916.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async23916");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23916 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23916(f__$1,ch__$1,meta23914__$1,___$2,fn1__$1,meta23917){
return (new cljs.core.async.t_cljs$core$async23916(f__$1,ch__$1,meta23914__$1,___$2,fn1__$1,meta23917));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23916(self__.f,self__.ch,self__.meta23914,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7656__auto__ = ret;
if(cljs.core.truth_(and__7656__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__7656__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23920 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23920) : self__.f.call(null,G__23920));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23914], null);
});

cljs.core.async.t_cljs$core$async23913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23913";

cljs.core.async.t_cljs$core$async23913.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async23913");
});

cljs.core.async.__GT_t_cljs$core$async23913 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23913(f__$1,ch__$1,meta23914){
return (new cljs.core.async.t_cljs$core$async23913(f__$1,ch__$1,meta23914));
});

}

return (new cljs.core.async.t_cljs$core$async23913(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23921 = (function (f,ch,meta23922){
this.f = f;
this.ch = ch;
this.meta23922 = meta23922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23923,meta23922__$1){
var self__ = this;
var _23923__$1 = this;
return (new cljs.core.async.t_cljs$core$async23921(self__.f,self__.ch,meta23922__$1));
});

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23923){
var self__ = this;
var _23923__$1 = this;
return self__.meta23922;
});

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async23921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23922], null);
});

cljs.core.async.t_cljs$core$async23921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23921";

cljs.core.async.t_cljs$core$async23921.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async23921");
});

cljs.core.async.__GT_t_cljs$core$async23921 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23921(f__$1,ch__$1,meta23922){
return (new cljs.core.async.t_cljs$core$async23921(f__$1,ch__$1,meta23922));
});

}

return (new cljs.core.async.t_cljs$core$async23921(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23924 = (function (p,ch,meta23925){
this.p = p;
this.ch = ch;
this.meta23925 = meta23925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23926,meta23925__$1){
var self__ = this;
var _23926__$1 = this;
return (new cljs.core.async.t_cljs$core$async23924(self__.p,self__.ch,meta23925__$1));
});

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23926){
var self__ = this;
var _23926__$1 = this;
return self__.meta23925;
});

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23925], null);
});

cljs.core.async.t_cljs$core$async23924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23924";

cljs.core.async.t_cljs$core$async23924.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async23924");
});

cljs.core.async.__GT_t_cljs$core$async23924 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23924(p__$1,ch__$1,meta23925){
return (new cljs.core.async.t_cljs$core$async23924(p__$1,ch__$1,meta23925));
});

}

return (new cljs.core.async.t_cljs$core$async23924(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23928 = arguments.length;
switch (G__23928) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22439__auto___23968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___23968,out){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___23968,out){
return (function (state_23949){
var state_val_23950 = (state_23949[(1)]);
if((state_val_23950 === (7))){
var inst_23945 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23951_23969 = state_23949__$1;
(statearr_23951_23969[(2)] = inst_23945);

(statearr_23951_23969[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23950 === (1))){
var state_23949__$1 = state_23949;
var statearr_23952_23970 = state_23949__$1;
(statearr_23952_23970[(2)] = null);

(statearr_23952_23970[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23950 === (4))){
var inst_23931 = (state_23949[(7)]);
var inst_23931__$1 = (state_23949[(2)]);
var inst_23932 = (inst_23931__$1 == null);
var state_23949__$1 = (function (){var statearr_23953 = state_23949;
(statearr_23953[(7)] = inst_23931__$1);

return statearr_23953;
})();
if(cljs.core.truth_(inst_23932)){
var statearr_23954_23971 = state_23949__$1;
(statearr_23954_23971[(1)] = (5));

} else {
var statearr_23955_23972 = state_23949__$1;
(statearr_23955_23972[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23950 === (6))){
var inst_23931 = (state_23949[(7)]);
var inst_23936 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23931) : p.call(null,inst_23931));
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23936)){
var statearr_23956_23973 = state_23949__$1;
(statearr_23956_23973[(1)] = (8));

} else {
var statearr_23957_23974 = state_23949__$1;
(statearr_23957_23974[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23950 === (3))){
var inst_23947 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23949__$1,inst_23947);
} else {
if((state_val_23950 === (2))){
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23949__$1,(4),ch);
} else {
if((state_val_23950 === (11))){
var inst_23939 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23958_23975 = state_23949__$1;
(statearr_23958_23975[(2)] = inst_23939);

(statearr_23958_23975[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23950 === (9))){
var state_23949__$1 = state_23949;
var statearr_23959_23976 = state_23949__$1;
(statearr_23959_23976[(2)] = null);

(statearr_23959_23976[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23950 === (5))){
var inst_23934 = cljs.core.async.close_BANG_(out);
var state_23949__$1 = state_23949;
var statearr_23960_23977 = state_23949__$1;
(statearr_23960_23977[(2)] = inst_23934);

(statearr_23960_23977[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23950 === (10))){
var inst_23942 = (state_23949[(2)]);
var state_23949__$1 = (function (){var statearr_23961 = state_23949;
(statearr_23961[(8)] = inst_23942);

return statearr_23961;
})();
var statearr_23962_23978 = state_23949__$1;
(statearr_23962_23978[(2)] = null);

(statearr_23962_23978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23950 === (8))){
var inst_23931 = (state_23949[(7)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23949__$1,(11),out,inst_23931);
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
});})(c__22439__auto___23968,out))
;
return ((function (switch__22339__auto__,c__22439__auto___23968,out){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_23963 = [null,null,null,null,null,null,null,null,null];
(statearr_23963[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_23963[(1)] = (1));

return statearr_23963;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_23949){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_23949);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e23964){if((e23964 instanceof Object)){
var ex__22343__auto__ = e23964;
var statearr_23965_23979 = state_23949;
(statearr_23965_23979[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23949);

return cljs.core.cst$kw$recur;
} else {
throw e23964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__23980 = state_23949;
state_23949 = G__23980;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_23949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_23949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___23968,out))
})();
var state__22441__auto__ = (function (){var statearr_23966 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_23966[(6)] = c__22439__auto___23968);

return statearr_23966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___23968,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23982 = arguments.length;
switch (G__23982) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto__){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto__){
return (function (state_24045){
var state_val_24046 = (state_24045[(1)]);
if((state_val_24046 === (7))){
var inst_24041 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24047_24085 = state_24045__$1;
(statearr_24047_24085[(2)] = inst_24041);

(statearr_24047_24085[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (20))){
var inst_24011 = (state_24045[(7)]);
var inst_24022 = (state_24045[(2)]);
var inst_24023 = cljs.core.next(inst_24011);
var inst_23997 = inst_24023;
var inst_23998 = null;
var inst_23999 = (0);
var inst_24000 = (0);
var state_24045__$1 = (function (){var statearr_24048 = state_24045;
(statearr_24048[(8)] = inst_23998);

(statearr_24048[(9)] = inst_23997);

(statearr_24048[(10)] = inst_24022);

(statearr_24048[(11)] = inst_24000);

(statearr_24048[(12)] = inst_23999);

return statearr_24048;
})();
var statearr_24049_24086 = state_24045__$1;
(statearr_24049_24086[(2)] = null);

(statearr_24049_24086[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (1))){
var state_24045__$1 = state_24045;
var statearr_24050_24087 = state_24045__$1;
(statearr_24050_24087[(2)] = null);

(statearr_24050_24087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (4))){
var inst_23986 = (state_24045[(13)]);
var inst_23986__$1 = (state_24045[(2)]);
var inst_23987 = (inst_23986__$1 == null);
var state_24045__$1 = (function (){var statearr_24051 = state_24045;
(statearr_24051[(13)] = inst_23986__$1);

return statearr_24051;
})();
if(cljs.core.truth_(inst_23987)){
var statearr_24052_24088 = state_24045__$1;
(statearr_24052_24088[(1)] = (5));

} else {
var statearr_24053_24089 = state_24045__$1;
(statearr_24053_24089[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (15))){
var state_24045__$1 = state_24045;
var statearr_24057_24090 = state_24045__$1;
(statearr_24057_24090[(2)] = null);

(statearr_24057_24090[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (21))){
var state_24045__$1 = state_24045;
var statearr_24058_24091 = state_24045__$1;
(statearr_24058_24091[(2)] = null);

(statearr_24058_24091[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (13))){
var inst_23998 = (state_24045[(8)]);
var inst_23997 = (state_24045[(9)]);
var inst_24000 = (state_24045[(11)]);
var inst_23999 = (state_24045[(12)]);
var inst_24007 = (state_24045[(2)]);
var inst_24008 = (inst_24000 + (1));
var tmp24054 = inst_23998;
var tmp24055 = inst_23997;
var tmp24056 = inst_23999;
var inst_23997__$1 = tmp24055;
var inst_23998__$1 = tmp24054;
var inst_23999__$1 = tmp24056;
var inst_24000__$1 = inst_24008;
var state_24045__$1 = (function (){var statearr_24059 = state_24045;
(statearr_24059[(8)] = inst_23998__$1);

(statearr_24059[(9)] = inst_23997__$1);

(statearr_24059[(11)] = inst_24000__$1);

(statearr_24059[(14)] = inst_24007);

(statearr_24059[(12)] = inst_23999__$1);

return statearr_24059;
})();
var statearr_24060_24092 = state_24045__$1;
(statearr_24060_24092[(2)] = null);

(statearr_24060_24092[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (22))){
var state_24045__$1 = state_24045;
var statearr_24061_24093 = state_24045__$1;
(statearr_24061_24093[(2)] = null);

(statearr_24061_24093[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (6))){
var inst_23986 = (state_24045[(13)]);
var inst_23995 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23986) : f.call(null,inst_23986));
var inst_23996 = cljs.core.seq(inst_23995);
var inst_23997 = inst_23996;
var inst_23998 = null;
var inst_23999 = (0);
var inst_24000 = (0);
var state_24045__$1 = (function (){var statearr_24062 = state_24045;
(statearr_24062[(8)] = inst_23998);

(statearr_24062[(9)] = inst_23997);

(statearr_24062[(11)] = inst_24000);

(statearr_24062[(12)] = inst_23999);

return statearr_24062;
})();
var statearr_24063_24094 = state_24045__$1;
(statearr_24063_24094[(2)] = null);

(statearr_24063_24094[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (17))){
var inst_24011 = (state_24045[(7)]);
var inst_24015 = cljs.core.chunk_first(inst_24011);
var inst_24016 = cljs.core.chunk_rest(inst_24011);
var inst_24017 = cljs.core.count(inst_24015);
var inst_23997 = inst_24016;
var inst_23998 = inst_24015;
var inst_23999 = inst_24017;
var inst_24000 = (0);
var state_24045__$1 = (function (){var statearr_24064 = state_24045;
(statearr_24064[(8)] = inst_23998);

(statearr_24064[(9)] = inst_23997);

(statearr_24064[(11)] = inst_24000);

(statearr_24064[(12)] = inst_23999);

return statearr_24064;
})();
var statearr_24065_24095 = state_24045__$1;
(statearr_24065_24095[(2)] = null);

(statearr_24065_24095[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (3))){
var inst_24043 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24045__$1,inst_24043);
} else {
if((state_val_24046 === (12))){
var inst_24031 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24066_24096 = state_24045__$1;
(statearr_24066_24096[(2)] = inst_24031);

(statearr_24066_24096[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (2))){
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24045__$1,(4),in$);
} else {
if((state_val_24046 === (23))){
var inst_24039 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24067_24097 = state_24045__$1;
(statearr_24067_24097[(2)] = inst_24039);

(statearr_24067_24097[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (19))){
var inst_24026 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24068_24098 = state_24045__$1;
(statearr_24068_24098[(2)] = inst_24026);

(statearr_24068_24098[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (11))){
var inst_23997 = (state_24045[(9)]);
var inst_24011 = (state_24045[(7)]);
var inst_24011__$1 = cljs.core.seq(inst_23997);
var state_24045__$1 = (function (){var statearr_24069 = state_24045;
(statearr_24069[(7)] = inst_24011__$1);

return statearr_24069;
})();
if(inst_24011__$1){
var statearr_24070_24099 = state_24045__$1;
(statearr_24070_24099[(1)] = (14));

} else {
var statearr_24071_24100 = state_24045__$1;
(statearr_24071_24100[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (9))){
var inst_24033 = (state_24045[(2)]);
var inst_24034 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24045__$1 = (function (){var statearr_24072 = state_24045;
(statearr_24072[(15)] = inst_24033);

return statearr_24072;
})();
if(cljs.core.truth_(inst_24034)){
var statearr_24073_24101 = state_24045__$1;
(statearr_24073_24101[(1)] = (21));

} else {
var statearr_24074_24102 = state_24045__$1;
(statearr_24074_24102[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (5))){
var inst_23989 = cljs.core.async.close_BANG_(out);
var state_24045__$1 = state_24045;
var statearr_24075_24103 = state_24045__$1;
(statearr_24075_24103[(2)] = inst_23989);

(statearr_24075_24103[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (14))){
var inst_24011 = (state_24045[(7)]);
var inst_24013 = cljs.core.chunked_seq_QMARK_(inst_24011);
var state_24045__$1 = state_24045;
if(inst_24013){
var statearr_24076_24104 = state_24045__$1;
(statearr_24076_24104[(1)] = (17));

} else {
var statearr_24077_24105 = state_24045__$1;
(statearr_24077_24105[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (16))){
var inst_24029 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24078_24106 = state_24045__$1;
(statearr_24078_24106[(2)] = inst_24029);

(statearr_24078_24106[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24046 === (10))){
var inst_23998 = (state_24045[(8)]);
var inst_24000 = (state_24045[(11)]);
var inst_24005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23998,inst_24000);
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24045__$1,(13),out,inst_24005);
} else {
if((state_val_24046 === (18))){
var inst_24011 = (state_24045[(7)]);
var inst_24020 = cljs.core.first(inst_24011);
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24045__$1,(20),out,inst_24020);
} else {
if((state_val_24046 === (8))){
var inst_24000 = (state_24045[(11)]);
var inst_23999 = (state_24045[(12)]);
var inst_24002 = (inst_24000 < inst_23999);
var inst_24003 = inst_24002;
var state_24045__$1 = state_24045;
if(cljs.core.truth_(inst_24003)){
var statearr_24079_24107 = state_24045__$1;
(statearr_24079_24107[(1)] = (10));

} else {
var statearr_24080_24108 = state_24045__$1;
(statearr_24080_24108[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__22439__auto__))
;
return ((function (switch__22339__auto__,c__22439__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22340__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22340__auto____0 = (function (){
var statearr_24081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24081[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22340__auto__);

(statearr_24081[(1)] = (1));

return statearr_24081;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22340__auto____1 = (function (state_24045){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_24045);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e24082){if((e24082 instanceof Object)){
var ex__22343__auto__ = e24082;
var statearr_24083_24109 = state_24045;
(statearr_24083_24109[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24045);

return cljs.core.cst$kw$recur;
} else {
throw e24082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__24110 = state_24045;
state_24045 = G__24110;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22340__auto__ = function(state_24045){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22340__auto____1.call(this,state_24045);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22340__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22340__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto__))
})();
var state__22441__auto__ = (function (){var statearr_24084 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_24084[(6)] = c__22439__auto__);

return statearr_24084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto__))
);

return c__22439__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24112 = arguments.length;
switch (G__24112) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24115 = arguments.length;
switch (G__24115) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24118 = arguments.length;
switch (G__24118) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22439__auto___24165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___24165,out){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___24165,out){
return (function (state_24142){
var state_val_24143 = (state_24142[(1)]);
if((state_val_24143 === (7))){
var inst_24137 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24144_24166 = state_24142__$1;
(statearr_24144_24166[(2)] = inst_24137);

(statearr_24144_24166[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24143 === (1))){
var inst_24119 = null;
var state_24142__$1 = (function (){var statearr_24145 = state_24142;
(statearr_24145[(7)] = inst_24119);

return statearr_24145;
})();
var statearr_24146_24167 = state_24142__$1;
(statearr_24146_24167[(2)] = null);

(statearr_24146_24167[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24143 === (4))){
var inst_24122 = (state_24142[(8)]);
var inst_24122__$1 = (state_24142[(2)]);
var inst_24123 = (inst_24122__$1 == null);
var inst_24124 = cljs.core.not(inst_24123);
var state_24142__$1 = (function (){var statearr_24147 = state_24142;
(statearr_24147[(8)] = inst_24122__$1);

return statearr_24147;
})();
if(inst_24124){
var statearr_24148_24168 = state_24142__$1;
(statearr_24148_24168[(1)] = (5));

} else {
var statearr_24149_24169 = state_24142__$1;
(statearr_24149_24169[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24143 === (6))){
var state_24142__$1 = state_24142;
var statearr_24150_24170 = state_24142__$1;
(statearr_24150_24170[(2)] = null);

(statearr_24150_24170[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24143 === (3))){
var inst_24139 = (state_24142[(2)]);
var inst_24140 = cljs.core.async.close_BANG_(out);
var state_24142__$1 = (function (){var statearr_24151 = state_24142;
(statearr_24151[(9)] = inst_24139);

return statearr_24151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24142__$1,inst_24140);
} else {
if((state_val_24143 === (2))){
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24142__$1,(4),ch);
} else {
if((state_val_24143 === (11))){
var inst_24122 = (state_24142[(8)]);
var inst_24131 = (state_24142[(2)]);
var inst_24119 = inst_24122;
var state_24142__$1 = (function (){var statearr_24152 = state_24142;
(statearr_24152[(10)] = inst_24131);

(statearr_24152[(7)] = inst_24119);

return statearr_24152;
})();
var statearr_24153_24171 = state_24142__$1;
(statearr_24153_24171[(2)] = null);

(statearr_24153_24171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24143 === (9))){
var inst_24122 = (state_24142[(8)]);
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24142__$1,(11),out,inst_24122);
} else {
if((state_val_24143 === (5))){
var inst_24122 = (state_24142[(8)]);
var inst_24119 = (state_24142[(7)]);
var inst_24126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24122,inst_24119);
var state_24142__$1 = state_24142;
if(inst_24126){
var statearr_24155_24172 = state_24142__$1;
(statearr_24155_24172[(1)] = (8));

} else {
var statearr_24156_24173 = state_24142__$1;
(statearr_24156_24173[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24143 === (10))){
var inst_24134 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24157_24174 = state_24142__$1;
(statearr_24157_24174[(2)] = inst_24134);

(statearr_24157_24174[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24143 === (8))){
var inst_24119 = (state_24142[(7)]);
var tmp24154 = inst_24119;
var inst_24119__$1 = tmp24154;
var state_24142__$1 = (function (){var statearr_24158 = state_24142;
(statearr_24158[(7)] = inst_24119__$1);

return statearr_24158;
})();
var statearr_24159_24175 = state_24142__$1;
(statearr_24159_24175[(2)] = null);

(statearr_24159_24175[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___24165,out))
;
return ((function (switch__22339__auto__,c__22439__auto___24165,out){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_24160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24160[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_24160[(1)] = (1));

return statearr_24160;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_24142){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_24142);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e24161){if((e24161 instanceof Object)){
var ex__22343__auto__ = e24161;
var statearr_24162_24176 = state_24142;
(statearr_24162_24176[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24142);

return cljs.core.cst$kw$recur;
} else {
throw e24161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__24177 = state_24142;
state_24142 = G__24177;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_24142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_24142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___24165,out))
})();
var state__22441__auto__ = (function (){var statearr_24163 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_24163[(6)] = c__22439__auto___24165);

return statearr_24163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___24165,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24179 = arguments.length;
switch (G__24179) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22439__auto___24245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___24245,out){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___24245,out){
return (function (state_24217){
var state_val_24218 = (state_24217[(1)]);
if((state_val_24218 === (7))){
var inst_24213 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24219_24246 = state_24217__$1;
(statearr_24219_24246[(2)] = inst_24213);

(statearr_24219_24246[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (1))){
var inst_24180 = (new Array(n));
var inst_24181 = inst_24180;
var inst_24182 = (0);
var state_24217__$1 = (function (){var statearr_24220 = state_24217;
(statearr_24220[(7)] = inst_24182);

(statearr_24220[(8)] = inst_24181);

return statearr_24220;
})();
var statearr_24221_24247 = state_24217__$1;
(statearr_24221_24247[(2)] = null);

(statearr_24221_24247[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (4))){
var inst_24185 = (state_24217[(9)]);
var inst_24185__$1 = (state_24217[(2)]);
var inst_24186 = (inst_24185__$1 == null);
var inst_24187 = cljs.core.not(inst_24186);
var state_24217__$1 = (function (){var statearr_24222 = state_24217;
(statearr_24222[(9)] = inst_24185__$1);

return statearr_24222;
})();
if(inst_24187){
var statearr_24223_24248 = state_24217__$1;
(statearr_24223_24248[(1)] = (5));

} else {
var statearr_24224_24249 = state_24217__$1;
(statearr_24224_24249[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (15))){
var inst_24207 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24225_24250 = state_24217__$1;
(statearr_24225_24250[(2)] = inst_24207);

(statearr_24225_24250[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (13))){
var state_24217__$1 = state_24217;
var statearr_24226_24251 = state_24217__$1;
(statearr_24226_24251[(2)] = null);

(statearr_24226_24251[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (6))){
var inst_24182 = (state_24217[(7)]);
var inst_24203 = (inst_24182 > (0));
var state_24217__$1 = state_24217;
if(cljs.core.truth_(inst_24203)){
var statearr_24227_24252 = state_24217__$1;
(statearr_24227_24252[(1)] = (12));

} else {
var statearr_24228_24253 = state_24217__$1;
(statearr_24228_24253[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (3))){
var inst_24215 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24217__$1,inst_24215);
} else {
if((state_val_24218 === (12))){
var inst_24181 = (state_24217[(8)]);
var inst_24205 = cljs.core.vec(inst_24181);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24217__$1,(15),out,inst_24205);
} else {
if((state_val_24218 === (2))){
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24217__$1,(4),ch);
} else {
if((state_val_24218 === (11))){
var inst_24197 = (state_24217[(2)]);
var inst_24198 = (new Array(n));
var inst_24181 = inst_24198;
var inst_24182 = (0);
var state_24217__$1 = (function (){var statearr_24229 = state_24217;
(statearr_24229[(10)] = inst_24197);

(statearr_24229[(7)] = inst_24182);

(statearr_24229[(8)] = inst_24181);

return statearr_24229;
})();
var statearr_24230_24254 = state_24217__$1;
(statearr_24230_24254[(2)] = null);

(statearr_24230_24254[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (9))){
var inst_24181 = (state_24217[(8)]);
var inst_24195 = cljs.core.vec(inst_24181);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24217__$1,(11),out,inst_24195);
} else {
if((state_val_24218 === (5))){
var inst_24190 = (state_24217[(11)]);
var inst_24185 = (state_24217[(9)]);
var inst_24182 = (state_24217[(7)]);
var inst_24181 = (state_24217[(8)]);
var inst_24189 = (inst_24181[inst_24182] = inst_24185);
var inst_24190__$1 = (inst_24182 + (1));
var inst_24191 = (inst_24190__$1 < n);
var state_24217__$1 = (function (){var statearr_24231 = state_24217;
(statearr_24231[(11)] = inst_24190__$1);

(statearr_24231[(12)] = inst_24189);

return statearr_24231;
})();
if(cljs.core.truth_(inst_24191)){
var statearr_24232_24255 = state_24217__$1;
(statearr_24232_24255[(1)] = (8));

} else {
var statearr_24233_24256 = state_24217__$1;
(statearr_24233_24256[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (14))){
var inst_24210 = (state_24217[(2)]);
var inst_24211 = cljs.core.async.close_BANG_(out);
var state_24217__$1 = (function (){var statearr_24235 = state_24217;
(statearr_24235[(13)] = inst_24210);

return statearr_24235;
})();
var statearr_24236_24257 = state_24217__$1;
(statearr_24236_24257[(2)] = inst_24211);

(statearr_24236_24257[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (10))){
var inst_24201 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24237_24258 = state_24217__$1;
(statearr_24237_24258[(2)] = inst_24201);

(statearr_24237_24258[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24218 === (8))){
var inst_24190 = (state_24217[(11)]);
var inst_24181 = (state_24217[(8)]);
var tmp24234 = inst_24181;
var inst_24181__$1 = tmp24234;
var inst_24182 = inst_24190;
var state_24217__$1 = (function (){var statearr_24238 = state_24217;
(statearr_24238[(7)] = inst_24182);

(statearr_24238[(8)] = inst_24181__$1);

return statearr_24238;
})();
var statearr_24239_24259 = state_24217__$1;
(statearr_24239_24259[(2)] = null);

(statearr_24239_24259[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___24245,out))
;
return ((function (switch__22339__auto__,c__22439__auto___24245,out){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_24240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24240[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_24240[(1)] = (1));

return statearr_24240;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_24217){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_24217);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e24241){if((e24241 instanceof Object)){
var ex__22343__auto__ = e24241;
var statearr_24242_24260 = state_24217;
(statearr_24242_24260[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24217);

return cljs.core.cst$kw$recur;
} else {
throw e24241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__24261 = state_24217;
state_24217 = G__24261;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_24217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_24217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___24245,out))
})();
var state__22441__auto__ = (function (){var statearr_24243 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_24243[(6)] = c__22439__auto___24245);

return statearr_24243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___24245,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24263 = arguments.length;
switch (G__24263) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22439__auto___24333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22439__auto___24333,out){
return (function (){
var f__22440__auto__ = (function (){var switch__22339__auto__ = ((function (c__22439__auto___24333,out){
return (function (state_24305){
var state_val_24306 = (state_24305[(1)]);
if((state_val_24306 === (7))){
var inst_24301 = (state_24305[(2)]);
var state_24305__$1 = state_24305;
var statearr_24307_24334 = state_24305__$1;
(statearr_24307_24334[(2)] = inst_24301);

(statearr_24307_24334[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (1))){
var inst_24264 = [];
var inst_24265 = inst_24264;
var inst_24266 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_24305__$1 = (function (){var statearr_24308 = state_24305;
(statearr_24308[(7)] = inst_24266);

(statearr_24308[(8)] = inst_24265);

return statearr_24308;
})();
var statearr_24309_24335 = state_24305__$1;
(statearr_24309_24335[(2)] = null);

(statearr_24309_24335[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (4))){
var inst_24269 = (state_24305[(9)]);
var inst_24269__$1 = (state_24305[(2)]);
var inst_24270 = (inst_24269__$1 == null);
var inst_24271 = cljs.core.not(inst_24270);
var state_24305__$1 = (function (){var statearr_24310 = state_24305;
(statearr_24310[(9)] = inst_24269__$1);

return statearr_24310;
})();
if(inst_24271){
var statearr_24311_24336 = state_24305__$1;
(statearr_24311_24336[(1)] = (5));

} else {
var statearr_24312_24337 = state_24305__$1;
(statearr_24312_24337[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (15))){
var inst_24295 = (state_24305[(2)]);
var state_24305__$1 = state_24305;
var statearr_24313_24338 = state_24305__$1;
(statearr_24313_24338[(2)] = inst_24295);

(statearr_24313_24338[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (13))){
var state_24305__$1 = state_24305;
var statearr_24314_24339 = state_24305__$1;
(statearr_24314_24339[(2)] = null);

(statearr_24314_24339[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (6))){
var inst_24265 = (state_24305[(8)]);
var inst_24290 = inst_24265.length;
var inst_24291 = (inst_24290 > (0));
var state_24305__$1 = state_24305;
if(cljs.core.truth_(inst_24291)){
var statearr_24315_24340 = state_24305__$1;
(statearr_24315_24340[(1)] = (12));

} else {
var statearr_24316_24341 = state_24305__$1;
(statearr_24316_24341[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (3))){
var inst_24303 = (state_24305[(2)]);
var state_24305__$1 = state_24305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24305__$1,inst_24303);
} else {
if((state_val_24306 === (12))){
var inst_24265 = (state_24305[(8)]);
var inst_24293 = cljs.core.vec(inst_24265);
var state_24305__$1 = state_24305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24305__$1,(15),out,inst_24293);
} else {
if((state_val_24306 === (2))){
var state_24305__$1 = state_24305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24305__$1,(4),ch);
} else {
if((state_val_24306 === (11))){
var inst_24269 = (state_24305[(9)]);
var inst_24273 = (state_24305[(10)]);
var inst_24283 = (state_24305[(2)]);
var inst_24284 = [];
var inst_24285 = inst_24284.push(inst_24269);
var inst_24265 = inst_24284;
var inst_24266 = inst_24273;
var state_24305__$1 = (function (){var statearr_24317 = state_24305;
(statearr_24317[(11)] = inst_24285);

(statearr_24317[(7)] = inst_24266);

(statearr_24317[(8)] = inst_24265);

(statearr_24317[(12)] = inst_24283);

return statearr_24317;
})();
var statearr_24318_24342 = state_24305__$1;
(statearr_24318_24342[(2)] = null);

(statearr_24318_24342[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (9))){
var inst_24265 = (state_24305[(8)]);
var inst_24281 = cljs.core.vec(inst_24265);
var state_24305__$1 = state_24305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24305__$1,(11),out,inst_24281);
} else {
if((state_val_24306 === (5))){
var inst_24269 = (state_24305[(9)]);
var inst_24266 = (state_24305[(7)]);
var inst_24273 = (state_24305[(10)]);
var inst_24273__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24269) : f.call(null,inst_24269));
var inst_24274 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24273__$1,inst_24266);
var inst_24275 = cljs.core.keyword_identical_QMARK_(inst_24266,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_24276 = (inst_24274) || (inst_24275);
var state_24305__$1 = (function (){var statearr_24319 = state_24305;
(statearr_24319[(10)] = inst_24273__$1);

return statearr_24319;
})();
if(cljs.core.truth_(inst_24276)){
var statearr_24320_24343 = state_24305__$1;
(statearr_24320_24343[(1)] = (8));

} else {
var statearr_24321_24344 = state_24305__$1;
(statearr_24321_24344[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (14))){
var inst_24298 = (state_24305[(2)]);
var inst_24299 = cljs.core.async.close_BANG_(out);
var state_24305__$1 = (function (){var statearr_24323 = state_24305;
(statearr_24323[(13)] = inst_24298);

return statearr_24323;
})();
var statearr_24324_24345 = state_24305__$1;
(statearr_24324_24345[(2)] = inst_24299);

(statearr_24324_24345[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (10))){
var inst_24288 = (state_24305[(2)]);
var state_24305__$1 = state_24305;
var statearr_24325_24346 = state_24305__$1;
(statearr_24325_24346[(2)] = inst_24288);

(statearr_24325_24346[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24306 === (8))){
var inst_24269 = (state_24305[(9)]);
var inst_24265 = (state_24305[(8)]);
var inst_24273 = (state_24305[(10)]);
var inst_24278 = inst_24265.push(inst_24269);
var tmp24322 = inst_24265;
var inst_24265__$1 = tmp24322;
var inst_24266 = inst_24273;
var state_24305__$1 = (function (){var statearr_24326 = state_24305;
(statearr_24326[(7)] = inst_24266);

(statearr_24326[(8)] = inst_24265__$1);

(statearr_24326[(14)] = inst_24278);

return statearr_24326;
})();
var statearr_24327_24347 = state_24305__$1;
(statearr_24327_24347[(2)] = null);

(statearr_24327_24347[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__22439__auto___24333,out))
;
return ((function (switch__22339__auto__,c__22439__auto___24333,out){
return (function() {
var cljs$core$async$state_machine__22340__auto__ = null;
var cljs$core$async$state_machine__22340__auto____0 = (function (){
var statearr_24328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24328[(0)] = cljs$core$async$state_machine__22340__auto__);

(statearr_24328[(1)] = (1));

return statearr_24328;
});
var cljs$core$async$state_machine__22340__auto____1 = (function (state_24305){
while(true){
var ret_value__22341__auto__ = (function (){try{while(true){
var result__22342__auto__ = switch__22339__auto__(state_24305);
if(cljs.core.keyword_identical_QMARK_(result__22342__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22342__auto__;
}
break;
}
}catch (e24329){if((e24329 instanceof Object)){
var ex__22343__auto__ = e24329;
var statearr_24330_24348 = state_24305;
(statearr_24330_24348[(5)] = ex__22343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24305);

return cljs.core.cst$kw$recur;
} else {
throw e24329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22341__auto__,cljs.core.cst$kw$recur)){
var G__24349 = state_24305;
state_24305 = G__24349;
continue;
} else {
return ret_value__22341__auto__;
}
break;
}
});
cljs$core$async$state_machine__22340__auto__ = function(state_24305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22340__auto____1.call(this,state_24305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22340__auto____0;
cljs$core$async$state_machine__22340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22340__auto____1;
return cljs$core$async$state_machine__22340__auto__;
})()
;})(switch__22339__auto__,c__22439__auto___24333,out))
})();
var state__22441__auto__ = (function (){var statearr_24331 = (f__22440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22440__auto__.cljs$core$IFn$_invoke$arity$0() : f__22440__auto__.call(null));
(statearr_24331[(6)] = c__22439__auto___24333);

return statearr_24331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22441__auto__);
});})(c__22439__auto___24333,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

